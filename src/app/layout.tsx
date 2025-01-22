import type { Metadata } from 'next';
import { Oswald, Roboto } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Fit physique',
  description: 'Your fitness journey starts here',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-200">
      <body
        className={`${oswald.variable} ${roboto.variable} antialiased bg-white w-full max-w-[1920px] mx-auto`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
