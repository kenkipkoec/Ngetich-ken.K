import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ngetich Ken | Full-Stack Developer',
  description: 'Professional portfolio for Ngetich Ken — React, TypeScript, Python, Flutter, and AI developer.',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.png',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
