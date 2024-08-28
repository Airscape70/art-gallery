import "@/styles/components/Product.scss";
import Image from "next/image";

export default function Product({ image }) {
  return (
    <>
      <main>
        <section>
          <div className="product-container">
            <div className="pic-container">
              <img
                src={image.url}
                alt={image.title}
              />
            </div>
            <div className="desc-container">
              <h1 className="pic-name">{image.title}</h1>
              <div className="desc-list">
                <ul>
                  <li>Наличие:</li>
                  <li>Техника: {image.tags[0].title}</li>
                  <li>Жанр: {image.tags[1].title}:</li>
                  <li>Размер: {image.tags[2].title}</li>
                  <li>Год: {image.tags[3].title}</li>
                  <li>Цена: {image.tags[4].title} Р</li>
                </ul>
              </div>

              <hr />
              <div className="desc-text">{image.description}</div>
              <hr />

              <div className="btn-container">
                <span className="buy-btn">Купить</span>
                <span className="wish-btn">В избранное</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
