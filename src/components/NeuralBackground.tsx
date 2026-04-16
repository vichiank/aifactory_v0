"use client"

import * as React from "react";
import { motion } from "motion/react";

export function NeuralBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);
    resize();

    // Neural Network Parameters
    const nodeCount = 60;
    const connectionDistance = 200;
    const nodes: Node[] = [];

    interface Node {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      radius: number;
    }

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        // Wrap around
        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;
        if (node.z < 0) node.z = 1000;
        if (node.z > 1000) node.z = 0;

        // 3D Projection
        const perspective = 800 / (800 + node.z);
        const px = (node.x - width / 2) * perspective + width / 2;
        const py = (node.y - height / 2) * perspective + height / 2;
        const pr = node.radius * perspective;

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dz = node.z - other.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.3 * perspective;
            ctx.beginPath();
            ctx.moveTo(px, py);
            
            const otherPerspective = 800 / (800 + other.z);
            const opx = (other.x - width / 2) * otherPerspective + width / 2;
            const opy = (other.y - height / 2) * otherPerspective + height / 2;
            
            ctx.lineTo(opx, opy);
            ctx.strokeStyle = `rgba(0, 245, 255, ${opacity})`;
            ctx.lineWidth = 0.5 * perspective;
            ctx.stroke();

            // Data Streams (Particles moving along connections)
            if (Math.random() < 0.001) {
              // We could animate particles here, but for performance we'll keep it simple
            }
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(px, py, pr, 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? `rgba(138, 43, 226, ${0.8 * perspective})` : `rgba(0, 245, 255, ${0.8 * perspective})`;
        ctx.fill();
        
        // Glow effect
        if (perspective > 0.6) {
          ctx.shadowBlur = 10 * perspective;
          ctx.shadowColor = i % 3 === 0 ? "#8A2BE2" : "#00F5FF";
        } else {
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
    />
  );
}
