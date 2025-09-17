import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Gallery from "./components/Gallery";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Gallery />
      <BookingForm />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
