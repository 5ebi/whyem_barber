'use client';

import { useEffect, type ReactNode } from 'react';

export default function ScrollAnimations({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add('js-enabled');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
