export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: 'USER' | 'ADMIN' | 'SUPERADMIN';
}

export interface Bus {
  id: string;
  busNumber: string;
  busName: string;
  totalSeats: number;
  busType: string;
}

export interface BusRoute {
  id: string;
  fromCity: string;
  toCity: string;
  distance: number;
  fare: number;
}

export interface BusSchedule {
  id: string;
  departureTime: Date;
  arrivalTime: Date;
  availableSeats: number;
  totalSeats: number;
}

export interface Seat {
  id: string;
  seatNumber: string;
  row: number;
  column: number;
  isBooked: boolean;
}

export interface Booking {
  id: string;
  bookingRef: string;
  status: string;
  totalAmount: number;
  paymentStatus: string;
  createdAt: Date;
  departureDate: Date;
}

export interface Passenger {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  age?: number;
  gender?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
