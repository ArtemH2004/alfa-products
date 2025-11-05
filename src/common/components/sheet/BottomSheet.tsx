"use client";
import { useEffect, useRef, useState, useCallback } from "react";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  snapPoints?: number[];
}

export const BottomSheet = ({
  isOpen,
  onClose,
  children,
  title,
  snapPoints = [300, 500]
}: BottomSheetProps) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setIsMounted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isMounted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMounted]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
    setCurrentY(e.touches[0].clientY);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    setCurrentY(e.touches[0].clientY);
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    const dragDistance = currentY - startY;
    
    if (dragDistance > 100) {
      handleClose();
    }
    
    setCurrentY(0);
    setStartY(0);
  }, [isDragging, currentY, startY]);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === backdropRef.current) {
      handleClose();
    }
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 250);
  }, [onClose]);

  if (!isMounted) return null;

  const dragDistance = isDragging ? Math.max(0, currentY - startY) : 0;
  const transform = isDragging 
    ? `translateY(${dragDistance}px)`
    : isVisible 
      ? 'translateY(0)' 
      : 'translateY(100%)';

  return (
    <div className="fixed inset-0 z-1000">
      <div
        ref={backdropRef}
        onClick={handleBackdropClick}
        className={`absolute inset-0 bg-shadow transition-sm ${
          isVisible ? "bg-opacity-100" : "bg-opacity-0"
        }`}
      />
      
      <div
        ref={sheetRef}
        style={{ transform }}
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg bg-white rounded-t-3xl border-default border-b-0 shadow-default max-h-[90vh] overflow-hidden transition-sm ${
          isDragging ? "transition-none" : ""
        }`}
      >
        <div
          className="flex-center py-5 cursor-pointer touch-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={handleClose}
        >
          <div className="w-17.5 h-0.75 bg-black rounded-full" />
        </div>

        {title && (
          <div className="pb-3.75">
            <h2 className="text-black text-center leading-4.5">{title}</h2>
          </div>
        )}

        <div className="overflow-y-auto scrollbar-hide max-h-[calc(90vh-80px)] relative">
          {children}
        </div>
      </div>
    </div>
  );
};