import { Iimages } from "@/interface/Iimages";
import "@/styles/components/Card.scss";
import Link from "next/link";

export default function Card( {data}: {data: Iimages} ) {
  return (
    <div className="card-content">
      <div className="card">
        <img src={data.url} alt={data.title} />
        <h2>{data.title}</h2>
        <h3>{data.tags[4].title} ₽</h3>
        <p>{data.description}</p>
        <Link href={`/catalog/${data.slug}`} >Купить</Link>
      </div>
    </div>
  );
}
