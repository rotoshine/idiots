import React from "react";
import { Play } from "lucide-react";

const MusicSection = () => {
  const albums = [
    {
      title: "REVOLUTION",
      year: "2024",
      cover:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80",
    },
    {
      title: "CHAOS",
      year: "2022",
      cover:
        "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&q=80",
    },
    {
      title: "GENESIS",
      year: "2020",
      cover:
        "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="py-20 bg-black" id="discography">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">DISCOGRAPHY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <div key={index} className="group relative overflow-hidden">
              <img
                src={album.cover}
                alt={album.title}
                className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity
                            flex flex-col items-center justify-center"
              >
                <h3 className="text-2xl font-bold mb-2">{album.title}</h3>
                <p className="text-gray-300 mb-4">{album.year}</p>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full
                                 transition-colors duration-300"
                >
                  <Play size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
