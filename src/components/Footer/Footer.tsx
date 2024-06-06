import "@/styles/components/Footer.scss";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-logo">Art Gallery</div>

        <div className="footer-info">
          <ul className="info-list">
            <p>Информация</p>
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
          <ul className="contacts-list">
            <p>Наши контакты</p>
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
