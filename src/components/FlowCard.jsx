// import { ArrowUpRight } from "lucide-react";

// function FlowCard({ item, onOpen }) {
//   const Icon = item.icon;

//   return (
//     <button
//       type="button"
//       className={`flow-card flow-card--${item.color}`}
//       onClick={() => onOpen(item)}
//     >
//       <div className="flow-card__top">
//         <div className="flow-card__icon">
//           <Icon size={24} strokeWidth={1.8} />
//         </div>

//         <div className="flow-card__live">
//           <span className="flow-card__live-dot" />
//           {item.status}
//         </div>
//       </div>

//       <div className="flow-card__content">
//         <div>
//           <h2>{item.name}</h2>
//           <p>{item.description}</p>
//         </div>

//         <div className="flow-card__reading">
//           <span>Live Value</span>
//           <strong>{item.value}</strong>
//         </div>
//       </div>

//       {/* <div className="flow-card__footer">
//         <span className="flow-card__health">
//           <span className="flow-card__health-dot" />
//           {item.health}
//         </span>

//         <span className="flow-card__open">
//           View
//           <ArrowUpRight size={16} />
//         </span>
//       </div> */}
//     </button>
//   );
// }

// export default FlowCard;










// import { ArrowUpRight } from "lucide-react";

// function FlowCard({ item, onOpen }) {
//   const Icon = item.icon;
//   const health = item.health || "HEALTHY";
//   const statusClass = String(item.status || "ONLINE").toLowerCase();
//   const healthClass = String(health).toLowerCase();

//   return (
//     <button
//       type="button"
//       className={`flow-card flow-card--${item.color} flow-card--status-${statusClass}`}
//       onClick={() => onOpen(item)}
//     >
//       <div className="flow-card__top">
//         <div className="flow-card__icon">
//           <Icon size={22} strokeWidth={1.8} />
//         </div>
//         <div className={`flow-card__live flow-card__live--${statusClass}`}>
//           <span className="flow-card__live-dot" />
//           {item.status}
//         </div>
//       </div>

//       <div className="flow-card__content">
//         <div className="flow-card__identity">
//           <h2>{item.name}</h2>
//           <p>{item.description}</p>
//         </div>
//         <div className="flow-card__reading">
//           <span>LIVE VALUE</span>
//           <strong>{item.value}</strong>
//         </div>
//       </div>

//       <div className="flow-card__footer">
//         <span className={`flow-card__health flow-card__health--${healthClass}`}>
//           <span className="flow-card__health-dot" />
//           {health}
//         </span>
//         <span className="flow-card__open">
//           OPEN <ArrowUpRight size={14} />
//         </span>
//       </div>
//     </button>
//   );
// }

// export default FlowCard;





import {
  ArrowUpRight,
  Zap,
  GitBranch,
  PanelTop,
  Cable,
  CircuitBoard,
  BetweenVerticalEnd,
  Building2,
  Cog,
  Fan,
  Droplets,
  Flame,
  BatteryCharging,
  Gauge,
} from "lucide-react";


/* =========================================================
   TRANSFORMER ELECTRICAL SYMBOL

   LEFT  = SMALL CIRCLE
   RIGHT = BIG CIRCLE
   Circles intersect / overlap
========================================================= */

function TransformerIcon({
  size = 22,
  strokeWidth = 1.8,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* LEFT — SMALL CIRCLE */}
      <circle
        cx="8"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />

      {/* RIGHT — BIG CIRCLE */}
      <circle
        cx="15"
        cy="12"
        r="5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}


/* =========================================================
   ELECTRICAL SYSTEM ICONS
========================================================= */

const SYSTEM_ICONS = {
  /*
   * 33kV SOURCE
   * High-voltage electrical supply
   */
  source: Zap,

  /*
   * FEEDER
   * Electrical distribution branch
   */
  feeder: GitBranch,

  /*
   * TRANSFORMER
   * Small left circle + large right circle
   */
  transformer: TransformerIcon,

  /*
   * LT KIOSK
   * LT electrical panel
   */
  "lt-kiosk": PanelTop,

  /*
   * BUSDUCT
   * Electrical conductor / bus route
   */
  busduct: Cable,

  /*
   * PCC
   * Power Control Centre
   */
  pcc: CircuitBoard,

  /*
   * RAISING MAIN
   * Vertical electrical distribution
   */
  "raising-main": BetweenVerticalEnd,

  /*
   * WING
   * Building electrical distribution
   */
  wing: Building2,

  /*
   * DG
   * Diesel Generator / rotating equipment
   */
  dg: Cog,

  /*
   * HVAC
   * Fan / motor load
   */
  hvac: Fan,

  /*
   * WATER / WTP
   */
  wtp: Droplets,
  water: Droplets,

  /*
   * FIRE SYSTEM
   */
  fire: Flame,

  /*
   * UPS
   */
  ups: BatteryCharging,

  /*
   * ENERGY METER
   */
  meter: Gauge,
};


/* =========================================================
   FLOW CARD
========================================================= */

function FlowCard({
  item,
  onOpen,
}) {

  /* -------------------------------------------------------
     SYSTEM ID
  ------------------------------------------------------- */

  const systemId = String(
    item?.id ||
    item?.type ||
    ""
  ).toLowerCase();


  /* -------------------------------------------------------
     SYSTEM ICON

     1. Use electrical system icon
     2. Fall back to item.icon
     3. Final fallback = Zap
  ------------------------------------------------------- */

  const Icon =
    SYSTEM_ICONS[systemId] ||
    item?.icon ||
    Zap;


  /* -------------------------------------------------------
     HEALTH
  ------------------------------------------------------- */

  const health =
    item?.health ||
    "HEALTHY";


  /* -------------------------------------------------------
     STATUS
  ------------------------------------------------------- */

  const status =
    item?.status ||
    "ONLINE";


  const statusClass =
    String(
      status
    ).toLowerCase();


  const healthClass =
    String(
      health
    ).toLowerCase();


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <button
      type="button"
      className={`flow-card flow-card--${item.color} flow-card--status-${statusClass}`}
      onClick={() =>
        onOpen(item)
      }
    >

      {/* ===================================================
          TOP
      =================================================== */}

      <div className="flow-card__top">

        {/* SYSTEM ICON */}

        <div className="flow-card__icon">

          <Icon
            size={22}
            strokeWidth={1.8}
          />

        </div>


        {/* ONLINE / OFFLINE STATUS */}

        <div
          className={`flow-card__live flow-card__live--${statusClass}`}
        >

          <span className="flow-card__live-dot" />

          {status}

        </div>

      </div>


      {/* ===================================================
          CARD CONTENT
      =================================================== */}

      <div className="flow-card__content">

        {/* SYSTEM NAME */}

        <div className="flow-card__identity">

          <h2>
            {item.name}
          </h2>

          <p>
            {item.description}
          </p>

        </div>


        {/* LIVE VALUE */}

        <div className="flow-card__reading">

          <span>
            LIVE VALUE
          </span>

          <strong>
            {item.value}
          </strong>

        </div>

      </div>


      {/* ===================================================
          FOOTER
      =================================================== */}

      <div className="flow-card__footer">

        {/* EQUIPMENT HEALTH */}

        <span
          className={`flow-card__health flow-card__health--${healthClass}`}
        >

          <span className="flow-card__health-dot" />

          {health}

        </span>


        {/* OPEN SYSTEM */}

        <span className="flow-card__open">

          OPEN

          <ArrowUpRight
            size={14}
          />

        </span>

      </div>

    </button>
  );
}


export default FlowCard;