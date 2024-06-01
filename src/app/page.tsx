import Image from "next/image";
import "./page.scss";
import Phone from "@/icons/Phone";
import Tg from "@/icons/Tg";
import Whatsapp from "@/icons/Whatsapp";
import Vk from "@/icons/Vk";
import Wishlist from "@/icons/wishlist";
import Basket from "@/icons/Baasket";

export default function Home() {
  return (
    <>
      <header>
        <div className="topbar">
          <a className="phone-number" href="#">
            <div className="phone">
              <Phone />
            </div>
            <span> +7 (913) 116-69-76</span>
          </a>

          <div className="info"> Бесплатная доставка от 5000 Рублей </div>

          <div className="social-links">
            <a href="#">
              <Tg />
            </a>
            <a href="#">
              <Whatsapp />
            </a>
            <a href="#">
              <Vk />
            </a>
          </div>
        </div>

        <div className="botbar">
          <div className="logo">Art Gallery</div>
          <div className="navbar">
            <a href="#">Картины</a>
            <a href="#">На заказ</a>
            <a href="#">Контакты</a>
            <a href="#">О нас</a>
          </div>
          <div className="shop-icons">
            <a href="#">
              <Wishlist />
            </a>
            <a href="#">
              <Basket />
            </a>
          </div>
        </div>

        <div className="category">
          <div className="category-1">
            <img src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <span>Дикие животные</span>
          </div>
          <div className="category-2">
            <img src="https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <span>Лесные сюжеты</span>
          </div>
          <div className="category-3">
            <img src="https://images.unsplash.com/photo-1630418886128-458aea8716d8?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <span>Морские сюжеты</span>
          </div>
          <div className="category-4">
            <img src="https://plus.unsplash.com/premium_photo-1673967770669-91b5c2f2d0ce?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <span>Домашние животные</span>
          </div>
          <div className="category-5">
            <img src="https://images.unsplash.com/photo-1551496168-239c45c2cfd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <span>Закаты</span>
          </div>
          <div className="category-6">
            <img src="https://images.unsplash.com/photo-1598970829637-89b81d47ae27?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <span>Горные сюжеты</span>
          </div>
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

      <footer>
      <div></div>
      </footer>
    </>
  );
}

const Tile = () => (
  <div className="tile">
    <div className="tile-body"></div>
  </div>
);
