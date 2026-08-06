"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Icon } from "@/components/icon";

function getDisplayDate() {
  return new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

export function ReviewSection({ reviews: initialReviews }) {
  const [reviews, setReviews] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    rating: "5",
    carModel: "",
    problem: "",
    saved: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
    setMessage("");
  };

  const handleRatingSelect = (value) => {
    setForm((prev) => ({ ...prev, rating: String(value) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.carModel.trim() || !form.problem.trim() || !form.saved.trim()) {
      setError("Please complete all fields before submitting.");
      return;
    }

    const newReview = {
      name: form.name.trim(),
      rating: Number(form.rating),
      carModel: form.carModel.trim(),
      problem: form.problem.trim(),
      saved: form.saved.trim(),
      photos: [], // Simplified for the clean form
      date: getDisplayDate()
    };

    setReviews((prev) => [newReview, ...prev]);
    setForm({
      name: "",
      rating: "5",
      carModel: "",
      problem: "",
      saved: "",
    });
    setError("");
    setMessage("Review submitted successfully. Thank you!");
    setTimeout(() => {
      setShowForm(false);
      setMessage("");
    }, 2500);
  };

  if (!reviews || reviews.length === 0) return null;

  return (
    <div className="review-section">
      <div className="review-summary">
        <div className="review-summary-card card">
          <strong>150+ verified buyers</strong>
          <span>Real inspection feedback from customers who used the report before handover to avoid hidden costs.</span>
        </div>
      </div>

      <div className="review-grid-clean">
        {reviews.map((review, index) => (
          <article className="review-card card" key={`${review.name}-${index}`}>
            <div className="review-card-head">
              <div>
                <div className="review-title-row">
                  <h3>{review.name}</h3>
                  <span className="review-badge">Verified buyer</span>
                </div>
                <p className="review-meta">
                  {review.carModel} {review.city ? ` · ${review.city}` : ""}
                </p>
              </div>
              <span className="review-rating" aria-label={`${review.rating} out of 5 stars`}>
                {review.rating} ★
              </span>
            </div>

            {review.photos && review.photos.length > 0 && (
              <div className="review-photos">
                {review.photos.slice(0, 3).map((photo, photoIndex) => (
                  <div className="review-photo" key={`${photo}-${photoIndex}`}>
                    <Image alt={`Proof photo ${photoIndex + 1}`} fill src={photo} className="review-photo-image" />
                  </div>
                ))}
              </div>
            )}

            <div className="review-details">
              <div className="review-highlight problem">
                <Icon name="alert" className="review-highlight-icon" />
                <div>
                  <strong>Problem Found</strong>
                  <p>{review.problem}</p>
                </div>
              </div>
              <div className="review-highlight saved">
                <Icon name="check" className="review-highlight-icon" />
                <div>
                  <strong>Customer Saved</strong>
                  <p>{review.saved}</p>
                </div>
              </div>
              <p className="review-date">{review.date}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Write a Review Section */}
      <div className="review-action-area" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 0', borderTop: '1px solid rgba(15,31,19,0.08)' }}>
        {!showForm ? (
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '16px' }}>Have you used our inspection service?</h3>
            <button className="button button-solid" onClick={() => setShowForm(true)} style={{ padding: '14px 32px', fontSize: '1.05rem', boxShadow: '0 8px 20px rgba(26,61,32,0.15)' }}>
              <Icon name="user" className="button-icon" />
              Write a Review
            </button>
          </div>
        ) : (
          <form className="review-form card" onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px', padding: '32px' }}>
            <div className="review-form-header" style={{ marginBottom: '24px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '8px' }}>Share Your Experience</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Help other buyers by sharing what we found during your inspection.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', fontWeight: '600' }}>
                Name
                <input name="name" type="text" value={form.name} onChange={handleChange} required style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(15,31,19,0.1)' }} />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', fontWeight: '600' }}>
                Car Model
                <input name="carModel" type="text" value={form.carModel} onChange={handleChange} required placeholder="e.g., Hyundai Creta" style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(15,31,19,0.1)' }} />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', fontWeight: '600' }}>
                Problem Found
                <textarea name="problem" value={form.problem} onChange={handleChange} required rows={2} placeholder="What issue did the inspector catch?" style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(15,31,19,0.1)', fontFamily: 'inherit' }} />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', fontWeight: '600' }}>
                Customer Saved
                <input name="saved" type="text" value={form.saved} onChange={handleChange} required placeholder="e.g., Dealer fixed it, Saved ₹10,000" style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(15,31,19,0.1)' }} />
              </label>

              <div className="review-rating-picker" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '8px' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Rating</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      className={Number(form.rating) === value ? "rating-pill active" : "rating-pill"}
                      onClick={() => handleRatingSelect(value)}
                      type="button"
                      style={{ padding: '6px 12px', borderRadius: '20px', border: '1px solid rgba(15,31,19,0.1)', background: Number(form.rating) === value ? 'var(--green-700)' : 'transparent', color: Number(form.rating) === value ? '#fff' : 'inherit', cursor: 'pointer' }}
                    >
                      {value}★
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {error && <p style={{ color: '#dc2626', fontSize: '0.9rem', marginTop: '16px' }}>{error}</p>}
            {message && <p style={{ color: '#16a34a', fontSize: '0.9rem', marginTop: '16px' }}>{message}</p>}

            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button className="button button-solid" type="submit" style={{ flex: 1 }}>Submit Review</button>
              <button className="button button-outline" type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
