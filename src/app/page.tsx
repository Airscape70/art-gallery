import Image from "next/image";
import "./page.scss";

export default function Home() {
  return (
    <>
      <header>
        <div className="topbar">
          <div className="phone">
            {" "}
            <a href="#"> +7 (913) 116-69-76 </a>{" "}
          </div>
          <div className="info"> Бесплатная доставка от 5000 Рублей </div>
          <div className="tools-icon"> Иконки </div>
        </div>

        <div className="botbar">
          <div className="logo">Art Gallery</div>
          <div className="navbar">
            <a href="#">Картины</a>
            <a href="#">На заказ</a>
            <a href="#">Контакты</a>
            <a href="#">О нас</a>
          </div>
        </div>

        <div className="category">
          <div className="grid-item-1"></div>
          <div className="grid-item-2"></div>
          <div className="grid-item-3"></div>
          <div className="grid-item-4"></div>
          <div className="grid-item-5"></div>
          <div className="grid-item-6"></div>
        </div>
      </header>

      <main>
        <section className="news">
          <h2>Новые картины</h2>
          <div className="news-container">
            <div className="news-list">
              <div className="item">1</div>
              <div className="item">2</div>
              <div className="item">3</div>
              <div className="item">4</div>
              <div className="item">5</div>
            </div>
          </div>
        </section>

        <section className="main-container">
          <aside className="sidebar"></aside>

          <article className="content-container">
            <div className="content">
              {Array(100)
                .fill(0)
                .map((_, index) => (
                  <Tile key={index} />
                ))}
            </div>
          </article>
        </section>
      </main>

      <footer></footer>
    </>
  );
}

const Tile = () => (
  <div className="tile">
    <div className="tile-body"></div>
  </div>
);
