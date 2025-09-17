export default function Gallery() {
  const images = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/021c2794295789.5e7b55f5577a6.jpg",
    "https://tse2.mm.bing.net/th/id/OIP.EdirR_aZm-s5I7YVcytkDQHaJ3?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://tse1.mm.bing.net/th/id/OIP.elCeeU_BUE5YMD7_uvmopAHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://tse3.mm.bing.net/th/id/OIP.WaXRyCSzCtADRUoNp5SMLAHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  ];

  return (
    <section id="gallery" className="py-16 bg-[#FFF8F0]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-[#3E2723]">Our Space</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i + 1}`}
              className="rounded-2xl shadow-lg hover:scale-105 transition object-cover h-64 w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
