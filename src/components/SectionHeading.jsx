export default function SectionHeading({ kicker, title, align = "left" }) {
  return (
    <div className={`section-heading ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
    </div>
  );
}
