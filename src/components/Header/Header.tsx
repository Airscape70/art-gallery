import "@/styles/components/Header.scss";
import Phone from "@/icons/phone";
import Tg from "@/icons/Tg";
import Whatsapp from "@/icons/Whatsapp";
import Vk from "@/icons/Vk";
import Wishlist from "@/icons/Wishlist";
import Link from "next/link";

export default function Header() {
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
            <Link href="/">Главная</Link>
            <Link href="/catalog">Каталог картин</Link>
            <Link href="/contacts">Контакты</Link>
          </div>

          <div className="shop-icons">
            <a href="#">
              <Wishlist />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
