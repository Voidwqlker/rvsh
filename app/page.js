'use client';

export default function RVSHLandingPage() {
  const services = [
    {
      title: 'Fuel Delivery',
      desc: 'Out of fuel late at night? RVSH gets nearby fuel assistance to your location quickly.',
      icon: '⛽',
    },
    {
      title: 'Flat Tyre Help',
      desc: 'Connect with nearby roadside helpers for puncture and tyre assistance.',
      icon: '🛞',
    },
    {
      title: 'Battery Support',
      desc: 'Dead battery or ignition issue? RVSH helps you get moving again.',
      icon: '🔋',
    },
    {
      title: 'Emergency Mechanic',
      desc: 'Get connected with trusted nearby mechanics during breakdown situations.',
      icon: '🛠️',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Share your location',
      desc: 'Tell us your issue and send your live location through WhatsApp.',
    },
    {
      step: '02',
      title: 'RVSH finds nearby help',
      desc: 'We connect you with a verified roadside helper closest to your location.',
    },
    {
      step: '03',
      title: 'Get back on the road',
      desc: 'Track arrival updates and continue your journey with less stress.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-700 rounded-full px-5 py-2 text-sm text-zinc-300 mb-8 backdrop-blur-sm">
                RVSH • 24×7 Verified Roadside Assistance
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                Stvck on the road?
                <span className="block text-zinc-400 mt-3">
                  RVSH gets help to you.
                </span>
              </h1>

              <p className="mt-8 text-lg text-zinc-400 max-w-xl leading-relaxed">
                Fuel delivery, puncture support, battery help, and emergency roadside assistance from nearby verified helpers — so you are never stranded alone.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919999999999"
                  className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 shadow-2xl"
                >
                  Get Help on WhatsApp
                </a>

                <a
                  href="#services"
                  className="border border-zinc-700 bg-zinc-900/50 px-8 py-4 rounded-2xl text-white hover:bg-zinc-800 transition duration-300"
                >
                  Explore Services
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-zinc-500">
                <div>✔ Verified Helpers</div>
                <div>✔ Faster Response</div>
                <div>✔ Late Night Assistance</div>
              </div>
            </div>

            {/* Hero Card */}
            <div className="relative">
              <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-[32px] p-8 shadow-[0_0_60px_rgba(255,255,255,0.06)] backdrop-blur-sm">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-zinc-500 text-sm">Live Assistance</p>
                    <h3 className="text-3xl font-bold mt-1">RVSH Active Request</h3>
                  </div>

                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                    Live
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">
                    <p className="text-zinc-500 text-sm">Issue</p>
                    <p className="mt-1 text-xl font-semibold">Bike Fuel Emergency</p>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">
                    <p className="text-zinc-500 text-sm">Location</p>
                    <p className="mt-1">Pune Highway • 4.2 KM Away</p>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">
                    <p className="text-zinc-500 text-sm">Helper Assigned</p>
                    <p className="mt-1">RVSH Verified Roadside Helper</p>
                  </div>

                  <div className="bg-white text-black rounded-2xl p-5">
                    <p className="text-sm opacity-70">Estimated Arrival</p>
                    <p className="text-4xl font-bold mt-1">18 mins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
            Services
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            Roadside problems RVSH helps solve.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-zinc-900/70 border border-zinc-800 rounded-[28px] p-8 hover:border-zinc-600 hover:-translate-y-1 transition duration-300"
            >
              <div className="text-5xl mb-6">{service.icon}</div>

              <h3 className="text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 text-zinc-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="border-y border-zinc-800 bg-zinc-950/70">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
              How RVSH Works
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              Fast help during stressful situations.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {steps.map((item) => (
              <div
                key={item.step}
                className="bg-black border border-zinc-800 rounded-[28px] p-8"
              >
                <div className="text-zinc-500 text-sm font-semibold tracking-wider">
                  {item.step}
                </div>

                <h3 className="text-2xl font-bold mt-5 leading-snug">
                  {item.title}
                </h3>

                <p className="mt-5 text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-[40px] p-12 lg:p-20 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

          <div className="relative">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              RVSH roadside support.
              <span className="block text-zinc-500 mt-3">
                Reliable when it matters most.
              </span>
            </h2>

            <p className="mt-8 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Whether you are stranded at night, stuck in another city, or dealing with a sudden breakdown — RVSH helps you connect with nearby trusted roadside assistance quickly.
            </p>

            <a
              href="https://wa.me/919999999999"
              className="inline-flex items-center justify-center mt-10 bg-white text-black px-10 py-5 rounded-2xl font-semibold hover:scale-105 transition-transform duration-300"
            >
              Contact RVSH on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
          <div className="font-semibold tracking-wide">RVSH</div>

          <div>
            Rapid Vehicle Support Hub
          </div>
        </div>
      </footer>
    </div>
  );
}