export function InspectionSectionCard({ section }) {
  return (
    <article className="inspection-card">
      <div className="inspection-card-head">
        <span className="inspection-card-number">{section.number}</span>
        <div>
          <p className="inspection-card-type">{section.type}</p>
          <h3>{section.title}</h3>
        </div>
      </div>
      <p className="inspection-card-description">{section.description}</p>
      <div className="inspection-card-meta">
        {section.graded && <strong>{section.gradedCount} graded checks</strong>}
        <span>
          {section.graded
            ? "Applicable checks are marked OK, Minor Issue or Major Issue."
            : "Documented in the inspection report."}
        </span>
      </div>
      {section.items.length > 0 && <details className="inspection-card-details">
        <summary>
          <span>{section.graded ? "View checks" : "View details"}</span>
          <span>{section.items.length} items</span>
        </summary>
        <ul className="inspection-card-list">
          {section.items.map((item) => (
            <li key={item}>{item}{section.referenceItems?.includes(item) && " (recorded)"}</li>
          ))}
        </ul>
      </details>}
    </article>
  );
}
