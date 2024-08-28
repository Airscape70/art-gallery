"use client";
import "@/styles/components/Catalog.scss";
import MiniCard from "../common/Card/MiniCard";
import { useState } from "react";

export default function Catalog({ data }) {
  // function () {
  //   var techniqueCbs = document.querySelectorAll(".technique input[type='checkbox']");
  //   var genreCbs = document.querySelectorAll(".genre input[type='checkbox']");
  //   var categoryCbs = document.querySelectorAll(".category input[type='checkbox']");
  //   var sizeCbs = document.querySelectorAll(".size input[type='checkbox']");
  //   var priceCbs = document.querySelectorAll(".price input[type='checkbox']");

  //   var filters = {
  //     technique: getClassOfCheckedCheckboxes(techniqueCbs),
  //     genre: getClassOfCheckedCheckboxes(genreCbs),
  //     category: getClassOfCheckedCheckboxes(categoryCbs),
  //     size: getClassOfCheckedCheckboxes(sizeCbs),
  //     price: getClassOfCheckedCheckboxes(priceCbs),
  //   };

  //   filterResults(filters);
  // }

  // function getClassOfCheckedCheckboxes(checkboxes) {
  //   var classes = [];

  //   if (checkboxes && checkboxes.length > 0) {
  //     for (var i = 0; i < checkboxes.length; i++) {
  //       var cb = checkboxes[i];

  //       if (cb.checked) {
  //         classes.push(cb.getAttribute("rel"));
  //       }
  //     }
  //   }

  //   return classes;
  // }

  // function filterResults(filters) {
  //   var rElems = Array.from(document.getElementsByClassName(".result div")  as HTMLCollectionOf<HTMLElement>);
  //   var hiddenElems = [];

  //   if (!rElems || rElems.length <= 0) {
  //     return;
  //   }

  //   for (var i = 0; i < rElems.length; i++) {
  //     var el = rElems[i];

  //     if (filters.technique.length > 0) {
  //       var isHidden = true;

  //       for (var j = 0; j < filters.technique.length; j++) {
  //         var filter = filters.technique[j];

  //         if (el.classList.contains(filter)) {
  //           isHidden = false;
  //           break;
  //         }
  //       }

  //       if (isHidden) {
  //         hiddenElems.push(el);
  //       }
  //     }

  //     if (filters.genre.length > 0) {
  //       var isHidden = true;

  //       for (var j = 0; j < filters.genre.length; j++) {
  //         var filter = filters.genre[j];

  //         if (el.classList.contains(filter)) {
  //           isHidden = false;
  //           break;
  //         }
  //       }

  //       if (isHidden) {
  //         hiddenElems.push(el);
  //       }
  //     }
  //   }

  //   for (var i = 0; i < rElems.length; i++) {
  //     rElems[i].style.display = "block";
  //   }

  //   if (hiddenElems.length <= 0) {
  //     return;
  //   }

  //   for (var i = 0; i < hiddenElems.length; i++) {
  //     hiddenElems[i].style.display = "none";
  //   }
  // }

  const [filterTags, setFilterTags] = useState([]);

  const filteredDATA = data.filter((item) =>
    filterTags.length > 0
      ? filterTags.some((filterTag) =>
          item.tags.map((tag) => tag.title).includes(filterTag)
        )
      : data
  );

  const filterHandler = (event) => {
    if (event.target.checked) {
      setFilterTags([...filterTags, event.target.value]);
    } else {
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== event.target.value)
      );
    }
  };

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
                      id="paper-pastel"
                      value="paper-pastel"
                      onChange={filterHandler}
                    />
                    <label htmlFor="paper-pastel">Бумага, пастель</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="paper-acrylic"
                      value="paper-acrylic"
                      onChange={filterHandler}
                    />
                    <label htmlFor="paper-acrylic">Бумага, акрил</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="sandpaper-pastel"
                      value="sandpaper-pastel"
                      onChange={filterHandler}
                    />
                    <label htmlFor="sandpaper-pastel">
                      Нождачная бумага, пастель
                    </label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="paper-acrylic-aqua"
                      value="paper-acrylic-aqua"
                      onChange={filterHandler}
                    />
                    <label htmlFor="paper-acrylic-aqua">
                      Бумага, акрил, акварель
                    </label>
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
                      id="animals"
                      value="animals"
                      onChange={filterHandler}
                    />
                    <label htmlFor="animals">Животные</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="nature"
                      value="nature"
                      onChange={filterHandler}
                    />
                    <label htmlFor="nature">Природа</label>
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
                      id="wild-animals"
                      value="wild-animals"
                      onChange={filterHandler}
                    />
                    <label htmlFor="wild-animals">Дикие животные</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="home-animals"
                      value="home-animals"
                      onChange={filterHandler}
                    />
                    <label htmlFor="home-animals">Домашние животные</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="forest"
                      value="forest"
                      onChange={filterHandler}
                    />
                    <label htmlFor="forest">Лесной пейзаж</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="mountains"
                      value="mountains"
                      onChange={filterHandler}
                    />
                    <label htmlFor="mountains">Горный пейзаж</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="water"
                      value="water"
                      onChange={filterHandler}
                    />
                    <label htmlFor="water">Водный пейзаж</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="seasons"
                      value="seasons"
                      onChange={filterHandler}
                    />
                    <label htmlFor="seasons">Времена года</label>
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
                      id="A4"
                      value="A4"
                      onChange={filterHandler}
                    />
                    <label htmlFor="A4">А4</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="A3"
                      value="A3"
                      onChange={filterHandler}
                    />
                    <label htmlFor="A3">А3</label>
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
                      id="expensive"
                      value="expensive"
                      onChange={filterHandler}
                    />
                    <label htmlFor="expensive">Сначала дорогие</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="inexpensive"
                      value="inexpensive"
                      onChange={filterHandler}
                    />
                    <label htmlFor="inexpensive">Сначала недорогие</label>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          <div className="pics-container">
            {filteredDATA.map((item, index) => (
                <MiniCard key={index} data={item} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
