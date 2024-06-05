import "./page.scss";
import Phone from "@/icons/Phone";
import Tg from "@/icons/Tg";
import Whatsapp from "@/icons/Whatsapp";
import Vk from "@/icons/Vk";
import Wishlist from "@/icons/Wishlist";
import Card from "@/components/Card/Card";

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

          <div className="info">Бесплатная доставка от 5000 Рублей</div>

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

        <nav className="botbar">
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
          </div>
        </nav>
      </header>

      <main>
        <section className="category">
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
        </section>

        <section className="news">
          <h2>Новые картины</h2>
          <div className="news-container">
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <Card key={index} />
              ))}
          </div>
          <a href="#" className="btn">Смотреть все</a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-logo">Art Gallery</div>

        <div className="footer-info">
          <p>Информация</p>
          <ul className="info-list">
            <li className="info-item">
              <a href="#">Картины</a>
            </li>
            <li className="info-item">
              <a href="#">На заказ</a>
            </li>
            <li className="info-item">
              <a href="#">Контакты</a>
            </li>
            <li className="info-item">
              <a href="#">О нас</a>
            </li>
          </ul>
        </div>

        <div className="footer-contacts">
          <p>Наши контакты</p>
          <ul className="contacts-list">
            <li className="contacts-item">
              55 Gallaxy Enque, 2568 steet, 23568 NY
            </li>
            <li className="contacts-item">(+40) 123 456 7890</li>
            <li className="contacts-item">info@example.com</li>
            <li className="contacts-item">
              1 2 3 4
              {/* <div className="contacts-links">
                <Tg/> <Whatsapp/> <Vk/>
              </div> */}
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
