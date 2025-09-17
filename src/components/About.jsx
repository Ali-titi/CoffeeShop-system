import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#3E2723] text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image with fade-in from left */}
        <motion.img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
          alt="About us"
          className="rounded-2xl shadow-lg w-full md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Text with fade-in from right */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">About Kigali Café</h2>

          {/* Caption with motion typing effect */}
          <motion.p
            className="mb-4 text-lg text-amber-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
          >
            ☕ A place where every cup tells a story
          </motion.p>

          <p className="mb-4">
            Kigali Café is more than just coffee – it’s a community. From freshly
            roasted beans to warm pastries, we bring people together through taste
            and stories.
          </p>
          <p>
            Whether you’re working, catching up with friends, or just enjoying some
            “me time”, our café is your perfect spot.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
