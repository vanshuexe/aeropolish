import content from "../config/company";

const growthAreas = ["Manufacturing Expansion", "Technology & R&D", "Working Capital", "Market Expansion", "Brand & Distribution", "Global Expansion"];

export default function CompanyContent({ kind = "company", compact = false }) {
  const sections = compact ? content.company.slice(0, 1) : content[kind];
  return (
    <div className="company-content">
      {sections.map((section, index) => (
        <section className="company-section" key={section.title}>
          <span className="company-eyebrow">{String(index + 1).padStart(2, "0")} / AEROPOLISH</span>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph, i) => {
            const area = growthAreas.find((label) => paragraph.startsWith(label));
            return area ? (
              <div className="growth-area" key={i}>
                <h3>{area}</h3><p>{paragraph.slice(area.length)}</p>
              </div>
            ) : <p key={i}>{paragraph}</p>;
          })}
        </section>
      ))}
    </div>
  );
}
