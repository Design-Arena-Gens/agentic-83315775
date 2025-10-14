import { Card, CardContent, CardHeader } from '@/components/ui/Card';

const features = [
  { title: 'Real-time monitoring', desc: 'Second-by-second inverter and grid sampling', icon: '⚡' },
  { title: 'Battery care', desc: 'Adaptive charge/discharge extends lifespan', icon: '🔋' },
  { title: 'MQTT integration', desc: 'Works with Home Assistant immediately', icon: '📡' },
  { title: 'Local-first', desc: 'Your data stays at home', icon: '🏠' },
  { title: 'Smart schedules', desc: 'Tariff-aware automations to save more', icon: '🕒' },
  { title: 'Open APIs', desc: 'Hackable endpoints and webhooks', icon: '🧰' },
];

export default function FeaturesPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">Features</h1>
      <p className="mt-2 text-gray-700">Everything you need to understand, automate, and optimize home energy.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden>{f.icon}</span>
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-semibold">Compare</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse overflow-hidden rounded-xl border border-border bg-card shadow-card">
          <thead className="bg-muted">
            <tr>
              <th className="p-3 text-left">Capability</th>
              <th className="p-3 text-left">VoltSense</th>
              <th className="p-3 text-left">Generic Monitor X</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Sampling rate', '1s', '10s'],
              ['Battery optimization', 'Yes', 'Limited'],
              ['MQTT / Home Assistant', 'Built-in', 'Requires add-on'],
              ['Local processing', 'Yes', 'No'],
              ['APIs / Webhooks', 'Open', 'Closed'],
              ['Tariff-aware schedules', 'Yes', 'No'],
            ].map(([cap, v, x]) => (
              <tr key={cap} className="border-t border-border">
                <td className="p-3 font-medium">{cap}</td>
                <td className="p-3">{v}</td>
                <td className="p-3">{x}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-16 text-2xl font-semibold">Sample MQTT payload</h2>
      <p className="mt-2 text-gray-700">Published on <code>voltsense/home/telemetry</code></p>
      <pre className="mt-4 overflow-x-auto rounded-lg border border-border bg-black p-4 text-sm text-green-300">
{`{
  "ts": 1697049600,
  "grid_w": 420,
  "inverter_w": 860,
  "battery_soc": 72,
  "mode": "optimize",
  "alerts": []
}`}
      </pre>
    </div>
  );
}
