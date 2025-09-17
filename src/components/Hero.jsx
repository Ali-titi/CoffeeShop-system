import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/031/210/536/small_2x/cozy-cafe-bistro-with-blurred-background-and-wooden-montage-generative-ai-photo.jpg')" }}
    >
      <motion.div
        className="bg-black bg-opacity-60 p-8 rounded-2xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
      >
        <h2 className="text-5xl font-bold mb-4">Welcome to Kigali Café</h2>
        <p className="mb-6">Where every cup tells a story</p>
        <a
          href="#menu"
          className="bg-amber-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition"
        >
          Explore Menu
        </a>
      </motion.div>
    </section>
  );
}
