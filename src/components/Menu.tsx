import Image from 'next/image';
import { motion } from 'framer-motion';

const dishes = [
  { title: 'Сирний тартар', desc: 'Тартар із трьох видів сирів з трюфельною олією.', price: 450, img: '/dishes/dish1.jpg' },
  { title: 'Фуагра з інжиром', desc: 'Печена фуагра з карамелізованим інжиром.', price: 620, img: '/dishes/dish2.jpg' },
  { title: 'Лосось під копченням', desc: 'Ніжний лосось холодного копчення з авокадо.', price: 550, img: '/dishes/dish3.jpg' },
  { title: 'Устриці з шампанським', desc: 'Свіжі устриці подаються з келихом шампанського.', price: 700, img: '/dishes/dish4.jpg' },
  { title: 'Філе миньйон', desc: "Соковите м'ясо яловичини з трюфельним соусом.", price: 950, img: '/dishes/dish5.jpg' },
  { title: 'Шоколадний фондан', desc: 'Теплий фондан з рідким шоколадним центром.', price: 300, img: '/dishes/dish6.jpg' },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-black text-white py-20 px-8">
      <h3 className="text-3xl font-semibold text-center uppercase">Меню</h3>
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {dishes.map((d, index) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative border border-white/10 rounded-xl bg-white/5 p-6 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={d.img}
                alt={d.title}
                width={400}
                height={300}
                className="object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h4 className="mt-4 text-xl font-semibold uppercase">{d.title}</h4>
            <p className="mt-2 text-sm text-gray-300">{d.desc}</p>
            <span className="mt-4 block font-semibold text-right text-white">₴{d.price}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
