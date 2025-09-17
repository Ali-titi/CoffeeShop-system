import { Coffee } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-[#3E2723] text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Coffee className="text-amber-400" /> Kigali Café
        </h1>
        <nav className="flex gap-6">
          <a href="" className="hover:text-amber-400">Home</a>
          <a href="#about" className="hover:text-amber-400">About</a>
          <a href="#menu" className="hover:text-amber-400">Menu</a>
          <a href="#gallery" className="hover:text-amber-400">Gallery</a>
          <a href="#booking" className="hover:text-amber-400">Booking</a>
          <a href="#testimonials" className="hover:text-amber-400">Testimonials</a>
          <a href="#contact" className="hover:text-amber-400">Contact</a>
        </nav>
      </div>
    </header>
  );
}
