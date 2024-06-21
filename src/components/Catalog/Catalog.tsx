import "@/styles/components/Catalog.scss";

export default function Catalog() {
  return (
    <>
      <main>
        <section className="catalog-container">
          
          <aside>
            <div className="art-filters">
              <div className="filter">
                <div className="filter-text">Краски</div>
                <ul className="filter-options">
                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="1"
                      name="paper-pastel"
                      value="1"
                    />
                    <label htmlFor="1">Бумага, пастель</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="2"
                      name="paper-acrylic"
                      value="1"
                    />
                    <label htmlFor="2">Бумага, акрил</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="3"
                      name="sandpaper-pastel"
                      value="1"
                    />
                    <label htmlFor="3">Нождачная бумага, пастель</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="4"
                      name="paper-acrylic-aqua"
                      value="1"
                    />
                    <label htmlFor="4">Бумага, акрил, акварель</label>
                  </li>
                </ul>
              </div>

              <div className="filter">
                <div className="filter-text">Жанр</div>
                <ul className="filter-options">
                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="5"
                      name="animals"
                      value="1"
                    />
                    <label htmlFor="5">Животные</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="6"
                      name="nature"
                      value="1"
                    />
                    <label htmlFor="6">Природа</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="7"
                      name="building"
                      value="1"
                    />
                    <label htmlFor="7">Архитектура</label>
                  </li>
                </ul>
              </div>

              <div className="filter">
                <div className="filter-text">Категория</div>
                <ul className="filter-options">
                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="8"
                      name="wild-animals"
                      value="1"
                    />
                    <label htmlFor="8">Дикие животные</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="9"
                      name="wild-animals"
                      value="1"
                    />
                    <label htmlFor="9">Домашние животные</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="10"
                      name="forest"
                      value="1"
                    />
                    <label htmlFor="10">Лесной пейзаж</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="11"
                      name="mountains"
                      value="1"
                    />
                    <label htmlFor="11">Горный пейзаж</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="12"
                      name="water"
                      value="1"
                    />
                    <label htmlFor="12">Водный пейзаж</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="13"
                      name="seasons"
                      value="1"
                    />
                    <label htmlFor="13">Времена года</label>
                  </li>
                </ul>
              </div>

              <div className="filter">
                <div className="filter-text">Размер</div>
                <ul className="filter-options">
                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="14"
                      name="a4"
                      value="1"
                    />
                    <label htmlFor="14">А4</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="15"
                      name="a3"
                      value="1"
                    />
                    <label htmlFor="15">А3</label>
                  </li>
                </ul>
              </div>

              <div className="filter">
                <div className="filter-text">Цена</div>
                <ul className="filter-options">
                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="16"
                      name="expensive"
                      value="1"
                    />
                    <label htmlFor="16">Сначала дорогие</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="17"
                      name="inexpensive"
                      value="1"
                    />
                    <label htmlFor="17">Сначала недорогие</label>
                  </li>
                </ul>
              </div>
            </div>
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
