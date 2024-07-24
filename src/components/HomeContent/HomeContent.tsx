"use client";

import "@/styles/components/HomeContent.scss";
import Card from "@/components/common/Card/Card";
import { Iimages } from "@/interface/Iimages";
import Link from "next/link";
import { useEffect, useState } from "react";

async function getImages() {
  const response = await fetch("http://localhost:3000/api");
  if (!response.ok) throw new Error("Ошибка");
  return response.json();
}

export default function HomeContent(): JSX.Element {
  const [data, setData] = useState([]);

  const fetchImages = async () => {
    const images = await getImages();
    setData(images);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <main>
      <section className="category">
        <div className="category-1">
          <img src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <span>Дикие животные</span>
        </div>

        <div className="category-2">
          <img src="https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <span>Лесные сюжеты</span>
        </div>

        <div className="category-3">
          <img src="https://images.unsplash.com/photo-1630418886128-458aea8716d8?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <span>Морские сюжеты</span>
        </div>

        <div className="category-4">
          <img src="https://plus.unsplash.com/premium_photo-1673967770669-91b5c2f2d0ce?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <span>Домашние животные</span>
        </div>

        <div className="category-5">
          <img src="https://images.unsplash.com/photo-1551496168-239c45c2cfd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <span>Закаты</span>
        </div>

        <div className="category-6">
          <img src="https://images.unsplash.com/photo-1598970829637-89b81d47ae27?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <span>Горные сюжеты</span>
        </div>
      </section>

      <section className="news">
        <h1 className="news-title">Новые картины</h1>
        <div className="news-container">
          {data.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
        <Link href="/catalog" className="btn">
          Подробнее
        </Link>
      </section>
    </main>
  );
}
