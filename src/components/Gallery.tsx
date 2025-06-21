import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Gallery() {
  const images = ['1', '2', '3', '4'];

  return (
    <section id="gallery" className="py-20 px-8 max-w-5xl mx-auto">
      <h3 className="text-3xl font-semibold text-center uppercase">Галерея</h3>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((img, index) => (
          <motion.div
            key={img}
            className="overflow-hidden rounded-xl shadow-md border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Image
              src={`/gallery/${img}.jpg`}
              alt=""
              width={300}
              height={300}
              className="object-cover w-full h-64 transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
