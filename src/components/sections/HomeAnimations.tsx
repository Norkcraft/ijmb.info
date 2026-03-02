'use client';
import { useEffect } from 'react';
import { countUp, heroReveal, revealOnScroll } from '@/lib/gsap/animations';

export function HomeAnimations() {
  useEffect(() => {
    heroReveal();
    revealOnScroll();
    countUp();
  }, []);
  return null;
}
