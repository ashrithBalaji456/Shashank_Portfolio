import React, { useEffect, useRef } from 'react';

const ParticleBackground = ({ theme = 'dark' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Interaction settings
    const mouse = {
      x: null,
      y: null,
      radius: 120, // Distance of repulsion
    };

    // Physics parameters
    const springStrength = 0.03;
    const friction = 0.85;
    const repulsionStrength = 5.0;
    const dotSpacing = 28; // Spacing between grid dots
    const colors = theme === 'dark' 
      ? [
          '#0A66C2', // LinkedIn blue
          '#3b82f6', // Electric blue
          '#8b5cf6', // Violet
          '#ec4899', // Magenta
          '#f59e0b', // Yellow/Orange
          '#ef4444', // Red
        ]
      : [
          '#0A66C2', // LinkedIn blue
          '#1d4ed8', // Darker blue
          '#6d28d9', // Darker violet
          '#be185d', // Darker magenta
          '#b45309', // Darker amber
          '#b91c1c', // Darker red
        ];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.vx = 0;
        this.vy = 0;
        this.radius = Math.random() * 1.5 + 1.2; // Dot size
        
        // Assign a color based on its coordinates to create a gradient or matrix effect
        const colorIndex = Math.floor((x + y) / 150) % colors.length;
        this.color = colors[colorIndex];
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Calculate distance from mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            // Force strength falls off with distance
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            
            // Push particle away from mouse
            this.vx -= Math.cos(angle) * force * repulsionStrength;
            this.vy -= Math.sin(angle) * force * repulsionStrength;
          }
        }

        // Return to base position (spring physics)
        const dxBase = this.baseX - this.x;
        const dyBase = this.baseY - this.y;
        
        this.vx += dxBase * springStrength;
        this.vy += dyBase * springStrength;

        // Apply friction/damping
        this.vx *= friction;
        this.vy *= friction;

        // Update position
        this.x += this.vx;
        this.y += this.vy;
      }
    }

    const initGrid = () => {
      particles = [];
      const width = canvas.width;
      const height = canvas.height;

      // Create a grid of particles spanning the screen
      for (let x = dotSpacing / 2; x < width; x += dotSpacing) {
        for (let y = dotSpacing / 2; y < height; y += dotSpacing) {
          particles.push(new Particle(x, y));
        }
      }
    };

    const resizeCanvas = () => {
      // Handle high DPI screens
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;

      ctx.scale(dpr, dpr);
      initGrid();
    };

    // Initialize and bind events
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    // Touch support for mobile
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    });
    window.addEventListener('touchend', handleMouseLeave);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Reduce particle opacity for clean contrast under text overlays
      ctx.globalAlpha = theme === 'dark' ? 0.35 : 0.22;

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none',
        display: 'block',
        background: 'var(--bg-dark)',
        transition: 'background var(--transition-normal)',
      }}
    />
  );
};

export default ParticleBackground;
