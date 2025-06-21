"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TABLES = ['Стіл 1','Стіл 2','Стіл 3','Стіл 4','Стіл 5','Стіл 6','Стіл 7','Стіл 8','Стіл 9'];
const times = ['18:00','19:00','20:00','21:00'];

export default function Reservation() {
  const [reservations, setReservations] = useState<any[]>([]);
  const [selectedTime, setSelectedTime] = useState(times[0]);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch('/api/reservations')
      .then(res => res.json())
      .then(setReservations);
  }, []);

  const handleReserve = async () => {
    if (!name.trim() || !selectedTable) return;
    setLoading(true);
    const newRes = { name: name.trim(), time: selectedTime, table: selectedTable };
    await fetch('/api/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRes),
    });
    setReservations(prev => [...prev, newRes]);
    setName('');
    setSelectedTable(null);
    setLoading(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const taken = reservations
    .filter(r => r.time === selectedTime)
    .map(r => r.table);

  return (
    <section id="reservation" className="py-20 px-8 max-w-4xl mx-auto">
      <h3 className="text-3xl font-semibold text-center uppercase">Бронювання</h3>

      <div className="mt-8 space-y-6">
        <div className="flex gap-4 justify-center flex-wrap">
          {times.map(time => (
            <button key={time} onClick={() => setSelectedTime(time)}
              className={`px-4 py-2 border uppercase rounded transition duration-200 hover:scale-110 ${selectedTime === time ? 'bg-black text-white' : 'bg-white text-black'}`}>
              {time}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 justify-center">
          {TABLES.map(id => {
            const isTaken = taken.includes(id);
            const isSelected = selectedTable === id;
            return (
              <motion.div
                key={id}
                whileTap={{ scale: 0.95 }}
                onClick={() => !isTaken && setSelectedTable(id)}
                className={`h-24 flex items-center justify-center border-2 rounded-lg cursor-pointer transition duration-200 ${
                  isTaken ? 'bg-gray-300 cursor-not-allowed text-gray-600' :
                  isSelected ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {id}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4">
          <input
            type="text"
            placeholder="Ваше ім'я"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full border border-black px-4 py-2"
          />
          <button
            onClick={handleReserve}
            disabled={!name.trim() || !selectedTable || loading}
            className="w-full border-2 border-black py-2 uppercase font-medium transition hover:bg-black hover:text-white disabled:opacity-50"
          >
            {loading ? 'Збереження...' : `Забронювати ${selectedTable ? `— ${selectedTable} о ${selectedTime}` : ''}`}
          </button>
          {success && (
            <div className="text-green-600 font-medium text-center transition-all">✅ Успішно заброньовано!</div>
          )}
        </div>

        <div className="mt-12">
          <h4 className="text-xl font-semibold uppercase">Ваші бронювання</h4>
          <ul className="mt-4 space-y-2">
            {reservations.length === 0
              ? <li>Немає бронювань</li>
              : reservations.map((r, i) => (
                  <li key={i} className="flex justify-between border-b py-1">
                    <span>{r.name}</span>
                    <span>{r.table} — {r.time}</span>
                  </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
