// import { useState } from "react";

// import {
//   ArrowLeft,
//   Activity,
//   RadioTower,
//   GitBranch,
//   Zap,
//   Network,
//   Wifi,
//   Gauge,
//   Cpu,
//   BatteryCharging,
//   Bolt,
//   Building2,
//   CirclePower,
//   Fan,
//   Droplets,
//   Flame,
//   PanelsTopLeft,
//   ArrowDown,
//   ArrowUp,
//   ArrowLeftRight,
// } from "lucide-react";
// import {
//   demoTelemetry,
//   getTopologyEquipment,
//   getProjectTopology,
// } from "../data/flowConfigs";

// /* =========================================================
//    SHARED HELPERS ONLY
//    These are presentation/data helpers, NOT topology layouts.
// ========================================================= */

// function getIcon(type) {
//   switch (type) {
//     case "incomer": return RadioTower;
//     case "meter": return Gauge;
//     case "feeder": return GitBranch;
//     case "transformer": return Zap;
//     case "kiosk": return PanelsTopLeft;
//     case "busbar":
//     case "busduct": return Network;
//     case "pcc-circuit":
//     case "coupler": return Cpu;
//     case "ups": return BatteryCharging;
//     case "raising-main": return Bolt;
//     case "wing": return Building2;
//     case "dg": return CirclePower;
//     case "hvac": return Fan;
//     case "water-main":
//     case "stp":
//     case "wtp":
//     case "tank": return Droplets;
//     case "fire-alarm":
//     case "fire-fighting":
//     case "fire-pump": return Flame;
//     default: return Activity;
//   }
// }

// // function getPreview(equipment, data) {
// //   if (!data) return [];

// //   switch (equipment.type) {
// //     case "transformer":
// //       return [
// //         ["Oil", `${data.oilTemp}°C`],
// //         ["Winding", `${data.windingTemp}°C`],
// //         ["Load", `${data.load}%`],
// //       ];
// //     case "busduct":
// //       return [
// //         ["Temp", `${data.temperature}°C`],
// //         ["Vibration", `${data.vibration} mm/s`],
// //         ["Health", data.health],
// //       ];
// //     case "ups":
// //       return [
// //         ["Capacity", data.capacity],
// //         ["Load", `${data.load}%`],
// //         ["Battery", `${data.battery}%`],
// //       ];
// //     case "water-main":
// //       return [
// //         ["Flow", `${data.flowRate} m³/h`],
// //         ["Water", `${data.totalWater}%`],
// //         ["Pressure", `${data.pressure} bar`],
// //       ];
// //     case "stp":
// //     case "wtp":
// //       return [
// //         ["Inlet", `${data.inletFlow} m³/h`],
// //         ["Outlet", `${data.outletFlow} m³/h`],
// //         ["pH", data.ph],
// //       ];
// //     case "tank":
// //       return [
// //         ["Level", `${data.level}%`],
// //         ["Volume", `${data.volume} m³`],
// //         ["Outlet", `${data.outletFlow} m³/h`],
// //       ];
// //     case "fire-alarm":
// //       return [
// //         ["Smoke", data.smokeDetectors],
// //         ["Heat", data.heatDetectors],
// //         ["Alarms", data.activeAlarms],
// //       ];
// //     case "fire-fighting":
// //       return [
// //         ["Pressure", `${data.pressure} bar`],
// //         ["Hydrant", data.hydrantNetwork],
// //         ["Valve", data.mainValve],
// //       ];
// //     case "fire-pump":
// //       return [
// //         ["Voltage", `${data.voltage} V`],
// //         ["Pressure", `${data.pressure} bar`],
// //         ["Mode", data.mode],
// //       ];
// //     default:
// //       return [
// //         ["kWh", data.kWh ?? "--"],
// //         [
// //           "Voltage",
// //           data.voltage
// //             ? data.voltage === 33
// //               ? "33 kV"
// //               : `${data.voltage} V`
// //             : "--",
// //         ],
// //         ["PF", data.powerFactor ?? "--"],
// //       ];
// //   }
// // }

// function getPreview(equipment, data) {
//   if (!equipment || !data) return [];

//   const value = (v, suffix = "") =>
//     v !== undefined && v !== null && v !== ""
//       ? `${v}${suffix}`
//       : "--";

//   switch (equipment.type) {

//     /* =====================================================
//        SOURCE / INCOMER
//        Standard electrical monitoring
//     ===================================================== */

//     case "incomer":
//       return [
//         ["Voltage", data.voltage === 33 ? "33 kV" : value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        METER
//     ===================================================== */

//     case "meter":
//       return [
//         ["Voltage", data.voltage === 33 ? "33 kV" : value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        FEEDER
//     ===================================================== */

//     case "feeder":
//       return [
//         ["Voltage", data.voltage === 33 ? "33 kV" : value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        TRANSFORMER
//     ===================================================== */

//     case "transformer":
//       return [
//         ["Oil Temp", value(data.oilTemp, "°C")],
//         ["Winding Temp", value(data.windingTemp, "°C")],
//         ["Load", value(data.load, "%")],
//         ["Relay", value(data.buchholzRelay ?? data.relay)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        LT KIOSK
//     ===================================================== */

//     case "kiosk":
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        BUSDUCT / BUSBAR
//     ===================================================== */

//     case "busduct":
//     case "busbar":
//       return [
//         ["Temperature", value(data.temperature, "°C")],
//         ["Vibration", value(data.vibration, " mm/s")],
//         ["Load", value(data.load, "%")],
//         ["Health", value(data.health)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        PCC
//     ===================================================== */

//     case "pcc-circuit":
//     case "coupler":
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        RAISING MAIN
//     ===================================================== */

//     case "raising-main":
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        WING
//     ===================================================== */

//     case "wing":
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        DIESEL GENERATOR
//     ===================================================== */

//     case "dg":
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["PF", value(data.powerFactor)],
//         ["Load", value(data.load, "%")],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        UPS
//     ===================================================== */

//     case "ups":
//       return [
//         ["Capacity", value(data.capacity)],
//         ["Input V", value(data.inputVoltage, " V")],
//         ["Output V", value(data.outputVoltage, " V")],
//         ["Load", value(data.load, "%")],
//         ["Battery", value(data.battery, "%")],
//         ["Input Hz", value(data.inputFrequency, " Hz")],
//         ["Output Hz", value(data.outputFrequency, " Hz")],
//         ["Battery V", value(data.batteryVoltage, " V")],
//         ["Backup", value(data.backupTime, " min")],
//         ["Mode", value(data.mode)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        WATER MAIN
//     ===================================================== */

//     case "water-main":
//       return [
//         ["Flow", value(data.flowRate, " m³/h")],
//         ["Water", value(data.totalWater, "%")],
//         ["Pressure", value(data.pressure, " bar")],
//         ["Health", value(data.health)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        STP / WTP
//     ===================================================== */

//     case "stp":
//     case "wtp":
//       return [
//         ["Inlet Flow", value(data.inletFlow, " m³/h")],
//         ["Outlet Flow", value(data.outletFlow, " m³/h")],
//         ["pH", value(data.ph)],
//         ["Turbidity", value(data.turbidity, " NTU")],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        WATER TANK
//     ===================================================== */

//     case "tank":
//       return [
//         ["Level", value(data.level, "%")],
//         ["Volume", value(data.volume, " m³")],
//         ["Inlet Flow", value(data.inletFlow, " m³/h")],
//         ["Outlet Flow", value(data.outletFlow, " m³/h")],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        FIRE ALARM
//     ===================================================== */

//     case "fire-alarm":
//       return [
//         ["Smoke", value(data.smokeDetectors)],
//         ["Heat", value(data.heatDetectors)],
//         ["Active Alarms", value(data.activeAlarms)],
//         ["Health", value(data.health)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        FIRE FIGHTING
//     ===================================================== */

//     case "fire-fighting":
//       return [
//         ["Pressure", value(data.pressure, " bar")],
//         ["Hydrant", value(data.hydrantNetwork)],
//         ["Main Valve", value(data.mainValve)],
//         ["Health", value(data.health)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        FIRE PUMP
//     ===================================================== */

//     case "fire-pump":
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["Pressure", value(data.pressure, " bar")],
//         ["Mode", value(data.mode)],
//         ["Health", value(data.health)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        DEFAULT ELECTRICAL EQUIPMENT
//     ===================================================== */

//     default:
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];
//   }
// }




// function EquipmentCard({ equipment, onOpen }) {
//   if (!equipment) return null;

//   const Icon = getIcon(equipment.type);
//   const data = demoTelemetry[equipment.id];
//   const alarm = data?.fault || data?.trip || data?.warning;
//   const status = data?.status || "OFFLINE";
//   const preview = getPreview(equipment, data);

//   return (
//     <button
//       type="button"
//       className={`eq-card ${alarm ? "eq-card--alarm" : ""}`}
//       onClick={() => onOpen?.({ ...equipment, telemetry: data })}
//     >
//       <div className="eq-card__top">
//         <span className="eq-card__icon"><Icon size={19} /></span>
//         <span
//           className={`eq-status ${
//             status === "ON"
//               ? "eq-status--on"
//               : status === "STANDBY"
//               ? "eq-status--standby"
//               : "eq-status--off"
//           }`}
//         >
//           <i />{status}
//         </span>
//       </div>

//       <div className="eq-card__name">
//         <h3>{equipment.name}</h3>
//         <p>{equipment.label}</p>
//       </div>

//       {preview.length > 0 && (
//         <div className="eq-card__hover" aria-hidden="true">
//           <span className="eq-card__hover-title">LIVE READINGS</span>
//           <div className="eq-card__hover-grid">
//             {preview.map(([label, value]) => (
//               <div key={label}>
//                 <span>{label}</span>
//                 <strong>{value}</strong>
//               </div>
//             ))}
//           </div>
//           <small>Click to open operational view</small>
//         </div>
//       )}

//       <div className="eq-card__bottom">
//         <span><i />{data?.health || "UNKNOWN"}</span>
//         <strong>View Operation →</strong>
//       </div>
//     </button>
//   );
// }

// function SimpleFlowCard({
//   title,
//   subtitle,
//   eyebrow,
//   icon: Icon,
//   onClick,
//   live = true,
//   equipment,
// }) {
//   const data = equipment ? demoTelemetry[equipment.id] : null;
//   const preview = equipment ? getPreview(equipment, data) : [];

//   const content = (
//     <>
//       {eyebrow && <span className="simple-card__eyebrow">{eyebrow}</span>}
//       {Icon && <Icon size={22} />}
//       <h3>{title}</h3>
//       {subtitle && <p>{subtitle}</p>}
//       {live && <strong><i /> LIVE</strong>}

//       {preview.length > 0 && (
//         <div className="simple-card__hover" aria-hidden="true">
//           <span>LIVE READINGS</span>
//           <div>
//             {preview.map(([label, value]) => (
//               <small key={label}>{label}<b>{value}</b></small>
//             ))}
//           </div>
//           <em>Click to open operational view</em>
//         </div>
//       )}
//     </>
//   );

//   return onClick ? (
//     <button type="button" className="simple-card" onClick={onClick}>{content}</button>
//   ) : (
//     <div className="simple-card">{content}</div>
//   );
// }

// /* =========================================================
//    1. SOURCE VIEW
//    Independent JSX + independent topology CSS.
//    Correct card-level flow: INC1 ─ OUT ─ INC2
//    Source also branches vertically to INC1 and INC2.
//    OUT drops vertically to Meter.
// ========================================================= */

// function SourceView({
//   topology,
//   onOpenEquipment,
// }) {
//     const configuration =
//     topology?.configuration || {};

//   const voltageLevel =
//     configuration.voltageLevel ||
//     topology?.voltageLevel ||
//     "33kV";

//   const incomingCount =
//     configuration.incomingCount ?? 2;

//   const outgoingCount =
//     configuration.outgoingCount ?? 1;

//   const meterCount =
//     configuration.meterCount ?? 1;

//   const equipment =
//     Array.isArray(topology?.equipment)
//       ? topology.equipment
//       : [];

//   const incomingFeeders =
//     equipment.filter(
//       (item) =>
//         item.role === "incoming" ||
//         item.type === "incomer"
//     );

//   const outgoingFeeders =
//     equipment.filter(
//       (item) =>
//         item.role === "outgoing" ||
//         item.type === "busbar"
//     );

//   const meters =
//     equipment.filter(
//       (item) =>
//         item.role === "meter" ||
//         item.type === "meter"
//     );

//   const sourceCardWidth = 205;
//   const sourceGap = 28;
//   const maxRowCount =
//     Math.max(
//       incomingFeeders.length,
//       outgoingFeeders.length,
//       meters.length,
//       1
//     );

//   const sourceNetworkWidth =
//     Math.max(
//       620,
//       maxRowCount * sourceCardWidth +
//         Math.max(
//           maxRowCount - 1,
//           0
//         ) *
//           sourceGap
//   );

//   const sourceStyles = `
//     /* =====================================================
//        SOURCE FLOW

//                        33kV SOURCE
//                             │
//                   ──────────┴──────────
//                   │                   │
//                 INC1                INC2

//                 INC1 ─── OUT ─── INC2
//                            │
//                          METER

//        Static engineering topology.
//        No animated lines.
//        No absolute card positioning.
//     ===================================================== */

//     .source-view {
//       --wire: #2eb5c9;
//       --wire-size: 2px;

//       --source-card-width: 205px;
//       --source-card-height: 132px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 3vw, 44px)
//         24px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: flex-start;

//       overflow-x: auto;

//       /* EquipmentCard reads this */
//       --equipment-card-width:
//         var(--source-card-width);
//     }


//     /* =====================================================
//        PARENT SOURCE
//     ===================================================== */

//     .source-parent {
//       position: relative;

//       width:
//         clamp(
//           360px,
//           34vw,
//           460px
//         );

//       min-height: 112px;

//       padding: 16px 24px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       border:
//         1px solid #367fb1;

//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #153e72 0%,
//           #102f61 55%,
//           #0d2853 100%
//         );

//       box-shadow:
//         0 7px 18px
//         rgba(11, 44, 75, .13);

//       z-index: 3;
//     }


//     .source-parent::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #3eb9d0;
//     }


//     .source-parent svg {
//       margin-bottom: 2px;

//       color: #71d0e2;
//     }


//     .source-parent span {
//       color: #8ec5ea;

//       font-size: 8px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .16em;
//     }


//     .source-parent h2 {
//       margin: 5px 0 2px;

//       color: #ffffff;

//       font-size: 20px;
//       font-weight: 700;

//       line-height: 1.15;
//     }


//     .source-parent p {
//       margin: 0;

//       color: #adc7d7;

//       font-size: 9px;
//       font-weight: 600;

//       line-height: 1.2;

//       letter-spacing: .03em;
//     }


//     /* =====================================================
//        PARENT → DISTRIBUTION BUS
//     ===================================================== */

//     .source-main-stem {
//       width: var(--wire-size);
//       height: 32px;

//       flex: 0 0 32px;

//       background: var(--wire);
//     }


//     /* =====================================================
//        COMPLETE SOURCE TOPOLOGY AREA
//     ===================================================== */

//     .source-network {
//       /*
//        Keep the engineering topology readable.
//        On smaller screens this section scrolls instead
//        of destroying the card dimensions.
//       */

//       width: min(100%, 1080px);
//       min-width: 760px;

//       display: flex;
//       flex-direction: column;

//       align-items: stretch;

//       position: relative;
//     }

//     .source-row-label {
//       margin: 0 0 8px;
//       color: #5d7686;
//       font-size: 8px;
//       font-weight: 800;
//       line-height: 1;
//       letter-spacing: .14em;
//       text-align: center;
//     }

//     .source-dynamic-section {
//       width: 100%;
//     }

//     .source-dynamic-distribution {
//       position: relative;
//       width: 100%;
//       height: 28px;
//       min-height: 28px;
//     }

//     .source-dynamic-bus {
//       position: absolute;
//       top: 0;
//       left: calc(100% / (var(--source-row-count) * 2));
//       right: calc(100% / (var(--source-row-count) * 2));
//       height: var(--wire-size);
//       background: var(--wire);
//     }

//     .source-dynamic-bus--single {
//       left: 50%;
//       right: 50%;
//     }

//     .source-dynamic-lines {
//       position: absolute;
//       inset: 0;
//       display: grid;
//       grid-template-columns:
//         repeat(
//           var(--source-row-count),
//           minmax(0, 1fr)
//         );
//       pointer-events: none;
//     }

//     .source-dynamic-line {
//       position: relative;
//     }

//     .source-dynamic-line::before {
//       content: "";
//       position: absolute;
//       top: 0;
//       bottom: 0;
//       left: 50%;
//       width: var(--wire-size);
//       transform: translateX(-50%);
//       background: var(--wire);
//     }

//     .source-dynamic-grid {
//       width: 100%;
//       display: grid;
//       grid-template-columns:
//         repeat(
//           var(--source-row-count),
//           minmax(0, 1fr)
//         );
//       gap: 0;
//       align-items: start;
//     }

//     .source-dynamic-slot {
//       position: relative;
//       min-width: 0;
//       display: flex;
//       justify-content: center;
//     }

//     .source-dynamic-slot::before {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 50%;
//       width: 6px;
//       height: 6px;
//       box-sizing: border-box;
//       border: 1px solid var(--wire);
//       border-radius: 50%;
//       background: #ffffff;
//       transform: translate(-50%, -50%);
//       z-index: 7;
//     }

//     .source-dynamic-slot > .eq-card {
//       width: var(--source-card-width);
//       min-width: var(--source-card-width);
//       max-width: var(--source-card-width);
//       height: var(--source-card-height);
//       min-height: var(--source-card-height);
//       max-height: var(--source-card-height);
//       margin: 0;
//     }

//     .source-bus-stem {
//       width: var(--wire-size);
//       height: 32px;
//       margin: 0 auto;
//       background: var(--wire);
//     }


//     /* =====================================================
//        TOP DISTRIBUTION

//                 ─────────────────
//                 │               │
//               INC1            INC2

//        The horizontal bus terminates exactly at the
//        center line of INC1 and INC2.
//     ===================================================== */

//     .source-distribution {
//       position: relative;

//       width: 100%;
//       height: 30px;

//       flex: 0 0 30px;
//     }


//     .source-distribution__bus {
//       position: absolute;

//       top: 0;

//       /*
//        INC1 and INC2 are the first and third columns.
//        Each column occupies one third of the grid.

//        Their centers therefore sit at:
//        16.666% and 83.333%
//       */

//       left: 16.6667%;
//       right: 16.6667%;

//       height: var(--wire-size);

//       background: var(--wire);
//     }


//     .source-distribution__left,
//     .source-distribution__right {
//       position: absolute;

//       top: 0;

//       width: var(--wire-size);
//       height: 30px;

//       background: var(--wire);
//     }


//     .source-distribution__left {
//       left: 16.6667%;

//       transform:
//         translateX(-50%);
//     }


//     .source-distribution__right {
//       right: 16.6667%;

//       transform:
//         translateX(50%);
//     }


//     /* =====================================================
//        EQUIPMENT ROW

//           INC1          OUT          INC2

//        Every equipment node receives exactly one third
//        of the available topology width.

//        Cards are centered inside their slot.
//     ===================================================== */

//     .source-equipment-row {
//       position: relative;

//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           3,
//           minmax(0, 1fr)
//         );

//       align-items: start;

//       z-index: 2;
//     }


//     .source-slot {
//       position: relative;

//       min-width: 0;

//       display: flex;
//       flex-direction: column;

//       align-items: center;

//       z-index: 2;
//     }


//     /* =====================================================
//        CARD WIDTH

//        EquipmentCard remains reusable.
//        Source controls its required size here.
//     ===================================================== */

//     .source-slot > .eq-card {
//       width:
//         var(--source-card-width);

//       min-width:
//         var(--source-card-width);

//       max-width:
//         var(--source-card-width);

//       height:
//         var(--source-card-height);

//       min-height:
//         var(--source-card-height);

//       max-height:
//         var(--source-card-height);

//       position: relative;

//       z-index: 5;
//     }


//     /* =====================================================
//        INC1 ───── OUT ───── INC2

//        Critical improvement:

//        Instead of top:61px / top:66px,
//        the conductor is calculated from the actual
//        card height.

//        Card center:
//        card height / 2
//     ===================================================== */

//     .source-card-bus {
//       position: absolute;

//       z-index: 1;

//       top:
//         calc(
//           var(--source-card-height) / 2
//         );

//       left:
//         calc(
//           16.6667% +
//           var(--source-card-width) / 2
//         );

//       right:
//         calc(
//           16.6667% +
//           var(--source-card-width) / 2
//         );

//       height:
//         var(--wire-size);

//       background:
//         var(--wire);

//       pointer-events: none;
//     }


//     /* =====================================================
//        OUT → METER
//     ===================================================== */

//     .source-meter-connector {
//       width:
//         var(--wire-size);

//       height: 34px;

//       flex: 0 0 34px;

//       background:
//         var(--wire);
//     }


//     .source-meter-slot {
//       width:
//         var(--source-card-width);

//       display: flex;

//       justify-content: center;

//       position: relative;

//       z-index: 5;
//     }


//     .source-meter-slot > .eq-card {
//       width:
//         var(--source-card-width);

//       min-width:
//         var(--source-card-width);

//       max-width:
//         var(--source-card-width);

//       height:
//         var(--source-card-height);

//       min-height:
//         var(--source-card-height);

//       max-height:
//         var(--source-card-height);
//     }


//     /* =====================================================
//        CONNECTION TERMINALS

//        Small terminal points make the topology look
//        more like an engineering / SCADA diagram.
//        They are static — no animation.
//     ===================================================== */

//     .source-slot--inc1::after,
//     .source-slot--inc2::after {
//       content: "";

//       position: absolute;

//       top: -3px;

//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 7;
//     }


//     /* =====================================================
//        METER SECTION

//        Meter stays directly under OUT.
//     ===================================================== */

//     .source-meter-area {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           3,
//           minmax(0, 1fr)
//         );
//     }


//     .source-meter-column {
//       grid-column: 2;

//       min-width: 0;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//     }


//     /* =====================================================
//        PREVENT HOVER FROM BREAKING CONNECTORS
//     ===================================================== */

//     .source-view .eq-card:hover,
//     .source-view .eq-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .source-view {
//         --source-card-width: 215px;
//         --source-card-height: 138px;

//         padding-left: 60px;
//         padding-right: 60px;
//       }


//       .source-network {
//         width:
//           min(
//             100%,
//             1180px
//           );
//       }


//       .source-parent {
//         width: 470px;

//         min-height: 116px;
//       }


//       .source-main-stem {
//         height: 36px;

//         flex-basis: 36px;
//       }


//       .source-distribution {
//         height: 34px;

//         flex-basis: 34px;
//       }


//       .source-distribution__left,
//       .source-distribution__right {
//         height: 34px;
//       }


//       .source-meter-connector {
//         height: 38px;

//         flex-basis: 38px;
//       }
//     }


//     /* =====================================================
//        STANDARD LAPTOP
//        1366 / 1440 width
//     ===================================================== */

//     @media (
//       min-width: 1101px
//     ) and (
//       max-width: 1499px
//     ) {

//       .source-view {
//         --source-card-width: 190px;
//         --source-card-height: 128px;

//         padding-top: 12px;
//       }


//       .source-network {
//         width:
//           min(
//             100%,
//             940px
//           );
//       }


//       .source-parent {
//         width: 400px;

//         min-height: 100px;

//         padding: 13px 20px;
//       }


//       .source-parent h2 {
//         font-size: 18px;
//       }


//       .source-main-stem {
//         height: 26px;

//         flex-basis: 26px;
//       }


//       .source-distribution {
//         height: 26px;

//         flex-basis: 26px;
//       }


//       .source-distribution__left,
//       .source-distribution__right {
//         height: 26px;
//       }


//       .source-meter-connector {
//         height: 26px;

//         flex-basis: 26px;
//       }
//     }


//     /* =====================================================
//        TABLET / SMALL LAPTOP

//        Do not crush the electrical topology.
//        Allow horizontal scrolling instead.
//     ===================================================== */

//     @media (max-width: 1100px) {

//       .source-view {
//         --source-card-width: 180px;
//         --source-card-height: 126px;

//         align-items: flex-start;

//         padding:
//           14px 20px 24px;

//         overflow-x: auto;
//       }


//       .source-parent {
//         width: 380px;

//         min-height: 100px;

//         flex: 0 0 auto;

//         align-self: center;
//       }


//       .source-main-stem {
//         align-self: center;
//       }


//       .source-network {
//         width: 820px;
//         min-width: 820px;

//         align-self: center;
//       }
//     }
//   `;


//   return (
//     <div className="source-view">
//       <style>{sourceStyles}</style>


//       {/* ===================================================
//           SOURCE PARENT
//       ==================================================== */}

//       <div className="source-parent">
//         <Zap
//           size={27}
//           strokeWidth={1.8}
//         />

//         <span>
//           CENTRAL CONTROL PANEL
//         </span>

//      <h2>
//   {voltageLevel} SOURCE
// </h2>

// <p>
//   {incomingCount} INCOMING /{" "}
//   {outgoingCount} OUTGOING
//   {meterCount > 0
//     ? ` / ${meterCount} METER${
//         meterCount === 1 ? "" : "S"
//       }`
//     : ""}
// </p>
//       </div>


//       {/* ===================================================
//           SOURCE → DISTRIBUTION BUS
//       ==================================================== */}

//       <div className="source-main-stem" />


//       {/* ===================================================
//           NETWORK
//       ==================================================== */}

//       <div
//         className="source-network"
//         style={{
//           width: `${sourceNetworkWidth}px`,
//           minWidth: `${sourceNetworkWidth}px`,
//         }}
//       >

//         {incomingFeeders.length > 0 && (
//           <div
//             className="source-dynamic-section"
//             style={{
//               "--source-row-count":
//                 incomingFeeders.length,
//             }}
//           >
//             <div className="source-row-label">
//               INCOMING SOURCES
//             </div>

//             <div className="source-dynamic-distribution">
//               <div
//                 className={`source-dynamic-bus ${
//                   incomingFeeders.length === 1
//                     ? "source-dynamic-bus--single"
//                     : ""
//                 }`}
//               />

//               <div className="source-dynamic-lines">
//                 {incomingFeeders.map((item) => (
//                   <div
//                     className="source-dynamic-line"
//                     key={`line-${item.id}`}
//                   />
//                 ))}
//               </div>
//             </div>

//             <div className="source-dynamic-grid">
//               {incomingFeeders.map((item) => (
//                 <div
//                   className="source-dynamic-slot"
//                   key={item.id}
//                 >
//                   <EquipmentCard
//                     equipment={item}
//                     onOpen={onOpenEquipment}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {incomingFeeders.length > 0 &&
//           outgoingFeeders.length > 0 && (
//           <div className="source-bus-stem" />
//         )}

//         {outgoingFeeders.length > 0 && (
//           <div
//             className="source-dynamic-section"
//             style={{
//               "--source-row-count":
//                 outgoingFeeders.length,
//             }}
//           >
//             <div className="source-row-label">
//               MAIN BUS / OUTGOING
//             </div>

//             <div className="source-dynamic-distribution">
//               <div
//                 className={`source-dynamic-bus ${
//                   outgoingFeeders.length === 1
//                     ? "source-dynamic-bus--single"
//                     : ""
//                 }`}
//               />

//               <div className="source-dynamic-lines">
//                 {outgoingFeeders.map((item) => (
//                   <div
//                     className="source-dynamic-line"
//                     key={`line-${item.id}`}
//                   />
//                 ))}
//               </div>
//             </div>

//             <div className="source-dynamic-grid">
//               {outgoingFeeders.map((item) => (
//                 <div
//                   className="source-dynamic-slot"
//                   key={item.id}
//                 >
//                   <EquipmentCard
//                     equipment={item}
//                     onOpen={onOpenEquipment}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {meters.length > 0 &&
//           outgoingFeeders.length > 0 && (
//           <div className="source-bus-stem" />
//         )}

//         {meters.length > 0 && (
//           <div
//             className="source-dynamic-section"
//             style={{
//               "--source-row-count":
//                 meters.length,
//             }}
//           >
//             <div className="source-row-label">
//               ENERGY METERING
//             </div>

//             <div className="source-dynamic-distribution">
//               <div
//                 className={`source-dynamic-bus ${
//                   meters.length === 1
//                     ? "source-dynamic-bus--single"
//                     : ""
//                 }`}
//               />

//               <div className="source-dynamic-lines">
//                 {meters.map((item) => (
//                   <div
//                     className="source-dynamic-line"
//                     key={`line-${item.id}`}
//                   />
//                 ))}
//               </div>
//             </div>

//             <div className="source-dynamic-grid">
//               {meters.map((item) => (
//                 <div
//                   className="source-dynamic-slot"
//                   key={item.id}
//                 >
//                   <EquipmentCard
//                     equipment={item}
//                     onOpen={onOpenEquipment}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    2. FEEDER VIEW
// ========================================================= */
// /* =========================================================
//    2. FEEDER VIEW
// ========================================================= */

// /* =========================================================
//    FEEDER VIEW
//    Dynamic:
//    - Client-configured voltage
//    - N incoming feeders
//    - N outgoing feeders
//    - Static engineering bus
// ========================================================= */

// function FeederView({
//   topology,
//   onOpenEquipment,
// }) {
//   const configuration =
//     topology?.configuration || {};

//   const voltageLevel =
//     configuration.voltageLevel ||
//     topology?.voltageLevel ||
//     "33kV";


//   /* =====================================================
//      DYNAMIC EQUIPMENT

//      New project structure:
//        incomingFeeders[]
//        outgoingFeeders[]

//      Legacy fallback:
//        incoming
//        equipment[]
//   ===================================================== */

//   const incomingFeeders =
//     Array.isArray(
//       topology?.incomingFeeders
//     )
//       ? topology.incomingFeeders
//       : topology?.incoming
//       ? [topology.incoming]
//       : [];


//   const outgoingFeeders =
//     Array.isArray(
//       topology?.outgoingFeeders
//     )
//       ? topology.outgoingFeeders
//       : Array.isArray(
//           topology?.equipment
//         )
//       ? topology.equipment
//       : [];


//   const incomingCount =
//     incomingFeeders.length;

//   const outgoingCount =
//     outgoingFeeders.length;


//   /*
//     The drawing grows horizontally when the client has
//     many feeders.

//     This prevents cards from becoming tiny and prevents
//     conductors from crossing/overlapping cards.
//   */

//   const cardWidth = 180;
//   const columnGap = 28;

//   const incomingWidth =
//     incomingCount > 0
//       ? incomingCount * cardWidth +
//         Math.max(
//           incomingCount - 1,
//           0
//         ) *
//           columnGap
//       : 0;

//   const outgoingWidth =
//     outgoingCount > 0
//       ? outgoingCount * cardWidth +
//         Math.max(
//           outgoingCount - 1,
//           0
//         ) *
//           columnGap
//       : 0;

//   const networkWidth =
//     Math.max(
//       760,
//       incomingWidth,
//       outgoingWidth
//     );


//   const feederStyles = `
//     .fd-feeder {
//       width: 100%;
//       min-width: 0;
//     }


//     /* =====================================================
//        HEADER
//     ===================================================== */

//     .fd-feeder__header {
//       display: flex;

//       align-items: center;
//       justify-content: space-between;

//       gap: 20px;

//       margin-bottom: 24px;

//       padding-bottom: 14px;

//       border-bottom:
//         1px solid
//         rgba(105, 150, 175, 0.16);
//     }


//     .fd-feeder__header-copy {
//       min-width: 0;
//     }


//     .fd-feeder__eyebrow {
//       display: block;

//       margin-bottom: 5px;

//       color: #6aaec3;

//       font-size: 9px;
//       font-weight: 800;

//       letter-spacing: 0.15em;

//       text-transform: uppercase;
//     }


//     .fd-feeder__title {
//       margin: 0;

//       color:
//         var(
//           --text-primary,
//           #eaf4fb
//         );

//       font-size:
//         clamp(
//           20px,
//           2vw,
//           28px
//         );

//       font-weight: 700;

//       letter-spacing: -0.02em;
//     }


//     .fd-feeder__subtitle {
//       margin:
//         6px 0 0;

//       color:
//         var(
//           --text-secondary,
//           #8499a9
//         );

//       font-size: 12px;
//       font-weight: 500;
//     }


//     .fd-feeder__voltage {
//       flex: 0 0 auto;

//       padding:
//         9px 14px;

//       border:
//         1px solid
//         rgba(46, 181, 201, 0.34);

//       border-radius: 4px;

//       background:
//         rgba(46, 181, 201, 0.06);

//       color: #69c7d7;

//       font-size: 12px;
//       font-weight: 800;

//       letter-spacing: 0.05em;
//     }


//     /* =====================================================
//        SCROLLABLE ENGINEERING WORKSPACE
//     ===================================================== */

//     .fd-feeder__viewport {
//       width: 100%;

//       overflow-x: auto;
//       overflow-y: hidden;

//       padding:
//         8px 0 22px;
//     }


//     .fd-feeder__network {
//       width:
//         ${networkWidth}px;

//       min-width:
//         ${networkWidth}px;

//       margin: 0 auto;

//       display: flex;
//       flex-direction: column;

//       align-items: stretch;

//       box-sizing: border-box;
//     }


//     /* =====================================================
//        SECTION LABEL
//     ===================================================== */

//     .fd-feeder__section-label {
//       display: block;

//       margin-bottom: 12px;

//       color: #718899;

//       font-size: 9px;
//       font-weight: 800;

//       letter-spacing: 0.14em;

//       text-align: center;

//       text-transform: uppercase;
//     }


//     /* =====================================================
//        INCOMING GRID
//     ===================================================== */

//     .fd-feeder__incoming-grid {
//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             incomingCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       justify-content: center;

//       column-gap:
//         ${columnGap}px;

//       width: max-content;

//       max-width: 100%;

//       margin:
//         0 auto;
//     }


//     .fd-feeder__incoming-column {
//       width:
//         ${cardWidth}px;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//     }


//     /*
//       No card movement on hover.

//       The conductor begins directly below the
//       equipment card and remains aligned with its
//       center.
//     */

//     .fd-feeder__incoming-drop {
//       width: 2px;
//       height: 34px;

//       flex: 0 0 34px;

//       background: #2eb5c9;
//     }


//     /* =====================================================
//        INCOMING COLLECTION BUS
//     ===================================================== */

//     .fd-feeder__incoming-collector {
//       position: relative;

//       width:
//         ${
//           incomingCount <= 1
//             ? cardWidth
//             : incomingWidth
//         }px;

//       height: 34px;

//       margin:
//         0 auto;
//     }


//     /*
//       Horizontal collection bus runs exactly between
//       the center of the first and last incoming cards.
//     */

//     .fd-feeder__incoming-horizontal {
//       position: absolute;

//       top: 0;

//       left:
//         ${
//           incomingCount <= 1
//             ? cardWidth / 2
//             : cardWidth / 2
//         }px;

//       right:
//         ${
//           incomingCount <= 1
//             ? cardWidth / 2 - 2
//             : cardWidth / 2
//         }px;

//       height: 2px;

//       background: #2eb5c9;
//     }


//     /*
//       Center stem connects incoming collection bus
//       to the main distribution bus.
//     */

//     .fd-feeder__incoming-center-stem {
//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 2px;
//       height: 34px;

//       transform:
//         translateX(-50%);

//       background: #2eb5c9;
//     }


//     /* =====================================================
//        MAIN BUS
//     ===================================================== */

//     .fd-feeder__bus-label {
//       margin:
//         0 0 8px;

//       color: #668092;

//       font-size: 9px;
//       font-weight: 800;

//       letter-spacing: 0.14em;

//       text-align: center;

//       text-transform: uppercase;
//     }


//     .fd-feeder__main-bus-wrap {
//       width:
//         ${Math.max(
//           outgoingWidth,
//           cardWidth
//         )}px;

//       margin:
//         0 auto;

//       display: flex;

//       justify-content: center;
//     }


//     /*
//       Bus starts at the center of the first outgoing
//       feeder and finishes at the center of the last
//       outgoing feeder.

//       Therefore no floating conductor endpoints.
//     */

//     .fd-feeder__main-bus {
//       width:
//         ${
//           outgoingCount <= 1
//             ? 2
//             : Math.max(
//                 outgoingWidth -
//                   cardWidth,
//                 2
//               )
//         }px;

//       height: 2px;

//       background: #2eb5c9;
//     }


//     /* =====================================================
//        OUTGOING GRID
//     ===================================================== */

//     .fd-feeder__outgoing-grid {
//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             outgoingCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       justify-content: center;

//       column-gap:
//         ${columnGap}px;

//       width: max-content;

//       max-width: 100%;

//       margin:
//         0 auto;
//     }


//     .fd-feeder__outgoing-column {
//       width:
//         ${cardWidth}px;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//     }


//     .fd-feeder__outgoing-drop {
//       width: 2px;
//       height: 36px;

//       flex: 0 0 36px;

//       background: #2eb5c9;
//     }


//     /* =====================================================
//        EMPTY STATE
//     ===================================================== */

//     .fd-feeder__empty {
//       width:
//         min(
//           520px,
//           calc(
//             100% - 32px
//           )
//         );

//       margin:
//         28px auto;

//       padding: 26px;

//       box-sizing:
//         border-box;

//       border:
//         1px solid
//         rgba(
//           110,
//           140,
//           160,
//           0.22
//         );

//       border-radius: 4px;

//       background:
//         rgba(
//           70,
//           105,
//           125,
//           0.05
//         );

//       text-align: center;
//     }


//     .fd-feeder__empty strong {
//       display: block;

//       margin-bottom: 6px;

//       color:
//         var(
//           --text-primary,
//           #e2edf4
//         );

//       font-size: 14px;
//     }


//     .fd-feeder__empty span {
//       color:
//         var(
//           --text-secondary,
//           #8499a9
//         );

//       font-size: 11px;
//     }


//     /* =====================================================
//        RESPONSIVE
//     ===================================================== */

//     @media (
//       max-width: 900px
//     ) {
//       .fd-feeder__header {
//         align-items:
//           flex-start;

//         flex-direction:
//           column;
//       }
//     }
//   `;


//   /* =====================================================
//      SAFETY STATE
//   ===================================================== */

//   if (
//     incomingCount < 1 ||
//     outgoingCount < 1
//   ) {
//     return (
//       <div className="fd-feeder">
//         <style>
//           {feederStyles}
//         </style>

//         <div className="fd-feeder__empty">
//           <strong>
//             Feeder configuration unavailable
//           </strong>

//           <span>
//             At least one incoming feeder and
//             one outgoing feeder are required.
//           </span>
//         </div>
//       </div>
//     );
//   }


//   /* =====================================================
//      RENDER
//   ===================================================== */

//   return (
//     <div className="fd-feeder">
//       <style>
//         {feederStyles}
//       </style>


//       {/* HEADER */}

//       <div className="fd-feeder__header">

//         <div className="fd-feeder__header-copy">

//           <span className="fd-feeder__eyebrow">
//             ELECTRICAL DISTRIBUTION
//           </span>

//           <h2 className="fd-feeder__title">
//             {voltageLevel} FEEDER PANEL
//           </h2>

//           <p className="fd-feeder__subtitle">
//             {incomingCount} Incoming
//             {" / "}
//             {outgoingCount} Outgoing
//             {" "}
//             Feeder
//             {outgoingCount === 1
//               ? ""
//               : "s"}
//           </p>

//         </div>


//         <div className="fd-feeder__voltage">
//           {voltageLevel}
//         </div>

//       </div>


//       {/* NETWORK */}

//       <div className="fd-feeder__viewport">

//         <div className="fd-feeder__network">


//           {/* =============================================
//               INCOMING FEEDERS
//           ============================================== */}

//           <span className="fd-feeder__section-label">
//             INCOMING FEEDERS
//           </span>


//           <div className="fd-feeder__incoming-grid">

//             {incomingFeeders.map(
//               (incoming) => (
//                 <div
//                   className="fd-feeder__incoming-column"
//                   key={incoming.id}
//                 >

//                   <EquipmentCard
//                     equipment={incoming}
//                     onOpen={
//                       onOpenEquipment
//                     }
//                   />


//                   <div className="fd-feeder__incoming-drop" />

//                 </div>
//               )
//             )}

//           </div>


//           {/* =============================================
//               INCOMING COLLECTION BUS
//           ============================================== */}

//           <div className="fd-feeder__incoming-collector">

//             {incomingCount > 1 && (
//               <div className="fd-feeder__incoming-horizontal" />
//             )}


//             <div className="fd-feeder__incoming-center-stem" />

//           </div>


//           {/* =============================================
//               MAIN DISTRIBUTION BUS
//           ============================================== */}

//           <div className="fd-feeder__bus-label">
//             {voltageLevel} DISTRIBUTION BUS
//           </div>


//           <div className="fd-feeder__main-bus-wrap">

//             <div className="fd-feeder__main-bus" />

//           </div>


//           {/* =============================================
//               OUTGOING FEEDERS
//           ============================================== */}

//           <div className="fd-feeder__outgoing-grid">

//             {outgoingFeeders.map(
//               (outgoing) => (
//                 <div
//                   className="fd-feeder__outgoing-column"
//                   key={outgoing.id}
//                 >

//                   <div className="fd-feeder__outgoing-drop" />


//                   <EquipmentCard
//                     equipment={outgoing}
//                     onOpen={
//                       onOpenEquipment
//                     }
//                   />

//                 </div>
//               )
//             )}

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    3. TRANSFORMER VIEW
//    Fully independent. Editing this CSS cannot affect LT Kiosk,
//    Busduct, Wing, Fire, Source, etc.
// ========================================================= */

// function TransformerView({
//   topology,
//   onOpenEquipment,
// }) {
//   /* =====================================================
//      PROJECT CONFIGURATION
//   ===================================================== */

//   const configuration =
//     topology?.configuration || {};

//   const transformers =
//     Array.isArray(topology?.equipment)
//       ? topology.equipment
//       : [];

//   const transformerCount =
//     transformers.length;

//   const primaryVoltage =
//     configuration.primaryVoltage ||
//     topology?.primaryVoltage ||
//     "33kV";

//   const secondaryVoltage =
//     configuration.secondaryVoltage ||
//     topology?.secondaryVoltage ||
//     "433V";


//   /* =====================================================
//      DYNAMIC GEOMETRY

//      Keep transformer cards at a readable fixed size.

//      If a client configures many transformers, the
//      topology grows horizontally instead of crushing
//      the cards.
//   ===================================================== */

//   const cardWidth = 172;
//   const columnGap = 28;

//   const equipmentWidth =
//     transformerCount > 0
//       ? transformerCount * cardWidth +
//         Math.max(
//           transformerCount - 1,
//           0
//         ) *
//           columnGap
//       : cardWidth;

//   const networkWidth =
//     Math.max(
//       760,
//       equipmentWidth
//     );


//   const transformerStyles = `
//     /* =====================================================
//        DYNAMIC TRANSFORMER FLOW

//                    TRANSFORMER PLANT
//                           │
//                           │
//               ────────────┼────────────
//                │     │     │     │
//               TR1   TR2   TR3   TR4 ...

//        Number of transformers is controlled by the
//        project configuration.

//        Static BMS / electrical topology.
//        No animation.
//        No moving cards.
//     ===================================================== */

//     .transformer-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       --transformer-card-width:
//         ${cardWidth}px;

//       --transformer-card-height:
//         136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 2.5vw, 40px)
//         24px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;

//       overflow: hidden;

//       --equipment-card-width:
//         var(
//           --transformer-card-width
//         );
//     }


//     /* =====================================================
//        HEADER / PARENT
//     ===================================================== */

//     .transformer-parent {
//       position: relative;

//       width:
//         clamp(
//           390px,
//           34vw,
//           470px
//         );

//       min-height: 108px;

//       padding: 15px 24px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       border:
//         1px solid #367fb1;

//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #153e72 0%,
//           #102f61 55%,
//           #0d2853 100%
//         );

//       box-shadow:
//         0 7px 18px
//         rgba(
//           11,
//           44,
//           75,
//           .13
//         );

//       z-index: 5;
//     }


//     .transformer-parent::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #3eb9d0;
//     }


//     .transformer-parent svg {
//       margin-bottom: 2px;

//       color: #72d1e2;
//     }


//     .transformer-parent span {
//       color: #8ec5ea;

//       font-size: 8px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .16em;
//     }


//     .transformer-parent h2 {
//       margin: 5px 0 2px;

//       color: #ffffff;

//       font-size: 19px;
//       font-weight: 700;

//       line-height: 1.15;

//       text-align: center;
//     }


//     .transformer-parent p {
//       margin: 0;

//       color: #b3cada;

//       font-size: 9px;
//       font-weight: 550;

//       line-height: 1.2;

//       letter-spacing: .03em;
//     }


//     /* =====================================================
//        SCROLLABLE WORKSPACE

//        Parent remains centered.

//        Only the electrical transformer topology needs
//        horizontal scrolling when the client configures
//        a large transformer count.
//     ===================================================== */

//     .transformer-scroll {
//       width: 100%;

//       overflow-x: auto;
//       overflow-y: hidden;

//       padding-bottom: 12px;
//     }


//     .transformer-scroll-inner {
//       width:
//         ${networkWidth}px;

//       min-width:
//         ${networkWidth}px;

//       margin: 0 auto;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//     }


//     /* =====================================================
//        PARENT → BUS
//     ===================================================== */

//     .transformer-stem {
//       width:
//         var(--wire-size);

//       height: 34px;

//       min-height: 34px;

//       flex: 0 0 34px;

//       background:
//         var(--wire);
//     }


//     /* =====================================================
//        NETWORK
//     ===================================================== */

//     .transformer-network {
//       position: relative;

//       width:
//         ${equipmentWidth}px;

//       min-width:
//         ${equipmentWidth}px;

//       margin: 0 auto;
//     }


//     /* =====================================================
//        DISTRIBUTION BUS

//        The horizontal line begins at the exact center
//        of the first transformer and ends at the exact
//        center of the last transformer.
//     ===================================================== */

//     .transformer-distribution {
//       position: relative;

//       width: 100%;

//       height: 36px;

//       min-height: 36px;
//     }


//     .transformer-bus {
//       position: absolute;

//       top: 0;

//       left:
//         ${cardWidth / 2}px;

//       right:
//         ${cardWidth / 2}px;

//       height:
//         var(--wire-size);

//       background:
//         var(--wire);

//       pointer-events: none;
//     }


//     /*
//       When there is only one transformer, the horizontal
//       bus does not need to extend anywhere.

//       This small center terminal keeps the main stem and
//       branch electrically aligned.
//     */

//     .transformer-bus--single {
//       left: 50%;
//       right: auto;

//       width:
//         var(--wire-size);

//       transform:
//         translateX(-50%);
//     }


//     /* =====================================================
//        DYNAMIC VERTICAL BRANCHES

//        Uses exactly the same width, card width and gap
//        as the equipment row below.
//     ===================================================== */

//     .transformer-branch-lines {
//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 36px;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             transformerCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       column-gap:
//         ${columnGap}px;

//       pointer-events: none;
//     }


//     .transformer-line-slot {
//       position: relative;

//       width:
//         ${cardWidth}px;

//       height: 36px;
//     }


//     .transformer-line-slot::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width:
//         var(--wire-size);

//       background:
//         var(--wire);

//       transform:
//         translateX(-50%);
//     }


//     /* =====================================================
//        TRANSFORMER CARDS
//     ===================================================== */

//     .transformer-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             transformerCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       column-gap:
//         ${columnGap}px;

//       align-items: start;

//       margin: 0;
//       padding: 0;

//       position: relative;

//       z-index: 3;
//     }


//     .transformer-branch {
//       position: relative;

//       width:
//         ${cardWidth}px;

//       min-width:
//         ${cardWidth}px;

//       display: flex;

//       justify-content: center;
//       align-items: flex-start;
//     }


//     .transformer-branch >
//     .eq-card {
//       width:
//         var(
//           --transformer-card-width
//         );

//       min-width:
//         var(
//           --transformer-card-width
//         );

//       max-width:
//         var(
//           --transformer-card-width
//         );

//       height:
//         var(
//           --transformer-card-height
//         );

//       min-height:
//         var(
//           --transformer-card-height
//         );

//       max-height:
//         var(
//           --transformer-card-height
//         );

//       position: relative;

//       z-index: 5;
//     }


//     /* =====================================================
//        CONNECTION TERMINAL
//     ===================================================== */

//     .transformer-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing:
//         border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background:
//         var(
//           --page-bg,
//           #07131e
//         );

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 7;
//     }


//     /* =====================================================
//        IMPORTANT:
//        DO NOT MOVE CARDS ON HOVER
//     ===================================================== */

//     .transformer-view
//     .eq-card:hover,

//     .transformer-view
//     .eq-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        EMPTY STATE
//     ===================================================== */

//     .transformer-empty {
//       width:
//         min(
//           520px,
//           calc(
//             100% - 32px
//           )
//         );

//       margin: 30px auto;

//       padding: 25px;

//       box-sizing:
//         border-box;

//       border:
//         1px solid
//         rgba(
//           80,
//           130,
//           160,
//           .28
//         );

//       border-radius: 4px;

//       color: #7893a4;

//       background:
//         rgba(
//           40,
//           80,
//           105,
//           .06
//         );

//       text-align: center;

//       font-size: 11px;
//     }


//     .transformer-empty strong {
//       display: block;

//       margin-bottom: 6px;

//       color: #dceaf1;

//       font-size: 14px;
//     }


//     /* =====================================================
//        LAPTOP
//     ===================================================== */

//     @media (
//       max-width: 1200px
//     ) {

//       .transformer-view {
//         padding-left: 20px;
//         padding-right: 20px;
//       }


//       .transformer-parent {
//         width: 390px;

//         min-height: 98px;
//       }
//     }


//     /* =====================================================
//        MOBILE / TABLET
//     ===================================================== */

//     @media (
//       max-width: 700px
//     ) {

//       .transformer-view {
//         padding:
//           16px
//           14px
//           24px;
//       }


//       .transformer-parent {
//         width:
//           min(
//             100%,
//             380px
//           );

//         min-height: 96px;
//       }


//       .transformer-parent h2 {
//         font-size: 16px;
//       }
//     }
//   `;


//   /* =====================================================
//      EMPTY CONFIGURATION
//   ===================================================== */

//   if (transformerCount === 0) {
//     return (
//       <div className="transformer-view">

//         <style>
//           {transformerStyles}
//         </style>

//         <div className="transformer-empty">

//           <strong>
//             No transformers configured
//           </strong>

//           Configure at least one
//           transformer for this project.

//         </div>

//       </div>
//     );
//   }


//   /* =====================================================
//      RENDER
//   ===================================================== */

//   return (
//     <div className="transformer-view">

//       <style>
//         {transformerStyles}
//       </style>


//       {/* ===============================================
//           TRANSFORMER PLANT
//       ================================================ */}

//       <div className="transformer-parent">

//         <Zap
//           size={26}
//           strokeWidth={1.8}
//         />

//         <span>
//           STEP-DOWN SUBSTATION
//         </span>

//         <h2>
//           {primaryVoltage}
//           {" / "}
//           {secondaryVoltage}
//           {" "}
//           TRANSFORMERS
//         </h2>

//         <p>
//           {transformerCount}
//           {" "}
//           TRANSFORMER
//           {transformerCount === 1
//             ? ""
//             : "S"}
//           {" "}
//           · DISTRIBUTION
//         </p>

//       </div>


//       {/* ===============================================
//           SCROLLABLE ELECTRICAL NETWORK
//       ================================================ */}

//       <div className="transformer-scroll">

//         <div className="transformer-scroll-inner">


//           {/* PARENT → BUS */}

//           <div className="transformer-stem" />


//           <div className="transformer-network">


//             {/* =========================================
//                 BUS + BRANCHES
//             ========================================== */}

//             <div className="transformer-distribution">

//               <div
//                 className={`transformer-bus ${
//                   transformerCount === 1
//                     ? "transformer-bus--single"
//                     : ""
//                 }`}
//               />


//               <div className="transformer-branch-lines">

//                 {transformers.map(
//                   (item) => (
//                     <div
//                       className="transformer-line-slot"
//                       key={`line-${item.id}`}
//                     />
//                   )
//                 )}

//               </div>

//             </div>


//             {/* =========================================
//                 TRANSFORMER EQUIPMENT
//             ========================================== */}

//             <div className="transformer-grid">

//               {transformers.map(
//                 (item) => (
//                   <div
//                     className="transformer-branch"
//                     key={item.id}
//                   >

//                     <EquipmentCard
//                       equipment={item}
//                       onOpen={
//                         onOpenEquipment
//                       }
//                     />

//                   </div>
//                 )
//               )}

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    4. LT KIOSK VIEW
// ========================================================= */

// function LTKioskView({
//   topology,
//   onOpenEquipment,
// }) {
//   const kiosks =
//     Array.isArray(topology?.equipment)
//       ? topology.equipment
//       : [];

//   const kioskCount =
//     kiosks.length;

//   const configuration =
//     topology?.configuration || {};

//   const voltage =
//     configuration.voltage ||
//     "433V";

//   const cardWidth = 172;
//   const columnGap = 0;

//   const equipmentWidth =
//     kioskCount > 0
//       ? kioskCount * cardWidth +
//         Math.max(
//           kioskCount - 1,
//           0
//         ) *
//           columnGap
//       : cardWidth;

//   const networkWidth =
//     Math.max(
//       760,
//       equipmentWidth
//     );

//   const kioskStyles = `
//     /* =====================================================
//        LT KIOSK FLOW

//                       LT KIOSKS
//                           │
//                           │
//         ┌────────┬────────┬┴───────┬────────┬────────┐
//         │        │        │        │        │        │
//      KIOSK-1  KIOSK-2  KIOSK-3  KIOSK-4  ...

//        Static electrical distribution topology.
//     ===================================================== */

//     .kiosk-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       --kiosk-card-width: ${cardWidth}px;
//       --kiosk-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 2.5vw, 40px)
//         24px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       overflow: hidden;

//       /*
//        Shared EquipmentCard uses this value.
//       */
//       --equipment-card-width:
//         var(--kiosk-card-width);
//     }


//     .kiosk-scroll {
//       width: 100%;

//       overflow-x: auto;
//       overflow-y: hidden;

//       padding-bottom: 12px;
//     }


//     .kiosk-scroll-inner {
//       width:
//         ${networkWidth}px;

//       min-width:
//         ${networkWidth}px;

//       margin: 0 auto;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//     }


//     /* =====================================================
//        PARENT LT KIOSK PANEL
//     ===================================================== */

//     .kiosk-parent {
//       position: relative;

//       width:
//         clamp(
//           380px,
//           32vw,
//           440px
//         );

//       min-height: 104px;

//       padding: 14px 22px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       border: 1px solid #367fb1;
//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #153e72 0%,
//           #102f61 55%,
//           #0d2853 100%
//         );

//       box-shadow:
//         0 7px 18px
//         rgba(11, 44, 75, .13);

//       z-index: 5;
//     }


//     /* TOP ACCENT */

//     .kiosk-parent::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #3eb9d0;
//     }


//     .kiosk-parent svg {
//       margin-bottom: 2px;

//       color: #72d1e2;
//     }


//     .kiosk-parent span {
//       color: #8ec5ea;

//       font-size: 8px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .16em;
//     }


//     .kiosk-parent h2 {
//       margin: 5px 0 2px;

//       color: #ffffff;

//       font-size: 19px;
//       font-weight: 700;

//       line-height: 1.15;

//       text-align: center;
//     }


//     .kiosk-parent p {
//       margin: 0;

//       color: #b3cada;

//       font-size: 9px;
//       font-weight: 550;

//       line-height: 1.2;

//       letter-spacing: .03em;
//     }


//     /* =====================================================
//        PARENT → DISTRIBUTION BUS
//     ===================================================== */

//     .kiosk-stem {
//       width: var(--wire-size);

//       height: 34px;
//       min-height: 34px;

//       flex: 0 0 34px;

//       background: var(--wire);
//     }


//     /* =====================================================
//        COMPLETE LT KIOSK NETWORK
//     ===================================================== */

//     .kiosk-network {
//       position: relative;

//       width:
//         ${equipmentWidth}px;

//       min-width:
//         ${equipmentWidth}px;

//       margin: 0 auto;
//     }


//     /* =====================================================
//        BUS + BRANCH AREA
//     ===================================================== */

//     .kiosk-distribution {
//       position: relative;

//       width: 100%;

//       height: 34px;
//       min-height: 34px;
//     }


//     /* =====================================================
//        HORIZONTAL BUS

//        The horizontal bus starts at the center of the
//        first kiosk and ends at the center of the last.
//     ===================================================== */

//     .kiosk-bus {
//       position: absolute;

//       top: 0;

//       left: ${cardWidth / 2}px;
//       right: ${cardWidth / 2}px;

//       height: var(--wire-size);

//       background: var(--wire);

//       pointer-events: none;
//     }


//     .kiosk-bus--single {
//       left: 50%;
//       right: auto;

//       width:
//         var(--wire-size);

//       transform:
//         translateX(-50%);
//     }


//     /* =====================================================
//        DYNAMIC VERTICAL DROPS

//        This grid is identical to the equipment grid.
//     ===================================================== */

//     .kiosk-branch-lines {
//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 34px;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             kioskCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       column-gap:
//         ${columnGap}px;

//       pointer-events: none;
//     }


//     .kiosk-line-slot {
//       position: relative;

//       width: 100%;
//       min-width: 0;

//       height: 100%;
//     }


//     .kiosk-line-slot::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       background: var(--wire);

//       transform:
//         translateX(-50%);
//     }


//     /* =====================================================
//        EQUIPMENT GRID

//        Same count-based geometry as connector grid.
//     ===================================================== */

//     .kiosk-grid {
//       position: relative;

//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             kioskCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       align-items: start;

//       column-gap:
//         ${columnGap}px;

//       margin: 0;
//       padding: 0;

//       z-index: 3;
//     }


//     .kiosk-branch {
//       position: relative;

//       width: 100%;
//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        MEDIUM EQUIPMENT CARDS
//     ===================================================== */

//     .kiosk-branch > .eq-card {
//       width:
//         var(--kiosk-card-width);

//       min-width:
//         var(--kiosk-card-width);

//       max-width:
//         var(--kiosk-card-width);

//       height:
//         var(--kiosk-card-height);

//       min-height:
//         var(--kiosk-card-height);

//       max-height:
//         var(--kiosk-card-height);

//       position: relative;

//       z-index: 5;
//     }


//     /* =====================================================
//        CONNECTION TERMINAL

//        Small fixed point where branch meets card.
//     ===================================================== */

//     .kiosk-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 7;
//     }


//     /* =====================================================
//        CARD MUST NOT MOVE
//        Keeps flow lines connected.
//     ===================================================== */

//     .kiosk-view .eq-card:hover,
//     .kiosk-view .eq-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//        1500px+
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .kiosk-view {
//         --kiosk-card-height: 142px;

//         padding-left: 50px;
//         padding-right: 50px;
//       }


//       .kiosk-parent {
//         width: 450px;
//         min-height: 110px;
//       }


//       .kiosk-stem {
//         height: 38px;
//         min-height: 38px;

//         flex-basis: 38px;
//       }


//       .kiosk-distribution {
//         height: 38px;
//         min-height: 38px;
//       }


//       .kiosk-branch-lines {
//         height: 38px;
//       }
//     }


//     /* =====================================================
//        STANDARD LAPTOP
//        1201px - 1499px
//     ===================================================== */

//     @media (
//       min-width: 1201px
//     ) and (
//       max-width: 1499px
//     ) {

//       .kiosk-view {
//         --kiosk-card-height: 136px;

//         padding-left: 24px;
//         padding-right: 24px;
//       }


//       .kiosk-parent {
//         width: 400px;
//         min-height: 98px;

//         padding: 13px 20px;
//       }


//       .kiosk-parent h2 {
//         font-size: 18px;
//       }


//       .kiosk-stem {
//         height: 30px;
//         min-height: 30px;

//         flex-basis: 30px;
//       }


//       .kiosk-distribution {
//         height: 30px;
//         min-height: 30px;
//       }


//       .kiosk-branch-lines {
//         height: 30px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP
//        901px - 1200px
//     ===================================================== */

//     @media (
//       min-width: 901px
//     ) and (
//       max-width: 1200px
//     ) {

//       .kiosk-view {
//         --kiosk-card-height: 132px;

//         align-items: flex-start;

//         padding-left: 20px;
//         padding-right: 20px;
//       }


//       .kiosk-parent {
//         width: 390px;
//         min-height: 96px;

//         align-self: center;
//       }


//       .kiosk-stem {
//         height: 28px;
//         min-height: 28px;

//         flex-basis: 28px;

//         align-self: center;
//       }


//       .kiosk-distribution {
//         height: 28px;
//         min-height: 28px;
//       }


//       .kiosk-branch-lines {
//         height: 28px;
//       }
//     }


//     /* =====================================================
//        TABLET / MOBILE

//        Don't destroy the topology by making cards tiny.
//        Allow horizontal scrolling.
//     ===================================================== */

//     @media (max-width: 900px) {

//       .kiosk-view {
//         --kiosk-card-height: 132px;

//         align-items: flex-start;
//         justify-content: flex-start;

//         padding:
//           16px
//           18px
//           24px;

//       }


//       .kiosk-parent {
//         width: 380px;
//         min-height: 96px;

//         align-self: center;
//       }


//       .kiosk-stem {
//         height: 28px;
//         min-height: 28px;

//         flex-basis: 28px;

//       }


//       .kiosk-distribution {
//         height: 28px;
//         min-height: 28px;
//       }


//       .kiosk-branch-lines {
//         height: 28px;
//       }
//     }
//   `;


//   return (
//     <div className="kiosk-view">
//       <style>{kioskStyles}</style>


//       {/* ===================================================
//           LT KIOSK PARENT
//       ==================================================== */}

//       <div className="kiosk-parent">

//         <PanelsTopLeft
//           size={26}
//           strokeWidth={1.8}
//         />

//         <span>
//           LOW TENSION DISTRIBUTION
//         </span>

//         <h2>
//           LT KIOSKS
//         </h2>

//         <p>
//           {voltage}
//           {" "}
//           DISTRIBUTION
//         </p>

//       </div>


//       <div className="kiosk-scroll">

//         <div className="kiosk-scroll-inner">


//           {/* =================================================
//               PARENT → DISTRIBUTION BUS
//           ================================================== */}

//           <div className="kiosk-stem" />


//           {/* =================================================
//               LT KIOSK NETWORK
//           ================================================== */}

//           <div className="kiosk-network">

//             {/* BUS + DROPS */}

//             <div className="kiosk-distribution">

//               <div
//                 className={`kiosk-bus ${
//                   kioskCount === 1
//                     ? "kiosk-bus--single"
//                     : ""
//                 }`}
//               />

//               <div className="kiosk-branch-lines">

//                 {kiosks.map(
//                   (item) => (
//                     <div
//                       className="kiosk-line-slot"
//                       key={`line-${item.id}`}
//                     />
//                   )
//                 )}

//               </div>

//             </div>


//             {/* ===============================================
//                 LT KIOSK EQUIPMENT
//             ================================================ */}

//             <div className="kiosk-grid">

//               {kiosks.map(
//                 (item) => (
//                   <div
//                     className="kiosk-branch"
//                     key={item.id}
//                   >
//                     <EquipmentCard
//                       equipment={item}
//                       onOpen={onOpenEquipment}
//                     />
//                   </div>
//                 )
//               )}

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    5. BUSDUCT VIEW
// ========================================================= */

// function BusductView({
//   topology,
//   onOpenEquipment,
// }) {
//   const busducts =
//     Array.isArray(topology?.equipment)
//       ? topology.equipment
//       : [];

//   const busductCount =
//     busducts.length;

//   const cardWidth = 172;
//   const columnGap = 0;

//   const equipmentWidth =
//     busductCount > 0
//       ? busductCount * cardWidth +
//         Math.max(
//           busductCount - 1,
//           0
//         ) *
//           columnGap
//       : cardWidth;

//   const networkWidth =
//     Math.max(
//       760,
//       equipmentWidth
//     );

//   const busductStyles = `
//     /* =====================================================
//        BUSDUCT FLOW

//                      LT BUSDUCTS
//                           │
//                           │
//         ┌────────┬────────┬┴───────┬────────┬────────┐
//         │        │        │        │        │        │
//       BUS-1    BUS-2    BUS-3    BUS-4    ...

//        Static BMS electrical distribution topology.
//     ===================================================== */

//     .busduct-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       --busduct-card-width: ${cardWidth}px;
//       --busduct-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 2.5vw, 40px)
//         24px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       overflow: hidden;

//       --equipment-card-width:
//         var(--busduct-card-width);
//     }


//     .busduct-scroll {
//       width: 100%;

//       overflow-x: auto;
//       overflow-y: hidden;

//       padding-bottom: 12px;
//     }


//     .busduct-scroll-inner {
//       width:
//         ${networkWidth}px;

//       min-width:
//         ${networkWidth}px;

//       margin: 0 auto;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//     }


//     /* =====================================================
//        BUSDUCT PARENT
//     ===================================================== */

//     .busduct-parent {
//       position: relative;

//       width:
//         clamp(
//           380px,
//           32vw,
//           440px
//         );

//       min-height: 104px;

//       padding: 14px 22px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       border: 1px solid #367fb1;
//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #153e72 0%,
//           #102f61 55%,
//           #0d2853 100%
//         );

//       box-shadow:
//         0 7px 18px
//         rgba(11, 44, 75, .13);

//       z-index: 5;
//     }


//     /* TOP ACCENT */

//     .busduct-parent::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #3eb9d0;
//     }


//     .busduct-parent svg {
//       margin-bottom: 2px;

//       color: #72d1e2;
//     }


//     .busduct-parent span {
//       color: #8ec5ea;

//       font-size: 8px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .16em;
//     }


//     .busduct-parent h2 {
//       margin: 5px 0 2px;

//       color: #ffffff;

//       font-size: 19px;
//       font-weight: 700;

//       line-height: 1.15;

//       text-align: center;
//     }


//     .busduct-parent p {
//       margin: 0;

//       color: #b3cada;

//       font-size: 9px;
//       font-weight: 550;

//       line-height: 1.2;

//       letter-spacing: .03em;
//     }


//     /* =====================================================
//        PARENT → BUS
//     ===================================================== */

//     .busduct-stem {
//       width: var(--wire-size);

//       height: 34px;
//       min-height: 34px;

//       flex: 0 0 34px;

//       background: var(--wire);
//     }


//     /* =====================================================
//        COMPLETE BUSDUCT NETWORK
//     ===================================================== */

//     .busduct-network {
//       position: relative;

//       width:
//         ${equipmentWidth}px;

//       min-width:
//         ${equipmentWidth}px;

//       margin: 0 auto;
//     }


//     /* =====================================================
//        DISTRIBUTION AREA
//     ===================================================== */

//     .busduct-distribution {
//       position: relative;

//       width: 100%;

//       height: 34px;
//       min-height: 34px;
//     }


//     /* =====================================================
//        HORIZONTAL BUS

//        The bus starts at the center of the first card
//        and finishes at the center of the last card.
//     ===================================================== */

//     .busduct-bus {
//       position: absolute;

//       top: 0;

//       left: ${cardWidth / 2}px;
//       right: ${cardWidth / 2}px;

//       height: var(--wire-size);

//       background: var(--wire);

//       pointer-events: none;
//     }


//     .busduct-bus--single {
//       left: 50%;
//       right: auto;

//       width:
//         var(--wire-size);

//       transform:
//         translateX(-50%);
//     }


//     /* =====================================================
//        DYNAMIC VERTICAL DROPS

//        Uses exactly the same grid as cards.
//     ===================================================== */

//     .busduct-branch-lines {
//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 34px;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             busductCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       column-gap:
//         ${columnGap}px;

//       pointer-events: none;
//     }


//     .busduct-line-slot {
//       position: relative;

//       width: 100%;
//       min-width: 0;

//       height: 100%;
//     }


//     .busduct-line-slot::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       background: var(--wire);

//       transform:
//         translateX(-50%);
//     }


//     /* =====================================================
//        BUSDUCT EQUIPMENT GRID

//        Same count-based columns as connector grid.
//     ===================================================== */

//     .busduct-grid {
//       position: relative;

//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             busductCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       align-items: start;

//       column-gap:
//         ${columnGap}px;

//       margin: 0;
//       padding: 0;

//       z-index: 3;
//     }


//     .busduct-branch {
//       position: relative;

//       width: 100%;
//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        MEDIUM BUSDUCT CARDS
//     ===================================================== */

//     .busduct-branch > .eq-card {
//       width:
//         var(--busduct-card-width);

//       min-width:
//         var(--busduct-card-width);

//       max-width:
//         var(--busduct-card-width);

//       height:
//         var(--busduct-card-height);

//       min-height:
//         var(--busduct-card-height);

//       max-height:
//         var(--busduct-card-height);

//       position: relative;

//       z-index: 5;
//     }


//     /* =====================================================
//        CONNECTION POINT
//     ===================================================== */

//     .busduct-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 7;
//     }


//     /* =====================================================
//        KEEP FLOW ATTACHED DURING HOVER
//     ===================================================== */

//     .busduct-view .eq-card:hover,
//     .busduct-view .eq-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .busduct-view {
//         --busduct-card-height: 142px;

//         padding-left: 50px;
//         padding-right: 50px;
//       }


//       .busduct-parent {
//         width: 450px;
//         min-height: 110px;
//       }


//       .busduct-stem {
//         height: 38px;
//         min-height: 38px;

//         flex-basis: 38px;
//       }


//       .busduct-distribution {
//         height: 38px;
//         min-height: 38px;
//       }


//       .busduct-branch-lines {
//         height: 38px;
//       }
//     }


//     /* =====================================================
//        STANDARD LAPTOP
//        1201px - 1499px
//     ===================================================== */

//     @media (
//       min-width: 1201px
//     ) and (
//       max-width: 1499px
//     ) {

//       .busduct-view {
//         --busduct-card-height: 136px;

//         padding-left: 24px;
//         padding-right: 24px;
//       }


//       .busduct-parent {
//         width: 400px;
//         min-height: 98px;

//         padding: 13px 20px;
//       }


//       .busduct-parent h2 {
//         font-size: 18px;
//       }


//       .busduct-stem {
//         height: 30px;
//         min-height: 30px;

//         flex-basis: 30px;
//       }


//       .busduct-distribution {
//         height: 30px;
//         min-height: 30px;
//       }


//       .busduct-branch-lines {
//         height: 30px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP
//        901px - 1200px
//     ===================================================== */

//     @media (
//       min-width: 901px
//     ) and (
//       max-width: 1200px
//     ) {

//       .busduct-view {
//         --busduct-card-height: 132px;

//         align-items: flex-start;

//         padding-left: 20px;
//         padding-right: 20px;
//       }


//       .busduct-parent {
//         width: 390px;
//         min-height: 96px;

//         align-self: center;
//       }


//       .busduct-stem {
//         height: 28px;
//         min-height: 28px;

//         flex-basis: 28px;

//         align-self: center;
//       }


//       .busduct-distribution {
//         height: 28px;
//         min-height: 28px;
//       }


//       .busduct-branch-lines {
//         height: 28px;
//       }
//     }


//     /* =====================================================
//        TABLET / MOBILE

//        Preserve readable cards and topology.
//     ===================================================== */

//     @media (max-width: 900px) {

//       .busduct-view {
//         --busduct-card-height: 132px;

//         align-items: flex-start;
//         justify-content: flex-start;

//         padding:
//           16px
//           18px
//           24px;

//       }


//       .busduct-parent {
//         width: 380px;
//         min-height: 96px;

//         align-self: center;
//       }


//       .busduct-stem {
//         height: 28px;
//         min-height: 28px;

//         flex-basis: 28px;

//       }


//       .busduct-distribution {
//         height: 28px;
//         min-height: 28px;
//       }


//       .busduct-branch-lines {
//         height: 28px;
//       }
//     }
//   `;


//   return (
//     <div className="busduct-view">
//       <style>{busductStyles}</style>


//       {/* ===================================================
//           BUSDUCT PARENT
//       ==================================================== */}

//       <div className="busduct-parent">

//         <Network
//           size={26}
//           strokeWidth={1.8}
//         />

//         <span>
//           LT POWER DISTRIBUTION
//         </span>

//         <h2>
//           LT BUSDUCTS
//         </h2>

//         <p>
//           433 V BUSDUCT / BUSBAR
//         </p>

//       </div>


//       <div className="busduct-scroll">

//         <div className="busduct-scroll-inner">


//           {/* =================================================
//               PARENT → DISTRIBUTION
//           ================================================== */}

//           <div className="busduct-stem" />


//           {/* =================================================
//               BUSDUCT NETWORK
//           ================================================== */}

//           <div className="busduct-network">

//             {/* MAIN BUS + DROPS */}

//             <div className="busduct-distribution">

//               <div
//                 className={`busduct-bus ${
//                   busductCount === 1
//                     ? "busduct-bus--single"
//                     : ""
//                 }`}
//               />

//               <div className="busduct-branch-lines">

//                 {busducts.map(
//                   (item) => (
//                     <div
//                       className="busduct-line-slot"
//                       key={`line-${item.id}`}
//                     />
//                   )
//                 )}

//               </div>

//             </div>


//             {/* ===============================================
//                 BUSDUCT EQUIPMENT
//             ================================================ */}

//             <div className="busduct-grid">

//               {busducts.map(
//                 (item) => (
//                   <div
//                     className="busduct-branch"
//                     key={item.id}
//                   >
//                     <EquipmentCard
//                       equipment={item}
//                       onOpen={onOpenEquipment}
//                     />
//                   </div>
//                 )
//               )}

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    6. PCC VIEW
//    PCC overview and internal panel stay entirely inside PCC.
// ========================================================= */

// const pccOverviewLabels = {
//   "pcc-1": "Wing A",
//   "pcc-2": "Wing B",
//   "pcc-3": "Chillers",
//   "pcc-4": "Chillers",
// };



// function getPccDemoTelemetry(circuit) {
//   const existing =
//     demoTelemetry[
//       circuit?.id
//     ];

//   if (existing) {
//     return existing;
//   }

//   /*
//     Frontend demo fallback for custom PCC equipment.

//     The values are deterministic from the circuit ID so the
//     same custom equipment does not change every render.
//     Replace this with live backend/IoT telemetry later.
//   */
//   const seed =
//     String(
//       circuit?.id ||
//       circuit?.name ||
//       "pcc-custom"
//     )
//       .split("")
//       .reduce(
//         (total, character) =>
//           total +
//           character.charCodeAt(0),
//         0
//       );

//   return {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,
//     voltage: 433,
//     current:
//       165 +
//       (seed % 86),
//     powerFactor:
//       Number(
//         (
//           0.95 +
//           (seed % 4) *
//             0.01
//         ).toFixed(2)
//       ),
//     kWh:
//       1180 +
//       (seed % 420),
//     kVAh:
//       1230 +
//       (seed % 460),
//     load:
//       48 +
//       (seed % 35),
//     breakerState:
//       circuit?.direction ===
//       "coupler"
//         ? "OPEN"
//         : "CLOSED",
//     direction:
//       circuit?.direction,
//     section:
//       circuit?.section,
//     fault: false,
//     trip: false,
//     warning: false,
//   };
// }


// function PCCView({
//   topology,
//   onOpenEquipment,
// }) {
//   const [selectedPanelId, setSelectedPanelId] =
//     useState(null);

//   const panels =
//     Array.isArray(topology?.panels)
//       ? topology.panels
//       : [];

//   const panelCount =
//     panels.length;

//   const panelCardWidth = 210;
//   const panelGap = 0;

//   const panelEquipmentWidth =
//     panelCount > 0
//       ? panelCount * panelCardWidth +
//         Math.max(
//           panelCount - 1,
//           0
//         ) *
//           panelGap
//       : panelCardWidth;

//   const panelNetworkWidth =
//     Math.max(
//       520,
//       panelEquipmentWidth
//     );


//   const selectedPanel =
//     panels.find(
//       (panel) =>
//         panel.id === selectedPanelId
//     );


//   /* =====================================================
//      PCC STYLES
//   ===================================================== */

//   const pccStyles = `
//     /* =====================================================
//        PCC ROOT
//     ===================================================== */

//     .pcc-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 2.5vw, 40px)
//         24px;

//       box-sizing: border-box;

//       overflow-x: auto;
//     }


//     /* =====================================================
//        PCC OVERVIEW PARENT
//     ===================================================== */

//     .pcc-parent {
//       position: relative;

//       width:
//         clamp(
//           380px,
//           32vw,
//           440px
//         );

//       min-height: 104px;

//       margin: 0 auto;

//       padding: 14px 22px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       overflow: hidden;

//       border:
//         1px solid #367fb1;

//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #153e72 0%,
//           #102f61 55%,
//           #0d2853 100%
//         );

//       box-shadow:
//         0 7px 18px
//         rgba(11, 44, 75, .13);

//       z-index: 5;
//     }


//     .pcc-parent::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #3eb9d0;
//     }


//     .pcc-parent svg {
//       margin-bottom: 2px;

//       color: #72d1e2;
//     }


//     .pcc-parent span {
//       color: #8ec5ea;

//       font-size: 8px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .16em;
//     }


//     .pcc-parent h2 {
//       margin: 5px 0 2px;

//       color: #ffffff;

//       font-size: 19px;
//       font-weight: 700;

//       line-height: 1.15;
//     }


//     .pcc-parent p {
//       margin: 0;

//       color: #b3cada;

//       font-size: 9px;
//       font-weight: 550;
//     }


//     /* =====================================================
//        PCC PARENT → MAIN BUS
//     ===================================================== */

//     .pcc-stem {
//       width:
//         var(--wire-size);

//       height: 34px;
//       min-height: 34px;

//       margin: 0 auto;

//       background:
//         var(--wire);
//     }


//     /* =====================================================
//        PCC OVERVIEW NETWORK
//     ===================================================== */

//     .pcc-overview-network {
//       width:
//         ${panelNetworkWidth}px;

//       min-width:
//         ${panelNetworkWidth}px;

//       margin: 0 auto;
//     }


//     .pcc-distribution {
//       position: relative;

//       width: 100%;

//       height: 34px;
//       min-height: 34px;
//     }


//     /*
//        The overview bus starts at the first panel
//        center and ends at the final panel center.
//     */

//     .pcc-bus {
//       position: absolute;

//       top: 0;

//       left:
//         ${panelCardWidth / 2}px;

//       right:
//         ${panelCardWidth / 2}px;

//       height:
//         var(--wire-size);

//       background:
//         var(--wire);
//     }


//     .pcc-bus--single {
//       left: 50%;
//       right: auto;

//       width:
//         var(--wire-size);

//       transform:
//         translateX(-50%);
//     }


//     .pcc-overview-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             panelCount,
//             1
//           )},
//           ${panelCardWidth}px
//         );

//       column-gap:
//         ${panelGap}px;

//       pointer-events: none;
//     }


//     .pcc-overview-line {
//       position: relative;
//     }


//     .pcc-overview-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width:
//         var(--wire-size);

//       transform:
//         translateX(-50%);

//       background:
//         var(--wire);
//     }


//     /* =====================================================
//        PCC OVERVIEW CARDS
//     ===================================================== */

//     .pcc-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             panelCount,
//             1
//           )},
//           ${panelCardWidth}px
//         );

//       column-gap:
//         ${panelGap}px;

//       align-items: start;
//     }


//     .pcc-branch {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     .pcc-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 7;
//     }


//     .pcc-panel-card {
//       position: relative;

//       width: 210px;
//       min-width: 210px;
//       max-width: 210px;

//       height: 136px;

//       margin: 0;

//       padding: 13px 12px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       overflow: hidden;

//       border:
//         1px solid #327ba2;

//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #174766,
//           #123b58 55%,
//           #0e3049
//         );

//       box-shadow:
//         0 5px 14px
//         rgba(10, 39, 59, .13);

//       cursor: pointer;

//       transition:
//         border-color .15s ease,
//         box-shadow .15s ease;
//     }


//     .pcc-panel-card:hover,
//     .pcc-panel-card:focus-visible {
//       transform: none;

//       outline: none;

//       border-color: #59bad0;

//       box-shadow:
//         0 7px 18px
//         rgba(10, 42, 64, .18);
//     }


//     .pcc-panel-card svg {
//       margin-bottom: 2px;

//       color: #71d0e2;
//     }


//     .pcc-panel-card span {
//       color: #87bddd;

//       font-size: 7px;
//       font-weight: 800;

//       letter-spacing: .12em;
//     }


//     .pcc-panel-card h3 {
//       margin:
//         5px 0 2px;

//       color: #ffffff;

//       font-size: 16px;
//       font-weight: 700;
//     }


//     .pcc-panel-card p {
//       margin: 0;

//       color: #b5cede;

//       font-size: 9px;
//     }


//     .pcc-panel-card strong {
//       margin-top: 6px;

//       color: #79dfb7;

//       font-size: 8px;
//       font-weight: 700;
//     }


//     /* =====================================================
//        INTERNAL PCC
//     ===================================================== */

//     .pcc-internal {
//       width: 100%;
//       min-width: 0;
//     }


//     .pcc-internal-head {
//       width: 100%;

//       margin-bottom: 20px;

//       display: flex;

//       align-items: center;

//       gap: 14px;
//     }


//     .pcc-internal-head button {
//       height: 36px;

//       padding:
//         0 12px;

//       display:
//         inline-flex;

//       align-items: center;

//       gap: 6px;

//       border:
//         1px solid #426780;

//       border-radius: 5px;

//       color: #dce9f2;

//       background: #173b56;

//       cursor: pointer;
//     }


//     .pcc-internal-head button:hover {
//       background: #19445f;

//       border-color: #4da8bd;
//     }


//     .pcc-internal-head span {
//       color: #748b9c;

//       font-size: 7px;
//       font-weight: 800;

//       letter-spacing: .13em;
//     }


//     .pcc-internal-head h2 {
//       margin:
//         2px 0;

//       color: #17354b;

//       font-size: 21px;
//       font-weight: 700;
//     }


//     .pcc-internal-head p {
//       margin: 0;

//       color: #718492;

//       font-size: 9px;
//     }


//     /* =====================================================
//        COMPLETE PCC SWITCHBOARD AREA

//        Lineup and Utility → UPS geometry share
//        the same width.

//        This is important because the Utility
//        connections must remain aligned with the
//        actual switchboard cells.
//     ===================================================== */

//     .pcc-switchboard-scroll {
//       width: 100%;

//       overflow-x: auto;

//       overflow-y: visible;

//       padding-bottom: 8px;
//     }


//     .pcc-switchboard {
//       width: 100%;

//       min-width: 1120px;

//       position: relative;

//       margin: 0 auto;
//     }


//     .pcc-empty-panel {
//       width:
//         min(
//           520px,
//           calc(100% - 32px)
//         );

//       margin: 30px auto;

//       padding: 24px;

//       box-sizing:
//         border-box;

//       border:
//         1px solid
//         rgba(
//           80,
//           130,
//           160,
//           .28
//         );

//       border-radius: 4px;

//       color: #7893a4;

//       background:
//         rgba(
//           40,
//           80,
//           105,
//           .06
//         );

//       text-align: center;

//       font-size: 11px;
//     }


//     .pcc-empty-panel strong {
//       display: block;

//       margin-bottom: 6px;

//       color: #dceaf1;

//       font-size: 14px;
//     }


//     /* =====================================================
//        PCC LINEUP
//     ===================================================== */

//     .pcc-lineup {
//       --pcc-count: 14;

//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--pcc-count),
//           minmax(80px, 1fr)
//         );

//       gap: 0;

//       box-sizing: border-box;

//       border:
//         2px solid #1e6f9e;

//       background: #0e2c4e;
//     }


//     /* =====================================================
//        PCC CIRCUIT
//     ===================================================== */

//     .pcc-cell {
//       position: relative;

//       min-width: 0;

//       height: 122px;

//       margin: 0;

//       padding:
//         9px 5px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       overflow: hidden;

//       border: 0;

//       border-right:
//         1px solid
//         rgba(
//           93,
//           145,
//           177,
//           .46
//         );

//       color: #ffffff;

//       background: #102f54;

//       cursor: pointer;

//       transition:
//         background .14s ease;
//     }


//     .pcc-cell:last-child {
//       border-right: 0;
//     }


//     .pcc-cell--incoming {
//       background: #123a5d;
//     }


//     .pcc-cell--outgoing {
//       background: #102f54;
//     }


//     .pcc-cell--coupler {
//       background: #3d3828;
//     }


//     .pcc-cell:hover,
//     .pcc-cell:focus-visible {
//       transform: none;

//       outline: none;

//       background: #17486b;
//     }


//     .pcc-cell--coupler:hover,
//     .pcc-cell--coupler:focus-visible {
//       background: #51492f;
//     }


//     .pcc-cell > svg {
//       flex:
//         0 0 auto;

//       color: #6ecbdd;
//     }


//     .pcc-cell > small {
//       color: #7fa9c4;

//       font-size: 6px;
//       font-weight: 700;

//       line-height: 1;

//       letter-spacing: .04em;
//     }


//     .pcc-cell > strong {
//       width: 100%;

//       margin:
//         4px 0 2px;

//       overflow: hidden;

//       color: #ffffff;

//       font-size: 8px;
//       font-weight: 700;

//       line-height: 11px;

//       text-align: center;

//       display:
//         -webkit-box;

//       -webkit-line-clamp: 2;
//       -webkit-box-orient: vertical;
//     }


//     .pcc-cell > em {
//       color: #79dfb7;

//       font-size: 7px;
//       font-weight: 700;

//       line-height: 1;

//       font-style: normal;
//     }


//     /* =====================================================
//        PCC CIRCUIT HOVER
//     ===================================================== */

//     .pcc-cell-readings {
//       position: absolute;

//       inset: 0;

//       z-index: 20;

//       padding:
//         8px 7px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       overflow: hidden;

//       background:
//         linear-gradient(
//           145deg,
//           #123f5d,
//           #0d324c
//         );

//       opacity: 0;

//       visibility: hidden;

//       pointer-events: none;

//       transition:
//         opacity .13s ease,
//         visibility .13s ease;
//     }


//     .pcc-cell:hover
//     .pcc-cell-readings,

//     .pcc-cell:focus-visible
//     .pcc-cell-readings {
//       opacity: 1;

//       visibility: visible;
//     }


//     .pcc-cell-readings-title {
//       height: 15px;
//       min-height: 15px;

//       margin-bottom: 3px;

//       color: #73d0e1;

//       font-size: 6px;
//       font-weight: 800;

//       line-height: 15px;

//       text-align: left;

//       letter-spacing: .08em;

//       white-space: nowrap;
//     }


//     .pcc-cell-readings-grid {
//       min-height: 0;

//       flex: 1;

//       display: grid;

//       grid-template-rows:
//         repeat(
//           5,
//           minmax(0, 1fr)
//         );

//       overflow: hidden;
//     }


//     .pcc-cell-reading {
//       min-height: 0;

//       display: grid;

//       grid-template-columns:
//         minmax(0, 1fr)
//         minmax(28px, auto);

//       align-items: center;

//       column-gap: 4px;
//     }


//     .pcc-cell-reading span {
//       min-width: 0;

//       overflow: hidden;

//       color: #9eb9c7;

//       font-size: 6px;
//       font-weight: 550;

//       text-align: left;

//       text-overflow: ellipsis;

//       white-space: nowrap;
//     }


//     .pcc-cell-reading strong {
//       min-width: 0;

//       margin: 0;

//       overflow: hidden;

//       color: #ffffff;

//       font-size: 6.5px;
//       font-weight: 700;

//       text-align: right;

//       text-overflow: ellipsis;

//       white-space: nowrap;
//     }


//     /* =====================================================
//        UTILITY → UPS SUPPLY
//        Exact PCC1/PCC2 14-cell switchboard geometry.

//        Utility 1 = cell 6
//        Utility 2 = cell 13
//        UPS take-off = exact midpoint between both utilities.
//     ===================================================== */

//     .pcc-utility-supply {
//       --utility-row-height: 48px;
//       position: relative;
//       width: 100%;
//       height: var(--utility-row-height);
//       pointer-events: none;
//     }

//     .pcc-utility-drop {
//       position: absolute;
//       top: 0;
//       width: var(--wire-size);
//       height: 18px;
//       transform: translateX(-50%);
//       background: var(--wire);
//     }

//     .pcc-utility-horizontal {
//       position: absolute;
//       top: 16px;
//       height: var(--wire-size);
//       background: var(--wire);
//     }

//     .pcc-utility-to-ups {
//       position: absolute;
//       top: 16px;
//       width: var(--wire-size);
//       height:
//         calc(
//           var(--utility-row-height) -
//           16px
//         );
//       transform:
//         translateX(-50%);
//       background: var(--wire);
//     }


//     /* =====================================================
//        UPS SECTION
//     ===================================================== */

//     .pcc-ups-area {
//       position: relative;

//       width: 100%;

//       height: auto;

//       min-height: 260px;
//     }


//     /* =====================================================
//        UPS PARENT ROW

//        Parent is positioned under the Utility
//        midpoint.
//     ===================================================== */

//     .pcc-ups-parent-row {
//       position: relative;

//       width: 100%;

//       height: 82px;
//     }


//     .pcc-ups-parent {
//       position: absolute;

//       top: 0;

//       left:
//         calc((100% / 14) * 9);

//       width: 220px;
//       height: 82px;

//       padding: 8px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 2px;

//       transform:
//         translateX(-50%);

//       border:
//         1px solid #2879ad;

//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #123d63,
//           #0e3154
//         );

//       z-index: 5;
//     }


//     .pcc-ups-parent svg {
//       color: #71d0e2;
//     }


//     .pcc-ups-parent h3 {
//       margin:
//         3px 0 0;

//       font-size: 14px;
//       font-weight: 700;
//     }


//     .pcc-ups-parent span {
//       color: #a9c4d5;

//       font-size: 7px;
//       font-weight: 700;

//       letter-spacing: .08em;
//     }


//     /* =====================================================
//        UPS PARENT → UPS SUBNETWORK
//     ===================================================== */

//     .pcc-ups-parent-stem {
//       position: relative;

//       width: 100%;

//       height: 28px;
//     }


//     .pcc-ups-parent-stem::before {
//       content: "";

//       position: absolute;

//       top: 0;

//       left:
//         calc((100% / 14) * 9);

//       width:
//         var(--wire-size);

//       height: 28px;

//       transform:
//         translateX(-50%);

//       background:
//         var(--wire);
//     }


//     /* =====================================================
//        CENTERED UPS SUBNETWORK

//        We position the whole four-unit network under
//        the UPS parent instead of stretching it across
//        the complete PCC switchboard.
//     ===================================================== */

//     .pcc-ups-network {
//       position: absolute;

//       top: 110px;

//       left:
//         calc((100% / 14) * 9);

//       width: 700px;

//       max-width: calc(100% - 24px);

//       transform:
//         translateX(-50%);
//     }


//     .pcc-ups-distribution {
//       position: relative;

//       width: 100%;

//       height: 28px;
//     }


//     /*
//        Four columns:

//        first = 1/8
//        last  = 7/8
//     */

//     .pcc-ups-bus {
//       position: absolute;

//       top: 0;

//       left:
//         calc(100% / (var(--ups-count) * 2));

//       right:
//         calc(100% / (var(--ups-count) * 2));

//       height:
//         var(--wire-size);

//       background:
//         var(--wire);
//     }


//     .pcc-ups-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--ups-count),
//           minmax(0, 1fr)
//         );

//       pointer-events: none;
//     }


//     .pcc-ups-line {
//       position: relative;
//     }


//     .pcc-ups-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width:
//         var(--wire-size);

//       transform:
//         translateX(-50%);

//       background:
//         var(--wire);
//     }


//     /* =====================================================
//        UPS UNIT GRID
//     ===================================================== */

//     .pcc-ups-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--ups-count),
//           minmax(0, 1fr)
//         );

//       gap: 0;
//     }


//     .pcc-ups-unit-wrap {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     .pcc-ups-unit-wrap::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 5px;
//       height: 5px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /* =====================================================
//        UPS CARD
//     ===================================================== */

//     .pcc-ups-unit {
//       position: relative;

//       width: 155px;
//       min-width: 155px;
//       max-width: 155px;
//       height: 108px;

//       margin: 0;

//       padding:
//         9px 10px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       overflow: hidden;

//       border:
//         1px solid #2d729d;

//       border-radius: 5px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #143d63,
//           #103354
//         );

//       cursor: pointer;

//       transition:
//         border-color .14s ease,
//         box-shadow .14s ease;
//     }


//     .pcc-ups-unit:hover,
//     .pcc-ups-unit:focus-visible {
//       transform: none;

//       outline: none;

//       border-color: #58b8ce;

//       box-shadow:
//         0 5px 14px
//         rgba(10, 44, 66, .15);
//     }


//     .pcc-ups-unit > svg {
//       color: #71d0e2;
//     }


//     .pcc-ups-unit > strong {
//       margin-top: 3px;

//       color: #ffffff;

//       font-size: 11px;
//       font-weight: 700;
//     }


//     .pcc-ups-unit > span {
//       color: #a9c4d5;

//       font-size: 7.5px;
//     }


//     /* =====================================================
//        UPS HOVER READINGS
//     ===================================================== */

//     .pcc-ups-readings {
//       position: absolute;

//       inset: 0;

//       z-index: 20;

//       padding:
//         7px 9px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       overflow: hidden;

//       background:
//         linear-gradient(
//           145deg,
//           #123f5d,
//           #0c304a
//         );

//       opacity: 0;

//       visibility: hidden;

//       pointer-events: none;

//       transition:
//         opacity .13s ease,
//         visibility .13s ease;
//     }


//     .pcc-ups-unit:hover
//     .pcc-ups-readings,

//     .pcc-ups-unit:focus-visible
//     .pcc-ups-readings {
//       opacity: 1;

//       visibility: visible;
//     }


//     .pcc-ups-readings-title {
//       height: 15px;
//       min-height: 15px;

//       margin-bottom: 2px;

//       color: #73d0e1;

//       font-size: 6px;
//       font-weight: 800;

//       line-height: 15px;

//       text-align: left;

//       letter-spacing: .08em;
//     }


//     .pcc-ups-readings-grid {
//       min-height: 0;

//       flex: 1;

//       display: flex;
//       flex-direction: column;

//       gap: 2px;

//       overflow-x: hidden;
//       overflow-y: auto;

//       padding-right: 2px;

//       scrollbar-width: thin;
//     }


//     .pcc-ups-reading {
//       min-height: 14px;

//       display: grid;

//       grid-template-columns:
//         minmax(0, 1fr)
//         minmax(42px, auto);

//       align-items: center;

//       column-gap: 5px;
//     }


//     .pcc-ups-reading span {
//       min-width: 0;

//       overflow: hidden;

//       color: #a5bdc9;

//       font-size: 6px;

//       text-align: left;

//       text-overflow: ellipsis;

//       white-space: nowrap;
//     }


//     .pcc-ups-reading strong {
//       min-width: 0;

//       margin: 0;

//       overflow: hidden;

//       color: #ffffff;

//       font-size: 6.5px;
//       font-weight: 700;

//       text-align: right;

//       text-overflow: ellipsis;

//       white-space: nowrap;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .pcc-overview-network {
//         width:
//           ${panelNetworkWidth}px;

//         min-width:
//           ${panelNetworkWidth}px;
//       }


//       .pcc-panel-card {
//         height: 142px;
//       }


//       .pcc-switchboard {
//         min-width: 1260px;
//       }


//       .pcc-lineup {
//         grid-template-columns:
//           repeat(
//             var(--pcc-count),
//             minmax(90px, 1fr)
//           );
//       }


//       .pcc-cell {
//         height: 126px;
//       }


//       .pcc-ups-network {
//         width: 760px;
//       }


//       .pcc-ups-unit {
//         width: 170px;
//         min-width: 170px;
//         max-width: 170px;
//         height: 112px;
//       }
//     }


//     /* =====================================================
//        NORMAL LAPTOP
//     ===================================================== */

//     @media (
//       min-width: 1101px
//     ) and (
//       max-width: 1499px
//     ) {

//       .pcc-panel-card {
//         height: 136px;
//       }


//       .pcc-switchboard {
//         min-width: 1120px;
//       }


//       .pcc-ups-network {
//         width: 700px;
//       }


//       .pcc-ups-unit {
//         width: 155px;
//         min-width: 155px;
//         max-width: 155px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP / TABLET
//     ===================================================== */

//     @media (max-width: 1100px) {

//       .pcc-view {
//         padding-left: 18px;
//         padding-right: 18px;
//       }


//       .pcc-overview-network {
//         width:
//           ${panelNetworkWidth}px;

//         min-width:
//           ${panelNetworkWidth}px;
//       }


//       .pcc-panel-card {
//         height: 132px;
//       }


//       .pcc-switchboard {
//         width: 1120px;
//         min-width: 1120px;
//       }


//       .pcc-ups-network {
//         width: 700px;
//       }
//     }
//   `;


//   /* =====================================================
//      DIRECTION ICON
//   ===================================================== */

//   const DirectionIcon = ({
//     direction,
//   }) => {
//     if (direction === "incoming") {
//       return (
//         <ArrowDown
//           size={15}
//           strokeWidth={1.8}
//         />
//       );
//     }


//     if (direction === "outgoing") {
//       return (
//         <ArrowUp
//           size={15}
//           strokeWidth={1.8}
//         />
//       );
//     }


//     return (
//       <ArrowLeftRight
//         size={16}
//         strokeWidth={1.8}
//       />
//     );
//   };


//   /* =====================================================
//      CIRCUIT READINGS
//   ===================================================== */

//   const getCircuitReadings = (
//     circuit,
//     data = {}
//   ) => {
//     return getPreview(
//       {
//         ...circuit,

//         type:
//           circuit.type ||
//           (
//             circuit.direction ===
//             "coupler"
//               ? "coupler"
//               : "pcc-circuit"
//           ),
//       },

//       {
//         ...data,

//         status:
//           data?.status ||
//           "LIVE",
//       }
//     );
//   };


//   /* =====================================================
//      UPS UNITS
//   ===================================================== */

//   const upsUnitTemplates = [
//     {
//       id: "ups-30-1",
//       name: "30kVA-1",
//       label: "30 kVA",
//       type: "ups",
//     },

//     {
//       id: "ups-30-2",
//       name: "30kVA-2",
//       label: "30 kVA",
//       type: "ups",
//     },

//     {
//       id: "ups-10-1",
//       name: "10kVA-1",
//       label: "10 kVA",
//       type: "ups",
//     },

//     {
//       id: "ups-10-2",
//       name: "10kVA-2",
//       label: "10 kVA",
//       type: "ups",
//     },
//   ];



//   /* =====================================================
//      INTERNAL PCC VIEW
//   ===================================================== */

//   if (selectedPanel) {
//     const panelCircuits =
//       Array.isArray(
//         selectedPanel.circuits
//       )
//         ? selectedPanel.circuits
//         : [];

//     /*
//        Explicit UPS configuration is important:

//        - upsUnits: [] means this PCC intentionally has NO UPS.
//        - missing upsUnits means legacy/reference topology, where
//          PCC1/PCC2 may use the original four UPS units.
//     */
//     const hasUpsConfiguration =
//       Array.isArray(
//         selectedPanel.upsUnits
//       );

//     const configuredUpsUnits =
//       hasUpsConfiguration
//         ? selectedPanel.upsUnits
//         : [];

//     const units =
//       hasUpsConfiguration
//         ? upsUnitTemplates.filter(
//             (unit) =>
//               configuredUpsUnits.includes(
//                 unit.id
//               )
//           )
//         : (
//             selectedPanel.id === "pcc-1" ||
//             selectedPanel.id === "pcc-2"
//           )
//         ? upsUnitTemplates
//         : [];

//     const hasUps =
//       units.length > 0;

//     /*
//        UPS supply must come from the actual configured
//        Utility 1 and Utility 2 cells in this PCC lineup.
//     */
//     const utility1Circuit =
//       panelCircuits.find(
//         (circuit) =>
//           circuit.id.endsWith(
//             "-utility1"
//           )
//       );

//     const utility2Circuit =
//       panelCircuits.find(
//         (circuit) =>
//           circuit.id.endsWith(
//             "-utility2"
//           )
//       );

//     const utility1Index =
//       utility1Circuit
//         ? panelCircuits.findIndex(
//             (circuit) =>
//               circuit.id ===
//               utility1Circuit.id
//           )
//         : -1;

//     const utility2Index =
//       utility2Circuit
//         ? panelCircuits.findIndex(
//             (circuit) =>
//               circuit.id ===
//               utility2Circuit.id
//           )
//         : -1;

//     const utilityIndexes =
//       [
//         utility1Index,
//         utility2Index,
//       ].filter(
//         (index) =>
//           index >= 0
//       );

//     const hasUtilitySupply =
//       utilityIndexes.length > 0;

//     const pccCircuitCount =
//       Math.max(
//         panelCircuits.length,
//         1
//       );

//     const utilityCenters =
//       utilityIndexes.map(
//         (index) =>
//           (
//             (
//               index +
//               0.5
//             ) /
//             pccCircuitCount
//           ) *
//           100
//       );

//     const utilityLeft =
//       utilityCenters.length > 0
//         ? Math.min(
//             ...utilityCenters
//           )
//         : 50;

//     const utilityRight =
//       utilityCenters.length > 0
//         ? Math.max(
//             ...utilityCenters
//           )
//         : 50;

//     const utilityMidpoint =
//       (
//         utilityLeft +
//         utilityRight
//       ) /
//       2;


//     return (
//       <div className="pcc-view">
//         <style>
//           {pccStyles}
//         </style>


//         <div className="pcc-internal">

//           {/* ===============================================
//               HEADER
//           ================================================ */}

//           <div className="pcc-internal-head">

//             <button
//               type="button"
//               onClick={() =>
//                 setSelectedPanelId(
//                   null
//                 )
//               }
//             >
//               <ArrowLeft
//                 size={15}
//               />

//               PCC Main
//             </button>


//             <div>

//               <span>
//                 POWER CONTROL CENTRE
//               </span>


//               <h2>
//                 {selectedPanel.name}
//               </h2>


//               <p>
//                 {
//                   pccOverviewLabels[
//                     selectedPanel.id
//                   ] ||
//                   selectedPanel.label
//                 }
//               </p>

//             </div>

//           </div>


//           {/* ===============================================
//               SWITCHBOARD + UPS

//               They are inside the same width container
//               so the Utility flow lines remain aligned.
//           ================================================ */}

//           <div className="pcc-switchboard-scroll">

//             <div
//               className="pcc-switchboard"
//             >

//               {/* ===========================================
//                   PCC LINEUP
//               ============================================ */}

//               {panelCircuits.length ===
//                 0 &&
//               !hasUps && (
//                 <div className="pcc-empty-panel">
//                   <strong>
//                     Internal topology not configured
//                   </strong>

//                   This PCC panel is available in the
//                   project, but no verified internal
//                   circuit layout is defined for it.
//                 </div>
//               )}

//               {panelCircuits.length >
//                 0 && (
//                 <div
//                   className="pcc-lineup"
//                   style={{
//                     "--pcc-count":
//                       panelCircuits.length,
//                   }}
//                 >

//                   {panelCircuits.map(
//                     (circuit) => {

//                     const data =
//                       getPccDemoTelemetry(
//                         circuit
//                       );


//                     const readings =
//                       getCircuitReadings(
//                         circuit,
//                         data
//                       );


//                     const status =
//                       String(
//                         data?.status ||
//                         "LIVE"
//                       ).toUpperCase();


//                     const isOff =
//                       status ===
//                       "OFF";


//                     return (
//                       <button
//                         type="button"

//                         className={
//                           `pcc-cell pcc-cell--${circuit.direction}`
//                         }

//                         key={
//                           circuit.id
//                         }

//                         onClick={() =>
//                           onOpenEquipment?.({
//                             ...circuit,

//                             type:
//                               circuit.type ||
//                               (
//                                 circuit.direction ===
//                                 "coupler"
//                                   ? "coupler"
//                                   : "pcc-circuit"
//                               ),

//                             telemetry:
//                               data,
//                           })
//                         }
//                       >

//                         {/* NORMAL CONTENT */}

//                         <DirectionIcon
//                           direction={
//                             circuit.direction
//                           }
//                         />


//                         <small>
//                           {
//                             circuit.direction ===
//                             "coupler"
//                               ? "B/C"
//                               : circuit.direction
//                                   .toUpperCase()
//                           }
//                         </small>


//                         <strong
//                           title={
//                             circuit.name
//                           }
//                         >
//                           {
//                             circuit.name
//                           }
//                         </strong>


//                         <em>
//                           ●{" "}
//                           {
//                             isOff
//                               ? "OFF"
//                               : "LIVE"
//                           }
//                         </em>


//                         {/* =================================
//                             HOVER READINGS
//                         ================================== */}

//                         {readings.length >
//                           0 && (

//                           <div className="pcc-cell-readings">

//                             <div className="pcc-cell-readings-title">
//                               LIVE READINGS
//                             </div>


//                             <div className="pcc-cell-readings-grid">

//                               {readings
//                                 .slice(
//                                   0,
//                                   5
//                                 )
//                                 .map(
//                                   (
//                                     [
//                                       label,
//                                       value,
//                                     ],
//                                     index
//                                   ) => (

//                                     <div
//                                       className="pcc-cell-reading"

//                                       key={
//                                         `${label}-${index}`
//                                       }
//                                     >

//                                       <span
//                                         title={
//                                           label
//                                         }
//                                       >
//                                         {
//                                           label
//                                         }
//                                       </span>


//                                       <strong
//                                         title={
//                                           String(
//                                             value
//                                           )
//                                         }
//                                       >
//                                         {
//                                           value
//                                         }
//                                       </strong>

//                                     </div>

//                                   )
//                                 )}

//                             </div>

//                           </div>
//                         )}

//                       </button>
//                     );
//                     }
//                   )}

//                 </div>
//               )}


//               {/* ===========================================
//                   PCC1 / PCC2 ONLY

//                   UTILITY 1 + UTILITY 2 → UPS
//               ============================================ */}

//               {hasUps && (
//                 <>

//                   {/* =======================================
//                       UTILITY SUPPLY CONNECTION
//                   ======================================== */}

//                   {hasUtilitySupply && (
//                     <div className="pcc-utility-supply">
//                       {utilityCenters.map(
//                         (center, index) => (
//                           <div
//                             className="pcc-utility-drop"
//                             key={`utility-drop-${index}`}
//                             style={{
//                               left:
//                                 `${center}%`,
//                             }}
//                           />
//                         )
//                       )}

//                       {utilityCenters.length > 1 && (
//                         <div
//                           className="pcc-utility-horizontal"
//                           style={{
//                             left:
//                               `${utilityLeft}%`,
//                             width:
//                               `${
//                                 utilityRight -
//                                 utilityLeft
//                               }%`,
//                           }}
//                         />
//                       )}

//                       <div
//                         className="pcc-utility-to-ups"
//                         style={{
//                           left:
//                             `${utilityMidpoint}%`,
//                         }}
//                       />
//                     </div>
//                   )}


//                   {/* =======================================
//                       UPS AREA
//                   ======================================== */}

//                   <div className="pcc-ups-area">

//                     {/* UPS PARENT */}

//                     <div className="pcc-ups-parent-row">

//                       <div className="pcc-ups-parent">

//                         <BatteryCharging
//                           size={21}
//                           strokeWidth={1.8}
//                         />


//                         <h3>
//                           UPS
//                         </h3>


//                         <span>
//                           SUPPLY
//                         </span>

//                       </div>

//                     </div>


//                     {/* UPS → DISTRIBUTION */}

//                     <div className="pcc-ups-parent-stem" />


//                     {/* =====================================
//                         FOUR UPS UNITS
//                     ====================================== */}

//                     <div
//                       className="pcc-ups-network"
//                       style={{
//                         "--ups-count":
//                           units.length,
//                       }}
//                     >

//                       <div className="pcc-ups-distribution">

//                         <div className="pcc-ups-bus" />


//                         <div className="pcc-ups-lines">

//                           {units.map(
//                             (unit) => (

//                               <div
//                                 className="pcc-ups-line"

//                                 key={
//                                   `line-${unit.id}`
//                                 }
//                               />

//                             )
//                           )}

//                         </div>

//                       </div>


//                       <div className="pcc-ups-grid">

//                         {units.map(
//                           (unit) => {

//                             const data =
//                               demoTelemetry[
//                                 unit.id
//                               ] || {};


//                             const readings =
//                               getPreview(
//                                 unit,
//                                 data
//                               );


//                             return (
//                               <div
//                                 className="pcc-ups-unit-wrap"

//                                 key={
//                                   unit.id
//                                 }
//                               >

//                                 <button
//                                   type="button"

//                                   className="pcc-ups-unit"

//                                   onClick={() =>
//                                     onOpenEquipment?.({
//                                       ...unit,

//                                       telemetry:
//                                         data,
//                                     })
//                                   }
//                                 >

//                                   {/* NORMAL UPS CARD */}

//                                   <BatteryCharging
//                                     size={18}
//                                     strokeWidth={1.8}
//                                   />


//                                   <strong>
//                                     {
//                                       unit.name
//                                     }
//                                   </strong>


//                                   <span>
//                                     {
//                                       unit.label
//                                     }
//                                   </span>


//                                   {/* =======================
//                                       UPS HOVER READINGS
//                                   ======================== */}

//                                   {readings.length >
//                                     0 && (

//                                     <div className="pcc-ups-readings">

//                                       <div className="pcc-ups-readings-title">
//                                         LIVE READINGS
//                                       </div>


//                                       <div className="pcc-ups-readings-grid">

//                                         {readings.map(
//                                           (
//                                             [
//                                               label,
//                                               value,
//                                             ],
//                                             index
//                                           ) => (

//                                             <div
//                                               className="pcc-ups-reading"

//                                               key={
//                                                 `${label}-${index}`
//                                               }
//                                             >

//                                               <span
//                                                 title={
//                                                   label
//                                                 }
//                                               >
//                                                 {
//                                                   label
//                                                 }
//                                               </span>


//                                               <strong
//                                                 title={
//                                                   String(
//                                                     value
//                                                   )
//                                                 }
//                                               >
//                                                 {
//                                                   value
//                                                 }
//                                               </strong>

//                                             </div>

//                                           )
//                                         )}

//                                       </div>

//                                     </div>
//                                   )}

//                                 </button>

//                               </div>
//                             );
//                           }
//                         )}

//                       </div>

//                     </div>

//                   </div>

//                 </>
//               )}

//             </div>

//           </div>

//         </div>
//       </div>
//     );
//   }


//   /* =====================================================
//      PCC MAIN OVERVIEW
//   ===================================================== */

//   return (
//     <div className="pcc-view">
//       <style>
//         {pccStyles}
//       </style>


//       {/* ===============================================
//           PCC PARENT
//       ================================================ */}

//       <div className="pcc-parent">

//         <Cpu
//           size={26}
//           strokeWidth={1.8}
//         />


//         <span>
//           MAIN LT DISTRIBUTION
//         </span>


//         <h2>
//           PCC
//         </h2>


//         <p>
//           MAIN LT DISTRIBUTION
//         </p>

//       </div>


//       {/* ===============================================
//           PCC → PANEL BUS
//       ================================================ */}

//       <div className="pcc-stem" />


//       <div className="pcc-overview-network">

//         <div className="pcc-distribution">

//           <div
//             className={`pcc-bus ${
//               panelCount === 1
//                 ? "pcc-bus--single"
//                 : ""
//             }`}
//           />


//           <div className="pcc-overview-lines">

//             {panels.map(
//               (panel) => (

//                 <div
//                   className="pcc-overview-line"

//                   key={
//                     `line-${panel.id}`
//                   }
//                 />

//               )
//             )}

//           </div>

//         </div>


//         {/* =============================================
//             PCC PANEL EQUIPMENT
//         ============================================== */}

//         <div className="pcc-grid">

//           {panels.map(
//             (panel) => (

//               <div
//                 className="pcc-branch"

//                 key={
//                   panel.id
//                 }
//               >

//                 <button
//                   type="button"

//                   className="pcc-panel-card"

//                   onClick={() =>
//                     setSelectedPanelId(
//                       panel.id
//                     )
//                   }
//                 >

//                   <Cpu
//                     size={24}
//                     strokeWidth={1.8}
//                   />


//                   <span>
//                     POWER CONTROL CENTRE
//                   </span>


//                   <h3>
//                     {
//                       panel.name
//                     }
//                   </h3>


//                   <p>
//                     {
//                       pccOverviewLabels[
//                         panel.id
//                       ] ||
//                       panel.label
//                     }
//                   </p>


//                   <strong>
//                     ● LIVE
//                   </strong>

//                 </button>

//               </div>

//             )
//           )}

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    7. RAISING MAIN VIEW
// ========================================================= */

// function RaisingMainView({
//   topology,
//   onOpenEquipment,
// }) {
//   const equipment =
//     Array.isArray(topology?.equipment)
//       ? topology.equipment
//       : [];

//   const groups = [
//     {
//       title: "WING A",
//       items: equipment.slice(0, 2),
//     },
//     {
//       title: "WING B",
//       items: equipment.slice(2, 4),
//     },
//     {
//       title: "CONFIGURED",
//       items: equipment.slice(4),
//     },
//   ].filter(
//     (group) => group.items.length > 0
//   );

//   const groupCount =
//     groups.length;

//   const wingCardWidth = 210;
//   const rmCardWidth = 190;

//   const groupWidth =
//     Math.max(
//       470,
//       ...groups.map(
//         (group) =>
//           group.items.length * rmCardWidth
//       )
//     );

//   const networkWidth =
//     Math.max(
//       900,
//       groupCount * groupWidth
//     );

//   const raisingStyles = `
//     /* =====================================================
//        RAISING MAIN ROOT
//     ===================================================== */

//     .raising-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       --wing-card-width: ${wingCardWidth}px;
//       --wing-card-height: 118px;

//       --rm-card-width: ${rmCardWidth}px;
//       --rm-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 3vw, 44px)
//         26px;

//       box-sizing: border-box;

//       overflow-x: auto;
//     }


//     /* =====================================================
//        COMPLETE TOPOLOGY

//        Keep one common width for:
//        parent
//        wing bus
//        wing cards
//        RM buses
//        RM cards
//     ===================================================== */

//     .raising-network {
//       width: ${networkWidth}px;
//       min-width: ${networkWidth}px;

//       margin: 0 auto;
//     }


//     /* =====================================================
//        MAIN RAISING MAIN PARENT
//     ===================================================== */

//     .raising-parent {
//       width: 100%;

//       display: flex;

//       justify-content: center;
//       align-items: center;
//     }


//     .raising-parent > .simple-card {
//       width: 420px;
//       min-width: 420px;
//       max-width: 420px;

//       height: 112px;
//       min-height: 112px;
//       max-height: 112px;

//       margin: 0;
//     }


//     /* =====================================================
//        PARENT → WING BUS
//     ===================================================== */

//     .raising-main-stem {
//       width: var(--wire-size);
//       height: 34px;

//       margin: 0 auto;

//       background: var(--wire);
//     }


//     /* =====================================================
//        WING DISTRIBUTION

//                     RAISING MAIN
//                          │
//                ─────────┼─────────
//                │                  │
//             WING A             WING B
//     ===================================================== */

//     .raising-wing-distribution {
//       position: relative;

//       width: 100%;
//       height: 34px;
//     }


//     /*
//        Group columns are generated from the configured
//        equipment without inventing extra wing mappings.
//     */

//     .raising-wing-bus {
//       position: absolute;

//       top: 0;

//       left: ${groupWidth / 2}px;
//       right: ${groupWidth / 2}px;

//       height: var(--wire-size);

//       background: var(--wire);
//     }


//     .raising-wing-bus--single {
//       left: 50%;
//       right: auto;
//       width: var(--wire-size);
//       transform: translateX(-50%);
//     }


//     .raising-wing-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             groupCount,
//             1
//           )},
//           ${groupWidth}px
//         );

//       pointer-events: none;
//     }


//     .raising-wing-line {
//       position: relative;
//     }


//     .raising-wing-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       transform: translateX(-50%);

//       background: var(--wire);
//     }


//     /* =====================================================
//        WING CARDS

//        Exact same 2-column grid as connector lines.
//     ===================================================== */

//     .raising-wing-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             groupCount,
//             1
//           )},
//           ${groupWidth}px
//         );

//       gap: 0;

//       align-items: start;
//     }


//     .raising-wing {
//       position: relative;

//       min-width: 0;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//     }


//     .raising-wing-card-wrap {
//       position: relative;

//       width: 100%;

//       display: flex;

//       justify-content: center;
//       align-items: flex-start;
//     }


//     .raising-wing-card-wrap::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     .raising-wing-card-wrap > .simple-card {
//       width: var(--wing-card-width);
//       min-width: var(--wing-card-width);
//       max-width: var(--wing-card-width);

//       height: var(--wing-card-height);
//       min-height: var(--wing-card-height);
//       max-height: var(--wing-card-height);

//       margin: 0;
//     }


//     /* =====================================================
//        WING → RAISING MAIN BUS
//     ===================================================== */

//     .raising-child-stem {
//       width: var(--wire-size);
//       height: 32px;

//       margin: 0 auto;

//       background: var(--wire);
//     }


//     /*
//        This network belongs to one wing.

//                   WING
//                     │
//               ──────┼──────
//               │           │
//              RM1         RM2
//     */

//     .raising-child-network {
//       width:
//         calc(
//           var(--rm-count) *
//           var(--rm-card-width)
//         );

//       min-width:
//         calc(
//           var(--rm-count) *
//           var(--rm-card-width)
//         );

//       margin: 0 auto;
//     }


//     .raising-child-distribution {
//       position: relative;

//       width: 100%;
//       height: 32px;
//     }


//     .raising-child-bus {
//       position: absolute;

//       top: 0;

//       left:
//         calc(
//           var(--rm-card-width) / 2
//         );

//       right:
//         calc(
//           var(--rm-card-width) / 2
//         );

//       height: var(--wire-size);

//       background: var(--wire);
//     }


//     .raising-child-bus--single {
//       left: 50%;
//       right: auto;
//       width: var(--wire-size);
//       transform: translateX(-50%);
//     }


//     .raising-child-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--rm-count),
//           var(--rm-card-width)
//         );

//       pointer-events: none;
//     }


//     .raising-child-line {
//       position: relative;
//     }


//     .raising-child-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       transform: translateX(-50%);

//       background: var(--wire);
//     }


//     /* =====================================================
//        RAISING MAIN EQUIPMENT CARDS
//     ===================================================== */

//     .raising-children {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--rm-count),
//           var(--rm-card-width)
//         );

//       gap: 0;

//       align-items: start;
//     }


//     .raising-child {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       justify-content: center;
//       align-items: flex-start;
//     }


//     .raising-child::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /*
//        Control the RM card from this topology.

//        This keeps all four cards equal and prevents
//        connector/card misalignment.
//     */

//     .raising-child > .simple-card {
//       width: var(--rm-card-width);
//       min-width: var(--rm-card-width);
//       max-width: var(--rm-card-width);

//       height: var(--rm-card-height);
//       min-height: var(--rm-card-height);
//       max-height: var(--rm-card-height);

//       margin: 0;
//     }


//     /* =====================================================
//        IMPORTANT

//        Cards must NEVER translate on hover because
//        the connector must remain visually attached.
//     ===================================================== */

//     .raising-view .simple-card:hover,
//     .raising-view .simple-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .raising-view {
//         --wing-card-height: 122px;

//         --rm-card-height: 142px;
//       }


//       .raising-network {
//         width: ${networkWidth}px;
//         min-width: ${networkWidth}px;
//       }


//       .raising-parent > .simple-card {
//         width: 440px;
//         min-width: 440px;
//         max-width: 440px;

//         height: 116px;
//         min-height: 116px;
//         max-height: 116px;
//       }


//       .raising-child-network {
//         width: 500px;
//       }
//     }


//     /* =====================================================
//        NORMAL LAPTOP
//     ===================================================== */

//     @media (
//       min-width: 1101px
//     ) and (
//       max-width: 1499px
//     ) {

//       .raising-view {
//         --wing-card-height: 114px;

//         --rm-card-height: 136px;
//       }


//       .raising-network {
//         width: ${networkWidth}px;
//         min-width: ${networkWidth}px;
//       }


//       .raising-parent > .simple-card {
//         width: 400px;
//         min-width: 400px;
//         max-width: 400px;

//         height: 108px;
//         min-height: 108px;
//         max-height: 108px;
//       }


//       .raising-child-network {
//         width: 450px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP / TABLET

//        Preserve topology instead of squeezing cards.
//        The parent FlowDetail container can scroll.
//     ===================================================== */

//     @media (max-width: 1100px) {

//       .raising-view {
//         --wing-card-height: 110px;

//         --rm-card-height: 132px;

//         padding-left: 18px;
//         padding-right: 18px;
//       }


//       .raising-network {
//         width: ${networkWidth}px;
//         min-width: ${networkWidth}px;
//       }


//       .raising-parent > .simple-card {
//         width: 380px;
//         min-width: 380px;
//         max-width: 380px;

//         height: 106px;
//         min-height: 106px;
//         max-height: 106px;
//       }


//     }
//   `;


//   /* =====================================================
//      WING RENDERER
//   ===================================================== */

//   const renderWing = (
//     title,
//     items
//   ) => (
//     <section
//       className="raising-wing"
//       key={`raising-group-${title}`}
//     >

//       {/* WING CARD */}

//       <div className="raising-wing-card-wrap">
//         <SimpleFlowCard
//           title={title}
//           subtitle="Vertical Distribution"
//           icon={Building2}
//         />
//       </div>


//       {/* WING → RM BUS */}

//       <div className="raising-child-stem" />


//       <div
//         className="raising-child-network"
//         style={{
//           "--rm-count": Math.max(
//             items.length,
//             1
//           ),
//         }}
//       >

//         <div className="raising-child-distribution">

//           <div
//             className={`raising-child-bus ${
//               items.length === 1
//                 ? "raising-child-bus--single"
//                 : ""
//             }`}
//           />


//           <div className="raising-child-lines">

//             {items.map(
//               (item) => (
//                 <div
//                   className="raising-child-line"
//                   key={`line-${item.id}`}
//                 />
//               )
//             )}

//           </div>

//         </div>


//         {/* RM CARDS */}

//         <div className="raising-children">

//           {items.map(
//             (item) => (
//               <div
//                 className="raising-child"
//                 key={item.id}
//               >

//                 <SimpleFlowCard
//                   title={
//                     item.name.toUpperCase()
//                   }
//                   subtitle={`${title} Vertical Bus`}
//                   icon={Bolt}
//                   equipment={item}
//                   onClick={() =>
//                     onOpenEquipment?.({
//                       ...item,
//                       telemetry:
//                         {
//                           ...demoTelemetry[
//                             item.id
//                           ],
//                           capacity:
//                             item.label?.replace(
//                               " GENSET",
//                               ""
//                             ),
//                         },
//                     })
//                   }
//                 />

//               </div>
//             )
//           )}

//         </div>

//       </div>

//     </section>
//   );


//   /* =====================================================
//      VIEW
//   ===================================================== */

//   return (
//     <div className="raising-view">
//       <style>
//         {raisingStyles}
//       </style>


//       <div className="raising-network">

//         {/* ===============================================
//             RAISING MAIN PARENT
//         ================================================ */}

//         <div className="raising-parent">

//           <SimpleFlowCard
//             title="RAISING MAIN"
//             subtitle="Main Vertical Distribution"
//             icon={Bolt}
//           />

//         </div>


//         {/* ===============================================
//             PARENT → WING A / WING B
//         ================================================ */}

//         <div className="raising-main-stem" />


//         <div className="raising-wing-distribution">

//           <div
//             className={`raising-wing-bus ${
//               groupCount === 1
//                 ? "raising-wing-bus--single"
//                 : ""
//             }`}
//           />


//           <div className="raising-wing-lines">

//             {groups.map(
//               (group) => (
//                 <div
//                   className="raising-wing-line"
//                   key={`group-line-${group.title}`}
//                 />
//               )
//             )}

//           </div>

//         </div>


//         {/* ===============================================
//             WING A / WING B
//         ================================================ */}

//         <div className="raising-wing-grid">

//           {groups.map(
//             (group) =>
//               renderWing(
//                 group.title,
//                 group.items
//               )
//           )}

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    8. WING VIEW
// ========================================================= */

// function WingView({
//   topology,
//   onOpenEquipment,
// }) {
//   const wings =
//     Array.isArray(topology?.equipment)
//       ? topology.equipment
//       : [];

//   const wingCount =
//     wings.length;

//   const wingCardWidth = 220;
//   const wingNetworkWidth =
//     Math.max(
//       760,
//       wingCount * wingCardWidth
//     );

//   const wingStyles = `
//     /* =====================================================
//        WING / BUILDING ROOT
//     ===================================================== */

//     .wing-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       --wing-card-width: ${wingCardWidth}px;
//       --wing-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(16px, 2vh, 26px)
//         clamp(20px, 3vw, 46px)
//         28px;

//       box-sizing: border-box;

//       overflow-x: auto;
//     }


//     /* =====================================================
//        COMPLETE NETWORK

//        One common coordinate system is used for:
//        - parent
//        - horizontal bus
//        - vertical branches
//        - Wing A / Wing B cards
//     ===================================================== */

//     .wing-network {
//       width: ${wingNetworkWidth}px;
//       min-width: ${wingNetworkWidth}px;

//       margin: 0 auto;
//     }


//     /* =====================================================
//        BUILDINGS PARENT
//     ===================================================== */

//     .wing-parent {
//       position: relative;

//       width: 420px;
//       min-width: 420px;
//       max-width: 420px;

//       height: 110px;
//       min-height: 110px;

//       margin: 0 auto;

//       padding: 13px 20px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 2px;

//       overflow: hidden;

//       border: 1px solid #367fb1;
//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #153e72 0%,
//           #102f61 55%,
//           #0d2853 100%
//         );

//       box-shadow:
//         0 7px 18px
//         rgba(11, 44, 75, .13);

//       z-index: 5;
//     }


//     .wing-parent::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #3eb9d0;
//     }


//     .wing-parent svg {
//       flex: 0 0 auto;

//       margin-bottom: 2px;

//       color: #72d1e2;
//     }


//     .wing-parent span {
//       color: #8ec5ea;

//       font-size: 8px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .16em;
//     }


//     .wing-parent h2 {
//       margin: 5px 0 2px;

//       color: #ffffff;

//       font-size: 19px;
//       font-weight: 700;

//       line-height: 1.15;
//     }


//     .wing-parent p {
//       margin: 0;

//       color: #b3cada;

//       font-size: 9px;
//       font-weight: 550;
//     }


//     /* =====================================================
//        BUILDINGS → DISTRIBUTION BUS STEM
//     ===================================================== */

//     .wing-main-stem {
//       width: var(--wire-size);
//       height: 36px;

//       margin: 0 auto;

//       background: var(--wire);
//     }


//     /* =====================================================
//        WING DISTRIBUTION

//                     BUILDINGS
//                         │
//                         │
//                  ───────┼───────
//                  │              │
//               WING A         WING B

//        The bus starts at the first wing center and
//        ends at the final wing center.
//     ===================================================== */

//     .wing-distribution {
//       position: relative;

//       width: 100%;

//       height: 38px;
//       min-height: 38px;
//     }


//     .wing-bus {
//       position: absolute;

//       top: 0;

//       left: ${wingCardWidth / 2}px;
//       right: ${wingCardWidth / 2}px;

//       height: var(--wire-size);

//       background: var(--wire);
//     }


//     .wing-bus--single {
//       left: 50%;
//       right: auto;
//       width: var(--wire-size);
//       transform: translateX(-50%);
//     }


//     /* =====================================================
//        EXACT VERTICAL BRANCHES

//        Uses the SAME two-column grid as the cards.
//     ===================================================== */

//     .wing-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             wingCount,
//             1
//           )},
//           ${wingCardWidth}px
//         );

//       pointer-events: none;
//     }


//     .wing-line {
//       position: relative;
//     }


//     .wing-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       transform: translateX(-50%);

//       background: var(--wire);
//     }


//     /* =====================================================
//        WING CARD GRID

//        IMPORTANT:
//        Same exact columns as .wing-lines.
//        No arbitrary 120px gap.
//     ===================================================== */

//     .wing-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             wingCount,
//             1
//           )},
//           ${wingCardWidth}px
//         );

//       gap: 0;

//       align-items: start;
//     }


//     .wing-branch {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        CARD / FLOW CONNECTION POINT
//     ===================================================== */

//     .wing-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /* =====================================================
//        WING EQUIPMENT CARDS

//        Topology controls the exact dimensions instead
//        of allowing EquipmentCard to change geometry.
//     ===================================================== */

//     .wing-branch > .eq-card {
//       width: var(--wing-card-width);
//       min-width: var(--wing-card-width);
//       max-width: var(--wing-card-width);

//       height: var(--wing-card-height);
//       min-height: var(--wing-card-height);
//       max-height: var(--wing-card-height);

//       margin: 0;
//     }


//     /* =====================================================
//        NO MOVEMENT ON HOVER

//        Flow connector must stay attached.
//     ===================================================== */

//     .wing-view .eq-card:hover,
//     .wing-view .eq-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .wing-view {
//         --wing-card-height: 142px;
//       }


//       .wing-network {
//         width: ${wingNetworkWidth}px;
//         min-width: ${wingNetworkWidth}px;
//       }


//       .wing-parent {
//         width: 440px;
//         min-width: 440px;
//         max-width: 440px;

//         height: 114px;
//         min-height: 114px;
//       }
//     }


//     /* =====================================================
//        NORMAL LAPTOP
//     ===================================================== */

//     @media (
//       min-width: 1101px
//     ) and (
//       max-width: 1499px
//     ) {

//       .wing-view {
//         --wing-card-height: 136px;
//       }


//       .wing-network {
//         width: ${wingNetworkWidth}px;
//         min-width: ${wingNetworkWidth}px;
//       }


//       .wing-parent {
//         width: 400px;
//         min-width: 400px;
//         max-width: 400px;

//         height: 106px;
//         min-height: 106px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP / TABLET

//        Keep topology intact rather than squeezing
//        cards and disconnecting flow lines.
//     ===================================================== */

//     @media (max-width: 1100px) {

//       .wing-view {
//         --wing-card-height: 132px;

//         padding-left: 18px;
//         padding-right: 18px;
//       }


//       .wing-network {
//         width: ${wingNetworkWidth}px;
//         min-width: ${wingNetworkWidth}px;
//       }


//       .wing-parent {
//         width: 380px;
//         min-width: 380px;
//         max-width: 380px;

//         height: 104px;
//         min-height: 104px;
//       }
//     }
//   `;


//   return (
//     <div className="wing-view">
//       <style>
//         {wingStyles}
//       </style>


//       <div className="wing-network">

//         {/* ===============================================
//             BUILDINGS PARENT
//         ================================================ */}

//         <div className="wing-parent">

//           <Building2
//             size={26}
//             strokeWidth={1.8}
//           />


//           <span>
//             MAIN BUILDING DISTRIBUTION
//           </span>


//           <h2>
//             BUILDINGS
//           </h2>


//           <p>
//             WING EQUIPMENT
//           </p>

//         </div>


//         {/* ===============================================
//             BUILDINGS → WING BUS
//         ================================================ */}

//         <div className="wing-main-stem" />


//         {/* ===============================================
//             HORIZONTAL BUS + TWO EXACT BRANCHES
//         ================================================ */}

//         <div className="wing-distribution">

//           <div
//             className={`wing-bus ${
//               wingCount === 1
//                 ? "wing-bus--single"
//                 : ""
//             }`}
//           />


//           <div className="wing-lines">

//             {wings.map(
//               (item) => (
//                 <div
//                   className="wing-line"
//                   key={`line-${item.id}`}
//                 />
//               )
//             )}

//           </div>

//         </div>


//         {/* ===============================================
//             CONFIGURED WINGS
//         ================================================ */}

//         <div className="wing-grid">

//           {wings.map(
//             (item) => (

//               <div
//                 className="wing-branch"
//                 key={item.id}
//               >

//                 <EquipmentCard
//                   equipment={item}
//                   onOpen={onOpenEquipment}
//                 />

//               </div>

//             )
//           )}

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    9. DG VIEW
// ========================================================= */

// function DGView({
//   topology,
//   onOpenEquipment,
// }) {
//   const generators =
//     Array.isArray(topology?.equipment)
//       ? topology.equipment
//       : [];

//   const dgCount =
//     generators.length;

//   const dgCardWidth = 150;
//   const dgNetworkWidth =
//     Math.max(
//       760,
//       dgCount * dgCardWidth
//     );

//   const dgStyles = `
//     /* =====================================================
//        DG ROOT
//     ===================================================== */

//     .dg-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       --dg-card-width: ${dgCardWidth}px;
//       --dg-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(16px, 2vw, 34px)
//         26px;

//       box-sizing: border-box;

//       overflow-x: auto;
//     }


//     /* =====================================================
//        COMPLETE DG NETWORK

//        One common coordinate system controls:
//        - Parent
//        - Main stem
//        - Horizontal bus
//        - DG branches
//        - DG cards
//     ===================================================== */

//     .dg-network {
//       width: ${dgNetworkWidth}px;
//       min-width: ${dgNetworkWidth}px;

//       margin: 0 auto;
//     }


//     /* =====================================================
//        DG PARENT
//     ===================================================== */

//     .dg-parent {
//       width: 100%;

//       display: flex;

//       align-items: center;
//       justify-content: center;
//     }


//     .dg-parent > .simple-card {
//       width: 500px;
//       min-width: 500px;
//       max-width: 500px;

//       height: 112px;
//       min-height: 112px;
//       max-height: 112px;

//       margin: 0;
//     }


//     /* =====================================================
//        PARENT → DG BUS
//     ===================================================== */

//     .dg-main-stem {
//       width: var(--wire-size);
//       height: 38px;

//       margin: 0 auto;

//       background: var(--wire);
//     }


//     /* =====================================================
//        DG DISTRIBUTION

//                          DG PLANT
//                             │
//                             │
//           ──────────────────┼──────────────────
//           │    │    │    │    │    │    │
//          DG1  DG2  DG3  ...
//     ===================================================== */

//     .dg-distribution {
//       position: relative;

//       width: 100%;

//       height: 38px;
//       min-height: 38px;
//     }


//     /* =====================================================
//        HORIZONTAL DG BUS

//        The bus starts and ends exactly at the first
//        and last DG branch centers.
//     ===================================================== */

//     .dg-bus {
//       position: absolute;

//       top: 0;

//       left:
//         ${dgCardWidth / 2}px;

//       right:
//         ${dgCardWidth / 2}px;

//       height: var(--wire-size);

//       background: var(--wire);
//     }


//     .dg-bus--single {
//       left: 50%;
//       right: auto;
//       width: var(--wire-size);
//       transform: translateX(-50%);
//     }


//     /* =====================================================
//        EXACT VERTICAL BRANCHES

//        IMPORTANT:
//        This grid is identical to .dg-grid below.
//     ===================================================== */

//     .dg-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             dgCount,
//             1
//           )},
//           ${dgCardWidth}px
//         );

//       pointer-events: none;
//     }


//     .dg-line {
//       position: relative;
//     }


//     .dg-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       transform:
//         translateX(-50%);

//       background: var(--wire);
//     }


//     /* =====================================================
//        DG CARD GRID

//        Same exact columns as connector branches.

//        No gap is used in the geometry.
//        Spacing comes naturally from the column width.
//     ===================================================== */

//     .dg-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             dgCount,
//             1
//           )},
//           ${dgCardWidth}px
//         );

//       gap: 0;

//       align-items: start;
//     }


//     .dg-branch {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        CONNECTOR / CARD JUNCTION
//     ===================================================== */

//     .dg-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /* =====================================================
//        DG CARDS
//     ===================================================== */

//     .dg-branch > .simple-card {
//       width: var(--dg-card-width);
//       min-width: var(--dg-card-width);
//       max-width: var(--dg-card-width);

//       height: var(--dg-card-height);
//       min-height: var(--dg-card-height);
//       max-height: var(--dg-card-height);

//       margin: 0;

//       padding: 10px 8px;

//       box-sizing: border-box;
//     }


//     .dg-branch .simple-card h3 {
//       margin: 2px 0;

//       font-size: 14px;
//       line-height: 17px;

//       white-space: normal;

//       text-align: center;
//     }


//     /* =====================================================
//        NO CARD MOVEMENT

//        Connector must remain attached while hovering.
//     ===================================================== */

//     .dg-view .simple-card:hover,
//     .dg-view .simple-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .dg-view {
//         --dg-card-height: 142px;
//       }


//       .dg-network {
//         width: ${dgNetworkWidth}px;
//         min-width: ${dgNetworkWidth}px;
//       }


//       .dg-parent > .simple-card {
//         width: 540px;
//         min-width: 540px;
//         max-width: 540px;

//         height: 116px;
//         min-height: 116px;
//         max-height: 116px;
//       }


//       .dg-branch .simple-card h3 {
//         font-size: 15px;
//       }
//     }


//     /* =====================================================
//        NORMAL LAPTOP
//     ===================================================== */

//     @media (
//       min-width: 1101px
//     ) and (
//       max-width: 1499px
//     ) {

//       .dg-view {
//         --dg-card-height: 136px;
//       }


//       .dg-network {
//         width: ${dgNetworkWidth}px;
//         min-width: ${dgNetworkWidth}px;
//       }


//       .dg-parent > .simple-card {
//         width: 480px;
//         min-width: 480px;
//         max-width: 480px;

//         height: 108px;
//         min-height: 108px;
//         max-height: 108px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP / TABLET

//        DG cards should not be crushed into a small
//        viewport.

//        Preserve the engineering topology and allow
//        horizontal scrolling.
//     ===================================================== */

//     @media (max-width: 1100px) {

//       .dg-view {
//         --dg-card-height: 132px;

//         padding-left: 16px;
//         padding-right: 16px;
//       }


//       .dg-network {
//         width: ${dgNetworkWidth}px;
//         min-width: ${dgNetworkWidth}px;
//       }


//       .dg-parent > .simple-card {
//         width: 450px;
//         min-width: 450px;
//         max-width: 450px;

//         height: 106px;
//         min-height: 106px;
//         max-height: 106px;
//       }


//       .dg-branch .simple-card h3 {
//         font-size: 13px;
//       }
//     }
//   `;


//   return (
//     <div className="dg-view">
//       <style>
//         {dgStyles}
//       </style>


//       <div className="dg-network">

//         {/* ===============================================
//             DIESEL GENERATOR PLANT
//         ================================================ */}

//         <div className="dg-parent">

//           <SimpleFlowCard
//             title="DIESEL GENERATOR PLANT"
//             eyebrow="EMERGENCY POWER PANEL"
//             icon={CirclePower}
//             live={false}
//           />

//         </div>


//         {/* ===============================================
//             PARENT → MAIN DG BUS
//         ================================================ */}

//         <div className="dg-main-stem" />


//         {/* ===============================================
//             HORIZONTAL BUS + EXACT BRANCHES
//         ================================================ */}

//         <div className="dg-distribution">

//           <div
//             className={`dg-bus ${
//               dgCount === 1
//                 ? "dg-bus--single"
//                 : ""
//             }`}
//           />


//           <div className="dg-lines">

//             {generators.map(
//               (item) => (

//                 <div
//                   className="dg-line"
//                   key={`line-${item.id}`}
//                 />

//               )
//             )}

//           </div>

//         </div>


//         {/* ===============================================
//             DG EQUIPMENT
//         ================================================ */}

//         <div className="dg-grid">

//           {generators.map(
//             (item) => (

//               <div
//                 className="dg-branch"
//                 key={item.id}
//               >

//                 <SimpleFlowCard
//                   title={item.name}
//                   eyebrow="DIESEL GENERATOR"
//                   subtitle={item.label}
//                   icon={CirclePower}
//                   equipment={item}

//                   onClick={() =>
//                     onOpenEquipment?.({
//                       ...item,

//                       telemetry:
//                         demoTelemetry[
//                           item.id
//                         ],
//                     })
//                   }
//                 />

//               </div>

//             )
//           )}

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    10. HVAC VIEW
// ========================================================= */

// function HVACView({
//   topology,
//   onOpenEquipment,
// }) {
//   const equipment =
//     topology?.equipment || [];

//   const hvacCount =
//     equipment.length;

//   const hvacCardWidth = 190;
//   const hvacGap = 34;
//   const hvacNetworkWidth =
//     hvacCount > 0
//       ? Math.max(
//           560,
//           hvacCount * hvacCardWidth +
//             Math.max(
//               hvacCount - 1,
//               0
//             ) *
//               hvacGap
//         )
//       : 560;

//   const hvacStyles = `
//     .hvac-view {
//       width:min(560px,92%);min-height:270px;margin:auto;padding:34px;
//       display:flex;flex-direction:column;align-items:center;justify-content:center;
//       text-align:center;border:1px solid #b9c9d5;border-radius:8px;background:#eef3f6;
//     }
//     .hvac-view__icon {
//       width:58px;height:58px;margin-bottom:14px;display:grid;place-items:center;
//       border:1px solid #397da9;border-radius:7px;color:#d7efff;background:#173f75;
//     }
//     .hvac-view span { color:#6f8799;font-size:8px;font-weight:800;letter-spacing:.16em; }
//     .hvac-view h2 { margin:7px 0 5px;color:#17324a;font-size:21px; }
//     .hvac-view p { margin:0;color:#708291;font-size:11px; }
//     .hvac-view strong {
//       margin-top:18px;padding:7px 12px;border:1px solid #c6d3dc;border-radius:5px;
//       color:#5f7484;background:#fff;font-size:9px;letter-spacing:.1em;
//     }
//     .hvac-flow-view {
//       --wire:#397da9;
//       --wire-size:2px;
//       --hvac-card-width:190px;
//       width:100%;
//       min-width:0;
//       min-height:100%;
//       margin:0;
//       padding:clamp(14px,2vh,24px) clamp(18px,3vw,42px) 28px;
//       box-sizing:border-box;
//       overflow-x:auto;
//     }
//     .hvac-network {
//       width:var(--hvac-network-width);
//       min-width:var(--hvac-network-width);
//       margin:0 auto;
//     }
//     .hvac-parent {
//       display:flex;
//       justify-content:center;
//     }
//     .hvac-parent > .simple-card {
//       width:420px;
//       min-width:420px;
//       max-width:420px;
//       height:110px;
//       min-height:110px;
//       max-height:110px;
//       margin:0;
//     }
//     .hvac-main-stem {
//       width:var(--wire-size);
//       height:36px;
//       margin:0 auto;
//       background:var(--wire);
//     }
//     .hvac-distribution {
//       position:relative;
//       width:100%;
//       height:36px;
//       min-height:36px;
//     }
//     .hvac-bus {
//       position:absolute;
//       top:0;
//       left:calc(100% / (var(--hvac-count) * 2));
//       right:calc(100% / (var(--hvac-count) * 2));
//       height:var(--wire-size);
//       background:var(--wire);
//     }
//     .hvac-bus--single {
//       left:50%;
//       right:50%;
//     }
//     .hvac-lines,
//     .hvac-grid {
//       display:grid;
//       grid-template-columns:repeat(var(--hvac-count),var(--hvac-card-width));
//       justify-content:space-between;
//       gap:0;
//     }
//     .hvac-lines {
//       position:absolute;
//       inset:0;
//       pointer-events:none;
//     }
//     .hvac-line,
//     .hvac-branch {
//       position:relative;
//       display:flex;
//       justify-content:center;
//     }
//     .hvac-line::before {
//       content:"";
//       position:absolute;
//       top:0;
//       bottom:0;
//       left:50%;
//       width:var(--wire-size);
//       transform:translateX(-50%);
//       background:var(--wire);
//     }
//     .hvac-branch::before {
//       content:"";
//       position:absolute;
//       top:0;
//       left:50%;
//       width:6px;
//       height:6px;
//       box-sizing:border-box;
//       border:1px solid var(--wire);
//       border-radius:50%;
//       background:#fff;
//       transform:translate(-50%,-50%);
//       z-index:8;
//     }
//     .hvac-branch > .eq-card {
//       width:var(--hvac-card-width);
//       min-width:var(--hvac-card-width);
//       max-width:var(--hvac-card-width);
//       height:136px;
//       min-height:136px;
//       max-height:136px;
//       margin:0;
//     }
//     .hvac-flow-view .eq-card:hover,
//     .hvac-flow-view .eq-card:focus-visible {
//       transform:none;
//     }
//   `;

//   if (hvacCount > 0) {
//     return (
//       <div className="hvac-flow-view">
//         <style>{hvacStyles}</style>

//         <div
//           className="hvac-network"
//           style={{
//             "--hvac-count": hvacCount,
//             "--hvac-network-width": `${hvacNetworkWidth}px`,
//           }}
//         >
//           <div className="hvac-parent">
//             <SimpleFlowCard
//               title="HVAC COOLING PLANT"
//               subtitle="Configured HVAC Equipment"
//               eyebrow="MECHANICAL SERVICES"
//               icon={Fan}
//             />
//           </div>

//           <div className="hvac-main-stem" />

//           <div className="hvac-distribution">
//             <div
//               className={`hvac-bus ${
//                 hvacCount === 1
//                   ? "hvac-bus--single"
//                   : ""
//               }`}
//             />

//             <div className="hvac-lines">
//               {equipment.map((item) => (
//                 <div
//                   className="hvac-line"
//                   key={`line-${item.id}`}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="hvac-grid">
//             {equipment.map((item) => (
//               <div
//                 className="hvac-branch"
//                 key={item.id}
//               >
//                 <EquipmentCard
//                   equipment={item}
//                   onOpen={onOpenEquipment}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="hvac-view">
//       <style>{hvacStyles}</style>
//       <span className="hvac-view__icon"><Fan size={30} /></span>
//       <span>MECHANICAL SERVICES</span>
//       <h2>HVAC COOLING PLANT</h2>
//       <p>No internal HVAC equipment is configured for this flow.</p>
//       <strong>0 EQUIPMENT</strong>
//     </div>
//   );
// }

// /* =========================================================
//    11. WATER MANAGEMENT VIEW
// ========================================================= */

// function WaterView({
//   topology,
//   onOpenEquipment,
// }) {
//   const [showTanks, setShowTanks] =
//     useState(false);

//   const main =
//     topology.equipment.find(
//       (item) =>
//         item.type === "water-main"
//     );

//   const stp =
//     topology.equipment.find(
//       (item) =>
//         item.type === "stp"
//     );

//   const wtp =
//     topology.equipment.find(
//       (item) =>
//         item.type === "wtp"
//     );

//   const tanks =
//     topology.equipment.filter(
//       (item) =>
//         item.type === "tank"
//     );

//   const waterBranches = [
//     stp
//       ? {
//           id: "stp",
//           kind: "stp",
//           equipment: stp,
//         }
//       : null,
//     wtp
//       ? {
//           id: "wtp",
//           kind: "wtp",
//           equipment: wtp,
//         }
//       : null,
//     tanks.length > 0
//       ? {
//           id: "water-tanks",
//           kind: "tanks",
//         }
//       : null,
//   ].filter(Boolean);

//   const waterBranchCount =
//     waterBranches.length;

//   const tankCount =
//     tanks.length;

//   const waterNetworkWidth =
//     Math.max(
//       520,
//       waterBranchCount * 240
//     );

//   const tankNetworkWidth =
//     Math.max(
//       520,
//       tankCount * 220
//     );


//   const waterStyles = `
//     /* =====================================================
//        WATER MANAGEMENT ROOT
//     ===================================================== */

//     .water-view {
//       --wire: #249bb5;
//       --wire-size: 2px;

//       --water-card-width: 220px;
//       --water-card-height: 136px;

//       --tank-card-width: 190px;
//       --tank-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 3vw, 42px)
//         28px;

//       box-sizing: border-box;

//       overflow-x: auto;
//     }


//     /* =====================================================
//        COMPLETE MAIN NETWORK
//     ===================================================== */

//     .water-network {
//       width: var(--water-network-width);
//       min-width: var(--water-network-width);

//       margin: 0 auto;
//     }


//     /* =====================================================
//        WATER MANAGEMENT PARENT
//     ===================================================== */

//     .water-parent {
//       width: 100%;

//       display: flex;

//       align-items: center;
//       justify-content: center;
//     }


//     .water-parent > .simple-card {
//       width: 440px;
//       min-width: 440px;
//       max-width: 440px;

//       height: 112px;
//       min-height: 112px;
//       max-height: 112px;

//       margin: 0;
//     }


//     /* =====================================================
//        PARENT → MAIN WATER BUS
//     ===================================================== */

//     .water-main-stem {
//       width: var(--wire-size);
//       height: 38px;

//       margin: 0 auto;

//       background: var(--wire);
//     }


//     /* =====================================================
//        MAIN WATER DISTRIBUTION

//                     WATER MANAGEMENT
//                            │
//                            │
//              ──────────────┼──────────────
//              │             │             │
//             STP           WTP       WATER TANKS
//     ===================================================== */

//     .water-distribution {
//       position: relative;

//       width: 100%;

//       height: 38px;
//       min-height: 38px;
//     }


//     /* =====================================================
//        MAIN HORIZONTAL BUS

//        Three equal columns:

//        STP center         = 1/6
//        WTP center         = 3/6
//        Water Tanks center = 5/6

//        Bus starts at STP and ends at Water Tanks.
//     ===================================================== */

//     .water-bus {
//       position: absolute;

//       top: 0;

//       left:
//         calc(
//           100% / (var(--water-branch-count) * 2)
//         );

//       right:
//         calc(
//           100% / (var(--water-branch-count) * 2)
//         );

//       height: var(--wire-size);

//       background: var(--wire);
//     }

//     .water-bus--single {
//       left: 50%;
//       right: 50%;
//     }


//     /* =====================================================
//        EXACT THREE VERTICAL BRANCHES
//     ===================================================== */

//     .water-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--water-branch-count),
//           minmax(0, 1fr)
//         );

//       pointer-events: none;
//     }


//     .water-line {
//       position: relative;
//     }


//     .water-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       transform:
//         translateX(-50%);

//       background: var(--wire);
//     }


//     /* =====================================================
//        MAIN WATER CARD GRID

//        Same exact 3-column geometry as .water-lines.
//     ===================================================== */

//     .water-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--water-branch-count),
//           minmax(0, 1fr)
//         );

//       gap: 0;

//       align-items: start;
//     }


//     .water-branch {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        CARD CONNECTION POINT
//     ===================================================== */

//     .water-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /* =====================================================
//        STP / WTP CARDS
//     ===================================================== */

//     .water-branch > .simple-card {
//       width: var(--water-card-width);
//       min-width: var(--water-card-width);
//       max-width: var(--water-card-width);

//       height: var(--water-card-height);
//       min-height: var(--water-card-height);
//       max-height: var(--water-card-height);

//       margin: 0;

//       box-sizing: border-box;
//     }


//     /* =====================================================
//        WATER TANK GROUP CARD
//     ===================================================== */

//     .water-tank-group {
//       position: relative;

//       width: var(--water-card-width);
//       min-width: var(--water-card-width);
//       max-width: var(--water-card-width);

//       height: var(--water-card-height);
//       min-height: var(--water-card-height);
//       max-height: var(--water-card-height);

//       margin: 0;

//       padding: 12px 14px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       overflow: hidden;

//       border:
//         1px solid #327ba2;

//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #174766,
//           #123b58 55%,
//           #0e3049
//         );

//       box-shadow:
//         0 5px 14px
//         rgba(10, 39, 59, .13);

//       cursor: pointer;

//       transition:
//         border-color .15s ease,
//         box-shadow .15s ease;
//     }


//     .water-tank-group::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #3eb9d0;
//     }


//     .water-tank-group:hover,
//     .water-tank-group:focus-visible {
//       transform: none;

//       outline: none;

//       border-color: #59bad0;

//       box-shadow:
//         0 7px 18px
//         rgba(10, 42, 64, .18);
//     }


//     .water-tank-group svg {
//       margin: 3px 0;

//       color: #71d0e2;
//     }


//     .water-tank-group span {
//       color: #87bddd;

//       font-size: 7px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .12em;
//     }


//     .water-tank-group h3 {
//       margin: 3px 0 1px;

//       color: #ffffff;

//       font-size: 15px;
//       font-weight: 700;

//       line-height: 18px;
//     }


//     .water-tank-group p {
//       margin: 0;

//       color: #b5cede;

//       font-size: 8px;

//       line-height: 12px;
//     }


//     .water-tank-group strong {
//       margin-top: 5px;

//       color: #73d0e1;

//       font-size: 7px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .05em;
//     }


//     /* =====================================================
//        DON'T MOVE FLOW CARDS ON HOVER
//     ===================================================== */

//     .water-view .simple-card:hover,
//     .water-view .simple-card:focus-visible,
//     .water-view .eq-card:hover,
//     .water-view .eq-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        WATER TANK SUBVIEW HEADER
//     ===================================================== */

//     .water-tanks-head {
//       width: min(100%, 1040px);

//       margin:
//         0 auto
//         20px;

//       display: flex;

//       align-items: center;

//       gap: 14px;
//     }


//     .water-tanks-head button {
//       height: 36px;

//       padding:
//         0 12px;

//       display: inline-flex;

//       align-items: center;

//       gap: 6px;

//       border:
//         1px solid #426780;

//       border-radius: 5px;

//       color: #dce9f2;

//       background: #173b56;

//       cursor: pointer;

//       transition:
//         background .15s ease,
//         border-color .15s ease;
//     }


//     .water-tanks-head button:hover,
//     .water-tanks-head button:focus-visible {
//       outline: none;

//       background: #19445f;

//       border-color: #4da8bd;
//     }


//     .water-tanks-head h2 {
//       margin: 0;

//       color: #17354b;

//       font-size: 21px;
//       font-weight: 700;
//     }


//     /* =====================================================
//        COMPLETE TANK NETWORK
//     ===================================================== */

//     .water-tanks-network {
//       width: var(--tank-network-width);
//       min-width: var(--tank-network-width);

//       margin: 0 auto;
//     }


//     /* =====================================================
//        WATER TANKS PARENT
//     ===================================================== */

//     .water-tanks-parent {
//       width: 100%;

//       display: flex;

//       justify-content: center;
//       align-items: center;
//     }


//     .water-tanks-parent > .simple-card {
//       width: 420px;
//       min-width: 420px;
//       max-width: 420px;

//       height: 110px;
//       min-height: 110px;
//       max-height: 110px;

//       margin: 0;
//     }


//     /* =====================================================
//        WATER TANK PARENT → BUS
//     ===================================================== */

//     .water-tanks-main-stem {
//       width: var(--wire-size);
//       height: 36px;

//       margin: 0 auto;

//       background: var(--wire);
//     }


//     /* =====================================================
//        FOUR TANK DISTRIBUTION

//                        WATER TANKS
//                             │
//                             │
//              ───────────────┼───────────────
//              │        │          │         │
//            TANK1    TANK2      TANK3     TANK4
//     ===================================================== */

//     .water-tanks-distribution {
//       position: relative;

//       width: 100%;

//       height: 36px;
//       min-height: 36px;
//     }


//     /*
//        Four equal columns.

//        Tank 1 center = 1/8
//        Tank 4 center = 7/8
//     */

//     .water-tanks-bus {
//       position: absolute;

//       top: 0;

//       left:
//         calc(
//           100% / (var(--tank-count) * 2)
//         );

//       right:
//         calc(
//           100% / (var(--tank-count) * 2)
//         );

//       height: var(--wire-size);

//       background: var(--wire);
//     }

//     .water-tanks-bus--single {
//       left: 50%;
//       right: 50%;
//     }


//     /* =====================================================
//        EXACT FOUR TANK BRANCHES
//     ===================================================== */

//     .water-tank-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--tank-count),
//           minmax(0, 1fr)
//         );

//       pointer-events: none;
//     }


//     .water-tank-line {
//       position: relative;
//     }


//     .water-tank-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       transform:
//         translateX(-50%);

//       background: var(--wire);
//     }


//     /* =====================================================
//        TANK CARD GRID

//        Same exact 4-column geometry as tank lines.
//     ===================================================== */

//     .water-tanks-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--tank-count),
//           minmax(0, 1fr)
//         );

//       gap: 0;

//       align-items: start;
//     }


//     .water-tank {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        TANK CARD CONNECTION
//     ===================================================== */

//     .water-tank::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /* =====================================================
//        TANK EQUIPMENT CARDS
//     ===================================================== */

//     .water-tank > .eq-card {
//       width: var(--tank-card-width);
//       min-width: var(--tank-card-width);
//       max-width: var(--tank-card-width);

//       height: var(--tank-card-height);
//       min-height: var(--tank-card-height);
//       max-height: var(--tank-card-height);

//       margin: 0;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .water-view {
//         --water-card-width: 230px;
//         --water-card-height: 142px;

//         --tank-card-width: 200px;
//         --tank-card-height: 142px;
//       }


//       .water-network,
//       .water-tanks-network {
//         max-width: none;
//       }


//       .water-parent > .simple-card {
//         width: 460px;
//         min-width: 460px;
//         max-width: 460px;

//         height: 116px;
//         min-height: 116px;
//         max-height: 116px;
//       }


//       .water-tanks-parent > .simple-card {
//         width: 440px;
//         min-width: 440px;
//         max-width: 440px;

//         height: 114px;
//         min-height: 114px;
//         max-height: 114px;
//       }
//     }


//     /* =====================================================
//        NORMAL LAPTOP
//     ===================================================== */

//     @media (
//       min-width: 1101px
//     ) and (
//       max-width: 1499px
//     ) {

//       .water-view {
//         --water-card-width: 210px;
//         --water-card-height: 136px;

//         --tank-card-width: 190px;
//         --tank-card-height: 136px;
//       }


//       .water-network,
//       .water-tanks-network {
//         max-width: none;
//       }


//       .water-parent > .simple-card {
//         width: 420px;
//         min-width: 420px;
//         max-width: 420px;

//         height: 108px;
//         min-height: 108px;
//         max-height: 108px;
//       }


//       .water-tanks-parent > .simple-card {
//         width: 400px;
//         min-width: 400px;
//         max-width: 400px;

//         height: 108px;
//         min-height: 108px;
//         max-height: 108px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP / TABLET

//        Keep the topology intact.
//        Horizontal scrolling is preferable to
//        compressing the cards/flow lines.
//     ===================================================== */

//     @media (max-width: 1100px) {

//       .water-view {
//         --water-card-width: 195px;
//         --water-card-height: 132px;

//         --tank-card-width: 182px;
//         --tank-card-height: 132px;

//         padding-left: 18px;
//         padding-right: 18px;
//       }


//       .water-network,
//       .water-tanks-network {
//         width: var(--water-network-width);
//         min-width: var(--water-network-width);
//       }

//       .water-tanks-network {
//         width: var(--tank-network-width);
//         min-width: var(--tank-network-width);
//       }


//       .water-parent > .simple-card {
//         width: 390px;
//         min-width: 390px;
//         max-width: 390px;

//         height: 106px;
//         min-height: 106px;
//         max-height: 106px;
//       }


//       .water-tanks-parent > .simple-card {
//         width: 380px;
//         min-width: 380px;
//         max-width: 380px;

//         height: 106px;
//         min-height: 106px;
//         max-height: 106px;
//       }
//     }
//   `;


//   /* =====================================================
//      WATER TANK SUBVIEW
//   ===================================================== */

//   if (showTanks) {
//     return (
//       <div className="water-view">
//         <style>
//           {waterStyles}
//         </style>


//         {/* ===============================================
//             HEADER
//         ================================================ */}

//         <div className="water-tanks-head">

//           <button
//             type="button"
//             onClick={() =>
//               setShowTanks(false)
//             }
//           >
//             <ArrowLeft size={15} />

//             Water Management
//           </button>


//           <h2>
//             WATER TANKS
//           </h2>

//         </div>


//         <div
//           className="water-tanks-network"
//           style={{
//             "--tank-count": tankCount,
//             "--tank-network-width": `${tankNetworkWidth}px`,
//           }}
//         >

//           {/* =============================================
//               WATER TANKS PARENT
//           ============================================== */}

//           <div className="water-tanks-parent">

//             <SimpleFlowCard
//               title="WATER TANKS"
//               subtitle="Tank Level Monitoring"
//               eyebrow="STORAGE DISTRIBUTION"
//               icon={Droplets}
//             />

//           </div>


//           {/* =============================================
//               PARENT → TANK BUS
//           ============================================== */}

//           <div className="water-tanks-main-stem" />


//           {/* =============================================
//               FOUR-WAY DISTRIBUTION
//           ============================================== */}

//           <div className="water-tanks-distribution">

//             <div
//               className={`water-tanks-bus ${
//                 tankCount === 1
//                   ? "water-tanks-bus--single"
//                   : ""
//               }`}
//             />


//             <div className="water-tank-lines">

//               {tanks.map(
//                 (tank) => (

//                   <div
//                     className="water-tank-line"
//                     key={`line-${tank.id}`}
//                   />

//                 )
//               )}

//             </div>

//           </div>


//           {/* =============================================
//               TANK 1 / 2 / 3 / 4
//           ============================================== */}

//           <div className="water-tanks-grid">

//             {tanks.map(
//               (tank) => (

//                 <div
//                   className="water-tank"
//                   key={tank.id}
//                 >

//                   <EquipmentCard
//                     equipment={tank}
//                     onOpen={
//                       onOpenEquipment
//                     }
//                   />

//                 </div>

//               )
//             )}

//           </div>

//         </div>

//       </div>
//     );
//   }


//   /* =====================================================
//      MAIN WATER MANAGEMENT VIEW
//   ===================================================== */

//   return (
//     <div className="water-view">
//       <style>
//         {waterStyles}
//       </style>


//       <div
//         className="water-network"
//         style={{
//           "--water-branch-count":
//             waterBranchCount,
//           "--water-network-width": `${waterNetworkWidth}px`,
//         }}
//       >

//         {/* ===============================================
//             CENTRAL WATER MANAGEMENT
//         ================================================ */}

//         <div className="water-parent">

//           <SimpleFlowCard
//             title="WATER MANAGEMENT"
//             subtitle="CENTRAL WATER MONITORING"
//             eyebrow="CENTRAL WATER SYSTEM"
//             icon={Droplets}
//             equipment={main}

//             onClick={
//               main
//                 ? () =>
//                     onOpenEquipment?.({
//                       ...main,

//                       telemetry:
//                         demoTelemetry[
//                           main.id
//                         ],
//                     })
//                 : undefined
//             }
//           />

//         </div>


//         {/* ===============================================
//             CENTRAL WATER → DISTRIBUTION
//         ================================================ */}

//         {waterBranchCount > 0 && (
//           <div className="water-main-stem" />
//         )}


//         {/* ===============================================
//             MAIN 3-WAY BUS
//         ================================================ */}

//         {waterBranchCount > 0 && (
//         <div className="water-distribution">

//           <div
//             className={`water-bus ${
//               waterBranchCount === 1
//                 ? "water-bus--single"
//                 : ""
//             }`}
//           />


//           <div className="water-lines">

//             {waterBranches.map(
//               (branch) => (
//                 <div
//                   className="water-line"
//                   key={`line-${branch.id}`}
//                 />
//               )
//             )}

//           </div>

//         </div>
//         )}


//         {/* ===============================================
//             STP / WTP / WATER TANKS
//         ================================================ */}

//         {waterBranchCount > 0 && (
//           <div className="water-grid">

//             {waterBranches.map(
//               (branch) => {
//                 if (
//                   branch.kind === "tanks"
//                 ) {
//                   return (
//                     <div
//                       className="water-branch"
//                       key={branch.id}
//                     >
//                       <button
//                         type="button"
//                         className="water-tank-group"
//                         onClick={() =>
//                           setShowTanks(true)
//                         }
//                       >
//                         <span>
//                           STORAGE DISTRIBUTION
//                         </span>

//                         <Droplets
//                           size={22}
//                           strokeWidth={1.8}
//                         />

//                         <h3>
//                           WATER TANKS
//                         </h3>

//                         <p>
//                           TANK LEVEL MONITORING
//                         </p>

//                         <strong>
//                           VIEW {tankCount} TANK{tankCount === 1 ? "" : "S"} →
//                         </strong>
//                       </button>
//                     </div>
//                   );
//                 }

//                 const item =
//                   branch.equipment;

//                 return (
//                   <div
//                     className="water-branch"
//                     key={branch.id}
//                   >
//                     <SimpleFlowCard
//                       title={
//                         branch.kind === "stp"
//                           ? "STP"
//                           : "WTP"
//                       }
//                       eyebrow={
//                         branch.kind === "stp"
//                           ? "SEWAGE TREATMENT PLANT"
//                           : "WATER TREATMENT PLANT"
//                       }
//                       subtitle={
//                         branch.kind === "stp"
//                           ? "Sewage Water Treatment"
//                           : "Water Treatment"
//                       }
//                       icon={Droplets}
//                       equipment={item}
//                       onClick={() =>
//                         onOpenEquipment?.({
//                           ...item,
//                           telemetry:
//                             demoTelemetry[
//                               item.id
//                             ],
//                         })
//                       }
//                     />
//                   </div>
//                 );
//               }
//             )}

//           </div>
//         )}

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    12. FIRE VIEW
// ========================================================= */
// function FireView({
//   topology,
//   onOpenEquipment,
// }) {
//   const equipment =
//     topology?.equipment || [];

//   const fireCount =
//     equipment.length;

//   const fireNetworkWidth =
//     Math.max(
//       520,
//       fireCount * 250
//     );

//   const fireStyles = `
//     /* =====================================================
//        FIRE ROOT
//     ===================================================== */

//     .fire-view {
//       --wire: #b55b66;
//       --wire-size: 2px;

//       --fire-card-width: 210px;
//       --fire-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 3vw, 42px)
//         28px;

//       box-sizing: border-box;

//       overflow-x: auto;
//     }


//     /* =====================================================
//        COMPLETE FIRE NETWORK

//        Parent, bus, branches and cards all share
//        the same coordinate system.
//     ===================================================== */

//     .fire-network {
//       width: var(--fire-network-width);
//       min-width: var(--fire-network-width);

//       margin: 0 auto;
//     }


//     /* =====================================================
//        FIRE PROTECTION PARENT
//     ===================================================== */

//     .fire-parent {
//       position: relative;

//       width: 430px;
//       min-width: 430px;
//       max-width: 430px;

//       height: 110px;
//       min-height: 110px;

//       margin: 0 auto;

//       padding: 13px 20px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 2px;

//       overflow: hidden;

//       border:
//         1px solid #a64f5d;

//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #663442 0%,
//           #572c39 55%,
//           #48232f 100%
//         );

//       box-shadow:
//         0 7px 18px
//         rgba(74, 30, 40, .14);

//       z-index: 5;
//     }


//     .fire-parent::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #cf6c78;
//     }


//     .fire-parent svg {
//       flex: 0 0 auto;

//       margin-bottom: 2px;

//       color: #f0a8b2;
//     }


//     .fire-parent span {
//       color: #efb8c0;

//       font-size: 8px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .16em;
//     }


//     .fire-parent h2 {
//       margin: 5px 0 2px;

//       color: #ffffff;

//       font-size: 19px;
//       font-weight: 700;

//       line-height: 1.15;

//       text-align: center;
//     }


//     .fire-parent p {
//       margin: 0;

//       color: #e3bdc3;

//       font-size: 9px;
//       font-weight: 550;

//       text-align: center;
//     }


//     /* =====================================================
//        FIRE PARENT → MAIN BUS
//     ===================================================== */

//     .fire-main-stem {
//       width: var(--wire-size);
//       height: 38px;

//       margin: 0 auto;

//       background: var(--wire);
//     }


//     /* =====================================================
//        FIRE DISTRIBUTION

//                   FIRE PROTECTION
//                         │
//                         │
//              ───────────┼───────────
//              │          │          │
//           ALARMS     FIGHTING     PUMP
//     ===================================================== */

//     .fire-distribution {
//       position: relative;

//       width: 100%;

//       height: 38px;
//       min-height: 38px;
//     }


//     /* =====================================================
//        HORIZONTAL BUS

//        Three equal columns:

//        first center  = 1/6
//        middle center = 3/6
//        last center   = 5/6

//        Bus begins at the first branch and terminates
//        at the third branch.
//     ===================================================== */

//     .fire-bus {
//       position: absolute;

//       top: 0;

//       left:
//         calc(
//           100% / (var(--fire-count) * 2)
//         );

//       right:
//         calc(
//           100% / (var(--fire-count) * 2)
//         );

//       height: var(--wire-size);

//       background: var(--wire);
//     }

//     .fire-bus--single {
//       left: 50%;
//       right: 50%;
//     }


//     /* =====================================================
//        EXACT THREE VERTICAL BRANCHES

//        Uses the same grid as the cards.
//     ===================================================== */

//     .fire-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--fire-count),
//           minmax(0, 1fr)
//         );

//       pointer-events: none;
//     }


//     .fire-line {
//       position: relative;
//     }


//     .fire-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       transform:
//         translateX(-50%);

//       background: var(--wire);
//     }


//     /* =====================================================
//        FIRE EQUIPMENT GRID

//        IMPORTANT:
//        Same three columns as .fire-lines.

//        No gap is used for connector geometry.
//     ===================================================== */

//     .fire-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--fire-count),
//           minmax(0, 1fr)
//         );

//       gap: 0;

//       align-items: start;
//     }


//     .fire-branch {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        FLOW → CARD CONNECTION POINT
//     ===================================================== */

//     .fire-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /* =====================================================
//        FIRE EQUIPMENT CARDS
//     ===================================================== */

//     .fire-branch > .eq-card {
//       width: var(--fire-card-width);
//       min-width: var(--fire-card-width);
//       max-width: var(--fire-card-width);

//       height: var(--fire-card-height);
//       min-height: var(--fire-card-height);
//       max-height: var(--fire-card-height);

//       margin: 0;

//       box-sizing: border-box;
//     }


//     /* =====================================================
//        FIRE CARD ACCENT

//        Keep operational colors inside EquipmentCard.
//        Only use a restrained fire-system accent here.
//     ===================================================== */

//     .fire-branch > .eq-card {
//       border-color:
//         rgba(
//           181,
//           91,
//           102,
//           .72
//         );
//     }


//     /* =====================================================
//        NO MOVEMENT ON HOVER

//        Critical for connector alignment.
//     ===================================================== */

//     .fire-view .eq-card:hover,
//     .fire-view .eq-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .fire-view {
//         --fire-card-width: 220px;
//         --fire-card-height: 142px;
//       }


//       .fire-network {
//         max-width: none;
//       }


//       .fire-parent {
//         width: 450px;
//         min-width: 450px;
//         max-width: 450px;

//         height: 114px;
//         min-height: 114px;
//       }
//     }


//     /* =====================================================
//        NORMAL LAPTOP
//     ===================================================== */

//     @media (
//       min-width: 1101px
//     ) and (
//       max-width: 1499px
//     ) {

//       .fire-view {
//         --fire-card-width: 200px;
//         --fire-card-height: 136px;
//       }


//       .fire-network {
//         max-width: none;
//       }


//       .fire-parent {
//         width: 420px;
//         min-width: 420px;
//         max-width: 420px;

//         height: 108px;
//         min-height: 108px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP / TABLET

//        Preserve the topology instead of squeezing
//        the three cards.
//     ===================================================== */

//     @media (max-width: 1100px) {

//       .fire-view {
//         --fire-card-width: 190px;
//         --fire-card-height: 132px;

//         padding-left: 18px;
//         padding-right: 18px;
//       }


//       .fire-network {
//         width: var(--fire-network-width);
//         min-width: var(--fire-network-width);
//       }


//       .fire-parent {
//         width: 390px;
//         min-width: 390px;
//         max-width: 390px;

//         height: 104px;
//         min-height: 104px;
//       }
//     }
//   `;


//   return (
//     <div className="fire-view">
//       <style>
//         {fireStyles}
//       </style>


//       <div
//         className="fire-network"
//         style={{
//           "--fire-count": fireCount,
//           "--fire-network-width": `${fireNetworkWidth}px`,
//         }}
//       >

//         {/* ===============================================
//             FIRE PROTECTION PARENT
//         ================================================ */}

//         <div className="fire-parent">

//           <Flame
//             size={26}
//             strokeWidth={1.8}
//           />


//           <span>
//             LIFE SAFETY
//           </span>


//           <h2>
//             FIRE PROTECTION SYSTEM
//           </h2>


//           <p>
//             DETECTION / PROTECTION / PUMP
//           </p>

//         </div>


//         {/* ===============================================
//             PARENT → MAIN FIRE BUS
//         ================================================ */}

//         {fireCount > 0 && (
//           <div className="fire-main-stem" />
//         )}


//         {/* ===============================================
//             HORIZONTAL BUS + THREE BRANCHES
//         ================================================ */}

//         {fireCount > 0 && (
//         <div className="fire-distribution">

//           <div
//             className={`fire-bus ${
//               fireCount === 1
//                 ? "fire-bus--single"
//                 : ""
//             }`}
//           />


//           <div className="fire-lines">

//             {equipment.map(
//               (item) => (

//                 <div
//                   className="fire-line"
//                   key={`line-${item.id}`}
//                 />

//               )
//             )}

//           </div>

//         </div>
//         )}


//         {/* ===============================================
//             FIRE ALARMS / FIRE FIGHTING / FIRE PUMP
//         ================================================ */}

//         {fireCount > 0 && (
//         <div className="fire-grid">

//           {equipment.map(
//             (item) => (

//               <div
//                 className="fire-branch"
//                 key={item.id}
//               >

//                 <EquipmentCard
//                   equipment={item}
//                   onOpen={
//                     onOpenEquipment
//                   }
//                 />

//               </div>

//             )
//           )}

//         </div>
//         )}

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    OPTIONAL UPS VIEW
//    UPS is not a top-level dashboard category, but this remains
//    isolated in case an existing config still routes to it.
// ========================================================= */

// function UPSView({ topology, onOpenEquipment }) {
//   const upsStyles = `
//     .ups-view {
//       --wire:#19b8cf;
//       width:100%;min-width:760px;min-height:100%;margin:0 auto;
//       display:flex;flex-direction:column;justify-content:center;
//     }
//     .ups-parent {
//       width:430px;min-height:100px;margin:0 auto;
//       display:flex;flex-direction:column;align-items:center;justify-content:center;
//       border:2px solid #2378b7;border-radius:7px;color:#fff;background:#102f6e;
//     }
//     .ups-parent h2 { margin:5px 0;font-size:18px; }
//     .ups-stem { width:2px;height:34px;margin:0 auto;background:var(--wire); }
//     .ups-grid {
//       position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));
//       gap:18px;padding-top:34px;
//     }
//     .ups-bus {
//       position:absolute;top:0;left:calc(50% / 4);right:calc(50% / 4);
//       height:2px;background:var(--wire);
//     }
//     .ups-branch { position:relative; }
//     .ups-branch::before {
//       content:"";position:absolute;left:50%;bottom:100%;width:2px;height:34px;
//       transform:translateX(-50%);background:var(--wire);
//     }
//     .ups-view .eq-card:hover { transform:none; }
//   `;

//   return (
//     <div className="ups-view">
//       <style>{upsStyles}</style>
//       <div className="ups-parent">
//         <BatteryCharging size={26} />
//         <h2>UPS SYSTEM</h2>
//         <span>UNINTERRUPTIBLE POWER SUPPLY</span>
//       </div>
//       <div className="ups-stem" />
//       <div className="ups-grid">
//         <div className="ups-bus" />
//         {topology.equipment.map((item) => (
//           <div className="ups-branch" key={item.id}>
//             <EquipmentCard equipment={item} onOpen={onOpenEquipment} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    RENDERER
//    Only routing lives here. No shared topology renderer.
// ========================================================= */

// function FlowRenderer({ topology, onOpenEquipment }) {
//   switch (topology.id) {
//     case "source":
//       return <SourceView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "feeder":
//       return <FeederView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "transformer":
//       return <TransformerView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "lt-kiosk":
//       return <LTKioskView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "busduct":
//       return <BusductView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "pcc":
//       return <PCCView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "raising-main":
//       return <RaisingMainView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "wing":
//       return <WingView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "dg":
//       return <DGView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "hvac":
//       return <HVACView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "wtp":
//       return <WaterView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "fire":
//       return <FireView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "ups":
//       return <UPSView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     default:
//       return null;
//   }
// }

// /* =========================================================
//    PAGE
// ========================================================= */

// function FlowDetail({
//   project,
//   flow,
//   onBack,
//   onOpenEquipment,
// }) {
//   const topology = getProjectTopology(
//     project,
//     flow?.id
//   );

//   if (!topology) {
//     return (
//       <main className="fd-shell">
//         <style>{pageStyles}</style>
//         <div className="fd-empty">
//           <Activity size={38} />
//           <h2>Flow configuration unavailable</h2>
//           <button type="button" onClick={onBack}>Back</button>
//         </div>
//       </main>
//     );
//   }

//   const equipment = getTopologyEquipment(topology);
//   const FlowIcon = flow?.icon || Activity;

//   return (
//     <main className="fd-shell">
//       <style>{pageStyles}</style>

//       <section className="fd-dashboard">
//         <header className="fd-header">
//           <div className="fd-header__left">
//             <button type="button" className="fd-back" onClick={onBack}>
//               <ArrowLeft size={17} /> Overview
//             </button>

//             <span className="fd-main-icon"><FlowIcon size={23} /></span>

//             <div>
//               <span className="fd-eyebrow">BMS LIVE FLOW</span>
//               <h1>{topology.title}</h1>
//               <p>{topology.subtitle}</p>
//             </div>
//           </div>

//           <div className="fd-header__right">
//             <span className="fd-live"><i />DEMO LIVE</span>
//             <span className="fd-comm"><Wifi size={15} />Connected</span>
//           </div>
//         </header>

//         <section className="fd-workspace">
//           <header className="workspace-title">
//             <div>
//               <span>INTERNAL EQUIPMENT</span>
//               <h2>Operational Flow</h2>
//             </div>
//             <div className="workspace-legend">
//               <span><i className="dot-on" />Active</span>
//               <span><i className="dot-standby" />Standby</span>
//               <span><i className="dot-fault" />Fault</span>
//             </div>
//           </header>

//           <div className="fd-content">
//             <FlowRenderer topology={topology} onOpenEquipment={onOpenEquipment} />
//           </div>
//         </section>

//         <footer className="fd-footer">
//           Demo telemetry • Monitoring only • Backend-ready equipment IDs
//         </footer>
//       </section>
//     </main>
//   );
// }

// /* =========================================================
//    GLOBAL PAGE + SHARED CARD CSS ONLY
//    IMPORTANT:
//    No Source/Feeder/Transformer/LT Kiosk/Busduct/PCC/etc.
//    topology geometry is defined here.
// ========================================================= */

// const pageStyles = `
// *,
// *::before,
// *::after { box-sizing:border-box; }

// .fd-shell {
//   width:100%;
//   height:100%;
//   min-height:0;
//   padding:0;
//   overflow:hidden;
//   color:#18283a;
//   background:transparent;
// }

// .fd-dashboard {
//   width:100%;
//   max-width:none;
//   height:100%;
//   min-height:0;
//   margin:0;
//   display:grid;
//   grid-template-rows:64px minmax(0,1fr) 14px;
//   gap:4px;
// }

// .fd-header {
//   min-width:0;
//   padding:8px 14px;
//   display:flex;
//   align-items:center;
//   justify-content:space-between;
//   gap:18px;
//   border:1px solid #1e3b54;
//   border-radius:9px;
//   background:linear-gradient(120deg,#112b42 0%,#0b2033 52%,#102a40 100%);
// }

// .fd-header__left,
// .fd-header__right { display:flex;align-items:center; }

// .fd-header__left { min-width:0;gap:11px; }
// .fd-header__right { flex-shrink:0;gap:8px; }

// .fd-back {
//   height:36px;padding:0 12px;display:inline-flex;align-items:center;gap:7px;
//   border:1px solid #45647d;border-radius:6px;color:#e6eef5;background:#193850;
//   cursor:pointer;font-size:10px;font-weight:700;
// }

// .fd-main-icon {
//   width:40px;height:40px;flex-shrink:0;display:grid;place-items:center;
//   border:1px solid #477da4;border-radius:7px;color:#fff;background:#205475;
// }

// .fd-eyebrow {
//   display:block;margin-bottom:2px;color:#7f9bb1;font-size:8px;font-weight:800;
//   letter-spacing:.14em;
// }

// .fd-header h1 { margin:0;color:#fff;font-size:clamp(18px,1.35vw,24px);line-height:1.05; }
// .fd-header p { margin:3px 0 0;color:#9bb0c0;font-size:9px; }

// .fd-live,
// .fd-comm {
//   height:32px;padding:0 11px;display:inline-flex;align-items:center;gap:7px;
//   border-radius:6px;font-size:8px;font-weight:800;letter-spacing:.04em;
// }

// .fd-live { color:#9de8c6;border:1px solid #32765f;background:#123e32; }
// .fd-live i { width:7px;height:7px;border-radius:50%;background:#30d79b; }
// .fd-comm { color:#d0dce6;border:1px solid #405f77;background:#17344c; }




// .fd-workspace {
//   width:100%;
//   min-width:0;
//   min-height:0;
//   display:grid;
//   grid-template-rows:46px minmax(0,1fr);
//   overflow:hidden;
//   border:0;
//   border-radius:0;
//   background:transparent;
// }

// .workspace-title {
//   width:100%;
//   padding:6px 18px;
//   display:flex;
//   align-items:center;
//   justify-content:space-between;
//   border:0;
//   border-bottom:1px solid rgba(117,137,153,.20);
//   background:transparent;
// }

// .workspace-title > div:first-child span {
//   display:block;color:#82919e;font-size:7px;font-weight:800;letter-spacing:.14em;
// }

// .workspace-title h2 { margin:2px 0 0;color:#1e384d;font-size:16px; }
// .workspace-legend { display:flex;gap:14px; }
// .workspace-legend span {
//   display:inline-flex;align-items:center;gap:5px;color:#687986;font-size:8px;font-weight:650;
// }
// .workspace-legend i { width:7px;height:7px;border-radius:50%; }
// .dot-on { background:#22bf87; }
// .dot-standby { background:#dda33d; }
// .dot-fault { background:#dd4b5d; }

// .fd-content {
//   width:100%;
//   min-width:0;
//   min-height:0;
//   padding:10px 18px 6px;
//   overflow:auto;
//   background:transparent;
// }

// /* SHARED EQUIPMENT CARD */
// .eq-card {
//   width:100%;min-width:0;min-height:132px;padding:12px 13px 10px;position:relative;
//   display:flex;flex-direction:column;overflow:hidden;text-align:left;
//   border:1px solid #2c75a7;border-radius:8px;color:#fff;
//   background:linear-gradient(145deg,#173f75 0%,#103264 52%,#0c2855 100%);
//   box-shadow:none;cursor:pointer;transition:border-color .16s ease,box-shadow .16s ease;
// }

// .eq-card::before {
//   content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:#2bd197;
// }

// .eq-card:hover,
// .eq-card:focus-visible {
//   border-color:#59b8d3;
//   box-shadow:0 8px 20px rgba(13,47,72,.13);
//   outline:none;
// }

// .eq-card--alarm {
//   border-color:#a54e5d;
//   background:linear-gradient(145deg,#6b3746,#4b2732);
// }
// .eq-card--alarm::before { background:#ef6575; }

// .eq-card__top { display:flex;align-items:center;justify-content:space-between;gap:8px; }
// .eq-card__icon {
//   width:35px;height:35px;display:grid;place-items:center;
//   border:1px solid rgba(255,255,255,.15);border-radius:6px;color:#b9dcf4;background:#12345f;
// }

// .eq-status {
//   min-height:23px;padding:0 8px;display:inline-flex;align-items:center;gap:5px;
//   border-radius:4px;font-size:8px;font-weight:800;
// }
// .eq-status i { width:6px;height:6px;border-radius:50%; }
// .eq-status--on { color:#91e8c3;background:#124534; }
// .eq-status--on i { background:#2dd69a; }
// .eq-status--standby { color:#f1cd7c;background:#4b3a1d; }
// .eq-status--standby i { background:#dfa63d; }
// .eq-status--off { color:#d0d9e0;background:#334958; }
// .eq-status--off i { background:#8a9aa7; }

// .eq-card__name { margin:12px 0 8px; }
// .eq-card__name h3 {
//   margin:0;overflow:hidden;color:#fff;font-size:15px;font-weight:750;
//   text-overflow:ellipsis;white-space:nowrap;
// }
// .eq-card__name p {
//   min-height:12px;margin:3px 0 0;overflow:hidden;color:#a9c5d8;font-size:8px;
//   text-overflow:ellipsis;white-space:nowrap;
// }

// .eq-card__bottom {
//   min-height:24px;margin-top:auto;padding-top:7px;display:flex;align-items:center;
//   justify-content:space-between;gap:6px;border-top:1px solid rgba(255,255,255,.10);
//   color:#88e1bc;font-size:7px;
// }
// .eq-card__bottom > span { display:inline-flex;align-items:center;gap:4px; }
// .eq-card__bottom i { width:6px;height:6px;border-radius:50%;background:#2bd197; }
// .eq-card__bottom strong { color:#c5d3dd;font-size:7px; }

// .eq-card__hover {
//   position:absolute;inset:0;z-index:5;padding:14px;display:flex;flex-direction:column;
//   justify-content:center;gap:10px;opacity:0;visibility:hidden;transform:translateY(5px);
//   color:#fff;background:linear-gradient(145deg,rgba(9,34,66,.985),rgba(8,45,75,.985));
//   transition:opacity .16s ease,transform .16s ease,visibility .16s ease;pointer-events:none;
// }
// .eq-card:hover .eq-card__hover,
// .eq-card:focus-visible .eq-card__hover {
//   opacity:1;visibility:visible;transform:translateY(0);
// }
// .eq-card__hover-title { color:#79d9ec;font-size:7px;font-weight:800;letter-spacing:.16em; }
// .eq-card__hover-grid {
//   display:grid;grid-template-columns:repeat(3,minmax(0,1fr));
//   border-top:1px solid rgba(121,217,236,.22);
//   border-bottom:1px solid rgba(121,217,236,.22);
// }
// .eq-card__hover-grid > div { min-width:0;padding:9px 7px; }
// .eq-card__hover-grid > div + div { border-left:1px solid rgba(121,217,236,.18); }
// .eq-card__hover-grid span { display:block;margin-bottom:3px;color:#91aabd;font-size:7px; }
// .eq-card__hover-grid strong {
//   display:block;overflow:hidden;color:#fff;font-size:11px;font-weight:650;
//   text-overflow:ellipsis;white-space:nowrap;
// }
// .eq-card__hover small { color:#a8bac8;font-size:7px; }

// /* SHARED SIMPLE CARD */
// .simple-card {
//   width:100%;min-height:132px;padding:16px 18px;position:relative;display:flex;
//   flex-direction:column;align-items:center;justify-content:center;overflow:hidden;
//   border:2px solid #1975bd;border-radius:7px;color:#fff;text-align:center;
//   background:#102f6e;box-shadow:none;
// }
// button.simple-card { cursor:pointer; }
// .simple-card svg { margin:5px 0;color:#a5d4f2; }
// .simple-card__eyebrow { color:#9dc9eb;font-size:8px;font-weight:800;letter-spacing:.17em; }
// .simple-card h3 { margin:4px 0;color:#fff;font-size:18px;font-weight:800; }
// .simple-card p { margin:2px 0 8px;color:#c1d2e3;font-size:10px;font-weight:650; }
// .simple-card > strong {
//   display:inline-flex;align-items:center;gap:6px;color:#37dda7;font-size:8px;
// }
// .simple-card > strong i { width:8px;height:8px;border-radius:50%;background:#2bd197; }

// .simple-card__hover {
//   position:absolute;inset:0;z-index:5;padding:14px;display:flex;flex-direction:column;
//   justify-content:center;gap:9px;opacity:0;visibility:hidden;transform:translateY(5px);
//   color:#fff;background:linear-gradient(145deg,rgba(9,34,66,.985),rgba(8,45,75,.985));
//   transition:opacity .16s ease,transform .16s ease,visibility .16s ease;pointer-events:none;
// }
// .simple-card:hover .simple-card__hover,
// .simple-card:focus-visible .simple-card__hover {
//   opacity:1;visibility:visible;transform:translateY(0);
// }
// .simple-card__hover > span { color:#79d9ec;font-size:7px;font-weight:800;letter-spacing:.15em; }
// .simple-card__hover > div {
//   display:grid;grid-template-columns:repeat(3,minmax(0,1fr));
//   border-top:1px solid rgba(121,217,236,.22);
//   border-bottom:1px solid rgba(121,217,236,.22);
// }
// .simple-card__hover small { min-width:0;padding:8px 5px;color:#91aabd;font-size:7px; }
// .simple-card__hover small + small { border-left:1px solid rgba(121,217,236,.18); }
// .simple-card__hover b {
//   display:block;margin-top:3px;overflow:hidden;color:#fff;font-size:10px;
//   text-overflow:ellipsis;white-space:nowrap;
// }
// .simple-card__hover em { color:#a8bac8;font-size:7px;font-style:normal; }

// .fd-footer { padding:0 4px;display:flex;align-items:center;color:#6f8190;font-size:7px;white-space:nowrap; }

// .fd-empty {
//   min-height:100vh;display:grid;place-items:center;align-content:center;gap:12px;
// }
// .fd-empty button {
//   padding:9px 14px;border:0;border-radius:6px;color:#fff;background:#234f73;
// }

// /* Global dark theme only. Individual topology colors remain inside each view. */
// html[data-theme="dark"] .fd-shell {
//   color:var(--app-text,#f4f8fc);
//   background:var(--app-bg,#07111f);
// }
// html[data-theme="dark"] .fd-workspace,
// html[data-theme="dark"] .fd-content,
// html[data-theme="dark"] .workspace-title {
//   border-color:var(--app-border,#203651);
//   background-color:var(--app-surface,#0b1728);
// }
// html[data-theme="dark"] .workspace-title h2 { color:var(--app-text,#f4f8fc); }
// html[data-theme="dark"] .workspace-title span,
// html[data-theme="dark"] .workspace-legend span { color:var(--app-muted,#8294aa); }

// @media(max-width:900px) {
//   .fd-shell { height:auto;min-height:100%;overflow:visible; }
//   .fd-dashboard { height:auto;min-height:100%;display:flex;flex-direction:column; }
//   .fd-header { flex-wrap:wrap; }
//   .fd-workspace { overflow:visible; }
//   .fd-content { overflow-x:auto;overflow-y:visible; }
// }

// @media(max-width:600px) {
//   .fd-shell { padding:6px; }
//   .fd-header { align-items:flex-start;flex-direction:column; }
//   .fd-header__left { width:100%;flex-wrap:wrap; }
//   .fd-header__right { width:100%;justify-content:flex-end; }
//   .workspace-title { align-items:flex-start;flex-direction:column;gap:6px; }
// }
// `;

// export default FlowDetail;









// import { useState } from "react";

// import {
//   ArrowLeft,
//   Activity,
//   RadioTower,
//   GitBranch,
//   Zap,
//   Network,
//   Wifi,
//   Gauge,
//   Cpu,
//   BatteryCharging,
//   Bolt,
//   Building2,
//   CirclePower,
//   Fan,
//   Droplets,
//   Flame,
//   PanelsTopLeft,
//   ArrowDown,
//   ArrowUp,
//   ArrowLeftRight,
// } from "lucide-react";
// import {
//   demoTelemetry,
//   getTopologyEquipment,
//   getProjectTopology,
// } from "../data/flowConfigs";

// /* =========================================================
//    SHARED HELPERS ONLY
//    These are presentation/data helpers, NOT topology layouts.
// ========================================================= */

// function getIcon(type) {
//   switch (type) {
//     case "incomer": return RadioTower;
//     case "meter": return Gauge;
//     case "feeder": return GitBranch;
//     case "transformer": return Zap;
//     case "kiosk": return PanelsTopLeft;
//     case "busbar":
//     case "busduct": return Network;
//     case "pcc-circuit":
//     case "coupler": return Cpu;
//     case "ups": return BatteryCharging;
//     case "raising-main": return Bolt;
//     case "wing": return Building2;
//     case "dg": return CirclePower;
//     case "hvac": return Fan;
//     case "water-main":
//     case "stp":
//     case "wtp":
//     case "tank": return Droplets;
//     case "fire-alarm":
//     case "fire-fighting":
//     case "fire-pump": return Flame;
//     default: return Activity;
//   }
// }

// // function getPreview(equipment, data) {
// //   if (!data) return [];

// //   switch (equipment.type) {
// //     case "transformer":
// //       return [
// //         ["Oil", `${data.oilTemp}°C`],
// //         ["Winding", `${data.windingTemp}°C`],
// //         ["Load", `${data.load}%`],
// //       ];
// //     case "busduct":
// //       return [
// //         ["Temp", `${data.temperature}°C`],
// //         ["Vibration", `${data.vibration} mm/s`],
// //         ["Health", data.health],
// //       ];
// //     case "ups":
// //       return [
// //         ["Capacity", data.capacity],
// //         ["Load", `${data.load}%`],
// //         ["Battery", `${data.battery}%`],
// //       ];
// //     case "water-main":
// //       return [
// //         ["Flow", `${data.flowRate} m³/h`],
// //         ["Water", `${data.totalWater}%`],
// //         ["Pressure", `${data.pressure} bar`],
// //       ];
// //     case "stp":
// //     case "wtp":
// //       return [
// //         ["Inlet", `${data.inletFlow} m³/h`],
// //         ["Outlet", `${data.outletFlow} m³/h`],
// //         ["pH", data.ph],
// //       ];
// //     case "tank":
// //       return [
// //         ["Level", `${data.level}%`],
// //         ["Volume", `${data.volume} m³`],
// //         ["Outlet", `${data.outletFlow} m³/h`],
// //       ];
// //     case "fire-alarm":
// //       return [
// //         ["Smoke", data.smokeDetectors],
// //         ["Heat", data.heatDetectors],
// //         ["Alarms", data.activeAlarms],
// //       ];
// //     case "fire-fighting":
// //       return [
// //         ["Pressure", `${data.pressure} bar`],
// //         ["Hydrant", data.hydrantNetwork],
// //         ["Valve", data.mainValve],
// //       ];
// //     case "fire-pump":
// //       return [
// //         ["Voltage", `${data.voltage} V`],
// //         ["Pressure", `${data.pressure} bar`],
// //         ["Mode", data.mode],
// //       ];
// //     default:
// //       return [
// //         ["kWh", data.kWh ?? "--"],
// //         [
// //           "Voltage",
// //           data.voltage
// //             ? data.voltage === 33
// //               ? "33 kV"
// //               : `${data.voltage} V`
// //             : "--",
// //         ],
// //         ["PF", data.powerFactor ?? "--"],
// //       ];
// //   }
// // }

// function getPreview(equipment, data) {
//   if (!equipment || !data) return [];

//   const value = (v, suffix = "") =>
//     v !== undefined && v !== null && v !== ""
//       ? `${v}${suffix}`
//       : "--";

//   switch (equipment.type) {

//     /* =====================================================
//        SOURCE / INCOMER
//        Standard electrical monitoring
//     ===================================================== */

//     case "incomer":
//       return [
//         ["Voltage", data.voltage === 33 ? "33 kV" : value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        METER
//     ===================================================== */

//     case "meter":
//       return [
//         ["Voltage", data.voltage === 33 ? "33 kV" : value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        FEEDER
//     ===================================================== */

//     case "feeder":
//       return [
//         ["Voltage", data.voltage === 33 ? "33 kV" : value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        TRANSFORMER
//     ===================================================== */

//     case "transformer":
//       return [
//         ["Oil Temp", value(data.oilTemp, "°C")],
//         ["Winding Temp", value(data.windingTemp, "°C")],
//         ["Load", value(data.load, "%")],
//         ["Relay", value(data.buchholzRelay ?? data.relay)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        LT KIOSK
//     ===================================================== */

//     case "kiosk":
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        BUSDUCT / BUSBAR
//     ===================================================== */

//     case "busduct":
//     case "busbar":
//       return [
//         ["Temperature", value(data.temperature, "°C")],
//         ["Vibration", value(data.vibration, " mm/s")],
//         ["Load", value(data.load, "%")],
//         ["Health", value(data.health)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        PCC
//     ===================================================== */

//     case "pcc-circuit":
//     case "coupler":
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        RAISING MAIN
//     ===================================================== */

//     case "raising-main":
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        WING
//     ===================================================== */

//     case "wing":
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        DIESEL GENERATOR
//     ===================================================== */

//     case "dg":
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["PF", value(data.powerFactor)],
//         ["Load", value(data.load, "%")],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        UPS
//     ===================================================== */

//     case "ups":
//       return [
//         ["Capacity", value(data.capacity)],
//         ["Input V", value(data.inputVoltage, " V")],
//         ["Output V", value(data.outputVoltage, " V")],
//         ["Load", value(data.load, "%")],
//         ["Battery", value(data.battery, "%")],
//         ["Input Hz", value(data.inputFrequency, " Hz")],
//         ["Output Hz", value(data.outputFrequency, " Hz")],
//         ["Battery V", value(data.batteryVoltage, " V")],
//         ["Backup", value(data.backupTime, " min")],
//         ["Mode", value(data.mode)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        WATER MAIN
//     ===================================================== */

//     case "water-main":
//       return [
//         ["Flow", value(data.flowRate, " m³/h")],
//         ["Water", value(data.totalWater, "%")],
//         ["Pressure", value(data.pressure, " bar")],
//         ["Health", value(data.health)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        STP / WTP
//     ===================================================== */

//     case "stp":
//     case "wtp":
//       return [
//         ["Inlet Flow", value(data.inletFlow, " m³/h")],
//         ["Outlet Flow", value(data.outletFlow, " m³/h")],
//         ["pH", value(data.ph)],
//         ["Turbidity", value(data.turbidity, " NTU")],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        WATER TANK
//     ===================================================== */

//     case "tank":
//       return [
//         ["Level", value(data.level, "%")],
//         ["Volume", value(data.volume, " m³")],
//         ["Inlet Flow", value(data.inletFlow, " m³/h")],
//         ["Outlet Flow", value(data.outletFlow, " m³/h")],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        FIRE ALARM
//     ===================================================== */

//     case "fire-alarm":
//       return [
//         ["Smoke", value(data.smokeDetectors)],
//         ["Heat", value(data.heatDetectors)],
//         ["Active Alarms", value(data.activeAlarms)],
//         ["Health", value(data.health)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        FIRE FIGHTING
//     ===================================================== */

//     case "fire-fighting":
//       return [
//         ["Pressure", value(data.pressure, " bar")],
//         ["Hydrant", value(data.hydrantNetwork)],
//         ["Main Valve", value(data.mainValve)],
//         ["Health", value(data.health)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        FIRE PUMP
//     ===================================================== */

//     case "fire-pump":
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["Pressure", value(data.pressure, " bar")],
//         ["Mode", value(data.mode)],
//         ["Health", value(data.health)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        DEFAULT ELECTRICAL EQUIPMENT
//     ===================================================== */

//     default:
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];
//   }
// }




// function EquipmentCard({ equipment, onOpen }) {
//   if (!equipment) return null;

//   const Icon = getIcon(equipment.type);

//   // Project-created/custom equipment may not exist in the legacy
//   // demoTelemetry map. Prefer telemetry carried by the generated
//   // project equipment and create a deterministic demo reading only
//   // when no reading exists. This keeps new projects fully usable.
//   const existingData =
//     equipment.telemetry || demoTelemetry[equipment.id];

//   const seed = String(equipment.id || equipment.name || "equipment")
//     .split("")
//     .reduce((total, character) => total + character.charCodeAt(0), 0);

//   const data = existingData || {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,
//     voltage: equipment.voltageLevel?.includes("33") ? 33 : 433,
//     current: 120 + (seed % 121),
//     amps: 120 + (seed % 121),
//     powerFactor: Number((0.95 + (seed % 4) * 0.01).toFixed(2)),
//     kWh: 1000 + (seed % 800),
//     kVAh: 1100 + (seed % 850),
//     load: 35 + (seed % 55),
//     breakerState: "CLOSED",
//     fault: false,
//     trip: false,
//     warning: false,
//   };

//   const alarm = data?.fault || data?.trip || data?.warning;
//   const status = data?.status || "OFFLINE";
//   const preview = getPreview(equipment, data);

//   return (
//     <button
//       type="button"
//       className={`eq-card ${alarm ? "eq-card--alarm" : ""}`}
//       onClick={() => onOpen?.({ ...equipment, telemetry: data })}
//     >
//       <div className="eq-card__top">
//         <span className="eq-card__icon"><Icon size={19} /></span>
//         <span
//           className={`eq-status ${
//             status === "ON"
//               ? "eq-status--on"
//               : status === "STANDBY"
//               ? "eq-status--standby"
//               : "eq-status--off"
//           }`}
//         >
//           <i />{status}
//         </span>
//       </div>

//       <div className="eq-card__name">
//         <h3>{equipment.name}</h3>
//         <p>{equipment.label}</p>
//       </div>

//       {preview.length > 0 && (
//         <div className="eq-card__hover" aria-hidden="true">
//           <span className="eq-card__hover-title">LIVE READINGS</span>
//           <div className="eq-card__hover-grid">
//             {preview.map(([label, value]) => (
//               <div key={label}>
//                 <span>{label}</span>
//                 <strong>{value}</strong>
//               </div>
//             ))}
//           </div>
//           <small>Click to open operational view</small>
//         </div>
//       )}

//       <div className="eq-card__bottom">
//         <span><i />{data?.health || "UNKNOWN"}</span>
//         <strong>View Operation →</strong>
//       </div>
//     </button>
//   );
// }

// function SimpleFlowCard({
//   title,
//   subtitle,
//   eyebrow,
//   icon: Icon,
//   onClick,
//   live = true,
//   equipment,
// }) {
//   const data = equipment ? demoTelemetry[equipment.id] : null;
//   const preview = equipment ? getPreview(equipment, data) : [];

//   const content = (
//     <>
//       {eyebrow && <span className="simple-card__eyebrow">{eyebrow}</span>}
//       {Icon && <Icon size={22} />}
//       <h3>{title}</h3>
//       {subtitle && <p>{subtitle}</p>}
//       {live && <strong><i /> LIVE</strong>}

//       {preview.length > 0 && (
//         <div className="simple-card__hover" aria-hidden="true">
//           <span>LIVE READINGS</span>
//           <div>
//             {preview.map(([label, value]) => (
//               <small key={label}>{label}<b>{value}</b></small>
//             ))}
//           </div>
//           <em>Click to open operational view</em>
//         </div>
//       )}
//     </>
//   );

//   return onClick ? (
//     <button type="button" className="simple-card" onClick={onClick}>{content}</button>
//   ) : (
//     <div className="simple-card">{content}</div>
//   );
// }

// /* =========================================================
//    1. SOURCE VIEW
//    Independent JSX + independent topology CSS.
//    Correct card-level flow: INC1 ─ OUT ─ INC2
//    Source also branches vertically to INC1 and INC2.
//    OUT drops vertically to Meter.
// ========================================================= */

// function SourceView({ topology, onOpenEquipment }) {
//   const configuration = topology?.configuration || {};
//   const voltageLevel = configuration.voltageLevel || topology?.voltageLevel || "33kV";
//   const equipment = Array.isArray(topology?.equipment) ? topology.equipment : [];

//   const incomingFeeders = equipment.filter((item) => item.role === "incoming" || item.type === "incomer");
//   const outgoingFeeders = equipment.filter((item) => item.role === "outgoing" || item.type === "busbar");
//   const meters = equipment.filter((item) => item.role === "meter" || item.type === "meter");

//   const sourceStyles = `
//     .source-view{--wire:#21b8cc;--wire-size:2px;width:100%;height:100%;min-height:0;padding:12px clamp(18px,3vw,44px) 20px;box-sizing:border-box;overflow:auto;display:flex;flex-direction:column;align-items:stretch}
//     .source-parent{width:min(430px,92%);min-height:82px;margin:0 auto;padding:12px 22px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:center;border:1px solid #367fb1;border-radius:5px;background:linear-gradient(145deg,#153e72,#0d2853);color:#fff;position:relative}
//     .source-parent:before{content:"";position:absolute;left:0;right:0;top:0;height:3px;background:#3eb9d0}.source-parent span{font-size:8px;font-weight:800;letter-spacing:.15em;color:#8ec5ea}.source-parent h2{font-size:19px;margin:4px 0 1px}.source-parent p{font-size:9px;margin:0;color:#b3cada}
//     .source-stage{width:100%;max-width:1440px;margin:0 auto;position:relative}.source-stage__stem{width:var(--wire-size);height:18px;background:var(--wire);margin:0 auto}.source-stage__bus{height:18px;position:relative;margin:0 max(5%,calc(50% / var(--stage-count)))}.source-stage__bus:before{content:"";position:absolute;left:0;right:0;top:0;height:var(--wire-size);background:var(--wire)}.source-stage__bus--single:before{left:50%;right:auto;width:var(--wire-size);height:18px;transform:translateX(-50%)}
//     .source-stage__drops{position:absolute;inset:0;display:grid;grid-template-columns:repeat(var(--stage-count),minmax(0,1fr));pointer-events:none}.source-stage__drop{position:relative}.source-stage__drop:before{content:"";position:absolute;left:50%;top:0;width:var(--wire-size);height:18px;background:var(--wire);transform:translateX(-50%)}
//     .source-stage__grid{display:grid;grid-template-columns:repeat(var(--cols),minmax(150px,210px));justify-content:space-evenly;gap:10px 18px;width:100%;position:relative;z-index:2}.source-stage__grid .eq-card{width:100%;min-width:0;height:108px;transform:none!important}.source-stage__collector{height:18px;position:relative;margin:0 max(5%,calc(50% / var(--stage-count)))}.source-stage__collector:before{content:"";position:absolute;left:0;right:0;bottom:0;height:var(--wire-size);background:var(--wire)}.source-stage__collector--single:before{left:50%;right:auto;width:var(--wire-size);height:18px;transform:translateX(-50%)}.source-stage__collector .source-stage__drop:before{top:0;height:18px}
//     .source-link{width:var(--wire-size);height:20px;background:var(--wire);margin:0 auto}.source-stage__label{text-align:center;font-size:7px;font-weight:800;letter-spacing:.13em;color:#6f9fb8;margin:2px 0 5px}
//     .source-empty{margin:auto;text-align:center;color:#7995a6;font-size:12px}
//     @media(max-width:900px){.source-view{height:auto;min-height:100%}}
//   `;

//   const Stage = ({ label, items }) => {
//     if (!items.length) return null;
//     const stageWidth = Math.max(620, items.length * 180);
//     return <>
//       <div className="source-link" />
//       <div className="source-stage" style={{ "--stage-count": items.length, "--cols": items.length, minWidth: `${stageWidth}px` }}>
//         <div className="source-stage__label">{label}</div>
//         <div className={`source-stage__bus ${items.length === 1 ? "source-stage__bus--single" : ""}`}>
//           <div className="source-stage__drops">{items.map((item)=><div className="source-stage__drop" key={`drop-${item.id}`} />)}</div>
//         </div>
//         <div className="source-stage__grid">{items.map((item)=><EquipmentCard key={item.id} equipment={item} onOpen={onOpenEquipment} />)}</div>
//         <div className={`source-stage__collector ${items.length === 1 ? "source-stage__collector--single" : ""}`}>
//           <div className="source-stage__drops">{items.map((item)=><div className="source-stage__drop" key={`collector-${item.id}`} />)}</div>
//         </div>
//       </div>
//     </>;
//   };

//   if (!equipment.length) return <div className="source-view"><style>{sourceStyles}</style><div className="source-empty">Source equipment is not configured for this project.</div></div>;

//   return <div className="source-view"><style>{sourceStyles}</style>
//     <div className="source-parent"><RadioTower size={24}/><span>PROJECT SOURCE</span><h2>{voltageLevel} SOURCE</h2><p>{incomingFeeders.length} Incoming · {outgoingFeeders.length} Outgoing · {meters.length} Meter{meters.length===1?"":"s"}</p></div>
//     <Stage label="INCOMING FEEDERS → COMMON SOURCE BUS" items={incomingFeeders}/>
//     <Stage label="COMMON BUS → OUTGOING FEEDERS" items={outgoingFeeders}/>
//     <Stage label="OUTGOING DISTRIBUTION → ENERGY METERING" items={meters}/>
//   </div>;
// }

// function FeederView({
//   topology,
//   onOpenEquipment,
// }) {
//   const configuration =
//     topology?.configuration || {};

//   const voltageLevel =
//     configuration.voltageLevel ||
//     topology?.voltageLevel ||
//     "33kV";


//   /* =====================================================
//      DYNAMIC EQUIPMENT

//      New project structure:
//        incomingFeeders[]
//        outgoingFeeders[]

//      Legacy fallback:
//        incoming
//        equipment[]
//   ===================================================== */

//   const incomingFeeders =
//     Array.isArray(
//       topology?.incomingFeeders
//     )
//       ? topology.incomingFeeders
//       : topology?.incoming
//       ? [topology.incoming]
//       : [];


//   const outgoingFeeders =
//     Array.isArray(
//       topology?.outgoingFeeders
//     )
//       ? topology.outgoingFeeders
//       : Array.isArray(
//           topology?.equipment
//         )
//       ? topology.equipment
//       : [];


//   const incomingCount =
//     incomingFeeders.length;

//   const outgoingCount =
//     outgoingFeeders.length;


//   /*
//     The drawing grows horizontally when the client has
//     many feeders.

//     This prevents cards from becoming tiny and prevents
//     conductors from crossing/overlapping cards.
//   */

//   const cardWidth = 180;
//   const columnGap = 28;

//   const incomingWidth =
//     incomingCount > 0
//       ? incomingCount * cardWidth +
//         Math.max(
//           incomingCount - 1,
//           0
//         ) *
//           columnGap
//       : 0;

//   const outgoingWidth =
//     outgoingCount > 0
//       ? outgoingCount * cardWidth +
//         Math.max(
//           outgoingCount - 1,
//           0
//         ) *
//           columnGap
//       : 0;

//   const networkWidth =
//     Math.max(
//       760,
//       incomingWidth,
//       outgoingWidth
//     );


//   const feederStyles = `
//     .fd-feeder {
//       width: 100%;
//       min-width: 0;
//     }


//     /* =====================================================
//        HEADER
//     ===================================================== */

//     .fd-feeder__header {
//       display: flex;

//       align-items: center;
//       justify-content: space-between;

//       gap: 20px;

//       margin-bottom: 24px;

//       padding-bottom: 14px;

//       border-bottom:
//         1px solid
//         rgba(105, 150, 175, 0.16);
//     }


//     .fd-feeder__header-copy {
//       min-width: 0;
//     }


//     .fd-feeder__eyebrow {
//       display: block;

//       margin-bottom: 5px;

//       color: #6aaec3;

//       font-size: 9px;
//       font-weight: 800;

//       letter-spacing: 0.15em;

//       text-transform: uppercase;
//     }


//     .fd-feeder__title {
//       margin: 0;

//       color:
//         var(
//           --text-primary,
//           #eaf4fb
//         );

//       font-size:
//         clamp(
//           20px,
//           2vw,
//           28px
//         );

//       font-weight: 700;

//       letter-spacing: -0.02em;
//     }


//     .fd-feeder__subtitle {
//       margin:
//         6px 0 0;

//       color:
//         var(
//           --text-secondary,
//           #8499a9
//         );

//       font-size: 12px;
//       font-weight: 500;
//     }


//     .fd-feeder__voltage {
//       flex: 0 0 auto;

//       padding:
//         9px 14px;

//       border:
//         1px solid
//         rgba(46, 181, 201, 0.34);

//       border-radius: 4px;

//       background:
//         rgba(46, 181, 201, 0.06);

//       color: #69c7d7;

//       font-size: 12px;
//       font-weight: 800;

//       letter-spacing: 0.05em;
//     }


//     /* =====================================================
//        SCROLLABLE ENGINEERING WORKSPACE
//     ===================================================== */

//     .fd-feeder__viewport {
//       width: 100%;

//       overflow-x: auto;
//       overflow-y: hidden;

//       padding:
//         8px 0 22px;
//     }


//     .fd-feeder__network {
//       width:
//         ${networkWidth}px;

//       min-width:
//         ${networkWidth}px;

//       margin: 0 auto;

//       display: flex;
//       flex-direction: column;

//       align-items: stretch;

//       box-sizing: border-box;
//     }


//     /* =====================================================
//        SECTION LABEL
//     ===================================================== */

//     .fd-feeder__section-label {
//       display: block;

//       margin-bottom: 12px;

//       color: #718899;

//       font-size: 9px;
//       font-weight: 800;

//       letter-spacing: 0.14em;

//       text-align: center;

//       text-transform: uppercase;
//     }


//     /* =====================================================
//        INCOMING GRID
//     ===================================================== */

//     .fd-feeder__incoming-grid {
//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             incomingCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       justify-content: center;

//       column-gap:
//         ${columnGap}px;

//       width: max-content;

//       max-width: 100%;

//       margin:
//         0 auto;
//     }


//     .fd-feeder__incoming-column {
//       width:
//         ${cardWidth}px;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//     }


//     /*
//       No card movement on hover.

//       The conductor begins directly below the
//       equipment card and remains aligned with its
//       center.
//     */

//     .fd-feeder__incoming-drop {
//       width: 2px;
//       height: 34px;

//       flex: 0 0 34px;

//       background: #2eb5c9;
//     }


//     /* =====================================================
//        INCOMING COLLECTION BUS
//     ===================================================== */

//     .fd-feeder__incoming-collector {
//       position: relative;

//       width:
//         ${
//           incomingCount <= 1
//             ? cardWidth
//             : incomingWidth
//         }px;

//       height: 34px;

//       margin:
//         0 auto;
//     }


//     /*
//       Horizontal collection bus runs exactly between
//       the center of the first and last incoming cards.
//     */

//     .fd-feeder__incoming-horizontal {
//       position: absolute;

//       top: 0;

//       left:
//         ${
//           incomingCount <= 1
//             ? cardWidth / 2
//             : cardWidth / 2
//         }px;

//       right:
//         ${
//           incomingCount <= 1
//             ? cardWidth / 2 - 2
//             : cardWidth / 2
//         }px;

//       height: 2px;

//       background: #2eb5c9;
//     }


//     /*
//       Center stem connects incoming collection bus
//       to the main distribution bus.
//     */

//     .fd-feeder__incoming-center-stem {
//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 2px;
//       height: 34px;

//       transform:
//         translateX(-50%);

//       background: #2eb5c9;
//     }


//     /* =====================================================
//        MAIN BUS
//     ===================================================== */

//     .fd-feeder__bus-label {
//       margin:
//         0 0 8px;

//       color: #668092;

//       font-size: 9px;
//       font-weight: 800;

//       letter-spacing: 0.14em;

//       text-align: center;

//       text-transform: uppercase;
//     }


//     .fd-feeder__main-bus-wrap {
//       width:
//         ${Math.max(
//           outgoingWidth,
//           cardWidth
//         )}px;

//       margin:
//         0 auto;

//       display: flex;

//       justify-content: center;
//     }


//     /*
//       Bus starts at the center of the first outgoing
//       feeder and finishes at the center of the last
//       outgoing feeder.

//       Therefore no floating conductor endpoints.
//     */

//     .fd-feeder__main-bus {
//       width:
//         ${
//           outgoingCount <= 1
//             ? 2
//             : Math.max(
//                 outgoingWidth -
//                   cardWidth,
//                 2
//               )
//         }px;

//       height: 2px;

//       background: #2eb5c9;
//     }


//     /* =====================================================
//        OUTGOING GRID
//     ===================================================== */

//     .fd-feeder__outgoing-grid {
//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             outgoingCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       justify-content: center;

//       column-gap:
//         ${columnGap}px;

//       width: max-content;

//       max-width: 100%;

//       margin:
//         0 auto;
//     }


//     .fd-feeder__outgoing-column {
//       width:
//         ${cardWidth}px;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//     }


//     .fd-feeder__outgoing-drop {
//       width: 2px;
//       height: 36px;

//       flex: 0 0 36px;

//       background: #2eb5c9;
//     }


//     /* =====================================================
//        EMPTY STATE
//     ===================================================== */

//     .fd-feeder__empty {
//       width:
//         min(
//           520px,
//           calc(
//             100% - 32px
//           )
//         );

//       margin:
//         28px auto;

//       padding: 26px;

//       box-sizing:
//         border-box;

//       border:
//         1px solid
//         rgba(
//           110,
//           140,
//           160,
//           0.22
//         );

//       border-radius: 4px;

//       background:
//         rgba(
//           70,
//           105,
//           125,
//           0.05
//         );

//       text-align: center;
//     }


//     .fd-feeder__empty strong {
//       display: block;

//       margin-bottom: 6px;

//       color:
//         var(
//           --text-primary,
//           #e2edf4
//         );

//       font-size: 14px;
//     }


//     .fd-feeder__empty span {
//       color:
//         var(
//           --text-secondary,
//           #8499a9
//         );

//       font-size: 11px;
//     }


//     /* =====================================================
//        RESPONSIVE
//     ===================================================== */

//     @media (
//       max-width: 900px
//     ) {
//       .fd-feeder__header {
//         align-items:
//           flex-start;

//         flex-direction:
//           column;
//       }
//     }
//   `;


//   /* =====================================================
//      SAFETY STATE
//   ===================================================== */

//   if (
//     incomingCount < 1 ||
//     outgoingCount < 1
//   ) {
//     return (
//       <div className="fd-feeder">
//         <style>
//           {feederStyles}
//         </style>

//         <div className="fd-feeder__empty">
//           <strong>
//             Feeder configuration unavailable
//           </strong>

//           <span>
//             At least one incoming feeder and
//             one outgoing feeder are required.
//           </span>
//         </div>
//       </div>
//     );
//   }


//   /* =====================================================
//      RENDER
//   ===================================================== */

//   return (
//     <div className="fd-feeder">
//       <style>
//         {feederStyles}
//       </style>


//       {/* HEADER */}

//       <div className="fd-feeder__header">

//         <div className="fd-feeder__header-copy">

//           <span className="fd-feeder__eyebrow">
//             ELECTRICAL DISTRIBUTION
//           </span>

//           <h2 className="fd-feeder__title">
//             {voltageLevel} FEEDER PANEL
//           </h2>

//           <p className="fd-feeder__subtitle">
//             {incomingCount} Incoming
//             {" / "}
//             {outgoingCount} Outgoing
//             {" "}
//             Feeder
//             {outgoingCount === 1
//               ? ""
//               : "s"}
//           </p>

//         </div>


//         <div className="fd-feeder__voltage">
//           {voltageLevel}
//         </div>

//       </div>


//       {/* NETWORK */}

//       <div className="fd-feeder__viewport">

//         <div className="fd-feeder__network">


//           {/* =============================================
//               INCOMING FEEDERS
//           ============================================== */}

//           <span className="fd-feeder__section-label">
//             INCOMING FEEDERS
//           </span>


//           <div className="fd-feeder__incoming-grid">

//             {incomingFeeders.map(
//               (incoming) => (
//                 <div
//                   className="fd-feeder__incoming-column"
//                   key={incoming.id}
//                 >

//                   <EquipmentCard
//                     equipment={incoming}
//                     onOpen={
//                       onOpenEquipment
//                     }
//                   />


//                   <div className="fd-feeder__incoming-drop" />

//                 </div>
//               )
//             )}

//           </div>


//           {/* =============================================
//               INCOMING COLLECTION BUS
//           ============================================== */}

//           <div className="fd-feeder__incoming-collector">

//             {incomingCount > 1 && (
//               <div className="fd-feeder__incoming-horizontal" />
//             )}


//             <div className="fd-feeder__incoming-center-stem" />

//           </div>


//           {/* =============================================
//               MAIN DISTRIBUTION BUS
//           ============================================== */}

//           <div className="fd-feeder__bus-label">
//             {voltageLevel} DISTRIBUTION BUS
//           </div>


//           <div className="fd-feeder__main-bus-wrap">

//             <div className="fd-feeder__main-bus" />

//           </div>


//           {/* =============================================
//               OUTGOING FEEDERS
//           ============================================== */}

//           <div className="fd-feeder__outgoing-grid">

//             {outgoingFeeders.map(
//               (outgoing) => (
//                 <div
//                   className="fd-feeder__outgoing-column"
//                   key={outgoing.id}
//                 >

//                   <div className="fd-feeder__outgoing-drop" />


//                   <EquipmentCard
//                     equipment={outgoing}
//                     onOpen={
//                       onOpenEquipment
//                     }
//                   />

//                 </div>
//               )
//             )}

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    3. TRANSFORMER VIEW
//    Fully independent. Editing this CSS cannot affect LT Kiosk,
//    Busduct, Wing, Fire, Source, etc.
// ========================================================= */

// function TransformerView({
//   topology,
//   onOpenEquipment,
// }) {
//   /* =====================================================
//      PROJECT CONFIGURATION
//   ===================================================== */

//   const configuration =
//     topology?.configuration || {};

//   const transformers =
//     Array.isArray(topology?.equipment)
//       ? topology.equipment
//       : [];

//   const transformerCount =
//     transformers.length;

//   const primaryVoltage =
//     configuration.primaryVoltage ||
//     topology?.primaryVoltage ||
//     "33kV";

//   const secondaryVoltage =
//     configuration.secondaryVoltage ||
//     topology?.secondaryVoltage ||
//     "433V";


//   /* =====================================================
//      DYNAMIC GEOMETRY

//      Keep transformer cards at a readable fixed size.

//      If a client configures many transformers, the
//      topology grows horizontally instead of crushing
//      the cards.
//   ===================================================== */

//   const cardWidth = 172;
//   const columnGap = 28;

//   const equipmentWidth =
//     transformerCount > 0
//       ? transformerCount * cardWidth +
//         Math.max(
//           transformerCount - 1,
//           0
//         ) *
//           columnGap
//       : cardWidth;

//   const networkWidth =
//     Math.max(
//       760,
//       equipmentWidth
//     );


//   const transformerStyles = `
//     /* =====================================================
//        DYNAMIC TRANSFORMER FLOW

//                    TRANSFORMER PLANT
//                           │
//                           │
//               ────────────┼────────────
//                │     │     │     │
//               TR1   TR2   TR3   TR4 ...

//        Number of transformers is controlled by the
//        project configuration.

//        Static BMS / electrical topology.
//        No animation.
//        No moving cards.
//     ===================================================== */

//     .transformer-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       --transformer-card-width:
//         ${cardWidth}px;

//       --transformer-card-height:
//         136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 2.5vw, 40px)
//         24px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;

//       overflow: hidden;

//       --equipment-card-width:
//         var(
//           --transformer-card-width
//         );
//     }


//     /* =====================================================
//        HEADER / PARENT
//     ===================================================== */

//     .transformer-parent {
//       position: relative;

//       width:
//         clamp(
//           390px,
//           34vw,
//           470px
//         );

//       min-height: 108px;

//       padding: 15px 24px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       border:
//         1px solid #367fb1;

//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #153e72 0%,
//           #102f61 55%,
//           #0d2853 100%
//         );

//       box-shadow:
//         0 7px 18px
//         rgba(
//           11,
//           44,
//           75,
//           .13
//         );

//       z-index: 5;
//     }


//     .transformer-parent::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #3eb9d0;
//     }


//     .transformer-parent svg {
//       margin-bottom: 2px;

//       color: #72d1e2;
//     }


//     .transformer-parent span {
//       color: #8ec5ea;

//       font-size: 8px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .16em;
//     }


//     .transformer-parent h2 {
//       margin: 5px 0 2px;

//       color: #ffffff;

//       font-size: 19px;
//       font-weight: 700;

//       line-height: 1.15;

//       text-align: center;
//     }


//     .transformer-parent p {
//       margin: 0;

//       color: #b3cada;

//       font-size: 9px;
//       font-weight: 550;

//       line-height: 1.2;

//       letter-spacing: .03em;
//     }


//     /* =====================================================
//        SCROLLABLE WORKSPACE

//        Parent remains centered.

//        Only the electrical transformer topology needs
//        horizontal scrolling when the client configures
//        a large transformer count.
//     ===================================================== */

//     .transformer-scroll {
//       width: 100%;

//       overflow-x: auto;
//       overflow-y: hidden;

//       padding-bottom: 12px;
//     }


//     .transformer-scroll-inner {
//       width:
//         ${networkWidth}px;

//       min-width:
//         ${networkWidth}px;

//       margin: 0 auto;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//     }


//     /* =====================================================
//        PARENT → BUS
//     ===================================================== */

//     .transformer-stem {
//       width:
//         var(--wire-size);

//       height: 34px;

//       min-height: 34px;

//       flex: 0 0 34px;

//       background:
//         var(--wire);
//     }


//     /* =====================================================
//        NETWORK
//     ===================================================== */

//     .transformer-network {
//       position: relative;

//       width:
//         ${equipmentWidth}px;

//       min-width:
//         ${equipmentWidth}px;

//       margin: 0 auto;
//     }


//     /* =====================================================
//        DISTRIBUTION BUS

//        The horizontal line begins at the exact center
//        of the first transformer and ends at the exact
//        center of the last transformer.
//     ===================================================== */

//     .transformer-distribution {
//       position: relative;

//       width: 100%;

//       height: 36px;

//       min-height: 36px;
//     }


//     .transformer-bus {
//       position: absolute;

//       top: 0;

//       left:
//         ${cardWidth / 2}px;

//       right:
//         ${cardWidth / 2}px;

//       height:
//         var(--wire-size);

//       background:
//         var(--wire);

//       pointer-events: none;
//     }


//     /*
//       When there is only one transformer, the horizontal
//       bus does not need to extend anywhere.

//       This small center terminal keeps the main stem and
//       branch electrically aligned.
//     */

//     .transformer-bus--single {
//       left: 50%;
//       right: auto;

//       width:
//         var(--wire-size);

//       transform:
//         translateX(-50%);
//     }


//     /* =====================================================
//        DYNAMIC VERTICAL BRANCHES

//        Uses exactly the same width, card width and gap
//        as the equipment row below.
//     ===================================================== */

//     .transformer-branch-lines {
//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 36px;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             transformerCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       column-gap:
//         ${columnGap}px;

//       pointer-events: none;
//     }


//     .transformer-line-slot {
//       position: relative;

//       width:
//         ${cardWidth}px;

//       height: 36px;
//     }


//     .transformer-line-slot::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width:
//         var(--wire-size);

//       background:
//         var(--wire);

//       transform:
//         translateX(-50%);
//     }


//     /* =====================================================
//        TRANSFORMER CARDS
//     ===================================================== */

//     .transformer-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             transformerCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       column-gap:
//         ${columnGap}px;

//       align-items: start;

//       margin: 0;
//       padding: 0;

//       position: relative;

//       z-index: 3;
//     }


//     .transformer-branch {
//       position: relative;

//       width:
//         ${cardWidth}px;

//       min-width:
//         ${cardWidth}px;

//       display: flex;

//       justify-content: center;
//       align-items: flex-start;
//     }


//     .transformer-branch >
//     .eq-card {
//       width:
//         var(
//           --transformer-card-width
//         );

//       min-width:
//         var(
//           --transformer-card-width
//         );

//       max-width:
//         var(
//           --transformer-card-width
//         );

//       height:
//         var(
//           --transformer-card-height
//         );

//       min-height:
//         var(
//           --transformer-card-height
//         );

//       max-height:
//         var(
//           --transformer-card-height
//         );

//       position: relative;

//       z-index: 5;
//     }


//     /* =====================================================
//        CONNECTION TERMINAL
//     ===================================================== */

//     .transformer-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing:
//         border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background:
//         var(
//           --page-bg,
//           #07131e
//         );

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 7;
//     }


//     /* =====================================================
//        IMPORTANT:
//        DO NOT MOVE CARDS ON HOVER
//     ===================================================== */

//     .transformer-view
//     .eq-card:hover,

//     .transformer-view
//     .eq-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        EMPTY STATE
//     ===================================================== */

//     .transformer-empty {
//       width:
//         min(
//           520px,
//           calc(
//             100% - 32px
//           )
//         );

//       margin: 30px auto;

//       padding: 25px;

//       box-sizing:
//         border-box;

//       border:
//         1px solid
//         rgba(
//           80,
//           130,
//           160,
//           .28
//         );

//       border-radius: 4px;

//       color: #7893a4;

//       background:
//         rgba(
//           40,
//           80,
//           105,
//           .06
//         );

//       text-align: center;

//       font-size: 11px;
//     }


//     .transformer-empty strong {
//       display: block;

//       margin-bottom: 6px;

//       color: #dceaf1;

//       font-size: 14px;
//     }


//     /* =====================================================
//        LAPTOP
//     ===================================================== */

//     @media (
//       max-width: 1200px
//     ) {

//       .transformer-view {
//         padding-left: 20px;
//         padding-right: 20px;
//       }


//       .transformer-parent {
//         width: 390px;

//         min-height: 98px;
//       }
//     }


//     /* =====================================================
//        MOBILE / TABLET
//     ===================================================== */

//     @media (
//       max-width: 700px
//     ) {

//       .transformer-view {
//         padding:
//           16px
//           14px
//           24px;
//       }


//       .transformer-parent {
//         width:
//           min(
//             100%,
//             380px
//           );

//         min-height: 96px;
//       }


//       .transformer-parent h2 {
//         font-size: 16px;
//       }
//     }
//   `;


//   /* =====================================================
//      EMPTY CONFIGURATION
//   ===================================================== */

//   if (transformerCount === 0) {
//     return (
//       <div className="transformer-view">

//         <style>
//           {transformerStyles}
//         </style>

//         <div className="transformer-empty">

//           <strong>
//             No transformers configured
//           </strong>

//           Configure at least one
//           transformer for this project.

//         </div>

//       </div>
//     );
//   }


//   /* =====================================================
//      RENDER
//   ===================================================== */

//   return (
//     <div className="transformer-view">

//       <style>
//         {transformerStyles}
//       </style>


//       {/* ===============================================
//           TRANSFORMER PLANT
//       ================================================ */}

//       <div className="transformer-parent">

//         <Zap
//           size={26}
//           strokeWidth={1.8}
//         />

//         <span>
//           STEP-DOWN SUBSTATION
//         </span>

//         <h2>
//           {primaryVoltage}
//           {" / "}
//           {secondaryVoltage}
//           {" "}
//           TRANSFORMERS
//         </h2>

//         <p>
//           {transformerCount}
//           {" "}
//           TRANSFORMER
//           {transformerCount === 1
//             ? ""
//             : "S"}
//           {" "}
//           · DISTRIBUTION
//         </p>

//       </div>


//       {/* ===============================================
//           SCROLLABLE ELECTRICAL NETWORK
//       ================================================ */}

//       <div className="transformer-scroll">

//         <div className="transformer-scroll-inner">


//           {/* PARENT → BUS */}

//           <div className="transformer-stem" />


//           <div className="transformer-network">


//             {/* =========================================
//                 BUS + BRANCHES
//             ========================================== */}

//             <div className="transformer-distribution">

//               <div
//                 className={`transformer-bus ${
//                   transformerCount === 1
//                     ? "transformer-bus--single"
//                     : ""
//                 }`}
//               />


//               <div className="transformer-branch-lines">

//                 {transformers.map(
//                   (item) => (
//                     <div
//                       className="transformer-line-slot"
//                       key={`line-${item.id}`}
//                     />
//                   )
//                 )}

//               </div>

//             </div>


//             {/* =========================================
//                 TRANSFORMER EQUIPMENT
//             ========================================== */}

//             <div className="transformer-grid">

//               {transformers.map(
//                 (item) => (
//                   <div
//                     className="transformer-branch"
//                     key={item.id}
//                   >

//                     <EquipmentCard
//                       equipment={item}
//                       onOpen={
//                         onOpenEquipment
//                       }
//                     />

//                   </div>
//                 )
//               )}

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    4. LT KIOSK VIEW
// ========================================================= */

// function LTKioskView({
//   topology,
//   onOpenEquipment,
// }) {
//   const kiosks =
//     Array.isArray(topology?.equipment)
//       ? topology.equipment
//       : [];

//   const kioskCount =
//     kiosks.length;

//   const configuration =
//     topology?.configuration || {};

//   const voltage =
//     configuration.voltage ||
//     "433V";

//   const cardWidth = 172;
//   const columnGap = 0;

//   const equipmentWidth =
//     kioskCount > 0
//       ? kioskCount * cardWidth +
//         Math.max(
//           kioskCount - 1,
//           0
//         ) *
//           columnGap
//       : cardWidth;

//   const networkWidth =
//     Math.max(
//       760,
//       equipmentWidth
//     );

//   const kioskStyles = `
//     /* =====================================================
//        LT KIOSK FLOW

//                       LT KIOSKS
//                           │
//                           │
//         ┌────────┬────────┬┴───────┬────────┬────────┐
//         │        │        │        │        │        │
//      KIOSK-1  KIOSK-2  KIOSK-3  KIOSK-4  ...

//        Static electrical distribution topology.
//     ===================================================== */

//     .kiosk-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       --kiosk-card-width: ${cardWidth}px;
//       --kiosk-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 2.5vw, 40px)
//         24px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       overflow: hidden;

//       /*
//        Shared EquipmentCard uses this value.
//       */
//       --equipment-card-width:
//         var(--kiosk-card-width);
//     }


//     .kiosk-scroll {
//       width: 100%;

//       overflow-x: auto;
//       overflow-y: hidden;

//       padding-bottom: 12px;
//     }


//     .kiosk-scroll-inner {
//       width:
//         ${networkWidth}px;

//       min-width:
//         ${networkWidth}px;

//       margin: 0 auto;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//     }


//     /* =====================================================
//        PARENT LT KIOSK PANEL
//     ===================================================== */

//     .kiosk-parent {
//       position: relative;

//       width:
//         clamp(
//           380px,
//           32vw,
//           440px
//         );

//       min-height: 104px;

//       padding: 14px 22px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       border: 1px solid #367fb1;
//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #153e72 0%,
//           #102f61 55%,
//           #0d2853 100%
//         );

//       box-shadow:
//         0 7px 18px
//         rgba(11, 44, 75, .13);

//       z-index: 5;
//     }


//     /* TOP ACCENT */

//     .kiosk-parent::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #3eb9d0;
//     }


//     .kiosk-parent svg {
//       margin-bottom: 2px;

//       color: #72d1e2;
//     }


//     .kiosk-parent span {
//       color: #8ec5ea;

//       font-size: 8px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .16em;
//     }


//     .kiosk-parent h2 {
//       margin: 5px 0 2px;

//       color: #ffffff;

//       font-size: 19px;
//       font-weight: 700;

//       line-height: 1.15;

//       text-align: center;
//     }


//     .kiosk-parent p {
//       margin: 0;

//       color: #b3cada;

//       font-size: 9px;
//       font-weight: 550;

//       line-height: 1.2;

//       letter-spacing: .03em;
//     }


//     /* =====================================================
//        PARENT → DISTRIBUTION BUS
//     ===================================================== */

//     .kiosk-stem {
//       width: var(--wire-size);

//       height: 34px;
//       min-height: 34px;

//       flex: 0 0 34px;

//       background: var(--wire);
//     }


//     /* =====================================================
//        COMPLETE LT KIOSK NETWORK
//     ===================================================== */

//     .kiosk-network {
//       position: relative;

//       width:
//         ${equipmentWidth}px;

//       min-width:
//         ${equipmentWidth}px;

//       margin: 0 auto;
//     }


//     /* =====================================================
//        BUS + BRANCH AREA
//     ===================================================== */

//     .kiosk-distribution {
//       position: relative;

//       width: 100%;

//       height: 34px;
//       min-height: 34px;
//     }


//     /* =====================================================
//        HORIZONTAL BUS

//        The horizontal bus starts at the center of the
//        first kiosk and ends at the center of the last.
//     ===================================================== */

//     .kiosk-bus {
//       position: absolute;

//       top: 0;

//       left: ${cardWidth / 2}px;
//       right: ${cardWidth / 2}px;

//       height: var(--wire-size);

//       background: var(--wire);

//       pointer-events: none;
//     }


//     .kiosk-bus--single {
//       left: 50%;
//       right: auto;

//       width:
//         var(--wire-size);

//       transform:
//         translateX(-50%);
//     }


//     /* =====================================================
//        DYNAMIC VERTICAL DROPS

//        This grid is identical to the equipment grid.
//     ===================================================== */

//     .kiosk-branch-lines {
//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 34px;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             kioskCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       column-gap:
//         ${columnGap}px;

//       pointer-events: none;
//     }


//     .kiosk-line-slot {
//       position: relative;

//       width: 100%;
//       min-width: 0;

//       height: 100%;
//     }


//     .kiosk-line-slot::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       background: var(--wire);

//       transform:
//         translateX(-50%);
//     }


//     /* =====================================================
//        EQUIPMENT GRID

//        Same count-based geometry as connector grid.
//     ===================================================== */

//     .kiosk-grid {
//       position: relative;

//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             kioskCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       align-items: start;

//       column-gap:
//         ${columnGap}px;

//       margin: 0;
//       padding: 0;

//       z-index: 3;
//     }


//     .kiosk-branch {
//       position: relative;

//       width: 100%;
//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        MEDIUM EQUIPMENT CARDS
//     ===================================================== */

//     .kiosk-branch > .eq-card {
//       width:
//         var(--kiosk-card-width);

//       min-width:
//         var(--kiosk-card-width);

//       max-width:
//         var(--kiosk-card-width);

//       height:
//         var(--kiosk-card-height);

//       min-height:
//         var(--kiosk-card-height);

//       max-height:
//         var(--kiosk-card-height);

//       position: relative;

//       z-index: 5;
//     }


//     /* =====================================================
//        CONNECTION TERMINAL

//        Small fixed point where branch meets card.
//     ===================================================== */

//     .kiosk-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 7;
//     }


//     /* =====================================================
//        CARD MUST NOT MOVE
//        Keeps flow lines connected.
//     ===================================================== */

//     .kiosk-view .eq-card:hover,
//     .kiosk-view .eq-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//        1500px+
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .kiosk-view {
//         --kiosk-card-height: 142px;

//         padding-left: 50px;
//         padding-right: 50px;
//       }


//       .kiosk-parent {
//         width: 450px;
//         min-height: 110px;
//       }


//       .kiosk-stem {
//         height: 38px;
//         min-height: 38px;

//         flex-basis: 38px;
//       }


//       .kiosk-distribution {
//         height: 38px;
//         min-height: 38px;
//       }


//       .kiosk-branch-lines {
//         height: 38px;
//       }
//     }


//     /* =====================================================
//        STANDARD LAPTOP
//        1201px - 1499px
//     ===================================================== */

//     @media (
//       min-width: 1201px
//     ) and (
//       max-width: 1499px
//     ) {

//       .kiosk-view {
//         --kiosk-card-height: 136px;

//         padding-left: 24px;
//         padding-right: 24px;
//       }


//       .kiosk-parent {
//         width: 400px;
//         min-height: 98px;

//         padding: 13px 20px;
//       }


//       .kiosk-parent h2 {
//         font-size: 18px;
//       }


//       .kiosk-stem {
//         height: 30px;
//         min-height: 30px;

//         flex-basis: 30px;
//       }


//       .kiosk-distribution {
//         height: 30px;
//         min-height: 30px;
//       }


//       .kiosk-branch-lines {
//         height: 30px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP
//        901px - 1200px
//     ===================================================== */

//     @media (
//       min-width: 901px
//     ) and (
//       max-width: 1200px
//     ) {

//       .kiosk-view {
//         --kiosk-card-height: 132px;

//         align-items: flex-start;

//         padding-left: 20px;
//         padding-right: 20px;
//       }


//       .kiosk-parent {
//         width: 390px;
//         min-height: 96px;

//         align-self: center;
//       }


//       .kiosk-stem {
//         height: 28px;
//         min-height: 28px;

//         flex-basis: 28px;

//         align-self: center;
//       }


//       .kiosk-distribution {
//         height: 28px;
//         min-height: 28px;
//       }


//       .kiosk-branch-lines {
//         height: 28px;
//       }
//     }


//     /* =====================================================
//        TABLET / MOBILE

//        Don't destroy the topology by making cards tiny.
//        Allow horizontal scrolling.
//     ===================================================== */

//     @media (max-width: 900px) {

//       .kiosk-view {
//         --kiosk-card-height: 132px;

//         align-items: flex-start;
//         justify-content: flex-start;

//         padding:
//           16px
//           18px
//           24px;

//       }


//       .kiosk-parent {
//         width: 380px;
//         min-height: 96px;

//         align-self: center;
//       }


//       .kiosk-stem {
//         height: 28px;
//         min-height: 28px;

//         flex-basis: 28px;

//       }


//       .kiosk-distribution {
//         height: 28px;
//         min-height: 28px;
//       }


//       .kiosk-branch-lines {
//         height: 28px;
//       }
//     }
//   `;


//   return (
//     <div className="kiosk-view">
//       <style>{kioskStyles}</style>


//       {/* ===================================================
//           LT KIOSK PARENT
//       ==================================================== */}

//       <div className="kiosk-parent">

//         <PanelsTopLeft
//           size={26}
//           strokeWidth={1.8}
//         />

//         <span>
//           LOW TENSION DISTRIBUTION
//         </span>

//         <h2>
//           LT KIOSKS
//         </h2>

//         <p>
//           {voltage}
//           {" "}
//           DISTRIBUTION
//         </p>

//       </div>


//       <div className="kiosk-scroll">

//         <div className="kiosk-scroll-inner">


//           {/* =================================================
//               PARENT → DISTRIBUTION BUS
//           ================================================== */}

//           <div className="kiosk-stem" />


//           {/* =================================================
//               LT KIOSK NETWORK
//           ================================================== */}

//           <div className="kiosk-network">

//             {/* BUS + DROPS */}

//             <div className="kiosk-distribution">

//               <div
//                 className={`kiosk-bus ${
//                   kioskCount === 1
//                     ? "kiosk-bus--single"
//                     : ""
//                 }`}
//               />

//               <div className="kiosk-branch-lines">

//                 {kiosks.map(
//                   (item) => (
//                     <div
//                       className="kiosk-line-slot"
//                       key={`line-${item.id}`}
//                     />
//                   )
//                 )}

//               </div>

//             </div>


//             {/* ===============================================
//                 LT KIOSK EQUIPMENT
//             ================================================ */}

//             <div className="kiosk-grid">

//               {kiosks.map(
//                 (item) => (
//                   <div
//                     className="kiosk-branch"
//                     key={item.id}
//                   >
//                     <EquipmentCard
//                       equipment={item}
//                       onOpen={onOpenEquipment}
//                     />
//                   </div>
//                 )
//               )}

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    5. BUSDUCT VIEW
// ========================================================= */

// function BusductView({
//   topology,
//   onOpenEquipment,
// }) {
//   const busducts =
//     Array.isArray(topology?.equipment)
//       ? topology.equipment
//       : [];

//   const busductCount =
//     busducts.length;

//   const cardWidth = 172;
//   const columnGap = 0;

//   const equipmentWidth =
//     busductCount > 0
//       ? busductCount * cardWidth +
//         Math.max(
//           busductCount - 1,
//           0
//         ) *
//           columnGap
//       : cardWidth;

//   const networkWidth =
//     Math.max(
//       760,
//       equipmentWidth
//     );

//   const busductStyles = `
//     /* =====================================================
//        BUSDUCT FLOW

//                      LT BUSDUCTS
//                           │
//                           │
//         ┌────────┬────────┬┴───────┬────────┬────────┐
//         │        │        │        │        │        │
//       BUS-1    BUS-2    BUS-3    BUS-4    ...

//        Static BMS electrical distribution topology.
//     ===================================================== */

//     .busduct-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       --busduct-card-width: ${cardWidth}px;
//       --busduct-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 2.5vw, 40px)
//         24px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       overflow: hidden;

//       --equipment-card-width:
//         var(--busduct-card-width);
//     }


//     .busduct-scroll {
//       width: 100%;

//       overflow-x: auto;
//       overflow-y: hidden;

//       padding-bottom: 12px;
//     }


//     .busduct-scroll-inner {
//       width:
//         ${networkWidth}px;

//       min-width:
//         ${networkWidth}px;

//       margin: 0 auto;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//     }


//     /* =====================================================
//        BUSDUCT PARENT
//     ===================================================== */

//     .busduct-parent {
//       position: relative;

//       width:
//         clamp(
//           380px,
//           32vw,
//           440px
//         );

//       min-height: 104px;

//       padding: 14px 22px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       border: 1px solid #367fb1;
//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #153e72 0%,
//           #102f61 55%,
//           #0d2853 100%
//         );

//       box-shadow:
//         0 7px 18px
//         rgba(11, 44, 75, .13);

//       z-index: 5;
//     }


//     /* TOP ACCENT */

//     .busduct-parent::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #3eb9d0;
//     }


//     .busduct-parent svg {
//       margin-bottom: 2px;

//       color: #72d1e2;
//     }


//     .busduct-parent span {
//       color: #8ec5ea;

//       font-size: 8px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .16em;
//     }


//     .busduct-parent h2 {
//       margin: 5px 0 2px;

//       color: #ffffff;

//       font-size: 19px;
//       font-weight: 700;

//       line-height: 1.15;

//       text-align: center;
//     }


//     .busduct-parent p {
//       margin: 0;

//       color: #b3cada;

//       font-size: 9px;
//       font-weight: 550;

//       line-height: 1.2;

//       letter-spacing: .03em;
//     }


//     /* =====================================================
//        PARENT → BUS
//     ===================================================== */

//     .busduct-stem {
//       width: var(--wire-size);

//       height: 34px;
//       min-height: 34px;

//       flex: 0 0 34px;

//       background: var(--wire);
//     }


//     /* =====================================================
//        COMPLETE BUSDUCT NETWORK
//     ===================================================== */

//     .busduct-network {
//       position: relative;

//       width:
//         ${equipmentWidth}px;

//       min-width:
//         ${equipmentWidth}px;

//       margin: 0 auto;
//     }


//     /* =====================================================
//        DISTRIBUTION AREA
//     ===================================================== */

//     .busduct-distribution {
//       position: relative;

//       width: 100%;

//       height: 34px;
//       min-height: 34px;
//     }


//     /* =====================================================
//        HORIZONTAL BUS

//        The bus starts at the center of the first card
//        and finishes at the center of the last card.
//     ===================================================== */

//     .busduct-bus {
//       position: absolute;

//       top: 0;

//       left: ${cardWidth / 2}px;
//       right: ${cardWidth / 2}px;

//       height: var(--wire-size);

//       background: var(--wire);

//       pointer-events: none;
//     }


//     .busduct-bus--single {
//       left: 50%;
//       right: auto;

//       width:
//         var(--wire-size);

//       transform:
//         translateX(-50%);
//     }


//     /* =====================================================
//        DYNAMIC VERTICAL DROPS

//        Uses exactly the same grid as cards.
//     ===================================================== */

//     .busduct-branch-lines {
//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 34px;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             busductCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       column-gap:
//         ${columnGap}px;

//       pointer-events: none;
//     }


//     .busduct-line-slot {
//       position: relative;

//       width: 100%;
//       min-width: 0;

//       height: 100%;
//     }


//     .busduct-line-slot::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       background: var(--wire);

//       transform:
//         translateX(-50%);
//     }


//     /* =====================================================
//        BUSDUCT EQUIPMENT GRID

//        Same count-based columns as connector grid.
//     ===================================================== */

//     .busduct-grid {
//       position: relative;

//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             busductCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       align-items: start;

//       column-gap:
//         ${columnGap}px;

//       margin: 0;
//       padding: 0;

//       z-index: 3;
//     }


//     .busduct-branch {
//       position: relative;

//       width: 100%;
//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        MEDIUM BUSDUCT CARDS
//     ===================================================== */

//     .busduct-branch > .eq-card {
//       width:
//         var(--busduct-card-width);

//       min-width:
//         var(--busduct-card-width);

//       max-width:
//         var(--busduct-card-width);

//       height:
//         var(--busduct-card-height);

//       min-height:
//         var(--busduct-card-height);

//       max-height:
//         var(--busduct-card-height);

//       position: relative;

//       z-index: 5;
//     }


//     /* =====================================================
//        CONNECTION POINT
//     ===================================================== */

//     .busduct-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 7;
//     }


//     /* =====================================================
//        KEEP FLOW ATTACHED DURING HOVER
//     ===================================================== */

//     .busduct-view .eq-card:hover,
//     .busduct-view .eq-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .busduct-view {
//         --busduct-card-height: 142px;

//         padding-left: 50px;
//         padding-right: 50px;
//       }


//       .busduct-parent {
//         width: 450px;
//         min-height: 110px;
//       }


//       .busduct-stem {
//         height: 38px;
//         min-height: 38px;

//         flex-basis: 38px;
//       }


//       .busduct-distribution {
//         height: 38px;
//         min-height: 38px;
//       }


//       .busduct-branch-lines {
//         height: 38px;
//       }
//     }


//     /* =====================================================
//        STANDARD LAPTOP
//        1201px - 1499px
//     ===================================================== */

//     @media (
//       min-width: 1201px
//     ) and (
//       max-width: 1499px
//     ) {

//       .busduct-view {
//         --busduct-card-height: 136px;

//         padding-left: 24px;
//         padding-right: 24px;
//       }


//       .busduct-parent {
//         width: 400px;
//         min-height: 98px;

//         padding: 13px 20px;
//       }


//       .busduct-parent h2 {
//         font-size: 18px;
//       }


//       .busduct-stem {
//         height: 30px;
//         min-height: 30px;

//         flex-basis: 30px;
//       }


//       .busduct-distribution {
//         height: 30px;
//         min-height: 30px;
//       }


//       .busduct-branch-lines {
//         height: 30px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP
//        901px - 1200px
//     ===================================================== */

//     @media (
//       min-width: 901px
//     ) and (
//       max-width: 1200px
//     ) {

//       .busduct-view {
//         --busduct-card-height: 132px;

//         align-items: flex-start;

//         padding-left: 20px;
//         padding-right: 20px;
//       }


//       .busduct-parent {
//         width: 390px;
//         min-height: 96px;

//         align-self: center;
//       }


//       .busduct-stem {
//         height: 28px;
//         min-height: 28px;

//         flex-basis: 28px;

//         align-self: center;
//       }


//       .busduct-distribution {
//         height: 28px;
//         min-height: 28px;
//       }


//       .busduct-branch-lines {
//         height: 28px;
//       }
//     }


//     /* =====================================================
//        TABLET / MOBILE

//        Preserve readable cards and topology.
//     ===================================================== */

//     @media (max-width: 900px) {

//       .busduct-view {
//         --busduct-card-height: 132px;

//         align-items: flex-start;
//         justify-content: flex-start;

//         padding:
//           16px
//           18px
//           24px;

//       }


//       .busduct-parent {
//         width: 380px;
//         min-height: 96px;

//         align-self: center;
//       }


//       .busduct-stem {
//         height: 28px;
//         min-height: 28px;

//         flex-basis: 28px;

//       }


//       .busduct-distribution {
//         height: 28px;
//         min-height: 28px;
//       }


//       .busduct-branch-lines {
//         height: 28px;
//       }
//     }
//   `;


//   return (
//     <div className="busduct-view">
//       <style>{busductStyles}</style>


//       {/* ===================================================
//           BUSDUCT PARENT
//       ==================================================== */}

//       <div className="busduct-parent">

//         <Network
//           size={26}
//           strokeWidth={1.8}
//         />

//         <span>
//           LT POWER DISTRIBUTION
//         </span>

//         <h2>
//           LT BUSDUCTS
//         </h2>

//         <p>
//           433 V BUSDUCT / BUSBAR
//         </p>

//       </div>


//       <div className="busduct-scroll">

//         <div className="busduct-scroll-inner">


//           {/* =================================================
//               PARENT → DISTRIBUTION
//           ================================================== */}

//           <div className="busduct-stem" />


//           {/* =================================================
//               BUSDUCT NETWORK
//           ================================================== */}

//           <div className="busduct-network">

//             {/* MAIN BUS + DROPS */}

//             <div className="busduct-distribution">

//               <div
//                 className={`busduct-bus ${
//                   busductCount === 1
//                     ? "busduct-bus--single"
//                     : ""
//                 }`}
//               />

//               <div className="busduct-branch-lines">

//                 {busducts.map(
//                   (item) => (
//                     <div
//                       className="busduct-line-slot"
//                       key={`line-${item.id}`}
//                     />
//                   )
//                 )}

//               </div>

//             </div>


//             {/* ===============================================
//                 BUSDUCT EQUIPMENT
//             ================================================ */}

//             <div className="busduct-grid">

//               {busducts.map(
//                 (item) => (
//                   <div
//                     className="busduct-branch"
//                     key={item.id}
//                   >
//                     <EquipmentCard
//                       equipment={item}
//                       onOpen={onOpenEquipment}
//                     />
//                   </div>
//                 )
//               )}

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    6. PCC VIEW
//    PCC overview and internal panel stay entirely inside PCC.
// ========================================================= */

// const pccOverviewLabels = {
//   "pcc-1": "Wing A",
//   "pcc-2": "Wing B",
//   "pcc-3": "Chillers",
//   "pcc-4": "Chillers",
// };



// function getPccDemoTelemetry(circuit) {
//   const existing =
//     demoTelemetry[
//       circuit?.id
//     ];

//   if (existing) {
//     return existing;
//   }

//   /*
//     Frontend demo fallback for custom PCC equipment.

//     The values are deterministic from the circuit ID so the
//     same custom equipment does not change every render.
//     Replace this with live backend/IoT telemetry later.
//   */
//   const seed =
//     String(
//       circuit?.id ||
//       circuit?.name ||
//       "pcc-custom"
//     )
//       .split("")
//       .reduce(
//         (total, character) =>
//           total +
//           character.charCodeAt(0),
//         0
//       );

//   return {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,
//     voltage: 433,
//     current:
//       165 +
//       (seed % 86),
//     powerFactor:
//       Number(
//         (
//           0.95 +
//           (seed % 4) *
//             0.01
//         ).toFixed(2)
//       ),
//     kWh:
//       1180 +
//       (seed % 420),
//     kVAh:
//       1230 +
//       (seed % 460),
//     load:
//       48 +
//       (seed % 35),
//     breakerState:
//       circuit?.direction ===
//       "coupler"
//         ? "OPEN"
//         : "CLOSED",
//     direction:
//       circuit?.direction,
//     section:
//       circuit?.section,
//     fault: false,
//     trip: false,
//     warning: false,
//   };
// }


// function PCCView({
//   topology,
//   onOpenEquipment,
// }) {
//   const [selectedPanelId, setSelectedPanelId] =
//     useState(null);

//   const panels =
//     Array.isArray(topology?.panels)
//       ? topology.panels
//       : [];

//   const panelCount =
//     panels.length;

//   const panelCardWidth = 240;
//   const panelGap = 24;

//   const panelEquipmentWidth =
//     panelCount > 0
//       ? panelCount * panelCardWidth +
//         Math.max(
//           panelCount - 1,
//           0
//         ) *
//           panelGap
//       : panelCardWidth;

//   const panelNetworkWidth =
//     Math.max(
//       panelCardWidth,
//       panelEquipmentWidth
//     );


//   const selectedPanel =
//     panels.find(
//       (panel) =>
//         panel.id === selectedPanelId
//     );


//   /* =====================================================
//      PCC STYLES
//   ===================================================== */

//   const pccStyles = `
//     /* =====================================================
//        PCC ROOT
//     ===================================================== */

//     .pcc-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 2.5vw, 40px)
//         24px;

//       box-sizing: border-box;

//       overflow-x: auto;
//     }


//     /* =====================================================
//        PCC OVERVIEW PARENT
//     ===================================================== */

//     .pcc-parent {
//       position: relative;

//       width:
//         clamp(
//           380px,
//           32vw,
//           440px
//         );

//       min-height: 104px;

//       margin: 0 auto;

//       padding: 14px 22px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       overflow: hidden;

//       border:
//         1px solid #367fb1;

//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #153e72 0%,
//           #102f61 55%,
//           #0d2853 100%
//         );

//       box-shadow:
//         0 7px 18px
//         rgba(11, 44, 75, .13);

//       z-index: 5;
//     }


//     .pcc-parent::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #3eb9d0;
//     }


//     .pcc-parent svg {
//       margin-bottom: 2px;

//       color: #72d1e2;
//     }


//     .pcc-parent span {
//       color: #8ec5ea;

//       font-size: 8px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .16em;
//     }


//     .pcc-parent h2 {
//       margin: 5px 0 2px;

//       color: #ffffff;

//       font-size: 19px;
//       font-weight: 700;

//       line-height: 1.15;
//     }


//     .pcc-parent p {
//       margin: 0;

//       color: #b3cada;

//       font-size: 9px;
//       font-weight: 550;
//     }


//     /* =====================================================
//        PCC PARENT → MAIN BUS
//     ===================================================== */

//     .pcc-stem {
//       width:
//         var(--wire-size);

//       height: 34px;
//       min-height: 34px;

//       margin: 0 auto;

//       background:
//         var(--wire);
//     }


//     /* =====================================================
//        PCC OVERVIEW NETWORK
//     ===================================================== */

//     .pcc-overview-network {
//       width:
//         ${panelNetworkWidth}px;

//       min-width:
//         ${panelNetworkWidth}px;

//       margin: 0 auto;
//     }


//     .pcc-distribution {
//       position: relative;

//       width: 100%;

//       height: 34px;
//       min-height: 34px;
//     }


//     /*
//        The overview bus starts at the first panel
//        center and ends at the final panel center.
//     */

//     .pcc-bus {
//       position: absolute;

//       top: 0;

//       left:
//         ${panelCardWidth / 2}px;

//       right:
//         ${panelCardWidth / 2}px;

//       height:
//         var(--wire-size);

//       background:
//         var(--wire);
//     }


//     .pcc-bus--single {
//       left: 50%;
//       right: auto;

//       width:
//         var(--wire-size);

//       transform:
//         translateX(-50%);
//     }


//     .pcc-overview-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             panelCount,
//             1
//           )},
//           ${panelCardWidth}px
//         );

//       column-gap:
//         ${panelGap}px;

//       pointer-events: none;
//     }


//     .pcc-overview-line {
//       position: relative;
//     }


//     .pcc-overview-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width:
//         var(--wire-size);

//       transform:
//         translateX(-50%);

//       background:
//         var(--wire);
//     }


//     /* =====================================================
//        PCC OVERVIEW CARDS
//     ===================================================== */

//     .pcc-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             panelCount,
//             1
//           )},
//           ${panelCardWidth}px
//         );

//       column-gap:
//         ${panelGap}px;

//       align-items: start;
//     }


//     .pcc-branch {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     .pcc-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 7;
//     }


//     .pcc-panel-card {
//       position: relative;

//       width: 210px;
//       min-width: 210px;
//       max-width: 210px;

//       height: 136px;

//       margin: 0;

//       padding: 13px 12px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       overflow: hidden;

//       border:
//         1px solid #327ba2;

//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #174766,
//           #123b58 55%,
//           #0e3049
//         );

//       box-shadow:
//         0 5px 14px
//         rgba(10, 39, 59, .13);

//       cursor: pointer;

//       transition:
//         border-color .15s ease,
//         box-shadow .15s ease;
//     }


//     .pcc-panel-card:hover,
//     .pcc-panel-card:focus-visible {
//       transform: none;

//       outline: none;

//       border-color: #59bad0;

//       box-shadow:
//         0 7px 18px
//         rgba(10, 42, 64, .18);
//     }


//     .pcc-panel-card svg {
//       margin-bottom: 2px;

//       color: #71d0e2;
//     }


//     .pcc-panel-card span {
//       color: #87bddd;

//       font-size: 7px;
//       font-weight: 800;

//       letter-spacing: .12em;
//     }


//     .pcc-panel-card h3 {
//       margin:
//         5px 0 2px;

//       color: #ffffff;

//       font-size: 16px;
//       font-weight: 700;
//     }


//     .pcc-panel-card p {
//       margin: 0;

//       color: #b5cede;

//       font-size: 9px;
//     }


//     .pcc-panel-card strong {
//       margin-top: 6px;

//       color: #79dfb7;

//       font-size: 8px;
//       font-weight: 700;
//     }


//     /* =====================================================
//        INTERNAL PCC
//     ===================================================== */

//     .pcc-internal {
//       width: 100%;
//       min-width: 0;
//     }


//     .pcc-internal-head {
//       width: 100%;

//       margin-bottom: 20px;

//       display: flex;

//       align-items: center;

//       gap: 14px;
//     }


//     .pcc-internal-head button {
//       height: 36px;

//       padding:
//         0 12px;

//       display:
//         inline-flex;

//       align-items: center;

//       gap: 6px;

//       border:
//         1px solid #426780;

//       border-radius: 5px;

//       color: #dce9f2;

//       background: #173b56;

//       cursor: pointer;
//     }


//     .pcc-internal-head button:hover {
//       background: #19445f;

//       border-color: #4da8bd;
//     }


//     .pcc-internal-head span {
//       color: #748b9c;

//       font-size: 7px;
//       font-weight: 800;

//       letter-spacing: .13em;
//     }


//     .pcc-internal-head h2 {
//       margin:
//         2px 0;

//       color: #17354b;

//       font-size: 21px;
//       font-weight: 700;
//     }


//     .pcc-internal-head p {
//       margin: 0;

//       color: #718492;

//       font-size: 9px;
//     }


//     /* =====================================================
//        COMPLETE PCC SWITCHBOARD AREA

//        Lineup and Utility → UPS geometry share
//        the same width.

//        This is important because the Utility
//        connections must remain aligned with the
//        actual switchboard cells.
//     ===================================================== */

//     .pcc-switchboard-scroll {
//       width: 100%;

//       overflow-x: auto;

//       overflow-y: visible;

//       padding-bottom: 8px;
//     }


//     .pcc-switchboard {
//       width: 100%;

//       min-width: 760px;

//       position: relative;

//       margin: 0 auto;
//     }


//     .pcc-empty-panel {
//       width:
//         min(
//           520px,
//           calc(100% - 32px)
//         );

//       margin: 30px auto;

//       padding: 24px;

//       box-sizing:
//         border-box;

//       border:
//         1px solid
//         rgba(
//           80,
//           130,
//           160,
//           .28
//         );

//       border-radius: 4px;

//       color: #7893a4;

//       background:
//         rgba(
//           40,
//           80,
//           105,
//           .06
//         );

//       text-align: center;

//       font-size: 11px;
//     }


//     .pcc-empty-panel strong {
//       display: block;

//       margin-bottom: 6px;

//       color: #dceaf1;

//       font-size: 14px;
//     }


//     /* =====================================================
//        PCC LINEUP
//     ===================================================== */

//     .pcc-lineup {
//       --pcc-count: 14;

//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--pcc-count),
//           minmax(80px, 1fr)
//         );

//       gap: 0;

//       box-sizing: border-box;

//       border:
//         2px solid #1e6f9e;

//       background: #0e2c4e;
//     }


//     /* =====================================================
//        PCC CIRCUIT
//     ===================================================== */

//     .pcc-cell {
//       position: relative;

//       min-width: 0;

//       height: 122px;

//       margin: 0;

//       padding:
//         9px 5px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       overflow: hidden;

//       border: 0;

//       border-right:
//         1px solid
//         rgba(
//           93,
//           145,
//           177,
//           .46
//         );

//       color: #ffffff;

//       background: #102f54;

//       cursor: pointer;

//       transition:
//         background .14s ease;
//     }


//     .pcc-cell:last-child {
//       border-right: 0;
//     }


//     .pcc-cell--incoming {
//       background: #123a5d;
//     }


//     .pcc-cell--outgoing {
//       background: #102f54;
//     }


//     .pcc-cell--coupler {
//       background: #3d3828;
//     }


//     .pcc-cell:hover,
//     .pcc-cell:focus-visible {
//       transform: none;

//       outline: none;

//       background: #17486b;
//     }


//     .pcc-cell--coupler:hover,
//     .pcc-cell--coupler:focus-visible {
//       background: #51492f;
//     }


//     .pcc-cell > svg {
//       flex:
//         0 0 auto;

//       color: #6ecbdd;
//     }


//     .pcc-cell > small {
//       color: #7fa9c4;

//       font-size: 6px;
//       font-weight: 700;

//       line-height: 1;

//       letter-spacing: .04em;
//     }


//     .pcc-cell > strong {
//       width: 100%;

//       margin:
//         4px 0 2px;

//       overflow: hidden;

//       color: #ffffff;

//       font-size: 8px;
//       font-weight: 700;

//       line-height: 11px;

//       text-align: center;

//       display:
//         -webkit-box;

//       -webkit-line-clamp: 2;
//       -webkit-box-orient: vertical;
//     }


//     .pcc-cell > em {
//       color: #79dfb7;

//       font-size: 7px;
//       font-weight: 700;

//       line-height: 1;

//       font-style: normal;
//     }


//     /* =====================================================
//        PCC CIRCUIT HOVER
//     ===================================================== */

//     .pcc-cell-readings {
//       position: absolute;

//       inset: 0;

//       z-index: 20;

//       padding:
//         8px 7px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       overflow: hidden;

//       background:
//         linear-gradient(
//           145deg,
//           #123f5d,
//           #0d324c
//         );

//       opacity: 0;

//       visibility: hidden;

//       pointer-events: none;

//       transition:
//         opacity .13s ease,
//         visibility .13s ease;
//     }


//     .pcc-cell:hover
//     .pcc-cell-readings,

//     .pcc-cell:focus-visible
//     .pcc-cell-readings {
//       opacity: 1;

//       visibility: visible;
//     }


//     .pcc-cell-readings-title {
//       height: 15px;
//       min-height: 15px;

//       margin-bottom: 3px;

//       color: #73d0e1;

//       font-size: 6px;
//       font-weight: 800;

//       line-height: 15px;

//       text-align: left;

//       letter-spacing: .08em;

//       white-space: nowrap;
//     }


//     .pcc-cell-readings-grid {
//       min-height: 0;

//       flex: 1;

//       display: grid;

//       grid-template-rows:
//         repeat(
//           5,
//           minmax(0, 1fr)
//         );

//       overflow: hidden;
//     }


//     .pcc-cell-reading {
//       min-height: 0;

//       display: grid;

//       grid-template-columns:
//         minmax(0, 1fr)
//         minmax(28px, auto);

//       align-items: center;

//       column-gap: 4px;
//     }


//     .pcc-cell-reading span {
//       min-width: 0;

//       overflow: hidden;

//       color: #9eb9c7;

//       font-size: 6px;
//       font-weight: 550;

//       text-align: left;

//       text-overflow: ellipsis;

//       white-space: nowrap;
//     }


//     .pcc-cell-reading strong {
//       min-width: 0;

//       margin: 0;

//       overflow: hidden;

//       color: #ffffff;

//       font-size: 6.5px;
//       font-weight: 700;

//       text-align: right;

//       text-overflow: ellipsis;

//       white-space: nowrap;
//     }


//     /* =====================================================
//        UTILITY → UPS SUPPLY
//        Exact PCC1/PCC2 14-cell switchboard geometry.

//        Utility 1 = cell 6
//        Utility 2 = cell 13
//        UPS take-off = exact midpoint between both utilities.
//     ===================================================== */

//     .pcc-utility-supply {
//       --utility-row-height: 48px;
//       position: relative;
//       width: 100%;
//       height: var(--utility-row-height);
//       pointer-events: none;
//     }

//     .pcc-utility-drop {
//       position: absolute;
//       top: 0;
//       width: var(--wire-size);
//       height: 18px;
//       transform: translateX(-50%);
//       background: var(--wire);
//     }

//     .pcc-utility-horizontal {
//       position: absolute;
//       top: 16px;
//       height: var(--wire-size);
//       background: var(--wire);
//     }

//     .pcc-utility-to-ups {
//       position: absolute;
//       top: 16px;
//       width: var(--wire-size);
//       height:
//         calc(
//           var(--utility-row-height) -
//           16px
//         );
//       transform:
//         translateX(-50%);
//       background: var(--wire);
//     }


//     /* =====================================================
//        UPS SECTION
//     ===================================================== */

//     .pcc-ups-area {
//       position: relative;

//       width: 100%;

//       height: auto;

//       min-height: 260px;
//     }


//     /* =====================================================
//        UPS PARENT ROW

//        Parent is positioned under the Utility
//        midpoint.
//     ===================================================== */

//     .pcc-ups-parent-row {
//       position: relative;

//       width: 100%;

//       height: 82px;
//     }


//     .pcc-ups-parent {
//       position: absolute;

//       top: 0;

//       left: var(--utility-midpoint, 50%);

//       width: 220px;
//       height: 82px;

//       padding: 8px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 2px;

//       transform:
//         translateX(-50%);

//       border:
//         1px solid #2879ad;

//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #123d63,
//           #0e3154
//         );

//       z-index: 5;
//     }


//     .pcc-ups-parent svg {
//       color: #71d0e2;
//     }


//     .pcc-ups-parent h3 {
//       margin:
//         3px 0 0;

//       font-size: 14px;
//       font-weight: 700;
//     }


//     .pcc-ups-parent span {
//       color: #a9c4d5;

//       font-size: 7px;
//       font-weight: 700;

//       letter-spacing: .08em;
//     }


//     /* =====================================================
//        UPS PARENT → UPS SUBNETWORK
//     ===================================================== */

//     .pcc-ups-parent-stem {
//       position: relative;

//       width: 100%;

//       height: 28px;
//     }


//     .pcc-ups-parent-stem::before {
//       content: "";

//       position: absolute;

//       top: 0;

//       left: var(--utility-midpoint, 50%);

//       width:
//         var(--wire-size);

//       height: 28px;

//       transform:
//         translateX(-50%);

//       background:
//         var(--wire);
//     }


//     /* =====================================================
//        CENTERED UPS SUBNETWORK

//        We position the whole four-unit network under
//        the UPS parent instead of stretching it across
//        the complete PCC switchboard.
//     ===================================================== */

//     .pcc-ups-network {
//       position: absolute;

//       top: 110px;

//       left: var(--utility-midpoint, 50%);

//       width: 700px;

//       max-width: calc(100% - 24px);

//       transform:
//         translateX(-50%);
//     }


//     .pcc-ups-distribution {
//       position: relative;

//       width: 100%;

//       height: 28px;
//     }


//     /*
//        Four columns:

//        first = 1/8
//        last  = 7/8
//     */

//     .pcc-ups-bus {
//       position: absolute;

//       top: 0;

//       left:
//         calc(100% / (var(--ups-count) * 2));

//       right:
//         calc(100% / (var(--ups-count) * 2));

//       height:
//         var(--wire-size);

//       background:
//         var(--wire);
//     }


//     .pcc-ups-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--ups-count),
//           minmax(0, 1fr)
//         );

//       pointer-events: none;
//     }


//     .pcc-ups-line {
//       position: relative;
//     }


//     .pcc-ups-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width:
//         var(--wire-size);

//       transform:
//         translateX(-50%);

//       background:
//         var(--wire);
//     }


//     /* =====================================================
//        UPS UNIT GRID
//     ===================================================== */

//     .pcc-ups-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--ups-count),
//           minmax(0, 1fr)
//         );

//       gap: 0;
//     }


//     .pcc-ups-unit-wrap {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     .pcc-ups-unit-wrap::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 5px;
//       height: 5px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /* =====================================================
//        UPS CARD
//     ===================================================== */

//     .pcc-ups-unit {
//       position: relative;

//       width: 155px;
//       min-width: 155px;
//       max-width: 155px;
//       height: 108px;

//       margin: 0;

//       padding:
//         9px 10px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       overflow: hidden;

//       border:
//         1px solid #2d729d;

//       border-radius: 5px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #143d63,
//           #103354
//         );

//       cursor: pointer;

//       transition:
//         border-color .14s ease,
//         box-shadow .14s ease;
//     }


//     .pcc-ups-unit:hover,
//     .pcc-ups-unit:focus-visible {
//       transform: none;

//       outline: none;

//       border-color: #58b8ce;

//       box-shadow:
//         0 5px 14px
//         rgba(10, 44, 66, .15);
//     }


//     .pcc-ups-unit > svg {
//       color: #71d0e2;
//     }


//     .pcc-ups-unit > strong {
//       margin-top: 3px;

//       color: #ffffff;

//       font-size: 11px;
//       font-weight: 700;
//     }


//     .pcc-ups-unit > span {
//       color: #a9c4d5;

//       font-size: 7.5px;
//     }


//     /* =====================================================
//        UPS HOVER READINGS
//     ===================================================== */

//     .pcc-ups-readings {
//       position: absolute;

//       inset: 0;

//       z-index: 20;

//       padding:
//         7px 9px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       overflow: hidden;

//       background:
//         linear-gradient(
//           145deg,
//           #123f5d,
//           #0c304a
//         );

//       opacity: 0;

//       visibility: hidden;

//       pointer-events: none;

//       transition:
//         opacity .13s ease,
//         visibility .13s ease;
//     }


//     .pcc-ups-unit:hover
//     .pcc-ups-readings,

//     .pcc-ups-unit:focus-visible
//     .pcc-ups-readings {
//       opacity: 1;

//       visibility: visible;
//     }


//     .pcc-ups-readings-title {
//       height: 15px;
//       min-height: 15px;

//       margin-bottom: 2px;

//       color: #73d0e1;

//       font-size: 6px;
//       font-weight: 800;

//       line-height: 15px;

//       text-align: left;

//       letter-spacing: .08em;
//     }


//     .pcc-ups-readings-grid {
//       min-height: 0;

//       flex: 1;

//       display: flex;
//       flex-direction: column;

//       gap: 2px;

//       overflow-x: hidden;
//       overflow-y: auto;

//       padding-right: 2px;

//       scrollbar-width: thin;
//     }


//     .pcc-ups-reading {
//       min-height: 14px;

//       display: grid;

//       grid-template-columns:
//         minmax(0, 1fr)
//         minmax(42px, auto);

//       align-items: center;

//       column-gap: 5px;
//     }


//     .pcc-ups-reading span {
//       min-width: 0;

//       overflow: hidden;

//       color: #a5bdc9;

//       font-size: 6px;

//       text-align: left;

//       text-overflow: ellipsis;

//       white-space: nowrap;
//     }


//     .pcc-ups-reading strong {
//       min-width: 0;

//       margin: 0;

//       overflow: hidden;

//       color: #ffffff;

//       font-size: 6.5px;
//       font-weight: 700;

//       text-align: right;

//       text-overflow: ellipsis;

//       white-space: nowrap;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .pcc-overview-network {
//         width:
//           ${panelNetworkWidth}px;

//         min-width:
//           ${panelNetworkWidth}px;
//       }


//       .pcc-panel-card {
//         height: 142px;
//       }


//       .pcc-switchboard {
//         min-width: 1260px;
//       }


//       .pcc-lineup {
//         grid-template-columns:
//           repeat(
//             var(--pcc-count),
//             minmax(90px, 1fr)
//           );
//       }


//       .pcc-cell {
//         height: 126px;
//       }


//       .pcc-ups-network {
//         width: 760px;
//       }


//       .pcc-ups-unit {
//         width: 170px;
//         min-width: 170px;
//         max-width: 170px;
//         height: 112px;
//       }
//     }


//     /* =====================================================
//        NORMAL LAPTOP
//     ===================================================== */

//     @media (
//       min-width: 1101px
//     ) and (
//       max-width: 1499px
//     ) {

//       .pcc-panel-card {
//         height: 136px;
//       }


//       .pcc-switchboard {
//         min-width: 760px;
//       }


//       .pcc-ups-network {
//         width: 700px;
//       }


//       .pcc-ups-unit {
//         width: 155px;
//         min-width: 155px;
//         max-width: 155px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP / TABLET
//     ===================================================== */

//     @media (max-width: 1100px) {

//       .pcc-view {
//         padding-left: 18px;
//         padding-right: 18px;
//       }


//       .pcc-overview-network {
//         width:
//           ${panelNetworkWidth}px;

//         min-width:
//           ${panelNetworkWidth}px;
//       }


//       .pcc-panel-card {
//         height: 132px;
//       }


//       .pcc-switchboard {
//         width: 1120px;
//         min-width: 760px;
//       }


//       .pcc-ups-network {
//         width: 700px;
//       }
//     }
//   `;


//   /* =====================================================
//      DIRECTION ICON
//   ===================================================== */

//   const DirectionIcon = ({
//     direction,
//   }) => {
//     if (direction === "incoming") {
//       return (
//         <ArrowDown
//           size={15}
//           strokeWidth={1.8}
//         />
//       );
//     }


//     if (direction === "outgoing") {
//       return (
//         <ArrowUp
//           size={15}
//           strokeWidth={1.8}
//         />
//       );
//     }


//     return (
//       <ArrowLeftRight
//         size={16}
//         strokeWidth={1.8}
//       />
//     );
//   };


//   /* =====================================================
//      CIRCUIT READINGS
//   ===================================================== */

//   const getCircuitReadings = (
//     circuit,
//     data = {}
//   ) => {
//     return getPreview(
//       {
//         ...circuit,

//         type:
//           circuit.type ||
//           (
//             circuit.direction ===
//             "coupler"
//               ? "coupler"
//               : "pcc-circuit"
//           ),
//       },

//       {
//         ...data,

//         status:
//           data?.status ||
//           "LIVE",
//       }
//     );
//   };


//   /* =====================================================
//      UPS UNITS
//   ===================================================== */

//   const upsUnitTemplates = [
//     {
//       id: "ups-30-1",
//       name: "30kVA-1",
//       label: "30 kVA",
//       type: "ups",
//     },

//     {
//       id: "ups-30-2",
//       name: "30kVA-2",
//       label: "30 kVA",
//       type: "ups",
//     },

//     {
//       id: "ups-10-1",
//       name: "10kVA-1",
//       label: "10 kVA",
//       type: "ups",
//     },

//     {
//       id: "ups-10-2",
//       name: "10kVA-2",
//       label: "10 kVA",
//       type: "ups",
//     },
//   ];



//   /* =====================================================
//      INTERNAL PCC VIEW
//   ===================================================== */

//   if (selectedPanel) {
//     const panelCircuits =
//       Array.isArray(
//         selectedPanel.circuits
//       )
//         ? selectedPanel.circuits
//         : [];

//     /*
//        Explicit UPS configuration is important:

//        - upsUnits: [] means this PCC intentionally has NO UPS.
//        - missing upsUnits means legacy/reference topology, where
//          PCC1/PCC2 may use the original four UPS units.
//     */
//     const hasUpsConfiguration =
//       Array.isArray(
//         selectedPanel.upsUnits
//       );

//     const configuredUpsUnits =
//       hasUpsConfiguration
//         ? selectedPanel.upsUnits
//         : [];

//     const units =
//       hasUpsConfiguration
//         ? upsUnitTemplates.filter(
//             (unit) =>
//               configuredUpsUnits.includes(
//                 unit.id
//               )
//           )
//         : (
//             selectedPanel.id === "pcc-1" ||
//             selectedPanel.id === "pcc-2"
//           )
//         ? upsUnitTemplates
//         : [];

//     const hasUps =
//       units.length > 0;

//     /*
//        UPS supply must come from the actual configured
//        Utility 1 and Utility 2 cells in this PCC lineup.
//     */
//     const isUtilityCircuit = (circuit) => {
//       const role = String(circuit?.role || circuit?.purpose || "").toLowerCase();
//       const name = String(circuit?.name || "").toLowerCase();
//       const id = String(circuit?.id || "").toLowerCase();
//       return circuit?.feedsUps === true || role === "ups-source" || role === "utility" || name.includes("utility") || id.includes("utility");
//     };

//     const utilityCircuits = panelCircuits.filter(isUtilityCircuit);
//     const utility1Circuit = utilityCircuits[0] || null;
//     const utility2Circuit = utilityCircuits[1] || null;

//     const utility1Index =
//       utility1Circuit
//         ? panelCircuits.findIndex(
//             (circuit) =>
//               circuit.id ===
//               utility1Circuit.id
//           )
//         : -1;

//     const utility2Index =
//       utility2Circuit
//         ? panelCircuits.findIndex(
//             (circuit) =>
//               circuit.id ===
//               utility2Circuit.id
//           )
//         : -1;

//     const utilityIndexes =
//       [
//         utility1Index,
//         utility2Index,
//       ].filter(
//         (index) =>
//           index >= 0
//       );

//     const hasUtilitySupply =
//       utilityIndexes.length > 0;

//     const pccCircuitCount =
//       Math.max(
//         panelCircuits.length,
//         1
//       );

//     const utilityCenters =
//       utilityIndexes.map(
//         (index) =>
//           (
//             (
//               index +
//               0.5
//             ) /
//             pccCircuitCount
//           ) *
//           100
//       );

//     const utilityLeft =
//       utilityCenters.length > 0
//         ? Math.min(
//             ...utilityCenters
//           )
//         : 50;

//     const utilityRight =
//       utilityCenters.length > 0
//         ? Math.max(
//             ...utilityCenters
//           )
//         : 50;

//     const utilityMidpoint =
//       (
//         utilityLeft +
//         utilityRight
//       ) /
//       2;


//     return (
//       <div className="pcc-view">
//         <style>
//           {pccStyles}
//         </style>


//         <div className="pcc-internal">

//           {/* ===============================================
//               HEADER
//           ================================================ */}

//           <div className="pcc-internal-head">

//             <button
//               type="button"
//               onClick={() =>
//                 setSelectedPanelId(
//                   null
//                 )
//               }
//             >
//               <ArrowLeft
//                 size={15}
//               />

//               PCC Main
//             </button>


//             <div>

//               <span>
//                 POWER CONTROL CENTRE
//               </span>


//               <h2>
//                 {selectedPanel.name}
//               </h2>


//               <p>
//                 {
//                   pccOverviewLabels[
//                     selectedPanel.id
//                   ] ||
//                   selectedPanel.label
//                 }
//               </p>

//             </div>

//           </div>


//           {/* ===============================================
//               SWITCHBOARD + UPS

//               They are inside the same width container
//               so the Utility flow lines remain aligned.
//           ================================================ */}

//           <div className="pcc-switchboard-scroll">

//             <div
//               className="pcc-switchboard"
//               style={{
//                 "--pcc-count": Math.max(panelCircuits.length, 1),
//                 "--utility-midpoint": `${utilityMidpoint}%`,
//                 minWidth: `${Math.max(760, panelCircuits.length * 92)}px`,
//               }}
//             >

//               {/* ===========================================
//                   PCC LINEUP
//               ============================================ */}

//               {panelCircuits.length ===
//                 0 &&
//               !hasUps && (
//                 <div className="pcc-empty-panel">
//                   <strong>
//                     Internal topology not configured
//                   </strong>

//                   This PCC panel is available in the
//                   project, but no verified internal
//                   circuit layout is defined for it.
//                 </div>
//               )}

//               {panelCircuits.length >
//                 0 && (
//                 <div
//                   className="pcc-lineup"
//                   style={{
//                     "--pcc-count":
//                       panelCircuits.length,
//                   }}
//                 >

//                   {panelCircuits.map(
//                     (circuit) => {

//                     const data =
//                       getPccDemoTelemetry(
//                         circuit
//                       );


//                     const readings =
//                       getCircuitReadings(
//                         circuit,
//                         data
//                       );


//                     const status =
//                       String(
//                         data?.status ||
//                         "LIVE"
//                       ).toUpperCase();


//                     const isOff =
//                       status ===
//                       "OFF";


//                     return (
//                       <button
//                         type="button"

//                         className={
//                           `pcc-cell pcc-cell--${circuit.direction}`
//                         }

//                         key={
//                           circuit.id
//                         }

//                         onClick={() =>
//                           onOpenEquipment?.({
//                             ...circuit,

//                             type:
//                               circuit.type ||
//                               (
//                                 circuit.direction ===
//                                 "coupler"
//                                   ? "coupler"
//                                   : "pcc-circuit"
//                               ),

//                             telemetry:
//                               data,
//                           })
//                         }
//                       >

//                         {/* NORMAL CONTENT */}

//                         <DirectionIcon
//                           direction={
//                             circuit.direction
//                           }
//                         />


//                         <small>
//                           {
//                             circuit.direction ===
//                             "coupler"
//                               ? "B/C"
//                               : circuit.direction
//                                   .toUpperCase()
//                           }
//                         </small>


//                         <strong
//                           title={
//                             circuit.name
//                           }
//                         >
//                           {
//                             circuit.name
//                           }
//                         </strong>


//                         <em>
//                           ●{" "}
//                           {
//                             isOff
//                               ? "OFF"
//                               : "LIVE"
//                           }
//                         </em>


//                         {/* =================================
//                             HOVER READINGS
//                         ================================== */}

//                         {readings.length >
//                           0 && (

//                           <div className="pcc-cell-readings">

//                             <div className="pcc-cell-readings-title">
//                               LIVE READINGS
//                             </div>


//                             <div className="pcc-cell-readings-grid">

//                               {readings
//                                 .slice(
//                                   0,
//                                   5
//                                 )
//                                 .map(
//                                   (
//                                     [
//                                       label,
//                                       value,
//                                     ],
//                                     index
//                                   ) => (

//                                     <div
//                                       className="pcc-cell-reading"

//                                       key={
//                                         `${label}-${index}`
//                                       }
//                                     >

//                                       <span
//                                         title={
//                                           label
//                                         }
//                                       >
//                                         {
//                                           label
//                                         }
//                                       </span>


//                                       <strong
//                                         title={
//                                           String(
//                                             value
//                                           )
//                                         }
//                                       >
//                                         {
//                                           value
//                                         }
//                                       </strong>

//                                     </div>

//                                   )
//                                 )}

//                             </div>

//                           </div>
//                         )}

//                       </button>
//                     );
//                     }
//                   )}

//                 </div>
//               )}


//               {/* ===========================================
//                   PCC1 / PCC2 ONLY

//                   UTILITY 1 + UTILITY 2 → UPS
//               ============================================ */}

//               {hasUps && (
//                 <>

//                   {/* =======================================
//                       UTILITY SUPPLY CONNECTION
//                   ======================================== */}

//                   {hasUtilitySupply && (
//                     <div className="pcc-utility-supply">
//                       {utilityCenters.map(
//                         (center, index) => (
//                           <div
//                             className="pcc-utility-drop"
//                             key={`utility-drop-${index}`}
//                             style={{
//                               left:
//                                 `${center}%`,
//                             }}
//                           />
//                         )
//                       )}

//                       {utilityCenters.length > 1 && (
//                         <div
//                           className="pcc-utility-horizontal"
//                           style={{
//                             left:
//                               `${utilityLeft}%`,
//                             width:
//                               `${
//                                 utilityRight -
//                                 utilityLeft
//                               }%`,
//                           }}
//                         />
//                       )}

//                       <div
//                         className="pcc-utility-to-ups"
//                         style={{
//                           left:
//                             `${utilityMidpoint}%`,
//                         }}
//                       />
//                     </div>
//                   )}


//                   {/* =======================================
//                       UPS AREA
//                   ======================================== */}

//                   <div className="pcc-ups-area">

//                     {/* UPS PARENT */}

//                     <div className="pcc-ups-parent-row">

//                       <div className="pcc-ups-parent">

//                         <BatteryCharging
//                           size={21}
//                           strokeWidth={1.8}
//                         />


//                         <h3>
//                           UPS
//                         </h3>


//                         <span>
//                           SUPPLY
//                         </span>

//                       </div>

//                     </div>


//                     {/* UPS → DISTRIBUTION */}

//                     <div className="pcc-ups-parent-stem" />


//                     {/* =====================================
//                         FOUR UPS UNITS
//                     ====================================== */}

//                     <div
//                       className="pcc-ups-network"
//                       style={{
//                         "--ups-count":
//                           units.length,
//                       }}
//                     >

//                       <div className="pcc-ups-distribution">

//                         <div className="pcc-ups-bus" />


//                         <div className="pcc-ups-lines">

//                           {units.map(
//                             (unit) => (

//                               <div
//                                 className="pcc-ups-line"

//                                 key={
//                                   `line-${unit.id}`
//                                 }
//                               />

//                             )
//                           )}

//                         </div>

//                       </div>


//                       <div className="pcc-ups-grid">

//                         {units.map(
//                           (unit) => {

//                             const data =
//                               demoTelemetry[
//                                 unit.id
//                               ] || {};


//                             const readings =
//                               getPreview(
//                                 unit,
//                                 data
//                               );


//                             return (
//                               <div
//                                 className="pcc-ups-unit-wrap"

//                                 key={
//                                   unit.id
//                                 }
//                               >

//                                 <button
//                                   type="button"

//                                   className="pcc-ups-unit"

//                                   onClick={() =>
//                                     onOpenEquipment?.({
//                                       ...unit,

//                                       telemetry:
//                                         data,
//                                     })
//                                   }
//                                 >

//                                   {/* NORMAL UPS CARD */}

//                                   <BatteryCharging
//                                     size={18}
//                                     strokeWidth={1.8}
//                                   />


//                                   <strong>
//                                     {
//                                       unit.name
//                                     }
//                                   </strong>


//                                   <span>
//                                     {
//                                       unit.label
//                                     }
//                                   </span>


//                                   {/* =======================
//                                       UPS HOVER READINGS
//                                   ======================== */}

//                                   {readings.length >
//                                     0 && (

//                                     <div className="pcc-ups-readings">

//                                       <div className="pcc-ups-readings-title">
//                                         LIVE READINGS
//                                       </div>


//                                       <div className="pcc-ups-readings-grid">

//                                         {readings.map(
//                                           (
//                                             [
//                                               label,
//                                               value,
//                                             ],
//                                             index
//                                           ) => (

//                                             <div
//                                               className="pcc-ups-reading"

//                                               key={
//                                                 `${label}-${index}`
//                                               }
//                                             >

//                                               <span
//                                                 title={
//                                                   label
//                                                 }
//                                               >
//                                                 {
//                                                   label
//                                                 }
//                                               </span>


//                                               <strong
//                                                 title={
//                                                   String(
//                                                     value
//                                                   )
//                                                 }
//                                               >
//                                                 {
//                                                   value
//                                                 }
//                                               </strong>

//                                             </div>

//                                           )
//                                         )}

//                                       </div>

//                                     </div>
//                                   )}

//                                 </button>

//                               </div>
//                             );
//                           }
//                         )}

//                       </div>

//                     </div>

//                   </div>

//                 </>
//               )}

//             </div>

//           </div>

//         </div>
//       </div>
//     );
//   }


//   /* =====================================================
//      PCC MAIN OVERVIEW
//   ===================================================== */

//   return (
//     <div className="pcc-view">
//       <style>
//         {pccStyles}
//       </style>


//       {/* ===============================================
//           PCC PARENT
//       ================================================ */}

//       <div className="pcc-parent">

//         <Cpu
//           size={26}
//           strokeWidth={1.8}
//         />


//         <span>
//           MAIN LT DISTRIBUTION
//         </span>


//         <h2>
//           PCC
//         </h2>


//         <p>
//           MAIN LT DISTRIBUTION
//         </p>

//       </div>


//       {/* ===============================================
//           PCC → PANEL BUS
//       ================================================ */}

//       <div className="pcc-stem" />


//       <div className="pcc-overview-network">

//         <div className="pcc-distribution">

//           <div
//             className={`pcc-bus ${
//               panelCount === 1
//                 ? "pcc-bus--single"
//                 : ""
//             }`}
//           />


//           <div className="pcc-overview-lines">

//             {panels.map(
//               (panel) => (

//                 <div
//                   className="pcc-overview-line"

//                   key={
//                     `line-${panel.id}`
//                   }
//                 />

//               )
//             )}

//           </div>

//         </div>


//         {/* =============================================
//             PCC PANEL EQUIPMENT
//         ============================================== */}

//         <div className="pcc-grid">

//           {panels.map(
//             (panel) => (

//               <div
//                 className="pcc-branch"

//                 key={
//                   panel.id
//                 }
//               >

//                 <button
//                   type="button"

//                   className="pcc-panel-card"

//                   onClick={() =>
//                     setSelectedPanelId(
//                       panel.id
//                     )
//                   }
//                 >

//                   <Cpu
//                     size={24}
//                     strokeWidth={1.8}
//                   />


//                   <span>
//                     POWER CONTROL CENTRE
//                   </span>


//                   <h3>
//                     {
//                       panel.name
//                     }
//                   </h3>


//                   <p>
//                     {
//                       pccOverviewLabels[
//                         panel.id
//                       ] ||
//                       panel.label
//                     }
//                   </p>


//                   <strong>
//                     ● LIVE
//                   </strong>

//                 </button>

//               </div>

//             )
//           )}

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    7. RAISING MAIN VIEW
// ========================================================= */

// function RaisingMainView({
//   topology,
//   onOpenEquipment,
// }) {
//   const equipment =
//     Array.isArray(topology?.equipment)
//       ? topology.equipment
//       : [];

//   const groups = [
//     {
//       title: "WING A",
//       items: equipment.slice(0, 2),
//     },
//     {
//       title: "WING B",
//       items: equipment.slice(2, 4),
//     },
//     {
//       title: "CONFIGURED",
//       items: equipment.slice(4),
//     },
//   ].filter(
//     (group) => group.items.length > 0
//   );

//   const groupCount =
//     groups.length;

//   const wingCardWidth = 210;
//   const rmCardWidth = 190;

//   const groupWidth =
//     Math.max(
//       470,
//       ...groups.map(
//         (group) =>
//           group.items.length * rmCardWidth
//       )
//     );

//   const networkWidth =
//     Math.max(
//       900,
//       groupCount * groupWidth
//     );

//   const raisingStyles = `
//     /* =====================================================
//        RAISING MAIN ROOT
//     ===================================================== */

//     .raising-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       --wing-card-width: ${wingCardWidth}px;
//       --wing-card-height: 118px;

//       --rm-card-width: ${rmCardWidth}px;
//       --rm-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 3vw, 44px)
//         26px;

//       box-sizing: border-box;

//       overflow-x: auto;
//     }


//     /* =====================================================
//        COMPLETE TOPOLOGY

//        Keep one common width for:
//        parent
//        wing bus
//        wing cards
//        RM buses
//        RM cards
//     ===================================================== */

//     .raising-network {
//       width: ${networkWidth}px;
//       min-width: ${networkWidth}px;

//       margin: 0 auto;
//     }


//     /* =====================================================
//        MAIN RAISING MAIN PARENT
//     ===================================================== */

//     .raising-parent {
//       width: 100%;

//       display: flex;

//       justify-content: center;
//       align-items: center;
//     }


//     .raising-parent > .simple-card {
//       width: 420px;
//       min-width: 420px;
//       max-width: 420px;

//       height: 112px;
//       min-height: 112px;
//       max-height: 112px;

//       margin: 0;
//     }


//     /* =====================================================
//        PARENT → WING BUS
//     ===================================================== */

//     .raising-main-stem {
//       width: var(--wire-size);
//       height: 34px;

//       margin: 0 auto;

//       background: var(--wire);
//     }


//     /* =====================================================
//        WING DISTRIBUTION

//                     RAISING MAIN
//                          │
//                ─────────┼─────────
//                │                  │
//             WING A             WING B
//     ===================================================== */

//     .raising-wing-distribution {
//       position: relative;

//       width: 100%;
//       height: 34px;
//     }


//     /*
//        Group columns are generated from the configured
//        equipment without inventing extra wing mappings.
//     */

//     .raising-wing-bus {
//       position: absolute;

//       top: 0;

//       left: ${groupWidth / 2}px;
//       right: ${groupWidth / 2}px;

//       height: var(--wire-size);

//       background: var(--wire);
//     }


//     .raising-wing-bus--single {
//       left: 50%;
//       right: auto;
//       width: var(--wire-size);
//       transform: translateX(-50%);
//     }


//     .raising-wing-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             groupCount,
//             1
//           )},
//           ${groupWidth}px
//         );

//       pointer-events: none;
//     }


//     .raising-wing-line {
//       position: relative;
//     }


//     .raising-wing-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       transform: translateX(-50%);

//       background: var(--wire);
//     }


//     /* =====================================================
//        WING CARDS

//        Exact same 2-column grid as connector lines.
//     ===================================================== */

//     .raising-wing-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             groupCount,
//             1
//           )},
//           ${groupWidth}px
//         );

//       gap: 0;

//       align-items: start;
//     }


//     .raising-wing {
//       position: relative;

//       min-width: 0;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//     }


//     .raising-wing-card-wrap {
//       position: relative;

//       width: 100%;

//       display: flex;

//       justify-content: center;
//       align-items: flex-start;
//     }


//     .raising-wing-card-wrap::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     .raising-wing-card-wrap > .simple-card {
//       width: var(--wing-card-width);
//       min-width: var(--wing-card-width);
//       max-width: var(--wing-card-width);

//       height: var(--wing-card-height);
//       min-height: var(--wing-card-height);
//       max-height: var(--wing-card-height);

//       margin: 0;
//     }


//     /* =====================================================
//        WING → RAISING MAIN BUS
//     ===================================================== */

//     .raising-child-stem {
//       width: var(--wire-size);
//       height: 32px;

//       margin: 0 auto;

//       background: var(--wire);
//     }


//     /*
//        This network belongs to one wing.

//                   WING
//                     │
//               ──────┼──────
//               │           │
//              RM1         RM2
//     */

//     .raising-child-network {
//       width:
//         calc(
//           var(--rm-count) *
//           var(--rm-card-width)
//         );

//       min-width:
//         calc(
//           var(--rm-count) *
//           var(--rm-card-width)
//         );

//       margin: 0 auto;
//     }


//     .raising-child-distribution {
//       position: relative;

//       width: 100%;
//       height: 32px;
//     }


//     .raising-child-bus {
//       position: absolute;

//       top: 0;

//       left:
//         calc(
//           var(--rm-card-width) / 2
//         );

//       right:
//         calc(
//           var(--rm-card-width) / 2
//         );

//       height: var(--wire-size);

//       background: var(--wire);
//     }


//     .raising-child-bus--single {
//       left: 50%;
//       right: auto;
//       width: var(--wire-size);
//       transform: translateX(-50%);
//     }


//     .raising-child-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--rm-count),
//           var(--rm-card-width)
//         );

//       pointer-events: none;
//     }


//     .raising-child-line {
//       position: relative;
//     }


//     .raising-child-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       transform: translateX(-50%);

//       background: var(--wire);
//     }


//     /* =====================================================
//        RAISING MAIN EQUIPMENT CARDS
//     ===================================================== */

//     .raising-children {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--rm-count),
//           var(--rm-card-width)
//         );

//       gap: 0;

//       align-items: start;
//     }


//     .raising-child {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       justify-content: center;
//       align-items: flex-start;
//     }


//     .raising-child::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /*
//        Control the RM card from this topology.

//        This keeps all four cards equal and prevents
//        connector/card misalignment.
//     */

//     .raising-child > .simple-card {
//       width: var(--rm-card-width);
//       min-width: var(--rm-card-width);
//       max-width: var(--rm-card-width);

//       height: var(--rm-card-height);
//       min-height: var(--rm-card-height);
//       max-height: var(--rm-card-height);

//       margin: 0;
//     }


//     /* =====================================================
//        IMPORTANT

//        Cards must NEVER translate on hover because
//        the connector must remain visually attached.
//     ===================================================== */

//     .raising-view .simple-card:hover,
//     .raising-view .simple-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .raising-view {
//         --wing-card-height: 122px;

//         --rm-card-height: 142px;
//       }


//       .raising-network {
//         width: ${networkWidth}px;
//         min-width: ${networkWidth}px;
//       }


//       .raising-parent > .simple-card {
//         width: 440px;
//         min-width: 440px;
//         max-width: 440px;

//         height: 116px;
//         min-height: 116px;
//         max-height: 116px;
//       }


//       .raising-child-network {
//         width: 500px;
//       }
//     }


//     /* =====================================================
//        NORMAL LAPTOP
//     ===================================================== */

//     @media (
//       min-width: 1101px
//     ) and (
//       max-width: 1499px
//     ) {

//       .raising-view {
//         --wing-card-height: 114px;

//         --rm-card-height: 136px;
//       }


//       .raising-network {
//         width: ${networkWidth}px;
//         min-width: ${networkWidth}px;
//       }


//       .raising-parent > .simple-card {
//         width: 400px;
//         min-width: 400px;
//         max-width: 400px;

//         height: 108px;
//         min-height: 108px;
//         max-height: 108px;
//       }


//       .raising-child-network {
//         width: 450px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP / TABLET

//        Preserve topology instead of squeezing cards.
//        The parent FlowDetail container can scroll.
//     ===================================================== */

//     @media (max-width: 1100px) {

//       .raising-view {
//         --wing-card-height: 110px;

//         --rm-card-height: 132px;

//         padding-left: 18px;
//         padding-right: 18px;
//       }


//       .raising-network {
//         width: ${networkWidth}px;
//         min-width: ${networkWidth}px;
//       }


//       .raising-parent > .simple-card {
//         width: 380px;
//         min-width: 380px;
//         max-width: 380px;

//         height: 106px;
//         min-height: 106px;
//         max-height: 106px;
//       }


//     }
//   `;


//   /* =====================================================
//      WING RENDERER
//   ===================================================== */

//   const renderWing = (
//     title,
//     items
//   ) => (
//     <section
//       className="raising-wing"
//       key={`raising-group-${title}`}
//     >

//       {/* WING CARD */}

//       <div className="raising-wing-card-wrap">
//         <SimpleFlowCard
//           title={title}
//           subtitle="Vertical Distribution"
//           icon={Building2}
//         />
//       </div>


//       {/* WING → RM BUS */}

//       <div className="raising-child-stem" />


//       <div
//         className="raising-child-network"
//         style={{
//           "--rm-count": Math.max(
//             items.length,
//             1
//           ),
//         }}
//       >

//         <div className="raising-child-distribution">

//           <div
//             className={`raising-child-bus ${
//               items.length === 1
//                 ? "raising-child-bus--single"
//                 : ""
//             }`}
//           />


//           <div className="raising-child-lines">

//             {items.map(
//               (item) => (
//                 <div
//                   className="raising-child-line"
//                   key={`line-${item.id}`}
//                 />
//               )
//             )}

//           </div>

//         </div>


//         {/* RM CARDS */}

//         <div className="raising-children">

//           {items.map(
//             (item) => (
//               <div
//                 className="raising-child"
//                 key={item.id}
//               >

//                 <SimpleFlowCard
//                   title={
//                     item.name.toUpperCase()
//                   }
//                   subtitle={`${title} Vertical Bus`}
//                   icon={Bolt}
//                   equipment={item}
//                   onClick={() =>
//                     onOpenEquipment?.({
//                       ...item,
//                       telemetry:
//                         {
//                           ...demoTelemetry[
//                             item.id
//                           ],
//                           capacity:
//                             item.label?.replace(
//                               " GENSET",
//                               ""
//                             ),
//                         },
//                     })
//                   }
//                 />

//               </div>
//             )
//           )}

//         </div>

//       </div>

//     </section>
//   );


//   /* =====================================================
//      VIEW
//   ===================================================== */

//   return (
//     <div className="raising-view">
//       <style>
//         {raisingStyles}
//       </style>


//       <div className="raising-network">

//         {/* ===============================================
//             RAISING MAIN PARENT
//         ================================================ */}

//         <div className="raising-parent">

//           <SimpleFlowCard
//             title="RAISING MAIN"
//             subtitle="Main Vertical Distribution"
//             icon={Bolt}
//           />

//         </div>


//         {/* ===============================================
//             PARENT → WING A / WING B
//         ================================================ */}

//         <div className="raising-main-stem" />


//         <div className="raising-wing-distribution">

//           <div
//             className={`raising-wing-bus ${
//               groupCount === 1
//                 ? "raising-wing-bus--single"
//                 : ""
//             }`}
//           />


//           <div className="raising-wing-lines">

//             {groups.map(
//               (group) => (
//                 <div
//                   className="raising-wing-line"
//                   key={`group-line-${group.title}`}
//                 />
//               )
//             )}

//           </div>

//         </div>


//         {/* ===============================================
//             WING A / WING B
//         ================================================ */}

//         <div className="raising-wing-grid">

//           {groups.map(
//             (group) =>
//               renderWing(
//                 group.title,
//                 group.items
//               )
//           )}

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    8. WING VIEW
// ========================================================= */

// function WingView({
//   topology,
//   onOpenEquipment,
// }) {
//   const wings =
//     Array.isArray(topology?.equipment)
//       ? topology.equipment
//       : [];

//   const wingCount =
//     wings.length;

//   const wingCardWidth = 220;
//   const wingNetworkWidth =
//     Math.max(
//       760,
//       wingCount * wingCardWidth
//     );

//   const wingStyles = `
//     /* =====================================================
//        WING / BUILDING ROOT
//     ===================================================== */

//     .wing-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       --wing-card-width: ${wingCardWidth}px;
//       --wing-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(16px, 2vh, 26px)
//         clamp(20px, 3vw, 46px)
//         28px;

//       box-sizing: border-box;

//       overflow-x: auto;
//     }


//     /* =====================================================
//        COMPLETE NETWORK

//        One common coordinate system is used for:
//        - parent
//        - horizontal bus
//        - vertical branches
//        - Wing A / Wing B cards
//     ===================================================== */

//     .wing-network {
//       width: ${wingNetworkWidth}px;
//       min-width: ${wingNetworkWidth}px;

//       margin: 0 auto;
//     }


//     /* =====================================================
//        BUILDINGS PARENT
//     ===================================================== */

//     .wing-parent {
//       position: relative;

//       width: 420px;
//       min-width: 420px;
//       max-width: 420px;

//       height: 110px;
//       min-height: 110px;

//       margin: 0 auto;

//       padding: 13px 20px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 2px;

//       overflow: hidden;

//       border: 1px solid #367fb1;
//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #153e72 0%,
//           #102f61 55%,
//           #0d2853 100%
//         );

//       box-shadow:
//         0 7px 18px
//         rgba(11, 44, 75, .13);

//       z-index: 5;
//     }


//     .wing-parent::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #3eb9d0;
//     }


//     .wing-parent svg {
//       flex: 0 0 auto;

//       margin-bottom: 2px;

//       color: #72d1e2;
//     }


//     .wing-parent span {
//       color: #8ec5ea;

//       font-size: 8px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .16em;
//     }


//     .wing-parent h2 {
//       margin: 5px 0 2px;

//       color: #ffffff;

//       font-size: 19px;
//       font-weight: 700;

//       line-height: 1.15;
//     }


//     .wing-parent p {
//       margin: 0;

//       color: #b3cada;

//       font-size: 9px;
//       font-weight: 550;
//     }


//     /* =====================================================
//        BUILDINGS → DISTRIBUTION BUS STEM
//     ===================================================== */

//     .wing-main-stem {
//       width: var(--wire-size);
//       height: 36px;

//       margin: 0 auto;

//       background: var(--wire);
//     }


//     /* =====================================================
//        WING DISTRIBUTION

//                     BUILDINGS
//                         │
//                         │
//                  ───────┼───────
//                  │              │
//               WING A         WING B

//        The bus starts at the first wing center and
//        ends at the final wing center.
//     ===================================================== */

//     .wing-distribution {
//       position: relative;

//       width: 100%;

//       height: 38px;
//       min-height: 38px;
//     }


//     .wing-bus {
//       position: absolute;

//       top: 0;

//       left: ${wingCardWidth / 2}px;
//       right: ${wingCardWidth / 2}px;

//       height: var(--wire-size);

//       background: var(--wire);
//     }


//     .wing-bus--single {
//       left: 50%;
//       right: auto;
//       width: var(--wire-size);
//       transform: translateX(-50%);
//     }


//     /* =====================================================
//        EXACT VERTICAL BRANCHES

//        Uses the SAME two-column grid as the cards.
//     ===================================================== */

//     .wing-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             wingCount,
//             1
//           )},
//           ${wingCardWidth}px
//         );

//       pointer-events: none;
//     }


//     .wing-line {
//       position: relative;
//     }


//     .wing-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       transform: translateX(-50%);

//       background: var(--wire);
//     }


//     /* =====================================================
//        WING CARD GRID

//        IMPORTANT:
//        Same exact columns as .wing-lines.
//        No arbitrary 120px gap.
//     ===================================================== */

//     .wing-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             wingCount,
//             1
//           )},
//           ${wingCardWidth}px
//         );

//       gap: 0;

//       align-items: start;
//     }


//     .wing-branch {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        CARD / FLOW CONNECTION POINT
//     ===================================================== */

//     .wing-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /* =====================================================
//        WING EQUIPMENT CARDS

//        Topology controls the exact dimensions instead
//        of allowing EquipmentCard to change geometry.
//     ===================================================== */

//     .wing-branch > .eq-card {
//       width: var(--wing-card-width);
//       min-width: var(--wing-card-width);
//       max-width: var(--wing-card-width);

//       height: var(--wing-card-height);
//       min-height: var(--wing-card-height);
//       max-height: var(--wing-card-height);

//       margin: 0;
//     }


//     /* =====================================================
//        NO MOVEMENT ON HOVER

//        Flow connector must stay attached.
//     ===================================================== */

//     .wing-view .eq-card:hover,
//     .wing-view .eq-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .wing-view {
//         --wing-card-height: 142px;
//       }


//       .wing-network {
//         width: ${wingNetworkWidth}px;
//         min-width: ${wingNetworkWidth}px;
//       }


//       .wing-parent {
//         width: 440px;
//         min-width: 440px;
//         max-width: 440px;

//         height: 114px;
//         min-height: 114px;
//       }
//     }


//     /* =====================================================
//        NORMAL LAPTOP
//     ===================================================== */

//     @media (
//       min-width: 1101px
//     ) and (
//       max-width: 1499px
//     ) {

//       .wing-view {
//         --wing-card-height: 136px;
//       }


//       .wing-network {
//         width: ${wingNetworkWidth}px;
//         min-width: ${wingNetworkWidth}px;
//       }


//       .wing-parent {
//         width: 400px;
//         min-width: 400px;
//         max-width: 400px;

//         height: 106px;
//         min-height: 106px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP / TABLET

//        Keep topology intact rather than squeezing
//        cards and disconnecting flow lines.
//     ===================================================== */

//     @media (max-width: 1100px) {

//       .wing-view {
//         --wing-card-height: 132px;

//         padding-left: 18px;
//         padding-right: 18px;
//       }


//       .wing-network {
//         width: ${wingNetworkWidth}px;
//         min-width: ${wingNetworkWidth}px;
//       }


//       .wing-parent {
//         width: 380px;
//         min-width: 380px;
//         max-width: 380px;

//         height: 104px;
//         min-height: 104px;
//       }
//     }
//   `;


//   return (
//     <div className="wing-view">
//       <style>
//         {wingStyles}
//       </style>


//       <div className="wing-network">

//         {/* ===============================================
//             BUILDINGS PARENT
//         ================================================ */}

//         <div className="wing-parent">

//           <Building2
//             size={26}
//             strokeWidth={1.8}
//           />


//           <span>
//             MAIN BUILDING DISTRIBUTION
//           </span>


//           <h2>
//             BUILDINGS
//           </h2>


//           <p>
//             WING EQUIPMENT
//           </p>

//         </div>


//         {/* ===============================================
//             BUILDINGS → WING BUS
//         ================================================ */}

//         <div className="wing-main-stem" />


//         {/* ===============================================
//             HORIZONTAL BUS + TWO EXACT BRANCHES
//         ================================================ */}

//         <div className="wing-distribution">

//           <div
//             className={`wing-bus ${
//               wingCount === 1
//                 ? "wing-bus--single"
//                 : ""
//             }`}
//           />


//           <div className="wing-lines">

//             {wings.map(
//               (item) => (
//                 <div
//                   className="wing-line"
//                   key={`line-${item.id}`}
//                 />
//               )
//             )}

//           </div>

//         </div>


//         {/* ===============================================
//             CONFIGURED WINGS
//         ================================================ */}

//         <div className="wing-grid">

//           {wings.map(
//             (item) => (

//               <div
//                 className="wing-branch"
//                 key={item.id}
//               >

//                 <EquipmentCard
//                   equipment={item}
//                   onOpen={onOpenEquipment}
//                 />

//               </div>

//             )
//           )}

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    9. DG VIEW
// ========================================================= */

// function DGView({
//   topology,
//   onOpenEquipment,
// }) {
//   const generators =
//     Array.isArray(topology?.equipment)
//       ? topology.equipment
//       : [];

//   const dgCount =
//     generators.length;

//   const dgCardWidth = 150;
//   const dgNetworkWidth =
//     Math.max(
//       760,
//       dgCount * dgCardWidth
//     );

//   const dgStyles = `
//     /* =====================================================
//        DG ROOT
//     ===================================================== */

//     .dg-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       --dg-card-width: ${dgCardWidth}px;
//       --dg-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(16px, 2vw, 34px)
//         26px;

//       box-sizing: border-box;

//       overflow-x: auto;
//     }


//     /* =====================================================
//        COMPLETE DG NETWORK

//        One common coordinate system controls:
//        - Parent
//        - Main stem
//        - Horizontal bus
//        - DG branches
//        - DG cards
//     ===================================================== */

//     .dg-network {
//       width: ${dgNetworkWidth}px;
//       min-width: ${dgNetworkWidth}px;

//       margin: 0 auto;
//     }


//     /* =====================================================
//        DG PARENT
//     ===================================================== */

//     .dg-parent {
//       width: 100%;

//       display: flex;

//       align-items: center;
//       justify-content: center;
//     }


//     .dg-parent > .simple-card {
//       width: 500px;
//       min-width: 500px;
//       max-width: 500px;

//       height: 112px;
//       min-height: 112px;
//       max-height: 112px;

//       margin: 0;
//     }


//     /* =====================================================
//        PARENT → DG BUS
//     ===================================================== */

//     .dg-main-stem {
//       width: var(--wire-size);
//       height: 38px;

//       margin: 0 auto;

//       background: var(--wire);
//     }


//     /* =====================================================
//        DG DISTRIBUTION

//                          DG PLANT
//                             │
//                             │
//           ──────────────────┼──────────────────
//           │    │    │    │    │    │    │
//          DG1  DG2  DG3  ...
//     ===================================================== */

//     .dg-distribution {
//       position: relative;

//       width: 100%;

//       height: 38px;
//       min-height: 38px;
//     }


//     /* =====================================================
//        HORIZONTAL DG BUS

//        The bus starts and ends exactly at the first
//        and last DG branch centers.
//     ===================================================== */

//     .dg-bus {
//       position: absolute;

//       top: 0;

//       left:
//         ${dgCardWidth / 2}px;

//       right:
//         ${dgCardWidth / 2}px;

//       height: var(--wire-size);

//       background: var(--wire);
//     }


//     .dg-bus--single {
//       left: 50%;
//       right: auto;
//       width: var(--wire-size);
//       transform: translateX(-50%);
//     }


//     /* =====================================================
//        EXACT VERTICAL BRANCHES

//        IMPORTANT:
//        This grid is identical to .dg-grid below.
//     ===================================================== */

//     .dg-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             dgCount,
//             1
//           )},
//           ${dgCardWidth}px
//         );

//       pointer-events: none;
//     }


//     .dg-line {
//       position: relative;
//     }


//     .dg-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       transform:
//         translateX(-50%);

//       background: var(--wire);
//     }


//     /* =====================================================
//        DG CARD GRID

//        Same exact columns as connector branches.

//        No gap is used in the geometry.
//        Spacing comes naturally from the column width.
//     ===================================================== */

//     .dg-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             dgCount,
//             1
//           )},
//           ${dgCardWidth}px
//         );

//       gap: 0;

//       align-items: start;
//     }


//     .dg-branch {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        CONNECTOR / CARD JUNCTION
//     ===================================================== */

//     .dg-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /* =====================================================
//        DG CARDS
//     ===================================================== */

//     .dg-branch > .simple-card {
//       width: var(--dg-card-width);
//       min-width: var(--dg-card-width);
//       max-width: var(--dg-card-width);

//       height: var(--dg-card-height);
//       min-height: var(--dg-card-height);
//       max-height: var(--dg-card-height);

//       margin: 0;

//       padding: 10px 8px;

//       box-sizing: border-box;
//     }


//     .dg-branch .simple-card h3 {
//       margin: 2px 0;

//       font-size: 14px;
//       line-height: 17px;

//       white-space: normal;

//       text-align: center;
//     }


//     /* =====================================================
//        NO CARD MOVEMENT

//        Connector must remain attached while hovering.
//     ===================================================== */

//     .dg-view .simple-card:hover,
//     .dg-view .simple-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .dg-view {
//         --dg-card-height: 142px;
//       }


//       .dg-network {
//         width: ${dgNetworkWidth}px;
//         min-width: ${dgNetworkWidth}px;
//       }


//       .dg-parent > .simple-card {
//         width: 540px;
//         min-width: 540px;
//         max-width: 540px;

//         height: 116px;
//         min-height: 116px;
//         max-height: 116px;
//       }


//       .dg-branch .simple-card h3 {
//         font-size: 15px;
//       }
//     }


//     /* =====================================================
//        NORMAL LAPTOP
//     ===================================================== */

//     @media (
//       min-width: 1101px
//     ) and (
//       max-width: 1499px
//     ) {

//       .dg-view {
//         --dg-card-height: 136px;
//       }


//       .dg-network {
//         width: ${dgNetworkWidth}px;
//         min-width: ${dgNetworkWidth}px;
//       }


//       .dg-parent > .simple-card {
//         width: 480px;
//         min-width: 480px;
//         max-width: 480px;

//         height: 108px;
//         min-height: 108px;
//         max-height: 108px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP / TABLET

//        DG cards should not be crushed into a small
//        viewport.

//        Preserve the engineering topology and allow
//        horizontal scrolling.
//     ===================================================== */

//     @media (max-width: 1100px) {

//       .dg-view {
//         --dg-card-height: 132px;

//         padding-left: 16px;
//         padding-right: 16px;
//       }


//       .dg-network {
//         width: ${dgNetworkWidth}px;
//         min-width: ${dgNetworkWidth}px;
//       }


//       .dg-parent > .simple-card {
//         width: 450px;
//         min-width: 450px;
//         max-width: 450px;

//         height: 106px;
//         min-height: 106px;
//         max-height: 106px;
//       }


//       .dg-branch .simple-card h3 {
//         font-size: 13px;
//       }
//     }
//   `;


//   return (
//     <div className="dg-view">
//       <style>
//         {dgStyles}
//       </style>


//       <div className="dg-network">

//         {/* ===============================================
//             DIESEL GENERATOR PLANT
//         ================================================ */}

//         <div className="dg-parent">

//           <SimpleFlowCard
//             title="DIESEL GENERATOR PLANT"
//             eyebrow="EMERGENCY POWER PANEL"
//             icon={CirclePower}
//             live={false}
//           />

//         </div>


//         {/* ===============================================
//             PARENT → MAIN DG BUS
//         ================================================ */}

//         <div className="dg-main-stem" />


//         {/* ===============================================
//             HORIZONTAL BUS + EXACT BRANCHES
//         ================================================ */}

//         <div className="dg-distribution">

//           <div
//             className={`dg-bus ${
//               dgCount === 1
//                 ? "dg-bus--single"
//                 : ""
//             }`}
//           />


//           <div className="dg-lines">

//             {generators.map(
//               (item) => (

//                 <div
//                   className="dg-line"
//                   key={`line-${item.id}`}
//                 />

//               )
//             )}

//           </div>

//         </div>


//         {/* ===============================================
//             DG EQUIPMENT
//         ================================================ */}

//         <div className="dg-grid">

//           {generators.map(
//             (item) => (

//               <div
//                 className="dg-branch"
//                 key={item.id}
//               >

//                 <SimpleFlowCard
//                   title={item.name}
//                   eyebrow="DIESEL GENERATOR"
//                   subtitle={item.label}
//                   icon={CirclePower}
//                   equipment={item}

//                   onClick={() =>
//                     onOpenEquipment?.({
//                       ...item,

//                       telemetry:
//                         demoTelemetry[
//                           item.id
//                         ],
//                     })
//                   }
//                 />

//               </div>

//             )
//           )}

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    10. HVAC VIEW
// ========================================================= */

// function HVACView({
//   topology,
//   onOpenEquipment,
// }) {
//   const equipment =
//     topology?.equipment || [];

//   const hvacCount =
//     equipment.length;

//   const hvacCardWidth = 190;
//   const hvacGap = 34;
//   const hvacNetworkWidth =
//     hvacCount > 0
//       ? Math.max(
//           560,
//           hvacCount * hvacCardWidth +
//             Math.max(
//               hvacCount - 1,
//               0
//             ) *
//               hvacGap
//         )
//       : 560;

//   const hvacStyles = `
//     .hvac-view {
//       width:min(560px,92%);min-height:270px;margin:auto;padding:34px;
//       display:flex;flex-direction:column;align-items:center;justify-content:center;
//       text-align:center;border:1px solid #b9c9d5;border-radius:8px;background:#eef3f6;
//     }
//     .hvac-view__icon {
//       width:58px;height:58px;margin-bottom:14px;display:grid;place-items:center;
//       border:1px solid #397da9;border-radius:7px;color:#d7efff;background:#173f75;
//     }
//     .hvac-view span { color:#6f8799;font-size:8px;font-weight:800;letter-spacing:.16em; }
//     .hvac-view h2 { margin:7px 0 5px;color:#17324a;font-size:21px; }
//     .hvac-view p { margin:0;color:#708291;font-size:11px; }
//     .hvac-view strong {
//       margin-top:18px;padding:7px 12px;border:1px solid #c6d3dc;border-radius:5px;
//       color:#5f7484;background:#fff;font-size:9px;letter-spacing:.1em;
//     }
//     .hvac-flow-view {
//       --wire:#397da9;
//       --wire-size:2px;
//       --hvac-card-width:190px;
//       width:100%;
//       min-width:0;
//       min-height:100%;
//       margin:0;
//       padding:clamp(14px,2vh,24px) clamp(18px,3vw,42px) 28px;
//       box-sizing:border-box;
//       overflow-x:auto;
//     }
//     .hvac-network {
//       width:var(--hvac-network-width);
//       min-width:var(--hvac-network-width);
//       margin:0 auto;
//     }
//     .hvac-parent {
//       display:flex;
//       justify-content:center;
//     }
//     .hvac-parent > .simple-card {
//       width:420px;
//       min-width:420px;
//       max-width:420px;
//       height:110px;
//       min-height:110px;
//       max-height:110px;
//       margin:0;
//     }
//     .hvac-main-stem {
//       width:var(--wire-size);
//       height:36px;
//       margin:0 auto;
//       background:var(--wire);
//     }
//     .hvac-distribution {
//       position:relative;
//       width:100%;
//       height:36px;
//       min-height:36px;
//     }
//     .hvac-bus {
//       position:absolute;
//       top:0;
//       left:calc(100% / (var(--hvac-count) * 2));
//       right:calc(100% / (var(--hvac-count) * 2));
//       height:var(--wire-size);
//       background:var(--wire);
//     }
//     .hvac-bus--single {
//       left:50%;
//       right:50%;
//     }
//     .hvac-lines,
//     .hvac-grid {
//       display:grid;
//       grid-template-columns:repeat(var(--hvac-count),var(--hvac-card-width));
//       justify-content:space-between;
//       gap:0;
//     }
//     .hvac-lines {
//       position:absolute;
//       inset:0;
//       pointer-events:none;
//     }
//     .hvac-line,
//     .hvac-branch {
//       position:relative;
//       display:flex;
//       justify-content:center;
//     }
//     .hvac-line::before {
//       content:"";
//       position:absolute;
//       top:0;
//       bottom:0;
//       left:50%;
//       width:var(--wire-size);
//       transform:translateX(-50%);
//       background:var(--wire);
//     }
//     .hvac-branch::before {
//       content:"";
//       position:absolute;
//       top:0;
//       left:50%;
//       width:6px;
//       height:6px;
//       box-sizing:border-box;
//       border:1px solid var(--wire);
//       border-radius:50%;
//       background:#fff;
//       transform:translate(-50%,-50%);
//       z-index:8;
//     }
//     .hvac-branch > .eq-card {
//       width:var(--hvac-card-width);
//       min-width:var(--hvac-card-width);
//       max-width:var(--hvac-card-width);
//       height:136px;
//       min-height:136px;
//       max-height:136px;
//       margin:0;
//     }
//     .hvac-flow-view .eq-card:hover,
//     .hvac-flow-view .eq-card:focus-visible {
//       transform:none;
//     }
//   `;

//   if (hvacCount > 0) {
//     return (
//       <div className="hvac-flow-view">
//         <style>{hvacStyles}</style>

//         <div
//           className="hvac-network"
//           style={{
//             "--hvac-count": hvacCount,
//             "--hvac-network-width": `${hvacNetworkWidth}px`,
//           }}
//         >
//           <div className="hvac-parent">
//             <SimpleFlowCard
//               title="HVAC COOLING PLANT"
//               subtitle="Configured HVAC Equipment"
//               eyebrow="MECHANICAL SERVICES"
//               icon={Fan}
//             />
//           </div>

//           <div className="hvac-main-stem" />

//           <div className="hvac-distribution">
//             <div
//               className={`hvac-bus ${
//                 hvacCount === 1
//                   ? "hvac-bus--single"
//                   : ""
//               }`}
//             />

//             <div className="hvac-lines">
//               {equipment.map((item) => (
//                 <div
//                   className="hvac-line"
//                   key={`line-${item.id}`}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="hvac-grid">
//             {equipment.map((item) => (
//               <div
//                 className="hvac-branch"
//                 key={item.id}
//               >
//                 <EquipmentCard
//                   equipment={item}
//                   onOpen={onOpenEquipment}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="hvac-view">
//       <style>{hvacStyles}</style>
//       <span className="hvac-view__icon"><Fan size={30} /></span>
//       <span>MECHANICAL SERVICES</span>
//       <h2>HVAC COOLING PLANT</h2>
//       <p>No internal HVAC equipment is configured for this flow.</p>
//       <strong>0 EQUIPMENT</strong>
//     </div>
//   );
// }

// /* =========================================================
//    11. WATER MANAGEMENT VIEW
// ========================================================= */

// function WaterView({
//   topology,
//   onOpenEquipment,
// }) {
//   const [showTanks, setShowTanks] =
//     useState(false);

//   const main =
//     topology.equipment.find(
//       (item) =>
//         item.type === "water-main"
//     );

//   const stp =
//     topology.equipment.find(
//       (item) =>
//         item.type === "stp"
//     );

//   const wtp =
//     topology.equipment.find(
//       (item) =>
//         item.type === "wtp"
//     );

//   const tanks =
//     topology.equipment.filter(
//       (item) =>
//         item.type === "tank"
//     );

//   const waterBranches = [
//     stp
//       ? {
//           id: "stp",
//           kind: "stp",
//           equipment: stp,
//         }
//       : null,
//     wtp
//       ? {
//           id: "wtp",
//           kind: "wtp",
//           equipment: wtp,
//         }
//       : null,
//     tanks.length > 0
//       ? {
//           id: "water-tanks",
//           kind: "tanks",
//         }
//       : null,
//   ].filter(Boolean);

//   const waterBranchCount =
//     waterBranches.length;

//   const tankCount =
//     tanks.length;

//   const waterNetworkWidth =
//     Math.max(
//       520,
//       waterBranchCount * 240
//     );

//   const tankNetworkWidth =
//     Math.max(
//       520,
//       tankCount * 220
//     );


//   const waterStyles = `
//     /* =====================================================
//        WATER MANAGEMENT ROOT
//     ===================================================== */

//     .water-view {
//       --wire: #249bb5;
//       --wire-size: 2px;

//       --water-card-width: 220px;
//       --water-card-height: 136px;

//       --tank-card-width: 190px;
//       --tank-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 3vw, 42px)
//         28px;

//       box-sizing: border-box;

//       overflow-x: auto;
//     }


//     /* =====================================================
//        COMPLETE MAIN NETWORK
//     ===================================================== */

//     .water-network {
//       width: var(--water-network-width);
//       min-width: var(--water-network-width);

//       margin: 0 auto;
//     }


//     /* =====================================================
//        WATER MANAGEMENT PARENT
//     ===================================================== */

//     .water-parent {
//       width: 100%;

//       display: flex;

//       align-items: center;
//       justify-content: center;
//     }


//     .water-parent > .simple-card {
//       width: 440px;
//       min-width: 440px;
//       max-width: 440px;

//       height: 112px;
//       min-height: 112px;
//       max-height: 112px;

//       margin: 0;
//     }


//     /* =====================================================
//        PARENT → MAIN WATER BUS
//     ===================================================== */

//     .water-main-stem {
//       width: var(--wire-size);
//       height: 38px;

//       margin: 0 auto;

//       background: var(--wire);
//     }


//     /* =====================================================
//        MAIN WATER DISTRIBUTION

//                     WATER MANAGEMENT
//                            │
//                            │
//              ──────────────┼──────────────
//              │             │             │
//             STP           WTP       WATER TANKS
//     ===================================================== */

//     .water-distribution {
//       position: relative;

//       width: 100%;

//       height: 38px;
//       min-height: 38px;
//     }


//     /* =====================================================
//        MAIN HORIZONTAL BUS

//        Three equal columns:

//        STP center         = 1/6
//        WTP center         = 3/6
//        Water Tanks center = 5/6

//        Bus starts at STP and ends at Water Tanks.
//     ===================================================== */

//     .water-bus {
//       position: absolute;

//       top: 0;

//       left:
//         calc(
//           100% / (var(--water-branch-count) * 2)
//         );

//       right:
//         calc(
//           100% / (var(--water-branch-count) * 2)
//         );

//       height: var(--wire-size);

//       background: var(--wire);
//     }

//     .water-bus--single {
//       left: 50%;
//       right: 50%;
//     }


//     /* =====================================================
//        EXACT THREE VERTICAL BRANCHES
//     ===================================================== */

//     .water-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--water-branch-count),
//           minmax(0, 1fr)
//         );

//       pointer-events: none;
//     }


//     .water-line {
//       position: relative;
//     }


//     .water-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       transform:
//         translateX(-50%);

//       background: var(--wire);
//     }


//     /* =====================================================
//        MAIN WATER CARD GRID

//        Same exact 3-column geometry as .water-lines.
//     ===================================================== */

//     .water-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--water-branch-count),
//           minmax(0, 1fr)
//         );

//       gap: 0;

//       align-items: start;
//     }


//     .water-branch {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        CARD CONNECTION POINT
//     ===================================================== */

//     .water-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /* =====================================================
//        STP / WTP CARDS
//     ===================================================== */

//     .water-branch > .simple-card {
//       width: var(--water-card-width);
//       min-width: var(--water-card-width);
//       max-width: var(--water-card-width);

//       height: var(--water-card-height);
//       min-height: var(--water-card-height);
//       max-height: var(--water-card-height);

//       margin: 0;

//       box-sizing: border-box;
//     }


//     /* =====================================================
//        WATER TANK GROUP CARD
//     ===================================================== */

//     .water-tank-group {
//       position: relative;

//       width: var(--water-card-width);
//       min-width: var(--water-card-width);
//       max-width: var(--water-card-width);

//       height: var(--water-card-height);
//       min-height: var(--water-card-height);
//       max-height: var(--water-card-height);

//       margin: 0;

//       padding: 12px 14px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       overflow: hidden;

//       border:
//         1px solid #327ba2;

//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #174766,
//           #123b58 55%,
//           #0e3049
//         );

//       box-shadow:
//         0 5px 14px
//         rgba(10, 39, 59, .13);

//       cursor: pointer;

//       transition:
//         border-color .15s ease,
//         box-shadow .15s ease;
//     }


//     .water-tank-group::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #3eb9d0;
//     }


//     .water-tank-group:hover,
//     .water-tank-group:focus-visible {
//       transform: none;

//       outline: none;

//       border-color: #59bad0;

//       box-shadow:
//         0 7px 18px
//         rgba(10, 42, 64, .18);
//     }


//     .water-tank-group svg {
//       margin: 3px 0;

//       color: #71d0e2;
//     }


//     .water-tank-group span {
//       color: #87bddd;

//       font-size: 7px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .12em;
//     }


//     .water-tank-group h3 {
//       margin: 3px 0 1px;

//       color: #ffffff;

//       font-size: 15px;
//       font-weight: 700;

//       line-height: 18px;
//     }


//     .water-tank-group p {
//       margin: 0;

//       color: #b5cede;

//       font-size: 8px;

//       line-height: 12px;
//     }


//     .water-tank-group strong {
//       margin-top: 5px;

//       color: #73d0e1;

//       font-size: 7px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .05em;
//     }


//     /* =====================================================
//        DON'T MOVE FLOW CARDS ON HOVER
//     ===================================================== */

//     .water-view .simple-card:hover,
//     .water-view .simple-card:focus-visible,
//     .water-view .eq-card:hover,
//     .water-view .eq-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        WATER TANK SUBVIEW HEADER
//     ===================================================== */

//     .water-tanks-head {
//       width: min(100%, 1040px);

//       margin:
//         0 auto
//         20px;

//       display: flex;

//       align-items: center;

//       gap: 14px;
//     }


//     .water-tanks-head button {
//       height: 36px;

//       padding:
//         0 12px;

//       display: inline-flex;

//       align-items: center;

//       gap: 6px;

//       border:
//         1px solid #426780;

//       border-radius: 5px;

//       color: #dce9f2;

//       background: #173b56;

//       cursor: pointer;

//       transition:
//         background .15s ease,
//         border-color .15s ease;
//     }


//     .water-tanks-head button:hover,
//     .water-tanks-head button:focus-visible {
//       outline: none;

//       background: #19445f;

//       border-color: #4da8bd;
//     }


//     .water-tanks-head h2 {
//       margin: 0;

//       color: #17354b;

//       font-size: 21px;
//       font-weight: 700;
//     }


//     /* =====================================================
//        COMPLETE TANK NETWORK
//     ===================================================== */

//     .water-tanks-network {
//       width: var(--tank-network-width);
//       min-width: var(--tank-network-width);

//       margin: 0 auto;
//     }


//     /* =====================================================
//        WATER TANKS PARENT
//     ===================================================== */

//     .water-tanks-parent {
//       width: 100%;

//       display: flex;

//       justify-content: center;
//       align-items: center;
//     }


//     .water-tanks-parent > .simple-card {
//       width: 420px;
//       min-width: 420px;
//       max-width: 420px;

//       height: 110px;
//       min-height: 110px;
//       max-height: 110px;

//       margin: 0;
//     }


//     /* =====================================================
//        WATER TANK PARENT → BUS
//     ===================================================== */

//     .water-tanks-main-stem {
//       width: var(--wire-size);
//       height: 36px;

//       margin: 0 auto;

//       background: var(--wire);
//     }


//     /* =====================================================
//        FOUR TANK DISTRIBUTION

//                        WATER TANKS
//                             │
//                             │
//              ───────────────┼───────────────
//              │        │          │         │
//            TANK1    TANK2      TANK3     TANK4
//     ===================================================== */

//     .water-tanks-distribution {
//       position: relative;

//       width: 100%;

//       height: 36px;
//       min-height: 36px;
//     }


//     /*
//        Four equal columns.

//        Tank 1 center = 1/8
//        Tank 4 center = 7/8
//     */

//     .water-tanks-bus {
//       position: absolute;

//       top: 0;

//       left:
//         calc(
//           100% / (var(--tank-count) * 2)
//         );

//       right:
//         calc(
//           100% / (var(--tank-count) * 2)
//         );

//       height: var(--wire-size);

//       background: var(--wire);
//     }

//     .water-tanks-bus--single {
//       left: 50%;
//       right: 50%;
//     }


//     /* =====================================================
//        EXACT FOUR TANK BRANCHES
//     ===================================================== */

//     .water-tank-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--tank-count),
//           minmax(0, 1fr)
//         );

//       pointer-events: none;
//     }


//     .water-tank-line {
//       position: relative;
//     }


//     .water-tank-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       transform:
//         translateX(-50%);

//       background: var(--wire);
//     }


//     /* =====================================================
//        TANK CARD GRID

//        Same exact 4-column geometry as tank lines.
//     ===================================================== */

//     .water-tanks-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--tank-count),
//           minmax(0, 1fr)
//         );

//       gap: 0;

//       align-items: start;
//     }


//     .water-tank {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        TANK CARD CONNECTION
//     ===================================================== */

//     .water-tank::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /* =====================================================
//        TANK EQUIPMENT CARDS
//     ===================================================== */

//     .water-tank > .eq-card {
//       width: var(--tank-card-width);
//       min-width: var(--tank-card-width);
//       max-width: var(--tank-card-width);

//       height: var(--tank-card-height);
//       min-height: var(--tank-card-height);
//       max-height: var(--tank-card-height);

//       margin: 0;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .water-view {
//         --water-card-width: 230px;
//         --water-card-height: 142px;

//         --tank-card-width: 200px;
//         --tank-card-height: 142px;
//       }


//       .water-network,
//       .water-tanks-network {
//         max-width: none;
//       }


//       .water-parent > .simple-card {
//         width: 460px;
//         min-width: 460px;
//         max-width: 460px;

//         height: 116px;
//         min-height: 116px;
//         max-height: 116px;
//       }


//       .water-tanks-parent > .simple-card {
//         width: 440px;
//         min-width: 440px;
//         max-width: 440px;

//         height: 114px;
//         min-height: 114px;
//         max-height: 114px;
//       }
//     }


//     /* =====================================================
//        NORMAL LAPTOP
//     ===================================================== */

//     @media (
//       min-width: 1101px
//     ) and (
//       max-width: 1499px
//     ) {

//       .water-view {
//         --water-card-width: 210px;
//         --water-card-height: 136px;

//         --tank-card-width: 190px;
//         --tank-card-height: 136px;
//       }


//       .water-network,
//       .water-tanks-network {
//         max-width: none;
//       }


//       .water-parent > .simple-card {
//         width: 420px;
//         min-width: 420px;
//         max-width: 420px;

//         height: 108px;
//         min-height: 108px;
//         max-height: 108px;
//       }


//       .water-tanks-parent > .simple-card {
//         width: 400px;
//         min-width: 400px;
//         max-width: 400px;

//         height: 108px;
//         min-height: 108px;
//         max-height: 108px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP / TABLET

//        Keep the topology intact.
//        Horizontal scrolling is preferable to
//        compressing the cards/flow lines.
//     ===================================================== */

//     @media (max-width: 1100px) {

//       .water-view {
//         --water-card-width: 195px;
//         --water-card-height: 132px;

//         --tank-card-width: 182px;
//         --tank-card-height: 132px;

//         padding-left: 18px;
//         padding-right: 18px;
//       }


//       .water-network,
//       .water-tanks-network {
//         width: var(--water-network-width);
//         min-width: var(--water-network-width);
//       }

//       .water-tanks-network {
//         width: var(--tank-network-width);
//         min-width: var(--tank-network-width);
//       }


//       .water-parent > .simple-card {
//         width: 390px;
//         min-width: 390px;
//         max-width: 390px;

//         height: 106px;
//         min-height: 106px;
//         max-height: 106px;
//       }


//       .water-tanks-parent > .simple-card {
//         width: 380px;
//         min-width: 380px;
//         max-width: 380px;

//         height: 106px;
//         min-height: 106px;
//         max-height: 106px;
//       }
//     }
//   `;


//   /* =====================================================
//      WATER TANK SUBVIEW
//   ===================================================== */

//   if (showTanks) {
//     return (
//       <div className="water-view">
//         <style>
//           {waterStyles}
//         </style>


//         {/* ===============================================
//             HEADER
//         ================================================ */}

//         <div className="water-tanks-head">

//           <button
//             type="button"
//             onClick={() =>
//               setShowTanks(false)
//             }
//           >
//             <ArrowLeft size={15} />

//             Water Management
//           </button>


//           <h2>
//             WATER TANKS
//           </h2>

//         </div>


//         <div
//           className="water-tanks-network"
//           style={{
//             "--tank-count": tankCount,
//             "--tank-network-width": `${tankNetworkWidth}px`,
//           }}
//         >

//           {/* =============================================
//               WATER TANKS PARENT
//           ============================================== */}

//           <div className="water-tanks-parent">

//             <SimpleFlowCard
//               title="WATER TANKS"
//               subtitle="Tank Level Monitoring"
//               eyebrow="STORAGE DISTRIBUTION"
//               icon={Droplets}
//             />

//           </div>


//           {/* =============================================
//               PARENT → TANK BUS
//           ============================================== */}

//           <div className="water-tanks-main-stem" />


//           {/* =============================================
//               FOUR-WAY DISTRIBUTION
//           ============================================== */}

//           <div className="water-tanks-distribution">

//             <div
//               className={`water-tanks-bus ${
//                 tankCount === 1
//                   ? "water-tanks-bus--single"
//                   : ""
//               }`}
//             />


//             <div className="water-tank-lines">

//               {tanks.map(
//                 (tank) => (

//                   <div
//                     className="water-tank-line"
//                     key={`line-${tank.id}`}
//                   />

//                 )
//               )}

//             </div>

//           </div>


//           {/* =============================================
//               TANK 1 / 2 / 3 / 4
//           ============================================== */}

//           <div className="water-tanks-grid">

//             {tanks.map(
//               (tank) => (

//                 <div
//                   className="water-tank"
//                   key={tank.id}
//                 >

//                   <EquipmentCard
//                     equipment={tank}
//                     onOpen={
//                       onOpenEquipment
//                     }
//                   />

//                 </div>

//               )
//             )}

//           </div>

//         </div>

//       </div>
//     );
//   }


//   /* =====================================================
//      MAIN WATER MANAGEMENT VIEW
//   ===================================================== */

//   return (
//     <div className="water-view">
//       <style>
//         {waterStyles}
//       </style>


//       <div
//         className="water-network"
//         style={{
//           "--water-branch-count":
//             waterBranchCount,
//           "--water-network-width": `${waterNetworkWidth}px`,
//         }}
//       >

//         {/* ===============================================
//             CENTRAL WATER MANAGEMENT
//         ================================================ */}

//         <div className="water-parent">

//           <SimpleFlowCard
//             title="WATER MANAGEMENT"
//             subtitle="CENTRAL WATER MONITORING"
//             eyebrow="CENTRAL WATER SYSTEM"
//             icon={Droplets}
//             equipment={main}

//             onClick={
//               main
//                 ? () =>
//                     onOpenEquipment?.({
//                       ...main,

//                       telemetry:
//                         demoTelemetry[
//                           main.id
//                         ],
//                     })
//                 : undefined
//             }
//           />

//         </div>


//         {/* ===============================================
//             CENTRAL WATER → DISTRIBUTION
//         ================================================ */}

//         {waterBranchCount > 0 && (
//           <div className="water-main-stem" />
//         )}


//         {/* ===============================================
//             MAIN 3-WAY BUS
//         ================================================ */}

//         {waterBranchCount > 0 && (
//         <div className="water-distribution">

//           <div
//             className={`water-bus ${
//               waterBranchCount === 1
//                 ? "water-bus--single"
//                 : ""
//             }`}
//           />


//           <div className="water-lines">

//             {waterBranches.map(
//               (branch) => (
//                 <div
//                   className="water-line"
//                   key={`line-${branch.id}`}
//                 />
//               )
//             )}

//           </div>

//         </div>
//         )}


//         {/* ===============================================
//             STP / WTP / WATER TANKS
//         ================================================ */}

//         {waterBranchCount > 0 && (
//           <div className="water-grid">

//             {waterBranches.map(
//               (branch) => {
//                 if (
//                   branch.kind === "tanks"
//                 ) {
//                   return (
//                     <div
//                       className="water-branch"
//                       key={branch.id}
//                     >
//                       <button
//                         type="button"
//                         className="water-tank-group"
//                         onClick={() =>
//                           setShowTanks(true)
//                         }
//                       >
//                         <span>
//                           STORAGE DISTRIBUTION
//                         </span>

//                         <Droplets
//                           size={22}
//                           strokeWidth={1.8}
//                         />

//                         <h3>
//                           WATER TANKS
//                         </h3>

//                         <p>
//                           TANK LEVEL MONITORING
//                         </p>

//                         <strong>
//                           VIEW {tankCount} TANK{tankCount === 1 ? "" : "S"} →
//                         </strong>
//                       </button>
//                     </div>
//                   );
//                 }

//                 const item =
//                   branch.equipment;

//                 return (
//                   <div
//                     className="water-branch"
//                     key={branch.id}
//                   >
//                     <SimpleFlowCard
//                       title={
//                         branch.kind === "stp"
//                           ? "STP"
//                           : "WTP"
//                       }
//                       eyebrow={
//                         branch.kind === "stp"
//                           ? "SEWAGE TREATMENT PLANT"
//                           : "WATER TREATMENT PLANT"
//                       }
//                       subtitle={
//                         branch.kind === "stp"
//                           ? "Sewage Water Treatment"
//                           : "Water Treatment"
//                       }
//                       icon={Droplets}
//                       equipment={item}
//                       onClick={() =>
//                         onOpenEquipment?.({
//                           ...item,
//                           telemetry:
//                             demoTelemetry[
//                               item.id
//                             ],
//                         })
//                       }
//                     />
//                   </div>
//                 );
//               }
//             )}

//           </div>
//         )}

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    12. FIRE VIEW
// ========================================================= */
// function FireView({
//   topology,
//   onOpenEquipment,
// }) {
//   const equipment =
//     topology?.equipment || [];

//   const fireCount =
//     equipment.length;

//   const fireNetworkWidth =
//     Math.max(
//       520,
//       fireCount * 250
//     );

//   const fireStyles = `
//     /* =====================================================
//        FIRE ROOT
//     ===================================================== */

//     .fire-view {
//       --wire: #b55b66;
//       --wire-size: 2px;

//       --fire-card-width: 210px;
//       --fire-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 3vw, 42px)
//         28px;

//       box-sizing: border-box;

//       overflow-x: auto;
//     }


//     /* =====================================================
//        COMPLETE FIRE NETWORK

//        Parent, bus, branches and cards all share
//        the same coordinate system.
//     ===================================================== */

//     .fire-network {
//       width: var(--fire-network-width);
//       min-width: var(--fire-network-width);

//       margin: 0 auto;
//     }


//     /* =====================================================
//        FIRE PROTECTION PARENT
//     ===================================================== */

//     .fire-parent {
//       position: relative;

//       width: 430px;
//       min-width: 430px;
//       max-width: 430px;

//       height: 110px;
//       min-height: 110px;

//       margin: 0 auto;

//       padding: 13px 20px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 2px;

//       overflow: hidden;

//       border:
//         1px solid #a64f5d;

//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #663442 0%,
//           #572c39 55%,
//           #48232f 100%
//         );

//       box-shadow:
//         0 7px 18px
//         rgba(74, 30, 40, .14);

//       z-index: 5;
//     }


//     .fire-parent::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #cf6c78;
//     }


//     .fire-parent svg {
//       flex: 0 0 auto;

//       margin-bottom: 2px;

//       color: #f0a8b2;
//     }


//     .fire-parent span {
//       color: #efb8c0;

//       font-size: 8px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .16em;
//     }


//     .fire-parent h2 {
//       margin: 5px 0 2px;

//       color: #ffffff;

//       font-size: 19px;
//       font-weight: 700;

//       line-height: 1.15;

//       text-align: center;
//     }


//     .fire-parent p {
//       margin: 0;

//       color: #e3bdc3;

//       font-size: 9px;
//       font-weight: 550;

//       text-align: center;
//     }


//     /* =====================================================
//        FIRE PARENT → MAIN BUS
//     ===================================================== */

//     .fire-main-stem {
//       width: var(--wire-size);
//       height: 38px;

//       margin: 0 auto;

//       background: var(--wire);
//     }


//     /* =====================================================
//        FIRE DISTRIBUTION

//                   FIRE PROTECTION
//                         │
//                         │
//              ───────────┼───────────
//              │          │          │
//           ALARMS     FIGHTING     PUMP
//     ===================================================== */

//     .fire-distribution {
//       position: relative;

//       width: 100%;

//       height: 38px;
//       min-height: 38px;
//     }


//     /* =====================================================
//        HORIZONTAL BUS

//        Three equal columns:

//        first center  = 1/6
//        middle center = 3/6
//        last center   = 5/6

//        Bus begins at the first branch and terminates
//        at the third branch.
//     ===================================================== */

//     .fire-bus {
//       position: absolute;

//       top: 0;

//       left:
//         calc(
//           100% / (var(--fire-count) * 2)
//         );

//       right:
//         calc(
//           100% / (var(--fire-count) * 2)
//         );

//       height: var(--wire-size);

//       background: var(--wire);
//     }

//     .fire-bus--single {
//       left: 50%;
//       right: 50%;
//     }


//     /* =====================================================
//        EXACT THREE VERTICAL BRANCHES

//        Uses the same grid as the cards.
//     ===================================================== */

//     .fire-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--fire-count),
//           minmax(0, 1fr)
//         );

//       pointer-events: none;
//     }


//     .fire-line {
//       position: relative;
//     }


//     .fire-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       transform:
//         translateX(-50%);

//       background: var(--wire);
//     }


//     /* =====================================================
//        FIRE EQUIPMENT GRID

//        IMPORTANT:
//        Same three columns as .fire-lines.

//        No gap is used for connector geometry.
//     ===================================================== */

//     .fire-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--fire-count),
//           minmax(0, 1fr)
//         );

//       gap: 0;

//       align-items: start;
//     }


//     .fire-branch {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        FLOW → CARD CONNECTION POINT
//     ===================================================== */

//     .fire-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /* =====================================================
//        FIRE EQUIPMENT CARDS
//     ===================================================== */

//     .fire-branch > .eq-card {
//       width: var(--fire-card-width);
//       min-width: var(--fire-card-width);
//       max-width: var(--fire-card-width);

//       height: var(--fire-card-height);
//       min-height: var(--fire-card-height);
//       max-height: var(--fire-card-height);

//       margin: 0;

//       box-sizing: border-box;
//     }


//     /* =====================================================
//        FIRE CARD ACCENT

//        Keep operational colors inside EquipmentCard.
//        Only use a restrained fire-system accent here.
//     ===================================================== */

//     .fire-branch > .eq-card {
//       border-color:
//         rgba(
//           181,
//           91,
//           102,
//           .72
//         );
//     }


//     /* =====================================================
//        NO MOVEMENT ON HOVER

//        Critical for connector alignment.
//     ===================================================== */

//     .fire-view .eq-card:hover,
//     .fire-view .eq-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .fire-view {
//         --fire-card-width: 220px;
//         --fire-card-height: 142px;
//       }


//       .fire-network {
//         max-width: none;
//       }


//       .fire-parent {
//         width: 450px;
//         min-width: 450px;
//         max-width: 450px;

//         height: 114px;
//         min-height: 114px;
//       }
//     }


//     /* =====================================================
//        NORMAL LAPTOP
//     ===================================================== */

//     @media (
//       min-width: 1101px
//     ) and (
//       max-width: 1499px
//     ) {

//       .fire-view {
//         --fire-card-width: 200px;
//         --fire-card-height: 136px;
//       }


//       .fire-network {
//         max-width: none;
//       }


//       .fire-parent {
//         width: 420px;
//         min-width: 420px;
//         max-width: 420px;

//         height: 108px;
//         min-height: 108px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP / TABLET

//        Preserve the topology instead of squeezing
//        the three cards.
//     ===================================================== */

//     @media (max-width: 1100px) {

//       .fire-view {
//         --fire-card-width: 190px;
//         --fire-card-height: 132px;

//         padding-left: 18px;
//         padding-right: 18px;
//       }


//       .fire-network {
//         width: var(--fire-network-width);
//         min-width: var(--fire-network-width);
//       }


//       .fire-parent {
//         width: 390px;
//         min-width: 390px;
//         max-width: 390px;

//         height: 104px;
//         min-height: 104px;
//       }
//     }
//   `;


//   return (
//     <div className="fire-view">
//       <style>
//         {fireStyles}
//       </style>


//       <div
//         className="fire-network"
//         style={{
//           "--fire-count": fireCount,
//           "--fire-network-width": `${fireNetworkWidth}px`,
//         }}
//       >

//         {/* ===============================================
//             FIRE PROTECTION PARENT
//         ================================================ */}

//         <div className="fire-parent">

//           <Flame
//             size={26}
//             strokeWidth={1.8}
//           />


//           <span>
//             LIFE SAFETY
//           </span>


//           <h2>
//             FIRE PROTECTION SYSTEM
//           </h2>


//           <p>
//             DETECTION / PROTECTION / PUMP
//           </p>

//         </div>


//         {/* ===============================================
//             PARENT → MAIN FIRE BUS
//         ================================================ */}

//         {fireCount > 0 && (
//           <div className="fire-main-stem" />
//         )}


//         {/* ===============================================
//             HORIZONTAL BUS + THREE BRANCHES
//         ================================================ */}

//         {fireCount > 0 && (
//         <div className="fire-distribution">

//           <div
//             className={`fire-bus ${
//               fireCount === 1
//                 ? "fire-bus--single"
//                 : ""
//             }`}
//           />


//           <div className="fire-lines">

//             {equipment.map(
//               (item) => (

//                 <div
//                   className="fire-line"
//                   key={`line-${item.id}`}
//                 />

//               )
//             )}

//           </div>

//         </div>
//         )}


//         {/* ===============================================
//             FIRE ALARMS / FIRE FIGHTING / FIRE PUMP
//         ================================================ */}

//         {fireCount > 0 && (
//         <div className="fire-grid">

//           {equipment.map(
//             (item) => (

//               <div
//                 className="fire-branch"
//                 key={item.id}
//               >

//                 <EquipmentCard
//                   equipment={item}
//                   onOpen={
//                     onOpenEquipment
//                   }
//                 />

//               </div>

//             )
//           )}

//         </div>
//         )}

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    OPTIONAL UPS VIEW
//    UPS is not a top-level dashboard category, but this remains
//    isolated in case an existing config still routes to it.
// ========================================================= */

// function UPSView({ topology, onOpenEquipment }) {
//   const upsStyles = `
//     .ups-view {
//       --wire:#19b8cf;
//       width:100%;min-width:760px;min-height:100%;margin:0 auto;
//       display:flex;flex-direction:column;justify-content:center;
//     }
//     .ups-parent {
//       width:430px;min-height:100px;margin:0 auto;
//       display:flex;flex-direction:column;align-items:center;justify-content:center;
//       border:2px solid #2378b7;border-radius:7px;color:#fff;background:#102f6e;
//     }
//     .ups-parent h2 { margin:5px 0;font-size:18px; }
//     .ups-stem { width:2px;height:34px;margin:0 auto;background:var(--wire); }
//     .ups-grid {
//       position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));
//       gap:18px;padding-top:34px;
//     }
//     .ups-bus {
//       position:absolute;top:0;left:calc(50% / 4);right:calc(50% / 4);
//       height:2px;background:var(--wire);
//     }
//     .ups-branch { position:relative; }
//     .ups-branch::before {
//       content:"";position:absolute;left:50%;bottom:100%;width:2px;height:34px;
//       transform:translateX(-50%);background:var(--wire);
//     }
//     .ups-view .eq-card:hover { transform:none; }
//   `;

//   return (
//     <div className="ups-view">
//       <style>{upsStyles}</style>
//       <div className="ups-parent">
//         <BatteryCharging size={26} />
//         <h2>UPS SYSTEM</h2>
//         <span>UNINTERRUPTIBLE POWER SUPPLY</span>
//       </div>
//       <div className="ups-stem" />
//       <div className="ups-grid">
//         <div className="ups-bus" />
//         {topology.equipment.map((item) => (
//           <div className="ups-branch" key={item.id}>
//             <EquipmentCard equipment={item} onOpen={onOpenEquipment} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    RENDERER
//    Only routing lives here. No shared topology renderer.
// ========================================================= */

// function FlowRenderer({ topology, onOpenEquipment }) {
//   switch (topology.id) {
//     case "source":
//       return <SourceView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "feeder":
//       return <FeederView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "transformer":
//       return <TransformerView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "lt-kiosk":
//       return <LTKioskView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "busduct":
//       return <BusductView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "pcc":
//       return <PCCView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "raising-main":
//       return <RaisingMainView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "wing":
//       return <WingView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "dg":
//       return <DGView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "hvac":
//       return <HVACView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "wtp":
//       return <WaterView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "fire":
//       return <FireView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "ups":
//       return <UPSView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     default:
//       return null;
//   }
// }

// /* =========================================================
//    PAGE
// ========================================================= */

// function FlowDetail({
//   project,
//   flow,
//   onBack,
//   onOpenEquipment,
// }) {
//   const topology = getProjectTopology(
//     project,
//     flow?.id
//   );

//   if (!topology) {
//     return (
//       <main className="fd-shell">
//         <style>{pageStyles}</style>
//         <div className="fd-empty">
//           <Activity size={38} />
//           <h2>Flow configuration unavailable</h2>
//           <button type="button" onClick={onBack}>Back</button>
//         </div>
//       </main>
//     );
//   }

//   const equipment = getTopologyEquipment(topology);
//   const FlowIcon = flow?.icon || Activity;

//   return (
//     <main className="fd-shell">
//       <style>{pageStyles}</style>

//       <section className="fd-dashboard">
//         <header className="fd-header">
//           <div className="fd-header__left">
//             <button type="button" className="fd-back" onClick={onBack}>
//               <ArrowLeft size={17} /> Overview
//             </button>

//             <span className="fd-main-icon"><FlowIcon size={23} /></span>

//             <div>
//               <span className="fd-eyebrow">BMS LIVE FLOW</span>
//               <h1>{topology.title}</h1>
//               <p>{topology.subtitle}</p>
//             </div>
//           </div>

//           <div className="fd-header__right">
//             <span className="fd-live"><i />DEMO LIVE</span>
//             <span className="fd-comm"><Wifi size={15} />Connected</span>
//           </div>
//         </header>

//         <section className="fd-workspace">
//           <header className="workspace-title">
//             <div>
//               <span>INTERNAL EQUIPMENT</span>
//               <h2>Operational Flow</h2>
//             </div>
//             <div className="workspace-legend">
//               <span><i className="dot-on" />Active</span>
//               <span><i className="dot-standby" />Standby</span>
//               <span><i className="dot-fault" />Fault</span>
//             </div>
//           </header>

//           <div className="fd-content">
//             <FlowRenderer topology={topology} onOpenEquipment={onOpenEquipment} />
//           </div>
//         </section>

//         <footer className="fd-footer">
//           Demo telemetry • Monitoring only • Backend-ready equipment IDs
//         </footer>
//       </section>
//     </main>
//   );
// }

// /* =========================================================
//    GLOBAL PAGE + SHARED CARD CSS ONLY
//    IMPORTANT:
//    No Source/Feeder/Transformer/LT Kiosk/Busduct/PCC/etc.
//    topology geometry is defined here.
// ========================================================= */

// const pageStyles = `
// *,
// *::before,
// *::after { box-sizing:border-box; }

// .fd-shell {
//   width:100%;
//   height:100%;
//   min-height:0;
//   padding:0;
//   overflow:hidden;
//   color:#18283a;
//   background:transparent;
// }

// .fd-dashboard {
//   width:100%;
//   max-width:none;
//   height:100%;
//   min-height:0;
//   margin:0;
//   display:grid;
//   grid-template-rows:64px minmax(0,1fr) 14px;
//   gap:4px;
// }

// .fd-header {
//   min-width:0;
//   padding:8px 14px;
//   display:flex;
//   align-items:center;
//   justify-content:space-between;
//   gap:18px;
//   border:1px solid #1e3b54;
//   border-radius:9px;
//   background:linear-gradient(120deg,#112b42 0%,#0b2033 52%,#102a40 100%);
// }

// .fd-header__left,
// .fd-header__right { display:flex;align-items:center; }

// .fd-header__left { min-width:0;gap:11px; }
// .fd-header__right { flex-shrink:0;gap:8px; }

// .fd-back {
//   height:36px;padding:0 12px;display:inline-flex;align-items:center;gap:7px;
//   border:1px solid #45647d;border-radius:6px;color:#e6eef5;background:#193850;
//   cursor:pointer;font-size:10px;font-weight:700;
// }

// .fd-main-icon {
//   width:40px;height:40px;flex-shrink:0;display:grid;place-items:center;
//   border:1px solid #477da4;border-radius:7px;color:#fff;background:#205475;
// }

// .fd-eyebrow {
//   display:block;margin-bottom:2px;color:#7f9bb1;font-size:8px;font-weight:800;
//   letter-spacing:.14em;
// }

// .fd-header h1 { margin:0;color:#fff;font-size:clamp(18px,1.35vw,24px);line-height:1.05; }
// .fd-header p { margin:3px 0 0;color:#9bb0c0;font-size:9px; }

// .fd-live,
// .fd-comm {
//   height:32px;padding:0 11px;display:inline-flex;align-items:center;gap:7px;
//   border-radius:6px;font-size:8px;font-weight:800;letter-spacing:.04em;
// }

// .fd-live { color:#9de8c6;border:1px solid #32765f;background:#123e32; }
// .fd-live i { width:7px;height:7px;border-radius:50%;background:#30d79b; }
// .fd-comm { color:#d0dce6;border:1px solid #405f77;background:#17344c; }




// .fd-workspace {
//   width:100%;
//   min-width:0;
//   min-height:0;
//   display:grid;
//   grid-template-rows:46px minmax(0,1fr);
//   overflow:hidden;
//   border:0;
//   border-radius:0;
//   background:transparent;
// }

// .workspace-title {
//   width:100%;
//   padding:6px 18px;
//   display:flex;
//   align-items:center;
//   justify-content:space-between;
//   border:0;
//   border-bottom:1px solid rgba(117,137,153,.20);
//   background:transparent;
// }

// .workspace-title > div:first-child span {
//   display:block;color:#82919e;font-size:7px;font-weight:800;letter-spacing:.14em;
// }

// .workspace-title h2 { margin:2px 0 0;color:#1e384d;font-size:16px; }
// .workspace-legend { display:flex;gap:14px; }
// .workspace-legend span {
//   display:inline-flex;align-items:center;gap:5px;color:#687986;font-size:8px;font-weight:650;
// }
// .workspace-legend i { width:7px;height:7px;border-radius:50%; }
// .dot-on { background:#22bf87; }
// .dot-standby { background:#dda33d; }
// .dot-fault { background:#dd4b5d; }

// .fd-content {
//   width:100%;
//   min-width:0;
//   min-height:0;
//   padding:10px 18px 6px;
//   overflow:auto;
//   background:transparent;
// }

// /* SHARED EQUIPMENT CARD */
// .eq-card {
//   width:100%;min-width:0;min-height:132px;padding:12px 13px 10px;position:relative;
//   display:flex;flex-direction:column;overflow:hidden;text-align:left;
//   border:1px solid #2c75a7;border-radius:8px;color:#fff;
//   background:linear-gradient(145deg,#173f75 0%,#103264 52%,#0c2855 100%);
//   box-shadow:none;cursor:pointer;transition:border-color .16s ease,box-shadow .16s ease;
// }

// .eq-card::before {
//   content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:#2bd197;
// }

// .eq-card:hover,
// .eq-card:focus-visible {
//   border-color:#59b8d3;
//   box-shadow:0 8px 20px rgba(13,47,72,.13);
//   outline:none;
// }

// .eq-card--alarm {
//   border-color:#a54e5d;
//   background:linear-gradient(145deg,#6b3746,#4b2732);
// }
// .eq-card--alarm::before { background:#ef6575; }

// .eq-card__top { display:flex;align-items:center;justify-content:space-between;gap:8px; }
// .eq-card__icon {
//   width:35px;height:35px;display:grid;place-items:center;
//   border:1px solid rgba(255,255,255,.15);border-radius:6px;color:#b9dcf4;background:#12345f;
// }

// .eq-status {
//   min-height:23px;padding:0 8px;display:inline-flex;align-items:center;gap:5px;
//   border-radius:4px;font-size:8px;font-weight:800;
// }
// .eq-status i { width:6px;height:6px;border-radius:50%; }
// .eq-status--on { color:#91e8c3;background:#124534; }
// .eq-status--on i { background:#2dd69a; }
// .eq-status--standby { color:#f1cd7c;background:#4b3a1d; }
// .eq-status--standby i { background:#dfa63d; }
// .eq-status--off { color:#d0d9e0;background:#334958; }
// .eq-status--off i { background:#8a9aa7; }

// .eq-card__name { margin:12px 0 8px; }
// .eq-card__name h3 {
//   margin:0;overflow:hidden;color:#fff;font-size:15px;font-weight:750;
//   text-overflow:ellipsis;white-space:nowrap;
// }
// .eq-card__name p {
//   min-height:12px;margin:3px 0 0;overflow:hidden;color:#a9c5d8;font-size:8px;
//   text-overflow:ellipsis;white-space:nowrap;
// }

// .eq-card__bottom {
//   min-height:24px;margin-top:auto;padding-top:7px;display:flex;align-items:center;
//   justify-content:space-between;gap:6px;border-top:1px solid rgba(255,255,255,.10);
//   color:#88e1bc;font-size:7px;
// }
// .eq-card__bottom > span { display:inline-flex;align-items:center;gap:4px; }
// .eq-card__bottom i { width:6px;height:6px;border-radius:50%;background:#2bd197; }
// .eq-card__bottom strong { color:#c5d3dd;font-size:7px; }

// .eq-card__hover {
//   position:absolute;inset:0;z-index:5;padding:14px;display:flex;flex-direction:column;
//   justify-content:center;gap:10px;opacity:0;visibility:hidden;transform:translateY(5px);
//   color:#fff;background:linear-gradient(145deg,rgba(9,34,66,.985),rgba(8,45,75,.985));
//   transition:opacity .16s ease,transform .16s ease,visibility .16s ease;pointer-events:none;
// }
// .eq-card:hover .eq-card__hover,
// .eq-card:focus-visible .eq-card__hover {
//   opacity:1;visibility:visible;transform:translateY(0);
// }
// .eq-card__hover-title { color:#79d9ec;font-size:7px;font-weight:800;letter-spacing:.16em; }
// .eq-card__hover-grid {
//   display:grid;grid-template-columns:repeat(3,minmax(0,1fr));
//   border-top:1px solid rgba(121,217,236,.22);
//   border-bottom:1px solid rgba(121,217,236,.22);
// }
// .eq-card__hover-grid > div { min-width:0;padding:9px 7px; }
// .eq-card__hover-grid > div + div { border-left:1px solid rgba(121,217,236,.18); }
// .eq-card__hover-grid span { display:block;margin-bottom:3px;color:#91aabd;font-size:7px; }
// .eq-card__hover-grid strong {
//   display:block;overflow:hidden;color:#fff;font-size:11px;font-weight:650;
//   text-overflow:ellipsis;white-space:nowrap;
// }
// .eq-card__hover small { color:#a8bac8;font-size:7px; }

// /* SHARED SIMPLE CARD */
// .simple-card {
//   width:100%;min-height:132px;padding:16px 18px;position:relative;display:flex;
//   flex-direction:column;align-items:center;justify-content:center;overflow:hidden;
//   border:2px solid #1975bd;border-radius:7px;color:#fff;text-align:center;
//   background:#102f6e;box-shadow:none;
// }
// button.simple-card { cursor:pointer; }
// .simple-card svg { margin:5px 0;color:#a5d4f2; }
// .simple-card__eyebrow { color:#9dc9eb;font-size:8px;font-weight:800;letter-spacing:.17em; }
// .simple-card h3 { margin:4px 0;color:#fff;font-size:18px;font-weight:800; }
// .simple-card p { margin:2px 0 8px;color:#c1d2e3;font-size:10px;font-weight:650; }
// .simple-card > strong {
//   display:inline-flex;align-items:center;gap:6px;color:#37dda7;font-size:8px;
// }
// .simple-card > strong i { width:8px;height:8px;border-radius:50%;background:#2bd197; }

// .simple-card__hover {
//   position:absolute;inset:0;z-index:5;padding:14px;display:flex;flex-direction:column;
//   justify-content:center;gap:9px;opacity:0;visibility:hidden;transform:translateY(5px);
//   color:#fff;background:linear-gradient(145deg,rgba(9,34,66,.985),rgba(8,45,75,.985));
//   transition:opacity .16s ease,transform .16s ease,visibility .16s ease;pointer-events:none;
// }
// .simple-card:hover .simple-card__hover,
// .simple-card:focus-visible .simple-card__hover {
//   opacity:1;visibility:visible;transform:translateY(0);
// }
// .simple-card__hover > span { color:#79d9ec;font-size:7px;font-weight:800;letter-spacing:.15em; }
// .simple-card__hover > div {
//   display:grid;grid-template-columns:repeat(3,minmax(0,1fr));
//   border-top:1px solid rgba(121,217,236,.22);
//   border-bottom:1px solid rgba(121,217,236,.22);
// }
// .simple-card__hover small { min-width:0;padding:8px 5px;color:#91aabd;font-size:7px; }
// .simple-card__hover small + small { border-left:1px solid rgba(121,217,236,.18); }
// .simple-card__hover b {
//   display:block;margin-top:3px;overflow:hidden;color:#fff;font-size:10px;
//   text-overflow:ellipsis;white-space:nowrap;
// }
// .simple-card__hover em { color:#a8bac8;font-size:7px;font-style:normal; }

// .fd-footer { padding:0 4px;display:flex;align-items:center;color:#6f8190;font-size:7px;white-space:nowrap; }

// .fd-empty {
//   min-height:100vh;display:grid;place-items:center;align-content:center;gap:12px;
// }
// .fd-empty button {
//   padding:9px 14px;border:0;border-radius:6px;color:#fff;background:#234f73;
// }

// /* Global dark theme only. Individual topology colors remain inside each view. */
// html[data-theme="dark"] .fd-shell {
//   color:var(--app-text,#f4f8fc);
//   background:var(--app-bg,#07111f);
// }
// html[data-theme="dark"] .fd-workspace,
// html[data-theme="dark"] .fd-content,
// html[data-theme="dark"] .workspace-title {
//   border-color:var(--app-border,#203651);
//   background-color:var(--app-surface,#0b1728);
// }
// html[data-theme="dark"] .workspace-title h2 { color:var(--app-text,#f4f8fc); }
// html[data-theme="dark"] .workspace-title span,
// html[data-theme="dark"] .workspace-legend span { color:var(--app-muted,#8294aa); }

// @media(max-width:900px) {
//   .fd-shell { height:auto;min-height:100%;overflow:visible; }
//   .fd-dashboard { height:auto;min-height:100%;display:flex;flex-direction:column; }
//   .fd-header { flex-wrap:wrap; }
//   .fd-workspace { overflow:visible; }
//   .fd-content { overflow-x:auto;overflow-y:visible; }
// }

// @media(max-width:600px) {
//   .fd-shell { padding:6px; }
//   .fd-header { align-items:flex-start;flex-direction:column; }
//   .fd-header__left { width:100%;flex-wrap:wrap; }
//   .fd-header__right { width:100%;justify-content:flex-end; }
//   .workspace-title { align-items:flex-start;flex-direction:column;gap:6px; }
// }
// `;

// export default FlowDetail;













// import { useState } from "react";

// import {
//   ArrowLeft,
//   Activity,
//   RadioTower,
//   GitBranch,
//   Zap,
//   Network,
//   Wifi,
//   Gauge,
//   Cpu,
//   BatteryCharging,
//   Bolt,
//   Building2,
//   CirclePower,
//   Fan,
//   Droplets,
//   Flame,
//   PanelsTopLeft,
//   ArrowDown,
//   ArrowUp,
//   ArrowLeftRight,
// } from "lucide-react";
// import {
//   demoTelemetry,
//   getTopologyEquipment,
//   getProjectTopology,
// } from "../data/flowConfigs";

// /* =========================================================
//    SHARED HELPERS ONLY
//    These are presentation/data helpers, NOT topology layouts.
// ========================================================= */

// function getIcon(type) {
//   switch (type) {
//     case "incomer": return RadioTower;
//     case "meter": return Gauge;
//     case "feeder": return GitBranch;
//     case "transformer": return Zap;
//     case "kiosk": return PanelsTopLeft;
//     case "busbar":
//     case "busduct": return Network;
//     case "pcc-circuit":
//     case "coupler": return Cpu;
//     case "ups": return BatteryCharging;
//     case "raising-main": return Bolt;
//     case "wing": return Building2;
//     case "dg": return CirclePower;
//     case "hvac": return Fan;
//     case "water-main":
//     case "stp":
//     case "wtp":
//     case "tank": return Droplets;
//     case "fire-alarm":
//     case "fire-fighting":
//     case "fire-pump": return Flame;
//     default: return Activity;
//   }
// }

// // function getPreview(equipment, data) {
// //   if (!data) return [];

// //   switch (equipment.type) {
// //     case "transformer":
// //       return [
// //         ["Oil", `${data.oilTemp}°C`],
// //         ["Winding", `${data.windingTemp}°C`],
// //         ["Load", `${data.load}%`],
// //       ];
// //     case "busduct":
// //       return [
// //         ["Temp", `${data.temperature}°C`],
// //         ["Vibration", `${data.vibration} mm/s`],
// //         ["Health", data.health],
// //       ];
// //     case "ups":
// //       return [
// //         ["Capacity", data.capacity],
// //         ["Load", `${data.load}%`],
// //         ["Battery", `${data.battery}%`],
// //       ];
// //     case "water-main":
// //       return [
// //         ["Flow", `${data.flowRate} m³/h`],
// //         ["Water", `${data.totalWater}%`],
// //         ["Pressure", `${data.pressure} bar`],
// //       ];
// //     case "stp":
// //     case "wtp":
// //       return [
// //         ["Inlet", `${data.inletFlow} m³/h`],
// //         ["Outlet", `${data.outletFlow} m³/h`],
// //         ["pH", data.ph],
// //       ];
// //     case "tank":
// //       return [
// //         ["Level", `${data.level}%`],
// //         ["Volume", `${data.volume} m³`],
// //         ["Outlet", `${data.outletFlow} m³/h`],
// //       ];
// //     case "fire-alarm":
// //       return [
// //         ["Smoke", data.smokeDetectors],
// //         ["Heat", data.heatDetectors],
// //         ["Alarms", data.activeAlarms],
// //       ];
// //     case "fire-fighting":
// //       return [
// //         ["Pressure", `${data.pressure} bar`],
// //         ["Hydrant", data.hydrantNetwork],
// //         ["Valve", data.mainValve],
// //       ];
// //     case "fire-pump":
// //       return [
// //         ["Voltage", `${data.voltage} V`],
// //         ["Pressure", `${data.pressure} bar`],
// //         ["Mode", data.mode],
// //       ];
// //     default:
// //       return [
// //         ["kWh", data.kWh ?? "--"],
// //         [
// //           "Voltage",
// //           data.voltage
// //             ? data.voltage === 33
// //               ? "33 kV"
// //               : `${data.voltage} V`
// //             : "--",
// //         ],
// //         ["PF", data.powerFactor ?? "--"],
// //       ];
// //   }
// // }

// function getPreview(equipment, data) {
//   if (!equipment || !data) return [];

//   const value = (v, suffix = "") =>
//     v !== undefined && v !== null && v !== ""
//       ? `${v}${suffix}`
//       : "--";

//   switch (equipment.type) {

//     /* =====================================================
//        SOURCE / INCOMER
//        Standard electrical monitoring
//     ===================================================== */

//     case "incomer":
//       return [
//         ["Voltage", data.voltage === 33 ? "33 kV" : value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        METER
//     ===================================================== */

//     case "meter":
//       return [
//         ["Voltage", data.voltage === 33 ? "33 kV" : value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        FEEDER
//     ===================================================== */

//     case "feeder":
//       return [
//         ["Voltage", data.voltage === 33 ? "33 kV" : value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        TRANSFORMER
//     ===================================================== */

//     case "transformer":
//       return [
//         ["Oil Temp", value(data.oilTemp, "°C")],
//         ["Winding Temp", value(data.windingTemp, "°C")],
//         ["Load", value(data.load, "%")],
//         ["Relay", value(data.buchholzRelay ?? data.relay)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        LT KIOSK
//     ===================================================== */

//     case "kiosk":
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        BUSDUCT / BUSBAR
//     ===================================================== */

//     case "busduct":
//     case "busbar":
//       return [
//         ["Temperature", value(data.temperature, "°C")],
//         ["Vibration", value(data.vibration, " mm/s")],
//         ["Load", value(data.load, "%")],
//         ["Health", value(data.health)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        PCC
//     ===================================================== */

//     case "pcc-circuit":
//     case "coupler":
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        RAISING MAIN
//     ===================================================== */

//     case "raising-main":
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        WING
//     ===================================================== */

//     case "wing":
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];


//     /* =====================================================
//        DIESEL GENERATOR
//     ===================================================== */

//     case "dg":
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["PF", value(data.powerFactor)],
//         ["Load", value(data.load, "%")],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        UPS
//     ===================================================== */

//     case "ups":
//       return [
//         ["Capacity", value(data.capacity)],
//         ["Input V", value(data.inputVoltage, " V")],
//         ["Output V", value(data.outputVoltage, " V")],
//         ["Load", value(data.load, "%")],
//         ["Battery", value(data.battery, "%")],
//         ["Input Hz", value(data.inputFrequency, " Hz")],
//         ["Output Hz", value(data.outputFrequency, " Hz")],
//         ["Battery V", value(data.batteryVoltage, " V")],
//         ["Backup", value(data.backupTime, " min")],
//         ["Mode", value(data.mode)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        WATER MAIN
//     ===================================================== */

//     case "water-main":
//       return [
//         ["Flow", value(data.flowRate, " m³/h")],
//         ["Water", value(data.totalWater, "%")],
//         ["Pressure", value(data.pressure, " bar")],
//         ["Health", value(data.health)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        STP / WTP
//     ===================================================== */

//     case "stp":
//     case "wtp":
//       return [
//         ["Inlet Flow", value(data.inletFlow, " m³/h")],
//         ["Outlet Flow", value(data.outletFlow, " m³/h")],
//         ["pH", value(data.ph)],
//         ["Turbidity", value(data.turbidity, " NTU")],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        WATER TANK
//     ===================================================== */

//     case "tank":
//       return [
//         ["Level", value(data.level, "%")],
//         ["Volume", value(data.volume, " m³")],
//         ["Inlet Flow", value(data.inletFlow, " m³/h")],
//         ["Outlet Flow", value(data.outletFlow, " m³/h")],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        FIRE ALARM
//     ===================================================== */

//     case "fire-alarm":
//       return [
//         ["Smoke", value(data.smokeDetectors)],
//         ["Heat", value(data.heatDetectors)],
//         ["Active Alarms", value(data.activeAlarms)],
//         ["Health", value(data.health)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        FIRE FIGHTING
//     ===================================================== */

//     case "fire-fighting":
//       return [
//         ["Pressure", value(data.pressure, " bar")],
//         ["Hydrant", value(data.hydrantNetwork)],
//         ["Main Valve", value(data.mainValve)],
//         ["Health", value(data.health)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        FIRE PUMP
//     ===================================================== */

//     case "fire-pump":
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["Pressure", value(data.pressure, " bar")],
//         ["Mode", value(data.mode)],
//         ["Health", value(data.health)],
//         ["Status", value(data.status)],
//       ];


//     /* =====================================================
//        DEFAULT ELECTRICAL EQUIPMENT
//     ===================================================== */

//     default:
//       return [
//         ["Voltage", value(data.voltage, " V")],
//         ["PF", value(data.powerFactor)],
//         ["Amps", value(data.current ?? data.amps, " A")],
//         ["kVAh", value(data.kVAh)],
//         ["kWh", value(data.kWh)],
//       ];
//   }
// }




// function EquipmentCard({ equipment, onOpen }) {
//   if (!equipment) return null;

//   const Icon = getIcon(equipment.type);
//   const data = demoTelemetry[equipment.id];
//   const alarm = data?.fault || data?.trip || data?.warning;
//   const status = data?.status || "OFFLINE";
//   const preview = getPreview(equipment, data);

//   return (
//     <button
//       type="button"
//       className={`eq-card ${alarm ? "eq-card--alarm" : ""}`}
//       onClick={() => onOpen?.({ ...equipment, telemetry: data })}
//     >
//       <div className="eq-card__top">
//         <span className="eq-card__icon"><Icon size={19} /></span>
//         <span
//           className={`eq-status ${
//             status === "ON"
//               ? "eq-status--on"
//               : status === "STANDBY"
//               ? "eq-status--standby"
//               : "eq-status--off"
//           }`}
//         >
//           <i />{status}
//         </span>
//       </div>

//       <div className="eq-card__name">
//         <h3>{equipment.name}</h3>
//         <p>{equipment.label}</p>
//       </div>

//       {preview.length > 0 && (
//         <div className="eq-card__hover" aria-hidden="true">
//           <span className="eq-card__hover-title">LIVE READINGS</span>
//           <div className="eq-card__hover-grid">
//             {preview.map(([label, value]) => (
//               <div key={label}>
//                 <span>{label}</span>
//                 <strong>{value}</strong>
//               </div>
//             ))}
//           </div>
//           <small>Click to open operational view</small>
//         </div>
//       )}

//       <div className="eq-card__bottom">
//         <span><i />{data?.health || "UNKNOWN"}</span>
//         <strong>View Operation →</strong>
//       </div>
//     </button>
//   );
// }

// function SimpleFlowCard({
//   title,
//   subtitle,
//   eyebrow,
//   icon: Icon,
//   onClick,
//   live = true,
//   equipment,
// }) {
//   const data = equipment ? demoTelemetry[equipment.id] : null;
//   const preview = equipment ? getPreview(equipment, data) : [];

//   const content = (
//     <>
//       {eyebrow && <span className="simple-card__eyebrow">{eyebrow}</span>}
//       {Icon && <Icon size={22} />}
//       <h3>{title}</h3>
//       {subtitle && <p>{subtitle}</p>}
//       {live && <strong><i /> LIVE</strong>}

//       {preview.length > 0 && (
//         <div className="simple-card__hover" aria-hidden="true">
//           <span>LIVE READINGS</span>
//           <div>
//             {preview.map(([label, value]) => (
//               <small key={label}>{label}<b>{value}</b></small>
//             ))}
//           </div>
//           <em>Click to open operational view</em>
//         </div>
//       )}
//     </>
//   );

//   return onClick ? (
//     <button type="button" className="simple-card" onClick={onClick}>{content}</button>
//   ) : (
//     <div className="simple-card">{content}</div>
//   );
// }

// /* =========================================================
//    1. SOURCE VIEW
//    Independent JSX + independent topology CSS.
//    Correct card-level flow: INC1 ─ OUT ─ INC2
//    Source also branches vertically to INC1 and INC2.
//    OUT drops vertically to Meter.
// ========================================================= */

// function SourceView({ topology, onOpenEquipment }) {
//   const configuration = topology?.configuration || {};
//   const voltageLevel = configuration.voltageLevel || topology?.voltageLevel || "33kV";
//   const equipment = Array.isArray(topology?.equipment) ? topology.equipment : [];

//   const incomingFeeders = equipment.filter((item) => item.role === "incoming" || item.type === "incomer");
//   const outgoingFeeders = equipment.filter((item) => item.role === "outgoing" || item.type === "busbar");
//   const meters = equipment.filter((item) => item.role === "meter" || item.type === "meter");

//   const incomingCount = incomingFeeders.length;
//   const outgoingCount = outgoingFeeders.length;
//   const meterCount = meters.length;
//   const maxCount = Math.max(incomingCount, outgoingCount, meterCount, 1);
//   const networkWidth = Math.max(760, maxCount * 190 + Math.max(0, maxCount - 1) * 24);

//   const sourceStyles = `
//     .source-view{--wire:#22b8cf;--wire-size:2px;--equipment-card-width:180px;width:100%;min-width:0;min-height:100%;box-sizing:border-box;padding:14px 28px 26px;display:flex;flex-direction:column;align-items:center;overflow:auto}
//     .source-parent{position:relative;width:clamp(360px,34vw,460px);min-height:108px;padding:14px 22px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;border:1px solid #367fb1;border-radius:6px;color:#fff;background:linear-gradient(145deg,#153e72,#102f61 55%,#0d2853);box-shadow:0 7px 18px rgba(11,44,75,.13);z-index:3}
//     .source-parent::before{content:"";position:absolute;top:0;left:0;width:100%;height:3px;background:#3eb9d0}
//     .source-parent svg{color:#71d0e2}.source-parent span{color:#8ec5ea;font-size:8px;font-weight:800;letter-spacing:.16em}.source-parent h2{margin:4px 0 2px;font-size:20px}.source-parent p{margin:0;color:#adc7d7;font-size:9px;font-weight:600}
//     .source-network{position:relative;display:flex;flex-direction:column;align-items:stretch;margin:0 auto;padding:0 10px 10px;box-sizing:border-box}
//     .source-parent-stem{width:var(--wire-size);height:26px;flex:0 0 26px;background:var(--wire);margin:0 auto}
//     .source-stage{position:relative;width:100%;display:flex;flex-direction:column;align-items:stretch;padding-top:24px}
//     .source-stage-label{position:absolute;left:0;right:0;top:0;z-index:4;margin:0;color:#647d8d;font-size:8px;font-weight:800;letter-spacing:.13em;text-align:center;line-height:14px;pointer-events:none;background:transparent}
//     .source-bus-top,.source-bus-bottom{position:relative;width:100%;height:30px;flex:0 0 30px}
//     .source-bus-top::before,.source-bus-bottom::before{content:"";position:absolute;left:calc(100% / (var(--count) * 2));right:calc(100% / (var(--count) * 2));height:var(--wire-size);background:var(--wire)}
//     .source-bus-top::before{top:0}.source-bus-bottom::before{bottom:0}
//         .source-card-row{position:relative;width:100%;display:grid;grid-template-columns:repeat(var(--count),minmax(180px,1fr));gap:24px;align-items:stretch}
//     .source-card-wrap{position:relative;min-width:0;display:flex;justify-content:center;align-items:stretch}
//     .source-card-wrap::before,.source-card-wrap::after{content:"";position:absolute;left:50%;width:var(--wire-size);height:30px;transform:translateX(-50%);background:var(--wire);z-index:0}
//     .source-card-wrap::before{bottom:100%}.source-card-wrap::after{top:100%}
//     .source-card-wrap .eq-card{position:relative;z-index:2;width:100%;max-width:205px;transform:none!important}
//     .source-interstage{width:var(--wire-size);height:38px;flex:0 0 38px;margin:0 auto;background:var(--wire)}
//     .source-stage--last .source-card-wrap::after,.source-stage--last .source-bus-bottom{display:none}
//     .source-stage--single .source-bus-top::before,.source-stage--single .source-bus-bottom::before{left:50%;right:auto;width:var(--wire-size);transform:translateX(-50%)}
//     @media(max-width:1100px){.source-view{align-items:flex-start;padding-left:18px;padding-right:18px}.source-parent{align-self:center}.source-network{align-self:center}.source-card-row{gap:20px}}
//   `;

//   const Stage = ({ label, items, last = false }) => {
//     if (!items.length) return null;
//     const count = items.length;
//     return (
//       <div className={`source-stage ${last ? "source-stage--last" : ""} ${count === 1 ? "source-stage--single" : ""}`} style={{ "--count": count }}>
//         <div className="source-stage-label">{label}</div>
//         <div className="source-bus-top" />
//         <div className="source-card-row">
//           {items.map((item) => (
//             <div className="source-card-wrap" key={item.id}>
//               <EquipmentCard equipment={item} onOpen={onOpenEquipment} />
//             </div>
//           ))}
//         </div>
//         {!last && <div className="source-bus-bottom" />}
//       </div>
//     );
//   };

//   const stages = [
//     incomingCount ? { label: "INCOMING SOURCES", items: incomingFeeders } : null,
//     outgoingCount ? { label: "MAIN BUS / OUTGOING", items: outgoingFeeders } : null,
//     meterCount ? { label: "ENERGY METERING", items: meters } : null,
//   ].filter(Boolean);

//   return (
//     <div className="source-view">
//       <style>{sourceStyles}</style>
//       <div className="source-parent">
//         <Zap size={27} strokeWidth={1.8} />
//         <span>CENTRAL CONTROL PANEL</span>
//         <h2>{voltageLevel} SOURCE</h2>
//         <p>{incomingCount} INCOMING / {outgoingCount} OUTGOING{meterCount ? ` / ${meterCount} METER${meterCount === 1 ? "" : "S"}` : ""}</p>
//       </div>
//       {stages.length > 0 && <div className="source-parent-stem" />}
//       <div className="source-network" style={{ width: `${networkWidth}px`, minWidth: `${networkWidth}px` }}>
//         {stages.map((stage, index) => (
//           <div key={stage.label}>
//             <Stage label={stage.label} items={stage.items} last={index === stages.length - 1} />
//             {index < stages.length - 1 && <div className="source-interstage" />}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// /* =========================================================
//    2. FEEDER VIEW
// ========================================================= */
// /* =========================================================
//    2. FEEDER VIEW
// ========================================================= */

// /* =========================================================
//    FEEDER VIEW
//    Dynamic:
//    - Client-configured voltage
//    - N incoming feeders
//    - N outgoing feeders
//    - Static engineering bus
// ========================================================= */

// function FeederView({
//   topology,
//   onOpenEquipment,
// }) {
//   const configuration =
//     topology?.configuration || {};

//   const voltageLevel =
//     configuration.voltageLevel ||
//     topology?.voltageLevel ||
//     "33kV";


//   /* =====================================================
//      DYNAMIC EQUIPMENT

//      New project structure:
//        incomingFeeders[]
//        outgoingFeeders[]

//      Legacy fallback:
//        incoming
//        equipment[]
//   ===================================================== */

//   const incomingFeeders =
//     Array.isArray(
//       topology?.incomingFeeders
//     )
//       ? topology.incomingFeeders
//       : topology?.incoming
//       ? [topology.incoming]
//       : [];


//   const outgoingFeeders =
//     Array.isArray(
//       topology?.outgoingFeeders
//     )
//       ? topology.outgoingFeeders
//       : Array.isArray(
//           topology?.equipment
//         )
//       ? topology.equipment
//       : [];


//   const incomingCount =
//     incomingFeeders.length;

//   const outgoingCount =
//     outgoingFeeders.length;


//   /*
//     The drawing grows horizontally when the client has
//     many feeders.

//     This prevents cards from becoming tiny and prevents
//     conductors from crossing/overlapping cards.
//   */

//   const cardWidth = 180;
//   const columnGap = 28;

//   const incomingWidth =
//     incomingCount > 0
//       ? incomingCount * cardWidth +
//         Math.max(
//           incomingCount - 1,
//           0
//         ) *
//           columnGap
//       : 0;

//   const outgoingWidth =
//     outgoingCount > 0
//       ? outgoingCount * cardWidth +
//         Math.max(
//           outgoingCount - 1,
//           0
//         ) *
//           columnGap
//       : 0;

//   const networkWidth =
//     Math.max(
//       760,
//       incomingWidth,
//       outgoingWidth
//     );


//   const feederStyles = `
//     .fd-feeder {
//       width: 100%;
//       min-width: 0;
//     }


//     /* =====================================================
//        HEADER
//     ===================================================== */

//     .fd-feeder__header {
//       display: flex;

//       align-items: center;
//       justify-content: space-between;

//       gap: 20px;

//       margin-bottom: 24px;

//       padding-bottom: 14px;

//       border-bottom:
//         1px solid
//         rgba(105, 150, 175, 0.16);
//     }


//     .fd-feeder__header-copy {
//       min-width: 0;
//     }


//     .fd-feeder__eyebrow {
//       display: block;

//       margin-bottom: 5px;

//       color: #6aaec3;

//       font-size: 9px;
//       font-weight: 800;

//       letter-spacing: 0.15em;

//       text-transform: uppercase;
//     }


//     .fd-feeder__title {
//       margin: 0;

//       color:
//         var(
//           --text-primary,
//           #eaf4fb
//         );

//       font-size:
//         clamp(
//           20px,
//           2vw,
//           28px
//         );

//       font-weight: 700;

//       letter-spacing: -0.02em;
//     }


//     .fd-feeder__subtitle {
//       margin:
//         6px 0 0;

//       color:
//         var(
//           --text-secondary,
//           #8499a9
//         );

//       font-size: 12px;
//       font-weight: 500;
//     }


//     .fd-feeder__voltage {
//       flex: 0 0 auto;

//       padding:
//         9px 14px;

//       border:
//         1px solid
//         rgba(46, 181, 201, 0.34);

//       border-radius: 4px;

//       background:
//         rgba(46, 181, 201, 0.06);

//       color: #69c7d7;

//       font-size: 12px;
//       font-weight: 800;

//       letter-spacing: 0.05em;
//     }


//     /* =====================================================
//        SCROLLABLE ENGINEERING WORKSPACE
//     ===================================================== */

//     .fd-feeder__viewport {
//       width: 100%;

//       overflow-x: auto;
//       overflow-y: hidden;

//       padding:
//         8px 0 22px;
//     }


//     .fd-feeder__network {
//       width:
//         ${networkWidth}px;

//       min-width:
//         ${networkWidth}px;

//       margin: 0 auto;

//       display: flex;
//       flex-direction: column;

//       align-items: stretch;

//       box-sizing: border-box;
//     }


//     /* =====================================================
//        SECTION LABEL
//     ===================================================== */

//     .fd-feeder__section-label {
//       display: block;

//       margin-bottom: 12px;

//       color: #718899;

//       font-size: 9px;
//       font-weight: 800;

//       letter-spacing: 0.14em;

//       text-align: center;

//       text-transform: uppercase;
//     }


//     /* =====================================================
//        INCOMING GRID
//     ===================================================== */

//     .fd-feeder__incoming-grid {
//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             incomingCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       justify-content: center;

//       column-gap:
//         ${columnGap}px;

//       width: max-content;

//       max-width: 100%;

//       margin:
//         0 auto;
//     }


//     .fd-feeder__incoming-column {
//       width:
//         ${cardWidth}px;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//     }


//     /*
//       No card movement on hover.

//       The conductor begins directly below the
//       equipment card and remains aligned with its
//       center.
//     */

//     .fd-feeder__incoming-drop {
//       width: 2px;
//       height: 34px;

//       flex: 0 0 34px;

//       background: #2eb5c9;
//     }


//     /* =====================================================
//        INCOMING COLLECTION BUS
//     ===================================================== */

//     .fd-feeder__incoming-collector {
//       position: relative;

//       width:
//         ${
//           incomingCount <= 1
//             ? cardWidth
//             : incomingWidth
//         }px;

//       height: 34px;

//       margin:
//         0 auto;
//     }


//     /*
//       Horizontal collection bus runs exactly between
//       the center of the first and last incoming cards.
//     */

//     .fd-feeder__incoming-horizontal {
//       position: absolute;

//       top: 0;

//       left:
//         ${
//           incomingCount <= 1
//             ? cardWidth / 2
//             : cardWidth / 2
//         }px;

//       right:
//         ${
//           incomingCount <= 1
//             ? cardWidth / 2 - 2
//             : cardWidth / 2
//         }px;

//       height: 2px;

//       background: #2eb5c9;
//     }


//     /*
//       Center stem connects incoming collection bus
//       to the main distribution bus.
//     */

//     .fd-feeder__incoming-center-stem {
//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 2px;
//       height: 34px;

//       transform:
//         translateX(-50%);

//       background: #2eb5c9;
//     }


//     /* =====================================================
//        MAIN BUS
//     ===================================================== */

//     .fd-feeder__bus-label {
//       margin:
//         0 0 8px;

//       color: #668092;

//       font-size: 9px;
//       font-weight: 800;

//       letter-spacing: 0.14em;

//       text-align: center;

//       text-transform: uppercase;
//     }


//     .fd-feeder__main-bus-wrap {
//       width:
//         ${Math.max(
//           outgoingWidth,
//           cardWidth
//         )}px;

//       margin:
//         0 auto;

//       display: flex;

//       justify-content: center;
//     }


//     /*
//       Bus starts at the center of the first outgoing
//       feeder and finishes at the center of the last
//       outgoing feeder.

//       Therefore no floating conductor endpoints.
//     */

//     .fd-feeder__main-bus {
//       width:
//         ${
//           outgoingCount <= 1
//             ? 2
//             : Math.max(
//                 outgoingWidth -
//                   cardWidth,
//                 2
//               )
//         }px;

//       height: 2px;

//       background: #2eb5c9;
//     }


//     /* =====================================================
//        OUTGOING GRID
//     ===================================================== */

//     .fd-feeder__outgoing-grid {
//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             outgoingCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       justify-content: center;

//       column-gap:
//         ${columnGap}px;

//       width: max-content;

//       max-width: 100%;

//       margin:
//         0 auto;
//     }


//     .fd-feeder__outgoing-column {
//       width:
//         ${cardWidth}px;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//     }


//     .fd-feeder__outgoing-drop {
//       width: 2px;
//       height: 36px;

//       flex: 0 0 36px;

//       background: #2eb5c9;
//     }


//     /* =====================================================
//        EMPTY STATE
//     ===================================================== */

//     .fd-feeder__empty {
//       width:
//         min(
//           520px,
//           calc(
//             100% - 32px
//           )
//         );

//       margin:
//         28px auto;

//       padding: 26px;

//       box-sizing:
//         border-box;

//       border:
//         1px solid
//         rgba(
//           110,
//           140,
//           160,
//           0.22
//         );

//       border-radius: 4px;

//       background:
//         rgba(
//           70,
//           105,
//           125,
//           0.05
//         );

//       text-align: center;
//     }


//     .fd-feeder__empty strong {
//       display: block;

//       margin-bottom: 6px;

//       color:
//         var(
//           --text-primary,
//           #e2edf4
//         );

//       font-size: 14px;
//     }


//     .fd-feeder__empty span {
//       color:
//         var(
//           --text-secondary,
//           #8499a9
//         );

//       font-size: 11px;
//     }


//     /* =====================================================
//        RESPONSIVE
//     ===================================================== */

//     @media (
//       max-width: 900px
//     ) {
//       .fd-feeder__header {
//         align-items:
//           flex-start;

//         flex-direction:
//           column;
//       }
//     }
//   `;


//   /* =====================================================
//      SAFETY STATE
//   ===================================================== */

//   if (
//     incomingCount < 1 ||
//     outgoingCount < 1
//   ) {
//     return (
//       <div className="fd-feeder">
//         <style>
//           {feederStyles}
//         </style>

//         <div className="fd-feeder__empty">
//           <strong>
//             Feeder configuration unavailable
//           </strong>

//           <span>
//             At least one incoming feeder and
//             one outgoing feeder are required.
//           </span>
//         </div>
//       </div>
//     );
//   }


//   /* =====================================================
//      RENDER
//   ===================================================== */

//   return (
//     <div className="fd-feeder">
//       <style>
//         {feederStyles}
//       </style>


//       {/* HEADER */}

//       <div className="fd-feeder__header">

//         <div className="fd-feeder__header-copy">

//           <span className="fd-feeder__eyebrow">
//             ELECTRICAL DISTRIBUTION
//           </span>

//           <h2 className="fd-feeder__title">
//             {voltageLevel} FEEDER PANEL
//           </h2>

//           <p className="fd-feeder__subtitle">
//             {incomingCount} Incoming
//             {" / "}
//             {outgoingCount} Outgoing
//             {" "}
//             Feeder
//             {outgoingCount === 1
//               ? ""
//               : "s"}
//           </p>

//         </div>


//         <div className="fd-feeder__voltage">
//           {voltageLevel}
//         </div>

//       </div>


//       {/* NETWORK */}

//       <div className="fd-feeder__viewport">

//         <div className="fd-feeder__network">


//           {/* =============================================
//               INCOMING FEEDERS
//           ============================================== */}

//           <span className="fd-feeder__section-label">
//             INCOMING FEEDERS
//           </span>


//           <div className="fd-feeder__incoming-grid">

//             {incomingFeeders.map(
//               (incoming) => (
//                 <div
//                   className="fd-feeder__incoming-column"
//                   key={incoming.id}
//                 >

//                   <EquipmentCard
//                     equipment={incoming}
//                     onOpen={
//                       onOpenEquipment
//                     }
//                   />


//                   <div className="fd-feeder__incoming-drop" />

//                 </div>
//               )
//             )}

//           </div>


//           {/* =============================================
//               INCOMING COLLECTION BUS
//           ============================================== */}

//           <div className="fd-feeder__incoming-collector">

//             {incomingCount > 1 && (
//               <div className="fd-feeder__incoming-horizontal" />
//             )}


//             <div className="fd-feeder__incoming-center-stem" />

//           </div>


//           {/* =============================================
//               MAIN DISTRIBUTION BUS
//           ============================================== */}

//           <div className="fd-feeder__bus-label">
//             {voltageLevel} DISTRIBUTION BUS
//           </div>


//           <div className="fd-feeder__main-bus-wrap">

//             <div className="fd-feeder__main-bus" />

//           </div>


//           {/* =============================================
//               OUTGOING FEEDERS
//           ============================================== */}

//           <div className="fd-feeder__outgoing-grid">

//             {outgoingFeeders.map(
//               (outgoing) => (
//                 <div
//                   className="fd-feeder__outgoing-column"
//                   key={outgoing.id}
//                 >

//                   <div className="fd-feeder__outgoing-drop" />


//                   <EquipmentCard
//                     equipment={outgoing}
//                     onOpen={
//                       onOpenEquipment
//                     }
//                   />

//                 </div>
//               )
//             )}

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    3. TRANSFORMER VIEW
//    Fully independent. Editing this CSS cannot affect LT Kiosk,
//    Busduct, Wing, Fire, Source, etc.
// ========================================================= */

// function TransformerView({
//   topology,
//   onOpenEquipment,
// }) {
//   /* =====================================================
//      PROJECT CONFIGURATION
//   ===================================================== */

//   const configuration =
//     topology?.configuration || {};

//   const transformers =
//     Array.isArray(topology?.equipment)
//       ? topology.equipment
//       : [];

//   const transformerCount =
//     transformers.length;

//   const primaryVoltage =
//     configuration.primaryVoltage ||
//     topology?.primaryVoltage ||
//     "33kV";

//   const secondaryVoltage =
//     configuration.secondaryVoltage ||
//     topology?.secondaryVoltage ||
//     "433V";


//   /* =====================================================
//      DYNAMIC GEOMETRY

//      Keep transformer cards at a readable fixed size.

//      If a client configures many transformers, the
//      topology grows horizontally instead of crushing
//      the cards.
//   ===================================================== */

//   const cardWidth = 172;
//   const columnGap = 28;

//   const equipmentWidth =
//     transformerCount > 0
//       ? transformerCount * cardWidth +
//         Math.max(
//           transformerCount - 1,
//           0
//         ) *
//           columnGap
//       : cardWidth;

//   const networkWidth =
//     Math.max(
//       760,
//       equipmentWidth
//     );


//   const transformerStyles = `
//     /* =====================================================
//        DYNAMIC TRANSFORMER FLOW

//                    TRANSFORMER PLANT
//                           │
//                           │
//               ────────────┼────────────
//                │     │     │     │
//               TR1   TR2   TR3   TR4 ...

//        Number of transformers is controlled by the
//        project configuration.

//        Static BMS / electrical topology.
//        No animation.
//        No moving cards.
//     ===================================================== */

//     .transformer-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       --transformer-card-width:
//         ${cardWidth}px;

//       --transformer-card-height:
//         136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 2.5vw, 40px)
//         24px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;

//       overflow: hidden;

//       --equipment-card-width:
//         var(
//           --transformer-card-width
//         );
//     }


//     /* =====================================================
//        HEADER / PARENT
//     ===================================================== */

//     .transformer-parent {
//       position: relative;

//       width:
//         clamp(
//           390px,
//           34vw,
//           470px
//         );

//       min-height: 108px;

//       padding: 15px 24px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       border:
//         1px solid #367fb1;

//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #153e72 0%,
//           #102f61 55%,
//           #0d2853 100%
//         );

//       box-shadow:
//         0 7px 18px
//         rgba(
//           11,
//           44,
//           75,
//           .13
//         );

//       z-index: 5;
//     }


//     .transformer-parent::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #3eb9d0;
//     }


//     .transformer-parent svg {
//       margin-bottom: 2px;

//       color: #72d1e2;
//     }


//     .transformer-parent span {
//       color: #8ec5ea;

//       font-size: 8px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .16em;
//     }


//     .transformer-parent h2 {
//       margin: 5px 0 2px;

//       color: #ffffff;

//       font-size: 19px;
//       font-weight: 700;

//       line-height: 1.15;

//       text-align: center;
//     }


//     .transformer-parent p {
//       margin: 0;

//       color: #b3cada;

//       font-size: 9px;
//       font-weight: 550;

//       line-height: 1.2;

//       letter-spacing: .03em;
//     }


//     /* =====================================================
//        SCROLLABLE WORKSPACE

//        Parent remains centered.

//        Only the electrical transformer topology needs
//        horizontal scrolling when the client configures
//        a large transformer count.
//     ===================================================== */

//     .transformer-scroll {
//       width: 100%;

//       overflow-x: auto;
//       overflow-y: hidden;

//       padding-bottom: 12px;
//     }


//     .transformer-scroll-inner {
//       width:
//         ${networkWidth}px;

//       min-width:
//         ${networkWidth}px;

//       margin: 0 auto;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//     }


//     /* =====================================================
//        PARENT → BUS
//     ===================================================== */

//     .transformer-stem {
//       width:
//         var(--wire-size);

//       height: 34px;

//       min-height: 34px;

//       flex: 0 0 34px;

//       background:
//         var(--wire);
//     }


//     /* =====================================================
//        NETWORK
//     ===================================================== */

//     .transformer-network {
//       position: relative;

//       width:
//         ${equipmentWidth}px;

//       min-width:
//         ${equipmentWidth}px;

//       margin: 0 auto;
//     }


//     /* =====================================================
//        DISTRIBUTION BUS

//        The horizontal line begins at the exact center
//        of the first transformer and ends at the exact
//        center of the last transformer.
//     ===================================================== */

//     .transformer-distribution {
//       position: relative;

//       width: 100%;

//       height: 36px;

//       min-height: 36px;
//     }


//     .transformer-bus {
//       position: absolute;

//       top: 0;

//       left:
//         ${cardWidth / 2}px;

//       right:
//         ${cardWidth / 2}px;

//       height:
//         var(--wire-size);

//       background:
//         var(--wire);

//       pointer-events: none;
//     }


//     /*
//       When there is only one transformer, the horizontal
//       bus does not need to extend anywhere.

//       This small center terminal keeps the main stem and
//       branch electrically aligned.
//     */

//     .transformer-bus--single {
//       left: 50%;
//       right: auto;

//       width:
//         var(--wire-size);

//       transform:
//         translateX(-50%);
//     }


//     /* =====================================================
//        DYNAMIC VERTICAL BRANCHES

//        Uses exactly the same width, card width and gap
//        as the equipment row below.
//     ===================================================== */

//     .transformer-branch-lines {
//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 36px;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             transformerCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       column-gap:
//         ${columnGap}px;

//       pointer-events: none;
//     }


//     .transformer-line-slot {
//       position: relative;

//       width:
//         ${cardWidth}px;

//       height: 36px;
//     }


//     .transformer-line-slot::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width:
//         var(--wire-size);

//       background:
//         var(--wire);

//       transform:
//         translateX(-50%);
//     }


//     /* =====================================================
//        TRANSFORMER CARDS
//     ===================================================== */

//     .transformer-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             transformerCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       column-gap:
//         ${columnGap}px;

//       align-items: start;

//       margin: 0;
//       padding: 0;

//       position: relative;

//       z-index: 3;
//     }


//     .transformer-branch {
//       position: relative;

//       width:
//         ${cardWidth}px;

//       min-width:
//         ${cardWidth}px;

//       display: flex;

//       justify-content: center;
//       align-items: flex-start;
//     }


//     .transformer-branch >
//     .eq-card {
//       width:
//         var(
//           --transformer-card-width
//         );

//       min-width:
//         var(
//           --transformer-card-width
//         );

//       max-width:
//         var(
//           --transformer-card-width
//         );

//       height:
//         var(
//           --transformer-card-height
//         );

//       min-height:
//         var(
//           --transformer-card-height
//         );

//       max-height:
//         var(
//           --transformer-card-height
//         );

//       position: relative;

//       z-index: 5;
//     }


//     /* =====================================================
//        CONNECTION TERMINAL
//     ===================================================== */

//     .transformer-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing:
//         border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background:
//         var(
//           --page-bg,
//           #07131e
//         );

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 7;
//     }


//     /* =====================================================
//        IMPORTANT:
//        DO NOT MOVE CARDS ON HOVER
//     ===================================================== */

//     .transformer-view
//     .eq-card:hover,

//     .transformer-view
//     .eq-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        EMPTY STATE
//     ===================================================== */

//     .transformer-empty {
//       width:
//         min(
//           520px,
//           calc(
//             100% - 32px
//           )
//         );

//       margin: 30px auto;

//       padding: 25px;

//       box-sizing:
//         border-box;

//       border:
//         1px solid
//         rgba(
//           80,
//           130,
//           160,
//           .28
//         );

//       border-radius: 4px;

//       color: #7893a4;

//       background:
//         rgba(
//           40,
//           80,
//           105,
//           .06
//         );

//       text-align: center;

//       font-size: 11px;
//     }


//     .transformer-empty strong {
//       display: block;

//       margin-bottom: 6px;

//       color: #dceaf1;

//       font-size: 14px;
//     }


//     /* =====================================================
//        LAPTOP
//     ===================================================== */

//     @media (
//       max-width: 1200px
//     ) {

//       .transformer-view {
//         padding-left: 20px;
//         padding-right: 20px;
//       }


//       .transformer-parent {
//         width: 390px;

//         min-height: 98px;
//       }
//     }


//     /* =====================================================
//        MOBILE / TABLET
//     ===================================================== */

//     @media (
//       max-width: 700px
//     ) {

//       .transformer-view {
//         padding:
//           16px
//           14px
//           24px;
//       }


//       .transformer-parent {
//         width:
//           min(
//             100%,
//             380px
//           );

//         min-height: 96px;
//       }


//       .transformer-parent h2 {
//         font-size: 16px;
//       }
//     }
//   `;


//   /* =====================================================
//      EMPTY CONFIGURATION
//   ===================================================== */

//   if (transformerCount === 0) {
//     return (
//       <div className="transformer-view">

//         <style>
//           {transformerStyles}
//         </style>

//         <div className="transformer-empty">

//           <strong>
//             No transformers configured
//           </strong>

//           Configure at least one
//           transformer for this project.

//         </div>

//       </div>
//     );
//   }


//   /* =====================================================
//      RENDER
//   ===================================================== */

//   return (
//     <div className="transformer-view">

//       <style>
//         {transformerStyles}
//       </style>


//       {/* ===============================================
//           TRANSFORMER PLANT
//       ================================================ */}

//       <div className="transformer-parent">

//         <Zap
//           size={26}
//           strokeWidth={1.8}
//         />

//         <span>
//           STEP-DOWN SUBSTATION
//         </span>

//         <h2>
//           {primaryVoltage}
//           {" / "}
//           {secondaryVoltage}
//           {" "}
//           TRANSFORMERS
//         </h2>

//         <p>
//           {transformerCount}
//           {" "}
//           TRANSFORMER
//           {transformerCount === 1
//             ? ""
//             : "S"}
//           {" "}
//           · DISTRIBUTION
//         </p>

//       </div>


//       {/* ===============================================
//           SCROLLABLE ELECTRICAL NETWORK
//       ================================================ */}

//       <div className="transformer-scroll">

//         <div className="transformer-scroll-inner">


//           {/* PARENT → BUS */}

//           <div className="transformer-stem" />


//           <div className="transformer-network">


//             {/* =========================================
//                 BUS + BRANCHES
//             ========================================== */}

//             <div className="transformer-distribution">

//               <div
//                 className={`transformer-bus ${
//                   transformerCount === 1
//                     ? "transformer-bus--single"
//                     : ""
//                 }`}
//               />


//               <div className="transformer-branch-lines">

//                 {transformers.map(
//                   (item) => (
//                     <div
//                       className="transformer-line-slot"
//                       key={`line-${item.id}`}
//                     />
//                   )
//                 )}

//               </div>

//             </div>


//             {/* =========================================
//                 TRANSFORMER EQUIPMENT
//             ========================================== */}

//             <div className="transformer-grid">

//               {transformers.map(
//                 (item) => (
//                   <div
//                     className="transformer-branch"
//                     key={item.id}
//                   >

//                     <EquipmentCard
//                       equipment={item}
//                       onOpen={
//                         onOpenEquipment
//                       }
//                     />

//                   </div>
//                 )
//               )}

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    4. LT KIOSK VIEW
// ========================================================= */

// function LTKioskView({
//   topology,
//   onOpenEquipment,
// }) {
//   const kiosks =
//     Array.isArray(topology?.equipment)
//       ? topology.equipment
//       : [];

//   const kioskCount =
//     kiosks.length;

//   const configuration =
//     topology?.configuration || {};

//   const voltage =
//     configuration.voltage ||
//     "433V";

//   const cardWidth = 172;
//   const columnGap = 0;

//   const equipmentWidth =
//     kioskCount > 0
//       ? kioskCount * cardWidth +
//         Math.max(
//           kioskCount - 1,
//           0
//         ) *
//           columnGap
//       : cardWidth;

//   const networkWidth =
//     Math.max(
//       760,
//       equipmentWidth
//     );

//   const kioskStyles = `
//     /* =====================================================
//        LT KIOSK FLOW

//                       LT KIOSKS
//                           │
//                           │
//         ┌────────┬────────┬┴───────┬────────┬────────┐
//         │        │        │        │        │        │
//      KIOSK-1  KIOSK-2  KIOSK-3  KIOSK-4  ...

//        Static electrical distribution topology.
//     ===================================================== */

//     .kiosk-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       --kiosk-card-width: ${cardWidth}px;
//       --kiosk-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 2.5vw, 40px)
//         24px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       overflow: hidden;

//       /*
//        Shared EquipmentCard uses this value.
//       */
//       --equipment-card-width:
//         var(--kiosk-card-width);
//     }


//     .kiosk-scroll {
//       width: 100%;

//       overflow-x: auto;
//       overflow-y: hidden;

//       padding-bottom: 12px;
//     }


//     .kiosk-scroll-inner {
//       width:
//         ${networkWidth}px;

//       min-width:
//         ${networkWidth}px;

//       margin: 0 auto;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//     }


//     /* =====================================================
//        PARENT LT KIOSK PANEL
//     ===================================================== */

//     .kiosk-parent {
//       position: relative;

//       width:
//         clamp(
//           380px,
//           32vw,
//           440px
//         );

//       min-height: 104px;

//       padding: 14px 22px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       border: 1px solid #367fb1;
//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #153e72 0%,
//           #102f61 55%,
//           #0d2853 100%
//         );

//       box-shadow:
//         0 7px 18px
//         rgba(11, 44, 75, .13);

//       z-index: 5;
//     }


//     /* TOP ACCENT */

//     .kiosk-parent::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #3eb9d0;
//     }


//     .kiosk-parent svg {
//       margin-bottom: 2px;

//       color: #72d1e2;
//     }


//     .kiosk-parent span {
//       color: #8ec5ea;

//       font-size: 8px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .16em;
//     }


//     .kiosk-parent h2 {
//       margin: 5px 0 2px;

//       color: #ffffff;

//       font-size: 19px;
//       font-weight: 700;

//       line-height: 1.15;

//       text-align: center;
//     }


//     .kiosk-parent p {
//       margin: 0;

//       color: #b3cada;

//       font-size: 9px;
//       font-weight: 550;

//       line-height: 1.2;

//       letter-spacing: .03em;
//     }


//     /* =====================================================
//        PARENT → DISTRIBUTION BUS
//     ===================================================== */

//     .kiosk-stem {
//       width: var(--wire-size);

//       height: 34px;
//       min-height: 34px;

//       flex: 0 0 34px;

//       background: var(--wire);
//     }


//     /* =====================================================
//        COMPLETE LT KIOSK NETWORK
//     ===================================================== */

//     .kiosk-network {
//       position: relative;

//       width:
//         ${equipmentWidth}px;

//       min-width:
//         ${equipmentWidth}px;

//       margin: 0 auto;
//     }


//     /* =====================================================
//        BUS + BRANCH AREA
//     ===================================================== */

//     .kiosk-distribution {
//       position: relative;

//       width: 100%;

//       height: 34px;
//       min-height: 34px;
//     }


//     /* =====================================================
//        HORIZONTAL BUS

//        The horizontal bus starts at the center of the
//        first kiosk and ends at the center of the last.
//     ===================================================== */

//     .kiosk-bus {
//       position: absolute;

//       top: 0;

//       left: ${cardWidth / 2}px;
//       right: ${cardWidth / 2}px;

//       height: var(--wire-size);

//       background: var(--wire);

//       pointer-events: none;
//     }


//     .kiosk-bus--single {
//       left: 50%;
//       right: auto;

//       width:
//         var(--wire-size);

//       transform:
//         translateX(-50%);
//     }


//     /* =====================================================
//        DYNAMIC VERTICAL DROPS

//        This grid is identical to the equipment grid.
//     ===================================================== */

//     .kiosk-branch-lines {
//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 34px;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             kioskCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       column-gap:
//         ${columnGap}px;

//       pointer-events: none;
//     }


//     .kiosk-line-slot {
//       position: relative;

//       width: 100%;
//       min-width: 0;

//       height: 100%;
//     }


//     .kiosk-line-slot::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       background: var(--wire);

//       transform:
//         translateX(-50%);
//     }


//     /* =====================================================
//        EQUIPMENT GRID

//        Same count-based geometry as connector grid.
//     ===================================================== */

//     .kiosk-grid {
//       position: relative;

//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             kioskCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       align-items: start;

//       column-gap:
//         ${columnGap}px;

//       margin: 0;
//       padding: 0;

//       z-index: 3;
//     }


//     .kiosk-branch {
//       position: relative;

//       width: 100%;
//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        MEDIUM EQUIPMENT CARDS
//     ===================================================== */

//     .kiosk-branch > .eq-card {
//       width:
//         var(--kiosk-card-width);

//       min-width:
//         var(--kiosk-card-width);

//       max-width:
//         var(--kiosk-card-width);

//       height:
//         var(--kiosk-card-height);

//       min-height:
//         var(--kiosk-card-height);

//       max-height:
//         var(--kiosk-card-height);

//       position: relative;

//       z-index: 5;
//     }


//     /* =====================================================
//        CONNECTION TERMINAL

//        Small fixed point where branch meets card.
//     ===================================================== */

//     .kiosk-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 7;
//     }


//     /* =====================================================
//        CARD MUST NOT MOVE
//        Keeps flow lines connected.
//     ===================================================== */

//     .kiosk-view .eq-card:hover,
//     .kiosk-view .eq-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//        1500px+
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .kiosk-view {
//         --kiosk-card-height: 142px;

//         padding-left: 50px;
//         padding-right: 50px;
//       }


//       .kiosk-parent {
//         width: 450px;
//         min-height: 110px;
//       }


//       .kiosk-stem {
//         height: 38px;
//         min-height: 38px;

//         flex-basis: 38px;
//       }


//       .kiosk-distribution {
//         height: 38px;
//         min-height: 38px;
//       }


//       .kiosk-branch-lines {
//         height: 38px;
//       }
//     }


//     /* =====================================================
//        STANDARD LAPTOP
//        1201px - 1499px
//     ===================================================== */

//     @media (
//       min-width: 1201px
//     ) and (
//       max-width: 1499px
//     ) {

//       .kiosk-view {
//         --kiosk-card-height: 136px;

//         padding-left: 24px;
//         padding-right: 24px;
//       }


//       .kiosk-parent {
//         width: 400px;
//         min-height: 98px;

//         padding: 13px 20px;
//       }


//       .kiosk-parent h2 {
//         font-size: 18px;
//       }


//       .kiosk-stem {
//         height: 30px;
//         min-height: 30px;

//         flex-basis: 30px;
//       }


//       .kiosk-distribution {
//         height: 30px;
//         min-height: 30px;
//       }


//       .kiosk-branch-lines {
//         height: 30px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP
//        901px - 1200px
//     ===================================================== */

//     @media (
//       min-width: 901px
//     ) and (
//       max-width: 1200px
//     ) {

//       .kiosk-view {
//         --kiosk-card-height: 132px;

//         align-items: flex-start;

//         padding-left: 20px;
//         padding-right: 20px;
//       }


//       .kiosk-parent {
//         width: 390px;
//         min-height: 96px;

//         align-self: center;
//       }


//       .kiosk-stem {
//         height: 28px;
//         min-height: 28px;

//         flex-basis: 28px;

//         align-self: center;
//       }


//       .kiosk-distribution {
//         height: 28px;
//         min-height: 28px;
//       }


//       .kiosk-branch-lines {
//         height: 28px;
//       }
//     }


//     /* =====================================================
//        TABLET / MOBILE

//        Don't destroy the topology by making cards tiny.
//        Allow horizontal scrolling.
//     ===================================================== */

//     @media (max-width: 900px) {

//       .kiosk-view {
//         --kiosk-card-height: 132px;

//         align-items: flex-start;
//         justify-content: flex-start;

//         padding:
//           16px
//           18px
//           24px;

//       }


//       .kiosk-parent {
//         width: 380px;
//         min-height: 96px;

//         align-self: center;
//       }


//       .kiosk-stem {
//         height: 28px;
//         min-height: 28px;

//         flex-basis: 28px;

//       }


//       .kiosk-distribution {
//         height: 28px;
//         min-height: 28px;
//       }


//       .kiosk-branch-lines {
//         height: 28px;
//       }
//     }
//   `;


//   return (
//     <div className="kiosk-view">
//       <style>{kioskStyles}</style>


//       {/* ===================================================
//           LT KIOSK PARENT
//       ==================================================== */}

//       <div className="kiosk-parent">

//         <PanelsTopLeft
//           size={26}
//           strokeWidth={1.8}
//         />

//         <span>
//           LOW TENSION DISTRIBUTION
//         </span>

//         <h2>
//           LT KIOSKS
//         </h2>

//         <p>
//           {voltage}
//           {" "}
//           DISTRIBUTION
//         </p>

//       </div>


//       <div className="kiosk-scroll">

//         <div className="kiosk-scroll-inner">


//           {/* =================================================
//               PARENT → DISTRIBUTION BUS
//           ================================================== */}

//           <div className="kiosk-stem" />


//           {/* =================================================
//               LT KIOSK NETWORK
//           ================================================== */}

//           <div className="kiosk-network">

//             {/* BUS + DROPS */}

//             <div className="kiosk-distribution">

//               <div
//                 className={`kiosk-bus ${
//                   kioskCount === 1
//                     ? "kiosk-bus--single"
//                     : ""
//                 }`}
//               />

//               <div className="kiosk-branch-lines">

//                 {kiosks.map(
//                   (item) => (
//                     <div
//                       className="kiosk-line-slot"
//                       key={`line-${item.id}`}
//                     />
//                   )
//                 )}

//               </div>

//             </div>


//             {/* ===============================================
//                 LT KIOSK EQUIPMENT
//             ================================================ */}

//             <div className="kiosk-grid">

//               {kiosks.map(
//                 (item) => (
//                   <div
//                     className="kiosk-branch"
//                     key={item.id}
//                   >
//                     <EquipmentCard
//                       equipment={item}
//                       onOpen={onOpenEquipment}
//                     />
//                   </div>
//                 )
//               )}

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    5. BUSDUCT VIEW
// ========================================================= */

// function BusductView({
//   topology,
//   onOpenEquipment,
// }) {
//   const busducts =
//     Array.isArray(topology?.equipment)
//       ? topology.equipment
//       : [];

//   const busductCount =
//     busducts.length;

//   const cardWidth = 172;
//   const columnGap = 0;

//   const equipmentWidth =
//     busductCount > 0
//       ? busductCount * cardWidth +
//         Math.max(
//           busductCount - 1,
//           0
//         ) *
//           columnGap
//       : cardWidth;

//   const networkWidth =
//     Math.max(
//       760,
//       equipmentWidth
//     );

//   const busductStyles = `
//     /* =====================================================
//        BUSDUCT FLOW

//                      LT BUSDUCTS
//                           │
//                           │
//         ┌────────┬────────┬┴───────┬────────┬────────┐
//         │        │        │        │        │        │
//       BUS-1    BUS-2    BUS-3    BUS-4    ...

//        Static BMS electrical distribution topology.
//     ===================================================== */

//     .busduct-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       --busduct-card-width: ${cardWidth}px;
//       --busduct-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 2.5vw, 40px)
//         24px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       overflow: hidden;

//       --equipment-card-width:
//         var(--busduct-card-width);
//     }


//     .busduct-scroll {
//       width: 100%;

//       overflow-x: auto;
//       overflow-y: hidden;

//       padding-bottom: 12px;
//     }


//     .busduct-scroll-inner {
//       width:
//         ${networkWidth}px;

//       min-width:
//         ${networkWidth}px;

//       margin: 0 auto;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//     }


//     /* =====================================================
//        BUSDUCT PARENT
//     ===================================================== */

//     .busduct-parent {
//       position: relative;

//       width:
//         clamp(
//           380px,
//           32vw,
//           440px
//         );

//       min-height: 104px;

//       padding: 14px 22px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       border: 1px solid #367fb1;
//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #153e72 0%,
//           #102f61 55%,
//           #0d2853 100%
//         );

//       box-shadow:
//         0 7px 18px
//         rgba(11, 44, 75, .13);

//       z-index: 5;
//     }


//     /* TOP ACCENT */

//     .busduct-parent::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #3eb9d0;
//     }


//     .busduct-parent svg {
//       margin-bottom: 2px;

//       color: #72d1e2;
//     }


//     .busduct-parent span {
//       color: #8ec5ea;

//       font-size: 8px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .16em;
//     }


//     .busduct-parent h2 {
//       margin: 5px 0 2px;

//       color: #ffffff;

//       font-size: 19px;
//       font-weight: 700;

//       line-height: 1.15;

//       text-align: center;
//     }


//     .busduct-parent p {
//       margin: 0;

//       color: #b3cada;

//       font-size: 9px;
//       font-weight: 550;

//       line-height: 1.2;

//       letter-spacing: .03em;
//     }


//     /* =====================================================
//        PARENT → BUS
//     ===================================================== */

//     .busduct-stem {
//       width: var(--wire-size);

//       height: 34px;
//       min-height: 34px;

//       flex: 0 0 34px;

//       background: var(--wire);
//     }


//     /* =====================================================
//        COMPLETE BUSDUCT NETWORK
//     ===================================================== */

//     .busduct-network {
//       position: relative;

//       width:
//         ${equipmentWidth}px;

//       min-width:
//         ${equipmentWidth}px;

//       margin: 0 auto;
//     }


//     /* =====================================================
//        DISTRIBUTION AREA
//     ===================================================== */

//     .busduct-distribution {
//       position: relative;

//       width: 100%;

//       height: 34px;
//       min-height: 34px;
//     }


//     /* =====================================================
//        HORIZONTAL BUS

//        The bus starts at the center of the first card
//        and finishes at the center of the last card.
//     ===================================================== */

//     .busduct-bus {
//       position: absolute;

//       top: 0;

//       left: ${cardWidth / 2}px;
//       right: ${cardWidth / 2}px;

//       height: var(--wire-size);

//       background: var(--wire);

//       pointer-events: none;
//     }


//     .busduct-bus--single {
//       left: 50%;
//       right: auto;

//       width:
//         var(--wire-size);

//       transform:
//         translateX(-50%);
//     }


//     /* =====================================================
//        DYNAMIC VERTICAL DROPS

//        Uses exactly the same grid as cards.
//     ===================================================== */

//     .busduct-branch-lines {
//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 34px;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             busductCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       column-gap:
//         ${columnGap}px;

//       pointer-events: none;
//     }


//     .busduct-line-slot {
//       position: relative;

//       width: 100%;
//       min-width: 0;

//       height: 100%;
//     }


//     .busduct-line-slot::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       background: var(--wire);

//       transform:
//         translateX(-50%);
//     }


//     /* =====================================================
//        BUSDUCT EQUIPMENT GRID

//        Same count-based columns as connector grid.
//     ===================================================== */

//     .busduct-grid {
//       position: relative;

//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             busductCount,
//             1
//           )},
//           ${cardWidth}px
//         );

//       align-items: start;

//       column-gap:
//         ${columnGap}px;

//       margin: 0;
//       padding: 0;

//       z-index: 3;
//     }


//     .busduct-branch {
//       position: relative;

//       width: 100%;
//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        MEDIUM BUSDUCT CARDS
//     ===================================================== */

//     .busduct-branch > .eq-card {
//       width:
//         var(--busduct-card-width);

//       min-width:
//         var(--busduct-card-width);

//       max-width:
//         var(--busduct-card-width);

//       height:
//         var(--busduct-card-height);

//       min-height:
//         var(--busduct-card-height);

//       max-height:
//         var(--busduct-card-height);

//       position: relative;

//       z-index: 5;
//     }


//     /* =====================================================
//        CONNECTION POINT
//     ===================================================== */

//     .busduct-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 7;
//     }


//     /* =====================================================
//        KEEP FLOW ATTACHED DURING HOVER
//     ===================================================== */

//     .busduct-view .eq-card:hover,
//     .busduct-view .eq-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .busduct-view {
//         --busduct-card-height: 142px;

//         padding-left: 50px;
//         padding-right: 50px;
//       }


//       .busduct-parent {
//         width: 450px;
//         min-height: 110px;
//       }


//       .busduct-stem {
//         height: 38px;
//         min-height: 38px;

//         flex-basis: 38px;
//       }


//       .busduct-distribution {
//         height: 38px;
//         min-height: 38px;
//       }


//       .busduct-branch-lines {
//         height: 38px;
//       }
//     }


//     /* =====================================================
//        STANDARD LAPTOP
//        1201px - 1499px
//     ===================================================== */

//     @media (
//       min-width: 1201px
//     ) and (
//       max-width: 1499px
//     ) {

//       .busduct-view {
//         --busduct-card-height: 136px;

//         padding-left: 24px;
//         padding-right: 24px;
//       }


//       .busduct-parent {
//         width: 400px;
//         min-height: 98px;

//         padding: 13px 20px;
//       }


//       .busduct-parent h2 {
//         font-size: 18px;
//       }


//       .busduct-stem {
//         height: 30px;
//         min-height: 30px;

//         flex-basis: 30px;
//       }


//       .busduct-distribution {
//         height: 30px;
//         min-height: 30px;
//       }


//       .busduct-branch-lines {
//         height: 30px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP
//        901px - 1200px
//     ===================================================== */

//     @media (
//       min-width: 901px
//     ) and (
//       max-width: 1200px
//     ) {

//       .busduct-view {
//         --busduct-card-height: 132px;

//         align-items: flex-start;

//         padding-left: 20px;
//         padding-right: 20px;
//       }


//       .busduct-parent {
//         width: 390px;
//         min-height: 96px;

//         align-self: center;
//       }


//       .busduct-stem {
//         height: 28px;
//         min-height: 28px;

//         flex-basis: 28px;

//         align-self: center;
//       }


//       .busduct-distribution {
//         height: 28px;
//         min-height: 28px;
//       }


//       .busduct-branch-lines {
//         height: 28px;
//       }
//     }


//     /* =====================================================
//        TABLET / MOBILE

//        Preserve readable cards and topology.
//     ===================================================== */

//     @media (max-width: 900px) {

//       .busduct-view {
//         --busduct-card-height: 132px;

//         align-items: flex-start;
//         justify-content: flex-start;

//         padding:
//           16px
//           18px
//           24px;

//       }


//       .busduct-parent {
//         width: 380px;
//         min-height: 96px;

//         align-self: center;
//       }


//       .busduct-stem {
//         height: 28px;
//         min-height: 28px;

//         flex-basis: 28px;

//       }


//       .busduct-distribution {
//         height: 28px;
//         min-height: 28px;
//       }


//       .busduct-branch-lines {
//         height: 28px;
//       }
//     }
//   `;


//   return (
//     <div className="busduct-view">
//       <style>{busductStyles}</style>


//       {/* ===================================================
//           BUSDUCT PARENT
//       ==================================================== */}

//       <div className="busduct-parent">

//         <Network
//           size={26}
//           strokeWidth={1.8}
//         />

//         <span>
//           LT POWER DISTRIBUTION
//         </span>

//         <h2>
//           LT BUSDUCTS
//         </h2>

//         <p>
//           433 V BUSDUCT / BUSBAR
//         </p>

//       </div>


//       <div className="busduct-scroll">

//         <div className="busduct-scroll-inner">


//           {/* =================================================
//               PARENT → DISTRIBUTION
//           ================================================== */}

//           <div className="busduct-stem" />


//           {/* =================================================
//               BUSDUCT NETWORK
//           ================================================== */}

//           <div className="busduct-network">

//             {/* MAIN BUS + DROPS */}

//             <div className="busduct-distribution">

//               <div
//                 className={`busduct-bus ${
//                   busductCount === 1
//                     ? "busduct-bus--single"
//                     : ""
//                 }`}
//               />

//               <div className="busduct-branch-lines">

//                 {busducts.map(
//                   (item) => (
//                     <div
//                       className="busduct-line-slot"
//                       key={`line-${item.id}`}
//                     />
//                   )
//                 )}

//               </div>

//             </div>


//             {/* ===============================================
//                 BUSDUCT EQUIPMENT
//             ================================================ */}

//             <div className="busduct-grid">

//               {busducts.map(
//                 (item) => (
//                   <div
//                     className="busduct-branch"
//                     key={item.id}
//                   >
//                     <EquipmentCard
//                       equipment={item}
//                       onOpen={onOpenEquipment}
//                     />
//                   </div>
//                 )
//               )}

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    6. PCC VIEW
//    PCC overview and internal panel stay entirely inside PCC.
// ========================================================= */

// const pccOverviewLabels = {
//   "pcc-1": "Wing A",
//   "pcc-2": "Wing B",
//   "pcc-3": "Chillers",
//   "pcc-4": "Chillers",
// };



// function getPccDemoTelemetry(circuit) {
//   const existing =
//     demoTelemetry[
//       circuit?.id
//     ];

//   if (existing) {
//     return existing;
//   }

//   /*
//     Frontend demo fallback for custom PCC equipment.

//     The values are deterministic from the circuit ID so the
//     same custom equipment does not change every render.
//     Replace this with live backend/IoT telemetry later.
//   */
//   const seed =
//     String(
//       circuit?.id ||
//       circuit?.name ||
//       "pcc-custom"
//     )
//       .split("")
//       .reduce(
//         (total, character) =>
//           total +
//           character.charCodeAt(0),
//         0
//       );

//   return {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,
//     voltage: 433,
//     current:
//       165 +
//       (seed % 86),
//     powerFactor:
//       Number(
//         (
//           0.95 +
//           (seed % 4) *
//             0.01
//         ).toFixed(2)
//       ),
//     kWh:
//       1180 +
//       (seed % 420),
//     kVAh:
//       1230 +
//       (seed % 460),
//     load:
//       48 +
//       (seed % 35),
//     breakerState:
//       circuit?.direction ===
//       "coupler"
//         ? "OPEN"
//         : "CLOSED",
//     direction:
//       circuit?.direction,
//     section:
//       circuit?.section,
//     fault: false,
//     trip: false,
//     warning: false,
//   };
// }


// function PCCView({
//   topology,
//   onOpenEquipment,
// }) {
//   const [selectedPanelId, setSelectedPanelId] =
//     useState(null);

//   const panels =
//     Array.isArray(topology?.panels)
//       ? topology.panels
//       : [];

//   const panelCount =
//     panels.length;

//   const panelCardWidth = 220;
//   const panelGap = 32;
//   const panelEquipmentWidth = panelCount > 0
//     ? panelCount * panelCardWidth + Math.max(panelCount - 1, 0) * panelGap
//     : panelCardWidth;
//   const panelNetworkWidth = Math.max(520, panelEquipmentWidth);
//   const panelSideInset = Math.max(0, (panelNetworkWidth - panelEquipmentWidth) / 2) + panelCardWidth / 2;


//   const selectedPanel =
//     panels.find(
//       (panel) =>
//         panel.id === selectedPanelId
//     );


//   /* =====================================================
//      PCC STYLES
//   ===================================================== */

//   const pccStyles = `
//     /* =====================================================
//        PCC ROOT
//     ===================================================== */

//     .pcc-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 2.5vw, 40px)
//         24px;

//       box-sizing: border-box;

//       overflow-x: auto;
//     }


//     /* =====================================================
//        PCC OVERVIEW PARENT
//     ===================================================== */

//     .pcc-parent {
//       position: relative;

//       width:
//         clamp(
//           380px,
//           32vw,
//           440px
//         );

//       min-height: 104px;

//       margin: 0 auto;

//       padding: 14px 22px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       overflow: hidden;

//       border:
//         1px solid #367fb1;

//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #153e72 0%,
//           #102f61 55%,
//           #0d2853 100%
//         );

//       box-shadow:
//         0 7px 18px
//         rgba(11, 44, 75, .13);

//       z-index: 5;
//     }


//     .pcc-parent::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #3eb9d0;
//     }


//     .pcc-parent svg {
//       margin-bottom: 2px;

//       color: #72d1e2;
//     }


//     .pcc-parent span {
//       color: #8ec5ea;

//       font-size: 8px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .16em;
//     }


//     .pcc-parent h2 {
//       margin: 5px 0 2px;

//       color: #ffffff;

//       font-size: 19px;
//       font-weight: 700;

//       line-height: 1.15;
//     }


//     .pcc-parent p {
//       margin: 0;

//       color: #b3cada;

//       font-size: 9px;
//       font-weight: 550;
//     }


//     /* =====================================================
//        PCC PARENT → MAIN BUS
//     ===================================================== */

//     .pcc-stem {
//       width:
//         var(--wire-size);

//       height: 34px;
//       min-height: 34px;

//       margin: 0 auto;

//       background:
//         var(--wire);
//     }


//     /* =====================================================
//        PCC OVERVIEW NETWORK
//     ===================================================== */

//     .pcc-overview-network {
//       width: ${panelNetworkWidth}px;
//       min-width: ${panelNetworkWidth}px;
//       margin: 0 auto;
//     }


//     .pcc-distribution {
//       position: relative;

//       width: 100%;

//       height: 34px;
//       min-height: 34px;
//     }


//     /*
//        The overview bus starts at the first panel
//        center and ends at the final panel center.
//     */

//     .pcc-bus {
//       position: absolute;

//       top: 0;

//       left: ${panelSideInset}px;
//       right: ${panelSideInset}px;

//       height:
//         var(--wire-size);

//       background:
//         var(--wire);
//     }


//     .pcc-bus--single {
//       left: 50%;
//       right: auto;

//       width:
//         var(--wire-size);

//       transform:
//         translateX(-50%);
//     }


//     .pcc-overview-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             panelCount,
//             1
//           )},
//           ${panelCardWidth}px
//         );

//       column-gap: ${panelGap}px;
//       justify-content: center;

//       pointer-events: none;
//     }


//     .pcc-overview-line {
//       position: relative;
//     }


//     .pcc-overview-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width:
//         var(--wire-size);

//       transform:
//         translateX(-50%);

//       background:
//         var(--wire);
//     }


//     /* =====================================================
//        PCC OVERVIEW CARDS
//     ===================================================== */

//     .pcc-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             panelCount,
//             1
//           )},
//           ${panelCardWidth}px
//         );

//       column-gap: ${panelGap}px;
//       justify-content: center;

//       align-items: start;
//     }


//     .pcc-branch {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     .pcc-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 7;
//     }


//     .pcc-panel-card {
//       position: relative;

//       width: ${panelCardWidth}px;
//       min-width: ${panelCardWidth}px;
//       max-width: ${panelCardWidth}px;

//       height: 136px;

//       margin: 0;

//       padding: 13px 12px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       overflow: hidden;

//       border:
//         1px solid #327ba2;

//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #174766,
//           #123b58 55%,
//           #0e3049
//         );

//       box-shadow:
//         0 5px 14px
//         rgba(10, 39, 59, .13);

//       cursor: pointer;

//       transition:
//         border-color .15s ease,
//         box-shadow .15s ease;
//     }


//     .pcc-panel-card:hover,
//     .pcc-panel-card:focus-visible {
//       transform: none;

//       outline: none;

//       border-color: #59bad0;

//       box-shadow:
//         0 7px 18px
//         rgba(10, 42, 64, .18);
//     }


//     .pcc-panel-card svg {
//       margin-bottom: 2px;

//       color: #71d0e2;
//     }


//     .pcc-panel-card span {
//       color: #87bddd;

//       font-size: 7px;
//       font-weight: 800;

//       letter-spacing: .12em;
//     }


//     .pcc-panel-card h3 {
//       margin:
//         5px 0 2px;

//       color: #ffffff;

//       font-size: 16px;
//       font-weight: 700;
//     }


//     .pcc-panel-card p {
//       margin: 0;

//       color: #b5cede;

//       font-size: 9px;
//     }


//     .pcc-panel-card strong {
//       margin-top: 6px;

//       color: #79dfb7;

//       font-size: 8px;
//       font-weight: 700;
//     }


//     /* =====================================================
//        INTERNAL PCC
//     ===================================================== */

//     .pcc-internal {
//       width: 100%;
//       min-width: 0;
//     }


//     .pcc-internal-head {
//       width: 100%;

//       margin-bottom: 20px;

//       display: flex;

//       align-items: center;

//       gap: 14px;
//     }


//     .pcc-internal-head button {
//       height: 36px;

//       padding:
//         0 12px;

//       display:
//         inline-flex;

//       align-items: center;

//       gap: 6px;

//       border:
//         1px solid #426780;

//       border-radius: 5px;

//       color: #dce9f2;

//       background: #173b56;

//       cursor: pointer;
//     }


//     .pcc-internal-head button:hover {
//       background: #19445f;

//       border-color: #4da8bd;
//     }


//     .pcc-internal-head span {
//       color: #748b9c;

//       font-size: 7px;
//       font-weight: 800;

//       letter-spacing: .13em;
//     }


//     .pcc-internal-head h2 {
//       margin:
//         2px 0;

//       color: #17354b;

//       font-size: 21px;
//       font-weight: 700;
//     }


//     .pcc-internal-head p {
//       margin: 0;

//       color: #718492;

//       font-size: 9px;
//     }


//     /* =====================================================
//        COMPLETE PCC SWITCHBOARD AREA

//        Lineup and Utility → UPS geometry share
//        the same width.

//        This is important because the Utility
//        connections must remain aligned with the
//        actual switchboard cells.
//     ===================================================== */

//     .pcc-switchboard-scroll {
//       width: 100%;

//       overflow-x: auto;

//       overflow-y: visible;

//       padding-bottom: 8px;
//     }


//     .pcc-switchboard {
//       width: 100%;

//       min-width: max(760px, calc(var(--pcc-count, 1) * 118px));

//       position: relative;

//       margin: 0 auto;
//     }


//     .pcc-empty-panel {
//       width:
//         min(
//           520px,
//           calc(100% - 32px)
//         );

//       margin: 30px auto;

//       padding: 24px;

//       box-sizing:
//         border-box;

//       border:
//         1px solid
//         rgba(
//           80,
//           130,
//           160,
//           .28
//         );

//       border-radius: 4px;

//       color: #7893a4;

//       background:
//         rgba(
//           40,
//           80,
//           105,
//           .06
//         );

//       text-align: center;

//       font-size: 11px;
//     }


//     .pcc-empty-panel strong {
//       display: block;

//       margin-bottom: 6px;

//       color: #dceaf1;

//       font-size: 14px;
//     }


//     /* =====================================================
//        PCC LINEUP
//     ===================================================== */

//     .pcc-lineup {
//       --pcc-count: 14;

//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--pcc-count),
//           minmax(80px, 1fr)
//         );

//       gap: 0;

//       box-sizing: border-box;

//       border:
//         2px solid #1e6f9e;

//       background: #0e2c4e;
//     }


//     /* =====================================================
//        PCC CIRCUIT
//     ===================================================== */

//     .pcc-cell {
//       position: relative;

//       min-width: 0;

//       height: 132px;

//       margin: 0;

//       padding:
//         9px 5px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       overflow: hidden;

//       border: 0;

//       border-right:
//         1px solid
//         rgba(
//           93,
//           145,
//           177,
//           .46
//         );

//       color: #ffffff;

//       background: #102f54;

//       cursor: pointer;

//       transition:
//         background .14s ease;
//     }


//     .pcc-cell:last-child {
//       border-right: 0;
//     }


//     .pcc-cell--incoming {
//       background: #123a5d;
//     }


//     .pcc-cell--outgoing {
//       background: #102f54;
//     }


//     .pcc-cell--coupler {
//       background: #3d3828;
//     }


//     .pcc-cell:hover,
//     .pcc-cell:focus-visible {
//       transform: none;

//       outline: none;

//       background: #17486b;
//     }


//     .pcc-cell--coupler:hover,
//     .pcc-cell--coupler:focus-visible {
//       background: #51492f;
//     }


//     .pcc-cell > svg {
//       flex:
//         0 0 auto;

//       color: #6ecbdd;
//     }


//     .pcc-cell > small {
//       color: #7fa9c4;

//       font-size: 6px;
//       font-weight: 700;

//       line-height: 1;

//       letter-spacing: .04em;
//     }


//     .pcc-cell > strong {
//       width: 100%;

//       margin:
//         4px 0 2px;

//       overflow: hidden;

//       color: #ffffff;

//       font-size: 8px;
//       font-weight: 700;

//       line-height: 11px;

//       text-align: center;

//       display:
//         -webkit-box;

//       -webkit-line-clamp: 2;
//       -webkit-box-orient: vertical;
//     }


//     .pcc-cell > em {
//       color: #79dfb7;

//       font-size: 7px;
//       font-weight: 700;

//       line-height: 1;

//       font-style: normal;
//     }


//     /* =====================================================
//        PCC CIRCUIT HOVER
//     ===================================================== */

//     .pcc-cell-readings {
//       position: absolute;

//       inset: 0;

//       z-index: 20;

//       padding:
//         8px 7px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       overflow: hidden;

//       background:
//         linear-gradient(
//           145deg,
//           #123f5d,
//           #0d324c
//         );

//       opacity: 0;

//       visibility: hidden;

//       pointer-events: none;

//       transition:
//         opacity .13s ease,
//         visibility .13s ease;
//     }


//     .pcc-cell:hover
//     .pcc-cell-readings,

//     .pcc-cell:focus-visible
//     .pcc-cell-readings {
//       opacity: 1;

//       visibility: visible;
//     }


//     .pcc-cell-readings-title {
//       height: 15px;
//       min-height: 15px;

//       margin-bottom: 3px;

//       color: #73d0e1;

//       font-size: 6px;
//       font-weight: 800;

//       line-height: 15px;

//       text-align: left;

//       letter-spacing: .08em;

//       white-space: nowrap;
//     }


//     .pcc-cell-readings-grid {
//       min-height: 0;

//       flex: 1;

//       display: grid;

//       grid-template-rows:
//         repeat(
//           5,
//           minmax(0, 1fr)
//         );

//       overflow: hidden;
//     }


//     .pcc-cell-reading {
//       min-height: 0;

//       display: grid;

//       grid-template-columns:
//         minmax(0, 1fr)
//         minmax(28px, auto);

//       align-items: center;

//       column-gap: 4px;
//     }


//     .pcc-cell-reading span {
//       min-width: 0;

//       overflow: hidden;

//       color: #9eb9c7;

//       font-size: 6px;
//       font-weight: 550;

//       text-align: left;

//       text-overflow: ellipsis;

//       white-space: nowrap;
//     }


//     .pcc-cell-reading strong {
//       min-width: 0;

//       margin: 0;

//       overflow: hidden;

//       color: #ffffff;

//       font-size: 6.5px;
//       font-weight: 700;

//       text-align: right;

//       text-overflow: ellipsis;

//       white-space: nowrap;
//     }


//     /* =====================================================
//        UTILITY → UPS SUPPLY
//        Exact PCC1/PCC2 14-cell switchboard geometry.

//        Utility 1 = cell 6
//        Utility 2 = cell 13
//        UPS take-off = exact midpoint between both utilities.
//     ===================================================== */

//     .pcc-utility-supply {
//       --utility-row-height: 48px;
//       position: relative;
//       width: 100%;
//       height: var(--utility-row-height);
//       pointer-events: none;
//     }

//     .pcc-utility-drop {
//       position: absolute;
//       top: 0;
//       width: var(--wire-size);
//       height: 18px;
//       transform: translateX(-50%);
//       background: var(--wire);
//     }

//     .pcc-utility-horizontal {
//       position: absolute;
//       top: 16px;
//       height: var(--wire-size);
//       background: var(--wire);
//     }

//     .pcc-utility-to-ups {
//       position: absolute;
//       top: 16px;
//       width: var(--wire-size);
//       height:
//         calc(
//           var(--utility-row-height) -
//           16px
//         );
//       transform:
//         translateX(-50%);
//       background: var(--wire);
//     }


//     /* =====================================================
//        UPS SECTION
//     ===================================================== */

//     .pcc-ups-area {
//       position: relative;

//       width: 100%;

//       height: auto;

//       min-height: 260px;
//     }


//     /* =====================================================
//        UPS PARENT ROW

//        Parent is positioned under the Utility
//        midpoint.
//     ===================================================== */

//     .pcc-ups-parent-row {
//       position: relative;

//       width: 100%;

//       height: 82px;
//     }


//     .pcc-ups-parent {
//       position: absolute;

//       top: 0;

//       left: 50%;

//       width: 220px;
//       height: 82px;

//       padding: 8px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 2px;

//       transform:
//         translateX(-50%);

//       border:
//         1px solid #2879ad;

//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #123d63,
//           #0e3154
//         );

//       z-index: 5;
//     }


//     .pcc-ups-parent svg {
//       color: #71d0e2;
//     }


//     .pcc-ups-parent h3 {
//       margin:
//         3px 0 0;

//       font-size: 14px;
//       font-weight: 700;
//     }


//     .pcc-ups-parent span {
//       color: #a9c4d5;

//       font-size: 7px;
//       font-weight: 700;

//       letter-spacing: .08em;
//     }


//     /* =====================================================
//        UPS PARENT → UPS SUBNETWORK
//     ===================================================== */

//     .pcc-ups-parent-stem {
//       position: relative;

//       width: 100%;

//       height: 28px;
//     }


//     .pcc-ups-parent-stem::before {
//       content: "";

//       position: absolute;

//       top: 0;

//       left: var(--ups-left, 50%);

//       width:
//         var(--wire-size);

//       height: 28px;

//       transform:
//         translateX(-50%);

//       background:
//         var(--wire);
//     }


//     /* =====================================================
//        CENTERED UPS SUBNETWORK

//        We position the whole four-unit network under
//        the UPS parent instead of stretching it across
//        the complete PCC switchboard.
//     ===================================================== */

//     .pcc-ups-network {
//       position: absolute;

//       top: 110px;

//       left: 50%;

//       width: 700px;

//       max-width: calc(100% - 24px);

//       transform:
//         translateX(-50%);
//     }


//     .pcc-ups-distribution {
//       position: relative;

//       width: 100%;

//       height: 28px;
//     }


//     /*
//        Four columns:

//        first = 1/8
//        last  = 7/8
//     */

//     .pcc-ups-bus {
//       position: absolute;

//       top: 0;

//       left:
//         calc(100% / (var(--ups-count) * 2));

//       right:
//         calc(100% / (var(--ups-count) * 2));

//       height:
//         var(--wire-size);

//       background:
//         var(--wire);
//     }


//     .pcc-ups-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--ups-count),
//           minmax(0, 1fr)
//         );

//       pointer-events: none;
//     }


//     .pcc-ups-line {
//       position: relative;
//     }


//     .pcc-ups-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width:
//         var(--wire-size);

//       transform:
//         translateX(-50%);

//       background:
//         var(--wire);
//     }


//     /* =====================================================
//        UPS UNIT GRID
//     ===================================================== */

//     .pcc-ups-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--ups-count),
//           minmax(0, 1fr)
//         );

//       gap: 0;
//     }


//     .pcc-ups-unit-wrap {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     .pcc-ups-unit-wrap::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 5px;
//       height: 5px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /* =====================================================
//        UPS CARD
//     ===================================================== */

//     .pcc-ups-unit {
//       position: relative;

//       width: 155px;
//       min-width: 155px;
//       max-width: 155px;
//       height: 108px;

//       margin: 0;

//       padding:
//         9px 10px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       overflow: hidden;

//       border:
//         1px solid #2d729d;

//       border-radius: 5px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #143d63,
//           #103354
//         );

//       cursor: pointer;

//       transition:
//         border-color .14s ease,
//         box-shadow .14s ease;
//     }


//     .pcc-ups-unit:hover,
//     .pcc-ups-unit:focus-visible {
//       transform: none;

//       outline: none;

//       border-color: #58b8ce;

//       box-shadow:
//         0 5px 14px
//         rgba(10, 44, 66, .15);
//     }


//     .pcc-ups-unit > svg {
//       color: #71d0e2;
//     }


//     .pcc-ups-unit > strong {
//       margin-top: 3px;

//       color: #ffffff;

//       font-size: 11px;
//       font-weight: 700;
//     }


//     .pcc-ups-unit > span {
//       color: #a9c4d5;

//       font-size: 7.5px;
//     }


//     /* =====================================================
//        UPS HOVER READINGS
//     ===================================================== */

//     .pcc-ups-readings {
//       position: absolute;

//       inset: 0;

//       z-index: 20;

//       padding:
//         7px 9px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       overflow: hidden;

//       background:
//         linear-gradient(
//           145deg,
//           #123f5d,
//           #0c304a
//         );

//       opacity: 0;

//       visibility: hidden;

//       pointer-events: none;

//       transition:
//         opacity .13s ease,
//         visibility .13s ease;
//     }


//     .pcc-ups-unit:hover
//     .pcc-ups-readings,

//     .pcc-ups-unit:focus-visible
//     .pcc-ups-readings {
//       opacity: 1;

//       visibility: visible;
//     }


//     .pcc-ups-readings-title {
//       height: 15px;
//       min-height: 15px;

//       margin-bottom: 2px;

//       color: #73d0e1;

//       font-size: 6px;
//       font-weight: 800;

//       line-height: 15px;

//       text-align: left;

//       letter-spacing: .08em;
//     }


//     .pcc-ups-readings-grid {
//       min-height: 0;

//       flex: 1;

//       display: flex;
//       flex-direction: column;

//       gap: 2px;

//       overflow-x: hidden;
//       overflow-y: auto;

//       padding-right: 2px;

//       scrollbar-width: thin;
//     }


//     .pcc-ups-reading {
//       min-height: 14px;

//       display: grid;

//       grid-template-columns:
//         minmax(0, 1fr)
//         minmax(42px, auto);

//       align-items: center;

//       column-gap: 5px;
//     }


//     .pcc-ups-reading span {
//       min-width: 0;

//       overflow: hidden;

//       color: #a5bdc9;

//       font-size: 6px;

//       text-align: left;

//       text-overflow: ellipsis;

//       white-space: nowrap;
//     }


//     .pcc-ups-reading strong {
//       min-width: 0;

//       margin: 0;

//       overflow: hidden;

//       color: #ffffff;

//       font-size: 6.5px;
//       font-weight: 700;

//       text-align: right;

//       text-overflow: ellipsis;

//       white-space: nowrap;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .pcc-overview-network {
//         width: ${panelNetworkWidth}px;
//         min-width: ${panelNetworkWidth}px;
//       }


//       .pcc-panel-card {
//         height: 142px;
//       }


//       .pcc-switchboard {
//         min-width: 1260px;
//       }


//       .pcc-lineup {
//         grid-template-columns:
//           repeat(
//             var(--pcc-count),
//             minmax(90px, 1fr)
//           );
//       }


//       .pcc-cell {
//         height: 126px;
//       }


//       .pcc-ups-network {
//         width: 760px;
//       }


//       .pcc-ups-unit {
//         width: 170px;
//         min-width: 170px;
//         max-width: 170px;
//         height: 112px;
//       }
//     }


//     /* =====================================================
//        NORMAL LAPTOP
//     ===================================================== */

//     @media (
//       min-width: 1101px
//     ) and (
//       max-width: 1499px
//     ) {

//       .pcc-panel-card {
//         height: 136px;
//       }


//       .pcc-switchboard {
//         min-width: 1120px;
//       }


//       .pcc-ups-network {
//         width: 700px;
//       }


//       .pcc-ups-unit {
//         width: 155px;
//         min-width: 155px;
//         max-width: 155px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP / TABLET
//     ===================================================== */

//     @media (max-width: 1100px) {

//       .pcc-view {
//         padding-left: 18px;
//         padding-right: 18px;
//       }


//       .pcc-overview-network {
//         width: ${panelNetworkWidth}px;
//         min-width: ${panelNetworkWidth}px;
//       }


//       .pcc-panel-card {
//         height: 132px;
//       }


//       .pcc-switchboard {
//         width: max(100%, calc(var(--pcc-count, 1) * 108px));
//         min-width: max(760px, calc(var(--pcc-count, 1) * 118px));
//       }


//       .pcc-ups-network {
//         width: 700px;
//       }
//     }
//   `;


//   /* =====================================================
//      DIRECTION ICON
//   ===================================================== */

//   const DirectionIcon = ({
//     direction,
//   }) => {
//     if (direction === "incoming") {
//       return (
//         <ArrowDown
//           size={15}
//           strokeWidth={1.8}
//         />
//       );
//     }


//     if (direction === "outgoing") {
//       return (
//         <ArrowUp
//           size={15}
//           strokeWidth={1.8}
//         />
//       );
//     }


//     return (
//       <ArrowLeftRight
//         size={16}
//         strokeWidth={1.8}
//       />
//     );
//   };


//   /* =====================================================
//      CIRCUIT READINGS
//   ===================================================== */

//   const getCircuitReadings = (
//     circuit,
//     data = {}
//   ) => {
//     return getPreview(
//       {
//         ...circuit,

//         type:
//           circuit.type ||
//           (
//             circuit.direction ===
//             "coupler"
//               ? "coupler"
//               : "pcc-circuit"
//           ),
//       },

//       {
//         ...data,

//         status:
//           data?.status ||
//           "LIVE",
//       }
//     );
//   };


//   /* =====================================================
//      UPS UNITS
//   ===================================================== */

//   const upsUnitTemplates = [
//     {
//       id: "ups-30-1",
//       name: "30kVA-1",
//       label: "30 kVA",
//       type: "ups",
//     },

//     {
//       id: "ups-30-2",
//       name: "30kVA-2",
//       label: "30 kVA",
//       type: "ups",
//     },

//     {
//       id: "ups-10-1",
//       name: "10kVA-1",
//       label: "10 kVA",
//       type: "ups",
//     },

//     {
//       id: "ups-10-2",
//       name: "10kVA-2",
//       label: "10 kVA",
//       type: "ups",
//     },
//   ];



//   /* =====================================================
//      INTERNAL PCC VIEW
//   ===================================================== */

//   if (selectedPanel) {
//     const panelCircuits =
//       Array.isArray(
//         selectedPanel.circuits
//       )
//         ? selectedPanel.circuits
//         : [];

//     /*
//        Explicit UPS configuration is important:

//        - upsUnits: [] means this PCC intentionally has NO UPS.
//        - missing upsUnits means legacy/reference topology, where
//          PCC1/PCC2 may use the original four UPS units.
//     */
//     const hasUpsConfiguration =
//       Array.isArray(
//         selectedPanel.upsUnits
//       );

//     const configuredUpsUnits =
//       hasUpsConfiguration
//         ? selectedPanel.upsUnits
//         : [];

//     const units =
//       hasUpsConfiguration
//         ? upsUnitTemplates.filter(
//             (unit) =>
//               configuredUpsUnits.includes(
//                 unit.id
//               )
//           )
//         : (
//             selectedPanel.id === "pcc-1" ||
//             selectedPanel.id === "pcc-2"
//           )
//         ? upsUnitTemplates
//         : [];

//     const hasUps =
//       units.length > 0;

//     /*
//        UPS supply must come from the actual configured
//        Utility 1 and Utility 2 cells in this PCC lineup.
//     */
//     const isUtility = (circuit, number) => {
//       const id = String(circuit?.id || "").toLowerCase().replace(/[\s_-]+/g, "");
//       const name = String(circuit?.name || circuit?.label || "").toLowerCase().replace(/[\s_-]+/g, "");
//       return id.endsWith(`utility${number}`) || name === `utility${number}` || name.includes(`utility${number}`);
//     };

//     const utility1Circuit = panelCircuits.find((circuit) => isUtility(circuit, 1));
//     const utility2Circuit = panelCircuits.find((circuit) => isUtility(circuit, 2));

//     const utility1Index =
//       utility1Circuit
//         ? panelCircuits.findIndex(
//             (circuit) =>
//               circuit.id ===
//               utility1Circuit.id
//           )
//         : -1;

//     const utility2Index =
//       utility2Circuit
//         ? panelCircuits.findIndex(
//             (circuit) =>
//               circuit.id ===
//               utility2Circuit.id
//           )
//         : -1;

//     const utilityIndexes =
//       [
//         utility1Index,
//         utility2Index,
//       ].filter(
//         (index) =>
//           index >= 0
//       );

//     const hasUtilitySupply =
//       utilityIndexes.length > 0;

//     const pccCircuitCount =
//       Math.max(
//         panelCircuits.length,
//         1
//       );

//     const utilityCenters =
//       utilityIndexes.map(
//         (index) =>
//           (
//             (
//               index +
//               0.5
//             ) /
//             pccCircuitCount
//           ) *
//           100
//       );

//     const utilityLeft =
//       utilityCenters.length > 0
//         ? Math.min(
//             ...utilityCenters
//           )
//         : 50;

//     const utilityRight =
//       utilityCenters.length > 0
//         ? Math.max(
//             ...utilityCenters
//           )
//         : 50;

//     const utilityMidpoint =
//       (
//         utilityLeft +
//         utilityRight
//       ) /
//       2;


//     return (
//       <div className="pcc-view">
//         <style>
//           {pccStyles}
//         </style>


//         <div className="pcc-internal">

//           {/* ===============================================
//               HEADER
//           ================================================ */}

//           <div className="pcc-internal-head">

//             <button
//               type="button"
//               onClick={() =>
//                 setSelectedPanelId(
//                   null
//                 )
//               }
//             >
//               <ArrowLeft
//                 size={15}
//               />

//               PCC Main
//             </button>


//             <div>

//               <span>
//                 POWER CONTROL CENTRE
//               </span>


//               <h2>
//                 {selectedPanel.name}
//               </h2>


//               <p>
//                 {
//                   pccOverviewLabels[
//                     selectedPanel.id
//                   ] ||
//                   selectedPanel.label
//                 }
//               </p>

//             </div>

//           </div>


//           {/* ===============================================
//               SWITCHBOARD + UPS

//               They are inside the same width container
//               so the Utility flow lines remain aligned.
//           ================================================ */}

//           <div className="pcc-switchboard-scroll">

//             <div
//               className="pcc-switchboard"
//               style={{ "--pcc-count": Math.max(panelCircuits.length, 1) }}
//             >

//               {/* ===========================================
//                   PCC LINEUP
//               ============================================ */}

//               {panelCircuits.length ===
//                 0 &&
//               !hasUps && (
//                 <div className="pcc-empty-panel">
//                   <strong>
//                     Internal topology not configured
//                   </strong>

//                   This PCC panel is available in the
//                   project, but no verified internal
//                   circuit layout is defined for it.
//                 </div>
//               )}

//               {panelCircuits.length >
//                 0 && (
//                 <div
//                   className="pcc-lineup"
//                   style={{
//                     "--pcc-count":
//                       panelCircuits.length,
//                   }}
//                 >

//                   {panelCircuits.map(
//                     (circuit) => {

//                     const data =
//                       getPccDemoTelemetry(
//                         circuit
//                       );


//                     const readings =
//                       getCircuitReadings(
//                         circuit,
//                         data
//                       );


//                     const status =
//                       String(
//                         data?.status ||
//                         "LIVE"
//                       ).toUpperCase();


//                     const isOff =
//                       status ===
//                       "OFF";


//                     return (
//                       <button
//                         type="button"

//                         className={
//                           `pcc-cell pcc-cell--${circuit.direction}`
//                         }

//                         key={
//                           circuit.id
//                         }

//                         onClick={() =>
//                           onOpenEquipment?.({
//                             ...circuit,

//                             type:
//                               circuit.type ||
//                               (
//                                 circuit.direction ===
//                                 "coupler"
//                                   ? "coupler"
//                                   : "pcc-circuit"
//                               ),

//                             telemetry:
//                               data,
//                           })
//                         }
//                       >

//                         {/* NORMAL CONTENT */}

//                         <DirectionIcon
//                           direction={
//                             circuit.direction
//                           }
//                         />


//                         <small>
//                           {
//                             circuit.direction ===
//                             "coupler"
//                               ? "B/C"
//                               : circuit.direction
//                                   .toUpperCase()
//                           }
//                         </small>


//                         <strong
//                           title={
//                             circuit.name
//                           }
//                         >
//                           {
//                             circuit.name
//                           }
//                         </strong>


//                         <em>
//                           ●{" "}
//                           {
//                             isOff
//                               ? "OFF"
//                               : "LIVE"
//                           }
//                         </em>


//                         {/* =================================
//                             HOVER READINGS
//                         ================================== */}

//                         {readings.length >
//                           0 && (

//                           <div className="pcc-cell-readings">

//                             <div className="pcc-cell-readings-title">
//                               LIVE READINGS
//                             </div>


//                             <div className="pcc-cell-readings-grid">

//                               {readings
//                                 .slice(
//                                   0,
//                                   5
//                                 )
//                                 .map(
//                                   (
//                                     [
//                                       label,
//                                       value,
//                                     ],
//                                     index
//                                   ) => (

//                                     <div
//                                       className="pcc-cell-reading"

//                                       key={
//                                         `${label}-${index}`
//                                       }
//                                     >

//                                       <span
//                                         title={
//                                           label
//                                         }
//                                       >
//                                         {
//                                           label
//                                         }
//                                       </span>


//                                       <strong
//                                         title={
//                                           String(
//                                             value
//                                           )
//                                         }
//                                       >
//                                         {
//                                           value
//                                         }
//                                       </strong>

//                                     </div>

//                                   )
//                                 )}

//                             </div>

//                           </div>
//                         )}

//                       </button>
//                     );
//                     }
//                   )}

//                 </div>
//               )}


//               {/* ===========================================
//                   PCC1 / PCC2 ONLY

//                   UTILITY 1 + UTILITY 2 → UPS
//               ============================================ */}

//               {hasUps && hasUtilitySupply && (
//                 <>

//                   {/* =======================================
//                       UTILITY SUPPLY CONNECTION
//                   ======================================== */}

//                   {hasUtilitySupply && (
//                     <div className="pcc-utility-supply">
//                       {utilityCenters.map(
//                         (center, index) => (
//                           <div
//                             className="pcc-utility-drop"
//                             key={`utility-drop-${index}`}
//                             style={{
//                               left:
//                                 `${center}%`,
//                             }}
//                           />
//                         )
//                       )}

//                       {utilityCenters.length > 1 && (
//                         <div
//                           className="pcc-utility-horizontal"
//                           style={{
//                             left:
//                               `${utilityLeft}%`,
//                             width:
//                               `${
//                                 utilityRight -
//                                 utilityLeft
//                               }%`,
//                           }}
//                         />
//                       )}

//                       <div
//                         className="pcc-utility-to-ups"
//                         style={{
//                           left:
//                             `${utilityMidpoint}%`,
//                         }}
//                       />
//                     </div>
//                   )}


//                   {/* =======================================
//                       UPS AREA
//                   ======================================== */}

//                   <div className="pcc-ups-area">

//                     {/* UPS PARENT */}

//                     <div className="pcc-ups-parent-row">

//                       <div className="pcc-ups-parent" style={{ left: `${utilityMidpoint}%` }}>

//                         <BatteryCharging
//                           size={21}
//                           strokeWidth={1.8}
//                         />


//                         <h3>
//                           UPS
//                         </h3>


//                         <span>
//                           SUPPLY
//                         </span>

//                       </div>

//                     </div>


//                     {/* UPS → DISTRIBUTION */}

//                     <div className="pcc-ups-parent-stem" style={{ "--ups-left": `${utilityMidpoint}%` }} />


//                     {/* =====================================
//                         FOUR UPS UNITS
//                     ====================================== */}

//                     <div
//                       className="pcc-ups-network"
//                       style={{
//                         "--ups-count": units.length,
//                         left: `${utilityMidpoint}%`,
//                       }}
//                     >

//                       <div className="pcc-ups-distribution">

//                         <div className="pcc-ups-bus" />


//                         <div className="pcc-ups-lines">

//                           {units.map(
//                             (unit) => (

//                               <div
//                                 className="pcc-ups-line"

//                                 key={
//                                   `line-${unit.id}`
//                                 }
//                               />

//                             )
//                           )}

//                         </div>

//                       </div>


//                       <div className="pcc-ups-grid">

//                         {units.map(
//                           (unit) => {

//                             const data =
//                               demoTelemetry[
//                                 unit.id
//                               ] || {};


//                             const readings =
//                               getPreview(
//                                 unit,
//                                 data
//                               );


//                             return (
//                               <div
//                                 className="pcc-ups-unit-wrap"

//                                 key={
//                                   unit.id
//                                 }
//                               >

//                                 <button
//                                   type="button"

//                                   className="pcc-ups-unit"

//                                   onClick={() =>
//                                     onOpenEquipment?.({
//                                       ...unit,

//                                       telemetry:
//                                         data,
//                                     })
//                                   }
//                                 >

//                                   {/* NORMAL UPS CARD */}

//                                   <BatteryCharging
//                                     size={18}
//                                     strokeWidth={1.8}
//                                   />


//                                   <strong>
//                                     {
//                                       unit.name
//                                     }
//                                   </strong>


//                                   <span>
//                                     {
//                                       unit.label
//                                     }
//                                   </span>


//                                   {/* =======================
//                                       UPS HOVER READINGS
//                                   ======================== */}

//                                   {readings.length >
//                                     0 && (

//                                     <div className="pcc-ups-readings">

//                                       <div className="pcc-ups-readings-title">
//                                         LIVE READINGS
//                                       </div>


//                                       <div className="pcc-ups-readings-grid">

//                                         {readings.map(
//                                           (
//                                             [
//                                               label,
//                                               value,
//                                             ],
//                                             index
//                                           ) => (

//                                             <div
//                                               className="pcc-ups-reading"

//                                               key={
//                                                 `${label}-${index}`
//                                               }
//                                             >

//                                               <span
//                                                 title={
//                                                   label
//                                                 }
//                                               >
//                                                 {
//                                                   label
//                                                 }
//                                               </span>


//                                               <strong
//                                                 title={
//                                                   String(
//                                                     value
//                                                   )
//                                                 }
//                                               >
//                                                 {
//                                                   value
//                                                 }
//                                               </strong>

//                                             </div>

//                                           )
//                                         )}

//                                       </div>

//                                     </div>
//                                   )}

//                                 </button>

//                               </div>
//                             );
//                           }
//                         )}

//                       </div>

//                     </div>

//                   </div>

//                 </>
//               )}

//             </div>

//           </div>

//         </div>
//       </div>
//     );
//   }


//   /* =====================================================
//      PCC MAIN OVERVIEW
//   ===================================================== */

//   return (
//     <div className="pcc-view">
//       <style>
//         {pccStyles}
//       </style>


//       {/* ===============================================
//           PCC PARENT
//       ================================================ */}

//       <div className="pcc-parent">

//         <Cpu
//           size={26}
//           strokeWidth={1.8}
//         />


//         <span>
//           MAIN LT DISTRIBUTION
//         </span>


//         <h2>
//           PCC
//         </h2>


//         <p>
//           MAIN LT DISTRIBUTION
//         </p>

//       </div>


//       {/* ===============================================
//           PCC → PANEL BUS
//       ================================================ */}

//       <div className="pcc-stem" />


//       <div className="pcc-overview-network">

//         <div className="pcc-distribution">

//           <div
//             className={`pcc-bus ${
//               panelCount === 1
//                 ? "pcc-bus--single"
//                 : ""
//             }`}
//           />


//           <div className="pcc-overview-lines">

//             {panels.map(
//               (panel) => (

//                 <div
//                   className="pcc-overview-line"

//                   key={
//                     `line-${panel.id}`
//                   }
//                 />

//               )
//             )}

//           </div>

//         </div>


//         {/* =============================================
//             PCC PANEL EQUIPMENT
//         ============================================== */}

//         <div className="pcc-grid">

//           {panels.map(
//             (panel) => (

//               <div
//                 className="pcc-branch"

//                 key={
//                   panel.id
//                 }
//               >

//                 <button
//                   type="button"

//                   className="pcc-panel-card"

//                   onClick={() =>
//                     setSelectedPanelId(
//                       panel.id
//                     )
//                   }
//                 >

//                   <Cpu
//                     size={24}
//                     strokeWidth={1.8}
//                   />


//                   <span>
//                     POWER CONTROL CENTRE
//                   </span>


//                   <h3>
//                     {
//                       panel.name
//                     }
//                   </h3>


//                   <p>
//                     {
//                       pccOverviewLabels[
//                         panel.id
//                       ] ||
//                       panel.label
//                     }
//                   </p>


//                   <strong>
//                     ● LIVE
//                   </strong>

//                 </button>

//               </div>

//             )
//           )}

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    7. RAISING MAIN VIEW
// ========================================================= */

// function RaisingMainView({
//   topology,
//   onOpenEquipment,
// }) {
//   const equipment = Array.isArray(topology?.equipment)
//     ? topology.equipment
//     : [];

//   const count = equipment.length;
//   const cardWidth = 190;
//   const gap = 26;
//   const equipmentWidth = count > 0
//     ? count * cardWidth + Math.max(0, count - 1) * gap
//     : cardWidth;
//   const networkWidth = Math.max(720, equipmentWidth);
//   const sideInset = Math.max(0, (networkWidth - equipmentWidth) / 2) + cardWidth / 2;

//   const raisingStyles = `
//     .raising-view {
//       --wire:#19b8cf;
//       --wire-size:2px;
//       width:100%;
//       min-width:0;
//       min-height:100%;
//       box-sizing:border-box;
//       padding:clamp(14px,2vh,24px) clamp(18px,3vw,44px) 28px;
//       overflow-x:auto;
//       overflow-y:visible;
//     }
//     .raising-network {
//       width:${networkWidth}px;
//       min-width:${networkWidth}px;
//       margin:0 auto;
//       display:flex;
//       flex-direction:column;
//       align-items:stretch;
//     }
//     .raising-parent {
//       display:flex;
//       justify-content:center;
//       align-items:center;
//     }
//     .raising-parent > .simple-card {
//       width:420px;
//       min-width:420px;
//       max-width:420px;
//       height:112px;
//       min-height:112px;
//       max-height:112px;
//       margin:0;
//     }
//     .raising-parent-stem {
//       width:var(--wire-size);
//       height:38px;
//       margin:0 auto;
//       background:var(--wire);
//     }
//     .raising-label {
//       height:18px;
//       line-height:18px;
//       margin-bottom:8px;
//       color:#718899;
//       font-size:8px;
//       font-weight:800;
//       letter-spacing:.14em;
//       text-align:center;
//       text-transform:uppercase;
//     }
//     .raising-distribution {
//       position:relative;
//       width:100%;
//       height:38px;
//     }
//     .raising-bus {
//       position:absolute;
//       top:0;
//       left:${sideInset}px;
//       right:${sideInset}px;
//       height:var(--wire-size);
//       background:var(--wire);
//     }
//     .raising-bus--single {
//       left:50%;
//       right:auto;
//       width:var(--wire-size);
//       transform:translateX(-50%);
//     }
//     .raising-lines {
//       position:absolute;
//       inset:0;
//       display:grid;
//       grid-template-columns:repeat(${Math.max(count,1)}, ${cardWidth}px);
//       column-gap:${gap}px;
//       justify-content:center;
//       pointer-events:none;
//     }
//     .raising-line { position:relative; }
//     .raising-line::before {
//       content:"";
//       position:absolute;
//       top:0;
//       bottom:0;
//       left:50%;
//       width:var(--wire-size);
//       transform:translateX(-50%);
//       background:var(--wire);
//     }
//     .raising-grid {
//       width:100%;
//       display:grid;
//       grid-template-columns:repeat(${Math.max(count,1)}, ${cardWidth}px);
//       column-gap:${gap}px;
//       justify-content:center;
//       align-items:start;
//     }
//     .raising-item {
//       position:relative;
//       display:flex;
//       justify-content:center;
//       align-items:flex-start;
//       min-width:0;
//     }
//     .raising-item::before {
//       content:"";
//       position:absolute;
//       top:0;
//       left:50%;
//       width:6px;
//       height:6px;
//       box-sizing:border-box;
//       border:1px solid var(--wire);
//       border-radius:50%;
//       background:#fff;
//       transform:translate(-50%,-50%);
//       z-index:8;
//     }
//     .raising-item > .simple-card {
//       width:${cardWidth}px;
//       min-width:${cardWidth}px;
//       max-width:${cardWidth}px;
//       height:136px;
//       min-height:136px;
//       max-height:136px;
//       margin:0;
//     }
//     .raising-view .simple-card:hover,
//     .raising-view .simple-card:focus-visible { transform:none; }
//     .raising-empty {
//       width:min(520px,calc(100% - 32px));
//       margin:24px auto 0;
//       padding:24px;
//       box-sizing:border-box;
//       border:1px solid rgba(80,130,160,.28);
//       color:#7893a4;
//       text-align:center;
//       background:rgba(40,80,105,.06);
//     }
//     @media(max-width:1100px) {
//       .raising-view { padding-left:18px;padding-right:18px; }
//       .raising-parent > .simple-card { width:380px;min-width:380px;max-width:380px; }
//     }
//   `;

//   return (
//     <div className="raising-view">
//       <style>{raisingStyles}</style>
//       <div className="raising-network">
//         <div className="raising-parent">
//           <SimpleFlowCard
//             title="RAISING MAIN"
//             subtitle={`${count} Configured Vertical Main${count === 1 ? "" : "s"}`}
//             icon={Bolt}
//           />
//         </div>

//         {count > 0 ? (
//           <>
//             <div className="raising-parent-stem" />
//             <div className="raising-label">CONFIGURED RAISING MAINS</div>
//             <div className="raising-distribution">
//               <div className={`raising-bus ${count === 1 ? "raising-bus--single" : ""}`} />
//               <div className="raising-lines">
//                 {equipment.map((item) => (
//                   <div className="raising-line" key={`line-${item.id}`} />
//                 ))}
//               </div>
//             </div>
//             <div className="raising-grid">
//               {equipment.map((item) => (
//                 <div className="raising-item" key={item.id}>
//                   <SimpleFlowCard
//                     title={(item.name || "Raising Main").toUpperCase()}
//                     subtitle={item.label || "Vertical Distribution"}
//                     icon={Bolt}
//                     equipment={item}
//                     onClick={() => onOpenEquipment?.({
//                       ...item,
//                       telemetry: item.telemetry || demoTelemetry[item.id] || {
//                         status:"ON", health:"HEALTHY", communication:true,
//                         voltage:433, current:180, amps:180, powerFactor:0.98,
//                         load:55, breakerState:"CLOSED", fault:false, trip:false, warning:false,
//                       },
//                     })}
//                   />
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <div className="raising-empty">No Raising Main equipment is configured for this project.</div>
//         )}
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    8. WING VIEW
// ========================================================= */

// function WingView({
//   topology,
//   onOpenEquipment,
// }) {
//   const wings =
//     Array.isArray(topology?.equipment)
//       ? topology.equipment
//       : [];

//   const wingCount =
//     wings.length;

//   const wingCardWidth = 220;
//   const wingNetworkWidth =
//     Math.max(
//       760,
//       wingCount * wingCardWidth
//     );

//   const wingStyles = `
//     /* =====================================================
//        WING / BUILDING ROOT
//     ===================================================== */

//     .wing-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       --wing-card-width: ${wingCardWidth}px;
//       --wing-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(16px, 2vh, 26px)
//         clamp(20px, 3vw, 46px)
//         28px;

//       box-sizing: border-box;

//       overflow-x: auto;
//     }


//     /* =====================================================
//        COMPLETE NETWORK

//        One common coordinate system is used for:
//        - parent
//        - horizontal bus
//        - vertical branches
//        - Wing A / Wing B cards
//     ===================================================== */

//     .wing-network {
//       width: ${wingNetworkWidth}px;
//       min-width: ${wingNetworkWidth}px;

//       margin: 0 auto;
//     }


//     /* =====================================================
//        BUILDINGS PARENT
//     ===================================================== */

//     .wing-parent {
//       position: relative;

//       width: 420px;
//       min-width: 420px;
//       max-width: 420px;

//       height: 110px;
//       min-height: 110px;

//       margin: 0 auto;

//       padding: 13px 20px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 2px;

//       overflow: hidden;

//       border: 1px solid #367fb1;
//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #153e72 0%,
//           #102f61 55%,
//           #0d2853 100%
//         );

//       box-shadow:
//         0 7px 18px
//         rgba(11, 44, 75, .13);

//       z-index: 5;
//     }


//     .wing-parent::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #3eb9d0;
//     }


//     .wing-parent svg {
//       flex: 0 0 auto;

//       margin-bottom: 2px;

//       color: #72d1e2;
//     }


//     .wing-parent span {
//       color: #8ec5ea;

//       font-size: 8px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .16em;
//     }


//     .wing-parent h2 {
//       margin: 5px 0 2px;

//       color: #ffffff;

//       font-size: 19px;
//       font-weight: 700;

//       line-height: 1.15;
//     }


//     .wing-parent p {
//       margin: 0;

//       color: #b3cada;

//       font-size: 9px;
//       font-weight: 550;
//     }


//     /* =====================================================
//        BUILDINGS → DISTRIBUTION BUS STEM
//     ===================================================== */

//     .wing-main-stem {
//       width: var(--wire-size);
//       height: 36px;

//       margin: 0 auto;

//       background: var(--wire);
//     }


//     /* =====================================================
//        WING DISTRIBUTION

//                     BUILDINGS
//                         │
//                         │
//                  ───────┼───────
//                  │              │
//               WING A         WING B

//        The bus starts at the first wing center and
//        ends at the final wing center.
//     ===================================================== */

//     .wing-distribution {
//       position: relative;

//       width: 100%;

//       height: 38px;
//       min-height: 38px;
//     }


//     .wing-bus {
//       position: absolute;

//       top: 0;

//       left: ${wingCardWidth / 2}px;
//       right: ${wingCardWidth / 2}px;

//       height: var(--wire-size);

//       background: var(--wire);
//     }


//     .wing-bus--single {
//       left: 50%;
//       right: auto;
//       width: var(--wire-size);
//       transform: translateX(-50%);
//     }


//     /* =====================================================
//        EXACT VERTICAL BRANCHES

//        Uses the SAME two-column grid as the cards.
//     ===================================================== */

//     .wing-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             wingCount,
//             1
//           )},
//           ${wingCardWidth}px
//         );

//       pointer-events: none;
//     }


//     .wing-line {
//       position: relative;
//     }


//     .wing-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       transform: translateX(-50%);

//       background: var(--wire);
//     }


//     /* =====================================================
//        WING CARD GRID

//        IMPORTANT:
//        Same exact columns as .wing-lines.
//        No arbitrary 120px gap.
//     ===================================================== */

//     .wing-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             wingCount,
//             1
//           )},
//           ${wingCardWidth}px
//         );

//       gap: 0;

//       align-items: start;
//     }


//     .wing-branch {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        CARD / FLOW CONNECTION POINT
//     ===================================================== */

//     .wing-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /* =====================================================
//        WING EQUIPMENT CARDS

//        Topology controls the exact dimensions instead
//        of allowing EquipmentCard to change geometry.
//     ===================================================== */

//     .wing-branch > .eq-card {
//       width: var(--wing-card-width);
//       min-width: var(--wing-card-width);
//       max-width: var(--wing-card-width);

//       height: var(--wing-card-height);
//       min-height: var(--wing-card-height);
//       max-height: var(--wing-card-height);

//       margin: 0;
//     }


//     /* =====================================================
//        NO MOVEMENT ON HOVER

//        Flow connector must stay attached.
//     ===================================================== */

//     .wing-view .eq-card:hover,
//     .wing-view .eq-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .wing-view {
//         --wing-card-height: 142px;
//       }


//       .wing-network {
//         width: ${wingNetworkWidth}px;
//         min-width: ${wingNetworkWidth}px;
//       }


//       .wing-parent {
//         width: 440px;
//         min-width: 440px;
//         max-width: 440px;

//         height: 114px;
//         min-height: 114px;
//       }
//     }


//     /* =====================================================
//        NORMAL LAPTOP
//     ===================================================== */

//     @media (
//       min-width: 1101px
//     ) and (
//       max-width: 1499px
//     ) {

//       .wing-view {
//         --wing-card-height: 136px;
//       }


//       .wing-network {
//         width: ${wingNetworkWidth}px;
//         min-width: ${wingNetworkWidth}px;
//       }


//       .wing-parent {
//         width: 400px;
//         min-width: 400px;
//         max-width: 400px;

//         height: 106px;
//         min-height: 106px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP / TABLET

//        Keep topology intact rather than squeezing
//        cards and disconnecting flow lines.
//     ===================================================== */

//     @media (max-width: 1100px) {

//       .wing-view {
//         --wing-card-height: 132px;

//         padding-left: 18px;
//         padding-right: 18px;
//       }


//       .wing-network {
//         width: ${wingNetworkWidth}px;
//         min-width: ${wingNetworkWidth}px;
//       }


//       .wing-parent {
//         width: 380px;
//         min-width: 380px;
//         max-width: 380px;

//         height: 104px;
//         min-height: 104px;
//       }
//     }
//   `;


//   return (
//     <div className="wing-view">
//       <style>
//         {wingStyles}
//       </style>


//       <div className="wing-network">

//         {/* ===============================================
//             BUILDINGS PARENT
//         ================================================ */}

//         <div className="wing-parent">

//           <Building2
//             size={26}
//             strokeWidth={1.8}
//           />


//           <span>
//             MAIN BUILDING DISTRIBUTION
//           </span>


//           <h2>
//             BUILDINGS
//           </h2>


//           <p>
//             WING EQUIPMENT
//           </p>

//         </div>


//         {/* ===============================================
//             BUILDINGS → WING BUS
//         ================================================ */}

//         <div className="wing-main-stem" />


//         {/* ===============================================
//             HORIZONTAL BUS + TWO EXACT BRANCHES
//         ================================================ */}

//         <div className="wing-distribution">

//           <div
//             className={`wing-bus ${
//               wingCount === 1
//                 ? "wing-bus--single"
//                 : ""
//             }`}
//           />


//           <div className="wing-lines">

//             {wings.map(
//               (item) => (
//                 <div
//                   className="wing-line"
//                   key={`line-${item.id}`}
//                 />
//               )
//             )}

//           </div>

//         </div>


//         {/* ===============================================
//             CONFIGURED WINGS
//         ================================================ */}

//         <div className="wing-grid">

//           {wings.map(
//             (item) => (

//               <div
//                 className="wing-branch"
//                 key={item.id}
//               >

//                 <EquipmentCard
//                   equipment={item}
//                   onOpen={onOpenEquipment}
//                 />

//               </div>

//             )
//           )}

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    9. DG VIEW
// ========================================================= */

// function DGView({
//   topology,
//   onOpenEquipment,
// }) {
//   const generators =
//     Array.isArray(topology?.equipment)
//       ? topology.equipment
//       : [];

//   const dgCount =
//     generators.length;

//   const dgCardWidth = 150;
//   const dgNetworkWidth =
//     Math.max(
//       760,
//       dgCount * dgCardWidth
//     );

//   const dgStyles = `
//     /* =====================================================
//        DG ROOT
//     ===================================================== */

//     .dg-view {
//       --wire: #19b8cf;
//       --wire-size: 2px;

//       --dg-card-width: ${dgCardWidth}px;
//       --dg-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(16px, 2vw, 34px)
//         26px;

//       box-sizing: border-box;

//       overflow-x: auto;
//     }


//     /* =====================================================
//        COMPLETE DG NETWORK

//        One common coordinate system controls:
//        - Parent
//        - Main stem
//        - Horizontal bus
//        - DG branches
//        - DG cards
//     ===================================================== */

//     .dg-network {
//       width: ${dgNetworkWidth}px;
//       min-width: ${dgNetworkWidth}px;

//       margin: 0 auto;
//     }


//     /* =====================================================
//        DG PARENT
//     ===================================================== */

//     .dg-parent {
//       width: 100%;

//       display: flex;

//       align-items: center;
//       justify-content: center;
//     }


//     .dg-parent > .simple-card {
//       width: 500px;
//       min-width: 500px;
//       max-width: 500px;

//       height: 112px;
//       min-height: 112px;
//       max-height: 112px;

//       margin: 0;
//     }


//     /* =====================================================
//        PARENT → DG BUS
//     ===================================================== */

//     .dg-main-stem {
//       width: var(--wire-size);
//       height: 38px;

//       margin: 0 auto;

//       background: var(--wire);
//     }


//     /* =====================================================
//        DG DISTRIBUTION

//                          DG PLANT
//                             │
//                             │
//           ──────────────────┼──────────────────
//           │    │    │    │    │    │    │
//          DG1  DG2  DG3  ...
//     ===================================================== */

//     .dg-distribution {
//       position: relative;

//       width: 100%;

//       height: 38px;
//       min-height: 38px;
//     }


//     /* =====================================================
//        HORIZONTAL DG BUS

//        The bus starts and ends exactly at the first
//        and last DG branch centers.
//     ===================================================== */

//     .dg-bus {
//       position: absolute;

//       top: 0;

//       left:
//         ${dgCardWidth / 2}px;

//       right:
//         ${dgCardWidth / 2}px;

//       height: var(--wire-size);

//       background: var(--wire);
//     }


//     .dg-bus--single {
//       left: 50%;
//       right: auto;
//       width: var(--wire-size);
//       transform: translateX(-50%);
//     }


//     /* =====================================================
//        EXACT VERTICAL BRANCHES

//        IMPORTANT:
//        This grid is identical to .dg-grid below.
//     ===================================================== */

//     .dg-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             dgCount,
//             1
//           )},
//           ${dgCardWidth}px
//         );

//       pointer-events: none;
//     }


//     .dg-line {
//       position: relative;
//     }


//     .dg-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       transform:
//         translateX(-50%);

//       background: var(--wire);
//     }


//     /* =====================================================
//        DG CARD GRID

//        Same exact columns as connector branches.

//        No gap is used in the geometry.
//        Spacing comes naturally from the column width.
//     ===================================================== */

//     .dg-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           ${Math.max(
//             dgCount,
//             1
//           )},
//           ${dgCardWidth}px
//         );

//       gap: 0;

//       align-items: start;
//     }


//     .dg-branch {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        CONNECTOR / CARD JUNCTION
//     ===================================================== */

//     .dg-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /* =====================================================
//        DG CARDS
//     ===================================================== */

//     .dg-branch > .simple-card {
//       width: var(--dg-card-width);
//       min-width: var(--dg-card-width);
//       max-width: var(--dg-card-width);

//       height: var(--dg-card-height);
//       min-height: var(--dg-card-height);
//       max-height: var(--dg-card-height);

//       margin: 0;

//       padding: 10px 8px;

//       box-sizing: border-box;
//     }


//     .dg-branch .simple-card h3 {
//       margin: 2px 0;

//       font-size: 14px;
//       line-height: 17px;

//       white-space: normal;

//       text-align: center;
//     }


//     /* =====================================================
//        NO CARD MOVEMENT

//        Connector must remain attached while hovering.
//     ===================================================== */

//     .dg-view .simple-card:hover,
//     .dg-view .simple-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .dg-view {
//         --dg-card-height: 142px;
//       }


//       .dg-network {
//         width: ${dgNetworkWidth}px;
//         min-width: ${dgNetworkWidth}px;
//       }


//       .dg-parent > .simple-card {
//         width: 540px;
//         min-width: 540px;
//         max-width: 540px;

//         height: 116px;
//         min-height: 116px;
//         max-height: 116px;
//       }


//       .dg-branch .simple-card h3 {
//         font-size: 15px;
//       }
//     }


//     /* =====================================================
//        NORMAL LAPTOP
//     ===================================================== */

//     @media (
//       min-width: 1101px
//     ) and (
//       max-width: 1499px
//     ) {

//       .dg-view {
//         --dg-card-height: 136px;
//       }


//       .dg-network {
//         width: ${dgNetworkWidth}px;
//         min-width: ${dgNetworkWidth}px;
//       }


//       .dg-parent > .simple-card {
//         width: 480px;
//         min-width: 480px;
//         max-width: 480px;

//         height: 108px;
//         min-height: 108px;
//         max-height: 108px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP / TABLET

//        DG cards should not be crushed into a small
//        viewport.

//        Preserve the engineering topology and allow
//        horizontal scrolling.
//     ===================================================== */

//     @media (max-width: 1100px) {

//       .dg-view {
//         --dg-card-height: 132px;

//         padding-left: 16px;
//         padding-right: 16px;
//       }


//       .dg-network {
//         width: ${dgNetworkWidth}px;
//         min-width: ${dgNetworkWidth}px;
//       }


//       .dg-parent > .simple-card {
//         width: 450px;
//         min-width: 450px;
//         max-width: 450px;

//         height: 106px;
//         min-height: 106px;
//         max-height: 106px;
//       }


//       .dg-branch .simple-card h3 {
//         font-size: 13px;
//       }
//     }
//   `;


//   return (
//     <div className="dg-view">
//       <style>
//         {dgStyles}
//       </style>


//       <div className="dg-network">

//         {/* ===============================================
//             DIESEL GENERATOR PLANT
//         ================================================ */}

//         <div className="dg-parent">

//           <SimpleFlowCard
//             title="DIESEL GENERATOR PLANT"
//             eyebrow="EMERGENCY POWER PANEL"
//             icon={CirclePower}
//             live={false}
//           />

//         </div>


//         {/* ===============================================
//             PARENT → MAIN DG BUS
//         ================================================ */}

//         <div className="dg-main-stem" />


//         {/* ===============================================
//             HORIZONTAL BUS + EXACT BRANCHES
//         ================================================ */}

//         <div className="dg-distribution">

//           <div
//             className={`dg-bus ${
//               dgCount === 1
//                 ? "dg-bus--single"
//                 : ""
//             }`}
//           />


//           <div className="dg-lines">

//             {generators.map(
//               (item) => (

//                 <div
//                   className="dg-line"
//                   key={`line-${item.id}`}
//                 />

//               )
//             )}

//           </div>

//         </div>


//         {/* ===============================================
//             DG EQUIPMENT
//         ================================================ */}

//         <div className="dg-grid">

//           {generators.map(
//             (item) => (

//               <div
//                 className="dg-branch"
//                 key={item.id}
//               >

//                 <SimpleFlowCard
//                   title={item.name}
//                   eyebrow="DIESEL GENERATOR"
//                   subtitle={item.label}
//                   icon={CirclePower}
//                   equipment={item}

//                   onClick={() =>
//                     onOpenEquipment?.({
//                       ...item,

//                       telemetry:
//                         demoTelemetry[
//                           item.id
//                         ],
//                     })
//                   }
//                 />

//               </div>

//             )
//           )}

//         </div>

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    10. HVAC VIEW
// ========================================================= */

// function HVACView({
//   topology,
//   onOpenEquipment,
// }) {
//   const equipment =
//     topology?.equipment || [];

//   const hvacCount =
//     equipment.length;

//   const hvacCardWidth = 190;
//   const hvacGap = 34;
//   const hvacNetworkWidth =
//     hvacCount > 0
//       ? Math.max(
//           560,
//           hvacCount * hvacCardWidth +
//             Math.max(
//               hvacCount - 1,
//               0
//             ) *
//               hvacGap
//         )
//       : 560;

//   const hvacStyles = `
//     .hvac-view {
//       width:min(560px,92%);min-height:270px;margin:auto;padding:34px;
//       display:flex;flex-direction:column;align-items:center;justify-content:center;
//       text-align:center;border:1px solid #b9c9d5;border-radius:8px;background:#eef3f6;
//     }
//     .hvac-view__icon {
//       width:58px;height:58px;margin-bottom:14px;display:grid;place-items:center;
//       border:1px solid #397da9;border-radius:7px;color:#d7efff;background:#173f75;
//     }
//     .hvac-view span { color:#6f8799;font-size:8px;font-weight:800;letter-spacing:.16em; }
//     .hvac-view h2 { margin:7px 0 5px;color:#17324a;font-size:21px; }
//     .hvac-view p { margin:0;color:#708291;font-size:11px; }
//     .hvac-view strong {
//       margin-top:18px;padding:7px 12px;border:1px solid #c6d3dc;border-radius:5px;
//       color:#5f7484;background:#fff;font-size:9px;letter-spacing:.1em;
//     }
//     .hvac-flow-view {
//       --wire:#397da9;
//       --wire-size:2px;
//       --hvac-card-width:190px;
//       width:100%;
//       min-width:0;
//       min-height:100%;
//       margin:0;
//       padding:clamp(14px,2vh,24px) clamp(18px,3vw,42px) 28px;
//       box-sizing:border-box;
//       overflow-x:auto;
//     }
//     .hvac-network {
//       width:var(--hvac-network-width);
//       min-width:var(--hvac-network-width);
//       margin:0 auto;
//     }
//     .hvac-parent {
//       display:flex;
//       justify-content:center;
//     }
//     .hvac-parent > .simple-card {
//       width:420px;
//       min-width:420px;
//       max-width:420px;
//       height:110px;
//       min-height:110px;
//       max-height:110px;
//       margin:0;
//     }
//     .hvac-main-stem {
//       width:var(--wire-size);
//       height:36px;
//       margin:0 auto;
//       background:var(--wire);
//     }
//     .hvac-distribution {
//       position:relative;
//       width:100%;
//       height:36px;
//       min-height:36px;
//     }
//     .hvac-bus {
//       position:absolute;
//       top:0;
//       left:calc(100% / (var(--hvac-count) * 2));
//       right:calc(100% / (var(--hvac-count) * 2));
//       height:var(--wire-size);
//       background:var(--wire);
//     }
//     .hvac-bus--single {
//       left:50%;
//       right:50%;
//     }
//     .hvac-lines,
//     .hvac-grid {
//       display:grid;
//       grid-template-columns:repeat(var(--hvac-count),var(--hvac-card-width));
//       justify-content:space-between;
//       gap:0;
//     }
//     .hvac-lines {
//       position:absolute;
//       inset:0;
//       pointer-events:none;
//     }
//     .hvac-line,
//     .hvac-branch {
//       position:relative;
//       display:flex;
//       justify-content:center;
//     }
//     .hvac-line::before {
//       content:"";
//       position:absolute;
//       top:0;
//       bottom:0;
//       left:50%;
//       width:var(--wire-size);
//       transform:translateX(-50%);
//       background:var(--wire);
//     }
//     .hvac-branch::before {
//       content:"";
//       position:absolute;
//       top:0;
//       left:50%;
//       width:6px;
//       height:6px;
//       box-sizing:border-box;
//       border:1px solid var(--wire);
//       border-radius:50%;
//       background:#fff;
//       transform:translate(-50%,-50%);
//       z-index:8;
//     }
//     .hvac-branch > .eq-card {
//       width:var(--hvac-card-width);
//       min-width:var(--hvac-card-width);
//       max-width:var(--hvac-card-width);
//       height:136px;
//       min-height:136px;
//       max-height:136px;
//       margin:0;
//     }
//     .hvac-flow-view .eq-card:hover,
//     .hvac-flow-view .eq-card:focus-visible {
//       transform:none;
//     }
//   `;

//   if (hvacCount > 0) {
//     return (
//       <div className="hvac-flow-view">
//         <style>{hvacStyles}</style>

//         <div
//           className="hvac-network"
//           style={{
//             "--hvac-count": hvacCount,
//             "--hvac-network-width": `${hvacNetworkWidth}px`,
//           }}
//         >
//           <div className="hvac-parent">
//             <SimpleFlowCard
//               title="HVAC COOLING PLANT"
//               subtitle="Configured HVAC Equipment"
//               eyebrow="MECHANICAL SERVICES"
//               icon={Fan}
//             />
//           </div>

//           <div className="hvac-main-stem" />

//           <div className="hvac-distribution">
//             <div
//               className={`hvac-bus ${
//                 hvacCount === 1
//                   ? "hvac-bus--single"
//                   : ""
//               }`}
//             />

//             <div className="hvac-lines">
//               {equipment.map((item) => (
//                 <div
//                   className="hvac-line"
//                   key={`line-${item.id}`}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="hvac-grid">
//             {equipment.map((item) => (
//               <div
//                 className="hvac-branch"
//                 key={item.id}
//               >
//                 <EquipmentCard
//                   equipment={item}
//                   onOpen={onOpenEquipment}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="hvac-view">
//       <style>{hvacStyles}</style>
//       <span className="hvac-view__icon"><Fan size={30} /></span>
//       <span>MECHANICAL SERVICES</span>
//       <h2>HVAC COOLING PLANT</h2>
//       <p>No internal HVAC equipment is configured for this flow.</p>
//       <strong>0 EQUIPMENT</strong>
//     </div>
//   );
// }

// /* =========================================================
//    11. WATER MANAGEMENT VIEW
// ========================================================= */

// function WaterView({
//   topology,
//   onOpenEquipment,
// }) {
//   const [showTanks, setShowTanks] =
//     useState(false);

//   const main =
//     topology.equipment.find(
//       (item) =>
//         item.type === "water-main"
//     );

//   const stp =
//     topology.equipment.find(
//       (item) =>
//         item.type === "stp"
//     );

//   const wtp =
//     topology.equipment.find(
//       (item) =>
//         item.type === "wtp"
//     );

//   const tanks =
//     topology.equipment.filter(
//       (item) =>
//         item.type === "tank"
//     );

//   const waterBranches = [
//     stp
//       ? {
//           id: "stp",
//           kind: "stp",
//           equipment: stp,
//         }
//       : null,
//     wtp
//       ? {
//           id: "wtp",
//           kind: "wtp",
//           equipment: wtp,
//         }
//       : null,
//     tanks.length > 0
//       ? {
//           id: "water-tanks",
//           kind: "tanks",
//         }
//       : null,
//   ].filter(Boolean);

//   const waterBranchCount =
//     waterBranches.length;

//   const tankCount =
//     tanks.length;

//   const waterNetworkWidth =
//     Math.max(
//       520,
//       waterBranchCount * 240
//     );

//   const tankNetworkWidth =
//     Math.max(
//       520,
//       tankCount * 220
//     );


//   const waterStyles = `
//     /* =====================================================
//        WATER MANAGEMENT ROOT
//     ===================================================== */

//     .water-view {
//       --wire: #249bb5;
//       --wire-size: 2px;

//       --water-card-width: 220px;
//       --water-card-height: 136px;

//       --tank-card-width: 190px;
//       --tank-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 3vw, 42px)
//         28px;

//       box-sizing: border-box;

//       overflow-x: auto;
//     }


//     /* =====================================================
//        COMPLETE MAIN NETWORK
//     ===================================================== */

//     .water-network {
//       width: var(--water-network-width);
//       min-width: var(--water-network-width);

//       margin: 0 auto;
//     }


//     /* =====================================================
//        WATER MANAGEMENT PARENT
//     ===================================================== */

//     .water-parent {
//       width: 100%;

//       display: flex;

//       align-items: center;
//       justify-content: center;
//     }


//     .water-parent > .simple-card {
//       width: 440px;
//       min-width: 440px;
//       max-width: 440px;

//       height: 112px;
//       min-height: 112px;
//       max-height: 112px;

//       margin: 0;
//     }


//     /* =====================================================
//        PARENT → MAIN WATER BUS
//     ===================================================== */

//     .water-main-stem {
//       width: var(--wire-size);
//       height: 38px;

//       margin: 0 auto;

//       background: var(--wire);
//     }


//     /* =====================================================
//        MAIN WATER DISTRIBUTION

//                     WATER MANAGEMENT
//                            │
//                            │
//              ──────────────┼──────────────
//              │             │             │
//             STP           WTP       WATER TANKS
//     ===================================================== */

//     .water-distribution {
//       position: relative;

//       width: 100%;

//       height: 38px;
//       min-height: 38px;
//     }


//     /* =====================================================
//        MAIN HORIZONTAL BUS

//        Three equal columns:

//        STP center         = 1/6
//        WTP center         = 3/6
//        Water Tanks center = 5/6

//        Bus starts at STP and ends at Water Tanks.
//     ===================================================== */

//     .water-bus {
//       position: absolute;

//       top: 0;

//       left:
//         calc(
//           100% / (var(--water-branch-count) * 2)
//         );

//       right:
//         calc(
//           100% / (var(--water-branch-count) * 2)
//         );

//       height: var(--wire-size);

//       background: var(--wire);
//     }

//     .water-bus--single {
//       left: 50%;
//       right: 50%;
//     }


//     /* =====================================================
//        EXACT THREE VERTICAL BRANCHES
//     ===================================================== */

//     .water-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--water-branch-count),
//           minmax(0, 1fr)
//         );

//       pointer-events: none;
//     }


//     .water-line {
//       position: relative;
//     }


//     .water-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       transform:
//         translateX(-50%);

//       background: var(--wire);
//     }


//     /* =====================================================
//        MAIN WATER CARD GRID

//        Same exact 3-column geometry as .water-lines.
//     ===================================================== */

//     .water-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--water-branch-count),
//           minmax(0, 1fr)
//         );

//       gap: 0;

//       align-items: start;
//     }


//     .water-branch {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        CARD CONNECTION POINT
//     ===================================================== */

//     .water-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /* =====================================================
//        STP / WTP CARDS
//     ===================================================== */

//     .water-branch > .simple-card {
//       width: var(--water-card-width);
//       min-width: var(--water-card-width);
//       max-width: var(--water-card-width);

//       height: var(--water-card-height);
//       min-height: var(--water-card-height);
//       max-height: var(--water-card-height);

//       margin: 0;

//       box-sizing: border-box;
//     }


//     /* =====================================================
//        WATER TANK GROUP CARD
//     ===================================================== */

//     .water-tank-group {
//       position: relative;

//       width: var(--water-card-width);
//       min-width: var(--water-card-width);
//       max-width: var(--water-card-width);

//       height: var(--water-card-height);
//       min-height: var(--water-card-height);
//       max-height: var(--water-card-height);

//       margin: 0;

//       padding: 12px 14px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 3px;

//       overflow: hidden;

//       border:
//         1px solid #327ba2;

//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #174766,
//           #123b58 55%,
//           #0e3049
//         );

//       box-shadow:
//         0 5px 14px
//         rgba(10, 39, 59, .13);

//       cursor: pointer;

//       transition:
//         border-color .15s ease,
//         box-shadow .15s ease;
//     }


//     .water-tank-group::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #3eb9d0;
//     }


//     .water-tank-group:hover,
//     .water-tank-group:focus-visible {
//       transform: none;

//       outline: none;

//       border-color: #59bad0;

//       box-shadow:
//         0 7px 18px
//         rgba(10, 42, 64, .18);
//     }


//     .water-tank-group svg {
//       margin: 3px 0;

//       color: #71d0e2;
//     }


//     .water-tank-group span {
//       color: #87bddd;

//       font-size: 7px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .12em;
//     }


//     .water-tank-group h3 {
//       margin: 3px 0 1px;

//       color: #ffffff;

//       font-size: 15px;
//       font-weight: 700;

//       line-height: 18px;
//     }


//     .water-tank-group p {
//       margin: 0;

//       color: #b5cede;

//       font-size: 8px;

//       line-height: 12px;
//     }


//     .water-tank-group strong {
//       margin-top: 5px;

//       color: #73d0e1;

//       font-size: 7px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .05em;
//     }


//     /* =====================================================
//        DON'T MOVE FLOW CARDS ON HOVER
//     ===================================================== */

//     .water-view .simple-card:hover,
//     .water-view .simple-card:focus-visible,
//     .water-view .eq-card:hover,
//     .water-view .eq-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        WATER TANK SUBVIEW HEADER
//     ===================================================== */

//     .water-tanks-head {
//       width: min(100%, 1040px);

//       margin:
//         0 auto
//         20px;

//       display: flex;

//       align-items: center;

//       gap: 14px;
//     }


//     .water-tanks-head button {
//       height: 36px;

//       padding:
//         0 12px;

//       display: inline-flex;

//       align-items: center;

//       gap: 6px;

//       border:
//         1px solid #426780;

//       border-radius: 5px;

//       color: #dce9f2;

//       background: #173b56;

//       cursor: pointer;

//       transition:
//         background .15s ease,
//         border-color .15s ease;
//     }


//     .water-tanks-head button:hover,
//     .water-tanks-head button:focus-visible {
//       outline: none;

//       background: #19445f;

//       border-color: #4da8bd;
//     }


//     .water-tanks-head h2 {
//       margin: 0;

//       color: #17354b;

//       font-size: 21px;
//       font-weight: 700;
//     }


//     /* =====================================================
//        COMPLETE TANK NETWORK
//     ===================================================== */

//     .water-tanks-network {
//       width: var(--tank-network-width);
//       min-width: var(--tank-network-width);

//       margin: 0 auto;
//     }


//     /* =====================================================
//        WATER TANKS PARENT
//     ===================================================== */

//     .water-tanks-parent {
//       width: 100%;

//       display: flex;

//       justify-content: center;
//       align-items: center;
//     }


//     .water-tanks-parent > .simple-card {
//       width: 420px;
//       min-width: 420px;
//       max-width: 420px;

//       height: 110px;
//       min-height: 110px;
//       max-height: 110px;

//       margin: 0;
//     }


//     /* =====================================================
//        WATER TANK PARENT → BUS
//     ===================================================== */

//     .water-tanks-main-stem {
//       width: var(--wire-size);
//       height: 36px;

//       margin: 0 auto;

//       background: var(--wire);
//     }


//     /* =====================================================
//        FOUR TANK DISTRIBUTION

//                        WATER TANKS
//                             │
//                             │
//              ───────────────┼───────────────
//              │        │          │         │
//            TANK1    TANK2      TANK3     TANK4
//     ===================================================== */

//     .water-tanks-distribution {
//       position: relative;

//       width: 100%;

//       height: 36px;
//       min-height: 36px;
//     }


//     /*
//        Four equal columns.

//        Tank 1 center = 1/8
//        Tank 4 center = 7/8
//     */

//     .water-tanks-bus {
//       position: absolute;

//       top: 0;

//       left:
//         calc(
//           100% / (var(--tank-count) * 2)
//         );

//       right:
//         calc(
//           100% / (var(--tank-count) * 2)
//         );

//       height: var(--wire-size);

//       background: var(--wire);
//     }

//     .water-tanks-bus--single {
//       left: 50%;
//       right: 50%;
//     }


//     /* =====================================================
//        EXACT FOUR TANK BRANCHES
//     ===================================================== */

//     .water-tank-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--tank-count),
//           minmax(0, 1fr)
//         );

//       pointer-events: none;
//     }


//     .water-tank-line {
//       position: relative;
//     }


//     .water-tank-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       transform:
//         translateX(-50%);

//       background: var(--wire);
//     }


//     /* =====================================================
//        TANK CARD GRID

//        Same exact 4-column geometry as tank lines.
//     ===================================================== */

//     .water-tanks-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--tank-count),
//           minmax(0, 1fr)
//         );

//       gap: 0;

//       align-items: start;
//     }


//     .water-tank {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        TANK CARD CONNECTION
//     ===================================================== */

//     .water-tank::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /* =====================================================
//        TANK EQUIPMENT CARDS
//     ===================================================== */

//     .water-tank > .eq-card {
//       width: var(--tank-card-width);
//       min-width: var(--tank-card-width);
//       max-width: var(--tank-card-width);

//       height: var(--tank-card-height);
//       min-height: var(--tank-card-height);
//       max-height: var(--tank-card-height);

//       margin: 0;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .water-view {
//         --water-card-width: 230px;
//         --water-card-height: 142px;

//         --tank-card-width: 200px;
//         --tank-card-height: 142px;
//       }


//       .water-network,
//       .water-tanks-network {
//         max-width: none;
//       }


//       .water-parent > .simple-card {
//         width: 460px;
//         min-width: 460px;
//         max-width: 460px;

//         height: 116px;
//         min-height: 116px;
//         max-height: 116px;
//       }


//       .water-tanks-parent > .simple-card {
//         width: 440px;
//         min-width: 440px;
//         max-width: 440px;

//         height: 114px;
//         min-height: 114px;
//         max-height: 114px;
//       }
//     }


//     /* =====================================================
//        NORMAL LAPTOP
//     ===================================================== */

//     @media (
//       min-width: 1101px
//     ) and (
//       max-width: 1499px
//     ) {

//       .water-view {
//         --water-card-width: 210px;
//         --water-card-height: 136px;

//         --tank-card-width: 190px;
//         --tank-card-height: 136px;
//       }


//       .water-network,
//       .water-tanks-network {
//         max-width: none;
//       }


//       .water-parent > .simple-card {
//         width: 420px;
//         min-width: 420px;
//         max-width: 420px;

//         height: 108px;
//         min-height: 108px;
//         max-height: 108px;
//       }


//       .water-tanks-parent > .simple-card {
//         width: 400px;
//         min-width: 400px;
//         max-width: 400px;

//         height: 108px;
//         min-height: 108px;
//         max-height: 108px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP / TABLET

//        Keep the topology intact.
//        Horizontal scrolling is preferable to
//        compressing the cards/flow lines.
//     ===================================================== */

//     @media (max-width: 1100px) {

//       .water-view {
//         --water-card-width: 195px;
//         --water-card-height: 132px;

//         --tank-card-width: 182px;
//         --tank-card-height: 132px;

//         padding-left: 18px;
//         padding-right: 18px;
//       }


//       .water-network,
//       .water-tanks-network {
//         width: var(--water-network-width);
//         min-width: var(--water-network-width);
//       }

//       .water-tanks-network {
//         width: var(--tank-network-width);
//         min-width: var(--tank-network-width);
//       }


//       .water-parent > .simple-card {
//         width: 390px;
//         min-width: 390px;
//         max-width: 390px;

//         height: 106px;
//         min-height: 106px;
//         max-height: 106px;
//       }


//       .water-tanks-parent > .simple-card {
//         width: 380px;
//         min-width: 380px;
//         max-width: 380px;

//         height: 106px;
//         min-height: 106px;
//         max-height: 106px;
//       }
//     }
//   `;


//   /* =====================================================
//      WATER TANK SUBVIEW
//   ===================================================== */

//   if (showTanks) {
//     return (
//       <div className="water-view">
//         <style>
//           {waterStyles}
//         </style>


//         {/* ===============================================
//             HEADER
//         ================================================ */}

//         <div className="water-tanks-head">

//           <button
//             type="button"
//             onClick={() =>
//               setShowTanks(false)
//             }
//           >
//             <ArrowLeft size={15} />

//             Water Management
//           </button>


//           <h2>
//             WATER TANKS
//           </h2>

//         </div>


//         <div
//           className="water-tanks-network"
//           style={{
//             "--tank-count": tankCount,
//             "--tank-network-width": `${tankNetworkWidth}px`,
//           }}
//         >

//           {/* =============================================
//               WATER TANKS PARENT
//           ============================================== */}

//           <div className="water-tanks-parent">

//             <SimpleFlowCard
//               title="WATER TANKS"
//               subtitle="Tank Level Monitoring"
//               eyebrow="STORAGE DISTRIBUTION"
//               icon={Droplets}
//             />

//           </div>


//           {/* =============================================
//               PARENT → TANK BUS
//           ============================================== */}

//           <div className="water-tanks-main-stem" />


//           {/* =============================================
//               FOUR-WAY DISTRIBUTION
//           ============================================== */}

//           <div className="water-tanks-distribution">

//             <div
//               className={`water-tanks-bus ${
//                 tankCount === 1
//                   ? "water-tanks-bus--single"
//                   : ""
//               }`}
//             />


//             <div className="water-tank-lines">

//               {tanks.map(
//                 (tank) => (

//                   <div
//                     className="water-tank-line"
//                     key={`line-${tank.id}`}
//                   />

//                 )
//               )}

//             </div>

//           </div>


//           {/* =============================================
//               TANK 1 / 2 / 3 / 4
//           ============================================== */}

//           <div className="water-tanks-grid">

//             {tanks.map(
//               (tank) => (

//                 <div
//                   className="water-tank"
//                   key={tank.id}
//                 >

//                   <EquipmentCard
//                     equipment={tank}
//                     onOpen={
//                       onOpenEquipment
//                     }
//                   />

//                 </div>

//               )
//             )}

//           </div>

//         </div>

//       </div>
//     );
//   }


//   /* =====================================================
//      MAIN WATER MANAGEMENT VIEW
//   ===================================================== */

//   return (
//     <div className="water-view">
//       <style>
//         {waterStyles}
//       </style>


//       <div
//         className="water-network"
//         style={{
//           "--water-branch-count":
//             waterBranchCount,
//           "--water-network-width": `${waterNetworkWidth}px`,
//         }}
//       >

//         {/* ===============================================
//             CENTRAL WATER MANAGEMENT
//         ================================================ */}

//         <div className="water-parent">

//           <SimpleFlowCard
//             title="WATER MANAGEMENT"
//             subtitle="CENTRAL WATER MONITORING"
//             eyebrow="CENTRAL WATER SYSTEM"
//             icon={Droplets}
//             equipment={main}

//             onClick={
//               main
//                 ? () =>
//                     onOpenEquipment?.({
//                       ...main,

//                       telemetry:
//                         demoTelemetry[
//                           main.id
//                         ],
//                     })
//                 : undefined
//             }
//           />

//         </div>


//         {/* ===============================================
//             CENTRAL WATER → DISTRIBUTION
//         ================================================ */}

//         {waterBranchCount > 0 && (
//           <div className="water-main-stem" />
//         )}


//         {/* ===============================================
//             MAIN 3-WAY BUS
//         ================================================ */}

//         {waterBranchCount > 0 && (
//         <div className="water-distribution">

//           <div
//             className={`water-bus ${
//               waterBranchCount === 1
//                 ? "water-bus--single"
//                 : ""
//             }`}
//           />


//           <div className="water-lines">

//             {waterBranches.map(
//               (branch) => (
//                 <div
//                   className="water-line"
//                   key={`line-${branch.id}`}
//                 />
//               )
//             )}

//           </div>

//         </div>
//         )}


//         {/* ===============================================
//             STP / WTP / WATER TANKS
//         ================================================ */}

//         {waterBranchCount > 0 && (
//           <div className="water-grid">

//             {waterBranches.map(
//               (branch) => {
//                 if (
//                   branch.kind === "tanks"
//                 ) {
//                   return (
//                     <div
//                       className="water-branch"
//                       key={branch.id}
//                     >
//                       <button
//                         type="button"
//                         className="water-tank-group"
//                         onClick={() =>
//                           setShowTanks(true)
//                         }
//                       >
//                         <span>
//                           STORAGE DISTRIBUTION
//                         </span>

//                         <Droplets
//                           size={22}
//                           strokeWidth={1.8}
//                         />

//                         <h3>
//                           WATER TANKS
//                         </h3>

//                         <p>
//                           TANK LEVEL MONITORING
//                         </p>

//                         <strong>
//                           VIEW {tankCount} TANK{tankCount === 1 ? "" : "S"} →
//                         </strong>
//                       </button>
//                     </div>
//                   );
//                 }

//                 const item =
//                   branch.equipment;

//                 return (
//                   <div
//                     className="water-branch"
//                     key={branch.id}
//                   >
//                     <SimpleFlowCard
//                       title={
//                         branch.kind === "stp"
//                           ? "STP"
//                           : "WTP"
//                       }
//                       eyebrow={
//                         branch.kind === "stp"
//                           ? "SEWAGE TREATMENT PLANT"
//                           : "WATER TREATMENT PLANT"
//                       }
//                       subtitle={
//                         branch.kind === "stp"
//                           ? "Sewage Water Treatment"
//                           : "Water Treatment"
//                       }
//                       icon={Droplets}
//                       equipment={item}
//                       onClick={() =>
//                         onOpenEquipment?.({
//                           ...item,
//                           telemetry:
//                             demoTelemetry[
//                               item.id
//                             ],
//                         })
//                       }
//                     />
//                   </div>
//                 );
//               }
//             )}

//           </div>
//         )}

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    12. FIRE VIEW
// ========================================================= */
// function FireView({
//   topology,
//   onOpenEquipment,
// }) {
//   const equipment =
//     topology?.equipment || [];

//   const fireCount =
//     equipment.length;

//   const fireNetworkWidth =
//     Math.max(
//       520,
//       fireCount * 250
//     );

//   const fireStyles = `
//     /* =====================================================
//        FIRE ROOT
//     ===================================================== */

//     .fire-view {
//       --wire: #b55b66;
//       --wire-size: 2px;

//       --fire-card-width: 210px;
//       --fire-card-height: 136px;

//       width: 100%;
//       min-width: 0;
//       min-height: 100%;

//       margin: 0;

//       padding:
//         clamp(14px, 2vh, 24px)
//         clamp(18px, 3vw, 42px)
//         28px;

//       box-sizing: border-box;

//       overflow-x: auto;
//     }


//     /* =====================================================
//        COMPLETE FIRE NETWORK

//        Parent, bus, branches and cards all share
//        the same coordinate system.
//     ===================================================== */

//     .fire-network {
//       width: var(--fire-network-width);
//       min-width: var(--fire-network-width);

//       margin: 0 auto;
//     }


//     /* =====================================================
//        FIRE PROTECTION PARENT
//     ===================================================== */

//     .fire-parent {
//       position: relative;

//       width: 430px;
//       min-width: 430px;
//       max-width: 430px;

//       height: 110px;
//       min-height: 110px;

//       margin: 0 auto;

//       padding: 13px 20px;

//       box-sizing: border-box;

//       display: flex;
//       flex-direction: column;

//       align-items: center;
//       justify-content: center;

//       gap: 2px;

//       overflow: hidden;

//       border:
//         1px solid #a64f5d;

//       border-radius: 6px;

//       color: #ffffff;

//       background:
//         linear-gradient(
//           145deg,
//           #663442 0%,
//           #572c39 55%,
//           #48232f 100%
//         );

//       box-shadow:
//         0 7px 18px
//         rgba(74, 30, 40, .14);

//       z-index: 5;
//     }


//     .fire-parent::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 0;

//       width: 100%;
//       height: 3px;

//       background: #cf6c78;
//     }


//     .fire-parent svg {
//       flex: 0 0 auto;

//       margin-bottom: 2px;

//       color: #f0a8b2;
//     }


//     .fire-parent span {
//       color: #efb8c0;

//       font-size: 8px;
//       font-weight: 800;

//       line-height: 1;

//       letter-spacing: .16em;
//     }


//     .fire-parent h2 {
//       margin: 5px 0 2px;

//       color: #ffffff;

//       font-size: 19px;
//       font-weight: 700;

//       line-height: 1.15;

//       text-align: center;
//     }


//     .fire-parent p {
//       margin: 0;

//       color: #e3bdc3;

//       font-size: 9px;
//       font-weight: 550;

//       text-align: center;
//     }


//     /* =====================================================
//        FIRE PARENT → MAIN BUS
//     ===================================================== */

//     .fire-main-stem {
//       width: var(--wire-size);
//       height: 38px;

//       margin: 0 auto;

//       background: var(--wire);
//     }


//     /* =====================================================
//        FIRE DISTRIBUTION

//                   FIRE PROTECTION
//                         │
//                         │
//              ───────────┼───────────
//              │          │          │
//           ALARMS     FIGHTING     PUMP
//     ===================================================== */

//     .fire-distribution {
//       position: relative;

//       width: 100%;

//       height: 38px;
//       min-height: 38px;
//     }


//     /* =====================================================
//        HORIZONTAL BUS

//        Three equal columns:

//        first center  = 1/6
//        middle center = 3/6
//        last center   = 5/6

//        Bus begins at the first branch and terminates
//        at the third branch.
//     ===================================================== */

//     .fire-bus {
//       position: absolute;

//       top: 0;

//       left:
//         calc(
//           100% / (var(--fire-count) * 2)
//         );

//       right:
//         calc(
//           100% / (var(--fire-count) * 2)
//         );

//       height: var(--wire-size);

//       background: var(--wire);
//     }

//     .fire-bus--single {
//       left: 50%;
//       right: 50%;
//     }


//     /* =====================================================
//        EXACT THREE VERTICAL BRANCHES

//        Uses the same grid as the cards.
//     ===================================================== */

//     .fire-lines {
//       position: absolute;

//       inset: 0;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--fire-count),
//           minmax(0, 1fr)
//         );

//       pointer-events: none;
//     }


//     .fire-line {
//       position: relative;
//     }


//     .fire-line::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       bottom: 0;

//       left: 50%;

//       width: var(--wire-size);

//       transform:
//         translateX(-50%);

//       background: var(--wire);
//     }


//     /* =====================================================
//        FIRE EQUIPMENT GRID

//        IMPORTANT:
//        Same three columns as .fire-lines.

//        No gap is used for connector geometry.
//     ===================================================== */

//     .fire-grid {
//       width: 100%;

//       display: grid;

//       grid-template-columns:
//         repeat(
//           var(--fire-count),
//           minmax(0, 1fr)
//         );

//       gap: 0;

//       align-items: start;
//     }


//     .fire-branch {
//       position: relative;

//       min-width: 0;

//       display: flex;

//       align-items: flex-start;
//       justify-content: center;
//     }


//     /* =====================================================
//        FLOW → CARD CONNECTION POINT
//     ===================================================== */

//     .fire-branch::before {
//       content: "";

//       position: absolute;

//       top: 0;
//       left: 50%;

//       width: 6px;
//       height: 6px;

//       box-sizing: border-box;

//       border:
//         1px solid
//         var(--wire);

//       border-radius: 50%;

//       background: #ffffff;

//       transform:
//         translate(
//           -50%,
//           -50%
//         );

//       z-index: 8;
//     }


//     /* =====================================================
//        FIRE EQUIPMENT CARDS
//     ===================================================== */

//     .fire-branch > .eq-card {
//       width: var(--fire-card-width);
//       min-width: var(--fire-card-width);
//       max-width: var(--fire-card-width);

//       height: var(--fire-card-height);
//       min-height: var(--fire-card-height);
//       max-height: var(--fire-card-height);

//       margin: 0;

//       box-sizing: border-box;
//     }


//     /* =====================================================
//        FIRE CARD ACCENT

//        Keep operational colors inside EquipmentCard.
//        Only use a restrained fire-system accent here.
//     ===================================================== */

//     .fire-branch > .eq-card {
//       border-color:
//         rgba(
//           181,
//           91,
//           102,
//           .72
//         );
//     }


//     /* =====================================================
//        NO MOVEMENT ON HOVER

//        Critical for connector alignment.
//     ===================================================== */

//     .fire-view .eq-card:hover,
//     .fire-view .eq-card:focus-visible {
//       transform: none;
//     }


//     /* =====================================================
//        LARGE DESKTOP
//     ===================================================== */

//     @media (min-width: 1500px) {

//       .fire-view {
//         --fire-card-width: 220px;
//         --fire-card-height: 142px;
//       }


//       .fire-network {
//         max-width: none;
//       }


//       .fire-parent {
//         width: 450px;
//         min-width: 450px;
//         max-width: 450px;

//         height: 114px;
//         min-height: 114px;
//       }
//     }


//     /* =====================================================
//        NORMAL LAPTOP
//     ===================================================== */

//     @media (
//       min-width: 1101px
//     ) and (
//       max-width: 1499px
//     ) {

//       .fire-view {
//         --fire-card-width: 200px;
//         --fire-card-height: 136px;
//       }


//       .fire-network {
//         max-width: none;
//       }


//       .fire-parent {
//         width: 420px;
//         min-width: 420px;
//         max-width: 420px;

//         height: 108px;
//         min-height: 108px;
//       }
//     }


//     /* =====================================================
//        SMALL LAPTOP / TABLET

//        Preserve the topology instead of squeezing
//        the three cards.
//     ===================================================== */

//     @media (max-width: 1100px) {

//       .fire-view {
//         --fire-card-width: 190px;
//         --fire-card-height: 132px;

//         padding-left: 18px;
//         padding-right: 18px;
//       }


//       .fire-network {
//         width: var(--fire-network-width);
//         min-width: var(--fire-network-width);
//       }


//       .fire-parent {
//         width: 390px;
//         min-width: 390px;
//         max-width: 390px;

//         height: 104px;
//         min-height: 104px;
//       }
//     }
//   `;


//   return (
//     <div className="fire-view">
//       <style>
//         {fireStyles}
//       </style>


//       <div
//         className="fire-network"
//         style={{
//           "--fire-count": fireCount,
//           "--fire-network-width": `${fireNetworkWidth}px`,
//         }}
//       >

//         {/* ===============================================
//             FIRE PROTECTION PARENT
//         ================================================ */}

//         <div className="fire-parent">

//           <Flame
//             size={26}
//             strokeWidth={1.8}
//           />


//           <span>
//             LIFE SAFETY
//           </span>


//           <h2>
//             FIRE PROTECTION SYSTEM
//           </h2>


//           <p>
//             DETECTION / PROTECTION / PUMP
//           </p>

//         </div>


//         {/* ===============================================
//             PARENT → MAIN FIRE BUS
//         ================================================ */}

//         {fireCount > 0 && (
//           <div className="fire-main-stem" />
//         )}


//         {/* ===============================================
//             HORIZONTAL BUS + THREE BRANCHES
//         ================================================ */}

//         {fireCount > 0 && (
//         <div className="fire-distribution">

//           <div
//             className={`fire-bus ${
//               fireCount === 1
//                 ? "fire-bus--single"
//                 : ""
//             }`}
//           />


//           <div className="fire-lines">

//             {equipment.map(
//               (item) => (

//                 <div
//                   className="fire-line"
//                   key={`line-${item.id}`}
//                 />

//               )
//             )}

//           </div>

//         </div>
//         )}


//         {/* ===============================================
//             FIRE ALARMS / FIRE FIGHTING / FIRE PUMP
//         ================================================ */}

//         {fireCount > 0 && (
//         <div className="fire-grid">

//           {equipment.map(
//             (item) => (

//               <div
//                 className="fire-branch"
//                 key={item.id}
//               >

//                 <EquipmentCard
//                   equipment={item}
//                   onOpen={
//                     onOpenEquipment
//                   }
//                 />

//               </div>

//             )
//           )}

//         </div>
//         )}

//       </div>

//     </div>
//   );
// }

// /* =========================================================
//    OPTIONAL UPS VIEW
//    UPS is not a top-level dashboard category, but this remains
//    isolated in case an existing config still routes to it.
// ========================================================= */

// function UPSView({ topology, onOpenEquipment }) {
//   const upsStyles = `
//     .ups-view {
//       --wire:#19b8cf;
//       width:100%;min-width:760px;min-height:100%;margin:0 auto;
//       display:flex;flex-direction:column;justify-content:center;
//     }
//     .ups-parent {
//       width:430px;min-height:100px;margin:0 auto;
//       display:flex;flex-direction:column;align-items:center;justify-content:center;
//       border:2px solid #2378b7;border-radius:7px;color:#fff;background:#102f6e;
//     }
//     .ups-parent h2 { margin:5px 0;font-size:18px; }
//     .ups-stem { width:2px;height:34px;margin:0 auto;background:var(--wire); }
//     .ups-grid {
//       position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));
//       gap:18px;padding-top:34px;
//     }
//     .ups-bus {
//       position:absolute;top:0;left:calc(50% / 4);right:calc(50% / 4);
//       height:2px;background:var(--wire);
//     }
//     .ups-branch { position:relative; }
//     .ups-branch::before {
//       content:"";position:absolute;left:50%;bottom:100%;width:2px;height:34px;
//       transform:translateX(-50%);background:var(--wire);
//     }
//     .ups-view .eq-card:hover { transform:none; }
//   `;

//   return (
//     <div className="ups-view">
//       <style>{upsStyles}</style>
//       <div className="ups-parent">
//         <BatteryCharging size={26} />
//         <h2>UPS SYSTEM</h2>
//         <span>UNINTERRUPTIBLE POWER SUPPLY</span>
//       </div>
//       <div className="ups-stem" />
//       <div className="ups-grid">
//         <div className="ups-bus" />
//         {topology.equipment.map((item) => (
//           <div className="ups-branch" key={item.id}>
//             <EquipmentCard equipment={item} onOpen={onOpenEquipment} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    RENDERER
//    Only routing lives here. No shared topology renderer.
// ========================================================= */

// function FlowRenderer({ topology, onOpenEquipment }) {
//   switch (topology.id) {
//     case "source":
//       return <SourceView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "feeder":
//       return <FeederView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "transformer":
//       return <TransformerView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "lt-kiosk":
//       return <LTKioskView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "busduct":
//       return <BusductView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "pcc":
//       return <PCCView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "raising-main":
//       return <RaisingMainView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "wing":
//       return <WingView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "dg":
//       return <DGView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "hvac":
//       return <HVACView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "wtp":
//       return <WaterView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "fire":
//       return <FireView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     case "ups":
//       return <UPSView topology={topology} onOpenEquipment={onOpenEquipment} />;
//     default:
//       return null;
//   }
// }

// /* =========================================================
//    PAGE
// ========================================================= */

// function FlowDetail({
//   project,
//   flow,
//   onBack,
//   onOpenEquipment,
// }) {
//   const topology = getProjectTopology(
//     project,
//     flow?.id
//   );

//   if (!topology) {
//     return (
//       <main className="fd-shell">
//         <style>{pageStyles}</style>
//         <div className="fd-empty">
//           <Activity size={38} />
//           <h2>Flow configuration unavailable</h2>
//           <button type="button" onClick={onBack}>Back</button>
//         </div>
//       </main>
//     );
//   }

//   const equipment = getTopologyEquipment(topology);
//   const FlowIcon = flow?.icon || Activity;

//   return (
//     <main className="fd-shell">
//       <style>{pageStyles}</style>

//       <section className="fd-dashboard">
//         <header className="fd-header">
//           <div className="fd-header__left">
//             <button type="button" className="fd-back" onClick={onBack}>
//               <ArrowLeft size={17} /> Overview
//             </button>

//             <span className="fd-main-icon"><FlowIcon size={23} /></span>

//             <div>
//               <span className="fd-eyebrow">BMS LIVE FLOW</span>
//               <h1>{topology.title}</h1>
//               <p>{topology.subtitle}</p>
//             </div>
//           </div>

//           <div className="fd-header__right">
//             <span className="fd-live"><i />DEMO LIVE</span>
//             <span className="fd-comm"><Wifi size={15} />Connected</span>
//           </div>
//         </header>

//         <section className="fd-workspace">
//           <header className="workspace-title">
//             <div>
//               <span>INTERNAL EQUIPMENT</span>
//               <h2>Operational Flow</h2>
//             </div>
//             <div className="workspace-legend">
//               <span><i className="dot-on" />Active</span>
//               <span><i className="dot-standby" />Standby</span>
//               <span><i className="dot-fault" />Fault</span>
//             </div>
//           </header>

//           <div className="fd-content">
//             <FlowRenderer topology={topology} onOpenEquipment={onOpenEquipment} />
//           </div>
//         </section>

//         <footer className="fd-footer">
//           Demo telemetry • Monitoring only • Backend-ready equipment IDs
//         </footer>
//       </section>
//     </main>
//   );
// }

// /* =========================================================
//    GLOBAL PAGE + SHARED CARD CSS ONLY
//    IMPORTANT:
//    No Source/Feeder/Transformer/LT Kiosk/Busduct/PCC/etc.
//    topology geometry is defined here.
// ========================================================= */

// const pageStyles = `
// *,
// *::before,
// *::after { box-sizing:border-box; }

// .fd-shell {
//   width:100%;
//   height:100%;
//   min-height:0;
//   padding:0;
//   overflow:hidden;
//   color:#18283a;
//   background:transparent;
// }

// .fd-dashboard {
//   width:100%;
//   max-width:none;
//   height:100%;
//   min-height:0;
//   margin:0;
//   display:grid;
//   grid-template-rows:64px minmax(0,1fr) 14px;
//   gap:4px;
// }

// .fd-header {
//   min-width:0;
//   padding:8px 14px;
//   display:flex;
//   align-items:center;
//   justify-content:space-between;
//   gap:18px;
//   border:1px solid #1e3b54;
//   border-radius:9px;
//   background:linear-gradient(120deg,#112b42 0%,#0b2033 52%,#102a40 100%);
// }

// .fd-header__left,
// .fd-header__right { display:flex;align-items:center; }

// .fd-header__left { min-width:0;gap:11px; }
// .fd-header__right { flex-shrink:0;gap:8px; }

// .fd-back {
//   height:36px;padding:0 12px;display:inline-flex;align-items:center;gap:7px;
//   border:1px solid #45647d;border-radius:6px;color:#e6eef5;background:#193850;
//   cursor:pointer;font-size:10px;font-weight:700;
// }

// .fd-main-icon {
//   width:40px;height:40px;flex-shrink:0;display:grid;place-items:center;
//   border:1px solid #477da4;border-radius:7px;color:#fff;background:#205475;
// }

// .fd-eyebrow {
//   display:block;margin-bottom:2px;color:#7f9bb1;font-size:8px;font-weight:800;
//   letter-spacing:.14em;
// }

// .fd-header h1 { margin:0;color:#fff;font-size:clamp(18px,1.35vw,24px);line-height:1.05; }
// .fd-header p { margin:3px 0 0;color:#9bb0c0;font-size:9px; }

// .fd-live,
// .fd-comm {
//   height:32px;padding:0 11px;display:inline-flex;align-items:center;gap:7px;
//   border-radius:6px;font-size:8px;font-weight:800;letter-spacing:.04em;
// }

// .fd-live { color:#9de8c6;border:1px solid #32765f;background:#123e32; }
// .fd-live i { width:7px;height:7px;border-radius:50%;background:#30d79b; }
// .fd-comm { color:#d0dce6;border:1px solid #405f77;background:#17344c; }




// .fd-workspace {
//   width:100%;
//   min-width:0;
//   min-height:0;
//   display:grid;
//   grid-template-rows:46px minmax(0,1fr);
//   overflow:hidden;
//   border:0;
//   border-radius:0;
//   background:transparent;
// }

// .workspace-title {
//   width:100%;
//   padding:6px 18px;
//   display:flex;
//   align-items:center;
//   justify-content:space-between;
//   border:0;
//   border-bottom:1px solid rgba(117,137,153,.20);
//   background:transparent;
// }

// .workspace-title > div:first-child span {
//   display:block;color:#82919e;font-size:7px;font-weight:800;letter-spacing:.14em;
// }

// .workspace-title h2 { margin:2px 0 0;color:#1e384d;font-size:16px; }
// .workspace-legend { display:flex;gap:14px; }
// .workspace-legend span {
//   display:inline-flex;align-items:center;gap:5px;color:#687986;font-size:8px;font-weight:650;
// }
// .workspace-legend i { width:7px;height:7px;border-radius:50%; }
// .dot-on { background:#22bf87; }
// .dot-standby { background:#dda33d; }
// .dot-fault { background:#dd4b5d; }

// .fd-content {
//   width:100%;
//   min-width:0;
//   min-height:0;
//   padding:10px 18px 6px;
//   overflow:auto;
//   background:transparent;
// }

// /* SHARED EQUIPMENT CARD */
// .eq-card {
//   width:100%;min-width:0;min-height:132px;padding:12px 13px 10px;position:relative;
//   display:flex;flex-direction:column;overflow:hidden;text-align:left;
//   border:1px solid #2c75a7;border-radius:8px;color:#fff;
//   background:linear-gradient(145deg,#173f75 0%,#103264 52%,#0c2855 100%);
//   box-shadow:none;cursor:pointer;transition:border-color .16s ease,box-shadow .16s ease;
// }

// .eq-card::before {
//   content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:#2bd197;
// }

// .eq-card:hover,
// .eq-card:focus-visible {
//   border-color:#59b8d3;
//   box-shadow:0 8px 20px rgba(13,47,72,.13);
//   outline:none;
// }

// .eq-card--alarm {
//   border-color:#a54e5d;
//   background:linear-gradient(145deg,#6b3746,#4b2732);
// }
// .eq-card--alarm::before { background:#ef6575; }

// .eq-card__top { display:flex;align-items:center;justify-content:space-between;gap:8px; }
// .eq-card__icon {
//   width:35px;height:35px;display:grid;place-items:center;
//   border:1px solid rgba(255,255,255,.15);border-radius:6px;color:#b9dcf4;background:#12345f;
// }

// .eq-status {
//   min-height:23px;padding:0 8px;display:inline-flex;align-items:center;gap:5px;
//   border-radius:4px;font-size:8px;font-weight:800;
// }
// .eq-status i { width:6px;height:6px;border-radius:50%; }
// .eq-status--on { color:#91e8c3;background:#124534; }
// .eq-status--on i { background:#2dd69a; }
// .eq-status--standby { color:#f1cd7c;background:#4b3a1d; }
// .eq-status--standby i { background:#dfa63d; }
// .eq-status--off { color:#d0d9e0;background:#334958; }
// .eq-status--off i { background:#8a9aa7; }

// .eq-card__name { margin:12px 0 8px; }
// .eq-card__name h3 {
//   margin:0;overflow:hidden;color:#fff;font-size:15px;font-weight:750;
//   text-overflow:ellipsis;white-space:nowrap;
// }
// .eq-card__name p {
//   min-height:12px;margin:3px 0 0;overflow:hidden;color:#a9c5d8;font-size:8px;
//   text-overflow:ellipsis;white-space:nowrap;
// }

// .eq-card__bottom {
//   min-height:24px;margin-top:auto;padding-top:7px;display:flex;align-items:center;
//   justify-content:space-between;gap:6px;border-top:1px solid rgba(255,255,255,.10);
//   color:#88e1bc;font-size:7px;
// }
// .eq-card__bottom > span { display:inline-flex;align-items:center;gap:4px; }
// .eq-card__bottom i { width:6px;height:6px;border-radius:50%;background:#2bd197; }
// .eq-card__bottom strong { color:#c5d3dd;font-size:7px; }

// .eq-card__hover {
//   position:absolute;inset:0;z-index:5;padding:14px;display:flex;flex-direction:column;
//   justify-content:center;gap:10px;opacity:0;visibility:hidden;transform:translateY(5px);
//   color:#fff;background:linear-gradient(145deg,rgba(9,34,66,.985),rgba(8,45,75,.985));
//   transition:opacity .16s ease,transform .16s ease,visibility .16s ease;pointer-events:none;
// }
// .eq-card:hover .eq-card__hover,
// .eq-card:focus-visible .eq-card__hover {
//   opacity:1;visibility:visible;transform:translateY(0);
// }
// .eq-card__hover-title { color:#79d9ec;font-size:7px;font-weight:800;letter-spacing:.16em; }
// .eq-card__hover-grid {
//   display:grid;grid-template-columns:repeat(3,minmax(0,1fr));
//   border-top:1px solid rgba(121,217,236,.22);
//   border-bottom:1px solid rgba(121,217,236,.22);
// }
// .eq-card__hover-grid > div { min-width:0;padding:9px 7px; }
// .eq-card__hover-grid > div + div { border-left:1px solid rgba(121,217,236,.18); }
// .eq-card__hover-grid span { display:block;margin-bottom:3px;color:#91aabd;font-size:7px; }
// .eq-card__hover-grid strong {
//   display:block;overflow:hidden;color:#fff;font-size:11px;font-weight:650;
//   text-overflow:ellipsis;white-space:nowrap;
// }
// .eq-card__hover small { color:#a8bac8;font-size:7px; }

// /* SHARED SIMPLE CARD */
// .simple-card {
//   width:100%;min-height:132px;padding:16px 18px;position:relative;display:flex;
//   flex-direction:column;align-items:center;justify-content:center;overflow:hidden;
//   border:2px solid #1975bd;border-radius:7px;color:#fff;text-align:center;
//   background:#102f6e;box-shadow:none;
// }
// button.simple-card { cursor:pointer; }
// .simple-card svg { margin:5px 0;color:#a5d4f2; }
// .simple-card__eyebrow { color:#9dc9eb;font-size:8px;font-weight:800;letter-spacing:.17em; }
// .simple-card h3 { margin:4px 0;color:#fff;font-size:18px;font-weight:800; }
// .simple-card p { margin:2px 0 8px;color:#c1d2e3;font-size:10px;font-weight:650; }
// .simple-card > strong {
//   display:inline-flex;align-items:center;gap:6px;color:#37dda7;font-size:8px;
// }
// .simple-card > strong i { width:8px;height:8px;border-radius:50%;background:#2bd197; }

// .simple-card__hover {
//   position:absolute;inset:0;z-index:5;padding:14px;display:flex;flex-direction:column;
//   justify-content:center;gap:9px;opacity:0;visibility:hidden;transform:translateY(5px);
//   color:#fff;background:linear-gradient(145deg,rgba(9,34,66,.985),rgba(8,45,75,.985));
//   transition:opacity .16s ease,transform .16s ease,visibility .16s ease;pointer-events:none;
// }
// .simple-card:hover .simple-card__hover,
// .simple-card:focus-visible .simple-card__hover {
//   opacity:1;visibility:visible;transform:translateY(0);
// }
// .simple-card__hover > span { color:#79d9ec;font-size:7px;font-weight:800;letter-spacing:.15em; }
// .simple-card__hover > div {
//   display:grid;grid-template-columns:repeat(3,minmax(0,1fr));
//   border-top:1px solid rgba(121,217,236,.22);
//   border-bottom:1px solid rgba(121,217,236,.22);
// }
// .simple-card__hover small { min-width:0;padding:8px 5px;color:#91aabd;font-size:7px; }
// .simple-card__hover small + small { border-left:1px solid rgba(121,217,236,.18); }
// .simple-card__hover b {
//   display:block;margin-top:3px;overflow:hidden;color:#fff;font-size:10px;
//   text-overflow:ellipsis;white-space:nowrap;
// }
// .simple-card__hover em { color:#a8bac8;font-size:7px;font-style:normal; }

// .fd-footer { padding:0 4px;display:flex;align-items:center;color:#6f8190;font-size:7px;white-space:nowrap; }

// .fd-empty {
//   min-height:100vh;display:grid;place-items:center;align-content:center;gap:12px;
// }
// .fd-empty button {
//   padding:9px 14px;border:0;border-radius:6px;color:#fff;background:#234f73;
// }

// /* Global dark theme only. Individual topology colors remain inside each view. */
// html[data-theme="dark"] .fd-shell {
//   color:var(--app-text,#f4f8fc);
//   background:var(--app-bg,#07111f);
// }
// html[data-theme="dark"] .fd-workspace,
// html[data-theme="dark"] .fd-content,
// html[data-theme="dark"] .workspace-title {
//   border-color:var(--app-border,#203651);
//   background-color:var(--app-surface,#0b1728);
// }
// html[data-theme="dark"] .workspace-title h2 { color:var(--app-text,#f4f8fc); }
// html[data-theme="dark"] .workspace-title span,
// html[data-theme="dark"] .workspace-legend span { color:var(--app-muted,#8294aa); }

// @media(max-width:900px) {
//   .fd-shell { height:auto;min-height:100%;overflow:visible; }
//   .fd-dashboard { height:auto;min-height:100%;display:flex;flex-direction:column; }
//   .fd-header { flex-wrap:wrap; }
//   .fd-workspace { overflow:visible; }
//   .fd-content { overflow-x:auto;overflow-y:visible; }
// }

// @media(max-width:600px) {
//   .fd-shell { padding:6px; }
//   .fd-header { align-items:flex-start;flex-direction:column; }
//   .fd-header__left { width:100%;flex-wrap:wrap; }
//   .fd-header__right { width:100%;justify-content:flex-end; }
//   .workspace-title { align-items:flex-start;flex-direction:column;gap:6px; }
// }
// `;

// export default FlowDetail;















import { useLayoutEffect, useRef, useState } from "react";

import {
  ArrowLeft,
  Activity,
  RadioTower,
  GitBranch,
  Zap,
  Network,
  Wifi,
  Gauge,
  Cpu,
  BatteryCharging,
  Bolt,
  Building2,
  CirclePower,
  Fan,
  Droplets,
  Flame,
  PanelsTopLeft,
  ArrowDown,
  ArrowUp,
  ArrowLeftRight,
} from "lucide-react";
import {
  demoTelemetry,
  getTopologyEquipment,
  getProjectTopology,
} from "../data/flowConfigs";

/* =========================================================
   SHARED HELPERS ONLY
   These are presentation/data helpers, NOT topology layouts.
========================================================= */

function getIcon(type) {
  switch (type) {
    case "incomer": return RadioTower;
    case "meter": return Gauge;
    case "feeder": return GitBranch;
    case "transformer": return Zap;
    case "kiosk": return PanelsTopLeft;
    case "busbar":
    case "busduct": return Network;
    case "pcc-circuit":
    case "coupler": return Cpu;
    case "ups": return BatteryCharging;
    case "raising-main": return Bolt;
    case "wing": return Building2;
    case "dg": return CirclePower;
    case "hvac": return Fan;
    case "water-main":
    case "stp":
    case "wtp":
    case "tank": return Droplets;
    case "fire-alarm":
    case "fire-fighting":
    case "fire-pump": return Flame;
    default: return Activity;
  }
}

// function getPreview(equipment, data) {
//   if (!data) return [];

//   switch (equipment.type) {
//     case "transformer":
//       return [
//         ["Oil", `${data.oilTemp}°C`],
//         ["Winding", `${data.windingTemp}°C`],
//         ["Load", `${data.load}%`],
//       ];
//     case "busduct":
//       return [
//         ["Temp", `${data.temperature}°C`],
//         ["Vibration", `${data.vibration} mm/s`],
//         ["Health", data.health],
//       ];
//     case "ups":
//       return [
//         ["Capacity", data.capacity],
//         ["Load", `${data.load}%`],
//         ["Battery", `${data.battery}%`],
//       ];
//     case "water-main":
//       return [
//         ["Flow", `${data.flowRate} m³/h`],
//         ["Water", `${data.totalWater}%`],
//         ["Pressure", `${data.pressure} bar`],
//       ];
//     case "stp":
//     case "wtp":
//       return [
//         ["Inlet", `${data.inletFlow} m³/h`],
//         ["Outlet", `${data.outletFlow} m³/h`],
//         ["pH", data.ph],
//       ];
//     case "tank":
//       return [
//         ["Level", `${data.level}%`],
//         ["Volume", `${data.volume} m³`],
//         ["Outlet", `${data.outletFlow} m³/h`],
//       ];
//     case "fire-alarm":
//       return [
//         ["Smoke", data.smokeDetectors],
//         ["Heat", data.heatDetectors],
//         ["Alarms", data.activeAlarms],
//       ];
//     case "fire-fighting":
//       return [
//         ["Pressure", `${data.pressure} bar`],
//         ["Hydrant", data.hydrantNetwork],
//         ["Valve", data.mainValve],
//       ];
//     case "fire-pump":
//       return [
//         ["Voltage", `${data.voltage} V`],
//         ["Pressure", `${data.pressure} bar`],
//         ["Mode", data.mode],
//       ];
//     default:
//       return [
//         ["kWh", data.kWh ?? "--"],
//         [
//           "Voltage",
//           data.voltage
//             ? data.voltage === 33
//               ? "33 kV"
//               : `${data.voltage} V`
//             : "--",
//         ],
//         ["PF", data.powerFactor ?? "--"],
//       ];
//   }
// }

function getPreview(equipment, data) {
  if (!equipment || !data) return [];

  const value = (v, suffix = "") =>
    v !== undefined && v !== null && v !== ""
      ? `${v}${suffix}`
      : "--";

  switch (equipment.type) {

    /* =====================================================
       SOURCE / INCOMER
       Standard electrical monitoring
    ===================================================== */

    case "incomer":
      return [
        ["Voltage", data.voltage === 33 ? "33 kV" : value(data.voltage, " V")],
        ["PF", value(data.powerFactor)],
        ["Amps", value(data.current ?? data.amps, " A")],
        ["kVAh", value(data.kVAh)],
        ["kWh", value(data.kWh)],
      ];


    /* =====================================================
       METER
    ===================================================== */

    case "meter":
      return [
        ["Voltage", data.voltage === 33 ? "33 kV" : value(data.voltage, " V")],
        ["PF", value(data.powerFactor)],
        ["Amps", value(data.current ?? data.amps, " A")],
        ["kVAh", value(data.kVAh)],
        ["kWh", value(data.kWh)],
      ];


    /* =====================================================
       FEEDER
    ===================================================== */

    case "feeder":
      return [
        ["Voltage", data.voltage === 33 ? "33 kV" : value(data.voltage, " V")],
        ["PF", value(data.powerFactor)],
        ["Amps", value(data.current ?? data.amps, " A")],
        ["kVAh", value(data.kVAh)],
        ["kWh", value(data.kWh)],
      ];


    /* =====================================================
       TRANSFORMER
    ===================================================== */

    case "transformer":
      return [
        ["Oil Temp", value(data.oilTemp, "°C")],
        ["Winding Temp", value(data.windingTemp, "°C")],
        ["Load", value(data.load, "%")],
        ["Relay", value(data.buchholzRelay ?? data.relay)],
        ["Status", value(data.status)],
      ];


    /* =====================================================
       LT KIOSK
    ===================================================== */

    case "kiosk":
      return [
        ["Voltage", value(data.voltage, " V")],
        ["PF", value(data.powerFactor)],
        ["Amps", value(data.current ?? data.amps, " A")],
        ["kVAh", value(data.kVAh)],
        ["kWh", value(data.kWh)],
      ];


    /* =====================================================
       BUSDUCT / BUSBAR
    ===================================================== */

    case "busduct":
    case "busbar":
      return [
        ["Temperature", value(data.temperature, "°C")],
        ["Vibration", value(data.vibration, " mm/s")],
        ["Load", value(data.load, "%")],
        ["Health", value(data.health)],
        ["Status", value(data.status)],
      ];


    /* =====================================================
       PCC
    ===================================================== */

    case "pcc-circuit":
    case "coupler":
      return [
        ["Voltage", value(data.voltage, " V")],
        ["PF", value(data.powerFactor)],
        ["Amps", value(data.current ?? data.amps, " A")],
        ["kVAh", value(data.kVAh)],
        ["kWh", value(data.kWh)],
      ];


    /* =====================================================
       RAISING MAIN
    ===================================================== */

    case "raising-main":
      return [
        ["Voltage", value(data.voltage, " V")],
        ["PF", value(data.powerFactor)],
        ["Amps", value(data.current ?? data.amps, " A")],
        ["kVAh", value(data.kVAh)],
        ["kWh", value(data.kWh)],
      ];


    /* =====================================================
       WING
    ===================================================== */

    case "wing":
      return [
        ["Voltage", value(data.voltage, " V")],
        ["PF", value(data.powerFactor)],
        ["Amps", value(data.current ?? data.amps, " A")],
        ["kVAh", value(data.kVAh)],
        ["kWh", value(data.kWh)],
      ];


    /* =====================================================
       DIESEL GENERATOR
    ===================================================== */

    case "dg":
      return [
        ["Voltage", value(data.voltage, " V")],
        ["Amps", value(data.current ?? data.amps, " A")],
        ["PF", value(data.powerFactor)],
        ["Load", value(data.load, "%")],
        ["Status", value(data.status)],
      ];


    /* =====================================================
       UPS
    ===================================================== */

    case "ups":
      return [
        ["Capacity", value(data.capacity)],
        ["Input V", value(data.inputVoltage, " V")],
        ["Output V", value(data.outputVoltage, " V")],
        ["Load", value(data.load, "%")],
        ["Battery", value(data.battery, "%")],
        ["Input Hz", value(data.inputFrequency, " Hz")],
        ["Output Hz", value(data.outputFrequency, " Hz")],
        ["Battery V", value(data.batteryVoltage, " V")],
        ["Backup", value(data.backupTime, " min")],
        ["Mode", value(data.mode)],
        ["Status", value(data.status)],
      ];


    /* =====================================================
       WATER MAIN
    ===================================================== */

    case "water-main":
      return [
        ["Flow", value(data.flowRate, " m³/h")],
        ["Water", value(data.totalWater, "%")],
        ["Pressure", value(data.pressure, " bar")],
        ["Health", value(data.health)],
        ["Status", value(data.status)],
      ];


    /* =====================================================
       STP / WTP
    ===================================================== */

    case "stp":
    case "wtp":
      return [
        ["Inlet Flow", value(data.inletFlow, " m³/h")],
        ["Outlet Flow", value(data.outletFlow, " m³/h")],
        ["pH", value(data.ph)],
        ["Turbidity", value(data.turbidity, " NTU")],
        ["Status", value(data.status)],
      ];


    /* =====================================================
       WATER TANK
    ===================================================== */

    case "tank":
      return [
        ["Level", value(data.level, "%")],
        ["Volume", value(data.volume, " m³")],
        ["Inlet Flow", value(data.inletFlow, " m³/h")],
        ["Outlet Flow", value(data.outletFlow, " m³/h")],
        ["Status", value(data.status)],
      ];


    /* =====================================================
       FIRE ALARM
    ===================================================== */

    case "fire-alarm":
      return [
        ["Smoke", value(data.smokeDetectors)],
        ["Heat", value(data.heatDetectors)],
        ["Active Alarms", value(data.activeAlarms)],
        ["Health", value(data.health)],
        ["Status", value(data.status)],
      ];


    /* =====================================================
       FIRE FIGHTING
    ===================================================== */

    case "fire-fighting":
      return [
        ["Pressure", value(data.pressure, " bar")],
        ["Hydrant", value(data.hydrantNetwork)],
        ["Main Valve", value(data.mainValve)],
        ["Health", value(data.health)],
        ["Status", value(data.status)],
      ];


    /* =====================================================
       FIRE PUMP
    ===================================================== */

    case "fire-pump":
      return [
        ["Voltage", value(data.voltage, " V")],
        ["Pressure", value(data.pressure, " bar")],
        ["Mode", value(data.mode)],
        ["Health", value(data.health)],
        ["Status", value(data.status)],
      ];


    /* =====================================================
       DEFAULT ELECTRICAL EQUIPMENT
    ===================================================== */

    default:
      return [
        ["Voltage", value(data.voltage, " V")],
        ["PF", value(data.powerFactor)],
        ["Amps", value(data.current ?? data.amps, " A")],
        ["kVAh", value(data.kVAh)],
        ["kWh", value(data.kWh)],
      ];
  }
}




function EquipmentCard({ equipment, onOpen }) {
  if (!equipment) return null;

  const Icon = getIcon(equipment.type);
  const data = demoTelemetry[equipment.id];
  const alarm = data?.fault || data?.trip || data?.warning;
  const status = data?.status || "OFFLINE";
  const preview = getPreview(equipment, data);

  return (
    <button
      type="button"
      className={`eq-card ${alarm ? "eq-card--alarm" : ""}`}
      onClick={() => onOpen?.({ ...equipment, telemetry: data })}
    >
      <div className="eq-card__top">
        <span className="eq-card__icon"><Icon size={19} /></span>
        <span
          className={`eq-status ${
            status === "ON"
              ? "eq-status--on"
              : status === "STANDBY"
              ? "eq-status--standby"
              : "eq-status--off"
          }`}
        >
          <i />{status}
        </span>
      </div>

      <div className="eq-card__name">
        <h3>{equipment.name}</h3>
        <p>{equipment.label}</p>
      </div>

      {preview.length > 0 && (
        <div className="eq-card__hover" aria-hidden="true">
          <span className="eq-card__hover-title">LIVE READINGS</span>
          <div className="eq-card__hover-grid">
            {preview.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <small>Click to open operational view</small>
        </div>
      )}

      <div className="eq-card__bottom">
        <span><i />{data?.health || "UNKNOWN"}</span>
        <strong>View Operation →</strong>
      </div>
    </button>
  );
}

function SimpleFlowCard({
  title,
  subtitle,
  eyebrow,
  icon: Icon,
  onClick,
  live = true,
  equipment,
}) {
  const data = equipment ? demoTelemetry[equipment.id] : null;
  const preview = equipment ? getPreview(equipment, data) : [];

  const content = (
    <>
      {eyebrow && <span className="simple-card__eyebrow">{eyebrow}</span>}
      {Icon && <Icon size={22} />}
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
      {live && <strong><i /> LIVE</strong>}

      {preview.length > 0 && (
        <div className="simple-card__hover" aria-hidden="true">
          <span>LIVE READINGS</span>
          <div>
            {preview.map(([label, value]) => (
              <small key={label}>{label}<b>{value}</b></small>
            ))}
          </div>
          <em>Click to open operational view</em>
        </div>
      )}
    </>
  );

  return onClick ? (
    <button type="button" className="simple-card" onClick={onClick}>{content}</button>
  ) : (
    <div className="simple-card">{content}</div>
  );
}

/* =========================================================
   1. SOURCE VIEW
   Independent JSX + independent topology CSS.
   Correct card-level flow: INC1 ─ OUT ─ INC2
   Source also branches vertically to INC1 and INC2.
   OUT drops vertically to Meter.
========================================================= */

function SourceView({ topology, onOpenEquipment }) {
  const configuration = topology?.configuration || {};
  const voltageLevel =
    configuration.voltageLevel ||
    topology?.voltageLevel ||
    "33kV";

  const equipment = Array.isArray(topology?.equipment)
    ? topology.equipment
    : [];

  const incomingFeeders = equipment.filter(
    (item) =>
      item.role === "incoming" ||
      item.type === "incomer"
  );

  const outgoingFeeders = equipment.filter(
    (item) =>
      item.role === "outgoing" ||
      item.type === "busbar"
  );

  const meters = equipment.filter(
    (item) =>
      item.role === "meter" ||
      item.type === "meter"
  );

  const incomingCount = incomingFeeders.length;
  const outgoingCount = outgoingFeeders.length;
  const meterCount = meters.length;

  const maxCount = Math.max(
    incomingCount,
    outgoingCount,
    meterCount,
    1
  );

  const cardWidth = 205;
  const gap = 44;

  const networkWidth = Math.max(
    760,
    maxCount * cardWidth +
      Math.max(0, maxCount - 1) * gap
  );

  const canvasRef = useRef(null);
  const sourceRef = useRef(null);
  const incomingRefs = useRef({});
  const outgoingRefs = useRef({});
  const meterRefs = useRef({});

  const [geometry, setGeometry] = useState({
    width: 0,
    height: 0,
    paths: [],
  });

  const setEquipmentRef = (group, id) => (node) => {
    const target =
      group === "incoming"
        ? incomingRefs.current
        : group === "outgoing"
        ? outgoingRefs.current
        : meterRefs.current;

    if (node) target[id] = node;
    else delete target[id];
  };

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const source = sourceRef.current;

    if (!canvas || !source) return undefined;

    const measure = () => {
      const canvasRect = canvas.getBoundingClientRect();

      const point = (node, edge) => {
        if (!node) return null;
        const rect = node.getBoundingClientRect();

        return {
          x:
            rect.left -
            canvasRect.left +
            rect.width / 2,
          y:
            edge === "top"
              ? rect.top - canvasRect.top
              : rect.bottom - canvasRect.top,
        };
      };

      const groupPoints = (items, refs, edge) =>
        items
          .map((item) => point(refs.current[item.id], edge))
          .filter(Boolean);

      const sourceBottom = point(source, "bottom");
      const incomingTop = groupPoints(
        incomingFeeders,
        incomingRefs,
        "top"
      );
      const incomingBottom = groupPoints(
        incomingFeeders,
        incomingRefs,
        "bottom"
      );
      const outgoingTop = groupPoints(
        outgoingFeeders,
        outgoingRefs,
        "top"
      );
      const outgoingBottom = groupPoints(
        outgoingFeeders,
        outgoingRefs,
        "bottom"
      );
      const meterTop = groupPoints(
        meters,
        meterRefs,
        "top"
      );

      const paths = [];

      const addDistribution = (
        from,
        targets,
        preferredBusY
      ) => {
        if (!from || !targets.length) return;

        if (targets.length === 1) {
          paths.push(
            `M ${from.x} ${from.y} V ${targets[0].y}`
          );
          return;
        }

        const minX = Math.min(...targets.map((p) => p.x));
        const maxX = Math.max(...targets.map((p) => p.x));
        const busY = preferredBusY;

        paths.push(`M ${from.x} ${from.y} V ${busY}`);
        paths.push(`M ${minX} ${busY} H ${maxX}`);

        targets.forEach((target) => {
          paths.push(
            `M ${target.x} ${busY} V ${target.y}`
          );
        });
      };

      const addCollectionToDistribution = (
        sources,
        targets
      ) => {
        if (!sources.length || !targets.length) return;

        const sourceBottomY = Math.max(
          ...sources.map((p) => p.y)
        );
        const targetTopY = Math.min(
          ...targets.map((p) => p.y)
        );

        const corridor = targetTopY - sourceBottomY;

        const collectY =
          sourceBottomY +
          Math.max(18, corridor * 0.30);

        const distributeY =
          sourceBottomY +
          Math.max(38, corridor * 0.70);

        const sourceMinX = Math.min(
          ...sources.map((p) => p.x)
        );
        const sourceMaxX = Math.max(
          ...sources.map((p) => p.x)
        );

        const targetMinX = Math.min(
          ...targets.map((p) => p.x)
        );
        const targetMaxX = Math.max(
          ...targets.map((p) => p.x)
        );

        const sourceCenterX =
          (sourceMinX + sourceMaxX) / 2;
        const targetCenterX =
          (targetMinX + targetMaxX) / 2;

        sources.forEach((sourcePoint) => {
          paths.push(
            `M ${sourcePoint.x} ${sourcePoint.y} V ${collectY}`
          );
        });

        if (sources.length > 1) {
          paths.push(
            `M ${sourceMinX} ${collectY} H ${sourceMaxX}`
          );
        }

        paths.push(
          `M ${sourceCenterX} ${collectY} V ${distributeY}`
        );

        if (sourceCenterX !== targetCenterX) {
          paths.push(
            `M ${sourceCenterX} ${distributeY} H ${targetCenterX}`
          );
        }

        if (targets.length > 1) {
          paths.push(
            `M ${targetMinX} ${distributeY} H ${targetMaxX}`
          );
        }

        targets.forEach((target) => {
          paths.push(
            `M ${target.x} ${distributeY} V ${target.y}`
          );
        });
      };

      /*
        SOURCE -> INCOMING

        The first bus is always physically between the Source
        card and the incoming-card top edges. Therefore every
        conductor touches the real card boundary and there is
        no CSS pseudo-line/gap at the edge.
      */
      if (sourceBottom && incomingTop.length) {
        const firstIncomingY = Math.min(
          ...incomingTop.map((p) => p.y)
        );

        const sourceBusY =
          sourceBottom.y +
          (firstIncomingY - sourceBottom.y) * 0.50;

        addDistribution(
          sourceBottom,
          incomingTop,
          sourceBusY
        );
      }

      /*
        INCOMING -> OUTGOING
        Collect all incoming bottoms, then distribute to all
        configured outgoing tops inside the free corridor.
      */
      addCollectionToDistribution(
        incomingBottom,
        outgoingTop
      );

      /*
        OUTGOING -> METER
        Same measured-card-boundary rule.
      */
      addCollectionToDistribution(
        outgoingBottom,
        meterTop
      );

      setGeometry({
        width: Math.max(
          canvas.scrollWidth,
          canvas.clientWidth
        ),
        height: Math.max(
          canvas.scrollHeight,
          canvas.clientHeight
        ),
        paths,
      });
    };

    let frame = requestAnimationFrame(measure);

    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    });

    observer.observe(canvas);
    observer.observe(source);

    [
      ...Object.values(incomingRefs.current),
      ...Object.values(outgoingRefs.current),
      ...Object.values(meterRefs.current),
    ].forEach((node) => {
      if (node) observer.observe(node);
    });

    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [
    topology,
    incomingCount,
    outgoingCount,
    meterCount,
    networkWidth,
  ]);

  const sourceStyles = `
    .source-view {
      --source-wire: #22b8cf;
      width: 100%;
      min-width: 0;
      height: 100%;
      min-height: 0;
      box-sizing: border-box;
      padding: 12px 28px 24px;
      overflow: auto;
    }

    .source-canvas {
      position: relative;
      width: ${networkWidth}px;
      min-width: ${networkWidth}px;
      min-height: 720px;
      margin: 0 auto;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }

    .source-svg {
      position: absolute;
      inset: 0;
      z-index: 1;
      overflow: visible;
      pointer-events: none;
    }

    .source-svg path {
      fill: none;
      stroke: var(--source-wire);
      stroke-width: 2;
      stroke-linecap: square;
      stroke-linejoin: miter;
      vector-effect: non-scaling-stroke;
    }

    .source-parent-wrap {
      position: relative;
      z-index: 3;
      display: flex;
      justify-content: center;
      flex: 0 0 auto;
    }

    .source-parent {
      position: relative;
      width: clamp(360px, 34vw, 460px);
      min-height: 104px;
      padding: 13px 22px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;
      border: 1px solid #367fb1;
      border-radius: 6px;
      color: #fff;
      background:
        linear-gradient(
          145deg,
          #153e72,
          #102f61 55%,
          #0d2853
        );
      box-shadow:
        0 7px 18px rgba(11, 44, 75, .13);
    }

    .source-parent::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: #3eb9d0;
    }

    .source-parent svg {
      color: #71d0e2;
    }

    .source-parent span {
      color: #8ec5ea;
      font-size: 8px;
      font-weight: 800;
      letter-spacing: .16em;
    }

    .source-parent h2 {
      margin: 4px 0 2px;
      font-size: 20px;
    }

    .source-parent p {
      margin: 0;
      color: #adc7d7;
      font-size: 9px;
      font-weight: 600;
    }

    .source-stage {
      position: relative;
      z-index: 3;
      flex: 0 0 auto;
    }

    .source-stage--incoming {
      margin-top: 78px;
    }

    .source-stage--outgoing {
      margin-top: 112px;
    }

    .source-stage--meter {
      margin-top: 112px;
      padding-bottom: 12px;
    }

    .source-stage-label {
      margin: 0 0 12px;
      color: #647d8d;
      font-size: 8px;
      font-weight: 800;
      letter-spacing: .13em;
      text-align: center;
      line-height: 14px;
      pointer-events: none;
    }

    .source-card-row {
      width: 100%;
      display: grid;
      grid-template-columns:
        repeat(var(--count), ${cardWidth}px);
      justify-content: center;
      column-gap: ${gap}px;
      align-items: stretch;
    }

    .source-card-anchor {
      position: relative;
      min-width: 0;
      display: flex;
      justify-content: center;
      align-items: stretch;
    }

    .source-card-anchor .eq-card {
      position: relative;
      z-index: 3;
      width: ${cardWidth}px;
      max-width: ${cardWidth}px;
      transform: none !important;
    }

    .source-view .eq-card:hover,
    .source-view .eq-card:focus-visible {
      transform: none !important;
    }

    @media (max-width: 1100px) {
      .source-view {
        padding-left: 18px;
        padding-right: 18px;
      }

      .source-canvas {
        margin-left: auto;
        margin-right: auto;
      }
    }
  `;

  const Stage = ({
    label,
    group,
    items,
    className,
  }) => {
    if (!items.length) return null;

    return (
      <section
        className={`source-stage ${className}`}
      >
        <div className="source-stage-label">
          {label}
        </div>

        <div
          className="source-card-row"
          style={{
            "--count": items.length,
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              ref={setEquipmentRef(group, item.id)}
              className="source-card-anchor"
            >
              <EquipmentCard
                equipment={item}
                onOpen={onOpenEquipment}
              />
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="source-view">
      <style>{sourceStyles}</style>

      <div
        ref={canvasRef}
        className="source-canvas"
      >
        <svg
          className="source-svg"
          width={geometry.width || networkWidth}
          height={geometry.height || 720}
          viewBox={`0 0 ${
            geometry.width || networkWidth
          } ${geometry.height || 720}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {geometry.paths.map((path, index) => (
            <path
              key={`${path}-${index}`}
              d={path}
            />
          ))}
        </svg>

        <div className="source-parent-wrap">
          <div
            ref={sourceRef}
            className="source-parent"
          >
            <Zap
              size={27}
              strokeWidth={1.8}
            />

            <span>
              CENTRAL CONTROL PANEL
            </span>

            <h2>
              {voltageLevel} SOURCE
            </h2>

            <p>
              {incomingCount} INCOMING /{" "}
              {outgoingCount} OUTGOING
              {meterCount
                ? ` / ${meterCount} METER${
                    meterCount === 1
                      ? ""
                      : "S"
                  }`
                : ""}
            </p>
          </div>
        </div>

        <Stage
          label="INCOMING SOURCES"
          group="incoming"
          items={incomingFeeders}
          className="source-stage--incoming"
        />

        <Stage
          label="MAIN BUS / OUTGOING"
          group="outgoing"
          items={outgoingFeeders}
          className="source-stage--outgoing"
        />

        <Stage
          label="ENERGY METERING"
          group="meter"
          items={meters}
          className="source-stage--meter"
        />
      </div>
    </div>
  );
}

/* =========================================================
   2. FEEDER VIEW
========================================================= */
/* =========================================================
   2. FEEDER VIEW
========================================================= */

/* =========================================================
   FEEDER VIEW
   Dynamic:
   - Client-configured voltage
   - N incoming feeders
   - N outgoing feeders
   - Static engineering bus
========================================================= */

function FeederView({
  topology,
  onOpenEquipment,
}) {
  const configuration =
    topology?.configuration || {};

  const voltageLevel =
    configuration.voltageLevel ||
    topology?.voltageLevel ||
    "33kV";


  /* =====================================================
     DYNAMIC EQUIPMENT

     New project structure:
       incomingFeeders[]
       outgoingFeeders[]

     Legacy fallback:
       incoming
       equipment[]
  ===================================================== */

  const incomingFeeders =
    Array.isArray(
      topology?.incomingFeeders
    )
      ? topology.incomingFeeders
      : topology?.incoming
      ? [topology.incoming]
      : [];


  const outgoingFeeders =
    Array.isArray(
      topology?.outgoingFeeders
    )
      ? topology.outgoingFeeders
      : Array.isArray(
          topology?.equipment
        )
      ? topology.equipment
      : [];


  const incomingCount =
    incomingFeeders.length;

  const outgoingCount =
    outgoingFeeders.length;


  /*
    The drawing grows horizontally when the client has
    many feeders.

    This prevents cards from becoming tiny and prevents
    conductors from crossing/overlapping cards.
  */

  const cardWidth = 180;
  const columnGap = 28;

  const incomingWidth =
    incomingCount > 0
      ? incomingCount * cardWidth +
        Math.max(
          incomingCount - 1,
          0
        ) *
          columnGap
      : 0;

  const outgoingWidth =
    outgoingCount > 0
      ? outgoingCount * cardWidth +
        Math.max(
          outgoingCount - 1,
          0
        ) *
          columnGap
      : 0;

  const networkWidth =
    Math.max(
      760,
      incomingWidth,
      outgoingWidth
    );


  const feederStyles = `
    .fd-feeder {
      width: 100%;
      min-width: 0;
    }


    /* =====================================================
       HEADER
    ===================================================== */

    .fd-feeder__header {
      display: flex;

      align-items: center;
      justify-content: space-between;

      gap: 20px;

      margin-bottom: 24px;

      padding-bottom: 14px;

      border-bottom:
        1px solid
        rgba(105, 150, 175, 0.16);
    }


    .fd-feeder__header-copy {
      min-width: 0;
    }


    .fd-feeder__eyebrow {
      display: block;

      margin-bottom: 5px;

      color: #6aaec3;

      font-size: 9px;
      font-weight: 800;

      letter-spacing: 0.15em;

      text-transform: uppercase;
    }


    .fd-feeder__title {
      margin: 0;

      color:
        var(
          --text-primary,
          #eaf4fb
        );

      font-size:
        clamp(
          20px,
          2vw,
          28px
        );

      font-weight: 700;

      letter-spacing: -0.02em;
    }


    .fd-feeder__subtitle {
      margin:
        6px 0 0;

      color:
        var(
          --text-secondary,
          #8499a9
        );

      font-size: 12px;
      font-weight: 500;
    }


    .fd-feeder__voltage {
      flex: 0 0 auto;

      padding:
        9px 14px;

      border:
        1px solid
        rgba(46, 181, 201, 0.34);

      border-radius: 4px;

      background:
        rgba(46, 181, 201, 0.06);

      color: #69c7d7;

      font-size: 12px;
      font-weight: 800;

      letter-spacing: 0.05em;
    }


    /* =====================================================
       SCROLLABLE ENGINEERING WORKSPACE
    ===================================================== */

    .fd-feeder__viewport {
      width: 100%;

      overflow-x: auto;
      overflow-y: hidden;

      padding:
        8px 0 22px;
    }


    .fd-feeder__network {
      width:
        ${networkWidth}px;

      min-width:
        ${networkWidth}px;

      margin: 0 auto;

      display: flex;
      flex-direction: column;

      align-items: stretch;

      box-sizing: border-box;
    }


    /* =====================================================
       SECTION LABEL
    ===================================================== */

    .fd-feeder__section-label {
      display: block;

      margin-bottom: 12px;

      color: #718899;

      font-size: 9px;
      font-weight: 800;

      letter-spacing: 0.14em;

      text-align: center;

      text-transform: uppercase;
    }


    /* =====================================================
       INCOMING GRID
    ===================================================== */

    .fd-feeder__incoming-grid {
      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(
            incomingCount,
            1
          )},
          ${cardWidth}px
        );

      justify-content: center;

      column-gap:
        ${columnGap}px;

      width: max-content;

      max-width: 100%;

      margin:
        0 auto;
    }


    .fd-feeder__incoming-column {
      width:
        ${cardWidth}px;

      display: flex;
      flex-direction: column;

      align-items: center;
    }


    /*
      No card movement on hover.

      The conductor begins directly below the
      equipment card and remains aligned with its
      center.
    */

    .fd-feeder__incoming-drop {
      width: 2px;
      height: 34px;

      flex: 0 0 34px;

      background: #2eb5c9;
    }


    /* =====================================================
       INCOMING COLLECTION BUS
    ===================================================== */

    .fd-feeder__incoming-collector {
      position: relative;

      width:
        ${
          incomingCount <= 1
            ? cardWidth
            : incomingWidth
        }px;

      height: 34px;

      margin:
        0 auto;
    }


    /*
      Horizontal collection bus runs exactly between
      the center of the first and last incoming cards.
    */

    .fd-feeder__incoming-horizontal {
      position: absolute;

      top: 0;

      left:
        ${
          incomingCount <= 1
            ? cardWidth / 2
            : cardWidth / 2
        }px;

      right:
        ${
          incomingCount <= 1
            ? cardWidth / 2 - 2
            : cardWidth / 2
        }px;

      height: 2px;

      background: #2eb5c9;
    }


    /*
      Center stem connects incoming collection bus
      to the main distribution bus.
    */

    .fd-feeder__incoming-center-stem {
      position: absolute;

      top: 0;
      left: 50%;

      width: 2px;
      height: 34px;

      transform:
        translateX(-50%);

      background: #2eb5c9;
    }


    /* =====================================================
       MAIN BUS
    ===================================================== */

    .fd-feeder__bus-label {
      margin:
        0 0 8px;

      color: #668092;

      font-size: 9px;
      font-weight: 800;

      letter-spacing: 0.14em;

      text-align: center;

      text-transform: uppercase;
    }


    .fd-feeder__main-bus-wrap {
      width:
        ${Math.max(
          outgoingWidth,
          cardWidth
        )}px;

      margin:
        0 auto;

      display: flex;

      justify-content: center;
    }


    /*
      Bus starts at the center of the first outgoing
      feeder and finishes at the center of the last
      outgoing feeder.

      Therefore no floating conductor endpoints.
    */

    .fd-feeder__main-bus {
      width:
        ${
          outgoingCount <= 1
            ? 2
            : Math.max(
                outgoingWidth -
                  cardWidth,
                2
              )
        }px;

      height: 2px;

      background: #2eb5c9;
    }


    /* =====================================================
       OUTGOING GRID
    ===================================================== */

    .fd-feeder__outgoing-grid {
      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(
            outgoingCount,
            1
          )},
          ${cardWidth}px
        );

      justify-content: center;

      column-gap:
        ${columnGap}px;

      width: max-content;

      max-width: 100%;

      margin:
        0 auto;
    }


    .fd-feeder__outgoing-column {
      width:
        ${cardWidth}px;

      display: flex;
      flex-direction: column;

      align-items: center;
    }


    .fd-feeder__outgoing-drop {
      width: 2px;
      height: 36px;

      flex: 0 0 36px;

      background: #2eb5c9;
    }


    /* =====================================================
       EMPTY STATE
    ===================================================== */

    .fd-feeder__empty {
      width:
        min(
          520px,
          calc(
            100% - 32px
          )
        );

      margin:
        28px auto;

      padding: 26px;

      box-sizing:
        border-box;

      border:
        1px solid
        rgba(
          110,
          140,
          160,
          0.22
        );

      border-radius: 4px;

      background:
        rgba(
          70,
          105,
          125,
          0.05
        );

      text-align: center;
    }


    .fd-feeder__empty strong {
      display: block;

      margin-bottom: 6px;

      color:
        var(
          --text-primary,
          #e2edf4
        );

      font-size: 14px;
    }


    .fd-feeder__empty span {
      color:
        var(
          --text-secondary,
          #8499a9
        );

      font-size: 11px;
    }


    /* =====================================================
       RESPONSIVE
    ===================================================== */

    @media (
      max-width: 900px
    ) {
      .fd-feeder__header {
        align-items:
          flex-start;

        flex-direction:
          column;
      }
    }
  `;


  /* =====================================================
     SAFETY STATE
  ===================================================== */

  if (
    incomingCount < 1 ||
    outgoingCount < 1
  ) {
    return (
      <div className="fd-feeder">
        <style>
          {feederStyles}
        </style>

        <div className="fd-feeder__empty">
          <strong>
            Feeder configuration unavailable
          </strong>

          <span>
            At least one incoming feeder and
            one outgoing feeder are required.
          </span>
        </div>
      </div>
    );
  }


  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <div className="fd-feeder">
      <style>
        {feederStyles}
      </style>


      {/* HEADER */}

      <div className="fd-feeder__header">

        <div className="fd-feeder__header-copy">

          <span className="fd-feeder__eyebrow">
            ELECTRICAL DISTRIBUTION
          </span>

          <h2 className="fd-feeder__title">
            {voltageLevel} FEEDER PANEL
          </h2>

          <p className="fd-feeder__subtitle">
            {incomingCount} Incoming
            {" / "}
            {outgoingCount} Outgoing
            {" "}
            Feeder
            {outgoingCount === 1
              ? ""
              : "s"}
          </p>

        </div>


        <div className="fd-feeder__voltage">
          {voltageLevel}
        </div>

      </div>


      {/* NETWORK */}

      <div className="fd-feeder__viewport">

        <div className="fd-feeder__network">


          {/* =============================================
              INCOMING FEEDERS
          ============================================== */}

          <span className="fd-feeder__section-label">
            INCOMING FEEDERS
          </span>


          <div className="fd-feeder__incoming-grid">

            {incomingFeeders.map(
              (incoming) => (
                <div
                  className="fd-feeder__incoming-column"
                  key={incoming.id}
                >

                  <EquipmentCard
                    equipment={incoming}
                    onOpen={
                      onOpenEquipment
                    }
                  />


                  <div className="fd-feeder__incoming-drop" />

                </div>
              )
            )}

          </div>


          {/* =============================================
              INCOMING COLLECTION BUS
          ============================================== */}

          <div className="fd-feeder__incoming-collector">

            {incomingCount > 1 && (
              <div className="fd-feeder__incoming-horizontal" />
            )}


            <div className="fd-feeder__incoming-center-stem" />

          </div>


          {/* =============================================
              MAIN DISTRIBUTION BUS
          ============================================== */}

          <div className="fd-feeder__bus-label">
            {voltageLevel} DISTRIBUTION BUS
          </div>


          <div className="fd-feeder__main-bus-wrap">

            <div className="fd-feeder__main-bus" />

          </div>


          {/* =============================================
              OUTGOING FEEDERS
          ============================================== */}

          <div className="fd-feeder__outgoing-grid">

            {outgoingFeeders.map(
              (outgoing) => (
                <div
                  className="fd-feeder__outgoing-column"
                  key={outgoing.id}
                >

                  <div className="fd-feeder__outgoing-drop" />


                  <EquipmentCard
                    equipment={outgoing}
                    onOpen={
                      onOpenEquipment
                    }
                  />

                </div>
              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   3. TRANSFORMER VIEW
   Fully independent. Editing this CSS cannot affect LT Kiosk,
   Busduct, Wing, Fire, Source, etc.
========================================================= */

function TransformerView({
  topology,
  onOpenEquipment,
}) {
  /* =====================================================
     PROJECT CONFIGURATION
  ===================================================== */

  const configuration =
    topology?.configuration || {};

  const transformers =
    Array.isArray(topology?.equipment)
      ? topology.equipment
      : [];

  const transformerCount =
    transformers.length;

  const primaryVoltage =
    configuration.primaryVoltage ||
    topology?.primaryVoltage ||
    "33kV";

  const secondaryVoltage =
    configuration.secondaryVoltage ||
    topology?.secondaryVoltage ||
    "433V";


  /* =====================================================
     DYNAMIC GEOMETRY

     Keep transformer cards at a readable fixed size.

     If a client configures many transformers, the
     topology grows horizontally instead of crushing
     the cards.
  ===================================================== */

  const cardWidth = 172;
  const columnGap = 28;

  const equipmentWidth =
    transformerCount > 0
      ? transformerCount * cardWidth +
        Math.max(
          transformerCount - 1,
          0
        ) *
          columnGap
      : cardWidth;

  const networkWidth =
    Math.max(
      760,
      equipmentWidth
    );


  const transformerStyles = `
    /* =====================================================
       DYNAMIC TRANSFORMER FLOW

                   TRANSFORMER PLANT
                          │
                          │
              ────────────┼────────────
               │     │     │     │
              TR1   TR2   TR3   TR4 ...

       Number of transformers is controlled by the
       project configuration.

       Static BMS / electrical topology.
       No animation.
       No moving cards.
    ===================================================== */

    .transformer-view {
      --wire: #19b8cf;
      --wire-size: 2px;

      --transformer-card-width:
        ${cardWidth}px;

      --transformer-card-height:
        136px;

      width: 100%;
      min-width: 0;
      min-height: 100%;

      margin: 0;

      padding:
        clamp(14px, 2vh, 24px)
        clamp(18px, 2.5vw, 40px)
        24px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;

      overflow: hidden;

      --equipment-card-width:
        var(
          --transformer-card-width
        );
    }


    /* =====================================================
       HEADER / PARENT
    ===================================================== */

    .transformer-parent {
      position: relative;

      width:
        clamp(
          390px,
          34vw,
          470px
        );

      min-height: 108px;

      padding: 15px 24px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 3px;

      border:
        1px solid #367fb1;

      border-radius: 6px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #153e72 0%,
          #102f61 55%,
          #0d2853 100%
        );

      box-shadow:
        0 7px 18px
        rgba(
          11,
          44,
          75,
          .13
        );

      z-index: 5;
    }


    .transformer-parent::before {
      content: "";

      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 3px;

      background: #3eb9d0;
    }


    .transformer-parent svg {
      margin-bottom: 2px;

      color: #72d1e2;
    }


    .transformer-parent span {
      color: #8ec5ea;

      font-size: 8px;
      font-weight: 800;

      line-height: 1;

      letter-spacing: .16em;
    }


    .transformer-parent h2 {
      margin: 5px 0 2px;

      color: #ffffff;

      font-size: 19px;
      font-weight: 700;

      line-height: 1.15;

      text-align: center;
    }


    .transformer-parent p {
      margin: 0;

      color: #b3cada;

      font-size: 9px;
      font-weight: 550;

      line-height: 1.2;

      letter-spacing: .03em;
    }


    /* =====================================================
       SCROLLABLE WORKSPACE

       Parent remains centered.

       Only the electrical transformer topology needs
       horizontal scrolling when the client configures
       a large transformer count.
    ===================================================== */

    .transformer-scroll {
      width: 100%;

      overflow-x: auto;
      overflow-y: hidden;

      padding-bottom: 12px;
    }


    .transformer-scroll-inner {
      width:
        ${networkWidth}px;

      min-width:
        ${networkWidth}px;

      margin: 0 auto;

      display: flex;
      flex-direction: column;

      align-items: center;
    }


    /* =====================================================
       PARENT → BUS
    ===================================================== */

    .transformer-stem {
      width:
        var(--wire-size);

      height: 34px;

      min-height: 34px;

      flex: 0 0 34px;

      background:
        var(--wire);
    }


    /* =====================================================
       NETWORK
    ===================================================== */

    .transformer-network {
      position: relative;

      width:
        ${equipmentWidth}px;

      min-width:
        ${equipmentWidth}px;

      margin: 0 auto;
    }


    /* =====================================================
       DISTRIBUTION BUS

       The horizontal line begins at the exact center
       of the first transformer and ends at the exact
       center of the last transformer.
    ===================================================== */

    .transformer-distribution {
      position: relative;

      width: 100%;

      height: 36px;

      min-height: 36px;
    }


    .transformer-bus {
      position: absolute;

      top: 0;

      left:
        ${cardWidth / 2}px;

      right:
        ${cardWidth / 2}px;

      height:
        var(--wire-size);

      background:
        var(--wire);

      pointer-events: none;
    }


    /*
      When there is only one transformer, the horizontal
      bus does not need to extend anywhere.

      This small center terminal keeps the main stem and
      branch electrically aligned.
    */

    .transformer-bus--single {
      left: 50%;
      right: auto;

      width:
        var(--wire-size);

      transform:
        translateX(-50%);
    }


    /* =====================================================
       DYNAMIC VERTICAL BRANCHES

       Uses exactly the same width, card width and gap
       as the equipment row below.
    ===================================================== */

    .transformer-branch-lines {
      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 36px;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(
            transformerCount,
            1
          )},
          ${cardWidth}px
        );

      column-gap:
        ${columnGap}px;

      pointer-events: none;
    }


    .transformer-line-slot {
      position: relative;

      width:
        ${cardWidth}px;

      height: 36px;
    }


    .transformer-line-slot::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width:
        var(--wire-size);

      background:
        var(--wire);

      transform:
        translateX(-50%);
    }


    /* =====================================================
       TRANSFORMER CARDS
    ===================================================== */

    .transformer-grid {
      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(
            transformerCount,
            1
          )},
          ${cardWidth}px
        );

      column-gap:
        ${columnGap}px;

      align-items: start;

      margin: 0;
      padding: 0;

      position: relative;

      z-index: 3;
    }


    .transformer-branch {
      position: relative;

      width:
        ${cardWidth}px;

      min-width:
        ${cardWidth}px;

      display: flex;

      justify-content: center;
      align-items: flex-start;
    }


    .transformer-branch >
    .eq-card {
      width:
        var(
          --transformer-card-width
        );

      min-width:
        var(
          --transformer-card-width
        );

      max-width:
        var(
          --transformer-card-width
        );

      height:
        var(
          --transformer-card-height
        );

      min-height:
        var(
          --transformer-card-height
        );

      max-height:
        var(
          --transformer-card-height
        );

      position: relative;

      z-index: 5;
    }


    /* =====================================================
       CONNECTION TERMINAL
    ===================================================== */

    .transformer-branch::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing:
        border-box;

      border:
        1px solid
        var(--wire);

      border-radius: 50%;

      background:
        var(
          --page-bg,
          #07131e
        );

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 7;
    }


    /* =====================================================
       IMPORTANT:
       DO NOT MOVE CARDS ON HOVER
    ===================================================== */

    .transformer-view
    .eq-card:hover,

    .transformer-view
    .eq-card:focus-visible {
      transform: none;
    }


    /* =====================================================
       EMPTY STATE
    ===================================================== */

    .transformer-empty {
      width:
        min(
          520px,
          calc(
            100% - 32px
          )
        );

      margin: 30px auto;

      padding: 25px;

      box-sizing:
        border-box;

      border:
        1px solid
        rgba(
          80,
          130,
          160,
          .28
        );

      border-radius: 4px;

      color: #7893a4;

      background:
        rgba(
          40,
          80,
          105,
          .06
        );

      text-align: center;

      font-size: 11px;
    }


    .transformer-empty strong {
      display: block;

      margin-bottom: 6px;

      color: #dceaf1;

      font-size: 14px;
    }


    /* =====================================================
       LAPTOP
    ===================================================== */

    @media (
      max-width: 1200px
    ) {

      .transformer-view {
        padding-left: 20px;
        padding-right: 20px;
      }


      .transformer-parent {
        width: 390px;

        min-height: 98px;
      }
    }


    /* =====================================================
       MOBILE / TABLET
    ===================================================== */

    @media (
      max-width: 700px
    ) {

      .transformer-view {
        padding:
          16px
          14px
          24px;
      }


      .transformer-parent {
        width:
          min(
            100%,
            380px
          );

        min-height: 96px;
      }


      .transformer-parent h2 {
        font-size: 16px;
      }
    }
  `;


  /* =====================================================
     EMPTY CONFIGURATION
  ===================================================== */

  if (transformerCount === 0) {
    return (
      <div className="transformer-view">

        <style>
          {transformerStyles}
        </style>

        <div className="transformer-empty">

          <strong>
            No transformers configured
          </strong>

          Configure at least one
          transformer for this project.

        </div>

      </div>
    );
  }


  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <div className="transformer-view">

      <style>
        {transformerStyles}
      </style>


      {/* ===============================================
          TRANSFORMER PLANT
      ================================================ */}

      <div className="transformer-parent">

        <Zap
          size={26}
          strokeWidth={1.8}
        />

        <span>
          STEP-DOWN SUBSTATION
        </span>

        <h2>
          {primaryVoltage}
          {" / "}
          {secondaryVoltage}
          {" "}
          TRANSFORMERS
        </h2>

        <p>
          {transformerCount}
          {" "}
          TRANSFORMER
          {transformerCount === 1
            ? ""
            : "S"}
          {" "}
          · DISTRIBUTION
        </p>

      </div>


      {/* ===============================================
          SCROLLABLE ELECTRICAL NETWORK
      ================================================ */}

      <div className="transformer-scroll">

        <div className="transformer-scroll-inner">


          {/* PARENT → BUS */}

          <div className="transformer-stem" />


          <div className="transformer-network">


            {/* =========================================
                BUS + BRANCHES
            ========================================== */}

            <div className="transformer-distribution">

              <div
                className={`transformer-bus ${
                  transformerCount === 1
                    ? "transformer-bus--single"
                    : ""
                }`}
              />


              <div className="transformer-branch-lines">

                {transformers.map(
                  (item) => (
                    <div
                      className="transformer-line-slot"
                      key={`line-${item.id}`}
                    />
                  )
                )}

              </div>

            </div>


            {/* =========================================
                TRANSFORMER EQUIPMENT
            ========================================== */}

            <div className="transformer-grid">

              {transformers.map(
                (item) => (
                  <div
                    className="transformer-branch"
                    key={item.id}
                  >

                    <EquipmentCard
                      equipment={item}
                      onOpen={
                        onOpenEquipment
                      }
                    />

                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   4. LT KIOSK VIEW
========================================================= */

function LTKioskView({
  topology,
  onOpenEquipment,
}) {
  const kiosks =
    Array.isArray(topology?.equipment)
      ? topology.equipment
      : [];

  const kioskCount =
    kiosks.length;

  const configuration =
    topology?.configuration || {};

  const voltage =
    configuration.voltage ||
    "433V";

  const cardWidth = 164;
  const columnGap = 22;

  const equipmentWidth =
    kioskCount > 0
      ? kioskCount * cardWidth +
        Math.max(
          kioskCount - 1,
          0
        ) *
          columnGap
      : cardWidth;

  const networkWidth =
    Math.max(
      760,
      equipmentWidth
    );

  const kioskStyles = `
    /* =====================================================
       LT KIOSK FLOW

                      LT KIOSKS
                          │
                          │
        ┌────────┬────────┬┴───────┬────────┬────────┐
        │        │        │        │        │        │
     KIOSK-1  KIOSK-2  KIOSK-3  KIOSK-4  ...

       Static electrical distribution topology.
    ===================================================== */

    .kiosk-view {
      --wire: #19b8cf;
      --wire-size: 2px;

      --kiosk-card-width: ${cardWidth}px;
      --kiosk-card-height: 136px;

      width: 100%;
      min-width: 0;
      min-height: 100%;

      margin: 0;

      padding:
        clamp(14px, 2vh, 24px)
        clamp(18px, 2.5vw, 40px)
        24px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: flex-start;

      overflow-x: auto;
      overflow-y: hidden;

      /*
       Shared EquipmentCard uses this value.
      */
      --equipment-card-width:
        var(--kiosk-card-width);
    }


    .kiosk-scroll {
      width: 100%;

      overflow-x: auto;
      overflow-y: hidden;

      padding-bottom: 12px;
    }


    .kiosk-scroll-inner {
      width:
        ${networkWidth}px;

      min-width:
        ${networkWidth}px;

      margin: 0 auto;

      display: flex;
      flex-direction: column;

      align-items: center;
    }


    /* =====================================================
       PARENT LT KIOSK PANEL
    ===================================================== */

    .kiosk-parent {
      position: relative;

      width:
        clamp(
          380px,
          32vw,
          440px
        );

      min-height: 104px;

      padding: 14px 22px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 3px;

      border: 1px solid #367fb1;
      border-radius: 6px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #153e72 0%,
          #102f61 55%,
          #0d2853 100%
        );

      box-shadow:
        0 7px 18px
        rgba(11, 44, 75, .13);

      z-index: 5;
    }


    /* TOP ACCENT */

    .kiosk-parent::before {
      content: "";

      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 3px;

      background: #3eb9d0;
    }


    .kiosk-parent svg {
      margin-bottom: 2px;

      color: #72d1e2;
    }


    .kiosk-parent span {
      color: #8ec5ea;

      font-size: 8px;
      font-weight: 800;

      line-height: 1;

      letter-spacing: .16em;
    }


    .kiosk-parent h2 {
      margin: 5px 0 2px;

      color: #ffffff;

      font-size: 19px;
      font-weight: 700;

      line-height: 1.15;

      text-align: center;
    }


    .kiosk-parent p {
      margin: 0;

      color: #b3cada;

      font-size: 9px;
      font-weight: 550;

      line-height: 1.2;

      letter-spacing: .03em;
    }


    /* =====================================================
       PARENT → DISTRIBUTION BUS
    ===================================================== */

    .kiosk-stem {
      width: var(--wire-size);

      height: 34px;
      min-height: 34px;

      flex: 0 0 34px;

      background: var(--wire);
    }


    /* =====================================================
       COMPLETE LT KIOSK NETWORK
    ===================================================== */

    .kiosk-network {
      position: relative;

      width:
        ${equipmentWidth}px;

      min-width:
        ${equipmentWidth}px;

      margin: 0 auto;
    }


    /* =====================================================
       BUS + BRANCH AREA
    ===================================================== */

    .kiosk-distribution {
      position: relative;

      width: 100%;

      height: 34px;
      min-height: 34px;
    }


    /* =====================================================
       HORIZONTAL BUS

       The horizontal bus starts at the center of the
       first kiosk and ends at the center of the last.
    ===================================================== */

    .kiosk-bus {
      position: absolute;

      top: 0;

      left: ${cardWidth / 2}px;
      right: ${cardWidth / 2}px;

      height: var(--wire-size);

      background: var(--wire);

      pointer-events: none;
    }


    .kiosk-bus--single {
      left: 50%;
      right: auto;

      width:
        var(--wire-size);

      transform:
        translateX(-50%);
    }


    /* =====================================================
       DYNAMIC VERTICAL DROPS

       This grid is identical to the equipment grid.
    ===================================================== */

    .kiosk-branch-lines {
      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 34px;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(
            kioskCount,
            1
          )},
          ${cardWidth}px
        );

      column-gap:
        ${columnGap}px;

      pointer-events: none;
    }


    .kiosk-line-slot {
      position: relative;

      width: 100%;
      min-width: 0;

      height: 100%;
    }


    .kiosk-line-slot::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width: var(--wire-size);

      background: var(--wire);

      transform:
        translateX(-50%);
    }


    /* =====================================================
       EQUIPMENT GRID

       Same count-based geometry as connector grid.
    ===================================================== */

    .kiosk-grid {
      position: relative;

      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(
            kioskCount,
            1
          )},
          ${cardWidth}px
        );

      align-items: start;

      column-gap:
        ${columnGap}px;

      margin: 0;
      padding: 0;

      z-index: 3;
    }


    .kiosk-branch {
      position: relative;

      width: 100%;
      min-width: 0;

      display: flex;

      align-items: flex-start;
      justify-content: center;
    }


    /* =====================================================
       MEDIUM EQUIPMENT CARDS
    ===================================================== */

    .kiosk-branch > .eq-card {
      width:
        var(--kiosk-card-width);

      min-width:
        var(--kiosk-card-width);

      max-width:
        var(--kiosk-card-width);

      height:
        var(--kiosk-card-height);

      min-height:
        var(--kiosk-card-height);

      max-height:
        var(--kiosk-card-height);

      position: relative;

      z-index: 5;
    }


    /* =====================================================
       CONNECTION TERMINAL

       Small fixed point where branch meets card.
    ===================================================== */

    .kiosk-branch::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing: border-box;

      border:
        1px solid var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 7;
    }


    /* =====================================================
       CARD MUST NOT MOVE
       Keeps flow lines connected.
    ===================================================== */

    .kiosk-view .eq-card:hover,
    .kiosk-view .eq-card:focus-visible {
      transform: none;
    }


    /* =====================================================
       LARGE DESKTOP
       1500px+
    ===================================================== */

    @media (min-width: 1500px) {

      .kiosk-view {
        --kiosk-card-height: 142px;

        padding-left: 50px;
        padding-right: 50px;
      }


      .kiosk-parent {
        width: 450px;
        min-height: 110px;
      }


      .kiosk-stem {
        height: 38px;
        min-height: 38px;

        flex-basis: 38px;
      }


      .kiosk-distribution {
        height: 38px;
        min-height: 38px;
      }


      .kiosk-branch-lines {
        height: 38px;
      }
    }


    /* =====================================================
       STANDARD LAPTOP
       1201px - 1499px
    ===================================================== */

    @media (
      min-width: 1201px
    ) and (
      max-width: 1499px
    ) {

      .kiosk-view {
        --kiosk-card-height: 136px;

        padding-left: 24px;
        padding-right: 24px;
      }


      .kiosk-parent {
        width: 400px;
        min-height: 98px;

        padding: 13px 20px;
      }


      .kiosk-parent h2 {
        font-size: 18px;
      }


      .kiosk-stem {
        height: 30px;
        min-height: 30px;

        flex-basis: 30px;
      }


      .kiosk-distribution {
        height: 30px;
        min-height: 30px;
      }


      .kiosk-branch-lines {
        height: 30px;
      }
    }


    /* =====================================================
       SMALL LAPTOP
       901px - 1200px
    ===================================================== */

    @media (
      min-width: 901px
    ) and (
      max-width: 1200px
    ) {

      .kiosk-view {
        --kiosk-card-height: 132px;

        align-items: flex-start;

        padding-left: 20px;
        padding-right: 20px;
      }


      .kiosk-parent {
        width: 390px;
        min-height: 96px;

        align-self: center;
      }


      .kiosk-stem {
        height: 28px;
        min-height: 28px;

        flex-basis: 28px;

        align-self: center;
      }


      .kiosk-distribution {
        height: 28px;
        min-height: 28px;
      }


      .kiosk-branch-lines {
        height: 28px;
      }
    }


    /* =====================================================
       TABLET / MOBILE

       Don't destroy the topology by making cards tiny.
       Allow horizontal scrolling.
    ===================================================== */

    @media (max-width: 900px) {

      .kiosk-view {
        --kiosk-card-height: 132px;

        align-items: flex-start;
        justify-content: flex-start;

        padding:
          16px
          18px
          24px;

      }


      .kiosk-parent {
        width: 380px;
        min-height: 96px;

        align-self: center;
      }


      .kiosk-stem {
        height: 28px;
        min-height: 28px;

        flex-basis: 28px;

      }


      .kiosk-distribution {
        height: 28px;
        min-height: 28px;
      }


      .kiosk-branch-lines {
        height: 28px;
      }
    }
  `;


  return (
    <div className="kiosk-view">
      <style>{kioskStyles}</style>


      {/* ===================================================
          LT KIOSK PARENT
      ==================================================== */}

      <div className="kiosk-parent">

        <PanelsTopLeft
          size={26}
          strokeWidth={1.8}
        />

        <span>
          LOW TENSION DISTRIBUTION
        </span>

        <h2>
          LT KIOSKS
        </h2>

        <p>
          {voltage}
          {" "}
          DISTRIBUTION
        </p>

      </div>


      <div className="kiosk-scroll">

        <div className="kiosk-scroll-inner">


          {/* =================================================
              PARENT → DISTRIBUTION BUS
          ================================================== */}

          <div className="kiosk-stem" />


          {/* =================================================
              LT KIOSK NETWORK
          ================================================== */}

          <div className="kiosk-network">

            {/* BUS + DROPS */}

            <div className="kiosk-distribution">

              <div
                className={`kiosk-bus ${
                  kioskCount === 1
                    ? "kiosk-bus--single"
                    : ""
                }`}
              />

              <div className="kiosk-branch-lines">

                {kiosks.map(
                  (item) => (
                    <div
                      className="kiosk-line-slot"
                      key={`line-${item.id}`}
                    />
                  )
                )}

              </div>

            </div>


            {/* ===============================================
                LT KIOSK EQUIPMENT
            ================================================ */}

            <div className="kiosk-grid">

              {kiosks.map(
                (item) => (
                  <div
                    className="kiosk-branch"
                    key={item.id}
                  >
                    <EquipmentCard
                      equipment={item}
                      onOpen={onOpenEquipment}
                    />
                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   5. BUSDUCT VIEW
========================================================= */

function BusductView({
  topology,
  onOpenEquipment,
}) {
  const busducts =
    Array.isArray(topology?.equipment)
      ? topology.equipment
      : [];

  const busductCount =
    busducts.length;

  const cardWidth = 164;
  const columnGap = 22;

  const equipmentWidth =
    busductCount > 0
      ? busductCount * cardWidth +
        Math.max(
          busductCount - 1,
          0
        ) *
          columnGap
      : cardWidth;

  const networkWidth =
    Math.max(
      760,
      equipmentWidth
    );

  const busductStyles = `
    /* =====================================================
       BUSDUCT FLOW

                     LT BUSDUCTS
                          │
                          │
        ┌────────┬────────┬┴───────┬────────┬────────┐
        │        │        │        │        │        │
      BUS-1    BUS-2    BUS-3    BUS-4    ...

       Static BMS electrical distribution topology.
    ===================================================== */

    .busduct-view {
      --wire: #19b8cf;
      --wire-size: 2px;

      --busduct-card-width: ${cardWidth}px;
      --busduct-card-height: 136px;

      width: 100%;
      min-width: 0;
      min-height: 100%;

      margin: 0;

      padding:
        clamp(14px, 2vh, 24px)
        clamp(18px, 2.5vw, 40px)
        24px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: flex-start;

      overflow-x: auto;
      overflow-y: hidden;

      --equipment-card-width:
        var(--busduct-card-width);
    }


    .busduct-scroll {
      width: 100%;

      overflow-x: auto;
      overflow-y: hidden;

      padding-bottom: 12px;
    }


    .busduct-scroll-inner {
      width:
        ${networkWidth}px;

      min-width:
        ${networkWidth}px;

      margin: 0 auto;

      display: flex;
      flex-direction: column;

      align-items: center;
    }


    /* =====================================================
       BUSDUCT PARENT
    ===================================================== */

    .busduct-parent {
      position: relative;

      width:
        clamp(
          380px,
          32vw,
          440px
        );

      min-height: 104px;

      padding: 14px 22px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 3px;

      border: 1px solid #367fb1;
      border-radius: 6px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #153e72 0%,
          #102f61 55%,
          #0d2853 100%
        );

      box-shadow:
        0 7px 18px
        rgba(11, 44, 75, .13);

      z-index: 5;
    }


    /* TOP ACCENT */

    .busduct-parent::before {
      content: "";

      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 3px;

      background: #3eb9d0;
    }


    .busduct-parent svg {
      margin-bottom: 2px;

      color: #72d1e2;
    }


    .busduct-parent span {
      color: #8ec5ea;

      font-size: 8px;
      font-weight: 800;

      line-height: 1;

      letter-spacing: .16em;
    }


    .busduct-parent h2 {
      margin: 5px 0 2px;

      color: #ffffff;

      font-size: 19px;
      font-weight: 700;

      line-height: 1.15;

      text-align: center;
    }


    .busduct-parent p {
      margin: 0;

      color: #b3cada;

      font-size: 9px;
      font-weight: 550;

      line-height: 1.2;

      letter-spacing: .03em;
    }


    /* =====================================================
       PARENT → BUS
    ===================================================== */

    .busduct-stem {
      width: var(--wire-size);

      height: 34px;
      min-height: 34px;

      flex: 0 0 34px;

      background: var(--wire);
    }


    /* =====================================================
       COMPLETE BUSDUCT NETWORK
    ===================================================== */

    .busduct-network {
      position: relative;

      width:
        ${equipmentWidth}px;

      min-width:
        ${equipmentWidth}px;

      margin: 0 auto;
    }


    /* =====================================================
       DISTRIBUTION AREA
    ===================================================== */

    .busduct-distribution {
      position: relative;

      width: 100%;

      height: 34px;
      min-height: 34px;
    }


    /* =====================================================
       HORIZONTAL BUS

       The bus starts at the center of the first card
       and finishes at the center of the last card.
    ===================================================== */

    .busduct-bus {
      position: absolute;

      top: 0;

      left: ${cardWidth / 2}px;
      right: ${cardWidth / 2}px;

      height: var(--wire-size);

      background: var(--wire);

      pointer-events: none;
    }


    .busduct-bus--single {
      left: 50%;
      right: auto;

      width:
        var(--wire-size);

      transform:
        translateX(-50%);
    }


    /* =====================================================
       DYNAMIC VERTICAL DROPS

       Uses exactly the same grid as cards.
    ===================================================== */

    .busduct-branch-lines {
      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 34px;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(
            busductCount,
            1
          )},
          ${cardWidth}px
        );

      column-gap:
        ${columnGap}px;

      pointer-events: none;
    }


    .busduct-line-slot {
      position: relative;

      width: 100%;
      min-width: 0;

      height: 100%;
    }


    .busduct-line-slot::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width: var(--wire-size);

      background: var(--wire);

      transform:
        translateX(-50%);
    }


    /* =====================================================
       BUSDUCT EQUIPMENT GRID

       Same count-based columns as connector grid.
    ===================================================== */

    .busduct-grid {
      position: relative;

      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(
            busductCount,
            1
          )},
          ${cardWidth}px
        );

      align-items: start;

      column-gap:
        ${columnGap}px;

      margin: 0;
      padding: 0;

      z-index: 3;
    }


    .busduct-branch {
      position: relative;

      width: 100%;
      min-width: 0;

      display: flex;

      align-items: flex-start;
      justify-content: center;
    }


    /* =====================================================
       MEDIUM BUSDUCT CARDS
    ===================================================== */

    .busduct-branch > .eq-card {
      width:
        var(--busduct-card-width);

      min-width:
        var(--busduct-card-width);

      max-width:
        var(--busduct-card-width);

      height:
        var(--busduct-card-height);

      min-height:
        var(--busduct-card-height);

      max-height:
        var(--busduct-card-height);

      position: relative;

      z-index: 5;
    }


    /* =====================================================
       CONNECTION POINT
    ===================================================== */

    .busduct-branch::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing: border-box;

      border:
        1px solid var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 7;
    }


    /* =====================================================
       KEEP FLOW ATTACHED DURING HOVER
    ===================================================== */

    .busduct-view .eq-card:hover,
    .busduct-view .eq-card:focus-visible {
      transform: none;
    }


    /* =====================================================
       LARGE DESKTOP
    ===================================================== */

    @media (min-width: 1500px) {

      .busduct-view {
        --busduct-card-height: 142px;

        padding-left: 50px;
        padding-right: 50px;
      }


      .busduct-parent {
        width: 450px;
        min-height: 110px;
      }


      .busduct-stem {
        height: 38px;
        min-height: 38px;

        flex-basis: 38px;
      }


      .busduct-distribution {
        height: 38px;
        min-height: 38px;
      }


      .busduct-branch-lines {
        height: 38px;
      }
    }


    /* =====================================================
       STANDARD LAPTOP
       1201px - 1499px
    ===================================================== */

    @media (
      min-width: 1201px
    ) and (
      max-width: 1499px
    ) {

      .busduct-view {
        --busduct-card-height: 136px;

        padding-left: 24px;
        padding-right: 24px;
      }


      .busduct-parent {
        width: 400px;
        min-height: 98px;

        padding: 13px 20px;
      }


      .busduct-parent h2 {
        font-size: 18px;
      }


      .busduct-stem {
        height: 30px;
        min-height: 30px;

        flex-basis: 30px;
      }


      .busduct-distribution {
        height: 30px;
        min-height: 30px;
      }


      .busduct-branch-lines {
        height: 30px;
      }
    }


    /* =====================================================
       SMALL LAPTOP
       901px - 1200px
    ===================================================== */

    @media (
      min-width: 901px
    ) and (
      max-width: 1200px
    ) {

      .busduct-view {
        --busduct-card-height: 132px;

        align-items: flex-start;

        padding-left: 20px;
        padding-right: 20px;
      }


      .busduct-parent {
        width: 390px;
        min-height: 96px;

        align-self: center;
      }


      .busduct-stem {
        height: 28px;
        min-height: 28px;

        flex-basis: 28px;

        align-self: center;
      }


      .busduct-distribution {
        height: 28px;
        min-height: 28px;
      }


      .busduct-branch-lines {
        height: 28px;
      }
    }


    /* =====================================================
       TABLET / MOBILE

       Preserve readable cards and topology.
    ===================================================== */

    @media (max-width: 900px) {

      .busduct-view {
        --busduct-card-height: 132px;

        align-items: flex-start;
        justify-content: flex-start;

        padding:
          16px
          18px
          24px;

      }


      .busduct-parent {
        width: 380px;
        min-height: 96px;

        align-self: center;
      }


      .busduct-stem {
        height: 28px;
        min-height: 28px;

        flex-basis: 28px;

      }


      .busduct-distribution {
        height: 28px;
        min-height: 28px;
      }


      .busduct-branch-lines {
        height: 28px;
      }
    }
  `;


  return (
    <div className="busduct-view">
      <style>{busductStyles}</style>


      {/* ===================================================
          BUSDUCT PARENT
      ==================================================== */}

      <div className="busduct-parent">

        <Network
          size={26}
          strokeWidth={1.8}
        />

        <span>
          LT POWER DISTRIBUTION
        </span>

        <h2>
          LT BUSDUCTS
        </h2>

        <p>
          433 V BUSDUCT / BUSBAR
        </p>

      </div>


      <div className="busduct-scroll">

        <div className="busduct-scroll-inner">


          {/* =================================================
              PARENT → DISTRIBUTION
          ================================================== */}

          <div className="busduct-stem" />


          {/* =================================================
              BUSDUCT NETWORK
          ================================================== */}

          <div className="busduct-network">

            {/* MAIN BUS + DROPS */}

            <div className="busduct-distribution">

              <div
                className={`busduct-bus ${
                  busductCount === 1
                    ? "busduct-bus--single"
                    : ""
                }`}
              />

              <div className="busduct-branch-lines">

                {busducts.map(
                  (item) => (
                    <div
                      className="busduct-line-slot"
                      key={`line-${item.id}`}
                    />
                  )
                )}

              </div>

            </div>


            {/* ===============================================
                BUSDUCT EQUIPMENT
            ================================================ */}

            <div className="busduct-grid">

              {busducts.map(
                (item) => (
                  <div
                    className="busduct-branch"
                    key={item.id}
                  >
                    <EquipmentCard
                      equipment={item}
                      onOpen={onOpenEquipment}
                    />
                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   6. PCC VIEW
   PCC overview and internal panel stay entirely inside PCC.
========================================================= */

const pccOverviewLabels = {
  "pcc-1": "Wing A",
  "pcc-2": "Wing B",
  "pcc-3": "Chillers",
  "pcc-4": "Chillers",
};



function getPccDemoTelemetry(circuit) {
  const existing =
    demoTelemetry[
      circuit?.id
    ];

  if (existing) {
    return existing;
  }

  /*
    Frontend demo fallback for custom PCC equipment.

    The values are deterministic from the circuit ID so the
    same custom equipment does not change every render.
    Replace this with live backend/IoT telemetry later.
  */
  const seed =
    String(
      circuit?.id ||
      circuit?.name ||
      "pcc-custom"
    )
      .split("")
      .reduce(
        (total, character) =>
          total +
          character.charCodeAt(0),
        0
      );

  return {
    status: "ON",
    health: "HEALTHY",
    communication: true,
    voltage: 433,
    current:
      165 +
      (seed % 86),
    powerFactor:
      Number(
        (
          0.95 +
          (seed % 4) *
            0.01
        ).toFixed(2)
      ),
    kWh:
      1180 +
      (seed % 420),
    kVAh:
      1230 +
      (seed % 460),
    load:
      48 +
      (seed % 35),
    breakerState:
      circuit?.direction ===
      "coupler"
        ? "OPEN"
        : "CLOSED",
    direction:
      circuit?.direction,
    section:
      circuit?.section,
    fault: false,
    trip: false,
    warning: false,
  };
}


function PCCView({
  topology,
  onOpenEquipment,
}) {
  const [selectedPanelId, setSelectedPanelId] =
    useState(null);

  const panels =
    Array.isArray(topology?.panels)
      ? topology.panels
      : [];

  const panelCount =
    panels.length;

  const panelCardWidth = 220;
  const panelGap = 32;
  const panelEquipmentWidth = panelCount > 0
    ? panelCount * panelCardWidth + Math.max(panelCount - 1, 0) * panelGap
    : panelCardWidth;
  const panelNetworkWidth = Math.max(520, panelEquipmentWidth);
  const panelSideInset = Math.max(0, (panelNetworkWidth - panelEquipmentWidth) / 2) + panelCardWidth / 2;


  const selectedPanel =
    panels.find(
      (panel) =>
        panel.id === selectedPanelId
    );


  /* =====================================================
     PCC STYLES
  ===================================================== */

  const pccStyles = `
    /* =====================================================
       PCC ROOT
    ===================================================== */

    .pcc-view {
      --wire: #19b8cf;
      --wire-size: 2px;

      width: 100%;
      min-width: 0;
      min-height: 100%;

      margin: 0;

      padding:
        clamp(14px, 2vh, 24px)
        clamp(18px, 2.5vw, 40px)
        24px;

      box-sizing: border-box;

      overflow-x: auto;
    }


    /* =====================================================
       PCC OVERVIEW PARENT
    ===================================================== */

    .pcc-parent {
      position: relative;

      width:
        clamp(
          380px,
          32vw,
          440px
        );

      min-height: 104px;

      margin: 0 auto;

      padding: 14px 22px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 3px;

      overflow: hidden;

      border:
        1px solid #367fb1;

      border-radius: 6px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #153e72 0%,
          #102f61 55%,
          #0d2853 100%
        );

      box-shadow:
        0 7px 18px
        rgba(11, 44, 75, .13);

      z-index: 5;
    }


    .pcc-parent::before {
      content: "";

      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 3px;

      background: #3eb9d0;
    }


    .pcc-parent svg {
      margin-bottom: 2px;

      color: #72d1e2;
    }


    .pcc-parent span {
      color: #8ec5ea;

      font-size: 8px;
      font-weight: 800;

      line-height: 1;

      letter-spacing: .16em;
    }


    .pcc-parent h2 {
      margin: 5px 0 2px;

      color: #ffffff;

      font-size: 19px;
      font-weight: 700;

      line-height: 1.15;
    }


    .pcc-parent p {
      margin: 0;

      color: #b3cada;

      font-size: 9px;
      font-weight: 550;
    }


    /* =====================================================
       PCC PARENT → MAIN BUS
    ===================================================== */

    .pcc-stem {
      width:
        var(--wire-size);

      height: 34px;
      min-height: 34px;

      margin: 0 auto;

      background:
        var(--wire);
    }


    /* =====================================================
       PCC OVERVIEW NETWORK
    ===================================================== */

    .pcc-overview-network {
      width: ${panelNetworkWidth}px;
      min-width: ${panelNetworkWidth}px;
      margin: 0 auto;
    }


    .pcc-distribution {
      position: relative;

      width: 100%;

      height: 34px;
      min-height: 34px;
    }


    /*
       The overview bus starts at the first panel
       center and ends at the final panel center.
    */

    .pcc-bus {
      position: absolute;

      top: 0;

      left: ${panelSideInset}px;
      right: ${panelSideInset}px;

      height:
        var(--wire-size);

      background:
        var(--wire);
    }


    .pcc-bus--single {
      left: 50%;
      right: auto;

      width:
        var(--wire-size);

      transform:
        translateX(-50%);
    }


    .pcc-overview-lines {
      position: absolute;

      inset: 0;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(
            panelCount,
            1
          )},
          ${panelCardWidth}px
        );

      column-gap: ${panelGap}px;
      justify-content: center;

      pointer-events: none;
    }


    .pcc-overview-line {
      position: relative;
    }


    .pcc-overview-line::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width:
        var(--wire-size);

      transform:
        translateX(-50%);

      background:
        var(--wire);
    }


    /* =====================================================
       PCC OVERVIEW CARDS
    ===================================================== */

    .pcc-grid {
      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(
            panelCount,
            1
          )},
          ${panelCardWidth}px
        );

      column-gap: ${panelGap}px;
      justify-content: center;

      align-items: start;
    }


    .pcc-branch {
      position: relative;

      min-width: 0;

      display: flex;

      align-items: flex-start;
      justify-content: center;
    }


    .pcc-branch::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing: border-box;

      border:
        1px solid
        var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 7;
    }


    .pcc-panel-card {
      position: relative;

      width: ${panelCardWidth}px;
      min-width: ${panelCardWidth}px;
      max-width: ${panelCardWidth}px;

      height: 136px;

      margin: 0;

      padding: 13px 12px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 3px;

      overflow: hidden;

      border:
        1px solid #327ba2;

      border-radius: 6px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #174766,
          #123b58 55%,
          #0e3049
        );

      box-shadow:
        0 5px 14px
        rgba(10, 39, 59, .13);

      cursor: pointer;

      transition:
        border-color .15s ease,
        box-shadow .15s ease;
    }


    .pcc-panel-card:hover,
    .pcc-panel-card:focus-visible {
      transform: none;

      outline: none;

      border-color: #59bad0;

      box-shadow:
        0 7px 18px
        rgba(10, 42, 64, .18);
    }


    .pcc-panel-card svg {
      margin-bottom: 2px;

      color: #71d0e2;
    }


    .pcc-panel-card span {
      color: #87bddd;

      font-size: 7px;
      font-weight: 800;

      letter-spacing: .12em;
    }


    .pcc-panel-card h3 {
      margin:
        5px 0 2px;

      color: #ffffff;

      font-size: 16px;
      font-weight: 700;
    }


    .pcc-panel-card p {
      margin: 0;

      color: #b5cede;

      font-size: 9px;
    }


    .pcc-panel-card strong {
      margin-top: 6px;

      color: #79dfb7;

      font-size: 8px;
      font-weight: 700;
    }


    /* =====================================================
       INTERNAL PCC
    ===================================================== */

    .pcc-internal {
      width: 100%;
      min-width: 0;
    }


    .pcc-internal-head {
      width: 100%;

      margin-bottom: 20px;

      display: flex;

      align-items: center;

      gap: 14px;
    }


    .pcc-internal-head button {
      height: 36px;

      padding:
        0 12px;

      display:
        inline-flex;

      align-items: center;

      gap: 6px;

      border:
        1px solid #426780;

      border-radius: 5px;

      color: #dce9f2;

      background: #173b56;

      cursor: pointer;
    }


    .pcc-internal-head button:hover {
      background: #19445f;

      border-color: #4da8bd;
    }


    .pcc-internal-head span {
      color: #748b9c;

      font-size: 7px;
      font-weight: 800;

      letter-spacing: .13em;
    }


    .pcc-internal-head h2 {
      margin:
        2px 0;

      color: #17354b;

      font-size: 21px;
      font-weight: 700;
    }


    .pcc-internal-head p {
      margin: 0;

      color: #718492;

      font-size: 9px;
    }


    /* =====================================================
       COMPLETE PCC SWITCHBOARD AREA

       Lineup and Utility → UPS geometry share
       the same width.

       This is important because the Utility
       connections must remain aligned with the
       actual switchboard cells.
    ===================================================== */

    .pcc-switchboard-scroll {
      width: 100%;

      overflow-x: auto;

      overflow-y: visible;

      padding-bottom: 8px;
    }


    .pcc-switchboard {
      width: 100%;

      min-width: max(760px, calc(var(--pcc-count, 1) * 118px));

      position: relative;

      margin: 0 auto;
    }


    .pcc-empty-panel {
      width:
        min(
          520px,
          calc(100% - 32px)
        );

      margin: 30px auto;

      padding: 24px;

      box-sizing:
        border-box;

      border:
        1px solid
        rgba(
          80,
          130,
          160,
          .28
        );

      border-radius: 4px;

      color: #7893a4;

      background:
        rgba(
          40,
          80,
          105,
          .06
        );

      text-align: center;

      font-size: 11px;
    }


    .pcc-empty-panel strong {
      display: block;

      margin-bottom: 6px;

      color: #dceaf1;

      font-size: 14px;
    }


    /* =====================================================
       PCC LINEUP
    ===================================================== */

    .pcc-lineup {
      --pcc-count: 14;

      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          var(--pcc-count),
          minmax(80px, 1fr)
        );

      gap: 0;

      box-sizing: border-box;

      border:
        2px solid #1e6f9e;

      background: #0e2c4e;
    }


    /* =====================================================
       PCC CIRCUIT
    ===================================================== */

    .pcc-cell {
      position: relative;

      min-width: 0;

      height: 132px;

      margin: 0;

      padding:
        9px 5px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 3px;

      overflow: hidden;

      border: 0;

      border-right:
        1px solid
        rgba(
          93,
          145,
          177,
          .46
        );

      color: #ffffff;

      background: #102f54;

      cursor: pointer;

      transition:
        background .14s ease;
    }


    .pcc-cell:last-child {
      border-right: 0;
    }


    .pcc-cell--incoming {
      background: #123a5d;
    }


    .pcc-cell--outgoing {
      background: #102f54;
    }


    .pcc-cell--coupler {
      background: #3d3828;
    }


    .pcc-cell:hover,
    .pcc-cell:focus-visible {
      transform: none;

      outline: none;

      background: #17486b;
    }


    .pcc-cell--coupler:hover,
    .pcc-cell--coupler:focus-visible {
      background: #51492f;
    }


    .pcc-cell > svg {
      flex:
        0 0 auto;

      color: #6ecbdd;
    }


    .pcc-cell > small {
      color: #7fa9c4;

      font-size: 6px;
      font-weight: 700;

      line-height: 1;

      letter-spacing: .04em;
    }


    .pcc-cell > strong {
      width: 100%;

      margin:
        4px 0 2px;

      overflow: hidden;

      color: #ffffff;

      font-size: 8px;
      font-weight: 700;

      line-height: 11px;

      text-align: center;

      display:
        -webkit-box;

      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }


    .pcc-cell > em {
      color: #79dfb7;

      font-size: 7px;
      font-weight: 700;

      line-height: 1;

      font-style: normal;
    }


    /* =====================================================
       PCC CIRCUIT HOVER
    ===================================================== */

    .pcc-cell-readings {
      position: absolute;

      inset: 0;

      z-index: 20;

      padding:
        8px 7px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      overflow: hidden;

      background:
        linear-gradient(
          145deg,
          #123f5d,
          #0d324c
        );

      opacity: 0;

      visibility: hidden;

      pointer-events: none;

      transition:
        opacity .13s ease,
        visibility .13s ease;
    }


    .pcc-cell:hover
    .pcc-cell-readings,

    .pcc-cell:focus-visible
    .pcc-cell-readings {
      opacity: 1;

      visibility: visible;
    }


    .pcc-cell-readings-title {
      height: 15px;
      min-height: 15px;

      margin-bottom: 3px;

      color: #73d0e1;

      font-size: 6px;
      font-weight: 800;

      line-height: 15px;

      text-align: left;

      letter-spacing: .08em;

      white-space: nowrap;
    }


    .pcc-cell-readings-grid {
      min-height: 0;

      flex: 1;

      display: grid;

      grid-template-rows:
        repeat(
          5,
          minmax(0, 1fr)
        );

      overflow: hidden;
    }


    .pcc-cell-reading {
      min-height: 0;

      display: grid;

      grid-template-columns:
        minmax(0, 1fr)
        minmax(28px, auto);

      align-items: center;

      column-gap: 4px;
    }


    .pcc-cell-reading span {
      min-width: 0;

      overflow: hidden;

      color: #9eb9c7;

      font-size: 6px;
      font-weight: 550;

      text-align: left;

      text-overflow: ellipsis;

      white-space: nowrap;
    }


    .pcc-cell-reading strong {
      min-width: 0;

      margin: 0;

      overflow: hidden;

      color: #ffffff;

      font-size: 6.5px;
      font-weight: 700;

      text-align: right;

      text-overflow: ellipsis;

      white-space: nowrap;
    }


    /* =====================================================
       UTILITY → UPS SUPPLY
       Exact PCC1/PCC2 14-cell switchboard geometry.

       Utility 1 = cell 6
       Utility 2 = cell 13
       UPS take-off = exact midpoint between both utilities.
    ===================================================== */

    .pcc-utility-supply {
      --utility-row-height: 48px;
      position: relative;
      width: 100%;
      height: var(--utility-row-height);
      pointer-events: none;
    }

    .pcc-utility-drop {
      position: absolute;
      top: 0;
      width: var(--wire-size);
      height: 18px;
      transform: translateX(-50%);
      background: var(--wire);
    }

    .pcc-utility-horizontal {
      position: absolute;
      top: 16px;
      height: var(--wire-size);
      background: var(--wire);
    }

    .pcc-utility-to-ups {
      position: absolute;
      top: 16px;
      width: var(--wire-size);
      height:
        calc(
          var(--utility-row-height) -
          16px
        );
      transform:
        translateX(-50%);
      background: var(--wire);
    }


    /* =====================================================
       UPS SECTION
    ===================================================== */

    .pcc-ups-area {
      position: relative;

      width: 100%;

      height: auto;

      min-height: 260px;
    }


    /* =====================================================
       UPS PARENT ROW

       Parent is positioned under the Utility
       midpoint.
    ===================================================== */

    .pcc-ups-parent-row {
      position: relative;

      width: 100%;

      height: 82px;
    }


    .pcc-ups-parent {
      position: absolute;

      top: 0;

      left: 50%;

      width: 220px;
      height: 82px;

      padding: 8px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 2px;

      transform:
        translateX(-50%);

      border:
        1px solid #2879ad;

      border-radius: 6px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #123d63,
          #0e3154
        );

      z-index: 5;
    }


    .pcc-ups-parent svg {
      color: #71d0e2;
    }


    .pcc-ups-parent h3 {
      margin:
        3px 0 0;

      font-size: 14px;
      font-weight: 700;
    }


    .pcc-ups-parent span {
      color: #a9c4d5;

      font-size: 7px;
      font-weight: 700;

      letter-spacing: .08em;
    }


    /* =====================================================
       UPS PARENT → UPS SUBNETWORK
    ===================================================== */

    .pcc-ups-parent-stem {
      position: relative;

      width: 100%;

      height: 28px;
    }


    .pcc-ups-parent-stem::before {
      content: "";

      position: absolute;

      top: 0;

      left: var(--ups-left, 50%);

      width:
        var(--wire-size);

      height: 28px;

      transform:
        translateX(-50%);

      background:
        var(--wire);
    }


    /* =====================================================
       CENTERED UPS SUBNETWORK

       We position the whole four-unit network under
       the UPS parent instead of stretching it across
       the complete PCC switchboard.
    ===================================================== */

    .pcc-ups-network {
      position: absolute;

      top: 110px;

      left: 50%;

      width: 700px;

      max-width: calc(100% - 24px);

      transform:
        translateX(-50%);
    }


    .pcc-ups-distribution {
      position: relative;

      width: 100%;

      height: 28px;
    }


    /*
       Four columns:

       first = 1/8
       last  = 7/8
    */

    .pcc-ups-bus {
      position: absolute;

      top: 0;

      left:
        calc(100% / (var(--ups-count) * 2));

      right:
        calc(100% / (var(--ups-count) * 2));

      height:
        var(--wire-size);

      background:
        var(--wire);
    }


    .pcc-ups-lines {
      position: absolute;

      inset: 0;

      display: grid;

      grid-template-columns:
        repeat(
          var(--ups-count),
          minmax(0, 1fr)
        );

      pointer-events: none;
    }


    .pcc-ups-line {
      position: relative;
    }


    .pcc-ups-line::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width:
        var(--wire-size);

      transform:
        translateX(-50%);

      background:
        var(--wire);
    }


    /* =====================================================
       UPS UNIT GRID
    ===================================================== */

    .pcc-ups-grid {
      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          var(--ups-count),
          minmax(0, 1fr)
        );

      gap: 0;
    }


    .pcc-ups-unit-wrap {
      position: relative;

      min-width: 0;

      display: flex;

      align-items: flex-start;
      justify-content: center;
    }


    .pcc-ups-unit-wrap::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 5px;
      height: 5px;

      box-sizing: border-box;

      border:
        1px solid
        var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 8;
    }


    /* =====================================================
       UPS CARD
    ===================================================== */

    .pcc-ups-unit {
      position: relative;

      width: 155px;
      min-width: 155px;
      max-width: 155px;
      height: 108px;

      margin: 0;

      padding:
        9px 10px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 3px;

      overflow: hidden;

      border:
        1px solid #2d729d;

      border-radius: 5px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #143d63,
          #103354
        );

      cursor: pointer;

      transition:
        border-color .14s ease,
        box-shadow .14s ease;
    }


    .pcc-ups-unit:hover,
    .pcc-ups-unit:focus-visible {
      transform: none;

      outline: none;

      border-color: #58b8ce;

      box-shadow:
        0 5px 14px
        rgba(10, 44, 66, .15);
    }


    .pcc-ups-unit > svg {
      color: #71d0e2;
    }


    .pcc-ups-unit > strong {
      margin-top: 3px;

      color: #ffffff;

      font-size: 11px;
      font-weight: 700;
    }


    .pcc-ups-unit > span {
      color: #a9c4d5;

      font-size: 7.5px;
    }


    /* =====================================================
       UPS HOVER READINGS
    ===================================================== */

    .pcc-ups-readings {
      position: absolute;

      inset: 0;

      z-index: 20;

      padding:
        7px 9px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      overflow: hidden;

      background:
        linear-gradient(
          145deg,
          #123f5d,
          #0c304a
        );

      opacity: 0;

      visibility: hidden;

      pointer-events: none;

      transition:
        opacity .13s ease,
        visibility .13s ease;
    }


    .pcc-ups-unit:hover
    .pcc-ups-readings,

    .pcc-ups-unit:focus-visible
    .pcc-ups-readings {
      opacity: 1;

      visibility: visible;
    }


    .pcc-ups-readings-title {
      height: 15px;
      min-height: 15px;

      margin-bottom: 2px;

      color: #73d0e1;

      font-size: 6px;
      font-weight: 800;

      line-height: 15px;

      text-align: left;

      letter-spacing: .08em;
    }


    .pcc-ups-readings-grid {
      min-height: 0;

      flex: 1;

      display: flex;
      flex-direction: column;

      gap: 2px;

      overflow-x: hidden;
      overflow-y: auto;

      padding-right: 2px;

      scrollbar-width: thin;
    }


    .pcc-ups-reading {
      min-height: 14px;

      display: grid;

      grid-template-columns:
        minmax(0, 1fr)
        minmax(42px, auto);

      align-items: center;

      column-gap: 5px;
    }


    .pcc-ups-reading span {
      min-width: 0;

      overflow: hidden;

      color: #a5bdc9;

      font-size: 6px;

      text-align: left;

      text-overflow: ellipsis;

      white-space: nowrap;
    }


    .pcc-ups-reading strong {
      min-width: 0;

      margin: 0;

      overflow: hidden;

      color: #ffffff;

      font-size: 6.5px;
      font-weight: 700;

      text-align: right;

      text-overflow: ellipsis;

      white-space: nowrap;
    }


    /* =====================================================
       LARGE DESKTOP
    ===================================================== */

    @media (min-width: 1500px) {

      .pcc-overview-network {
        width: ${panelNetworkWidth}px;
        min-width: ${panelNetworkWidth}px;
      }


      .pcc-panel-card {
        height: 142px;
      }


      .pcc-switchboard {
        min-width: 1260px;
      }


      .pcc-lineup {
        grid-template-columns:
          repeat(
            var(--pcc-count),
            minmax(90px, 1fr)
          );
      }


      .pcc-cell {
        height: 126px;
      }


      .pcc-ups-network {
        width: 760px;
      }


      .pcc-ups-unit {
        width: 170px;
        min-width: 170px;
        max-width: 170px;
        height: 112px;
      }
    }


    /* =====================================================
       NORMAL LAPTOP
    ===================================================== */

    @media (
      min-width: 1101px
    ) and (
      max-width: 1499px
    ) {

      .pcc-panel-card {
        height: 136px;
      }


      .pcc-switchboard {
        min-width: 1120px;
      }


      .pcc-ups-network {
        width: 700px;
      }


      .pcc-ups-unit {
        width: 155px;
        min-width: 155px;
        max-width: 155px;
      }
    }


    /* =====================================================
       SMALL LAPTOP / TABLET
    ===================================================== */

    @media (max-width: 1100px) {

      .pcc-view {
        padding-left: 18px;
        padding-right: 18px;
      }


      .pcc-overview-network {
        width: ${panelNetworkWidth}px;
        min-width: ${panelNetworkWidth}px;
      }


      .pcc-panel-card {
        height: 132px;
      }


      .pcc-switchboard {
        width: max(100%, calc(var(--pcc-count, 1) * 108px));
        min-width: max(760px, calc(var(--pcc-count, 1) * 118px));
      }


      .pcc-ups-network {
        width: 700px;
      }
    }
  `;


  /* =====================================================
     DIRECTION ICON
  ===================================================== */

  const DirectionIcon = ({
    direction,
  }) => {
    if (direction === "incoming") {
      return (
        <ArrowDown
          size={15}
          strokeWidth={1.8}
        />
      );
    }


    if (direction === "outgoing") {
      return (
        <ArrowUp
          size={15}
          strokeWidth={1.8}
        />
      );
    }


    return (
      <ArrowLeftRight
        size={16}
        strokeWidth={1.8}
      />
    );
  };


  /* =====================================================
     CIRCUIT READINGS
  ===================================================== */

  const getCircuitReadings = (
    circuit,
    data = {}
  ) => {
    return getPreview(
      {
        ...circuit,

        type:
          circuit.type ||
          (
            circuit.direction ===
            "coupler"
              ? "coupler"
              : "pcc-circuit"
          ),
      },

      {
        ...data,

        status:
          data?.status ||
          "LIVE",
      }
    );
  };


  /* =====================================================
     UPS UNITS
  ===================================================== */

  const upsUnitTemplates = [
    {
      id: "ups-30-1",
      name: "30kVA-1",
      label: "30 kVA",
      type: "ups",
    },

    {
      id: "ups-30-2",
      name: "30kVA-2",
      label: "30 kVA",
      type: "ups",
    },

    {
      id: "ups-10-1",
      name: "10kVA-1",
      label: "10 kVA",
      type: "ups",
    },

    {
      id: "ups-10-2",
      name: "10kVA-2",
      label: "10 kVA",
      type: "ups",
    },
  ];



  /* =====================================================
     INTERNAL PCC VIEW
  ===================================================== */

  if (selectedPanel) {
    const panelCircuits =
      Array.isArray(
        selectedPanel.circuits
      )
        ? selectedPanel.circuits
        : [];

    /*
       Explicit UPS configuration is important:

       - upsUnits: [] means this PCC intentionally has NO UPS.
       - missing upsUnits means legacy/reference topology, where
         PCC1/PCC2 may use the original four UPS units.
    */
    const hasUpsConfiguration =
      Array.isArray(
        selectedPanel.upsUnits
      );

    const configuredUpsUnits =
      hasUpsConfiguration
        ? selectedPanel.upsUnits
        : [];

    const units =
      hasUpsConfiguration
        ? upsUnitTemplates.filter(
            (unit) =>
              configuredUpsUnits.includes(
                unit.id
              )
          )
        : (
            selectedPanel.id === "pcc-1" ||
            selectedPanel.id === "pcc-2"
          )
        ? upsUnitTemplates
        : [];

    const hasUps =
      units.length > 0;

    /*
       UPS supply must come from the actual configured
       Utility 1 and Utility 2 cells in this PCC lineup.
    */
    const isUtility = (circuit, number) => {
      const id = String(circuit?.id || "").toLowerCase().replace(/[\s_-]+/g, "");
      const name = String(circuit?.name || circuit?.label || "").toLowerCase().replace(/[\s_-]+/g, "");
      return id.endsWith(`utility${number}`) || name === `utility${number}` || name.includes(`utility${number}`);
    };

    const utility1Circuit = panelCircuits.find((circuit) => isUtility(circuit, 1));
    const utility2Circuit = panelCircuits.find((circuit) => isUtility(circuit, 2));

    const utility1Index =
      utility1Circuit
        ? panelCircuits.findIndex(
            (circuit) =>
              circuit.id ===
              utility1Circuit.id
          )
        : -1;

    const utility2Index =
      utility2Circuit
        ? panelCircuits.findIndex(
            (circuit) =>
              circuit.id ===
              utility2Circuit.id
          )
        : -1;

    const utilityIndexes =
      [
        utility1Index,
        utility2Index,
      ].filter(
        (index) =>
          index >= 0
      );

    const hasUtilitySupply =
      utilityIndexes.length > 0;

    const pccCircuitCount =
      Math.max(
        panelCircuits.length,
        1
      );

    const utilityCenters =
      utilityIndexes.map(
        (index) =>
          (
            (
              index +
              0.5
            ) /
            pccCircuitCount
          ) *
          100
      );

    const utilityLeft =
      utilityCenters.length > 0
        ? Math.min(
            ...utilityCenters
          )
        : 50;

    const utilityRight =
      utilityCenters.length > 0
        ? Math.max(
            ...utilityCenters
          )
        : 50;

    const utilityMidpoint =
      (
        utilityLeft +
        utilityRight
      ) /
      2;


    return (
      <div className="pcc-view">
        <style>
          {pccStyles}
        </style>


        <div className="pcc-internal">

          {/* ===============================================
              HEADER
          ================================================ */}

          <div className="pcc-internal-head">

            <button
              type="button"
              onClick={() =>
                setSelectedPanelId(
                  null
                )
              }
            >
              <ArrowLeft
                size={15}
              />

              PCC Main
            </button>


            <div>

              <span>
                POWER CONTROL CENTRE
              </span>


              <h2>
                {selectedPanel.name}
              </h2>


              <p>
                {
                  pccOverviewLabels[
                    selectedPanel.id
                  ] ||
                  selectedPanel.label
                }
              </p>

            </div>

          </div>


          {/* ===============================================
              SWITCHBOARD + UPS

              They are inside the same width container
              so the Utility flow lines remain aligned.
          ================================================ */}

          <div className="pcc-switchboard-scroll">

            <div
              className="pcc-switchboard"
              style={{ "--pcc-count": Math.max(panelCircuits.length, 1) }}
            >

              {/* ===========================================
                  PCC LINEUP
              ============================================ */}

              {panelCircuits.length ===
                0 &&
              !hasUps && (
                <div className="pcc-empty-panel">
                  <strong>
                    Internal topology not configured
                  </strong>

                  This PCC panel is available in the
                  project, but no verified internal
                  circuit layout is defined for it.
                </div>
              )}

              {panelCircuits.length >
                0 && (
                <div
                  className="pcc-lineup"
                  style={{
                    "--pcc-count":
                      panelCircuits.length,
                  }}
                >

                  {panelCircuits.map(
                    (circuit) => {

                    const data =
                      getPccDemoTelemetry(
                        circuit
                      );


                    const readings =
                      getCircuitReadings(
                        circuit,
                        data
                      );


                    const status =
                      String(
                        data?.status ||
                        "LIVE"
                      ).toUpperCase();


                    const isOff =
                      status ===
                      "OFF";


                    return (
                      <button
                        type="button"

                        className={
                          `pcc-cell pcc-cell--${circuit.direction}`
                        }

                        key={
                          circuit.id
                        }

                        onClick={() =>
                          onOpenEquipment?.({
                            ...circuit,

                            type:
                              circuit.type ||
                              (
                                circuit.direction ===
                                "coupler"
                                  ? "coupler"
                                  : "pcc-circuit"
                              ),

                            telemetry:
                              data,
                          })
                        }
                      >

                        {/* NORMAL CONTENT */}

                        <DirectionIcon
                          direction={
                            circuit.direction
                          }
                        />


                        <small>
                          {
                            circuit.direction ===
                            "coupler"
                              ? "B/C"
                              : circuit.direction
                                  .toUpperCase()
                          }
                        </small>


                        <strong
                          title={
                            circuit.name
                          }
                        >
                          {
                            circuit.name
                          }
                        </strong>


                        <em>
                          ●{" "}
                          {
                            isOff
                              ? "OFF"
                              : "LIVE"
                          }
                        </em>


                        {/* =================================
                            HOVER READINGS
                        ================================== */}

                        {readings.length >
                          0 && (

                          <div className="pcc-cell-readings">

                            <div className="pcc-cell-readings-title">
                              LIVE READINGS
                            </div>


                            <div className="pcc-cell-readings-grid">

                              {readings
                                .slice(
                                  0,
                                  5
                                )
                                .map(
                                  (
                                    [
                                      label,
                                      value,
                                    ],
                                    index
                                  ) => (

                                    <div
                                      className="pcc-cell-reading"

                                      key={
                                        `${label}-${index}`
                                      }
                                    >

                                      <span
                                        title={
                                          label
                                        }
                                      >
                                        {
                                          label
                                        }
                                      </span>


                                      <strong
                                        title={
                                          String(
                                            value
                                          )
                                        }
                                      >
                                        {
                                          value
                                        }
                                      </strong>

                                    </div>

                                  )
                                )}

                            </div>

                          </div>
                        )}

                      </button>
                    );
                    }
                  )}

                </div>
              )}


              {/* ===========================================
                  PCC1 / PCC2 ONLY

                  UTILITY 1 + UTILITY 2 → UPS
              ============================================ */}

              {hasUps && hasUtilitySupply && (
                <>

                  {/* =======================================
                      UTILITY SUPPLY CONNECTION
                  ======================================== */}

                  {hasUtilitySupply && (
                    <div className="pcc-utility-supply">
                      {utilityCenters.map(
                        (center, index) => (
                          <div
                            className="pcc-utility-drop"
                            key={`utility-drop-${index}`}
                            style={{
                              left:
                                `${center}%`,
                            }}
                          />
                        )
                      )}

                      {utilityCenters.length > 1 && (
                        <div
                          className="pcc-utility-horizontal"
                          style={{
                            left:
                              `${utilityLeft}%`,
                            width:
                              `${
                                utilityRight -
                                utilityLeft
                              }%`,
                          }}
                        />
                      )}

                      <div
                        className="pcc-utility-to-ups"
                        style={{
                          left:
                            `${utilityMidpoint}%`,
                        }}
                      />
                    </div>
                  )}


                  {/* =======================================
                      UPS AREA
                  ======================================== */}

                  <div className="pcc-ups-area">

                    {/* UPS PARENT */}

                    <div className="pcc-ups-parent-row">

                      <div className="pcc-ups-parent" style={{ left: `${utilityMidpoint}%` }}>

                        <BatteryCharging
                          size={21}
                          strokeWidth={1.8}
                        />


                        <h3>
                          UPS
                        </h3>


                        <span>
                          SUPPLY
                        </span>

                      </div>

                    </div>


                    {/* UPS → DISTRIBUTION */}

                    <div className="pcc-ups-parent-stem" style={{ "--ups-left": `${utilityMidpoint}%` }} />


                    {/* =====================================
                        FOUR UPS UNITS
                    ====================================== */}

                    <div
                      className="pcc-ups-network"
                      style={{
                        "--ups-count": units.length,
                        left: `${utilityMidpoint}%`,
                      }}
                    >

                      <div className="pcc-ups-distribution">

                        <div className="pcc-ups-bus" />


                        <div className="pcc-ups-lines">

                          {units.map(
                            (unit) => (

                              <div
                                className="pcc-ups-line"

                                key={
                                  `line-${unit.id}`
                                }
                              />

                            )
                          )}

                        </div>

                      </div>


                      <div className="pcc-ups-grid">

                        {units.map(
                          (unit) => {

                            const data =
                              demoTelemetry[
                                unit.id
                              ] || {};


                            const readings =
                              getPreview(
                                unit,
                                data
                              );


                            return (
                              <div
                                className="pcc-ups-unit-wrap"

                                key={
                                  unit.id
                                }
                              >

                                <button
                                  type="button"

                                  className="pcc-ups-unit"

                                  onClick={() =>
                                    onOpenEquipment?.({
                                      ...unit,

                                      telemetry:
                                        data,
                                    })
                                  }
                                >

                                  {/* NORMAL UPS CARD */}

                                  <BatteryCharging
                                    size={18}
                                    strokeWidth={1.8}
                                  />


                                  <strong>
                                    {
                                      unit.name
                                    }
                                  </strong>


                                  <span>
                                    {
                                      unit.label
                                    }
                                  </span>


                                  {/* =======================
                                      UPS HOVER READINGS
                                  ======================== */}

                                  {readings.length >
                                    0 && (

                                    <div className="pcc-ups-readings">

                                      <div className="pcc-ups-readings-title">
                                        LIVE READINGS
                                      </div>


                                      <div className="pcc-ups-readings-grid">

                                        {readings.map(
                                          (
                                            [
                                              label,
                                              value,
                                            ],
                                            index
                                          ) => (

                                            <div
                                              className="pcc-ups-reading"

                                              key={
                                                `${label}-${index}`
                                              }
                                            >

                                              <span
                                                title={
                                                  label
                                                }
                                              >
                                                {
                                                  label
                                                }
                                              </span>


                                              <strong
                                                title={
                                                  String(
                                                    value
                                                  )
                                                }
                                              >
                                                {
                                                  value
                                                }
                                              </strong>

                                            </div>

                                          )
                                        )}

                                      </div>

                                    </div>
                                  )}

                                </button>

                              </div>
                            );
                          }
                        )}

                      </div>

                    </div>

                  </div>

                </>
              )}

            </div>

          </div>

        </div>
      </div>
    );
  }


  /* =====================================================
     PCC MAIN OVERVIEW
  ===================================================== */

  return (
    <div className="pcc-view">
      <style>
        {pccStyles}
      </style>


      {/* ===============================================
          PCC PARENT
      ================================================ */}

      <div className="pcc-parent">

        <Cpu
          size={26}
          strokeWidth={1.8}
        />


        <span>
          MAIN LT DISTRIBUTION
        </span>


        <h2>
          PCC
        </h2>


        <p>
          MAIN LT DISTRIBUTION
        </p>

      </div>


      {/* ===============================================
          PCC → PANEL BUS
      ================================================ */}

      <div className="pcc-stem" />


      <div className="pcc-overview-network">

        <div className="pcc-distribution">

          <div
            className={`pcc-bus ${
              panelCount === 1
                ? "pcc-bus--single"
                : ""
            }`}
          />


          <div className="pcc-overview-lines">

            {panels.map(
              (panel) => (

                <div
                  className="pcc-overview-line"

                  key={
                    `line-${panel.id}`
                  }
                />

              )
            )}

          </div>

        </div>


        {/* =============================================
            PCC PANEL EQUIPMENT
        ============================================== */}

        <div className="pcc-grid">

          {panels.map(
            (panel) => (

              <div
                className="pcc-branch"

                key={
                  panel.id
                }
              >

                <button
                  type="button"

                  className="pcc-panel-card"

                  onClick={() =>
                    setSelectedPanelId(
                      panel.id
                    )
                  }
                >

                  <Cpu
                    size={24}
                    strokeWidth={1.8}
                  />


                  <span>
                    POWER CONTROL CENTRE
                  </span>


                  <h3>
                    {
                      panel.name
                    }
                  </h3>


                  <p>
                    {
                      pccOverviewLabels[
                        panel.id
                      ] ||
                      panel.label
                    }
                  </p>


                  <strong>
                    ● LIVE
                  </strong>

                </button>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   7. RAISING MAIN VIEW
========================================================= */

function RaisingMainView({
  topology,
  onOpenEquipment,
}) {
  const equipment = Array.isArray(topology?.equipment)
    ? topology.equipment
    : [];

  const count = equipment.length;
  const cardWidth = 190;
  const gap = 26;
  const equipmentWidth = count > 0
    ? count * cardWidth + Math.max(0, count - 1) * gap
    : cardWidth;
  const networkWidth = Math.max(720, equipmentWidth);
  const sideInset = Math.max(0, (networkWidth - equipmentWidth) / 2) + cardWidth / 2;

  const raisingStyles = `
    .raising-view {
      --wire:#19b8cf;
      --wire-size:2px;
      width:100%;
      min-width:0;
      min-height:100%;
      box-sizing:border-box;
      padding:clamp(14px,2vh,24px) clamp(18px,3vw,44px) 28px;
      overflow-x:auto;
      overflow-y:visible;
    }
    .raising-network {
      width:${networkWidth}px;
      min-width:${networkWidth}px;
      margin:0 auto;
      display:flex;
      flex-direction:column;
      align-items:stretch;
    }
    .raising-parent {
      display:flex;
      justify-content:center;
      align-items:center;
    }
    .raising-parent > .simple-card {
      width:420px;
      min-width:420px;
      max-width:420px;
      height:112px;
      min-height:112px;
      max-height:112px;
      margin:0;
    }
    .raising-parent-stem {
      width:var(--wire-size);
      height:38px;
      margin:0 auto;
      background:var(--wire);
    }
    .raising-label {
      height:18px;
      line-height:18px;
      margin-bottom:8px;
      color:#718899;
      font-size:8px;
      font-weight:800;
      letter-spacing:.14em;
      text-align:center;
      text-transform:uppercase;
    }
    .raising-distribution {
      position:relative;
      width:100%;
      height:38px;
    }
    .raising-bus {
      position:absolute;
      top:0;
      left:${sideInset}px;
      right:${sideInset}px;
      height:var(--wire-size);
      background:var(--wire);
    }
    .raising-bus--single {
      left:50%;
      right:auto;
      width:var(--wire-size);
      transform:translateX(-50%);
    }
    .raising-lines {
      position:absolute;
      inset:0;
      display:grid;
      grid-template-columns:repeat(${Math.max(count,1)}, ${cardWidth}px);
      column-gap:${gap}px;
      justify-content:center;
      pointer-events:none;
    }
    .raising-line { position:relative; }
    .raising-line::before {
      content:"";
      position:absolute;
      top:0;
      bottom:0;
      left:50%;
      width:var(--wire-size);
      transform:translateX(-50%);
      background:var(--wire);
    }
    .raising-grid {
      width:100%;
      display:grid;
      grid-template-columns:repeat(${Math.max(count,1)}, ${cardWidth}px);
      column-gap:${gap}px;
      justify-content:center;
      align-items:start;
    }
    .raising-item {
      position:relative;
      display:flex;
      justify-content:center;
      align-items:flex-start;
      min-width:0;
    }
    .raising-item::before {
      content:"";
      position:absolute;
      top:0;
      left:50%;
      width:6px;
      height:6px;
      box-sizing:border-box;
      border:1px solid var(--wire);
      border-radius:50%;
      background:#fff;
      transform:translate(-50%,-50%);
      z-index:8;
    }
    .raising-item > .simple-card {
      width:${cardWidth}px;
      min-width:${cardWidth}px;
      max-width:${cardWidth}px;
      height:136px;
      min-height:136px;
      max-height:136px;
      margin:0;
    }
    .raising-view .simple-card:hover,
    .raising-view .simple-card:focus-visible { transform:none; }
    .raising-empty {
      width:min(520px,calc(100% - 32px));
      margin:24px auto 0;
      padding:24px;
      box-sizing:border-box;
      border:1px solid rgba(80,130,160,.28);
      color:#7893a4;
      text-align:center;
      background:rgba(40,80,105,.06);
    }
    @media(max-width:1100px) {
      .raising-view { padding-left:18px;padding-right:18px; }
      .raising-parent > .simple-card { width:380px;min-width:380px;max-width:380px; }
    }
  `;

  return (
    <div className="raising-view">
      <style>{raisingStyles}</style>
      <div className="raising-network">
        <div className="raising-parent">
          <SimpleFlowCard
            title="RAISING MAIN"
            subtitle={`${count} Configured Vertical Main${count === 1 ? "" : "s"}`}
            icon={Bolt}
          />
        </div>

        {count > 0 ? (
          <>
            <div className="raising-parent-stem" />
            <div className="raising-label">CONFIGURED RAISING MAINS</div>
            <div className="raising-distribution">
              <div className={`raising-bus ${count === 1 ? "raising-bus--single" : ""}`} />
              <div className="raising-lines">
                {equipment.map((item) => (
                  <div className="raising-line" key={`line-${item.id}`} />
                ))}
              </div>
            </div>
            <div className="raising-grid">
              {equipment.map((item) => (
                <div className="raising-item" key={item.id}>
                  <SimpleFlowCard
                    title={(item.name || "Raising Main").toUpperCase()}
                    subtitle={item.label || "Vertical Distribution"}
                    icon={Bolt}
                    equipment={item}
                    onClick={() => onOpenEquipment?.({
                      ...item,
                      telemetry: item.telemetry || demoTelemetry[item.id] || {
                        status:"ON", health:"HEALTHY", communication:true,
                        voltage:433, current:180, amps:180, powerFactor:0.98,
                        load:55, breakerState:"CLOSED", fault:false, trip:false, warning:false,
                      },
                    })}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="raising-empty">No Raising Main equipment is configured for this project.</div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   8. WING VIEW
========================================================= */

function WingView({
  topology,
  onOpenEquipment,
}) {
  const wings = Array.isArray(topology?.equipment)
    ? topology.equipment
    : [];

  const wingCount = wings.length;

  const canvasRef = useRef(null);
  const parentRef = useRef(null);
  const wingRefs = useRef({});

  const [wingGeometry, setWingGeometry] = useState({
    width: 0,
    height: 0,
    paths: [],
  });

  /*
    Keep normal project configurations inside the visible screen.
    The card width reduces gradually as the configured wing count
    increases, but never becomes too small to read.
  */
  const wingCardWidth =
    wingCount <= 2
      ? 230
      : wingCount <= 4
      ? 205
      : wingCount <= 6
      ? 180
      : 164;

  const wingGap =
    wingCount <= 2
      ? 52
      : wingCount <= 4
      ? 34
      : 22;

  const naturalWidth =
    wingCount * wingCardWidth +
    Math.max(0, wingCount - 1) * wingGap;

  const wingNetworkWidth = Math.max(
    720,
    Math.min(1280, naturalWidth)
  );

  const setWingRef = (id) => (node) => {
    if (node) wingRefs.current[id] = node;
    else delete wingRefs.current[id];
  };

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const parent = parentRef.current;

    if (!canvas || !parent || !wingCount) {
      setWingGeometry({
        width: canvas?.clientWidth || wingNetworkWidth,
        height: canvas?.clientHeight || 420,
        paths: [],
      });
      return undefined;
    }

    const measure = () => {
      const canvasRect = canvas.getBoundingClientRect();

      const edgePoint = (node, edge) => {
        if (!node) return null;

        const rect = node.getBoundingClientRect();

        return {
          x:
            rect.left -
            canvasRect.left +
            rect.width / 2,
          y:
            edge === "top"
              ? rect.top - canvasRect.top
              : rect.bottom - canvasRect.top,
        };
      };

      const parentBottom = edgePoint(parent, "bottom");

      const wingTops = wings
        .map((item) =>
          edgePoint(
            wingRefs.current[item.id],
            "top"
          )
        )
        .filter(Boolean);

      if (!parentBottom || !wingTops.length) {
        setWingGeometry({
          width: canvas.scrollWidth,
          height: canvas.scrollHeight,
          paths: [],
        });
        return;
      }

      const firstWingY = Math.min(
        ...wingTops.map((point) => point.y)
      );

      const busY =
        parentBottom.y +
        (firstWingY - parentBottom.y) * 0.5;

      const minX = Math.min(
        ...wingTops.map((point) => point.x)
      );

      const maxX = Math.max(
        ...wingTops.map((point) => point.x)
      );

      const paths = [];

      /* BUILDINGS -> common distribution bus */
      paths.push(
        `M ${parentBottom.x} ${parentBottom.y} V ${busY}`
      );

      /* Do not create an unnecessary horizontal segment
         when only one Wing exists. */
      if (wingTops.length > 1) {
        paths.push(
          `M ${minX} ${busY} H ${maxX}`
        );
      }

      /* Common bus -> exact top edge of every Wing card */
      wingTops.forEach((point) => {
        paths.push(
          `M ${point.x} ${busY} V ${point.y}`
        );
      });

      setWingGeometry({
        width: Math.max(
          canvas.scrollWidth,
          canvas.clientWidth
        ),
        height: Math.max(
          canvas.scrollHeight,
          canvas.clientHeight
        ),
        paths,
      });
    };

    let frame = requestAnimationFrame(measure);

    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    });

    observer.observe(canvas);
    observer.observe(parent);

    Object.values(wingRefs.current).forEach((node) => {
      if (node) observer.observe(node);
    });

    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [
    topology,
    wingCount,
    wingCardWidth,
    wingGap,
    wingNetworkWidth,
  ]);

  const wingStyles = `
    .wing-view {
      --wing-wire: #19b8cf;

      width: 100%;
      min-width: 0;
      height: 100%;
      min-height: 0;

      padding:
        clamp(14px, 2vh, 24px)
        clamp(18px, 2.5vw, 38px)
        24px;

      box-sizing: border-box;

      overflow-x: auto;
      overflow-y: auto;
    }

    .wing-network {
      position: relative;

      width: min(
        100%,
        ${wingNetworkWidth}px
      );

      min-width:
        ${Math.min(
          720,
          wingNetworkWidth
        )}px;

      min-height: 410px;

      margin: 0 auto;

      display: flex;
      flex-direction: column;
      align-items: stretch;

      box-sizing: border-box;
    }

    .wing-svg {
      position: absolute;
      inset: 0;

      z-index: 1;

      overflow: visible;
      pointer-events: none;
    }

    .wing-svg path {
      fill: none;

      stroke: var(--wing-wire);
      stroke-width: 2;

      stroke-linecap: square;
      stroke-linejoin: miter;

      vector-effect:
        non-scaling-stroke;
    }

    .wing-parent-wrap {
      position: relative;
      z-index: 3;

      display: flex;
      justify-content: center;
    }

    .wing-parent {
      position: relative;

      width: clamp(
        340px,
        36vw,
        430px
      );

      min-height: 108px;

      padding: 13px 20px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 2px;

      overflow: hidden;

      border:
        1px solid
        #367fb1;

      border-radius: 6px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #153e72 0%,
          #102f61 55%,
          #0d2853 100%
        );

      box-shadow:
        0 7px 18px
        rgba(11, 44, 75, .13);
    }

    .wing-parent::before {
      content: "";

      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 3px;

      background: #3eb9d0;
    }

    .wing-parent svg {
      margin-bottom: 2px;
      color: #72d1e2;
    }

    .wing-parent span {
      color: #8ec5ea;

      font-size: 8px;
      font-weight: 800;

      line-height: 1;

      letter-spacing: .16em;
    }

    .wing-parent h2 {
      margin: 5px 0 2px;

      color: #ffffff;

      font-size: 19px;
      font-weight: 700;

      line-height: 1.15;
    }

    .wing-parent p {
      margin: 0;

      color: #b3cada;

      font-size: 9px;
      font-weight: 550;
    }

    /*
      This corridor belongs only to the SVG connector.
      No CSS ::before / ::after conductor is drawn here.
    */
    .wing-flow-corridor {
      height: 92px;
      flex: 0 0 92px;
    }

    .wing-grid {
      position: relative;
      z-index: 3;

      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(wingCount, 1)},
          minmax(0, 1fr)
        );

      column-gap: ${wingGap}px;

      align-items: start;

      box-sizing: border-box;
    }

    .wing-branch {
      min-width: 0;

      display: flex;
      justify-content: center;
      align-items: flex-start;
    }

    .wing-branch > .eq-card {
      width: min(
        100%,
        ${wingCardWidth}px
      );

      min-width: 0;
      max-width: ${wingCardWidth}px;

      height: 136px;
      min-height: 136px;
      max-height: 136px;

      margin: 0;

      box-sizing: border-box;

      transform: none !important;
    }

    .wing-view .eq-card:hover,
    .wing-view .eq-card:focus-visible {
      transform: none !important;
    }

    .wing-empty {
      position: relative;
      z-index: 3;

      margin-top: 72px;

      text-align: center;

      color: #7892a4;

      font-size: 12px;
      font-weight: 650;
    }

    @media (max-width: 1100px) {
      .wing-view {
        padding-left: 16px;
        padding-right: 16px;
      }

      .wing-network {
        /*
          On a small viewport preserve the electrical geometry.
          Scrolling is preferable to overlapping cards.
        */
        width:
          ${Math.max(
            720,
            naturalWidth
          )}px;

        min-width:
          ${Math.max(
            720,
            naturalWidth
          )}px;
      }
    }
  `;

  return (
    <div className="wing-view">
      <style>{wingStyles}</style>

      <div
        ref={canvasRef}
        className="wing-network"
      >
        <svg
          className="wing-svg"
          width={
            wingGeometry.width ||
            wingNetworkWidth
          }
          height={
            wingGeometry.height ||
            410
          }
          viewBox={`0 0 ${
            wingGeometry.width ||
            wingNetworkWidth
          } ${
            wingGeometry.height ||
            410
          }`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {wingGeometry.paths.map(
            (path, index) => (
              <path
                key={`${path}-${index}`}
                d={path}
              />
            )
          )}
        </svg>

        <div className="wing-parent-wrap">
          <div
            ref={parentRef}
            className="wing-parent"
          >
            <Building2
              size={26}
              strokeWidth={1.8}
            />

            <span>
              MAIN BUILDING DISTRIBUTION
            </span>

            <h2>
              BUILDINGS
            </h2>

            <p>
              {wingCount} CONFIGURED{" "}
              {wingCount === 1
                ? "WING"
                : "WINGS"}
            </p>
          </div>
        </div>

        {wingCount > 0 ? (
          <>
            <div className="wing-flow-corridor" />

            <div className="wing-grid">
              {wings.map((item) => (
                <div
                  key={item.id}
                  ref={setWingRef(item.id)}
                  className="wing-branch"
                >
                  <EquipmentCard
                    equipment={item}
                    onOpen={onOpenEquipment}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="wing-empty">
            NO WINGS CONFIGURED
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   9. DG VIEW
========================================================= */

function DGView({
  topology,
  onOpenEquipment,
}) {
  const generators =
    Array.isArray(topology?.equipment)
      ? topology.equipment
      : [];

  const dgCount =
    generators.length;

  const dgCardWidth = 142;
  const dgGap = 20;
  const dgNetworkWidth =
    Math.max(
      760,
      dgCount * dgCardWidth +
        Math.max(dgCount - 1, 0) * dgGap
    );

  const dgStyles = `
    /* =====================================================
       DG ROOT
    ===================================================== */

    .dg-view {
      --wire: #19b8cf;
      --wire-size: 2px;

      --dg-card-width: ${dgCardWidth}px;
      --dg-card-height: 136px;

      width: 100%;
      min-width: 0;
      min-height: 100%;

      margin: 0;

      padding:
        clamp(14px, 2vh, 24px)
        clamp(16px, 2vw, 34px)
        26px;

      box-sizing: border-box;

      overflow-x: auto;
    }


    /* =====================================================
       COMPLETE DG NETWORK

       One common coordinate system controls:
       - Parent
       - Main stem
       - Horizontal bus
       - DG branches
       - DG cards
    ===================================================== */

    .dg-network {
      width: ${dgNetworkWidth}px;
      min-width: ${dgNetworkWidth}px;

      margin: 0 auto;
    }


    /* =====================================================
       DG PARENT
    ===================================================== */

    .dg-parent {
      width: 100%;

      display: flex;

      align-items: center;
      justify-content: center;
    }


    .dg-parent > .simple-card {
      width: 500px;
      min-width: 500px;
      max-width: 500px;

      height: 112px;
      min-height: 112px;
      max-height: 112px;

      margin: 0;
    }


    /* =====================================================
       PARENT → DG BUS
    ===================================================== */

    .dg-main-stem {
      width: var(--wire-size);
      height: 38px;

      margin: 0 auto;

      background: var(--wire);
    }


    /* =====================================================
       DG DISTRIBUTION

                         DG PLANT
                            │
                            │
          ──────────────────┼──────────────────
          │    │    │    │    │    │    │
         DG1  DG2  DG3  ...
    ===================================================== */

    .dg-distribution {
      position: relative;

      width: 100%;

      height: 38px;
      min-height: 38px;
    }


    /* =====================================================
       HORIZONTAL DG BUS

       The bus starts and ends exactly at the first
       and last DG branch centers.
    ===================================================== */

    .dg-bus {
      position: absolute;

      top: 0;

      left:
        ${dgCardWidth / 2}px;

      right:
        ${dgCardWidth / 2}px;

      height: var(--wire-size);

      background: var(--wire);
    }


    .dg-bus--single {
      left: 50%;
      right: auto;
      width: var(--wire-size);
      transform: translateX(-50%);
    }


    /* =====================================================
       EXACT VERTICAL BRANCHES

       IMPORTANT:
       This grid is identical to .dg-grid below.
    ===================================================== */

    .dg-lines {
      position: absolute;

      inset: 0;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(
            dgCount,
            1
          )},
          ${dgCardWidth}px
        );

      column-gap: ${dgGap}px;

      pointer-events: none;
    }


    .dg-line {
      position: relative;
    }


    .dg-line::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width: var(--wire-size);

      transform:
        translateX(-50%);

      background: var(--wire);
    }


    /* =====================================================
       DG CARD GRID

       Same exact columns as connector branches.

       No gap is used in the geometry.
       Spacing comes naturally from the column width.
    ===================================================== */

    .dg-grid {
      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(
            dgCount,
            1
          )},
          ${dgCardWidth}px
        );

      column-gap: ${dgGap}px;
      row-gap: 0;

      align-items: start;
    }


    .dg-branch {
      position: relative;

      min-width: 0;

      display: flex;

      align-items: flex-start;
      justify-content: center;
    }


    /* =====================================================
       CONNECTOR / CARD JUNCTION
    ===================================================== */

    .dg-branch::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing: border-box;

      border:
        1px solid
        var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 8;
    }


    /* =====================================================
       DG CARDS
    ===================================================== */

    .dg-branch > .simple-card {
      width: var(--dg-card-width);
      min-width: var(--dg-card-width);
      max-width: var(--dg-card-width);

      height: var(--dg-card-height);
      min-height: var(--dg-card-height);
      max-height: var(--dg-card-height);

      margin: 0;

      padding: 10px 8px;

      box-sizing: border-box;
    }


    .dg-branch .simple-card h3 {
      margin: 2px 0;

      font-size: 14px;
      line-height: 17px;

      white-space: normal;

      text-align: center;
    }


    /* =====================================================
       NO CARD MOVEMENT

       Connector must remain attached while hovering.
    ===================================================== */

    .dg-view .simple-card:hover,
    .dg-view .simple-card:focus-visible {
      transform: none;
    }


    /* =====================================================
       LARGE DESKTOP
    ===================================================== */

    @media (min-width: 1500px) {

      .dg-view {
        --dg-card-height: 142px;
      }


      .dg-network {
        width: ${dgNetworkWidth}px;
        min-width: ${dgNetworkWidth}px;
      }


      .dg-parent > .simple-card {
        width: 540px;
        min-width: 540px;
        max-width: 540px;

        height: 116px;
        min-height: 116px;
        max-height: 116px;
      }


      .dg-branch .simple-card h3 {
        font-size: 15px;
      }
    }


    /* =====================================================
       NORMAL LAPTOP
    ===================================================== */

    @media (
      min-width: 1101px
    ) and (
      max-width: 1499px
    ) {

      .dg-view {
        --dg-card-height: 136px;
      }


      .dg-network {
        width: ${dgNetworkWidth}px;
        min-width: ${dgNetworkWidth}px;
      }


      .dg-parent > .simple-card {
        width: 480px;
        min-width: 480px;
        max-width: 480px;

        height: 108px;
        min-height: 108px;
        max-height: 108px;
      }
    }


    /* =====================================================
       SMALL LAPTOP / TABLET

       DG cards should not be crushed into a small
       viewport.

       Preserve the engineering topology and allow
       horizontal scrolling.
    ===================================================== */

    @media (max-width: 1100px) {

      .dg-view {
        --dg-card-height: 132px;

        padding-left: 16px;
        padding-right: 16px;
      }


      .dg-network {
        width: ${dgNetworkWidth}px;
        min-width: ${dgNetworkWidth}px;
      }


      .dg-parent > .simple-card {
        width: 450px;
        min-width: 450px;
        max-width: 450px;

        height: 106px;
        min-height: 106px;
        max-height: 106px;
      }


      .dg-branch .simple-card h3 {
        font-size: 13px;
      }
    }
  `;


  return (
    <div className="dg-view">
      <style>
        {dgStyles}
      </style>


      <div className="dg-network">

        {/* ===============================================
            DIESEL GENERATOR PLANT
        ================================================ */}

        <div className="dg-parent">

          <SimpleFlowCard
            title="DIESEL GENERATOR PLANT"
            eyebrow="EMERGENCY POWER PANEL"
            icon={CirclePower}
            live={false}
          />

        </div>


        {/* ===============================================
            PARENT → MAIN DG BUS
        ================================================ */}

        <div className="dg-main-stem" />


        {/* ===============================================
            HORIZONTAL BUS + EXACT BRANCHES
        ================================================ */}

        <div className="dg-distribution">

          <div
            className={`dg-bus ${
              dgCount === 1
                ? "dg-bus--single"
                : ""
            }`}
          />


          <div className="dg-lines">

            {generators.map(
              (item) => (

                <div
                  className="dg-line"
                  key={`line-${item.id}`}
                />

              )
            )}

          </div>

        </div>


        {/* ===============================================
            DG EQUIPMENT
        ================================================ */}

        <div className="dg-grid">

          {generators.map(
            (item) => (

              <div
                className="dg-branch"
                key={item.id}
              >

                <SimpleFlowCard
                  title={item.name}
                  eyebrow="DIESEL GENERATOR"
                  subtitle={item.label}
                  icon={CirclePower}
                  equipment={item}

                  onClick={() =>
                    onOpenEquipment?.({
                      ...item,

                      telemetry:
                        demoTelemetry[
                          item.id
                        ],
                    })
                  }
                />

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   10. HVAC VIEW
========================================================= */

function HVACView({
  topology,
  onOpenEquipment,
}) {
  const equipment =
    topology?.equipment || [];

  const hvacCount =
    equipment.length;

  const hvacCardWidth = 190;
  const hvacGap = 34;
  const hvacNetworkWidth =
    hvacCount > 0
      ? Math.max(
          560,
          hvacCount * hvacCardWidth +
            Math.max(
              hvacCount - 1,
              0
            ) *
              hvacGap
        )
      : 560;

  const hvacStyles = `
    .hvac-view {
      width:min(560px,92%);min-height:270px;margin:auto;padding:34px;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      text-align:center;border:1px solid #b9c9d5;border-radius:8px;background:#eef3f6;
    }
    .hvac-view__icon {
      width:58px;height:58px;margin-bottom:14px;display:grid;place-items:center;
      border:1px solid #397da9;border-radius:7px;color:#d7efff;background:#173f75;
    }
    .hvac-view span { color:#6f8799;font-size:8px;font-weight:800;letter-spacing:.16em; }
    .hvac-view h2 { margin:7px 0 5px;color:#17324a;font-size:21px; }
    .hvac-view p { margin:0;color:#708291;font-size:11px; }
    .hvac-view strong {
      margin-top:18px;padding:7px 12px;border:1px solid #c6d3dc;border-radius:5px;
      color:#5f7484;background:#fff;font-size:9px;letter-spacing:.1em;
    }
    .hvac-flow-view {
      --wire:#397da9;
      --wire-size:2px;
      --hvac-card-width:190px;
      width:100%;
      min-width:0;
      min-height:100%;
      margin:0;
      padding:clamp(14px,2vh,24px) clamp(18px,3vw,42px) 28px;
      box-sizing:border-box;
      overflow-x:auto;
    }
    .hvac-network {
      width:var(--hvac-network-width);
      min-width:var(--hvac-network-width);
      margin:0 auto;
    }
    .hvac-parent {
      display:flex;
      justify-content:center;
    }
    .hvac-parent > .simple-card {
      width:420px;
      min-width:420px;
      max-width:420px;
      height:110px;
      min-height:110px;
      max-height:110px;
      margin:0;
    }
    .hvac-main-stem {
      width:var(--wire-size);
      height:36px;
      margin:0 auto;
      background:var(--wire);
    }
    .hvac-distribution {
      position:relative;
      width:100%;
      height:36px;
      min-height:36px;
    }
    .hvac-bus {
      position:absolute;
      top:0;
      left:calc(100% / (var(--hvac-count) * 2));
      right:calc(100% / (var(--hvac-count) * 2));
      height:var(--wire-size);
      background:var(--wire);
    }
    .hvac-bus--single {
      left:50%;
      right:50%;
    }
    .hvac-lines,
    .hvac-grid {
      display:grid;
      grid-template-columns:repeat(var(--hvac-count),var(--hvac-card-width));
      justify-content:space-between;
      gap:0;
    }
    .hvac-lines {
      position:absolute;
      inset:0;
      pointer-events:none;
    }
    .hvac-line,
    .hvac-branch {
      position:relative;
      display:flex;
      justify-content:center;
    }
    .hvac-line::before {
      content:"";
      position:absolute;
      top:0;
      bottom:0;
      left:50%;
      width:var(--wire-size);
      transform:translateX(-50%);
      background:var(--wire);
    }
    .hvac-branch::before {
      content:"";
      position:absolute;
      top:0;
      left:50%;
      width:6px;
      height:6px;
      box-sizing:border-box;
      border:1px solid var(--wire);
      border-radius:50%;
      background:#fff;
      transform:translate(-50%,-50%);
      z-index:8;
    }
    .hvac-branch > .eq-card {
      width:var(--hvac-card-width);
      min-width:var(--hvac-card-width);
      max-width:var(--hvac-card-width);
      height:136px;
      min-height:136px;
      max-height:136px;
      margin:0;
    }
    .hvac-flow-view .eq-card:hover,
    .hvac-flow-view .eq-card:focus-visible {
      transform:none;
    }
  `;

  if (hvacCount > 0) {
    return (
      <div className="hvac-flow-view">
        <style>{hvacStyles}</style>

        <div
          className="hvac-network"
          style={{
            "--hvac-count": hvacCount,
            "--hvac-network-width": `${hvacNetworkWidth}px`,
          }}
        >
          <div className="hvac-parent">
            <SimpleFlowCard
              title="HVAC COOLING PLANT"
              subtitle="Configured HVAC Equipment"
              eyebrow="MECHANICAL SERVICES"
              icon={Fan}
            />
          </div>

          <div className="hvac-main-stem" />

          <div className="hvac-distribution">
            <div
              className={`hvac-bus ${
                hvacCount === 1
                  ? "hvac-bus--single"
                  : ""
              }`}
            />

            <div className="hvac-lines">
              {equipment.map((item) => (
                <div
                  className="hvac-line"
                  key={`line-${item.id}`}
                />
              ))}
            </div>
          </div>

          <div className="hvac-grid">
            {equipment.map((item) => (
              <div
                className="hvac-branch"
                key={item.id}
              >
                <EquipmentCard
                  equipment={item}
                  onOpen={onOpenEquipment}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hvac-view">
      <style>{hvacStyles}</style>
      <span className="hvac-view__icon"><Fan size={30} /></span>
      <span>MECHANICAL SERVICES</span>
      <h2>HVAC COOLING PLANT</h2>
      <p>No internal HVAC equipment is configured for this flow.</p>
      <strong>0 EQUIPMENT</strong>
    </div>
  );
}

/* =========================================================
   11. WATER MANAGEMENT VIEW
========================================================= */

function WaterView({
  topology,
  onOpenEquipment,
}) {
  const [showTanks, setShowTanks] =
    useState(false);

  const main =
    topology.equipment.find(
      (item) =>
        item.type === "water-main"
    );

  const stp =
    topology.equipment.find(
      (item) =>
        item.type === "stp"
    );

  const wtp =
    topology.equipment.find(
      (item) =>
        item.type === "wtp"
    );

  const tanks =
    topology.equipment.filter(
      (item) =>
        item.type === "tank"
    );

  const waterBranches = [
    stp
      ? {
          id: "stp",
          kind: "stp",
          equipment: stp,
        }
      : null,
    wtp
      ? {
          id: "wtp",
          kind: "wtp",
          equipment: wtp,
        }
      : null,
    tanks.length > 0
      ? {
          id: "water-tanks",
          kind: "tanks",
        }
      : null,
  ].filter(Boolean);

  const waterBranchCount =
    waterBranches.length;

  const tankCount =
    tanks.length;

  const waterNetworkWidth =
    Math.max(
      520,
      waterBranchCount * 240
    );

  const tankNetworkWidth =
    Math.max(
      520,
      tankCount * 220
    );


  const waterStyles = `
    /* =====================================================
       WATER MANAGEMENT ROOT
    ===================================================== */

    .water-view {
      --wire: #249bb5;
      --wire-size: 2px;

      --water-card-width: 220px;
      --water-card-height: 136px;

      --tank-card-width: 190px;
      --tank-card-height: 136px;

      width: 100%;
      min-width: 0;
      min-height: 100%;

      margin: 0;

      padding:
        clamp(14px, 2vh, 24px)
        clamp(18px, 3vw, 42px)
        28px;

      box-sizing: border-box;

      overflow-x: auto;
    }


    /* =====================================================
       COMPLETE MAIN NETWORK
    ===================================================== */

    .water-network {
      width: var(--water-network-width);
      min-width: var(--water-network-width);

      margin: 0 auto;
    }


    /* =====================================================
       WATER MANAGEMENT PARENT
    ===================================================== */

    .water-parent {
      width: 100%;

      display: flex;

      align-items: center;
      justify-content: center;
    }


    .water-parent > .simple-card {
      width: 440px;
      min-width: 440px;
      max-width: 440px;

      height: 112px;
      min-height: 112px;
      max-height: 112px;

      margin: 0;
    }


    /* =====================================================
       PARENT → MAIN WATER BUS
    ===================================================== */

    .water-main-stem {
      width: var(--wire-size);
      height: 38px;

      margin: 0 auto;

      background: var(--wire);
    }


    /* =====================================================
       MAIN WATER DISTRIBUTION

                    WATER MANAGEMENT
                           │
                           │
             ──────────────┼──────────────
             │             │             │
            STP           WTP       WATER TANKS
    ===================================================== */

    .water-distribution {
      position: relative;

      width: 100%;

      height: 38px;
      min-height: 38px;
    }


    /* =====================================================
       MAIN HORIZONTAL BUS

       Three equal columns:

       STP center         = 1/6
       WTP center         = 3/6
       Water Tanks center = 5/6

       Bus starts at STP and ends at Water Tanks.
    ===================================================== */

    .water-bus {
      position: absolute;

      top: 0;

      left:
        calc(
          100% / (var(--water-branch-count) * 2)
        );

      right:
        calc(
          100% / (var(--water-branch-count) * 2)
        );

      height: var(--wire-size);

      background: var(--wire);
    }

    .water-bus--single {
      left: 50%;
      right: 50%;
    }


    /* =====================================================
       EXACT THREE VERTICAL BRANCHES
    ===================================================== */

    .water-lines {
      position: absolute;

      inset: 0;

      display: grid;

      grid-template-columns:
        repeat(
          var(--water-branch-count),
          minmax(0, 1fr)
        );

      pointer-events: none;
    }


    .water-line {
      position: relative;
    }


    .water-line::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width: var(--wire-size);

      transform:
        translateX(-50%);

      background: var(--wire);
    }


    /* =====================================================
       MAIN WATER CARD GRID

       Same exact 3-column geometry as .water-lines.
    ===================================================== */

    .water-grid {
      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          var(--water-branch-count),
          minmax(0, 1fr)
        );

      gap: 0;

      align-items: start;
    }


    .water-branch {
      position: relative;

      min-width: 0;

      display: flex;

      align-items: flex-start;
      justify-content: center;
    }


    /* =====================================================
       CARD CONNECTION POINT
    ===================================================== */

    .water-branch::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing: border-box;

      border:
        1px solid
        var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 8;
    }


    /* =====================================================
       STP / WTP CARDS
    ===================================================== */

    .water-branch > .simple-card {
      width: var(--water-card-width);
      min-width: var(--water-card-width);
      max-width: var(--water-card-width);

      height: var(--water-card-height);
      min-height: var(--water-card-height);
      max-height: var(--water-card-height);

      margin: 0;

      box-sizing: border-box;
    }


    /* =====================================================
       WATER TANK GROUP CARD
    ===================================================== */

    .water-tank-group {
      position: relative;

      width: var(--water-card-width);
      min-width: var(--water-card-width);
      max-width: var(--water-card-width);

      height: var(--water-card-height);
      min-height: var(--water-card-height);
      max-height: var(--water-card-height);

      margin: 0;

      padding: 12px 14px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 3px;

      overflow: hidden;

      border:
        1px solid #327ba2;

      border-radius: 6px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #174766,
          #123b58 55%,
          #0e3049
        );

      box-shadow:
        0 5px 14px
        rgba(10, 39, 59, .13);

      cursor: pointer;

      transition:
        border-color .15s ease,
        box-shadow .15s ease;
    }


    .water-tank-group::before {
      content: "";

      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 3px;

      background: #3eb9d0;
    }


    .water-tank-group:hover,
    .water-tank-group:focus-visible {
      transform: none;

      outline: none;

      border-color: #59bad0;

      box-shadow:
        0 7px 18px
        rgba(10, 42, 64, .18);
    }


    .water-tank-group svg {
      margin: 3px 0;

      color: #71d0e2;
    }


    .water-tank-group span {
      color: #87bddd;

      font-size: 7px;
      font-weight: 800;

      line-height: 1;

      letter-spacing: .12em;
    }


    .water-tank-group h3 {
      margin: 3px 0 1px;

      color: #ffffff;

      font-size: 15px;
      font-weight: 700;

      line-height: 18px;
    }


    .water-tank-group p {
      margin: 0;

      color: #b5cede;

      font-size: 8px;

      line-height: 12px;
    }


    .water-tank-group strong {
      margin-top: 5px;

      color: #73d0e1;

      font-size: 7px;
      font-weight: 800;

      line-height: 1;

      letter-spacing: .05em;
    }


    /* =====================================================
       DON'T MOVE FLOW CARDS ON HOVER
    ===================================================== */

    .water-view .simple-card:hover,
    .water-view .simple-card:focus-visible,
    .water-view .eq-card:hover,
    .water-view .eq-card:focus-visible {
      transform: none;
    }


    /* =====================================================
       WATER TANK SUBVIEW HEADER
    ===================================================== */

    .water-tanks-head {
      width: min(100%, 1040px);

      margin:
        0 auto
        20px;

      display: flex;

      align-items: center;

      gap: 14px;
    }


    .water-tanks-head button {
      height: 36px;

      padding:
        0 12px;

      display: inline-flex;

      align-items: center;

      gap: 6px;

      border:
        1px solid #426780;

      border-radius: 5px;

      color: #dce9f2;

      background: #173b56;

      cursor: pointer;

      transition:
        background .15s ease,
        border-color .15s ease;
    }


    .water-tanks-head button:hover,
    .water-tanks-head button:focus-visible {
      outline: none;

      background: #19445f;

      border-color: #4da8bd;
    }


    .water-tanks-head h2 {
      margin: 0;

      color: #17354b;

      font-size: 21px;
      font-weight: 700;
    }


    /* =====================================================
       COMPLETE TANK NETWORK
    ===================================================== */

    .water-tanks-network {
      width: var(--tank-network-width);
      min-width: var(--tank-network-width);

      margin: 0 auto;
    }


    /* =====================================================
       WATER TANKS PARENT
    ===================================================== */

    .water-tanks-parent {
      width: 100%;

      display: flex;

      justify-content: center;
      align-items: center;
    }


    .water-tanks-parent > .simple-card {
      width: 420px;
      min-width: 420px;
      max-width: 420px;

      height: 110px;
      min-height: 110px;
      max-height: 110px;

      margin: 0;
    }


    /* =====================================================
       WATER TANK PARENT → BUS
    ===================================================== */

    .water-tanks-main-stem {
      width: var(--wire-size);
      height: 36px;

      margin: 0 auto;

      background: var(--wire);
    }


    /* =====================================================
       FOUR TANK DISTRIBUTION

                       WATER TANKS
                            │
                            │
             ───────────────┼───────────────
             │        │          │         │
           TANK1    TANK2      TANK3     TANK4
    ===================================================== */

    .water-tanks-distribution {
      position: relative;

      width: 100%;

      height: 36px;
      min-height: 36px;
    }


    /*
       Four equal columns.

       Tank 1 center = 1/8
       Tank 4 center = 7/8
    */

    .water-tanks-bus {
      position: absolute;

      top: 0;

      left:
        calc(
          100% / (var(--tank-count) * 2)
        );

      right:
        calc(
          100% / (var(--tank-count) * 2)
        );

      height: var(--wire-size);

      background: var(--wire);
    }

    .water-tanks-bus--single {
      left: 50%;
      right: 50%;
    }


    /* =====================================================
       EXACT FOUR TANK BRANCHES
    ===================================================== */

    .water-tank-lines {
      position: absolute;

      inset: 0;

      display: grid;

      grid-template-columns:
        repeat(
          var(--tank-count),
          minmax(0, 1fr)
        );

      pointer-events: none;
    }


    .water-tank-line {
      position: relative;
    }


    .water-tank-line::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width: var(--wire-size);

      transform:
        translateX(-50%);

      background: var(--wire);
    }


    /* =====================================================
       TANK CARD GRID

       Same exact 4-column geometry as tank lines.
    ===================================================== */

    .water-tanks-grid {
      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          var(--tank-count),
          minmax(0, 1fr)
        );

      gap: 0;

      align-items: start;
    }


    .water-tank {
      position: relative;

      min-width: 0;

      display: flex;

      align-items: flex-start;
      justify-content: center;
    }


    /* =====================================================
       TANK CARD CONNECTION
    ===================================================== */

    .water-tank::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing: border-box;

      border:
        1px solid
        var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 8;
    }


    /* =====================================================
       TANK EQUIPMENT CARDS
    ===================================================== */

    .water-tank > .eq-card {
      width: var(--tank-card-width);
      min-width: var(--tank-card-width);
      max-width: var(--tank-card-width);

      height: var(--tank-card-height);
      min-height: var(--tank-card-height);
      max-height: var(--tank-card-height);

      margin: 0;
    }


    /* =====================================================
       LARGE DESKTOP
    ===================================================== */

    @media (min-width: 1500px) {

      .water-view {
        --water-card-width: 230px;
        --water-card-height: 142px;

        --tank-card-width: 200px;
        --tank-card-height: 142px;
      }


      .water-network,
      .water-tanks-network {
        max-width: none;
      }


      .water-parent > .simple-card {
        width: 460px;
        min-width: 460px;
        max-width: 460px;

        height: 116px;
        min-height: 116px;
        max-height: 116px;
      }


      .water-tanks-parent > .simple-card {
        width: 440px;
        min-width: 440px;
        max-width: 440px;

        height: 114px;
        min-height: 114px;
        max-height: 114px;
      }
    }


    /* =====================================================
       NORMAL LAPTOP
    ===================================================== */

    @media (
      min-width: 1101px
    ) and (
      max-width: 1499px
    ) {

      .water-view {
        --water-card-width: 210px;
        --water-card-height: 136px;

        --tank-card-width: 190px;
        --tank-card-height: 136px;
      }


      .water-network,
      .water-tanks-network {
        max-width: none;
      }


      .water-parent > .simple-card {
        width: 420px;
        min-width: 420px;
        max-width: 420px;

        height: 108px;
        min-height: 108px;
        max-height: 108px;
      }


      .water-tanks-parent > .simple-card {
        width: 400px;
        min-width: 400px;
        max-width: 400px;

        height: 108px;
        min-height: 108px;
        max-height: 108px;
      }
    }


    /* =====================================================
       SMALL LAPTOP / TABLET

       Keep the topology intact.
       Horizontal scrolling is preferable to
       compressing the cards/flow lines.
    ===================================================== */

    @media (max-width: 1100px) {

      .water-view {
        --water-card-width: 195px;
        --water-card-height: 132px;

        --tank-card-width: 182px;
        --tank-card-height: 132px;

        padding-left: 18px;
        padding-right: 18px;
      }


      .water-network,
      .water-tanks-network {
        width: var(--water-network-width);
        min-width: var(--water-network-width);
      }

      .water-tanks-network {
        width: var(--tank-network-width);
        min-width: var(--tank-network-width);
      }


      .water-parent > .simple-card {
        width: 390px;
        min-width: 390px;
        max-width: 390px;

        height: 106px;
        min-height: 106px;
        max-height: 106px;
      }


      .water-tanks-parent > .simple-card {
        width: 380px;
        min-width: 380px;
        max-width: 380px;

        height: 106px;
        min-height: 106px;
        max-height: 106px;
      }
    }
  `;


  /* =====================================================
     WATER TANK SUBVIEW
  ===================================================== */

  if (showTanks) {
    return (
      <div className="water-view">
        <style>
          {waterStyles}
        </style>


        {/* ===============================================
            HEADER
        ================================================ */}

        <div className="water-tanks-head">

          <button
            type="button"
            onClick={() =>
              setShowTanks(false)
            }
          >
            <ArrowLeft size={15} />

            Water Management
          </button>


          <h2>
            WATER TANKS
          </h2>

        </div>


        <div
          className="water-tanks-network"
          style={{
            "--tank-count": tankCount,
            "--tank-network-width": `${tankNetworkWidth}px`,
          }}
        >

          {/* =============================================
              WATER TANKS PARENT
          ============================================== */}

          <div className="water-tanks-parent">

            <SimpleFlowCard
              title="WATER TANKS"
              subtitle="Tank Level Monitoring"
              eyebrow="STORAGE DISTRIBUTION"
              icon={Droplets}
            />

          </div>


          {/* =============================================
              PARENT → TANK BUS
          ============================================== */}

          <div className="water-tanks-main-stem" />


          {/* =============================================
              FOUR-WAY DISTRIBUTION
          ============================================== */}

          <div className="water-tanks-distribution">

            <div
              className={`water-tanks-bus ${
                tankCount === 1
                  ? "water-tanks-bus--single"
                  : ""
              }`}
            />


            <div className="water-tank-lines">

              {tanks.map(
                (tank) => (

                  <div
                    className="water-tank-line"
                    key={`line-${tank.id}`}
                  />

                )
              )}

            </div>

          </div>


          {/* =============================================
              TANK 1 / 2 / 3 / 4
          ============================================== */}

          <div className="water-tanks-grid">

            {tanks.map(
              (tank) => (

                <div
                  className="water-tank"
                  key={tank.id}
                >

                  <EquipmentCard
                    equipment={tank}
                    onOpen={
                      onOpenEquipment
                    }
                  />

                </div>

              )
            )}

          </div>

        </div>

      </div>
    );
  }


  /* =====================================================
     MAIN WATER MANAGEMENT VIEW
  ===================================================== */

  return (
    <div className="water-view">
      <style>
        {waterStyles}
      </style>


      <div
        className="water-network"
        style={{
          "--water-branch-count":
            waterBranchCount,
          "--water-network-width": `${waterNetworkWidth}px`,
        }}
      >

        {/* ===============================================
            CENTRAL WATER MANAGEMENT
        ================================================ */}

        <div className="water-parent">

          <SimpleFlowCard
            title="WATER MANAGEMENT"
            subtitle="CENTRAL WATER MONITORING"
            eyebrow="CENTRAL WATER SYSTEM"
            icon={Droplets}
            equipment={main}

            onClick={
              main
                ? () =>
                    onOpenEquipment?.({
                      ...main,

                      telemetry:
                        demoTelemetry[
                          main.id
                        ],
                    })
                : undefined
            }
          />

        </div>


        {/* ===============================================
            CENTRAL WATER → DISTRIBUTION
        ================================================ */}

        {waterBranchCount > 0 && (
          <div className="water-main-stem" />
        )}


        {/* ===============================================
            MAIN 3-WAY BUS
        ================================================ */}

        {waterBranchCount > 0 && (
        <div className="water-distribution">

          <div
            className={`water-bus ${
              waterBranchCount === 1
                ? "water-bus--single"
                : ""
            }`}
          />


          <div className="water-lines">

            {waterBranches.map(
              (branch) => (
                <div
                  className="water-line"
                  key={`line-${branch.id}`}
                />
              )
            )}

          </div>

        </div>
        )}


        {/* ===============================================
            STP / WTP / WATER TANKS
        ================================================ */}

        {waterBranchCount > 0 && (
          <div className="water-grid">

            {waterBranches.map(
              (branch) => {
                if (
                  branch.kind === "tanks"
                ) {
                  return (
                    <div
                      className="water-branch"
                      key={branch.id}
                    >
                      <button
                        type="button"
                        className="water-tank-group"
                        onClick={() =>
                          setShowTanks(true)
                        }
                      >
                        <span>
                          STORAGE DISTRIBUTION
                        </span>

                        <Droplets
                          size={22}
                          strokeWidth={1.8}
                        />

                        <h3>
                          WATER TANKS
                        </h3>

                        <p>
                          TANK LEVEL MONITORING
                        </p>

                        <strong>
                          VIEW {tankCount} TANK{tankCount === 1 ? "" : "S"} →
                        </strong>
                      </button>
                    </div>
                  );
                }

                const item =
                  branch.equipment;

                return (
                  <div
                    className="water-branch"
                    key={branch.id}
                  >
                    <SimpleFlowCard
                      title={
                        branch.kind === "stp"
                          ? "STP"
                          : "WTP"
                      }
                      eyebrow={
                        branch.kind === "stp"
                          ? "SEWAGE TREATMENT PLANT"
                          : "WATER TREATMENT PLANT"
                      }
                      subtitle={
                        branch.kind === "stp"
                          ? "Sewage Water Treatment"
                          : "Water Treatment"
                      }
                      icon={Droplets}
                      equipment={item}
                      onClick={() =>
                        onOpenEquipment?.({
                          ...item,
                          telemetry:
                            demoTelemetry[
                              item.id
                            ],
                        })
                      }
                    />
                  </div>
                );
              }
            )}

          </div>
        )}

      </div>

    </div>
  );
}

/* =========================================================
   12. FIRE VIEW
========================================================= */
function FireView({
  topology,
  onOpenEquipment,
}) {
  const equipment =
    topology?.equipment || [];

  const fireCount =
    equipment.length;

  const fireNetworkWidth =
    Math.max(
      520,
      fireCount * 250
    );

  const fireStyles = `
    /* =====================================================
       FIRE ROOT
    ===================================================== */

    .fire-view {
      --wire: #b55b66;
      --wire-size: 2px;

      --fire-card-width: 210px;
      --fire-card-height: 136px;

      width: 100%;
      min-width: 0;
      min-height: 100%;

      margin: 0;

      padding:
        clamp(14px, 2vh, 24px)
        clamp(18px, 3vw, 42px)
        28px;

      box-sizing: border-box;

      overflow-x: auto;
    }


    /* =====================================================
       COMPLETE FIRE NETWORK

       Parent, bus, branches and cards all share
       the same coordinate system.
    ===================================================== */

    .fire-network {
      width: var(--fire-network-width);
      min-width: var(--fire-network-width);

      margin: 0 auto;
    }


    /* =====================================================
       FIRE PROTECTION PARENT
    ===================================================== */

    .fire-parent {
      position: relative;

      width: 430px;
      min-width: 430px;
      max-width: 430px;

      height: 110px;
      min-height: 110px;

      margin: 0 auto;

      padding: 13px 20px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 2px;

      overflow: hidden;

      border:
        1px solid #a64f5d;

      border-radius: 6px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #663442 0%,
          #572c39 55%,
          #48232f 100%
        );

      box-shadow:
        0 7px 18px
        rgba(74, 30, 40, .14);

      z-index: 5;
    }


    .fire-parent::before {
      content: "";

      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 3px;

      background: #cf6c78;
    }


    .fire-parent svg {
      flex: 0 0 auto;

      margin-bottom: 2px;

      color: #f0a8b2;
    }


    .fire-parent span {
      color: #efb8c0;

      font-size: 8px;
      font-weight: 800;

      line-height: 1;

      letter-spacing: .16em;
    }


    .fire-parent h2 {
      margin: 5px 0 2px;

      color: #ffffff;

      font-size: 19px;
      font-weight: 700;

      line-height: 1.15;

      text-align: center;
    }


    .fire-parent p {
      margin: 0;

      color: #e3bdc3;

      font-size: 9px;
      font-weight: 550;

      text-align: center;
    }


    /* =====================================================
       FIRE PARENT → MAIN BUS
    ===================================================== */

    .fire-main-stem {
      width: var(--wire-size);
      height: 38px;

      margin: 0 auto;

      background: var(--wire);
    }


    /* =====================================================
       FIRE DISTRIBUTION

                  FIRE PROTECTION
                        │
                        │
             ───────────┼───────────
             │          │          │
          ALARMS     FIGHTING     PUMP
    ===================================================== */

    .fire-distribution {
      position: relative;

      width: 100%;

      height: 38px;
      min-height: 38px;
    }


    /* =====================================================
       HORIZONTAL BUS

       Three equal columns:

       first center  = 1/6
       middle center = 3/6
       last center   = 5/6

       Bus begins at the first branch and terminates
       at the third branch.
    ===================================================== */

    .fire-bus {
      position: absolute;

      top: 0;

      left:
        calc(
          100% / (var(--fire-count) * 2)
        );

      right:
        calc(
          100% / (var(--fire-count) * 2)
        );

      height: var(--wire-size);

      background: var(--wire);
    }

    .fire-bus--single {
      left: 50%;
      right: 50%;
    }


    /* =====================================================
       EXACT THREE VERTICAL BRANCHES

       Uses the same grid as the cards.
    ===================================================== */

    .fire-lines {
      position: absolute;

      inset: 0;

      display: grid;

      grid-template-columns:
        repeat(
          var(--fire-count),
          minmax(0, 1fr)
        );

      pointer-events: none;
    }


    .fire-line {
      position: relative;
    }


    .fire-line::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width: var(--wire-size);

      transform:
        translateX(-50%);

      background: var(--wire);
    }


    /* =====================================================
       FIRE EQUIPMENT GRID

       IMPORTANT:
       Same three columns as .fire-lines.

       No gap is used for connector geometry.
    ===================================================== */

    .fire-grid {
      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          var(--fire-count),
          minmax(0, 1fr)
        );

      gap: 0;

      align-items: start;
    }


    .fire-branch {
      position: relative;

      min-width: 0;

      display: flex;

      align-items: flex-start;
      justify-content: center;
    }


    /* =====================================================
       FLOW → CARD CONNECTION POINT
    ===================================================== */

    .fire-branch::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing: border-box;

      border:
        1px solid
        var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 8;
    }


    /* =====================================================
       FIRE EQUIPMENT CARDS
    ===================================================== */

    .fire-branch > .eq-card {
      width: var(--fire-card-width);
      min-width: var(--fire-card-width);
      max-width: var(--fire-card-width);

      height: var(--fire-card-height);
      min-height: var(--fire-card-height);
      max-height: var(--fire-card-height);

      margin: 0;

      box-sizing: border-box;
    }


    /* =====================================================
       FIRE CARD ACCENT

       Keep operational colors inside EquipmentCard.
       Only use a restrained fire-system accent here.
    ===================================================== */

    .fire-branch > .eq-card {
      border-color:
        rgba(
          181,
          91,
          102,
          .72
        );
    }


    /* =====================================================
       NO MOVEMENT ON HOVER

       Critical for connector alignment.
    ===================================================== */

    .fire-view .eq-card:hover,
    .fire-view .eq-card:focus-visible {
      transform: none;
    }


    /* =====================================================
       LARGE DESKTOP
    ===================================================== */

    @media (min-width: 1500px) {

      .fire-view {
        --fire-card-width: 220px;
        --fire-card-height: 142px;
      }


      .fire-network {
        max-width: none;
      }


      .fire-parent {
        width: 450px;
        min-width: 450px;
        max-width: 450px;

        height: 114px;
        min-height: 114px;
      }
    }


    /* =====================================================
       NORMAL LAPTOP
    ===================================================== */

    @media (
      min-width: 1101px
    ) and (
      max-width: 1499px
    ) {

      .fire-view {
        --fire-card-width: 200px;
        --fire-card-height: 136px;
      }


      .fire-network {
        max-width: none;
      }


      .fire-parent {
        width: 420px;
        min-width: 420px;
        max-width: 420px;

        height: 108px;
        min-height: 108px;
      }
    }


    /* =====================================================
       SMALL LAPTOP / TABLET

       Preserve the topology instead of squeezing
       the three cards.
    ===================================================== */

    @media (max-width: 1100px) {

      .fire-view {
        --fire-card-width: 190px;
        --fire-card-height: 132px;

        padding-left: 18px;
        padding-right: 18px;
      }


      .fire-network {
        width: var(--fire-network-width);
        min-width: var(--fire-network-width);
      }


      .fire-parent {
        width: 390px;
        min-width: 390px;
        max-width: 390px;

        height: 104px;
        min-height: 104px;
      }
    }
  `;


  return (
    <div className="fire-view">
      <style>
        {fireStyles}
      </style>


      <div
        className="fire-network"
        style={{
          "--fire-count": fireCount,
          "--fire-network-width": `${fireNetworkWidth}px`,
        }}
      >

        {/* ===============================================
            FIRE PROTECTION PARENT
        ================================================ */}

        <div className="fire-parent">

          <Flame
            size={26}
            strokeWidth={1.8}
          />


          <span>
            LIFE SAFETY
          </span>


          <h2>
            FIRE PROTECTION SYSTEM
          </h2>


          <p>
            DETECTION / PROTECTION / PUMP
          </p>

        </div>


        {/* ===============================================
            PARENT → MAIN FIRE BUS
        ================================================ */}

        {fireCount > 0 && (
          <div className="fire-main-stem" />
        )}


        {/* ===============================================
            HORIZONTAL BUS + THREE BRANCHES
        ================================================ */}

        {fireCount > 0 && (
        <div className="fire-distribution">

          <div
            className={`fire-bus ${
              fireCount === 1
                ? "fire-bus--single"
                : ""
            }`}
          />


          <div className="fire-lines">

            {equipment.map(
              (item) => (

                <div
                  className="fire-line"
                  key={`line-${item.id}`}
                />

              )
            )}

          </div>

        </div>
        )}


        {/* ===============================================
            FIRE ALARMS / FIRE FIGHTING / FIRE PUMP
        ================================================ */}

        {fireCount > 0 && (
        <div className="fire-grid">

          {equipment.map(
            (item) => (

              <div
                className="fire-branch"
                key={item.id}
              >

                <EquipmentCard
                  equipment={item}
                  onOpen={
                    onOpenEquipment
                  }
                />

              </div>

            )
          )}

        </div>
        )}

      </div>

    </div>
  );
}

/* =========================================================
   OPTIONAL UPS VIEW
   UPS is not a top-level dashboard category, but this remains
   isolated in case an existing config still routes to it.
========================================================= */

function UPSView({ topology, onOpenEquipment }) {
  const upsStyles = `
    .ups-view {
      --wire:#19b8cf;
      width:100%;min-width:760px;min-height:100%;margin:0 auto;
      display:flex;flex-direction:column;justify-content:center;
    }
    .ups-parent {
      width:430px;min-height:100px;margin:0 auto;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      border:2px solid #2378b7;border-radius:7px;color:#fff;background:#102f6e;
    }
    .ups-parent h2 { margin:5px 0;font-size:18px; }
    .ups-stem { width:2px;height:34px;margin:0 auto;background:var(--wire); }
    .ups-grid {
      position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));
      gap:18px;padding-top:34px;
    }
    .ups-bus {
      position:absolute;top:0;left:calc(50% / 4);right:calc(50% / 4);
      height:2px;background:var(--wire);
    }
    .ups-branch { position:relative; }
    .ups-branch::before {
      content:"";position:absolute;left:50%;bottom:100%;width:2px;height:34px;
      transform:translateX(-50%);background:var(--wire);
    }
    .ups-view .eq-card:hover { transform:none; }
  `;

  return (
    <div className="ups-view">
      <style>{upsStyles}</style>
      <div className="ups-parent">
        <BatteryCharging size={26} />
        <h2>UPS SYSTEM</h2>
        <span>UNINTERRUPTIBLE POWER SUPPLY</span>
      </div>
      <div className="ups-stem" />
      <div className="ups-grid">
        <div className="ups-bus" />
        {topology.equipment.map((item) => (
          <div className="ups-branch" key={item.id}>
            <EquipmentCard equipment={item} onOpen={onOpenEquipment} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   RENDERER
   Only routing lives here. No shared topology renderer.
========================================================= */

function FlowRenderer({ topology, onOpenEquipment }) {
  switch (topology.id) {
    case "source":
      return <SourceView topology={topology} onOpenEquipment={onOpenEquipment} />;
    case "feeder":
      return <FeederView topology={topology} onOpenEquipment={onOpenEquipment} />;
    case "transformer":
      return <TransformerView topology={topology} onOpenEquipment={onOpenEquipment} />;
    case "lt-kiosk":
      return <LTKioskView topology={topology} onOpenEquipment={onOpenEquipment} />;
    case "busduct":
      return <BusductView topology={topology} onOpenEquipment={onOpenEquipment} />;
    case "pcc":
      return <PCCView topology={topology} onOpenEquipment={onOpenEquipment} />;
    case "raising-main":
      return <RaisingMainView topology={topology} onOpenEquipment={onOpenEquipment} />;
    case "wing":
      return <WingView topology={topology} onOpenEquipment={onOpenEquipment} />;
    case "dg":
      return <DGView topology={topology} onOpenEquipment={onOpenEquipment} />;
    case "hvac":
      return <HVACView topology={topology} onOpenEquipment={onOpenEquipment} />;
    case "wtp":
      return <WaterView topology={topology} onOpenEquipment={onOpenEquipment} />;
    case "fire":
      return <FireView topology={topology} onOpenEquipment={onOpenEquipment} />;
    case "ups":
      return <UPSView topology={topology} onOpenEquipment={onOpenEquipment} />;
    default:
      return null;
  }
}

/* =========================================================
   PAGE
========================================================= */

function FlowDetail({
  project,
  flow,
  onBack,
  onOpenEquipment,
}) {
  const topology = getProjectTopology(
    project,
    flow?.id
  );

  if (!topology) {
    return (
      <main className="fd-shell">
        <style>{pageStyles}</style>
        <div className="fd-empty">
          <Activity size={38} />
          <h2>Flow configuration unavailable</h2>
          <button type="button" onClick={onBack}>Back</button>
        </div>
      </main>
    );
  }

  const equipment = getTopologyEquipment(topology);
  const FlowIcon = flow?.icon || Activity;

  return (
    <main className="fd-shell">
      <style>{pageStyles}</style>

      <section className="fd-dashboard">
        <header className="fd-header">
          <div className="fd-header__left">
            <button type="button" className="fd-back" onClick={onBack}>
              <ArrowLeft size={17} /> Overview
            </button>

            <span className="fd-main-icon"><FlowIcon size={23} /></span>

            <div>
              <span className="fd-eyebrow">BMS LIVE FLOW</span>
              <h1>{topology.title}</h1>
              <p>{topology.subtitle}</p>
            </div>
          </div>

          <div className="fd-header__right">
            <span className="fd-live"><i />DEMO LIVE</span>
            <span className="fd-comm"><Wifi size={15} />Connected</span>
          </div>
        </header>

        <section className="fd-workspace">
          <header className="workspace-title">
            <div>
              <span>INTERNAL EQUIPMENT</span>
              <h2>Operational Flow</h2>
            </div>
            <div className="workspace-legend">
              <span><i className="dot-on" />Active</span>
              <span><i className="dot-standby" />Standby</span>
              <span><i className="dot-fault" />Fault</span>
            </div>
          </header>

          <div className="fd-content">
            <FlowRenderer topology={topology} onOpenEquipment={onOpenEquipment} />
          </div>
        </section>

        <footer className="fd-footer">
          Demo telemetry • Monitoring only • Backend-ready equipment IDs
        </footer>
      </section>
    </main>
  );
}

/* =========================================================
   GLOBAL PAGE + SHARED CARD CSS ONLY
   IMPORTANT:
   No Source/Feeder/Transformer/LT Kiosk/Busduct/PCC/etc.
   topology geometry is defined here.
========================================================= */

const pageStyles = `
*,
*::before,
*::after { box-sizing:border-box; }

.fd-shell {
  width:100%;
  height:100%;
  min-height:0;
  padding:0;
  overflow:hidden;
  color:#18283a;
  background:transparent;
}

.fd-dashboard {
  width:100%;
  max-width:none;
  height:100%;
  min-height:0;
  margin:0;
  display:grid;
  grid-template-rows:64px minmax(0,1fr) 14px;
  gap:4px;
}

.fd-header {
  min-width:0;
  padding:8px 14px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
  border:1px solid #1e3b54;
  border-radius:9px;
  background:linear-gradient(120deg,#112b42 0%,#0b2033 52%,#102a40 100%);
}

.fd-header__left,
.fd-header__right { display:flex;align-items:center; }

.fd-header__left { min-width:0;gap:11px; }
.fd-header__right { flex-shrink:0;gap:8px; }

.fd-back {
  height:36px;padding:0 12px;display:inline-flex;align-items:center;gap:7px;
  border:1px solid #45647d;border-radius:6px;color:#e6eef5;background:#193850;
  cursor:pointer;font-size:10px;font-weight:700;
}

.fd-main-icon {
  width:40px;height:40px;flex-shrink:0;display:grid;place-items:center;
  border:1px solid #477da4;border-radius:7px;color:#fff;background:#205475;
}

.fd-eyebrow {
  display:block;margin-bottom:2px;color:#7f9bb1;font-size:8px;font-weight:800;
  letter-spacing:.14em;
}

.fd-header h1 { margin:0;color:#fff;font-size:clamp(18px,1.35vw,24px);line-height:1.05; }
.fd-header p { margin:3px 0 0;color:#9bb0c0;font-size:9px; }

.fd-live,
.fd-comm {
  height:32px;padding:0 11px;display:inline-flex;align-items:center;gap:7px;
  border-radius:6px;font-size:8px;font-weight:800;letter-spacing:.04em;
}

.fd-live { color:#9de8c6;border:1px solid #32765f;background:#123e32; }
.fd-live i { width:7px;height:7px;border-radius:50%;background:#30d79b; }
.fd-comm { color:#d0dce6;border:1px solid #405f77;background:#17344c; }




.fd-workspace {
  width:100%;
  min-width:0;
  min-height:0;
  display:grid;
  grid-template-rows:46px minmax(0,1fr);
  overflow:hidden;
  border:0;
  border-radius:0;
  background:transparent;
}

.workspace-title {
  width:100%;
  padding:6px 18px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  border:0;
  border-bottom:1px solid rgba(117,137,153,.20);
  background:transparent;
}

.workspace-title > div:first-child span {
  display:block;color:#82919e;font-size:7px;font-weight:800;letter-spacing:.14em;
}

.workspace-title h2 { margin:2px 0 0;color:#1e384d;font-size:16px; }
.workspace-legend { display:flex;gap:14px; }
.workspace-legend span {
  display:inline-flex;align-items:center;gap:5px;color:#687986;font-size:8px;font-weight:650;
}
.workspace-legend i { width:7px;height:7px;border-radius:50%; }
.dot-on { background:#22bf87; }
.dot-standby { background:#dda33d; }
.dot-fault { background:#dd4b5d; }

.fd-content {
  width:100%;
  min-width:0;
  min-height:0;
  padding:10px 18px 6px;
  overflow:auto;
  background:transparent;
}

/* SHARED EQUIPMENT CARD */
.eq-card {
  width:100%;min-width:0;min-height:132px;padding:12px 13px 10px;position:relative;
  display:flex;flex-direction:column;overflow:hidden;text-align:left;
  border:1px solid #2c75a7;border-radius:8px;color:#fff;
  background:linear-gradient(145deg,#173f75 0%,#103264 52%,#0c2855 100%);
  box-shadow:none;cursor:pointer;transition:border-color .16s ease,box-shadow .16s ease;
}

.eq-card::before {
  content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:#2bd197;
}

.eq-card:hover,
.eq-card:focus-visible {
  border-color:#59b8d3;
  box-shadow:0 8px 20px rgba(13,47,72,.13);
  outline:none;
}

.eq-card--alarm {
  border-color:#a54e5d;
  background:linear-gradient(145deg,#6b3746,#4b2732);
}
.eq-card--alarm::before { background:#ef6575; }

.eq-card__top { display:flex;align-items:center;justify-content:space-between;gap:8px; }
.eq-card__icon {
  width:35px;height:35px;display:grid;place-items:center;
  border:1px solid rgba(255,255,255,.15);border-radius:6px;color:#b9dcf4;background:#12345f;
}

.eq-status {
  min-height:23px;padding:0 8px;display:inline-flex;align-items:center;gap:5px;
  border-radius:4px;font-size:8px;font-weight:800;
}
.eq-status i { width:6px;height:6px;border-radius:50%; }
.eq-status--on { color:#91e8c3;background:#124534; }
.eq-status--on i { background:#2dd69a; }
.eq-status--standby { color:#f1cd7c;background:#4b3a1d; }
.eq-status--standby i { background:#dfa63d; }
.eq-status--off { color:#d0d9e0;background:#334958; }
.eq-status--off i { background:#8a9aa7; }

.eq-card__name { margin:12px 0 8px; }
.eq-card__name h3 {
  margin:0;overflow:hidden;color:#fff;font-size:15px;font-weight:750;
  text-overflow:ellipsis;white-space:nowrap;
}
.eq-card__name p {
  min-height:12px;margin:3px 0 0;overflow:hidden;color:#a9c5d8;font-size:8px;
  text-overflow:ellipsis;white-space:nowrap;
}

.eq-card__bottom {
  min-height:24px;margin-top:auto;padding-top:7px;display:flex;align-items:center;
  justify-content:space-between;gap:6px;border-top:1px solid rgba(255,255,255,.10);
  color:#88e1bc;font-size:7px;
}
.eq-card__bottom > span { display:inline-flex;align-items:center;gap:4px; }
.eq-card__bottom i { width:6px;height:6px;border-radius:50%;background:#2bd197; }
.eq-card__bottom strong { color:#c5d3dd;font-size:7px; }

.eq-card__hover {
  position:absolute;inset:0;z-index:5;padding:14px;display:flex;flex-direction:column;
  justify-content:center;gap:10px;opacity:0;visibility:hidden;transform:translateY(5px);
  color:#fff;background:linear-gradient(145deg,rgba(9,34,66,.985),rgba(8,45,75,.985));
  transition:opacity .16s ease,transform .16s ease,visibility .16s ease;pointer-events:none;
}
.eq-card:hover .eq-card__hover,
.eq-card:focus-visible .eq-card__hover {
  opacity:1;visibility:visible;transform:translateY(0);
}
.eq-card__hover-title { color:#79d9ec;font-size:7px;font-weight:800;letter-spacing:.16em; }
.eq-card__hover-grid {
  display:grid;grid-template-columns:repeat(3,minmax(0,1fr));
  border-top:1px solid rgba(121,217,236,.22);
  border-bottom:1px solid rgba(121,217,236,.22);
}
.eq-card__hover-grid > div { min-width:0;padding:9px 7px; }
.eq-card__hover-grid > div + div { border-left:1px solid rgba(121,217,236,.18); }
.eq-card__hover-grid span { display:block;margin-bottom:3px;color:#91aabd;font-size:7px; }
.eq-card__hover-grid strong {
  display:block;overflow:hidden;color:#fff;font-size:11px;font-weight:650;
  text-overflow:ellipsis;white-space:nowrap;
}
.eq-card__hover small { color:#a8bac8;font-size:7px; }

/* SHARED SIMPLE CARD */
.simple-card {
  width:100%;min-height:132px;padding:16px 18px;position:relative;display:flex;
  flex-direction:column;align-items:center;justify-content:center;overflow:hidden;
  border:2px solid #1975bd;border-radius:7px;color:#fff;text-align:center;
  background:#102f6e;box-shadow:none;
}
button.simple-card { cursor:pointer; }
.simple-card svg { margin:5px 0;color:#a5d4f2; }
.simple-card__eyebrow { color:#9dc9eb;font-size:8px;font-weight:800;letter-spacing:.17em; }
.simple-card h3 { margin:4px 0;color:#fff;font-size:18px;font-weight:800; }
.simple-card p { margin:2px 0 8px;color:#c1d2e3;font-size:10px;font-weight:650; }
.simple-card > strong {
  display:inline-flex;align-items:center;gap:6px;color:#37dda7;font-size:8px;
}
.simple-card > strong i { width:8px;height:8px;border-radius:50%;background:#2bd197; }

.simple-card__hover {
  position:absolute;inset:0;z-index:5;padding:14px;display:flex;flex-direction:column;
  justify-content:center;gap:9px;opacity:0;visibility:hidden;transform:translateY(5px);
  color:#fff;background:linear-gradient(145deg,rgba(9,34,66,.985),rgba(8,45,75,.985));
  transition:opacity .16s ease,transform .16s ease,visibility .16s ease;pointer-events:none;
}
.simple-card:hover .simple-card__hover,
.simple-card:focus-visible .simple-card__hover {
  opacity:1;visibility:visible;transform:translateY(0);
}
.simple-card__hover > span { color:#79d9ec;font-size:7px;font-weight:800;letter-spacing:.15em; }
.simple-card__hover > div {
  display:grid;grid-template-columns:repeat(3,minmax(0,1fr));
  border-top:1px solid rgba(121,217,236,.22);
  border-bottom:1px solid rgba(121,217,236,.22);
}
.simple-card__hover small { min-width:0;padding:8px 5px;color:#91aabd;font-size:7px; }
.simple-card__hover small + small { border-left:1px solid rgba(121,217,236,.18); }
.simple-card__hover b {
  display:block;margin-top:3px;overflow:hidden;color:#fff;font-size:10px;
  text-overflow:ellipsis;white-space:nowrap;
}
.simple-card__hover em { color:#a8bac8;font-size:7px;font-style:normal; }

.fd-footer { padding:0 4px;display:flex;align-items:center;color:#6f8190;font-size:7px;white-space:nowrap; }

.fd-empty {
  min-height:100vh;display:grid;place-items:center;align-content:center;gap:12px;
}
.fd-empty button {
  padding:9px 14px;border:0;border-radius:6px;color:#fff;background:#234f73;
}

/* Global dark theme only. Individual topology colors remain inside each view. */
html[data-theme="dark"] .fd-shell {
  color:var(--app-text,#f4f8fc);
  background:var(--app-bg,#07111f);
}
html[data-theme="dark"] .fd-workspace,
html[data-theme="dark"] .fd-content,
html[data-theme="dark"] .workspace-title {
  border-color:var(--app-border,#203651);
  background-color:var(--app-surface,#0b1728);
}
html[data-theme="dark"] .workspace-title h2 { color:var(--app-text,#f4f8fc); }
html[data-theme="dark"] .workspace-title span,
html[data-theme="dark"] .workspace-legend span { color:var(--app-muted,#8294aa); }

@media(max-width:900px) {
  .fd-shell { height:auto;min-height:100%;overflow:visible; }
  .fd-dashboard { height:auto;min-height:100%;display:flex;flex-direction:column; }
  .fd-header { flex-wrap:wrap; }
  .fd-workspace { overflow:visible; }
  .fd-content { overflow-x:auto;overflow-y:visible; }
}

@media(max-width:600px) {
  .fd-shell { padding:6px; }
  .fd-header { align-items:flex-start;flex-direction:column; }
  .fd-header__left { width:100%;flex-wrap:wrap; }
  .fd-header__right { width:100%;justify-content:flex-end; }
  .workspace-title { align-items:flex-start;flex-direction:column;gap:6px; }
}
`;

export default FlowDetail;
