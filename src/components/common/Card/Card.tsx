import "@/styles/components/Card.scss";

export default function Card() {
  return (
    <div className="card-content">
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
          alt=""
        />
        <h2>Название</h2>
        <h3>5000 ₽</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          exercitationem iste, voluptatum, quia explicabo laboriosam rem
          adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
          asperiores harum? Dicta odio aut hic.
        </p>
        <a href="#">Купить</a>
      </div>
    </div>
  );
}
