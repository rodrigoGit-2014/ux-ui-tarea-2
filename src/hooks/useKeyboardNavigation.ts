import { useEffect } from 'react';

interface UseKeyboardNavigationProps {
  onNext: () => void;
  onPrev: () => void;
  isFirstSlide: boolean;
  isLastSlide: boolean;
}

export const useKeyboardNavigation = ({
  onNext,
  onPrev,
  isFirstSlide,
  isLastSlide,
}: UseKeyboardNavigationProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          if (!isLastSlide) {
            event.preventDefault();
            onNext();
          }
          break;
        case 'ArrowLeft':
        case 'PageUp':
          if (!isFirstSlide) {
            event.preventDefault();
            onPrev();
          }
          break;
        case 'Home':
          event.preventDefault();
          // Go to first slide handled by parent
          break;
        case 'End':
          event.preventDefault();
          // Go to last slide handled by parent
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev, isFirstSlide, isLastSlide]);
};
