import Image from "next/image";

import "./page.scss";

export default function Home() {
  return (
    <>
      <header className='topbar'>Art Gallery</header>

      <main>
        <aside className='sidebar'></aside>

        <div className='content-container'>
          <div className='content'>
            {Array(100)
              .fill(0)
              .map((_, index) => (
                <Tile key={index} />
              ))}
          </div>
        </div>
      </main>
    </>
  );
}

const Tile = () => (
  <div className='tile'>
    <div className='tile-body'></div>
  </div>
);
