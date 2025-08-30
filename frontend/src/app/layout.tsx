import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MonaDAO - Decentralized Governance on Monad',
  description:
    'A decentralized autonomous organization building the future of governance on Monad blockchain.',
  keywords: ['DAO', 'Monad', 'Blockchain', 'Governance', 'DeFi'],
  authors: [{ name: 'MonaDAO Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}