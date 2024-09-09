"use client";
import { Iimages } from "@/interface/Iimages";
import "@/styles/components/Product.scss";
import { useEffect, useState } from "react";

export default function Product({ image }: { image: Iimages}) {

  const [modalActive, setModalActive] = useState(false);


  return (
    <>
      <main>
        <section>
          <div className="product-container">
            <div className="pic-container">
              <img src={image.url} alt={image.title} />
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
                <span className="buy-btn" onClick={() => setModalActive(true)}>
                  Купить
                </span>
                <span className="wish-btn">В избранное</span>
              </div>
            </div>
          </div>
        </section>

        <div className={`modal ${modalActive === true ? 'modal-active' : ''}`}>
          <div className="modal-content">
            <button className="modal-close-btn" onClick={() => setModalActive(false)}>Х</button>
            <p>Имя</p>
            <p>Телефон</p>
            <p>Комментарий к заказу (или ваш вопрос)</p>
            <button className="modal-submit-btn">Отправить</button>
          </div>
        </div>


      </main>
    </>
  );
}
