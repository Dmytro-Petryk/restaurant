"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-50 px-8 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center uppercase">Про нас</h2>
      <div className="mt-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg leading-relaxed">
            <span className="font-semibold">EliteTaste</span> — це не просто ресторан, це місце, де зустрічаються витонченість, атмосфера та справжній смак. Ми віримо, що кожна страва — це мистецтво, і кожен гість заслуговує на винятковий досвід.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Наш шеф-кухар з багаторічним досвідом готує з найкращих локальних інгредієнтів, поєднуючи сучасні тенденції з класикою європейської кухні. Ми дбаємо не лише про смак, а й про враження — від сервісу до подачі.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Завітайте до нас, щоб відчути унікальну атмосферу, насолодитися живою музикою у вечірній час та створити незабутні спогади.
          </p>
        </div>
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/restaurant-interior.jpg" 
            alt="Інтер'єр EliteTaste"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
