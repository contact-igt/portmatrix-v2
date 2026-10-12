// DECORATIVE / NON-DOCUMENTARY. An original, code-drawn vector composition
// (globe graticule + trade-lane arcs + nodes) created in this repository for
// the About hero. It depicts no people, staff, clients, shipments, customs
// activity, certificates, text or logo, and does not reproduce or reinterpret
// the PortMatrix mark. Always aria-hidden; the page's meaning never depends on
// it. Provenance is recorded in docs/PORTMATRIX_IMAGE_MAP.md.
//
// Geometry is computed once from fixed numbers (no randomness) so server and
// client markup are identical.
const CX = 320;
const CY = 250;
const R = 190;

const meridians = [0.3, 0.62, 0.88];
const parallels = [-62, -31, 0, 31, 62];

// Nodes sit inside the globe disc; routes are quadratic arcs bowed upward.
const nodes = [
  [236, 182],
  [352, 150],
  [438, 238],
  [378, 330],
  [250, 312],
  [318, 232],
];
const routes = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 0],
  [0, 5],
  [5, 2],
];
const arc = ([a, b]) => {
  const [x1, y1] = nodes[a];
  const [x2, y2] = nodes[b];
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const d = Math.hypot(x2 - x1, y2 - y1);
  return `M${x1} ${y1} Q${mx} ${my - 18 - d * 0.28} ${x2} ${y2}`;
};

export default function TradeNetworkVisual({ className = "" }) {
  return (
    <svg
      viewBox="0 0 640 500"
      className={className}
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      {/* outer lane ring */}
      <ellipse
        cx={CX}
        cy={CY}
        rx="292"
        ry="78"
        transform={`rotate(-17 ${CX} ${CY})`}
        fill="none"
        stroke="#2E3192"
        strokeOpacity="0.28"
        strokeWidth="1"
        strokeDasharray="2 7"
      />
      {/* graticule */}
      <circle cx={CX} cy={CY} r={R} fill="#EEEFFB" fillOpacity="0.7" stroke="#2E3192" strokeOpacity="0.5" strokeWidth="1.25" />
      {meridians.map((k) => (
        <ellipse key={k} cx={CX} cy={CY} rx={R * k} ry={R} fill="none" stroke="#2E3192" strokeOpacity="0.2" strokeWidth="1" />
      ))}
      <line x1={CX} y1={CY - R} x2={CX} y2={CY + R} stroke="#2E3192" strokeOpacity="0.2" strokeWidth="1" />
      {parallels.map((lat) => {
        const rad = (lat * Math.PI) / 180;
        const rx = R * Math.cos(rad);
        return (
          <ellipse
            key={lat}
            cx={CX}
            cy={CY + R * Math.sin(rad)}
            rx={rx}
            ry={rx * 0.17}
            fill="none"
            stroke="#2E3192"
            strokeOpacity="0.2"
            strokeWidth="1"
          />
        );
      })}
      {/* trade lanes */}
      {routes.map((r, i) => (
        <path key={i} d={arc(r)} fill="none" stroke="#2E3192" strokeOpacity="0.75" strokeWidth="1.5" strokeLinecap="round" />
      ))}
      {/* nodes */}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="9" fill="#ffffff" stroke="#2E3192" strokeWidth="1.5" />
          <circle cx={x} cy={y} r="3.5" fill={i === 0 || i === 3 ? "#ED1B24" : "#2E3192"} />
        </g>
      ))}
      {/* a node travelling on the outer lane */}
      <circle cx="560" cy="150" r="5" fill="#ED1B24" />
      <circle cx="82" cy="352" r="4" fill="#2E3192" fillOpacity="0.6" />
    </svg>
  );
}
