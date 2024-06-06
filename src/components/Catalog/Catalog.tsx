import "@/styles/components/Catalog.scss";

export default function Catalog() {
  return (
    <>
      <main>
        <section className="catalog-container">
          <aside>
            <div className="art-filters"></div>
          </aside>
          <div className="all-pics">
            <div className="container">
              {Array(50)
                .fill(0)
                .map((_, index) => (
                  <div className="pic" key={index} />
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
