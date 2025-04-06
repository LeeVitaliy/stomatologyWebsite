import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Здесь будет логика обработки заявки
    // Например, отправка email, сохранение в базу данных и т.д.
    
    return NextResponse.json(
      { message: 'Заявка успешно отправлена' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Произошла ошибка при обработке заявки' },
      { status: 500 }
    );
  }
}