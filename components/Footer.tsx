import { Instagram, Youtube, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://instagram.com"
            className="hover:text-red-500 transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://youtube.com"
            className="hover:text-red-500 transition-colors"
          >
            <Youtube size={24} />
          </a>
          <a
            href="https://spotify.com"
            className="hover:text-red-500 transition-colors"
          >
            <Music size={24} />
          </a>
        </div>
        <p className="text-center text-gray-500">
          © 2024 IDIOTS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
