export default function Testimonials() {
  const feedback = [
    { name: "Alice", text: "Best coffee in Kigali! The vibes are amazing." },
    { name: "James", text: "Great place to relax and work. Highly recommended." },
    { name: "Sophie", text: "Their croissants are heavenly – I come every morning!" },
  ];

  return (
    <section id="testimonials" className="py-16 bg-[#3E2723] text-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-white">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedback.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg">
              <p className="italic">“{item.text}”</p>
              <h4 className="mt-4 font-semibold text-[#3E2723]">- {item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
