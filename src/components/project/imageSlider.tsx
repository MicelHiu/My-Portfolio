"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider({ images, alt }: { images: string[]; alt: string }) {
    const [i, setI] = useState(0);
    const last = images.length - 1;

    return (
        <div className="relative mb-6 h-50 w-full overflow-hidden rounded-xl border border-primary/20 bg-background sm:h-65">
            <Image
                key={images[i]}
                src={images[i]}
                alt={`${alt} ${i + 1}`}
                fill
                sizes="(min-width: 768px) 560px, 100vw"
                className="object-contain"
            />
            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        aria-label="Previous image"
                        onClick={() => setI(i === 0 ? last : i - 1)}
                        className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                        type="button"
                        aria-label="Next image"
                        onClick={() => setI(i === last ? 0 : i + 1)}
                        className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                    <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                        {images.map((_, n) => (
                            <button
                                key={n}
                                type="button"
                                aria-label={`Show image ${n + 1}`}
                                onClick={() => setI(n)}
                                className={`h-1.5 rounded-full transition-all ${
                                    n === i ? "w-4 bg-white" : "w-1.5 bg-white/50"
                                }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}