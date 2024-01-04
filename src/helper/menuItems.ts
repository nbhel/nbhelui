import FiberGlass1 from "../assets/images/fiberglass-polyester-braided-cable-1.png"
import FiberGlass2 from "../assets/images/fiberglass-polyester-braided-cable-2.jpg"

export const menuItems = [
  {
    id: 'home',
    title: 'Home',
    url: '/',
  },
  {
    id: 'about',
    title: 'About',
    url: '/about',
  },
  {
    id: 'products',
    title: 'Products',
    url: '/products/fiberglass_&_polyester_braided_cable',
    submenu: [
      {
        title: 'Fiberglass & Polyester Braided Cable',
        url: 'products/fiberglass_&_polyester_braided_cable',
        submenu: [
          { title: 'Fiberglass & Polyester Braided Cable', url: 'products/fiberglass_&_polyester_braided_cable' },
					{ title: 'Fiberglass Cables', url: 'products/fiberglass_cables' },
					{ title: 'Silicon Rubber Cables', url: 'products/silicon_rubber_cables' },
        ],
      },
      {
        title: 'Enameled Winding Wire',
        url: 'products/enameled_aluminum_wire',
        submenu: [
          { title: 'Enameled Aluminum Wire', url: 'products/enameled_aluminum_wire' },
          { title: 'Enameled Copper Wire', url: 'products/enameled_copper_wire' },
        ],
      },
      {
        title: 'Electrical Insulation Sheets',
        url: 'products/fiberglass_epoxy_sheet:FR4_G10_G11',
        submenu: [
          { title: 'Fiberglass Epoxy Sheet: FR4 / G10 / G11', url: 'products/fiberglass_epoxy_sheet:FR4_G10_G11' },
					{ title: 'Glass Epoxy Sheet 3240', url: 'products/glass_epoxy_sheet_3240' },
					{ title: 'Press Board', url: 'products/press_board' },
					{ title: 'Hylam Sheet / Bakelite Sheet', url: 'products/hylam_sheet_bakelite_sheet' },
					{ title: 'SMC Sheet', url: 'products/smc_sheet' },
					{ title: 'Fiberglass cloths', url: 'products/fiberglass_cloths' },
					{ title: 'Fiberglass Epoxy Wedges', url: 'products/fiberglass_epoxy_wedges' },
        ],
      },
      {
        title: 'Electrical Insulating sleeves and tubes',
        url: 'products/polyurethane_fiberglass_sleeving_(pu)',
        submenu: [
          { title: 'Polyurethane Fiberglass Sleeving (PU)', url: 'products/polyurethane_fiberglass_sleeving_(pu)' },
					{ title: 'Fire Resistant / Pyro Sleeve', url: 'products/fire_resistant/pyro_sleeve' },
					{ title: 'Silicone Coated Fiberglass Sleeve', url: 'products/silicone_coated_fiberglass_sleeve' },
					{ title: 'Acrylic Fiberglass Sleeving', url: 'products/acrylic_fiberglass_sleeving' },
					{ title: 'Unvarnished Fiberglass Sleeve', url: 'products/unvarnished_fiberglass_sleeve' },
					{ title: 'Varnished Fiberglass Sleeve F Class', url: 'products/varnished_fiberglass_sleeve_f_class' },
					{ title: 'SRBP Tubes', url: 'products/srbp_tubes' },
        ],
      },
      {
        title: 'Electrical Insulation Tapes',
        url: 'products/cotton_insulation_tapes',
        submenu: [
          { title: 'Cotton Insulation Tapes', url: 'products/cotton_insulation_tapes' },
					{ title: 'Fiberglass Tapes', url: 'products/fiberglass_tapes' },
					{ title: 'Polymide Tape', url: 'products/polymide_tape' },
					{ title: 'PGMP Tapes', url: 'products/pgmp_tapes' },
        ],
      },
      {
        title: 'Electical Insulation Paper',
        url: 'products/dupont_nomex_laminated_paper',
        submenu: [
          { title: 'DuPont Nomex Laminated Paper', url: 'products/dupont_nomex_laminated_paper' },
					{ title: 'Laminated Fleece / DMD', url: 'products/laminated_fleece/dmd' },
					{ title: 'Saturated Fleece Paper', url: 'products/saturated_fleece_paper' },
					{ title: 'DuPont Nomex', url: 'products/dupont_nomex' },
					{ title: 'Unsaturated Fleece Paper', url: 'products/unsaturated_fleece_paper' },
					{ title: 'Polyester Film - Electrical Insulation', url: 'products/polyester_film_electrical_insulation' },
        ],
      },
      {
        title: 'Aramid paper',
        url: 'products/pure_aramid_paper_(ul_approved)',
        submenu: [
          { title: 'Pure Aramid Paper (UL approved)', url: 'products/pure_aramid_paper_(ul_approved)' },
					{ title: 'Laminated Aramid Paper APA', url: 'products/laminated_aramid_paper_apa' },
        ],
      },
      {
        title: 'Insulating Varnishes',
        url: 'products/dr_beck_insulating_varnish',
        submenu: [
          { title: 'Dr Beck Insulating Varnish', url: 'products/dr_beck_insulating_varnish' },
					{ title: 'Dr. Beck Elmotherm F 50 Varnishes', url: 'products/dr_beck_elmotherm_f_50_varnishes' },
					{ title: 'Becktol Red / Grey Varnish', url: 'products/becktol_red/grey_varnish' },
        ],
      },
      {
        title: 'PTFE Wire and Sleeve',
        url: 'products/ptfe_wire',
        submenu: [
          { title: 'PTFE Wire', url: 'products/ptfe_wire' },
					{ title: 'Teflon Cable', url: 'products/teflon_cable' },
        ],
      },
    ],
  },
  {
    id: 'certificates',
    title: 'Certification',
    url: '/certification',
  },
  {
    id: 'contact',
    title: 'Contact',
    url: '/contact',
  },

];

export const subDetailsMenu = [
  {
    title: 'Fiberglass & Polyester Braided Cable',
    url: 'fiberglass_&_polyester_braided_cable',
    submenu: [
      { title: 'Fiberglass & Polyester Braided Cable', url: 'fiberglass_&_polyester_braided_cable' },
      { title: 'Fiberglass Cables', url: 'fiberglass_cables' },
      { title: 'Silicon Rubber Cables', url: 'silicon_rubber_cables' },
    ],
  },
  {
    title: 'Enameled Winding Wire',
    url: 'enameled_winding_wire',
    submenu: [
      { title: 'Enameled Aluminum Wire', url: 'enameled_aluminum_wire' },
      { title: 'Enameled Copper Wire', url: 'enameled_copper_wire' },
    ],
  },
  {
    title: 'Electrical Insulation Sheets',
    url: 'electrical_insulation_sheets',
    submenu: [
      { title: 'Fiberglass Epoxy Sheet: FR4 / G10 / G11', url: 'fiberglass_epoxy_sheet:FR4/G10/G11' },
      { title: 'Glass Epoxy Sheet 3240', url: 'glass_epoxy_sheet_3240' },
      { title: 'Press Board', url: 'press_board' },
      { title: 'Hylam Sheet / Bakelite Sheet', url: 'hylam_sheet/bakelite_sheet' },
      { title: 'SMC Sheet', url: 'smc_sheet' },
      { title: 'Fiberglass Epoxy Wedges', url: 'fiberglass_epoxy_wedges' },
      { title: 'Press Board', url: 'press_board' },
    ],
  },
  {
    title: 'Electrical Insulating sleeves and tubes',
    url: 'electrical_insulating_sleeves_and_tubes',
    submenu: [
      { title: 'Polyurethane Fiberglass Sleeving (PU)', url: 'polyurethane_fiberglass_sleeving_(pu)' },
      { title: 'Fire Resistant / Pyro Sleeve', url: 'fire_resistant/pyro_sleeve' },
      { title: 'Silicone Coated Fiberglass Sleeve', url: 'silicone_coated_fiberglass_sleeve' },
      { title: 'Acrylic Fiberglass Sleeving', url: 'acrylic_fiberglass_sleeving' },
      { title: 'Unvarnished Fiberglass Sleeve', url: 'unvarnished_fiberglass_sleeve' },
      { title: 'Varnished Fiberglass Sleeve F Class', url: 'varnished_fiberglass_sleeve_f_class' },
      { title: 'SRBP Tubes', url: 'srbp_tubes' },
    ],
  },
  {
    title: 'Electrical Insulation Tapes',
    url: 'electrical_insulation_tapes',
    submenu: [
      { title: 'Cotton Insulation Tapes', url: 'cotton_insulation_tapes' },
      { title: 'Fiberglass Tapes', url: 'fiberglass_tapes' },
      { title: 'Polymide Tape', url: 'polymide_tape' },
      { title: 'PGMP Tapes', url: 'pgmp_tapes' },
    ],
  },
  {
    title: 'Electical Insulation Paper',
    url: 'electical_insulation_paper',
    submenu: [
      { title: 'DuPont Nomex Laminated Paper', url: 'dupont_nomex_laminated_paper' },
      { title: 'Laminated Fleece / DMD', url: 'laminated_fleece/dmd' },
      { title: 'Saturated Fleece Paper', url: 'saturated_fleece_paper' },
      { title: 'DuPont Nomex', url: 'dupont_nomex' },
      { title: 'Unsaturated Fleece Paper', url: 'unsaturated_fleece_paper' },
      { title: 'Polyester Film - Electrical Insulation', url: 'polyester_film_electrical_insulation' },
    ],
  },
  {
    title: 'Aramid paper',
    url: 'aramid_paper',
    submenu: [
      { title: 'Pure Aramid Paper (UL approved)', url: 'pure_aramid_paper_(ul_approved)' },
      { title: 'Laminated Aramid Paper APA', url: 'laminated_aramid_paper_apa' },
    ],
  },
  {
    title: 'Insulating Varnishes',
    url: 'insulating_varnishes',
    submenu: [
      { title: 'Dr Beck Insulating Varnish', url: 'dr_beck_insulating_varnish' },
      { title: 'Dr. Beck Elmotherm F 50 Varnishes', url: 'dr_beck_elmotherm_f_50_varnishes' },
      { title: 'Becktol Red / Grey Varnish', url: 'becktol_red/grey_varnish' },
    ],
  },
  {
    title: 'PTFE Wire and Sleeve',
    url: 'ptfe_wire_and_sleeve',
    submenu: [
      { title: 'PTFE Wire', url: 'ptfe_wire' },
      { title: 'Teflon Cable', url: 'teflon_cable' },
    ],
  },
];

export const submenuDetails = [
	{
    id: 'fiberglass_&_polyester_braided_cable',
    title: 'Fiberglass & Polyester Braided Cable',
    images: [FiberGlass1,FiberGlass2],
    description: {
      brand: 'FPC CABLES',
      minimun_Order_quantity: '100 Meter',
      color: 'Red,Black,Blue,Yellow,Orange,Brown etc',
      material: 'Fiberglass Braided Copper Wire',
      length:	'100 Meters',
      conductor_type:	'Bare copper / Tinned copper',
      packaging_type:	'Blue reel / Spool',
      surface_treatment:	'Braided',
      temperature_range:	'155-180',
      voltage:	'600/1100',
      power:	'6 KV',
      diameter: '0.50 sqmm - 240 sqmm',
	  },
    features: [
      'Bunched Tinned Copper As per “IS-8130-1976 Class-5” (TPC)',
      'Bunched bare copper (BC)',
      'Bunched Nickle plated copper (NPC)',
      'Bunched Silver Plated Copper (SPC)',
      'Bunched Stainless steel & Bare copper (SSBC): Heater special',
      'Bunched Stainless steel & Tinned copper (SSTC): Heater Special',
      'Layers of DMD Wrapped & braided with Fiberglass Yarn or Polyester yarn',
      'Layers of DMDT Wrapped & braided with Fiberglass Yarn or Polyester yarn',
    ],
    innerSheath: [
      'Mylar (Polyester Tape) Wrapped',
      'Teflon (PTFE) Tape Wrapped',
      'Silicone extruded conductor',
      'Kapton Tape Wrapped',
    ],
    
    additionalFeature: [
      'Very good Thermal Stability',
      'Very good Dielectric Constant',
      'Good Resistance to Moisture & Chemicals',
      'These cables are highly heated and are made to meet your different requirements.',
      'These cables are having an outstanding and unique combination of electrical, mechanical, thermal and chemical properties.',
    ],
    additionalInnerSheath: [
      'Mylar (Polyester Tape) Wrapped',
      'Teflon (PTFE) Tape Wrapped',
      'Silicone extruded conductor',
      'Kapton Tape Wrapped',
    ],
	},
	{
    id: 'fiberglass_cables',
    title: 'Fiberglass Cables',
    images: [FiberGlass2,FiberGlass1],
    description: {
      brand: 'FIBERGLASS CABLES',
      minimun_Order_quantity: '100 Meter',
      color: 'Red,Black,Blue,Yellow,Orange,Brown etc',
      material: 'Fiberglass Braided Copper Wire',
      length:	'100 Meters',
      conductor_type:	'Bare copper / Tinned copper',
      packaging_type:	'Blue reel / Spool',
      surface_treatment:	'Braided',
      temperature_range:	'155-180',
      voltage:	'600/1100',
      power:	'6 KV',
      diameter: '0.50 sqmm - 240 sqmm',
	  },
    features: [
      'Bunched Tinned Copper As per “IS-8130-1976 Class-5” (TPC)',
      'Bunched bare copper (BC)',
      'Bunched Nickle plated copper (NPC)',
      'Bunched Silver Plated Copper (SPC)',
      'Bunched Stainless steel & Bare copper (SSBC): Heater special',
      'Bunched Stainless steel & Tinned copper (SSTC): Heater Special',
      'Layers of DMD Wrapped & braided with Fiberglass Yarn or Polyester yarn',
      'Layers of DMDT Wrapped & braided with Fiberglass Yarn or Polyester yarn',
    ],
    innerSheath: [
      'Mylar (Polyester Tape) Wrapped',
      'Teflon (PTFE) Tape Wrapped',
      'Silicone extruded conductor',
      'Kapton Tape Wrapped',
    ],
    additionalFeature: [
      'Very good Thermal Stability',
      'Very good Dielectric Constant',
      'Good Resistance to Moisture & Chemicals',
      'These cables are highly heated and are made to meet your different requirements.',
      'These cables are having an outstanding and unique combination of electrical, mechanical, thermal and chemical properties.',
    ],
    additionalInnerSheath: [
      'Mylar (Polyester Tape) Wrapped',
      'Teflon (PTFE) Tape Wrapped',
      'Silicone extruded conductor',
      'Kapton Tape Wrapped',
    ],
	},
]