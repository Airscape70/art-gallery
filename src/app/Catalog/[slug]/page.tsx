import Product from "@/components/Product/Product";
import { GET } from "../../api/route";

export async function generateStaticParams() {
  const images = await GET().then((res) => res.json());
  return images.map((image) => ({
    slug: image.slug,
  }));
}

export default async function Products({params}: {params: {slug: string}}) {
  const images = await GET().then((res) => res.json());
  const image = images.find((i) => i.slug == params.slug);

  if (image) {
    return <Product image={image} />;
  } else {
    return <div>ERROR</div>;
  }
}
