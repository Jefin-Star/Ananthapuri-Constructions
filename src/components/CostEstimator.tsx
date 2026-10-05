import React, { useState } from 'react';
import { Calculator, MessageSquare, ArrowRight, Check, HelpCircle } from 'lucide-react';
import { COMPANY_DETAILS, getWhatsAppLink } from '../data/companyData.ts';

interface TierOption {
  id: string;
  name: string;
  rateLabel: string;
  multiplier: number;
  badge: string;
  description: string;
  specs: string[];
}

const TIERS: TierOption[] = [
  {
    id: 'premium',
    name: 'Executive Premium',
    rateLabel: 'From ₹1,580 / sq.ft (19 Lakhs)',
    multiplier: 1.0,
    badge: 'Starter & Standard',
    description: 'Engineered for enduring strength and modern comfort starting at 19 Lakhs for 1,200 sq.ft.',
    specs: [
      'Tata Tiscon 550D TMT Rebar & UltraTech 53 Cement',
      'Solid concrete block masonry with 12mm plastering',
      'Premium 800x1200mm Glazed Vitrified Tiles',
      'Cera / Parryware Premium sanitary fixtures'
    ]
  },
  {
    id: 'luxury',
    name: 'Luxury Villa',
    rateLabel: 'From ₹1,980 / sq.ft',
    multiplier: 1.25,
    badge: 'Most Popular',
    description: 'Our signature luxury specification featuring imported marble, teak joinery, and designer elevations.',
    specs: [
      'Engineered earthquake-resistant raft or pile foundation',
      'Italian Botticino / Statuario Marble in main living halls',
      'First-class Nilambur Teakwood front door & internal frames',
      'Kohler / Grohe concealed thermostatic bath fittings'
    ]
  },
  {
    id: 'royal',
    name: 'Royal Heritage Fusion',
    rateLabel: 'From ₹2,380 / sq.ft',
    multiplier: 1.50,
    badge: 'Ultra-Bespoke',
    description: 'Palatial craftsmanship with full solid teakwood millwork, automation, and architectural water bodies.',
    specs: [
      'Complete 100% solid seasoned teakwood interior carpentry',
      'Double-height cantilevered ceilings & skylights',
      'Smart home wireless lighting & security automation',
      'Courtyard reflecting water pool & rooftop pergola terrace'
    ]
  }
];

export const CostEstimator: React.FC = () => {
  const [area, setArea] = useState<number>(1200);
  const [selectedTier, setSelectedTier] = useState<string>('premium');
  const [floors, setFloors] = useState<number>(1);
  const [includeFullInteriors, setIncludeFullInteriors] = useState<boolean>(true);

  const activeTier = TIERS.find(t => t.id === selectedTier) || TIERS[0];

  // Base tier scaling: 1,200 sq.ft = 19 Lakhs (1,900,000) scaling smoothly to 12,000 sq.ft = 3.96 Crores (39,600,000)
  const minArea = 1200;
  const maxArea = 12000;
  const minCost = 1900000;
  const maxCost = 39600000;
  const slope = (maxCost - minCost) / (maxArea - minArea);
  const baseScaledCost = minCost + (Math.max(minArea, area) - minArea) * slope;

  // Tier multiplier, interior package adjustment, and floor grade
  const tierMultiplier = activeTier.multiplier;
  const interiorMultiplier = includeFullInteriors ? 1.0 : 0.85;
  const floorAdjustment = (floors - 1) * 0.03;
  const totalEstimatedCost = Math.round(baseScaledCost * tierMultiplier * interiorMultiplier * (1 + floorAdjustment));
  const effectiveRatePerSqFt = Math.round(totalEstimatedCost / Math.max(1, area));

  // Approximate materials calculation for engineering transparency
  const approxSteelTonnes = ((area * 3.8) / 1000).toFixed(1);
  const approxCementBags = Math.round(area * 0.42);
  const approxTimelineMonths = Math.max(5, Math.round(area / 450));

  const formatLakhsCrores = (val: number) => {
    if (val >= 10000000) {
      const cr = val / 10000000;
      return Number.isInteger(cr) ? `₹${cr} Crores` : `₹${cr.toFixed(2)} Crores`;
    }
    const lk = val / 100000;
    return Number.isInteger(lk) ? `₹${lk} Lakhs` : `₹${lk.toFixed(2)} Lakhs`;
  };

  const getCustomWhatsAppMsg = () => {
    const text = `Hello G. Sudheer, I generated a preliminary estimate for:
- Built-up Area: ${area.toLocaleString()} sq.ft
- Package: ${activeTier.name} (${activeTier.badge})
- Floors: ${floors} Floor(s)
- Turnkey Interiors Included: ${includeFullInteriors ? 'Yes (Teak & Modular)' : 'Basic Civil Shell Only'}
- Estimated Budget Range: ${formatLakhsCrores(totalEstimatedCost)}
- Estimated Timeline: ~${approxTimelineMonths} Months

Please review my requirement and schedule a plot visit / share a detailed Bill of Quantities (BOQ).`;
    return getWhatsAppLink(text);
  };

  return (
    <section id="estimator" className="py-24 bg-[#0e1117] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a880] mb-2 flex items-center gap-2">
            <Calculator className="w-4 h-4 text-[#c5a880]" />
            <span>Transparent Budget Planning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
            Interactive Construction Cost & Timeline Estimator
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Gain immediate budgetary clarity based on verified Trivandrum construction indices, 
            structural material standards, and turnkey interior grades.
          </p>
        </div>

        {/* 2-Column Calculator Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#12151e] border border-white/10 space-y-8 shadow-xl">
            {/* Input 1: Built-up Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor="area-slider" className="text-sm font-semibold text-white">
                  Built-up Area (Sq.Ft)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1200"
                    max="15000"
                    step="100"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-28 px-3 py-1.5 text-right font-mono text-base font-bold bg-[#0a0c10] border border-white/10 rounded-lg text-[#c5a880] focus:outline-none focus:border-[#c5a880]"
                  />
                  <span className="text-xs text-neutral-400">sq.ft</span>
                </div>
              </div>

              <input
                id="area-slider"
                type="range"
                min="1200"
                max="12000"
                step="100"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#c5a880]"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 font-mono mt-1">
                <span>1,200 sq.ft (19 Lakhs)</span>
                <span>5,000 sq.ft</span>
                <span>12,000 sq.ft (3.96 Crores)</span>
              </div>
            </div>

            {/* Input 2: Construction Grade Selection */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Select Architectural & Finish Grade
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TIERS.map((tier) => {
                  const isSelected = tier.id === selectedTier;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedTier(tier.id)}
                      className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#181d2a] border-[#c5a880] shadow-md shadow-[#c5a880]/10'
                          : 'bg-[#0f121a] border-white/5 hover:border-white/15'
                      }`}
                    >
                      <div>
                        <div className="text-[10px] font-mono text-[#c5a880] uppercase tracking-wider mb-1">
                          {tier.badge}
                        </div>
                        <div className="text-sm font-bold text-white mb-1">
                          {tier.name}
                        </div>
                        <div className="text-xs font-mono text-neutral-300">
                          {tier.rateLabel}
                        </div>
                      </div>
                      <div className="mt-3 pt-2 border-t border-white/5 text-[11px] text-neutral-400">
                        {tier.description}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input 3: Number of Floors & Turnkey Interior Toggle */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  Number of Floors
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFloors(f)}
                      className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                        floors === f
                          ? 'bg-[#c5a880] text-slate-950 border-[#c5a880]'
                          : 'bg-[#0e1118] text-neutral-300 border-white/5 hover:bg-[#141822]'
                      }`}
                    >
                      {f} {f === 1 ? 'Storey' : 'Storeys'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  Full Interior Fitout Package
                </label>
                <button
                  type="button"
                  onClick={() => setIncludeFullInteriors(!includeFullInteriors)}
                  className={`w-full py-2 px-3 text-xs font-medium rounded-lg border flex items-center justify-between transition-colors ${
                    includeFullInteriors
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                      : 'bg-[#0e1118] border-white/5 text-neutral-400'
                  }`}
                >
                  <span>{includeFullInteriors ? 'Teak Woodwork + Modular Kitchen' : 'Basic Civil Shell Only'}</span>
                  <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                    includeFullInteriors ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-neutral-600'
                  }`}>
                    {includeFullInteriors && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Estimated Valuation & Direct WhatsApp BOQ Dispatch */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#151926] border border-white/10 shadow-2xl space-y-6">
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#c5a880] mb-1">
                Estimated Project Investment
              </div>
              <div className="text-3xl sm:text-4xl font-cinzel font-bold text-white tabular-nums tracking-tight">
                {formatLakhsCrores(totalEstimatedCost)}
              </div>
              <div className="text-xs text-neutral-400 mt-1 font-mono">
                Approx. ₹{effectiveRatePerSqFt.toLocaleString()} per sq.ft all-inclusive
              </div>
            </div>

            {/* Engineering Metrics Breakdown */}
            <div className="p-4 rounded-xl bg-[#0e1118] border border-white/5 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                Material & Schedule Projection:
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-lg bg-[#141822]">
                  <div className="text-xs text-neutral-400">Duration</div>
                  <div className="text-sm font-bold text-white font-mono">{approxTimelineMonths} Mo.</div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#141822]">
                  <div className="text-xs text-neutral-400">Fe 550D Steel</div>
                  <div className="text-sm font-bold text-white font-mono">{approxSteelTonnes} T</div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#141822]">
                  <div className="text-xs text-neutral-400">Cement</div>
                  <div className="text-sm font-bold text-white font-mono">{approxCementBags.toLocaleString()} Bags</div>
                </div>
              </div>

              <div className="text-[11px] text-neutral-400 leading-normal pt-1">
                Includes architectural drawings, soil analysis, corporation liaison, structural stability certification, and labor charges.
              </div>
            </div>

            {/* Package Specifications Included */}
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-neutral-300 mb-2">
                Included in {activeTier.name}:
              </div>
              <div className="space-y-1.5">
                {activeTier.specs.map((s, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp BOQ Button */}
            <div className="pt-2">
              <a
                href={getCustomWhatsAppMsg()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-[#c5a880] hover:bg-[#d8bc94] active:bg-[#b0936b] rounded-lg transition-colors shadow-lg shadow-[#c5a880]/15"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Send Estimate to WhatsApp for Detailed BOQ</span>
              </a>
              <p className="text-[11px] text-neutral-500 text-center mt-2">
                G. Sudheer will personally review and send an itemized bill of quantities with zero obligation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
