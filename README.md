# Angamuthu Bus Booking System

A comprehensive bus ticket booking website for Angamuthu Travels with seat selection, passenger booking, PDF tickets, and admin dashboard.

## Features

✨ **Core Features**
- 54 seat (3+2 layout) bus configuration
- Real-time seat selection and availability
- Passenger information booking
- Booking confirmation system
- PDF ticket generation with QR codes
- Admin dashboard for managing buses and bookings
- Mobile responsive design
- Bilingual support (Tamil & English)

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT
- **PDF Generation**: PDFKit
- **State Management**: Zustand
- **Payments**: Stripe Integration
- **Internationalization**: i18next

## Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   ├── (booking)/
│   │   ├── (admin)/
│   │   ├── api/
│   │   └── layout.tsx
│   ├── components/
│   │   ├── booking/
│   │   ├── admin/
│   │   ├── common/
│   │   └── ui/
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── db.ts
│   │   ├── pdf.ts
│   │   └── utils.ts
│   ├── hooks/
│   ├── store/
│   ├── types/
│   └── i18n/
├── prisma/
│   └── schema.prisma
├── public/
│   └── fonts/
└── package.json
```

## Installation

1. Clone the repository
```bash
git clone https://github.com/angamuthukslm-svg/Angamuthu.git
cd Angamuthu
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Set up database
```bash
npx prisma migrate dev
npx prisma generate
```

5. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Setup

PostgreSQL is required. Update `DATABASE_URL` in `.env.local`:
```
postgresql://user:password@localhost:5432/angamuthu_bus
```

## Usage

### Customer Features
- Browse available buses and routes
- Select seats from real-time seat map
- Enter passenger details
- Complete booking and payment
- Download PDF ticket
- Manage bookings from account

### Admin Features
- Manage bus routes and schedules
- View all bookings
- Manage passengers
- Generate reports
- System settings

## Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run migrate  # Run Prisma migrations
npm run studio   # Open Prisma Studio
```

## License

MIT License - feel free to use this project for your own purposes.
