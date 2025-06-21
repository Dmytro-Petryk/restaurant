export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-8">
      <h3 className="text-3xl font-semibold text-center uppercase">Контакти</h3>
      <div className="mt-8 max-w-md mx-auto text-center">
        <p>Адреса: вул. XXXX, XX, Київ, Україна</p>
        <p className="mt-2">Телефон: <a href="tel:+380XXXXXXXXXX" className="underline">+38 (XXX) XXX-XX-XX</a></p>
        <p className="mt-2">Email: <a href="mailto:info@xxxxx.xx" className="underline">info@xxxxx.xx</a></p>
      </div>
    </section>
  );
}