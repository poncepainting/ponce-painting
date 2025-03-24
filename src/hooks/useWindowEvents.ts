import { useState, useEffect } from 'react';

interface UseWindowEventsProps {
  onScroll?: (scrollY: number) => void;
  onResize?: (width: number, height: number) => void;
  onEscape?: () => void;
  scrollThreshold?: number;
}

const useWindowEvents = ({
  onScroll,
  onResize,
  onEscape,
  scrollThreshold = 50,
}: UseWindowEventsProps = {}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onEscape) {
        onEscape();
      }
    };

    const handleResize = () => {
      if (onResize) {
        onResize(window.innerWidth, window.innerHeight);
      }
    };

    const handleScroll = () => {
      const scrolledState = window.scrollY > scrollThreshold;
      setIsScrolled(scrolledState);
      
      if (onScroll) {
        onScroll(window.scrollY);
      }
    };

    // Add event listeners
    window.addEventListener('keydown', handleEsc);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    // Initial scroll check
    handleScroll();

    // Clean up event listeners
    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onEscape, onResize, onScroll, scrollThreshold]);

  return { isScrolled };
};

export default useWindowEvents; 