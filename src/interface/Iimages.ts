export interface Iimages {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: [
    {
      id: string,
      title: string
    },
    {
      id: string,
      title: string
    },
    {
      id: string,
      title: string
    },
    {
      id: string,
      title: string
    },
    {
      id: string,
      title: string
    },
  ];
  url: string;
};