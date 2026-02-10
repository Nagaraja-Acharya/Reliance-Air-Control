import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const AnimateOnScroll = ({ children, delay = 0, className = "" }: AnimateOnScrollProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
