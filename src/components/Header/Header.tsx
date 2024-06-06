import "@/styles/components/header.scss";
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
            <Link href="/Catalog">Каталог</Link>
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
    </>
  );
}
