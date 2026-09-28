// import { useMemo, useState } from "react";

// import {
//   Activity,
//   AlertTriangle,
//   ArrowLeft,
//   BatteryCharging,
//   Bolt,
//   CirclePower,
//   Droplets,
//   Flame,
//   Gauge,
//   Power,
//   RotateCcw,
//   ShieldAlert,
//   ShieldCheck,
//   Thermometer,
//   Waves,
//   Zap,
// } from "lucide-react";

// /* =========================================================
//    DEFAULT STATE
// ========================================================= */

// const initialFaults = {
//   fault1: false,
//   fault2: false,
//   fault3: false,
//   fault4: false,
// };

// /* =========================================================
//    EQUIPMENT MONITORING CARDS
// ========================================================= */

// function getMonitoringItems(equipment) {
//   switch (equipment?.type) {
//     case "transformer":
//       return [
//         {
//           key: "fault1",
//           label: "Oil Temperature",
//           icon: Thermometer,
//         },
//         {
//           key: "fault2",
//           label: "Winding Temperature",
//           icon: Thermometer,
//         },
//         {
//           key: "fault3",
//           label: "Buchholz Relay",
//           icon: ShieldAlert,
//         },
//         {
//           key: "fault4",
//           label: "Transformer Fault",
//           icon: Zap,
//         },
//       ];

//     case "busduct":
//     case "busbar":
//       return [
//         {
//           key: "fault1",
//           label: "High Temperature",
//           icon: Thermometer,
//         },
//         {
//           key: "fault2",
//           label: "Vibration",
//           icon: Waves,
//         },
//         {
//           key: "fault3",
//           label: "Busduct Health",
//           icon: ShieldCheck,
//         },
//         {
//           key: "fault4",
//           label: "Busduct Fault",
//           icon: AlertTriangle,
//         },
//       ];

//     case "ups":
//       return [
//         {
//           key: "fault1",
//           label: "Input Supply",
//           icon: Zap,
//         },
//         {
//           key: "fault2",
//           label: "Battery Warning",
//           icon: BatteryCharging,
//         },
//         {
//           key: "fault3",
//           label: "Output Supply",
//           icon: Bolt,
//         },
//         {
//           key: "fault4",
//           label: "UPS Fault",
//           icon: AlertTriangle,
//         },
//       ];

//     case "stp":
//     case "wtp":
//       return [
//         {
//           key: "fault1",
//           label: "Inlet Flow",
//           icon: Droplets,
//         },
//         {
//           key: "fault2",
//           label: "Outlet Flow",
//           icon: Droplets,
//         },
//         {
//           key: "fault3",
//           label: "Water Quality",
//           icon: Waves,
//         },
//         {
//           key: "fault4",
//           label: "Plant Fault",
//           icon: AlertTriangle,
//         },
//       ];

//     case "tank":
//       return [
//         {
//           key: "fault1",
//           label: "High Level",
//           icon: Droplets,
//         },
//         {
//           key: "fault2",
//           label: "Low Level",
//           icon: Droplets,
//         },
//         {
//           key: "fault3",
//           label: "Flow Condition",
//           icon: Waves,
//         },
//         {
//           key: "fault4",
//           label: "Tank Alarm",
//           icon: AlertTriangle,
//         },
//       ];

//     case "fire-alarm":
//       return [
//         {
//           key: "fault1",
//           label: "Smoke Alarm",
//           icon: Flame,
//         },
//         {
//           key: "fault2",
//           label: "Heat Alarm",
//           icon: Thermometer,
//         },
//         {
//           key: "fault3",
//           label: "Zone Alarm",
//           icon: ShieldAlert,
//         },
//         {
//           key: "fault4",
//           label: "System Fault",
//           icon: AlertTriangle,
//         },
//       ];

//     case "fire-fighting":
//       return [
//         {
//           key: "fault1",
//           label: "Low Pressure",
//           icon: Gauge,
//         },
//         {
//           key: "fault2",
//           label: "Hydrant Network",
//           icon: Droplets,
//         },
//         {
//           key: "fault3",
//           label: "Sprinkler Network",
//           icon: Droplets,
//         },
//         {
//           key: "fault4",
//           label: "Valve Fault",
//           icon: AlertTriangle,
//         },
//       ];

//     case "fire-pump":
//       return [
//         {
//           key: "fault1",
//           label: "Pump Fault",
//           icon: AlertTriangle,
//         },
//         {
//           key: "fault2",
//           label: "Low Pressure",
//           icon: Gauge,
//         },
//         {
//           key: "fault3",
//           label: "Supply Fault",
//           icon: Zap,
//         },
//         {
//           key: "fault4",
//           label: "Mode Fault",
//           icon: ShieldAlert,
//         },
//       ];

//     case "pcc-circuit":
//     case "coupler":
//       return [
//         {
//           key: "fault1",
//           label: "Breaker Fault",
//           icon: CirclePower,
//         },
//         {
//           key: "fault2",
//           label: "Earth Fault",
//           icon: Waves,
//         },
//         {
//           key: "fault3",
//           label: "Short Circuit",
//           icon: Zap,
//         },
//         {
//           key: "fault4",
//           label: "Over Current",
//           icon: Bolt,
//         },
//       ];

//     default:
//       return [
//         {
//           key: "fault1",
//           label: "System Fault",
//           icon: AlertTriangle,
//         },
//         {
//           key: "fault2",
//           label: "Earth Fault",
//           icon: Waves,
//         },
//         {
//           key: "fault3",
//           label: "Short Circuit",
//           icon: Zap,
//         },
//         {
//           key: "fault4",
//           label: "Over Current",
//           icon: Bolt,
//         },
//       ];
//   }
// }

// /* =========================================================
//    PARAMETER HELPERS
// ========================================================= */

// function electricalParameters(data) {
//   return [
//     {
//       icon: Bolt,
//       label: "Energy",
//       value: data?.kWh ?? "--",
//       unit: data?.kWh != null ? "kWh" : "",
//     },
//     {
//       icon: Activity,
//       label: "Apparent Energy",
//       value: data?.kVAh ?? "--",
//       unit: data?.kVAh != null ? "kVAh" : "",
//     },
//     {
//       icon: Zap,
//       label: "Voltage",
//       value: data?.voltage ?? "--",
//       unit:
//         data?.voltage != null
//           ? data.voltage === 33
//             ? "kV"
//             : "V"
//           : "",
//     },
//     {
//       icon: Activity,
//       label: "Current",
//       value: data?.current ?? "--",
//       unit: data?.current != null ? "A" : "",
//     },
//     {
//       icon: Gauge,
//       label: "Power Factor",
//       value: data?.powerFactor ?? "--",
//     },
//     {
//       icon: Gauge,
//       label: "Load",
//       value: data?.load ?? "--",
//       unit: data?.load != null ? "%" : "",
//     },
//   ];
// }

// function getParameters(equipment, data) {
//   switch (equipment?.type) {
//     /* =====================================================
//        TRANSFORMER
//     ===================================================== */

//     case "transformer":
//       return [
//         {
//           icon: Thermometer,
//           label: "Oil Temperature",
//           value: data?.oilTemp ?? "--",
//           unit: data?.oilTemp != null ? "°C" : "",
//         },
//         {
//           icon: Thermometer,
//           label: "Winding Temperature",
//           value: data?.windingTemp ?? "--",
//           unit: data?.windingTemp != null ? "°C" : "",
//         },
//         {
//           icon: ShieldCheck,
//           label: "Buchholz Relay",
//           value: data?.buchholz ?? "--",
//         },
//         {
//           icon: Gauge,
//           label: "Load",
//           value: data?.load ?? "--",
//           unit: data?.load != null ? "%" : "",
//         },
//       ];

//     /* =====================================================
//        BUSDUCT
//     ===================================================== */

//     case "busduct":
//     case "busbar":
//       return [
//         {
//           icon: Thermometer,
//           label: "Temperature",
//           value: data?.temperature ?? "--",
//           unit: data?.temperature != null ? "°C" : "",
//         },
//         {
//           icon: Waves,
//           label: "Vibration",
//           value: data?.vibration ?? "--",
//           unit:
//             typeof data?.vibration === "number"
//               ? "mm/s"
//               : "",
//         },
//         {
//           icon: Zap,
//           label: "Voltage",
//           value: data?.voltage ?? "--",
//           unit: data?.voltage != null ? "V" : "",
//         },
//         {
//           icon: Gauge,
//           label: "Load",
//           value: data?.load ?? "--",
//           unit: data?.load != null ? "%" : "",
//         },
//         {
//           icon: ShieldCheck,
//           label: "Health",
//           value: data?.health ?? "--",
//         },
//         {
//           icon: CirclePower,
//           label: "Status",
//           value: data?.status ?? "--",
//         },
//       ];

//     /* =====================================================
//        UPS
//     ===================================================== */

//     case "ups":
//       return [
//         {
//           icon: BatteryCharging,
//           label: "Capacity",
//           value: data?.capacity ?? "--",
//         },
//         {
//           icon: Zap,
//           label: "Input Voltage",
//           value: data?.inputVoltage ?? "--",
//           unit: data?.inputVoltage != null ? "V" : "",
//         },
//         {
//           icon: Zap,
//           label: "Output Voltage",
//           value: data?.outputVoltage ?? "--",
//           unit: data?.outputVoltage != null ? "V" : "",
//         },
//         {
//           icon: Gauge,
//           label: "Load",
//           value: data?.load ?? "--",
//           unit: data?.load != null ? "%" : "",
//         },
//         {
//           icon: BatteryCharging,
//           label: "Battery",
//           value: data?.battery ?? "--",
//           unit: data?.battery != null ? "%" : "",
//         },
//         {
//           icon: Waves,
//           label: "Input Frequency",
//           value: data?.inputFrequency ?? "--",
//           unit: data?.inputFrequency != null ? "Hz" : "",
//         },
//         {
//           icon: Waves,
//           label: "Output Frequency",
//           value: data?.outputFrequency ?? "--",
//           unit: data?.outputFrequency != null ? "Hz" : "",
//         },
//         {
//           icon: BatteryCharging,
//           label: "Battery Voltage",
//           value: data?.batteryVoltage ?? "--",
//           unit: data?.batteryVoltage != null ? "V" : "",
//         },
//         {
//           icon: Activity,
//           label: "Backup Time",
//           value: data?.backupTime ?? "--",
//         },
//         {
//           icon: CirclePower,
//           label: "Mode",
//           value: data?.mode ?? "--",
//         },
//       ];

//     /* =====================================================
//        CENTRAL WATER
//     ===================================================== */

//     case "water-main":
//       return [
//         {
//           icon: Droplets,
//           label: "Flow Rate",
//           value: data?.flowRate ?? "--",
//           unit: data?.flowRate != null ? "m³/h" : "",
//         },
//         {
//           icon: Droplets,
//           label: "Total Water",
//           value: data?.totalWater ?? "--",
//           unit: data?.totalWater != null ? "%" : "",
//         },
//         {
//           icon: Gauge,
//           label: "Pressure",
//           value: data?.pressure ?? "--",
//           unit: data?.pressure != null ? "bar" : "",
//         },
//         {
//           icon: CirclePower,
//           label: "Status",
//           value: data?.status ?? "--",
//         },
//       ];

//     /* =====================================================
//        STP / WTP
//     ===================================================== */

//     case "stp":
//     case "wtp":
//       return [
//         {
//           icon: Droplets,
//           label: "Inlet Flow",
//           value: data?.inletFlow ?? "--",
//           unit: data?.inletFlow != null ? "m³/h" : "",
//         },
//         {
//           icon: Droplets,
//           label: "Outlet Flow",
//           value: data?.outletFlow ?? "--",
//           unit: data?.outletFlow != null ? "m³/h" : "",
//         },
//         {
//           icon: Activity,
//           label: "pH",
//           value: data?.ph ?? "--",
//         },
//         {
//           icon: Waves,
//           label: "Turbidity",
//           value: data?.turbidity ?? "--",
//           unit: data?.turbidity != null ? "NTU" : "",
//         },
//         {
//           icon: ShieldCheck,
//           label: "Health",
//           value: data?.health ?? "--",
//         },
//         {
//           icon: CirclePower,
//           label: "Status",
//           value: data?.status ?? "--",
//         },
//       ];

//     /* =====================================================
//        TANK
//     ===================================================== */

//     case "tank":
//       return [
//         {
//           icon: Droplets,
//           label: "Level",
//           value: data?.level ?? "--",
//           unit: data?.level != null ? "%" : "",
//         },
//         {
//           icon: Droplets,
//           label: "Volume",
//           value: data?.volume ?? "--",
//           unit: data?.volume != null ? "m³" : "",
//         },
//         {
//           icon: Activity,
//           label: "Inlet Flow",
//           value: data?.inletFlow ?? "--",
//           unit: data?.inletFlow != null ? "m³/h" : "",
//         },
//         {
//           icon: Activity,
//           label: "Outlet Flow",
//           value: data?.outletFlow ?? "--",
//           unit: data?.outletFlow != null ? "m³/h" : "",
//         },
//         {
//           icon: ShieldCheck,
//           label: "Health",
//           value: data?.health ?? "--",
//         },
//         {
//           icon: CirclePower,
//           label: "Status",
//           value: data?.status ?? "--",
//         },
//       ];

//     /* =====================================================
//        FIRE ALARM
//     ===================================================== */

//     case "fire-alarm":
//       return [
//         {
//           icon: Flame,
//           label: "Smoke Detectors",
//           value: data?.smokeDetectors ?? "--",
//         },
//         {
//           icon: Thermometer,
//           label: "Heat Detectors",
//           value: data?.heatDetectors ?? "--",
//         },
//         {
//           icon: ShieldAlert,
//           label: "Alarm Zones",
//           value: data?.alarmZones ?? "--",
//         },
//         {
//           icon: AlertTriangle,
//           label: "Active Alarms",
//           value: data?.activeAlarms ?? "--",
//         },
//         {
//           icon: ShieldCheck,
//           label: "Health",
//           value: data?.health ?? "--",
//         },
//         {
//           icon: CirclePower,
//           label: "Status",
//           value: data?.status ?? "--",
//         },
//       ];

//     /* =====================================================
//        FIRE FIGHTING
//     ===================================================== */

//     case "fire-fighting":
//       return [
//         {
//           icon: Gauge,
//           label: "Pressure",
//           value: data?.pressure ?? "--",
//           unit: data?.pressure != null ? "bar" : "",
//         },
//         {
//           icon: Droplets,
//           label: "Hydrant Network",
//           value: data?.hydrantNetwork ?? "--",
//         },
//         {
//           icon: Droplets,
//           label: "Sprinkler Network",
//           value: data?.sprinklerNetwork ?? "--",
//         },
//         {
//           icon: Activity,
//           label: "Main Valve",
//           value: data?.mainValve ?? "--",
//         },
//         {
//           icon: ShieldCheck,
//           label: "Health",
//           value: data?.health ?? "--",
//         },
//         {
//           icon: CirclePower,
//           label: "Status",
//           value: data?.status ?? "--",
//         },
//       ];

//     /* =====================================================
//        FIRE PUMP
//     ===================================================== */

//     case "fire-pump":
//       return [
//         {
//           icon: Zap,
//           label: "Voltage",
//           value: data?.voltage ?? "--",
//           unit: data?.voltage != null ? "V" : "",
//         },
//         {
//           icon: Gauge,
//           label: "Pressure",
//           value: data?.pressure ?? "--",
//           unit: data?.pressure != null ? "bar" : "",
//         },
//         {
//           icon: Activity,
//           label: "Operating Mode",
//           value: data?.mode ?? "--",
//         },
//         {
//           icon: CirclePower,
//           label: "Pump State",
//           value: data?.pumpState ?? "--",
//         },
//         {
//           icon: ShieldCheck,
//           label: "Health",
//           value: data?.health ?? "--",
//         },
//         {
//           icon: CirclePower,
//           label: "Status",
//           value: data?.status ?? "--",
//         },
//       ];

//     /* =====================================================
//        PCC
//     ===================================================== */

//     case "pcc-circuit":
//       return [
//         ...electricalParameters(data),
//         {
//           icon: CirclePower,
//           label: "Breaker State",
//           value: data?.breakerState ?? "--",
//         },
//       ];

//     case "coupler":
//       return [
//         {
//           icon: CirclePower,
//           label: "Breaker State",
//           value: data?.breakerState ?? "--",
//         },
//         {
//           icon: Zap,
//           label: "Voltage",
//           value: data?.voltage ?? "--",
//           unit: data?.voltage != null ? "V" : "",
//         },
//         {
//           icon: Activity,
//           label: "Current",
//           value: data?.current ?? "--",
//           unit: data?.current != null ? "A" : "",
//         },
//         {
//           icon: Gauge,
//           label: "Power Factor",
//           value: data?.powerFactor ?? "--",
//         },
//         {
//           icon: Gauge,
//           label: "Load",
//           value: data?.load ?? "--",
//           unit: data?.load != null ? "%" : "",
//         },
//         {
//           icon: CirclePower,
//           label: "Status",
//           value: data?.status ?? "--",
//         },
//       ];

//     case "dg":
//       return [
//         {
//           icon: CirclePower,
//           label: "Capacity",
//           value: data?.capacity ?? "--",
//         },
//         ...electricalParameters(data),
//         {
//           icon: CirclePower,
//           label: "Status",
//           value: data?.status ?? "--",
//         },
//       ];

//     /* =====================================================
//        NORMAL ELECTRICAL EQUIPMENT
//     ===================================================== */

//     default:
//       return electricalParameters(data);
//   }
// }

// /* =========================================================
//    STATUS TILE
// ========================================================= */

// function StatusTile({
//   label,
//   active,
//   tone,
//   icon: Icon,
// }) {
//   return (
//     <article
//       className={`status-tile status-tile--${tone} ${
//         active ? "is-active" : ""
//       }`}
//     >
//       <div className="status-tile__icon">
//         <Icon size={22} strokeWidth={1.9} />
//       </div>

//       <div className="status-tile__content">
//         <span>{label}</span>

//         <strong>
//           {active ? "ACTIVE" : "STANDBY"}
//         </strong>
//       </div>

//       <span className="status-tile__indicator" />
//     </article>
//   );
// }

// /* =========================================================
//    METRIC
// ========================================================= */

// function Metric({
//   icon: Icon,
//   label,
//   value,
//   unit,
// }) {
//   return (
//     <article className="metric-card">
//       <div className="metric-card__icon">
//         <Icon size={20} strokeWidth={1.9} />
//       </div>

//       <div className="metric-card__body">
//         <span>{label}</span>

//         <strong>
//           {value ?? "--"}

//           {unit && <small>{unit}</small>}
//         </strong>
//       </div>
//     </article>
//   );
// }

// /* =========================================================
//    SYSTEM DETAIL
// ========================================================= */

// function SystemDetail({
//   flow,
//   equipment,
//   onBack,
// }) {
//   /*
//    * IMPORTANT:
//    * FlowDetail already passes:
//    *
//    * {
//    *   ...equipment,
//    *   telemetry: demoTelemetry[equipment.id]
//    * }
//    *
//    * Therefore SystemDetail should use equipment.telemetry.
//    */

//   const telemetry =
//     equipment?.telemetry || {};

//   /*
//    * Keep your existing local simulation buttons.
//    * Later, when the backend is connected, replace these
//    * local states with real equipment status.
//    */

//   const telemetryFault =
//     Boolean(telemetry?.fault) ||
//     Boolean(telemetry?.trip);

//   const initialEquipmentOn =
//     telemetry?.status !== "OFF" &&
//     telemetry?.status !== "OFFLINE";

//   const [isOn, setIsOn] =
//     useState(initialEquipmentOn);

//   const [faults, setFaults] =
//     useState(initialFaults);

//   /*
//    * IMPORTANT:
//    * Use selected equipment name/data.
//    * flow is now only the parent category.
//    */

//   const Icon =
//     flow?.icon || Activity;

//   const monitoringItems =
//     getMonitoringItems(equipment);

//   const parameters =
//     getParameters(
//       equipment,
//       telemetry
//     );

//   const localFault = useMemo(
//     () =>
//       Object.values(faults).some(
//         Boolean
//       ),
//     [faults]
//   );

//   const hasFault =
//     telemetryFault || localFault;

//   const status = useMemo(() => {
//     if (hasFault) {
//       return "TRIP";
//     }

//     if (!isOn) {
//       return "OFF";
//     }

//     return "ON";
//   }, [hasFault, isOn]);

//   const healthy =
//     isOn &&
//     !hasFault &&
//     telemetry?.warning !== true;

//   const toggleFault = (key) => {
//     setFaults((previous) => ({
//       ...previous,
//       [key]: !previous[key],
//     }));
//   };

//   const handlePower = () => {
//     if (hasFault) {
//       return;
//     }

//     setIsOn(
//       (previous) => !previous
//     );
//   };

//   const handleReset = () => {
//     setFaults(initialFaults);

//     setIsOn(
//       telemetry?.status !== "OFF" &&
//         telemetry?.status !==
//           "OFFLINE"
//     );
//   };

//   /*
//    * Safety fallback if SystemDetail is accidentally
//    * opened without clicking an equipment.
//    */

//   if (!equipment) {
//     return (
//       <main className="system-detail-shell">
//         <section className="system-detail-dashboard">
//           <div
//             style={{
//               minHeight:
//                 "calc(100vh - 32px)",
//               display: "grid",
//               placeItems: "center",
//               textAlign: "center",
//             }}
//           >
//             <div>
//               <AlertTriangle
//                 size={34}
//               />

//               <h2>
//                 No equipment selected
//               </h2>

//               <button
//                 type="button"
//                 className="back-button"
//                 onClick={onBack}
//               >
//                 <ArrowLeft
//                   size={18}
//                 />
//               </button>
//             </div>
//           </div>
//         </section>
//       </main>
//     );
//   }

//   return (
//     <main className="system-detail-shell">
//       <section className="system-detail-dashboard">

//         {/* =================================================
//             HEADER
//         ================================================= */}

//         <header className="topbar">
//           <div className="topbar__left">

//             <button
//               type="button"
//               className="back-button"
//               onClick={onBack}
//             >
//               <ArrowLeft size={18} />
//             </button>

//             <div className="system-identity">

//               <div className="system-identity__mark">
//                 <Icon size={22} />
//               </div>

//               <div>
//                 <strong>
//                   {equipment.name}
//                 </strong>

//                 <span>
//                   {equipment.label ||
//                     flow?.description}
//                 </span>
//               </div>

//             </div>
//           </div>

//           <div className="topbar__right">

//             <div
//               className={`connection-state ${
//                 healthy
//                   ? "is-live"
//                   : ""
//               }`}
//             >
//               <span />

//               {hasFault
//                 ? "TRIP ACTIVE"
//                 : isOn
//                 ? "SYSTEM ONLINE"
//                 : "SYSTEM OFFLINE"}
//             </div>

//             <button
//               type="button"
//               className={`action-btn action-btn--power ${
//                 healthy
//                   ? "is-on"
//                   : ""
//               }`}
//               onClick={handlePower}
//               disabled={hasFault}
//             >
//               <Power size={17} />

//               {healthy
//                 ? "ON"
//                 : "OFF"}
//             </button>

//             <button
//               type="button"
//               className="action-btn"
//               onClick={handleReset}
//             >
//               <RotateCcw size={17} />

//               Reset
//             </button>

//           </div>
//         </header>

//         {/* =================================================
//             STATUS
//         ================================================= */}

//         <section className="status-row">

//           <StatusTile
//             label="ON"
//             active={status === "ON"}
//             tone="on"
//             icon={CirclePower}
//           />

//           <StatusTile
//             label="OFF"
//             active={status === "OFF"}
//             tone="off"
//             icon={Power}
//           />

//           <StatusTile
//             label="TRIP"
//             active={status === "TRIP"}
//             tone="trip"
//             icon={ShieldAlert}
//           />

//           <StatusTile
//             label="HEALTHY"
//             active={healthy}
//             tone="healthy"
//             icon={ShieldCheck}
//           />

//         </section>

//         {/* =================================================
//             SAME ORIGINAL WORKSPACE
//         ================================================= */}

//         <section className="workspace">

//           {/* MONITORING */}

//           <section className="protection-card">

//             <div className="section-head">

//               <div>
//                 <span className="section-kicker">
//                   MONITORING
//                 </span>

//                 <h2>
//                   {equipment.name} Monitoring
//                 </h2>
//               </div>

//               <div
//                 className={`alarm-badge ${
//                   hasFault
//                     ? "is-alarm"
//                     : ""
//                 }`}
//               >
//                 <span />

//                 {hasFault
//                   ? "Alarm Active"
//                   : "Normal"}
//               </div>

//             </div>

//             <div className="fault-grid">

//               {monitoringItems.map(
//                 ({
//                   key,
//                   label,
//                   icon: FaultIcon,
//                 }) => {
//                   const active =
//                     faults[key];

//                   return (
//                     <button
//                       key={key}
//                       type="button"
//                       className={`fault-card ${
//                         active
//                           ? "is-active"
//                           : ""
//                       }`}
//                       onClick={() =>
//                         toggleFault(
//                           key
//                         )
//                       }
//                     >

//                       <div className="fault-card__top">

//                         <span className="fault-card__icon">
//                           <FaultIcon
//                             size={22}
//                             strokeWidth={
//                               1.9
//                             }
//                           />
//                         </span>

//                         <span className="fault-card__led" />

//                       </div>

//                       <div>
//                         <strong>
//                           {label}
//                         </strong>

//                         <span>
//                           {active
//                             ? "Detected"
//                             : "Normal"}
//                         </span>
//                       </div>

//                     </button>
//                   );
//                 }
//               )}

//             </div>

//           </section>

//           {/* =================================================
//               EQUIPMENT STATE
//           ================================================= */}

//           <aside
//             className={`breaker-card breaker-card--${status.toLowerCase()}`}
//           >

//             <div className="section-head section-head--compact">

//               <div>
//                 <span className="section-kicker">
//                   EQUIPMENT
//                 </span>

//                 <h2>
//                   Operating State
//                 </h2>
//               </div>

//             </div>

//             <div className="breaker-visual">

//               <div className="breaker-ring breaker-ring--outer" />

//               <div className="breaker-ring breaker-ring--middle" />

//               <div className="breaker-core">

//                 <Power
//                   size={32}
//                   strokeWidth={1.8}
//                 />

//                 <strong>
//                   {status}
//                 </strong>

//                 <span>
//                   {healthy
//                     ? "Healthy"
//                     : hasFault
//                     ? "Fault Active"
//                     : "Stopped"}
//                 </span>

//               </div>

//             </div>

//             <div className="breaker-details">

//               <div>
//                 <span>
//                   Equipment
//                 </span>

//                 <strong>
//                   {isOn
//                     ? "Running"
//                     : "Stopped"}
//                 </strong>
//               </div>

//               <div>
//                 <span>
//                   Monitoring
//                 </span>

//                 <strong>
//                   {hasFault
//                     ? "Alarm"
//                     : "Normal"}
//                 </strong>
//               </div>

//             </div>

//           </aside>

//         </section>

//         {/* =================================================
//             PARAMETERS
//         ================================================= */}

//         <section className="metering-card">

//           <div className="section-head section-head--meter">

//             <div>
//               <h2>
//                 {equipment.name} Parameters
//               </h2>
//             </div>

//             <div className="live-badge">
//               <span />
//               LIVE
//             </div>

//           </div>

//           <div className="metrics-grid">

//             {parameters.map(
//               (parameter) => (
//                 <Metric
//                   key={
//                     parameter.label
//                   }
//                   icon={
//                     parameter.icon
//                   }
//                   label={
//                     parameter.label
//                   }
//                   value={
//                     isOn
//                       ? parameter.value
//                       : "--"
//                   }
//                   unit={
//                     isOn
//                       ? parameter.unit
//                       : ""
//                   }
//                 />
//               )
//             )}

//           </div>

//         </section>

//       </section>
//     </main>
//   );
// }

// export default SystemDetail;




import { useMemo, useState } from "react";

import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  BatteryCharging,
  Bolt,
  CirclePower,
  Droplets,
  Flame,
  Gauge,
  Power,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  Thermometer,
  Waves,
  Zap,
} from "lucide-react";

/* =========================================================
   DEFAULT STATE
========================================================= */

const initialFaults = {
  fault1: false,
  fault2: false,
  fault3: false,
  fault4: false,
};

/* =========================================================
   EQUIPMENT MONITORING CARDS
========================================================= */

function getMonitoringItems(equipment) {
  switch (equipment?.type) {
    case "transformer":
      return [
        {
          key: "fault1",
          label: "Oil Temperature",
          icon: Thermometer,
        },
        {
          key: "fault2",
          label: "Winding Temperature",
          icon: Thermometer,
        },
        {
          key: "fault3",
          label: "Buchholz Relay",
          icon: ShieldAlert,
        },
        {
          key: "fault4",
          label: "Transformer Fault",
          icon: Zap,
        },
      ];

    case "busduct":
    case "busbar":
      return [
        {
          key: "fault1",
          label: "High Temperature",
          icon: Thermometer,
        },
        {
          key: "fault2",
          label: "Vibration",
          icon: Waves,
        },
        {
          key: "fault3",
          label: "Busduct Health",
          icon: ShieldCheck,
        },
        {
          key: "fault4",
          label: "Busduct Fault",
          icon: AlertTriangle,
        },
      ];

    case "ups":
      return [
        {
          key: "fault1",
          label: "Input Supply",
          icon: Zap,
        },
        {
          key: "fault2",
          label: "Battery Warning",
          icon: BatteryCharging,
        },
        {
          key: "fault3",
          label: "Output Supply",
          icon: Bolt,
        },
        {
          key: "fault4",
          label: "UPS Fault",
          icon: AlertTriangle,
        },
      ];

    case "stp":
    case "wtp":
      return [
        {
          key: "fault1",
          label: "Inlet Flow",
          icon: Droplets,
        },
        {
          key: "fault2",
          label: "Outlet Flow",
          icon: Droplets,
        },
        {
          key: "fault3",
          label: "Water Quality",
          icon: Waves,
        },
        {
          key: "fault4",
          label: "Plant Fault",
          icon: AlertTriangle,
        },
      ];

    case "tank":
      return [
        {
          key: "fault1",
          label: "High Level",
          icon: Droplets,
        },
        {
          key: "fault2",
          label: "Low Level",
          icon: Droplets,
        },
        {
          key: "fault3",
          label: "Flow Condition",
          icon: Waves,
        },
        {
          key: "fault4",
          label: "Tank Alarm",
          icon: AlertTriangle,
        },
      ];

    case "fire-alarm":
      return [
        {
          key: "fault1",
          label: "Smoke Alarm",
          icon: Flame,
        },
        {
          key: "fault2",
          label: "Heat Alarm",
          icon: Thermometer,
        },
        {
          key: "fault3",
          label: "Zone Alarm",
          icon: ShieldAlert,
        },
        {
          key: "fault4",
          label: "System Fault",
          icon: AlertTriangle,
        },
      ];

    case "fire-fighting":
      return [
        {
          key: "fault1",
          label: "Low Pressure",
          icon: Gauge,
        },
        {
          key: "fault2",
          label: "Hydrant Network",
          icon: Droplets,
        },
        {
          key: "fault3",
          label: "Sprinkler Network",
          icon: Droplets,
        },
        {
          key: "fault4",
          label: "Valve Fault",
          icon: AlertTriangle,
        },
      ];

    case "fire-pump":
      return [
        {
          key: "fault1",
          label: "Pump Fault",
          icon: AlertTriangle,
        },
        {
          key: "fault2",
          label: "Low Pressure",
          icon: Gauge,
        },
        {
          key: "fault3",
          label: "Supply Fault",
          icon: Zap,
        },
        {
          key: "fault4",
          label: "Mode Fault",
          icon: ShieldAlert,
        },
      ];

    case "pcc-circuit":
    case "coupler":
      return [
        {
          key: "fault1",
          label: "Breaker Fault",
          icon: CirclePower,
        },
        {
          key: "fault2",
          label: "Earth Fault",
          icon: Waves,
        },
        {
          key: "fault3",
          label: "Short Circuit",
          icon: Zap,
        },
        {
          key: "fault4",
          label: "Over Current",
          icon: Bolt,
        },
      ];

    default:
      return [
        {
          key: "fault1",
          label: "System Fault",
          icon: AlertTriangle,
        },
        {
          key: "fault2",
          label: "Earth Fault",
          icon: Waves,
        },
        {
          key: "fault3",
          label: "Short Circuit",
          icon: Zap,
        },
        {
          key: "fault4",
          label: "Over Current",
          icon: Bolt,
        },
      ];
  }
}

/* =========================================================
   PARAMETER HELPERS
========================================================= */

function electricalParameters(data) {
  return [
    {
      icon: Bolt,
      label: "Energy",
      value: data?.kWh ?? "--",
      unit: data?.kWh != null ? "kWh" : "",
    },
    {
      icon: Activity,
      label: "Apparent Energy",
      value: data?.kVAh ?? "--",
      unit: data?.kVAh != null ? "kVAh" : "",
    },
    {
      icon: Zap,
      label: "Voltage",
      value: data?.voltage ?? "--",
      unit:
        data?.voltage != null
          ? data.voltage === 33
            ? "kV"
            : "V"
          : "",
    },
    {
      icon: Activity,
      label: "Current",
      value: data?.current ?? "--",
      unit: data?.current != null ? "A" : "",
    },
    {
      icon: Gauge,
      label: "Power Factor",
      value: data?.powerFactor ?? "--",
    },
    {
      icon: Gauge,
      label: "Load",
      value: data?.load ?? "--",
      unit: data?.load != null ? "%" : "",
    },
  ];
}

function getParameters(equipment, data) {
  switch (equipment?.type) {
    /* =====================================================
       TRANSFORMER
    ===================================================== */

    case "transformer":
      return [
        {
          icon: Thermometer,
          label: "Oil Temperature",
          value: data?.oilTemp ?? "--",
          unit: data?.oilTemp != null ? "°C" : "",
        },
        {
          icon: Thermometer,
          label: "Winding Temperature",
          value: data?.windingTemp ?? "--",
          unit: data?.windingTemp != null ? "°C" : "",
        },
        {
          icon: ShieldCheck,
          label: "Buchholz Relay",
          value: data?.buchholz ?? "--",
        },
        {
          icon: Gauge,
          label: "Load",
          value: data?.load ?? "--",
          unit: data?.load != null ? "%" : "",
        },
      ];

    /* =====================================================
       BUSDUCT
    ===================================================== */

    case "busduct":
    case "busbar":
      return [
        {
          icon: Thermometer,
          label: "Temperature",
          value: data?.temperature ?? "--",
          unit: data?.temperature != null ? "°C" : "",
        },
        {
          icon: Waves,
          label: "Vibration",
          value: data?.vibration ?? "--",
          unit:
            typeof data?.vibration === "number"
              ? "mm/s"
              : "",
        },
        {
          icon: Zap,
          label: "Voltage",
          value: data?.voltage ?? "--",
          unit: data?.voltage != null ? "V" : "",
        },
        {
          icon: Gauge,
          label: "Load",
          value: data?.load ?? "--",
          unit: data?.load != null ? "%" : "",
        },
        {
          icon: ShieldCheck,
          label: "Health",
          value: data?.health ?? "--",
        },
        {
          icon: CirclePower,
          label: "Status",
          value: data?.status ?? "--",
        },
      ];

    /* =====================================================
       UPS
    ===================================================== */

    case "ups":
      return [
        {
          icon: BatteryCharging,
          label: "Capacity",
          value: data?.capacity ?? "--",
        },
        {
          icon: Zap,
          label: "Input Voltage",
          value: data?.inputVoltage ?? "--",
          unit: data?.inputVoltage != null ? "V" : "",
        },
        {
          icon: Zap,
          label: "Output Voltage",
          value: data?.outputVoltage ?? "--",
          unit: data?.outputVoltage != null ? "V" : "",
        },
        {
          icon: Gauge,
          label: "Load",
          value: data?.load ?? "--",
          unit: data?.load != null ? "%" : "",
        },
        {
          icon: BatteryCharging,
          label: "Battery",
          value: data?.battery ?? "--",
          unit: data?.battery != null ? "%" : "",
        },
        {
          icon: Waves,
          label: "Input Frequency",
          value: data?.inputFrequency ?? "--",
          unit: data?.inputFrequency != null ? "Hz" : "",
        },
        {
          icon: Waves,
          label: "Output Frequency",
          value: data?.outputFrequency ?? "--",
          unit: data?.outputFrequency != null ? "Hz" : "",
        },
        {
          icon: BatteryCharging,
          label: "Battery Voltage",
          value: data?.batteryVoltage ?? "--",
          unit: data?.batteryVoltage != null ? "V" : "",
        },
        {
          icon: Activity,
          label: "Backup Time",
          value: data?.backupTime ?? "--",
        },
        {
          icon: CirclePower,
          label: "Mode",
          value: data?.mode ?? "--",
        },
      ];

    /* =====================================================
       CENTRAL WATER
    ===================================================== */

    case "water-main":
      return [
        {
          icon: Droplets,
          label: "Flow Rate",
          value: data?.flowRate ?? "--",
          unit: data?.flowRate != null ? "m³/h" : "",
        },
        {
          icon: Droplets,
          label: "Total Water",
          value: data?.totalWater ?? "--",
          unit: data?.totalWater != null ? "%" : "",
        },
        {
          icon: Gauge,
          label: "Pressure",
          value: data?.pressure ?? "--",
          unit: data?.pressure != null ? "bar" : "",
        },
        {
          icon: CirclePower,
          label: "Status",
          value: data?.status ?? "--",
        },
      ];

    /* =====================================================
       STP / WTP
    ===================================================== */

    case "stp":
    case "wtp":
      return [
        {
          icon: Droplets,
          label: "Inlet Flow",
          value: data?.inletFlow ?? "--",
          unit: data?.inletFlow != null ? "m³/h" : "",
        },
        {
          icon: Droplets,
          label: "Outlet Flow",
          value: data?.outletFlow ?? "--",
          unit: data?.outletFlow != null ? "m³/h" : "",
        },
        {
          icon: Activity,
          label: "pH",
          value: data?.ph ?? "--",
        },
        {
          icon: Waves,
          label: "Turbidity",
          value: data?.turbidity ?? "--",
          unit: data?.turbidity != null ? "NTU" : "",
        },
        {
          icon: ShieldCheck,
          label: "Health",
          value: data?.health ?? "--",
        },
        {
          icon: CirclePower,
          label: "Status",
          value: data?.status ?? "--",
        },
      ];

    /* =====================================================
       TANK
    ===================================================== */

    case "tank":
      return [
        {
          icon: Droplets,
          label: "Level",
          value: data?.level ?? "--",
          unit: data?.level != null ? "%" : "",
        },
        {
          icon: Droplets,
          label: "Volume",
          value: data?.volume ?? "--",
          unit: data?.volume != null ? "m³" : "",
        },
        {
          icon: Activity,
          label: "Inlet Flow",
          value: data?.inletFlow ?? "--",
          unit: data?.inletFlow != null ? "m³/h" : "",
        },
        {
          icon: Activity,
          label: "Outlet Flow",
          value: data?.outletFlow ?? "--",
          unit: data?.outletFlow != null ? "m³/h" : "",
        },
        {
          icon: ShieldCheck,
          label: "Health",
          value: data?.health ?? "--",
        },
        {
          icon: CirclePower,
          label: "Status",
          value: data?.status ?? "--",
        },
      ];

    /* =====================================================
       FIRE ALARM
    ===================================================== */

    case "fire-alarm":
      return [
        {
          icon: Flame,
          label: "Smoke Detectors",
          value: data?.smokeDetectors ?? "--",
        },
        {
          icon: Thermometer,
          label: "Heat Detectors",
          value: data?.heatDetectors ?? "--",
        },
        {
          icon: ShieldAlert,
          label: "Alarm Zones",
          value: data?.alarmZones ?? "--",
        },
        {
          icon: AlertTriangle,
          label: "Active Alarms",
          value: data?.activeAlarms ?? "--",
        },
        {
          icon: ShieldCheck,
          label: "Health",
          value: data?.health ?? "--",
        },
        {
          icon: CirclePower,
          label: "Status",
          value: data?.status ?? "--",
        },
      ];

    /* =====================================================
       FIRE FIGHTING
    ===================================================== */

    case "fire-fighting":
      return [
        {
          icon: Gauge,
          label: "Pressure",
          value: data?.pressure ?? "--",
          unit: data?.pressure != null ? "bar" : "",
        },
        {
          icon: Droplets,
          label: "Hydrant Network",
          value: data?.hydrantNetwork ?? "--",
        },
        {
          icon: Droplets,
          label: "Sprinkler Network",
          value: data?.sprinklerNetwork ?? "--",
        },
        {
          icon: Activity,
          label: "Main Valve",
          value: data?.mainValve ?? "--",
        },
        {
          icon: ShieldCheck,
          label: "Health",
          value: data?.health ?? "--",
        },
        {
          icon: CirclePower,
          label: "Status",
          value: data?.status ?? "--",
        },
      ];

    /* =====================================================
       FIRE PUMP
    ===================================================== */

    case "fire-pump":
      return [
        {
          icon: Zap,
          label: "Voltage",
          value: data?.voltage ?? "--",
          unit: data?.voltage != null ? "V" : "",
        },
        {
          icon: Gauge,
          label: "Pressure",
          value: data?.pressure ?? "--",
          unit: data?.pressure != null ? "bar" : "",
        },
        {
          icon: Activity,
          label: "Operating Mode",
          value: data?.mode ?? "--",
        },
        {
          icon: CirclePower,
          label: "Pump State",
          value: data?.pumpState ?? "--",
        },
        {
          icon: ShieldCheck,
          label: "Health",
          value: data?.health ?? "--",
        },
        {
          icon: CirclePower,
          label: "Status",
          value: data?.status ?? "--",
        },
      ];

    /* =====================================================
       PCC
    ===================================================== */

    case "pcc-circuit":
      return [
        ...electricalParameters(data),
        {
          icon: CirclePower,
          label: "Breaker State",
          value: data?.breakerState ?? "--",
        },
      ];

    case "coupler":
      return [
        {
          icon: CirclePower,
          label: "Breaker State",
          value: data?.breakerState ?? "--",
        },
        {
          icon: Zap,
          label: "Voltage",
          value: data?.voltage ?? "--",
          unit: data?.voltage != null ? "V" : "",
        },
        {
          icon: Activity,
          label: "Current",
          value: data?.current ?? "--",
          unit: data?.current != null ? "A" : "",
        },
        {
          icon: Gauge,
          label: "Power Factor",
          value: data?.powerFactor ?? "--",
        },
        {
          icon: Gauge,
          label: "Load",
          value: data?.load ?? "--",
          unit: data?.load != null ? "%" : "",
        },
        {
          icon: CirclePower,
          label: "Status",
          value: data?.status ?? "--",
        },
      ];

    case "dg":
      return [
        {
          icon: CirclePower,
          label: "Capacity",
          value: data?.capacity ?? "--",
        },
        ...electricalParameters(data),
        {
          icon: CirclePower,
          label: "Status",
          value: data?.status ?? "--",
        },
      ];

    /* =====================================================
       NORMAL ELECTRICAL EQUIPMENT
    ===================================================== */

    default:
      return electricalParameters(data);
  }
}

/* =========================================================
   STATUS TILE
========================================================= */

function StatusTile({
  label,
  active,
  tone,
  icon: Icon,
}) {
  return (
    <article
      className={`status-tile status-tile--${tone} ${
        active ? "is-active" : ""
      }`}
    >
      <div className="status-tile__icon">
        <Icon size={22} strokeWidth={1.9} />
      </div>

      <div className="status-tile__content">
        <span>{label}</span>

        <strong>
          {active ? "ACTIVE" : "STANDBY"}
        </strong>
      </div>

      <span className="status-tile__indicator" />
    </article>
  );
}

/* =========================================================
   METRIC
========================================================= */

function Metric({
  icon: Icon,
  label,
  value,
  unit,
}) {
  return (
    <article className="metric-card">
      <div className="metric-card__icon">
        <Icon size={20} strokeWidth={1.9} />
      </div>

      <div className="metric-card__body">
        <span>{label}</span>

        <strong>
          {value ?? "--"}

          {unit && <small>{unit}</small>}
        </strong>
      </div>
    </article>
  );
}

/* =========================================================
   SYSTEM DETAIL
========================================================= */

function SystemDetail({
  flow,
  equipment,
  onBack,
}) {
  /*
   * IMPORTANT:
   * FlowDetail already passes:
   *
   * {
   *   ...equipment,
   *   telemetry: demoTelemetry[equipment.id]
   * }
   *
   * Therefore SystemDetail should use equipment.telemetry.
   */

  const telemetry =
    equipment?.telemetry || {};

  /*
   * Keep your existing local simulation buttons.
   * Later, when the backend is connected, replace these
   * local states with real equipment status.
   */

  const telemetryFault =
    Boolean(telemetry?.fault) ||
    Boolean(telemetry?.trip);

  const initialEquipmentOn =
    telemetry?.status !== "OFF" &&
    telemetry?.status !== "OFFLINE";

  const [isOn, setIsOn] =
    useState(initialEquipmentOn);

  const [faults, setFaults] =
    useState(initialFaults);

  /*
   * IMPORTANT:
   * Use selected equipment name/data.
   * flow is now only the parent category.
   */

  const Icon =
    flow?.icon || Activity;

  const monitoringItems =
    getMonitoringItems(equipment);

  const parameters =
    getParameters(
      equipment,
      telemetry
    );

  const localFault = useMemo(
    () =>
      Object.values(faults).some(
        Boolean
      ),
    [faults]
  );

  const hasFault =
    telemetryFault || localFault;

  const status = useMemo(() => {
    if (hasFault) {
      return "TRIP";
    }

    if (!isOn) {
      return "OFF";
    }

    return "ON";
  }, [hasFault, isOn]);

  const healthy =
    isOn &&
    !hasFault &&
    telemetry?.warning !== true;

  const toggleFault = (key) => {
    setFaults((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  const handlePower = () => {
    if (hasFault) {
      return;
    }

    setIsOn(
      (previous) => !previous
    );
  };

  const handleReset = () => {
    setFaults(initialFaults);

    setIsOn(
      telemetry?.status !== "OFF" &&
        telemetry?.status !==
          "OFFLINE"
    );
  };

  /*
   * Safety fallback if SystemDetail is accidentally
   * opened without clicking an equipment.
   */

  if (!equipment) {
    return (
      <main className="system-detail-shell">
        <section className="system-detail-dashboard">
          <div
            style={{
              minHeight:
                "calc(100vh - 32px)",
              display: "grid",
              placeItems: "center",
              textAlign: "center",
            }}
          >
            <div>
              <AlertTriangle
                size={34}
              />

              <h2>
                No equipment selected
              </h2>

              <button
                type="button"
                className="back-button"
                onClick={onBack}
              >
                <ArrowLeft
                  size={18}
                />
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="system-detail-shell">
      <section className="system-detail-dashboard">

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="topbar">
          <div className="topbar__left">

            <button
              type="button"
              className="back-button"
              onClick={onBack}
            >
              <ArrowLeft size={18} />
            </button>

            <div className="system-identity">

              <div className="system-identity__mark">
                <Icon size={22} />
              </div>

              <div>
                <strong>
                  {equipment.name}
                </strong>

                <span>
                  {equipment.label ||
                    flow?.description}
                </span>
              </div>

            </div>
          </div>

          <div className="topbar__right">

            <div
              className={`connection-state ${
                healthy
                  ? "is-live"
                  : ""
              }`}
            >
              <span />

              {hasFault
                ? "TRIP ACTIVE"
                : isOn
                ? "SYSTEM ONLINE"
                : "SYSTEM OFFLINE"}
            </div>

            <button
              type="button"
              className={`action-btn action-btn--power ${
                healthy
                  ? "is-on"
                  : ""
              }`}
              onClick={handlePower}
              disabled={hasFault}
            >
              <Power size={17} />

              {healthy
                ? "ON"
                : "OFF"}
            </button>

            <button
              type="button"
              className="action-btn"
              onClick={handleReset}
            >
              <RotateCcw size={17} />

              Reset
            </button>

          </div>
        </header>

        {/* =================================================
            STATUS
        ================================================= */}

        <section className="status-row">

          <StatusTile
            label="ON"
            active={status === "ON"}
            tone="on"
            icon={CirclePower}
          />

          <StatusTile
            label="OFF"
            active={status === "OFF"}
            tone="off"
            icon={Power}
          />

          <StatusTile
            label="TRIP"
            active={status === "TRIP"}
            tone="trip"
            icon={ShieldAlert}
          />

          <StatusTile
            label="HEALTHY"
            active={healthy}
            tone="healthy"
            icon={ShieldCheck}
          />

        </section>

        {/* =================================================
            SAME ORIGINAL WORKSPACE
        ================================================= */}

        <section className="workspace">

          {/* MONITORING */}

          <section className="protection-card">

            <div className="section-head">

              <div>
                <span className="section-kicker">
                  MONITORING
                </span>

                <h2>
                  {equipment.name} Monitoring
                </h2>
              </div>

              <div
                className={`alarm-badge ${
                  hasFault
                    ? "is-alarm"
                    : ""
                }`}
              >
                <span />

                {hasFault
                  ? "Alarm Active"
                  : "Normal"}
              </div>

            </div>

            <div className="fault-grid">

              {monitoringItems.map(
                ({
                  key,
                  label,
                  icon: FaultIcon,
                }) => {
                  const active =
                    faults[key];

                  return (
                    <button
                      key={key}
                      type="button"
                      className={`fault-card ${
                        active
                          ? "is-active"
                          : ""
                      }`}
                      onClick={() =>
                        toggleFault(
                          key
                        )
                      }
                    >

                      <div className="fault-card__top">

                        <span className="fault-card__icon">
                          <FaultIcon
                            size={22}
                            strokeWidth={
                              1.9
                            }
                          />
                        </span>

                        <span className="fault-card__led" />

                      </div>

                      <div>
                        <strong>
                          {label}
                        </strong>

                        <span>
                          {active
                            ? "Detected"
                            : "Normal"}
                        </span>
                      </div>

                    </button>
                  );
                }
              )}

            </div>

          </section>

          {/* =================================================
              EQUIPMENT STATE
          ================================================= */}

          <aside
            className={`breaker-card breaker-card--${status.toLowerCase()}`}
          >

            <div className="section-head section-head--compact">

              <div>
                <span className="section-kicker">
                  EQUIPMENT
                </span>

                <h2>
                  Operating State
                </h2>
              </div>

            </div>

            <div className="breaker-visual">

              <div className="breaker-ring breaker-ring--outer" />

              <div className="breaker-ring breaker-ring--middle" />

              <div className="breaker-core">

                <Power
                  size={32}
                  strokeWidth={1.8}
                />

                <strong>
                  {status}
                </strong>

                <span>
                  {healthy
                    ? "Healthy"
                    : hasFault
                    ? "Fault Active"
                    : "Stopped"}
                </span>

              </div>

            </div>

            <div className="breaker-details">

              <div>
                <span>
                  Equipment
                </span>

                <strong>
                  {isOn
                    ? "Running"
                    : "Stopped"}
                </strong>
              </div>

              <div>
                <span>
                  Monitoring
                </span>

                <strong>
                  {hasFault
                    ? "Alarm"
                    : "Normal"}
                </strong>
              </div>

            </div>

          </aside>

        </section>

        {/* =================================================
            PARAMETERS
        ================================================= */}

        <section className="metering-card">

          <div className="section-head section-head--meter">

            <div>
              <h2>
                {equipment.name} Parameters
              </h2>
            </div>

            <div className="live-badge">
              <span />
              LIVE
            </div>

          </div>

          <div className="metrics-grid">

            {parameters.map(
              (parameter) => (
                <Metric
                  key={
                    parameter.label
                  }
                  icon={
                    parameter.icon
                  }
                  label={
                    parameter.label
                  }
                  value={
                    isOn
                      ? parameter.value
                      : "--"
                  }
                  unit={
                    isOn
                      ? parameter.unit
                      : ""
                  }
                />
              )
            )}

          </div>

        </section>

      </section>
    </main>
  );
}

export default SystemDetail;
