"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function sanitizePhotoUrls(value) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 6);
}

function readFilesAsDataUrls(files) {
  return Promise.all(
    files.map(
      (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result));
          reader.onerror = () => reject(new Error("Failed to read file."));
          reader.readAsDataURL(file);
        })
    )
  );
}

function getDisplayDate() {
  return new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

export function ReviewSection({ initialReviews = [] }) {
  const [reviews, setReviews] = useState(initialReviews);
  const [form, setForm] = useState({
    name: "",
    rating: "5",
    carModel: "",
    city: "",
    problem: "",
    cost: "",
    saved: "",
    photoUrls: "",
    photoFiles: [],
    photoPreviews: []
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.localStorage.removeItem("checkmate-reviews");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (reviews.length > 0) {
      window.localStorage.setItem("checkmate-reviews", JSON.stringify(reviews));
    }
  }, [reviews]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
    setMessage("");
  };

  const handleRatingSelect = (value) => {
    setForm((prev) => ({ ...prev, rating: String(value) }));
    setError("");
    setMessage("");
  };

  const handleFileChange = async (event) => {
    const files = event.target.files ? Array.from(event.target.files).slice(0, 6) : [];
    if (files.length === 0) {
      setForm((prev) => ({ ...prev, photoFiles: [], photoPreviews: [] }));
      return;
    }

    try {
      const previews = await readFilesAsDataUrls(files);
      setForm((prev) => ({ ...prev, photoFiles: files, photoPreviews: previews }));
      setError("");
      setMessage("");
    } catch {
      setError("Unable to read one or more selected images.");
    }
  };

  const handleDeleteReview = (indexToDelete) => {
    setReviews((prev) => prev.filter((_, index) => index !== indexToDelete));
    setError("");
    setMessage("Review deleted successfully.");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.carModel.trim() || !form.problem.trim() || !form.cost.trim() || !form.saved.trim()) {
      setError("Please complete every required field before submitting the review.");
      return;
    }

    const photos = sanitizePhotoUrls(form.photoUrls);
    const reviewPhotos = [...photos, ...form.photoPreviews].slice(0, 6);
    const review = {
      name: form.name.trim(),
      rating: Number(form.rating),
      carModel: form.carModel.trim(),
      city: form.city.trim(),
      problem: form.problem.trim(),
      cost: form.cost.trim(),
      saved: form.saved.trim(),
      photos: reviewPhotos,
      date: getDisplayDate()
    };

    setReviews((prev) => [review, ...prev]);
    setForm({
      name: "",
      rating: "5",
      carModel: "",
      city: "",
      problem: "",
      cost: "",
      saved: "",
      photoUrls: "",
      photoFiles: [],
      photoPreviews: []
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setError("");
    setMessage("Review submitted successfully. It is now visible to buyers.");
  };

  const photoPreview = [...sanitizePhotoUrls(form.photoUrls), ...form.photoPreviews].slice(0, 4);

  return (
    <div className="review-section">
      <div className="review-summary">
        <div className="review-summary-card">
          <strong>{reviews.length}+ buyer stories</strong>
          <span>Real inspection feedback from customers who used the report before handover.</span>
        </div>
      </div>

      <div className="review-grid">
        <div className="review-cards">
          {reviews.length === 0 ? (
            <div className="review-empty-state">
              <h3>No reviews yet</h3>
              <p>Be the first customer to share a real inspection outcome and help other buyers.</p>
            </div>
          ) : (
            reviews.map((review, index) => (
              <article className="review-card" key={`${review.name}-${index}`}>
                <div className="review-card-head">
                  <div>
                    <div className="review-title-row">
                      <h3>{review.name}</h3>
                      <span className="review-badge">Verified buyer</span>
                    </div>
                    <p className="review-meta">
                      {review.carModel}
                      {review.city ? ` · ${review.city}` : ""}
                    </p>
                  </div>
                  <span className="review-rating" aria-label={`${review.rating} out of 5 stars`}>
                    {review.rating} ★
                  </span>
                </div>

                <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={index < review.rating ? "star filled" : "star"}>
                      ★
                    </span>
                  ))}
                </div>

                <div className="review-photos">
                  {review.photos.slice(0, 4).map((photo, photoIndex) => {
                    const isRemote = /^https?:\/\//.test(photo);
                    const isDataUrl = /^data:/i.test(photo);

                    return (
                      <div className="review-photo" key={`${photo}-${photoIndex}`}>
                        {isRemote || isDataUrl ? (
                          <img
                            alt={`Proof photo ${photoIndex + 1}`}
                            src={photo}
                            className="review-photo-image"
                            loading="lazy"
                          />
                        ) : (
                          <Image alt={`Proof photo ${photoIndex + 1}`} fill src={photo} />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="review-details">
                  <p className="review-problem">
                    <strong>Problem found:</strong> {review.problem}
                  </p>
                  <p className="review-cost">
                    <strong>Estimated repair cost:</strong> {review.cost}
                  </p>
                  <p className="review-saved">
                    <strong>Customer saved from future issues:</strong> {review.saved}
                  </p>
                  <p className="review-date">{review.date}</p>
                  <button
                    className="button button-outline review-delete"
                    type="button"
                    onClick={() => handleDeleteReview(index)}
                  >
                    Delete review
                  </button>
                </div>
              </article>
            ))
          )}
        </div>

        <form className="review-form" onSubmit={handleSubmit}>
          <div className="review-form-header">
            <h3>Add a review</h3>
            <p>Share the inspection details, the problem found, and how the buyer saved money or risk.</p>
          </div>

          <label>
            Name
            <input name="name" type="text" value={form.name} onChange={handleChange} required />
          </label>

          <label>
            Car model
            <input name="carModel" type="text" value={form.carModel} onChange={handleChange} required />
          </label>

          <label>
            Dealer city (optional)
            <input name="city" type="text" value={form.city} onChange={handleChange} />
          </label>

          <label>
            Problem found
            <textarea name="problem" value={form.problem} onChange={handleChange} required rows={3} />
          </label>

          <label>
            Estimated repair cost
            <input name="cost" type="text" value={form.cost} onChange={handleChange} required />
          </label>

          <label>
            Customer saved from future issues
            <textarea name="saved" value={form.saved} onChange={handleChange} required rows={2} />
          </label>

          <label>
            Proof image URLs (optional)
            <input
              name="photoUrls"
              type="text"
              value={form.photoUrls}
              onChange={handleChange}
              placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
            />
          </label>

          <label>
            Upload review photos (optional)
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
          </label>

          <div className="review-rating-picker">
            <span>Rating</span>
            <div className="review-rating-options">
              {Array.from({ length: 5 }, (_, index) => {
                const value = index + 1;
                return (
                  <button
                    key={value}
                    className={Number(form.rating) === value ? "rating-pill active" : "rating-pill"}
                    onClick={() => handleRatingSelect(value)}
                    type="button"
                  >
                    {value}★
                  </button>
                );
              })}
            </div>
          </div>

          {photoPreview.length > 0 ? (
            <div className="review-preview-grid">
              {photoPreview.map((photo, index) => {
                const isRemote = /^https?:\/\//.test(photo);
                const isDataUrl = /^data:/i.test(photo);

                return (
                  <div className="review-preview-item" key={`${photo}-${index}`}>
                    {isRemote || isDataUrl ? (
                      <img
                        alt={`Preview ${index + 1}`}
                        src={photo}
                        className="review-photo-image"
                        loading="lazy"
                      />
                    ) : (
                      <Image alt={`Preview ${index + 1}`} fill src={photo} />
                    )}
                  </div>
                );
              })}
            </div>
          ) : null}

          {error ? <p className="review-message review-message-error">{error}</p> : null}
          {message ? <p className="review-message">{message}</p> : null}

          <button className="button button-solid" type="submit">
            Submit review
          </button>
        </form>
      </div>
    </div>
  );
}
