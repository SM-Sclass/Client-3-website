export function FaqSection({ id = "faq", eyebrow, title, intro, faqs }) {
  return (
    <section className="section-space" id={id}>
      <div className="container">
        <div className="section-heading">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={index} name={`faq-${id}`}>
              <summary>
                <span>{faq.q}</span>
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
