import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const schedule = await prisma.busSchedule.findUnique({
      where: { id: params.id },
      include: {
        bus: true,
        route: true,
      },
    });

    if (!schedule) {
      return NextResponse.json(
        { error: 'Schedule not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: schedule,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get schedule error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch schedule' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { status, availableSeats } = body;

    const schedule = await prisma.busSchedule.update({
      where: { id: params.id },
      data: {
        status: status || undefined,
        availableSeats: availableSeats || undefined,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Schedule updated successfully',
        data: schedule,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Update schedule error:', error);
    return NextResponse.json(
      { error: 'Failed to update schedule' },
      { status: 500 }
    );
  }
}
