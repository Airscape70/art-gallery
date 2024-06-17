import "@/styles/components/Product.scss";

export default function Product() {
  return (
    <>
      <main>
        <section>
          <div className="product-container">
            <div className="pic-container">{/* image */}</div>
            <div className="desc-container">
              <h1 className="pic-name">Название</h1>
              <div className="desc-list">
                <ul>
                  <li>Наличие:</li>
                  <li>Техника:</li>
                  <li>Жанр:</li>
                  <li>Категория:</li>
                  <li>Размер:</li>
                  <li>Цена:</li>
                </ul>
              </div>

              <hr />
              <div className="desc-text">
                Далеко-далеко за, словесными горами в стране гласных и согласных
                живут рыбные тексты дороге большого всеми, на берегу ручеек то
                последний имеет переписывается.
              </div>
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
