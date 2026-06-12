import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { generateTicketNumber } from '@/lib/utils';
import QRCode from 'qrcode';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const booking = await prisma.booking.findUnique({
      where: { id: params.id },
      include: {
        schedule: {
          include: {
            route: true,
            bus: true,
          },
        },
        seat: true,
        passengers: true,
      },
    });

    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      );
    }

    // Generate QR code data
    const qrCodeData = JSON.stringify({
      bookingRef: booking.bookingRef,
      ticketNumber: booking.id,
      passenger: booking.passengers[0]?.firstName,
      seat: booking.seat.seatNumber,
    });

    const qrCodeUrl = await QRCode.toDataURL(qrCodeData);

    const ticketData = {
      ticketNumber: generateTicketNumber(),
      bookingRef: booking.bookingRef,
      bus: booking.schedule.bus,
      route: booking.schedule.route,
      departure: booking.schedule.departureTime,
      arrival: booking.schedule.arrivalTime,
      seat: booking.seat.seatNumber,
      passengers: booking.passengers,
      totalAmount: booking.totalAmount,
      qrCode: qrCodeUrl,
    };

    return NextResponse.json(
      {
        success: true,
        data: ticketData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Generate ticket error:', error);
    return NextResponse.json(
      { error: 'Failed to generate ticket' },
      { status: 500 }
    );
  }
}
