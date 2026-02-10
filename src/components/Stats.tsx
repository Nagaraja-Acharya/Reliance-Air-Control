import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

const Counter = ({ end, suffix = "+", label }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.ceil(end / 60);
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 25);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-primary-foreground/70 text-sm">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="bg-navy py-16 px-4">
      <div className="container-narrow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter end={1000} label="Happy Customers" />
          <Counter end={10000} label="Projects Completed" />
          <Counter end={30} label="Years of Experience" />
          <Counter end={500} label="Active Installations" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
