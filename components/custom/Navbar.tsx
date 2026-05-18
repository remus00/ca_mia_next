'use client';

import { navItems } from '@/constants';
import { cn } from '@/lib/utils';
import { MenuIcon } from 'lucide-react';
import { useEffect, useState, type MouseEvent } from 'react';
import { Button } from '../ui/button';
import Logo from './Logo';

/** Aligned with `h-24` fixed navbar */
const NAVBAR_OFFSET_PX = 72;

function isModifiedClick(e: MouseEvent<HTMLAnchorElement>) {
  return e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
}

function scrollToSectionHash(hash: string) {
  const id = hash.startsWith('#') ? hash.slice(1) : hash;
  if (!id) return;

  const target = document.getElementById(id);
  if (!target) return;

  const root = document.scrollingElement ?? document.documentElement;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const top = target.getBoundingClientRect().top + root.scrollTop - NAVBAR_OFFSET_PX;

  root.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReduced ? 'auto' : 'smooth',
  });
}

function onInPageAnchorClick(e: MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute('href');
  if (!href?.startsWith('#')) return;
  if (isModifiedClick(e)) return;

  e.preventDefault();
  scrollToSectionHash(href);
  window.history.pushState(null, '', href);
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  const closeMenuIfNavigated = (e: MouseEvent<HTMLAnchorElement>) => {
    onInPageAnchorClick(e);
    if (!isModifiedClick(e)) setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div
      className={cn(
        'fixed top-0 left-0 z-50 w-full bg-background/50 backdrop-blur-sm',
        isMenuOpen && 'bg-white shadow-md transition-all duration-300',
      )}
    >
      <div className="flex h-24 items-center justify-between px-6 md:px-20 w-full">
        <div className="flex h-16 items-center gap-4 md:h-20">
          <a href="#hero" className="h-16 md:h-20" onClick={closeMenuIfNavigated}>
            <Logo className="size-16 md:size-20" />
          </a>
          <div className="flex flex-col gap-0">
            <h2 className="text-md text-gray-700">Residenza Sanitaria Assistenziale</h2>
            <p className="text-lg font-bold text-[#57463F] italic">&quot;Ca&apos; Mia&quot;</p>
          </div>
        </div>

        <div className="items-center gap-4 hidden md:flex">
          {navItems.map((item) => (
            <Button
              variant="ghost"
              asChild
              key={item.label}
              className="lg:text-lg md:text-base font-medium active:text-[#57463F]"
            >
              <a href={item.link} onClick={onInPageAnchorClick}>
                {item.label}
              </a>
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-4 md:hidden ">
          <Button variant="ghost" onClick={toggleMenu}>
            <MenuIcon className="size-6" />{' '}
          </Button>
        </div>
      </div>
      <div
        className={cn(
          'grid w-full md:hidden motion-reduce:transition-none',
          'transition-[grid-template-rows] duration-300 ease-out',
          isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div
          className={cn('min-h-0 overflow-hidden', !isMenuOpen && 'pointer-events-none')}
          inert={!isMenuOpen}
        >
          <div className="flex flex-col gap-4 border-t border-border/30 bg-background/50 px-6 pb-6 pt-4 backdrop-blur-sm">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Button
                  variant="ghost"
                  asChild
                  key={item.label}
                  className="text-lg font-medium active:text-[#57463F]"
                >
                  <a
                    href={item.link}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleMenu();
                      onInPageAnchorClick(e);
                    }}
                  >
                    {item.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
