import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <>
      <section className="container grid items-center gap-8 py-16 sm:py-24 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Control your energy. Save every month.</h1>
          <p className="text-lg text-gray-700">VoltSense learns your home’s patterns to cut waste without cutting comfort.</p>
          <div className="flex gap-4">
            <Button asChild aria-label="Get Started">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/features">See Features</Link>
            </Button>
          </div>
          <p className="text-sm text-gray-600">30-day money-back guarantee. No hardware lock-in.</p>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-muted shadow-card">
          <Image
            src="https://images.unsplash.com/photo-1584276433295-4b12ac6b6e1b?q=80&w=1600&auto=format&fit=crop"
            alt="VoltSense dashboard preview"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="container py-12">
        <div className="flex items-center justify-center gap-12 opacity-80 grayscale">
          <Logo name="GridCo" />
          <Logo name="EcoTech" />
          <Logo name="HomeFlow" />
        </div>
      </section>

      <section className="container py-16">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <BoltIcon />
                <h3 className="text-lg font-semibold">Measure</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p>VoltSense samples inverter and grid data in real time for accurate load profiling.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <BrainIcon />
                <h3 className="text-lg font-semibold">Learn</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p>On-device models learn patterns to predict peak usage and automate decisions.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <LeafIcon />
                <h3 className="text-lg font-semibold">Optimize</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p>Battery-friendly charge cycles reduce wear while keeping comfort uncompromised.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-16">
        <Card className="grid gap-6 p-0 md:grid-cols-2">
          <div className="relative min-h-[280px] overflow-hidden rounded-l-xl">
            <Image
              src="https://images.unsplash.com/photo-1602928358416-a923f8a99924?q=80&w=1600&auto=format&fit=crop"
              alt="Smart meter on wall"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 md:p-10">
            <h3 className="mb-4 text-2xl font-semibold">Why VoltSense</h3>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>Real-time inverter & grid monitoring</li>
              <li>Battery-friendly charge/discharge logic</li>
              <li>Home Assistant via MQTT, out of the box</li>
            </ul>
            <div className="mt-6">
              <Button asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
}

function Logo({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2" aria-label={`${name} logo`}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="10" fill="hsl(var(--color-border))" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" className="text-gray-500" />
      </svg>
      <span className="text-gray-500">{name}</span>
    </div>
  );
}

function BoltIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="hsl(var(--color-primary))" />
    </svg>
  );
}
function BrainIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 4a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4v4h2V4H8zm6 0h-2v14h2v-4a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z" fill="hsl(var(--color-accent))" />
    </svg>
  );
}
function LeafIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2C7 2 4 8 4 12s3 8 8 8 8-3 8-8C20 7 17 2 12 2zm0 4c3 0 6 2 6 6-4 0-6-3-6-6z" fill="#22c55e" />
    </svg>
  );
}
