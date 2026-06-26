import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { url } = await request.json();

    const response = await fetch('https://www.tikwm.com/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    // تحقق مما إذا كانت الاستجابة صالحة
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    // إرجاع خطأ بصيغة JSON بدلاً من السماح للسيرفر بإرسال HTML
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}