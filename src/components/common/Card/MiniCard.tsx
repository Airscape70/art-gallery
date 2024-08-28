import "@/styles/components/MiniCard.scss";
import Link from "next/link";

export default function MiniCard({ data }) {

  return (
    <div className="minicard">
     <Link href={`/catalog/${data.slug}`} >
        <div className="minicard-img">
          <img src={data.url} alt={data.title} />
        </div>
        <div className="minicard-title">
          <h3>{data.title}</h3>
        </div>
     </Link>
    </div>
  );
}
