import Catalog from '@/components/Catalog/Catalog';
import { GET } from '../api/route';



export default async function CatalogPage() {

  const dataImages = await GET().then((res) =>
    res.json())

  return (
    <>
        <Catalog data={dataImages}/>
    </>
  );
}
