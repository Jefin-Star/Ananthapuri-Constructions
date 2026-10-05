import { Project, ServiceItem, LiveProjectUpdate, Testimonial } from '../types.ts';
import heroImg from '../assets/images/hero_luxury_villa_1790832685578.jpg';
import modernResidenceImg from '../assets/images/project_modern_residence_1790832699293.jpg';
import luxuryInteriorImg from '../assets/images/project_luxury_interior_1790832711998.jpg';
import commercialComplexImg from '../assets/images/project_commercial_complex_1790832724038.jpg';
import constructionSiteImg from '../assets/images/craftsmanship_construction_1790832735855.jpg';
import brandLogoImg from '../assets/images/ananthapuri_logo_mark_1791175984299.jpg';

export const COMPANY_DETAILS = {
  name: 'Ananthapuri Constructions',
  founder: 'G. Sudheer',
  phoneDisplay: '+91 94475 52979',
  phoneRaw: '9447552979',
  whatsappNumber: '919447552979',
  email: 'Sudheerg05@gmail.com',
  instagramUrl: 'https://www.instagram.com/ananthapuri.constructions?stkn=Z3Y4YXFwYngyZnMy',
  instagramHandle: '@ananthapuri.constructions',
  address: 'TC 14/1920, Museum Bains Compound, Kowdiar / Pattom Road, Thiruvananthapuram, Kerala 695003',
  tagline: 'Precision Engineering & Bespoke Architectural Construction',
  experienceYears: 18,
  projectsCompleted: 140,
  sqftDelivered: '850,000+',
  satisfactionRate: '99.4%'
};

export const getWhatsAppLink = (message?: string) => {
  const defaultMsg = 'Hello Ananthapuri Constructions, I would like to inquire about your turnkey construction and architectural services.';
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${text}`;
};

export const HERO_IMAGE = heroImg;
export const CRAFTSMANSHIP_IMAGE = constructionSiteImg;
export const BRAND_LOGO = brandLogoImg;

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    code: 'AC-VILLA-ZENITH',
    title: 'The Zenith Luxury Villa',
    category: 'villas',
    categoryLabel: 'Luxury Villa',
    location: '',
    area: '6,450 sq.ft',
    completionYear: '2024',
    image: heroImg,
    description: 'A signature contemporary tropical residence blending architectural ethos with cantilevered geometric lines, imported teak wood finishes, and a seamless indoor-outdoor water body courtyard.',
    highlights: [
      'Cantilevered upper pavilion with zero structural column obstruction',
      'Integrated rainwater harvesting and solar micro-grid',
      'Custom acoustic insulation and acoustic glass glazing',
      'Automated climate control and indirect cove lighting'
    ],
    specs: {
      structure: 'Fe 550D Tata Tiscon High-Ductility TMT with M25 Ready-Mix Concrete',
      flooring: 'Italian Statuario Marble & Nilambur Teak Parquet',
      woodwork: 'First-Class Nilambur Teakwood for Main Frame & Shutters',
      features: 'Reflecting pool, private elevator, double-height foyer'
    },
    clientType: 'Private Residence',
    status: 'Completed'
  },
  {
    id: 'project-2',
    code: 'AC-RES-MINIMALIST',
    title: 'The Minimalist Architectural Enclave',
    category: 'residences',
    categoryLabel: 'Modern Residence',
    location: '',
    area: '4,800 sq.ft',
    completionYear: '2024',
    image: modernResidenceImg,
    description: 'Designed for multi-generational luxury living, featuring geometric louvers for natural cross-ventilation, climate-responsive textured facades, and an expansive landscaped roof deck.',
    highlights: [
      'Engineered natural louvers cutting solar thermal gain by 32%',
      'Custom landscaped courtyard with native flora',
      'Double car port with EV fast charging provisions',
      'Earthquake-resistant seismic structural framing'
    ],
    specs: {
      structure: 'Framed RCC Structure with UltraTech Super Concrete and Soil-Tested Raft Footing',
      flooring: 'Large Format 1200x2400mm Glazed Vitrified Slabs',
      woodwork: 'Treated Anjili & Teak Internal Joinery',
      features: 'Open-concept culinary suite, rooftop terrace pergola'
    },
    clientType: 'Turnkey Residential',
    status: 'Completed'
  },
  {
    id: 'project-3',
    code: 'AC-INT-KAVALUR',
    title: 'Heritage Atrium & Interior Architecture',
    category: 'interiors',
    categoryLabel: 'Interior Architecture',
    location: '',
    area: '5,200 sq.ft',
    completionYear: '2024',
    image: luxuryInteriorImg,
    description: 'Bespoke turnkey interior architecture for a palatial penthouse, integrating custom brass-inlaid fluted wall panelling, bespoke artisan lighting, and ergonomic imported modular kitchen joinery.',
    highlights: [
      'Hand-crafted brass and teakwood divider screens',
      'Acoustic ceiling baffles with hidden magnetic track lighting',
      'Concealed ducted VRV HVAC distribution',
      'Imported quartz worktops and soft-close Blum hardware'
    ],
    specs: {
      structure: 'Architectural Remodeling & Load-Bearing Beam Reinforcement',
      flooring: 'Bespoke Botticino Italian Marble with Brass Inlays',
      woodwork: 'PU Lacquered Marine Grade Birch Ply & Burma Teak Accents',
      features: 'Smart touch panels, bespoke wine cellar cabinet, spa bath suite'
    },
    clientType: 'Interior Architecture',
    status: 'Completed'
  },
  {
    id: 'project-4',
    code: 'AC-COMM-TECHOPOLIS',
    title: 'Apex Business Center & Corporate Suites',
    category: 'commercial',
    categoryLabel: 'Commercial Complex',
    location: '',
    area: '18,500 sq.ft',
    completionYear: '2023',
    image: commercialComplexImg,
    description: 'A 5-story commercial marvel engineered for corporate elegance and energy efficiency, showcasing double-glazed curtain wall facades, high-capacity passenger elevators, and LEED-compliant infrastructure.',
    highlights: [
      'Low-E insulated glass facade saving 28% HVAC load',
      'Heavy-duty floor loading capacity (5.0 kN/m²)',
      'Dual generator emergency backup with automatic synchronizer',
      'Fire-rated steel fire exit stairs and automated sprinkler network'
    ],
    specs: {
      structure: 'High-Strength Post-Tensioned Slab & Column RCC Framework',
      flooring: 'Anti-Skid Heavy Commercial Quartz Vitrified Tiles',
      woodwork: 'Fire Retardant Grade Composite Wall Cladding & Toughened Glass',
      features: 'Basement automated parking, central BMS monitoring'
    },
    clientType: 'Commercial Developer',
    status: 'Completed'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'architectural-structural',
    number: '01',
    title: 'Architectural & Structural Engineering',
    shortDesc: 'Code-compliant structural engineering, seismic resistance, and Vastu-harmonized layouts.',
    fullDesc: 'Led by certified structural engineers, we engineer structures that withstand time and elements. Combining Kerala climatic challenges (heavy monsoon precipitation, coastal humidity) with modern cantilevered spatial designs, our structural drawings guarantee zero crack propagation and lifelong stability.',
    deliverables: [
      'STAAD.Pro & ETABS structural analysis reports',
      'Vastu-compliant architectural floor layouts',
      'Plumbing, HVAC, electrical, and drainage schematic diagrams',
      'Detailed Bill of Quantities (BOQ) with transparent line items'
    ],
    materials: [
      'Earthquake Zone III structural resistance parameters',
      'High grade anti-corrosive concrete admixtures',
      'Finolex / RR Kabel FR-LSH fire-resistant copper wiring',
      'Ashirvad / Astral CPVC schedule 80 pressure piping'
    ],
    icon: 'Compass'
  },
  {
    id: 'interior-architecture',
    number: '02',
    title: 'Premium Interior Architecture & Fitouts',
    shortDesc: 'Custom teak cabinetry, Italian marble installation, acoustic lighting, and smart automation.',
    fullDesc: 'Our interior architecture wing transforms bare concrete into warm, opulent sanctuaries. Our in-house joinery facility crafts bespoke Nilambur teak woodwork, custom modular kitchens with German hardware, false ceiling lighting designs, and imported marble book-matching.',
    deliverables: [
      'Photorealistic interior 3D visual walkthroughs',
      'Material swatch and stone selection accompaniment',
      'Custom millwork manufactured in dust-free workshop',
      'Complete sanitary fittings and lighting integration'
    ],
    materials: [
      'First quality Nilambur / Burma Teak & Walnut veneers',
      'Marine Grade IS 710 BWR Plywood with 1mm laminate',
      'Grohe / Kohler / Toto architectural bath fittings',
      'Asian Paints Royale Aspira / Berger luxury finishes'
    ],
    icon: 'Sparkles'
  },
  {
    id: 'commercial-spaces',
    number: '03',
    title: 'Commercial & Institutional Developments',
    shortDesc: 'High-traffic commercial complexes, healthcare facilities, boutique retail, and offices.',
    fullDesc: 'We construct commercial real estate optimized for rapid ROI, durability, and statutory compliance. From IT park suites to shopping centers and hospitals, we adhere strictly to National Building Code (NBC) standards and fire-safety guidelines.',
    deliverables: [
      'Fast-track project scheduling with PERT/CPM charts',
      'HVAC, fire hydrant, and emergency evacuation systems',
      'Heavy-load structural floors & column-free spans',
      'Occupancy Certificate (OC) assistance'
    ],
    materials: [
      'Saint-Gobain reflective Low-E architectural glass',
      'Heavy commercial grade vitrified slabs (800x1600mm)',
      'Structural steel framing & post-tensioned cables',
      'Automated water pressurization & STP plants'
    ],
    icon: 'Layers'
  },
  {
    id: 'renovation-restoration',
    number: '04',
    title: 'Heritage Restoration & Structural Retrofit',
    shortDesc: 'Precision remodeling, column jacketing, waterproofing rehabilitation, and modern expansions.',
    fullDesc: 'Revitalize aging traditional Kerala homes or structurally reinforce modern buildings. We use carbon-fiber wrapping, micro-concreting, and pressure grouting alongside traditional carpentry to modernize old structures while preserving their soul.',
    deliverables: [
      'Structural health audit and non-destructive rebound hammer tests',
      'Restoration of traditional timber roofs & Mangalore tile arrays',
      'Non-invasive modern electrical and plumbing retrofitting',
      'Elimination of seepage, dampness, and efflorescence'
    ],
    materials: [
      'Sika / Fosroc structural repair micro-mortars',
      'Carbon-fiber reinforced polymer (CFRP) wraps',
      'Deep chemical pressure grouting systems',
      'Seasoned traditional hardwood replacements'
    ],
    icon: 'Hammer'
  }
];

export const LIVE_PROJECT_UPDATES: LiveProjectUpdate[] = [
  {
    projectId: 'AC-2024-KOWDIAR',
    clientName: 'Dr. R. Menon & Family',
    projectTitle: 'The Kowdiar Zenith Villa',
    location: 'Kowdiar, Trivandrum',
    totalSqFt: 6450,
    stage: 'Final Finishing & Interior Teak Joinery',
    overallProgress: 92,
    lastUpdated: 'Yesterday at 5:45 PM',
    siteEngineer: 'Er. Arun Kumar (Site Incharge)',
    engineerContact: '9447552979',
    currentMilestone: 'Italian Marble Honing & Teak Wood Lacquering',
    nextMilestone: 'Final Sanitary Fixture Installation & Deep Cleaning',
    steps: [
      { title: 'Soil Stabilization & Raft Foundation', status: 'completed', date: 'Jan 2024', notes: 'Soil test passed 240 kN/m² bearing capacity. Footing concrete cube test 28-day strength: 31.4 N/mm².' },
      { title: 'RCC Columns, Beams & 2-Storey Slab Casting', status: 'completed', date: 'Apr 2024', notes: 'High-ductility Tata Tiscon 550D rebar verified with bar-bending schedule.' },
      { title: 'Solid Concrete Block Masonry & Electrical Conduits', status: 'completed', date: 'Jun 2024', notes: 'FR-LSH conduit pressure testing certified with zero obstruction.' },
      { title: 'Dual-Layer Waterproofing & External Sand Plastering', status: 'completed', date: 'Aug 2024', notes: '48-hour flood ponding test conducted on all roof slabs and balconies.' },
      { title: 'Italian Marble Laying & Premium Teak Carpentry', status: 'in-progress', date: 'Sep 2024', notes: 'Statuario book-matching completed in main atrium; bedroom joinery 85% fitted.' },
      { title: 'Client Inspection & Final Handover', status: 'upcoming', date: 'Oct 2024', notes: 'Scheduled handover ceremony with full structural warranty documentation.' }
    ],
    recentSiteNotes: 'Site engineer Er. Arun completed the inspection of the double-height cantilever ceiling fixtures. Marble crystallization in the formal living room is proceeding on schedule. Moisture content in teak doors tested below 11%.'
  },
  {
    projectId: 'AC-2024-SASTHAMANGALAM',
    clientName: 'Mr. & Mrs. K. Varma',
    projectTitle: 'Sasthamangalam Contemporary Villa',
    location: 'Sasthamangalam, Trivandrum',
    totalSqFt: 4800,
    stage: 'Structural Plastering & MEP Rough-In',
    overallProgress: 68,
    lastUpdated: 'Today at 11:30 AM',
    siteEngineer: 'Er. Sudheer & Er. Rajesh',
    engineerContact: '9447552979',
    currentMilestone: 'Interior Smooth Gypsum Plastering & Plumbing Pressure Testing',
    nextMilestone: 'Floor Screeding & Vitrified Slab Laying',
    steps: [
      { title: 'Excavation & Anti-Termite Chemical Soil Barrier', status: 'completed', date: 'Mar 2024', notes: 'Pesticide soil treatment completed under BIS standards.' },
      { title: 'RCC Frame & Cantilevered Balcony Slab Casting', status: 'completed', date: 'May 2024', notes: 'All 14 columns casted with M25 ready mix.' },
      { title: 'Aerated Block Work & Concealed Plumbing', status: 'completed', date: 'Jul 2024', notes: 'Astral CPVC pressure tested up to 10 kg/cm² for 24 hours.' },
      { title: 'Internal Smooth Plastering & External Texture', status: 'in-progress', date: 'Sep 2024', notes: 'Gypsum plastering on 1st floor completed; ground floor currently underway.' },
      { title: 'Flooring, False Ceiling & Painting', status: 'upcoming', date: 'Nov 2024', notes: 'Materials already stored safely in on-site warehouse.' },
      { title: 'Key Handover & Occupancy Verification', status: 'upcoming', date: 'Dec 2024', notes: 'On track for scheduled December occupancy.' }
    ],
    recentSiteNotes: 'Concealed AC copper piping pressure check passed with zero pressure drop over 48 hours. Exterior weather-shield primer coating commenced on south facade.'
  },
  {
    projectId: 'AC-2024-KAZHAKKOOTTAM',
    clientName: 'Techno Developers Ltd.',
    projectTitle: 'Apex Commercial Complex',
    location: 'Near Technopark Phase III',
    totalSqFt: 18500,
    stage: 'Glazing & Facade Installation',
    overallProgress: 81,
    lastUpdated: '2 days ago',
    siteEngineer: 'Er. Sudheer (Chief Consultant)',
    engineerContact: '9447552979',
    currentMilestone: 'Curtain Wall Facade & Lift Shaft Commissioning',
    nextMilestone: 'Fire NOC Final Inspection & Driveway Paver Laying',
    steps: [
      { title: 'Foundation & Deep Pile Caps', status: 'completed', date: 'Aug 2023', notes: 'Bored cast-in-situ piles tested for load integrity.' },
      { title: 'Post-Tensioned Slabs (Ground to 4th Floor)', status: 'completed', date: 'Jan 2024', notes: 'Post-tensioning cable elongation logs approved.' },
      { title: 'Brick Masonry, Fire Escape & Lift Well', status: 'completed', date: 'May 2024', notes: 'Passenger and service lift shafts completed to exact tolerances.' },
      { title: 'Saint-Gobain Low-E Structural Glazing', status: 'in-progress', date: 'Aug 2024', notes: 'Sub-frames installed; glass panels 75% anchored.' },
      { title: 'HVAC Ducting & Fire Sprinkler Network', status: 'in-progress', date: 'Sep 2024', notes: 'Central chillers placed on rooftop equipment plinth.' },
      { title: 'Statutory Clearances & Formal Delivery', status: 'upcoming', date: 'Nov 2024', notes: 'Final handover scheduled before Q4 corporate occupancy.' }
    ],
    recentSiteNotes: 'Elevator machine-room wiring is 90% finalized. Fire escape staircase handrails installed and powder-coated.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Dr. Rajagopal Menon',
    location: 'Kowdiar, Trivandrum',
    projectType: 'Turnkey Luxury Villa (6,450 sq.ft)',
    sqFt: '6,450 sq.ft',
    quote: 'Being based in the UK, building our dream retirement villa seemed daunting until we met G. Sudheer and the Ananthapuri team. The real-time WhatsApp updates, weekly video logs, and strict adherence to material brands gave us total peace of mind. Delivered two weeks ahead of schedule with immaculate finish.',
    year: '2024'
  },
  {
    id: 'test-2',
    clientName: 'Adv. Suresh Narayanan',
    location: 'Vellayambalam',
    projectType: 'Residence & Law Chambers (5,100 sq.ft)',
    sqFt: '5,100 sq.ft',
    quote: 'Ananthapuri Constructions stands apart because of their uncompromising structural ethics. Where other contractors cut corners on rebar spacing and concrete mix, G. Sudheer personally verified cube tests and bar schedules. Their transparency in billing and WhatsApp communication is unmatched in Kerala.',
    year: '2024'
  },
  {
    id: 'test-3',
    clientName: 'Priya & Biju Kurup',
    location: 'Kazhakkoottam',
    projectType: 'Modern Eco-Villa (4,200 sq.ft)',
    sqFt: '4,200 sq.ft',
    quote: 'The craftsmanship in the teakwood joinery and Italian marble installation is extraordinary. What impressed us most was how seamlessly they coordinated with our architect while keeping the entire build strictly within the estimated BOQ. No unexpected hidden charges at all.',
    year: '2023'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'How does Ananthapuri Constructions ensure transparency during construction?',
    answer: 'We provide dedicated live project tracking through our Client WhatsApp Portal. Every client receives regular photo and drone inspection logs, soil and concrete lab reports, and direct communication with Site Incharge G. Sudheer. Our BOQ (Bill of Quantities) is fixed and transparent from day one.'
  },
  {
    question: 'What materials and structural standards do you use?',
    answer: 'We exclusively source tier-1 certified materials: Tata Tiscon 550D / Jindal Panther TMT steel, UltraTech / ACC 53 Grade cement, River/M-sand manufactured to BIS grading, first-class seasoned Nilambur teakwood, and premium plumbing fixtures (Grohe, Kohler, Astral CPVC).'
  },
  {
    question: 'Can you handle projects for Non-Resident Indians (NRIs)?',
    answer: 'Over 65% of our villa clients are NRIs residing in the Gulf, UK, US, and Australia. We offer a specialized NRI Turnkey Package covering land survey, Corporation/Panchayat permits, real-time WhatsApp status logs, and digital escrow milestone payments.'
  },
  {
    question: 'How is the construction cost calculated?',
    answer: 'Construction cost depends on built-up area (sq.ft), architectural complexity, soil foundation requirements (isolated footing vs raft vs pile), and interior finish choices (Classic Premium, Luxury, or Bespoke Heritage). Try our instant online Cost Estimator below or message us on WhatsApp for a custom BOQ.'
  }
];
