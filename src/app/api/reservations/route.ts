import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile } from 'fs/promises';
import path from 'path';

const FILE_PATH = path.join(process.cwd(), 'reservations.json');

export async function GET() {
  try {
    const data = await readFile(FILE_PATH, 'utf-8');
    return NextResponse.json(JSON.parse(data));
  } catch (err) {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const newReservation = await req.json();
    const file = await readFile(FILE_PATH, 'utf-8').catch(() => '[]');
    const reservations = JSON.parse(file);
    reservations.push(newReservation);
    await writeFile(FILE_PATH, JSON.stringify(reservations, null, 2));
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 });
  }
}
