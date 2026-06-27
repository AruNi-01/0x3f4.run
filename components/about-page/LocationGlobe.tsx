"use client";

import createGlobe from "cobe";
import { useTheme } from "next-themes";
import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";

const countryMarkers = [
  { id: "canada", flag: "🇨🇦", location: [56.1304, -106.3468] as [number, number], size: 0.08 },
  { id: "usa", flag: "🇺🇸", location: [39.8283, -98.5795] as [number, number], size: 0.085 },
  { id: "mexico", flag: "🇲🇽", location: [23.6345, -102.5528] as [number, number], size: 0.075 },
  { id: "brazil", flag: "🇧🇷", location: [-14.235, -51.9253] as [number, number], size: 0.085 },
  { id: "argentina", flag: "🇦🇷", location: [-38.4161, -63.6167] as [number, number], size: 0.075 },
  { id: "uk", flag: "🇬🇧", location: [55.3781, -3.436] as [number, number], size: 0.07 },
  { id: "france", flag: "🇫🇷", location: [46.2276, 2.2137] as [number, number], size: 0.07 },
  { id: "germany", flag: "🇩🇪", location: [51.1657, 10.4515] as [number, number], size: 0.07 },
  { id: "spain", flag: "🇪🇸", location: [40.4637, -3.7492] as [number, number], size: 0.07 },
  { id: "italy", flag: "🇮🇹", location: [41.8719, 12.5674] as [number, number], size: 0.07 },
  { id: "russia", flag: "🇷🇺", location: [61.524, 105.3188] as [number, number], size: 0.09 },
  { id: "turkey", flag: "🇹🇷", location: [38.9637, 35.2433] as [number, number], size: 0.07 },
  { id: "egypt", flag: "🇪🇬", location: [26.8206, 30.8025] as [number, number], size: 0.07 },
  { id: "nigeria", flag: "🇳🇬", location: [9.082, 8.6753] as [number, number], size: 0.075 },
  { id: "south-africa", flag: "🇿🇦", location: [-30.5595, 22.9375] as [number, number], size: 0.075 },
  { id: "saudi", flag: "🇸🇦", location: [23.8859, 45.0792] as [number, number], size: 0.075 },
  { id: "uae", flag: "🇦🇪", location: [23.4241, 53.8478] as [number, number], size: 0.065 },
  { id: "china", flag: "🇨🇳", location: [35.8617, 104.1954] as [number, number], size: 0.1 },
  { id: "india", flag: "🇮🇳", location: [20.5937, 78.9629] as [number, number], size: 0.095 },
  { id: "japan", flag: "🇯🇵", location: [36.2048, 138.2529] as [number, number], size: 0.07 },
  { id: "south-korea", flag: "🇰🇷", location: [35.9078, 127.7669] as [number, number], size: 0.065 },
  { id: "indonesia", flag: "🇮🇩", location: [-0.7893, 113.9213] as [number, number], size: 0.08 },
  { id: "thailand", flag: "🇹🇭", location: [15.87, 100.9925] as [number, number], size: 0.065 },
  { id: "vietnam", flag: "🇻🇳", location: [14.0583, 108.2772] as [number, number], size: 0.065 },
  { id: "philippines", flag: "🇵🇭", location: [12.8797, 121.774] as [number, number], size: 0.065 },
  { id: "australia", flag: "🇦🇺", location: [-25.2744, 133.7751] as [number, number], size: 0.08 },
  { id: "new-zealand", flag: "🇳🇿", location: [-40.9006, 174.886] as [number, number], size: 0.065 },
];

function getAnchorStyle(id: string): CSSProperties {
  return {
    position: "absolute",
    left: "anchor(center)" as never,
    top: "anchor(center)" as never,
    transform: "translate(-50%, -50%)",
    opacity: `var(--cobe-visible-${id}, 0)` as never,
    filter: `blur(calc((1 - var(--cobe-visible-${id}, 0)) * 10px))` as never,
    pointerEvents: "none",
    zIndex: 10,
    ["positionAnchor" as keyof CSSProperties]: `--cobe-${id}` as never,
  };
}

function getPulseAnchorStyle(): CSSProperties {
  return {
    position: "absolute",
    left: "anchor(center)" as never,
    top: "anchor(center)" as never,
    transform: "translate(-50%, -50%)",
    opacity: `var(--cobe-visible-current, 0)` as never,
    filter: `blur(calc((1 - var(--cobe-visible-current, 0)) * 10px))` as never,
    pointerEvents: "none",
    zIndex: 12,
    ["positionAnchor" as keyof CSSProperties]: "--cobe-current" as never,
  };
}

export default function LocationGlobe({
  coordinates,
  className,
}: {
  coordinates: [number, number];
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const pointerMovement = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    let phi = 4.2;
    let theta = 0.28;
    let animationFrameId = 0;
    let width = 1;
    let height = 1;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width: 960,
      height: 960,
      phi,
      theta,
      dark: theme === "dark" ? 1 : 0,
      diffuse: 1.2,
      mapSamples: 18000,
      mapBrightness: theme === "dark" ? 5 : 7,
      mapBaseBrightness: theme === "dark" ? 0.02 : 0.08,
      baseColor: theme === "dark" ? [0.22, 0.29, 0.5] : [0.9, 0.93, 1],
      markerColor: [1, 0.43, 0.2],
      glowColor: theme === "dark" ? [0.3, 0.42, 0.9] : [0.72, 0.8, 1],
      markers: [
        { id: "current", location: coordinates, size: 0.001, color: [0.22, 0.84, 0.46] },
        ...countryMarkers.map(({ id, location, size }) => ({
          id,
          location,
          size: size * 0.001,
          color: theme === "dark" ? ([0.75, 0.82, 1] as [number, number, number]) : ([0.25, 0.42, 0.82] as [number, number, number]),
        })),
      ],
      markerElevation: 0.04,
      scale: 1.08,
    });

    const onResize = () => {
      if (!canvasRef.current) {
        return;
      }

      width = canvasRef.current.offsetWidth;
      height = canvasRef.current.offsetHeight;
    };

    onResize();
    window.addEventListener("resize", onResize);

    const animate = () => {
      if (!pointerInteracting.current) {
        phi += 0.0035;
      } else {
        const deltaX = pointerMovement.current.x / width;
        const deltaY = pointerMovement.current.y / height;

        phi += deltaX * 4.5;
        theta = Math.max(-0.7, Math.min(0.7, theta + deltaY * 2.4));
        pointerMovement.current = { x: 0, y: 0 };
      }

      globe.update({ phi, theta });
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(animationFrameId);
      globe.destroy();
    };
  }, [coordinates, theme]);

  return (
    <div className={`flex h-full w-full items-center justify-center ${className ?? ""}`}>
      <div className="relative flex h-[20rem] w-[20rem] items-center justify-center md:h-[28rem] md:w-[28rem]">
        <canvas
          ref={canvasRef}
          className="h-[20rem] w-[20rem] cursor-grab active:cursor-grabbing md:h-[28rem] md:w-[28rem]"
          style={{ width: 448, height: 448 }}
          onPointerDown={(event) => {
            pointerInteracting.current = { x: event.clientX, y: event.clientY };
            (event.target as HTMLCanvasElement).setPointerCapture(event.pointerId);
          }}
          onPointerUp={(event) => {
            pointerInteracting.current = null;
            (event.target as HTMLCanvasElement).releasePointerCapture(event.pointerId);
          }}
          onPointerOut={() => {
            pointerInteracting.current = null;
          }}
          onPointerMove={(event) => {
            if (pointerInteracting.current !== null) {
              pointerMovement.current = {
                x: event.clientX - pointerInteracting.current.x,
                y: event.clientY - pointerInteracting.current.y,
              };
              pointerInteracting.current = { x: event.clientX, y: event.clientY };
            }
          }}
        />
        {countryMarkers.map(({ id, flag }) => (
          <span
            key={id}
            className="flex h-6 w-6 items-center justify-center text-base drop-shadow-[0_2px_6px_rgba(15,23,42,0.35)]"
            style={getAnchorStyle(id)}
          >
            {flag}
          </span>
        ))}
        <span className="relative flex h-9 w-9 items-center justify-center" style={getPulseAnchorStyle()}>
          <span
            className="absolute inline-flex h-9 w-9 rounded-full border-2 border-blue-400/30"
            style={{ animation: "ping 2.2s cubic-bezier(0, 0, 0.2, 1) infinite" }}
          />
          <span
            className="absolute inline-flex h-7 w-7 rounded-full border-2 border-blue-500/45"
            style={{ animation: "ping 2.2s cubic-bezier(0, 0, 0.2, 1) infinite", animationDelay: "0.45s" }}
          />
          <span className="absolute inline-flex h-5 w-5 rounded-full border-4 border-blue-600 bg-white shadow-[0_0_14px_rgba(59,130,246,0.32)] dark:border-blue-400 dark:bg-slate-950" />
          <span className="absolute inline-flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
        </span>
      </div>
    </div>
  );
}
