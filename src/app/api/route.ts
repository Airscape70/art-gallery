import { NextResponse } from "next/server";
import data from "../../../data/data.json";
import pictures from "../../../data/pictures.json";

interface Filter {
  categories?: string[];
  format?: string[];
}

const pics: any[] = pictures;
const queryParams: Record<string, string> = {
  categories: "portret,forest,sea,montain,river",
  format: "A4,A3,A2,A1",
};

export function filteredPictures({ categories, format }: Filter) {
  let result: any[] = [];

  if (categories?.length)
    result = pics.filter((pic) => categories.includes(pic.category));
  if (format?.length)
    result = pics.filter((pic) => format.includes(pic.genre));

  return result;
}

export async function GET() {
  return NextResponse.json(data);
}

export async function getCatalog() {
  const categories = queryParams["categories"].split(",");
  const format = queryParams["format"].split(",");
  const pics = filteredPictures({ categories, format });

  return pics;
}

export async function getCategory(slug: string) {
  const pics = filteredPictures({ categories: [slug] });
  return pics;
}
