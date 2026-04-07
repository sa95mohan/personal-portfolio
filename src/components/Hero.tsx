"use client";

import Image from "next/image";

const photos = [
  { src: "/photos/portrait-standing.jpg", alt: "Portrait", top: "2%", left: "1%", rotate: "-6deg", w: 160, h: 200 },
  { src: "/photos/running.jpg", alt: "Running", top: "-2%", left: "28%", rotate: "4deg", w: 180, h: 130 },
  { src: "/photos/marathon.jpg", alt: "Oakland Marathon", top: "0%", left: "55%", rotate: "-3deg", w: 150, h: 190 },
  { src: "/photos/surf1.jpg", alt: "Surfing", top: "-1%", left: "80%", rotate: "5deg", w: 190, h: 130 },
  { src: "/photos/climbing.jpg", alt: "Rock climbing", top: "35%", left: "-2%", rotate: "-4deg", w: 140, h: 200 },
  { src: "/photos/sitting.jpg", alt: "Portrait sitting", top: "38%", left: "88%", rotate: "6deg", w: 150, h: 180 },
  { src: "/photos/surf2.jpg", alt: "Surfing wave", bottom: "2%", left: "15%", rotate: "3deg", w: 190, h: 130 },
  { src: "/photos/portrait.jpg", alt: "Portrait close", bottom: "1%", left: "45%", rotate: "-5deg", w: 160, h: 160 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Scattered photos */}
      {photos.map((photo, i) => (
        <div
          key={i}
          className="absolute rounded-2xl overflow-hidden border border-white/10 shadow-2xl opacity-70 hover:opacity-100 hover:scale-110 hover:z-20 transition-all duration-500 cursor-pointer"
          style={{
            top: photo.top,
            bottom: (photo as { bottom?: string }).bottom,
            left: photo.left,
            transform: `rotate(${photo.rotate})`,
            width: photo.w,
            height: photo.h,
          }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}

      {/* Center text */}
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
          <span className="text-foreground">Saurabh Mohan</span>{" "}
          <span className="text-muted">is a Builder who loves to explore</span>
        </h1>
      </div>
    </section>
  );
}
