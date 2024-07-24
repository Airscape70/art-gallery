import "@/styles/components/Card.scss";

export default function Card( {data} ) {
  return (
    <div className="card-content">
      <div className="card">
        <img src={data.url} alt={data.title} />
        <h2>{data.title}</h2>
        <h3>{data.price} ₽</h3>
        <p>{data.description}</p>
        <a href="#">Купить</a>
      </div>
    </div>
  );
}
