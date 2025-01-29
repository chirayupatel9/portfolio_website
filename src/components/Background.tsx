import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
}

export const Background: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = window.innerWidth;
    const height = window.innerHeight;

    svg.selectAll("*").remove();

    particlesRef.current = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    }));

    svg.selectAll("circle")
      .data(particlesRef.current)
      .join("circle")
      .attr("r", d => d.radius)
      .attr("class", "fill-charcoal/20 dark:fill-cream/20 transition-colors duration-300");

    const handleMouseMove = (event: MouseEvent) => {
      const rect = svgRef.current!.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    };

    function animate() {
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      particles.forEach(particle => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = Math.min(100 / (distance * distance), 0.5);

        if (distance < 200) {
          particle.vx += (dx / distance) * force;
          particle.vy += (dy / distance) * force;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.vx *= 0.99;
        particle.vy *= 0.99;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        particle.x = Math.max(0, Math.min(width, particle.x));
        particle.y = Math.max(0, Math.min(height, particle.y));
      });

      svg.selectAll("circle")
        .data(particles)
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

      frameRef.current = requestAnimationFrame(animate);
    }

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      
      svg
        .attr("width", newWidth)
        .attr("height", newHeight);

      particlesRef.current.forEach(particle => {
        particle.x = Math.min(particle.x, newWidth);
        particle.y = Math.min(particle.y, newHeight);
      });
    };

    handleResize();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="w-full h-full"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};