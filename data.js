/* ==========================================================================
   FUEL FLOW — shared station data
   Referenced by: map.html, search.html, prebook.html
   ========================================================================== */

const FUEL_META = {
  petrol:  { label: 'Petrol',  color: '#3e86c7', unit: 'L' },
  diesel:  { label: 'Diesel',  color: '#4fa672', unit: 'L' },
  premium: { label: 'Premium', color: '#c6484a', unit: 'L' },
  cng:     { label: 'CNG',     color: '#35ada6', unit: 'kg' }
};

const STATIONS = [
  {
    id: 'Drutika',
    name: 'Drutika filling Station',
    address: 'Potenga, Sector 4',
    lat: 12.9720, lng: 77.5946,
    tanks: [
      { fuel: 'petrol',  qty: 14200, cap: 20000, price: 3.42 },
      { fuel: 'diesel',  qty: 9800,  cap: 20000, price: 3.15 },
      { fuel: 'premium', qty: 3100,  cap: 10000, price: 3.95 }
    ]
  },
  {
    id: 'Potherekha',
    name: 'Potherekha filling Station',
    address: 'National Highway , Mile 22',
    lat: 12.9915, lng: 77.6412,
    tanks: [
      { fuel: 'petrol', qty: 5600,  cap: 25000, price: 3.40 },
      { fuel: 'diesel', qty: 18700, cap: 25000, price: 3.12 },
      { fuel: 'cng',    qty: 2200,  cap: 8000,  price: 2.10 }
    ]
  },
  {
    id: 'Cholika',
    name: 'Cholika filling Station',
    address: 'Agrabad Circle',
    lat: 13.0102, lng: 77.5806,
    tanks: [
      { fuel: 'petrol',  qty: 19850, cap: 22000, price: 3.38 },
      { fuel: 'diesel',  qty: 4300,  cap: 22000, price: 3.18 },
      { fuel: 'premium', qty: 6700,  cap: 8000,  price: 3.92 }
    ]
  },
  {
    id: 'Agrojan',
    name: 'Agrojan filling Station',
    address: 'Bondor',
    lat: 12.9550, lng: 77.6120,
    tanks: [
      { fuel: 'diesel', qty: 15400, cap: 18000, price: 3.14 },
      { fuel: 'cng',    qty: 6100,  cap: 8000,  price: 2.08 },
      { fuel: 'petrol', qty: 8900,  cap: 18000, price: 3.44 }
    ]
  }
];

function stationStatus(station){
  const pcts = station.tanks.map(t => (t.qty / t.cap) * 100);
  const min = Math.min(...pcts);
  return min < 25 ? 'low' : 'ok';
}
