'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Home, Info, Users, Target } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname() || '';

  // 현재 경로에 따라 활성화된 링크 스타일 적용
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path ? 'font-bold' : '';
    }
    // 경로가 시작 부분만 일치해도 활성화 (예: /daos/1 도 /daos 링크를 활성화)
    return pathname.startsWith(path) ? 'font-bold' : '';
  };

  return (
    <header className="border-border border-b p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className={`text-foreground hover:text-primary flex items-center ${isActive('/')}`}
          >
            <Home className="mr-1 h-5 w-5" />
            Home
          </Link>
          <Link
            href="/daos"
            className={`text-foreground hover:text-primary flex items-center ${isActive('/daos')}`}
          >
            <Users className="mr-1 h-5 w-5" />
            DAOs
          </Link>
          <Link
            href="/review"
            className={`text-foreground hover:text-primary flex items-center ${isActive('/review')}`}
          >
            <Target className="mr-1 h-5 w-5" />
            Review & Vote
          </Link>
        </div>

        <ConnectButton.Custom>
          {({ openConnectModal }) => (
            <Button
              onClick={openConnectModal}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Connect Wallet
            </Button>
          )}
        </ConnectButton.Custom>
      </div>
    </header>
  );
}
