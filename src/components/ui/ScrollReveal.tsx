
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  once?: boolean;
  distance?: string;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 700,
  once = true,
  distance = '20px',
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Initial setup
    let translateX = '0';
    let translateY = '0';
    
    switch (direction) {
      case 'up':
        translateY = distance;
        break;
      case 'down':
        translateY = `-${distance}`;
        break;
      case 'left':
        translateX = distance;
        break;
      case 'right':
        translateX = `-${distance}`;
        break;
    }

    element.style.transform = `translate(${translateX}, ${translateY})`;
    element.style.opacity = '0';
    element.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`;
    element.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !hasAnimated.current)) {
            setTimeout(() => {
              element.style.transform = 'translate(0, 0)';
              element.style.opacity = '1';
              hasAnimated.current = true;
            }, delay);

            if (once) {
              observer.unobserve(element);
            }
          } else if (!entry.isIntersecting && !once && hasAnimated.current) {
            element.style.transform = `translate(${translateX}, ${translateY})`;
            element.style.opacity = '0';
            hasAnimated.current = false;
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay, direction, distance, duration, once]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
