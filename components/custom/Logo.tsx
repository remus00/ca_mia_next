import { cn } from '@/lib/utils';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn('relative inline-block shrink-0 overflow-hidden rounded-full', className)}>
      <Image src="/logo.svg" alt="logo" fill className="object-contain" sizes="200px" />
    </div>
  );
};

export default Logo;
