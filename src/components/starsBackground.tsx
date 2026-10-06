const STARS_PER_LAYER = 20;

// deterministik (tanpa Math.random) supaya server dan client render sama
const frac = (n: number) => n - Math.floor(n);

// Tiap bintang ditulis dua kali (y dan y + 100vh) supaya loop translateY(-100vh) mulus.
function buildShadows(seed: number) {
    const shadows: string[] = [];
    for (let i = 0; i < STARS_PER_LAYER; i++) {
        const x = Math.round(frac(Math.sin((i + 1) * 12.9898 + seed) * 43758.5453) * 100);
        const y = Math.round(frac(Math.sin((i + 1) * 78.233 + seed) * 12345.6789) * 100);
        const spread = Math.floor(frac(Math.sin((i + 1) * 39.346 + seed) * 9876.54) * 3);
        const alpha = 35 + Math.round(frac(Math.sin((i + 1) * 11.135 + seed) * 5432.1) * 30);
        const color = `color-mix(in srgb, var(--primary) ${alpha}%, transparent)`;
        shadows.push(`${x}vw ${y}vh 0 ${spread}px ${color}`);
        shadows.push(`${x}vw ${y + 100}vh 0 ${spread}px ${color}`);
    }
    return shadows.join(",");
}

const layers = [
    { shadow: buildShadows(0), duration: 60, delay: 0 },
    { shadow: buildShadows(7), duration: 90, delay: -45 },
];

export default function StarsBackground() {
    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            {layers.map((layer, i) => (
                <div
                    key={i}
                    className="star-layer absolute left-0 top-0 h-0.5 w-0.5 rounded-full"
                    style={{
                        boxShadow: layer.shadow,
                        animation: `drift-up ${layer.duration}s linear ${layer.delay}s infinite`,
                    }}
                />
            ))}
        </div>
    );
}
