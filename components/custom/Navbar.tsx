import { navItems } from '@/constants';
import Link from 'next/link';
import { Button } from '../ui/button';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-24 bg-background/50 backdrop-blur-sm z-50">
      <div className="flex px-20 items-center h-full justify-between">
        <div className="flex items-center gap-4 h-20">
          <Link href="#hero" className="h-20">
            <Logo className="size-20" />
          </Link>
          <div className="flex flex-col gap-0">
            <h2 className="text-lg text-gray-700">Residenza Sanitaria Assistenziale</h2>
            <p className="text-xl font-bold text-[#57463F] italic">&quot;Ca&apos; Mia&quot;</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link href={item.link} key={item.label}>
              <Button variant="ghost">{item.label}</Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
