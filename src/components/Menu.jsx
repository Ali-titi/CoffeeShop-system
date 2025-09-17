import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios 
      .get("http://127.0.0.1:8000/api/menu/") 
      .then((res) => {
        setMenuItems(res.data);
      })
      .catch((err) => {
        console.error("Error fetching menu items:", err);
      });
  }, []);

  return (
    <section id="menu" className="py-16 bg-[#FFF8F0]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-[#3E2723]">Our Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="rounded-lg mb-4 h-40 w-full object-cover"
              />
              <h3 className="font-semibold text-xl text-[#3E2723]">{item.name}</h3>
              <p className="text-amber-600 font-bold">{item.price} RWF</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;