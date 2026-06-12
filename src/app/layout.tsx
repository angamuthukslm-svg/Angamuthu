'use client';

import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Angamuthu Travels - Bus Ticket Booking</title>
        <meta name="description" content="Book bus tickets for Angamuthu Travels" />
      </head>
      <body>
        <I18nextProvider i18n={i18n}>
          <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </I18nextProvider>
      </body>
    </html>
  );
}
