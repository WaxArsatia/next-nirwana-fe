import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NAT - PT. Nirwana Akses Teknologi',
  description:
    'Nirwana Akses Teknologi adalah Penyedia Layanan Internet yang menawarkan internet yang reliable dan berkecepatan tinggi untuk rumahan dan bisnis. Dapatkan pengalaman browsing tanpa jeda, streaming, dan game online.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
