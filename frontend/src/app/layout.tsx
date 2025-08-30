import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Web3Provider } from '@/providers/Web3Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MonadDAO - Decentralized Governance on Monad',
  description:
    'A decentralized autonomous organization building the future of governance on Monad blockchain.',
  keywords: ['DAO', 'Monad', 'Blockchain', 'Governance', 'DeFi'],
  authors: [{ name: 'MonadDAO Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}