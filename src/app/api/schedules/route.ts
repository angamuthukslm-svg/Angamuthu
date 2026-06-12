import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { busId, routeId, departureTime, arrivalTime, totalSeats } = body;

    if (!busId || !routeId || !departureTime || !arrivalTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const schedule = await prisma.busSchedule.create({
      data: {
        busId,
        routeId,
        departureTime: new Date(departureTime),
        arrivalTime: new Date(arrivalTime),
        totalSeats: totalSeats || 54,
        availableSeats: totalSeats || 54,
        status: 'ACTIVE',
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Schedule created successfully',
        data: schedule,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create schedule error:', error);
    return NextResponse.json(
      { error: 'Failed to create schedule' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const schedules = await prisma.busSchedule.findMany({
      include: {
        bus: true,
        route: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: schedules,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get schedules error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch schedules' },
      { status: 500 }
    );
  }
}
