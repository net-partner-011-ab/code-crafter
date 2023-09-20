export default function Text({ title, paragraph }) {
  return (
    <section className="section has-background-dark">
      <div className="container">
        <h2 className="title has-text-white">{title}</h2>
        <p className="text-paragraph has-text-light">
          {paragraph}
        </p>
      </div>
    </section>
  );
}
