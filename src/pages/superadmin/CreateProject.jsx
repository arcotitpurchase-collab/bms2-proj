// // import { useMemo, useState } from "react";
// // import {
// //   ArrowLeft,
// //   ArrowRight,
// //   Bolt,
// //   Building2,
// //   Check,
// //   CheckCircle2,
// //   ChevronLeft,
// //   Cpu,
// //   Droplets,
// //   Flame,
// //   Gauge,
// //   Network,
// //   PanelTop,
// //   Power,
// //   Plus,
// //   RotateCcw,
// //   Trash2,
// //   ShieldCheck,
// //   TowerControl,
// //   UtilityPole,
// //   Waves,
// //   Wind,
// //   Zap,
// // } from "lucide-react";

// // /* =========================================================
// //    AVAILABLE BMS SYSTEMS

// //    For now:
// //    - All systems can be selected.
// //    - Source receives full configuration.
// //    - Other systems will be configured in the next stages.
// // ========================================================= */

// // const AVAILABLE_SYSTEMS = [
// //   {
// //     id: "source",
// //     name: "Source",
// //     description: "HT source and incoming supply monitoring",
// //     icon: UtilityPole,
// //   },
// //   {
// //     id: "feeder",
// //     name: "Feeder",
// //     description: "Incoming and outgoing feeder monitoring",
// //     icon: Gauge,
// //   },
// //   {
// //     id: "transformer",
// //     name: "Transformer",
// //     description: "Transformer status and load monitoring",
// //     icon: Zap,
// //   },
// //   {
// //     id: "lt-kiosk",
// //     name: "LT Kiosk",
// //     description: "LT kiosk distribution monitoring",
// //     icon: PanelTop,
// //   },
// //   {
// //     id: "busduct",
// //     name: "Busduct",
// //     description: "Busduct temperature and health monitoring",
// //     icon: Network,
// //   },
// //   {
// //     id: "pcc",
// //     name: "PCC",
// //     description: "Power control centre monitoring",
// //     icon: Cpu,
// //   },
// //   {
// //     id: "raising-main",
// //     name: "Raising Main",
// //     description: "Vertical distribution monitoring",
// //     icon: TowerControl,
// //   },
// //   {
// //     id: "wing",
// //     name: "Wing",
// //     description: "Building wing electrical monitoring",
// //     icon: Building2,
// //   },
// //   {
// //     id: "dg",
// //     name: "DG",
// //     description: "Diesel generator monitoring",
// //     icon: Power,
// //   },
// //   {
// //     id: "hvac",
// //     name: "HVAC",
// //     description: "Mechanical equipment monitoring",
// //     icon: Wind,
// //   },
// //   {
// //     id: "wtp",
// //     name: "Water Management",
// //     description: "STP, WTP and tank monitoring",
// //     icon: Droplets,
// //   },
// //   {
// //     id: "fire",
// //     name: "Fire",
// //     description: "Fire and life safety monitoring",
// //     icon: Flame,
// //   },
// // ];

// // const STEPS = [
// //   {
// //     id: 1,
// //     label: "PROJECT",
// //   },
// //   {
// //     id: 2,
// //     label: "SYSTEMS",
// //   },
// //   {
// //     id: 3,
// //     label: "CONFIGURE",
// //   },
// //   {
// //     id: 4,
// //     label: "REVIEW",
// //   },
// // ];

// // const createDefaultDgUnits = (
// //   count
// // ) =>
// //   Array.from(
// //     {
// //       length: count,
// //     },
// //     (_, index) => ({
// //       name: `DG${index + 1}`,
// //       capacity:
// //         index < 4
// //           ? 1500
// //           : 1250,
// //     })
// //   );

// // const UPS_UNIT_OPTIONS = [
// //   {
// //     id: "ups-30-1",
// //     name: "30kVA-1",
// //   },
// //   {
// //     id: "ups-30-2",
// //     name: "30kVA-2",
// //   },
// //   {
// //     id: "ups-10-1",
// //     name: "10kVA-1",
// //   },
// //   {
// //     id: "ups-10-2",
// //     name: "10kVA-2",
// //   },
// // ];

// // /* =========================================================
// //    VERIFIED PCC CIRCUIT OPTIONS

// //    These IDs match the existing flowTopology PCC circuit IDs.
// //    PCC 1 / PCC 2 use the verified 14-cell lineups.
// //    PCC 3 / PCC 4 use their verified LT + DG + OG lineups.
// // ========================================================= */

// // const PCC_CIRCUIT_OPTIONS = {
// //   "pcc-1": [
// //     { id: "pcc1-lt6-in", name: "LT6 IN", group: "SECTION A" },
// //     { id: "pcc1-dg1234-in-a", name: "DG1-4 IN", group: "SECTION A" },
// //     { id: "pcc1-og1", name: "OG1", group: "SECTION A" },
// //     { id: "pcc1-rm1-a", name: "RM1", group: "SECTION A" },
// //     { id: "pcc1-rm2-a", name: "RM2", group: "SECTION A" },
// //     { id: "pcc1-utility1", name: "Utility 1", group: "SECTION A" },
// //     { id: "pcc1-spare1", name: "Spare 1", group: "SECTION A" },
// //     { id: "pcc1-bus-coupler", name: "Bus Coupler", group: "COUPLER" },
// //     { id: "pcc1-lt5-in", name: "LT5 IN", group: "SECTION B" },
// //     { id: "pcc1-dg1234-in-b", name: "DG1-4 IN", group: "SECTION B" },
// //     { id: "pcc1-rm1-b", name: "RM1", group: "SECTION B" },
// //     { id: "pcc1-rm2-b", name: "RM2", group: "SECTION B" },
// //     { id: "pcc1-utility2", name: "Utility 2", group: "SECTION B" },
// //     { id: "pcc1-spare2", name: "Spare 2", group: "SECTION B" },
// //   ],

// //   "pcc-2": [
// //     { id: "pcc2-lt1-in", name: "LT1 IN", group: "SECTION A" },
// //     { id: "pcc2-dg1234-in-a", name: "DG1-4 IN", group: "SECTION A" },
// //     { id: "pcc2-og1", name: "OG1", group: "SECTION A" },
// //     { id: "pcc2-rm1-a", name: "RM1", group: "SECTION A" },
// //     { id: "pcc2-rm2-a", name: "RM2", group: "SECTION A" },
// //     { id: "pcc2-utility1", name: "Utility 1", group: "SECTION A" },
// //     { id: "pcc2-spare1", name: "Spare 1", group: "SECTION A" },
// //     { id: "pcc2-bus-coupler", name: "Bus Coupler", group: "COUPLER" },
// //     { id: "pcc2-lt2-in", name: "LT2 IN", group: "SECTION B" },
// //     { id: "pcc2-dg1234-in-b", name: "DG1-4 IN", group: "SECTION B" },
// //     { id: "pcc2-rm1-b", name: "RM1", group: "SECTION B" },
// //     { id: "pcc2-rm2-b", name: "RM2", group: "SECTION B" },
// //     { id: "pcc2-utility2", name: "Utility 2", group: "SECTION B" },
// //     { id: "pcc2-spare2", name: "Spare 2", group: "SECTION B" },
// //   ],

// //   "pcc-3": [
// //     { id: "pcc3-lt4-in", name: "LT4 IN", group: "INCOMING" },
// //     { id: "pcc3-dg567-in", name: "DG5-7 IN", group: "INCOMING" },
// //     ...Array.from({ length: 10 }, (_, index) => ({
// //       id: `pcc3-og-${index + 1}`,
// //       name: `OG ${index + 1}`,
// //       group: "OUTGOING",
// //     })),
// //   ],

// //   "pcc-4": [
// //     { id: "pcc4-lt3-in", name: "LT3 IN", group: "INCOMING" },
// //     { id: "pcc4-dg567-in", name: "DG5-7 IN", group: "INCOMING" },
// //     ...Array.from({ length: 10 }, (_, index) => ({
// //       id: `pcc4-og-${index + 1}`,
// //       name: `OG ${index + 1}`,
// //       group: "OUTGOING",
// //     })),
// //   ],
// // };

// // const normalizeReferencePccCircuit = (circuit) => {
// //   const group = circuit.group || "";
// //   const name = circuit.name || "Circuit";

// //   const direction =
// //     group === "COUPLER" ||
// //     name.toLowerCase().includes("coupler")
// //       ? "coupler"
// //       : group === "INCOMING" ||
// //         name.toUpperCase().includes(" IN")
// //       ? "incoming"
// //       : "outgoing";

// //   const section =
// //     group === "SECTION A"
// //       ? "A"
// //       : group === "SECTION B"
// //       ? "B"
// //       : null;

// //   return {
// //     ...circuit,
// //     label:
// //       direction === "incoming"
// //         ? "Incoming Circuit"
// //         : direction === "coupler"
// //         ? "Bus Coupler"
// //         : "Outgoing Circuit",
// //     type:
// //       direction === "coupler"
// //         ? "coupler"
// //         : "pcc-circuit",
// //     direction,
// //     section,
// //     source: "reference",
// //   };
// // };

// // const getPccCircuitOptions = (panelId) =>
// //   (PCC_CIRCUIT_OPTIONS[panelId] || []).map(
// //     normalizeReferencePccCircuit
// //   );

// // const getDefaultPccCircuits = (panelId) =>
// //   getPccCircuitOptions(panelId).map(
// //     (circuit) => ({ ...circuit })
// //   );

// // const createPccCustomCircuitId = (panelId) =>
// //   `${String(panelId || "pcc").replace(/[^a-zA-Z0-9-]/g, "-")}-custom-${Date.now()}-${Math.random()
// //     .toString(36)
// //     .slice(2, 7)}`;

// // const createDefaultPccPanels = (
// //   count
// // ) =>
// //   Array.from(
// //     {
// //       length: count,
// //     },
// //     (_, index) => {
// //       const panelId = `pcc-${index + 1}`;

// //       return {
// //         id: panelId,
// //         name: `PCC ${index + 1}`,

// //         /*
// //           circuits contains the exact existing flowTopology
// //           circuit IDs selected for this PCC.
// //         */
// //         circuits: getDefaultPccCircuits(panelId),

// //         /*
// //           equipment is retained for backward compatibility
// //           with older project configurations.
// //         */
// //         equipment:
// //           index < 2
// //             ? [
// //                 "utility1",
// //                 "utility2",
// //                 "ups",
// //               ]
// //             : [],

// //         upsUnits:
// //           index < 2
// //             ? UPS_UNIT_OPTIONS.map(
// //                 (unit) => unit.id
// //               )
// //             : [],
// //       };
// //     }
// //   );

// // function CreateProject({
// //   onCancel,
// //   onProjectCreated,
// // }) {
// //   const [step, setStep] = useState(1);

// //   const [error, setError] = useState("");

// //   /* =========================================================
// //      PROJECT DETAILS
// //   ========================================================= */

// //   const [projectDetails, setProjectDetails] = useState({
// //     clientName: "",
// //     projectName: "",
// //     projectCode: "",
// //     location: "",
// //     email: "",
// //     password: "",
// //   });

// //   /* =========================================================
// //      SELECTED SYSTEMS
// //   ========================================================= */

// //   const [selectedSystems, setSelectedSystems] = useState([
// //     "source",
// //   ]);

// //   /* =========================================================
// //      SOURCE CONFIGURATION

// //      This is the first fully dynamic system for our POC.
// //   ========================================================= */

// //   const [sourceConfig, setSourceConfig] = useState({
// //     voltageLevel: "33kV",
// //     incomingCount: 2,
// //     outgoingCount: 1,
// //     meterCount: 1,
// //     protectionRelay: true,
// //     busCoupler: false,
// //   });

// //   const [feederConfig, setFeederConfig] = useState({
// //     voltageLevel: "33kV",
// //     incomingCount: 1,
// //     outgoingCount: 6,
// //   });

// //   const [transformerConfig, setTransformerConfig] =
// //   useState({
// //     count: 6,
// //     primaryVoltage: "33kV",
// //     secondaryVoltage: "433V",
// //   });

// //   const [ltKioskConfig, setLTKioskConfig] =
// //   useState({
// //     count: 6,
// //   });

// //   const [busductConfig, setBusductConfig] =
// //   useState({
// //     count: 6,
// //   });

// //   const [pccConfig, setPccConfig] =
// //   useState({
// //     count: 4,
// //     panels: createDefaultPccPanels(4),
// //   });

// //   const [pccCustomDrafts, setPccCustomDrafts] =
// //   useState({});

// //   const [raisingMainConfig, setRaisingMainConfig] =
// //   useState({
// //     count: 4,
// //   });

// //   const [wingConfig, setWingConfig] =
// //   useState({
// //     count: 2,
// //     floorsPerWing: 20,
// //   });

// //   const [dgConfig, setDgConfig] =
// //   useState({
// //     count: 7,
// //     units: createDefaultDgUnits(7),
// //   });

// //   const [hvacConfig, setHvacConfig] =
// //   useState({
// //     count: 0,
// //   });

// //   const [waterConfig, setWaterConfig] =
// //   useState({
// //     stpEnabled: true,
// //     wtpEnabled: true,
// //     tankCount: 4,
// //   });

// //   const [fireConfig, setFireConfig] =
// //   useState({
// //     fireAlarms: true,
// //     fireFighting: true,
// //     firePump: true,
// //   });
// //   /* =========================================================
// //      HELPERS
// //   ========================================================= */

// //   const selectedSystemObjects = useMemo(
// //     () =>
// //       AVAILABLE_SYSTEMS.filter((system) =>
// //         selectedSystems.includes(system.id)
// //       ),
// //     [selectedSystems]
// //   );

// //   const updateProjectDetail = (key, value) => {
// //     setProjectDetails((current) => ({
// //       ...current,
// //       [key]: value,
// //     }));

// //     setError("");
// //   };

// //   const updateSourceConfig = (key, value) => {
// //     setSourceConfig((current) => ({
// //       ...current,
// //       [key]: value,
// //     }));

// //     setError("");
// //   };

// //   const updateFeederConfig = (key, value) => {
// //     setFeederConfig((current) => ({
// //       ...current,
// //       [key]: value,
// //     }));

// //     setError("");
// //   };

// //   const updateTransformerConfig = (
// //   key,
// //   value
// // ) => {
// //   setTransformerConfig(
// //     (current) => ({
// //       ...current,
// //       [key]: value,
// //     })
// //   );

// //   setError("");
// // };

// //   const updateLTKioskConfig = (
// //   key,
// //   value
// // ) => {
// //   setLTKioskConfig(
// //     (current) => ({
// //       ...current,
// //       [key]: value,
// //     })
// //   );

// //   setError("");
// // };

// //   const updateBusductConfig = (
// //   key,
// //   value
// // ) => {
// //   setBusductConfig(
// //     (current) => ({
// //       ...current,
// //       [key]: value,
// //     })
// //   );

// //   setError("");
// // };

// //   const updatePccConfig = (
// //   key,
// //   value
// // ) => {
// //   setPccConfig(
// //     (current) => {
// //       if (key === "count") {
// //         const count =
// //           Number(value);

// //         if (!Number.isInteger(count)) {
// //           return {
// //             ...current,
// //             count: value,
// //           };
// //         }

// //         const defaults =
// //           createDefaultPccPanels(count);

// //         return {
// //           ...current,
// //           count: value,
// //           panels: Array.from(
// //             {
// //               length: Math.max(
// //                 count,
// //                 0
// //               ),
// //             },
// //             (_, index) =>
// //               current.panels?.[index] ||
// //               defaults[index]
// //           ),
// //         };
// //       }

// //       return {
// //         ...current,
// //         [key]: value,
// //       };
// //     }
// //   );

// //   setError("");
// // };

// //   const updatePccPanel = (
// //   panelIndex,
// //   key,
// //   value
// // ) => {
// //   setPccConfig(
// //     (current) => ({
// //       ...current,
// //       panels: current.panels.map(
// //         (panel, index) =>
// //           index === panelIndex
// //             ? {
// //                 ...panel,
// //                 [key]: value,
// //               }
// //             : panel
// //       ),
// //     })
// //   );

// //   setError("");
// // };

// //   const togglePccCircuit = (
// //   panelIndex,
// //   circuit
// // ) => {
// //   setPccConfig(
// //     (current) => ({
// //       ...current,
// //       panels: current.panels.map(
// //         (panel, index) => {
// //           if (index !== panelIndex) {
// //             return panel;
// //           }

// //           const circuits =
// //             Array.isArray(panel.circuits)
// //               ? panel.circuits
// //               : [];

// //           const exists =
// //             circuits.some(
// //               (item) =>
// //                 item?.id === circuit.id
// //             );

// //           const nextCircuits =
// //             exists
// //               ? circuits.filter(
// //                   (item) =>
// //                     item?.id !== circuit.id
// //                 )
// //               : [
// //                   ...circuits,
// //                   { ...circuit },
// //                 ];

// //           const hasUtility1 =
// //             nextCircuits.some(
// //               (item) =>
// //                 item?.id?.endsWith(
// //                   "-utility1"
// //                 )
// //             );

// //           const hasUtility2 =
// //             nextCircuits.some(
// //               (item) =>
// //                 item?.id?.endsWith(
// //                   "-utility2"
// //                 )
// //             );

// //           const equipment = [
// //             ...(hasUtility1
// //               ? ["utility1"]
// //               : []),
// //             ...(hasUtility2
// //               ? ["utility2"]
// //               : []),
// //             ...(panel.upsUnits?.length > 0
// //               ? ["ups"]
// //               : []),
// //           ];

// //           return {
// //             ...panel,
// //             circuits: nextCircuits,
// //             equipment,
// //           };
// //         }
// //       ),
// //     })
// //   );

// //   setError("");
// // };

// //   const updatePccCustomDraft = (
// //     panelId,
// //     key,
// //     value
// //   ) => {
// //     setPccCustomDrafts(
// //       (current) => ({
// //         ...current,
// //         [panelId]: {
// //           name:
// //             current[panelId]?.name ||
// //             "",
// //           label:
// //             current[panelId]?.label ||
// //             "",
// //           direction:
// //             current[panelId]?.direction ||
// //             "outgoing",
// //           section:
// //             current[panelId]?.section ||
// //             "",
// //           [key]: value,
// //         },
// //       })
// //     );

// //     setError("");
// //   };

// //   const addPccCustomCircuit = (
// //     panelIndex
// //   ) => {
// //     const panel =
// //       pccConfig.panels[
// //         panelIndex
// //       ];

// //     if (!panel) {
// //       return;
// //     }

// //     const draft =
// //       pccCustomDrafts[
// //         panel.id
// //       ] || {};

// //     const name =
// //       String(
// //         draft.name || ""
// //       ).trim();

// //     if (!name) {
// //       setError(
// //         `Enter a custom equipment name for ${panel.name || `PCC ${panelIndex + 1}`}.`
// //       );
// //       return;
// //     }

// //     const direction =
// //       ["incoming", "outgoing", "coupler"].includes(
// //         draft.direction
// //       )
// //         ? draft.direction
// //         : "outgoing";

// //     const customCircuit = {
// //       id:
// //         createPccCustomCircuitId(
// //           panel.id
// //         ),
// //       name,
// //       label:
// //         String(
// //           draft.label || ""
// //         ).trim() ||
// //         (
// //           direction === "incoming"
// //             ? "Incoming Circuit"
// //             : direction === "coupler"
// //             ? "Bus Coupler"
// //             : "Outgoing Circuit"
// //         ),
// //       type:
// //         direction === "coupler"
// //           ? "coupler"
// //           : "pcc-circuit",
// //       direction,
// //       section:
// //         String(
// //           draft.section || ""
// //         ).trim() ||
// //         null,
// //       source: "custom",
// //     };

// //     setPccConfig(
// //       (current) => ({
// //         ...current,
// //         panels:
// //           current.panels.map(
// //             (item, index) =>
// //               index === panelIndex
// //                 ? {
// //                     ...item,
// //                     circuits: [
// //                       ...(Array.isArray(
// //                         item.circuits
// //                       )
// //                         ? item.circuits
// //                         : []),
// //                       customCircuit,
// //                     ],
// //                   }
// //                 : item
// //           ),
// //       })
// //     );

// //     setPccCustomDrafts(
// //       (current) => ({
// //         ...current,
// //         [panel.id]: {
// //           name: "",
// //           label: "",
// //           direction:
// //             "outgoing",
// //           section: "",
// //         },
// //       })
// //     );

// //     setError("");
// //   };

// //   const removePccCustomCircuit = (
// //     panelIndex,
// //     circuitId
// //   ) => {
// //     setPccConfig(
// //       (current) => ({
// //         ...current,
// //         panels:
// //           current.panels.map(
// //             (panel, index) =>
// //               index === panelIndex
// //                 ? {
// //                     ...panel,
// //                     circuits:
// //                       (
// //                         panel.circuits ||
// //                         []
// //                       ).filter(
// //                         (circuit) =>
// //                           circuit.id !==
// //                           circuitId
// //                       ),
// //                   }
// //                 : panel
// //           ),
// //       })
// //     );

// //     setError("");
// //   };

// //   const movePccCircuit = (
// //     panelIndex,
// //     circuitIndex,
// //     direction
// //   ) => {
// //     setPccConfig(
// //       (current) => ({
// //         ...current,
// //         panels:
// //           current.panels.map(
// //             (panel, index) => {
// //               if (
// //                 index !==
// //                 panelIndex
// //               ) {
// //                 return panel;
// //               }

// //               const circuits = [
// //                 ...(panel.circuits ||
// //                   []),
// //               ];

// //               const targetIndex =
// //                 circuitIndex +
// //                 direction;

// //               if (
// //                 targetIndex < 0 ||
// //                 targetIndex >=
// //                   circuits.length
// //               ) {
// //                 return panel;
// //               }

// //               [
// //                 circuits[
// //                   circuitIndex
// //                 ],
// //                 circuits[
// //                   targetIndex
// //                 ],
// //               ] = [
// //                 circuits[
// //                   targetIndex
// //                 ],
// //                 circuits[
// //                   circuitIndex
// //                 ],
// //               ];

// //               return {
// //                 ...panel,
// //                 circuits,
// //               };
// //             }
// //           ),
// //       })
// //     );
// //   };

// //   const togglePccPanelEquipment = (
// //   panelIndex,
// //   equipmentId
// // ) => {
// //   setPccConfig(
// //     (current) => ({
// //       ...current,
// //       panels: current.panels.map(
// //         (panel, index) => {
// //           if (index !== panelIndex) {
// //             return panel;
// //           }

// //           const equipment =
// //             panel.equipment.includes(
// //               equipmentId
// //             )
// //               ? panel.equipment.filter(
// //                   (item) =>
// //                     item !== equipmentId
// //                 )
// //               : [
// //                   ...panel.equipment,
// //                   equipmentId,
// //                 ];

// //           return {
// //             ...panel,
// //             equipment,
// //             upsUnits:
// //               equipmentId === "ups" &&
// //               equipment.includes("ups") &&
// //               panel.upsUnits.length === 0
// //                 ? [
// //                     UPS_UNIT_OPTIONS[0].id,
// //                   ]
// //                 : equipment.includes("ups")
// //                 ? panel.upsUnits
// //                 : [],
// //           };
// //         }
// //       ),
// //     })
// //   );

// //   setError("");
// // };

// //   const togglePccUpsUnit = (
// //   panelIndex,
// //   unitId
// // ) => {
// //   setPccConfig(
// //     (current) => ({
// //       ...current,
// //       panels: current.panels.map(
// //         (panel, index) => {
// //           if (index !== panelIndex) {
// //             return panel;
// //           }

// //           const upsUnits =
// //             panel.upsUnits.includes(unitId)
// //               ? panel.upsUnits.filter(
// //                   (item) => item !== unitId
// //                 )
// //               : [
// //                   ...panel.upsUnits,
// //                   unitId,
// //                 ];

// //           return {
// //             ...panel,
// //             upsUnits,
// //             equipment:
// //               upsUnits.length > 0 &&
// //               !panel.equipment.includes("ups")
// //                 ? [
// //                     ...panel.equipment,
// //                     "ups",
// //                   ]
// //                 : upsUnits.length === 0
// //                 ? panel.equipment.filter(
// //                     (item) => item !== "ups"
// //                   )
// //                 : panel.equipment,
// //           };
// //         }
// //       ),
// //     })
// //   );

// //   setError("");
// // };

// //   const updateRaisingMainConfig = (
// //   key,
// //   value
// // ) => {
// //   setRaisingMainConfig(
// //     (current) => ({
// //       ...current,
// //       [key]: value,
// //     })
// //   );

// //   setError("");
// // };

// //   const updateWingConfig = (
// //   key,
// //   value
// // ) => {
// //   setWingConfig(
// //     (current) => ({
// //       ...current,
// //       [key]: value,
// //     })
// //   );

// //   setError("");
// // };

// //   const updateDgConfig = (
// //   key,
// //   value
// // ) => {
// //   setDgConfig(
// //     (current) => {
// //       if (key === "count") {
// //         const count =
// //           Number(value);

// //         if (!Number.isInteger(count)) {
// //           return {
// //             ...current,
// //             count: value,
// //           };
// //         }

// //         const defaults =
// //           createDefaultDgUnits(count);

// //         return {
// //           ...current,
// //           count: value,
// //           units: Array.from(
// //             {
// //               length: Math.max(
// //                 count,
// //                 0
// //               ),
// //             },
// //             (_, index) =>
// //               current.units[index] ||
// //               defaults[index]
// //           ),
// //         };
// //       }

// //       return {
// //         ...current,
// //         [key]: value,
// //       };
// //     }
// //   );

// //   setError("");
// // };

// //   const updateDgUnit = (
// //   index,
// //   key,
// //   value
// // ) => {
// //   setDgConfig(
// //     (current) => ({
// //       ...current,
// //       units: current.units.map(
// //         (unit, unitIndex) =>
// //           unitIndex === index
// //             ? {
// //                 ...unit,
// //                 [key]: value,
// //               }
// //             : unit
// //       ),
// //     })
// //   );

// //   setError("");
// // };

// //   const updateHvacConfig = (
// //   key,
// //   value
// // ) => {
// //   setHvacConfig(
// //     (current) => ({
// //       ...current,
// //       [key]: value,
// //     })
// //   );

// //   setError("");
// // };

// //   const updateWaterConfig = (
// //   key,
// //   value
// // ) => {
// //   setWaterConfig(
// //     (current) => ({
// //       ...current,
// //       [key]: value,
// //     })
// //   );

// //   setError("");
// // };

// //   const updateFireConfig = (
// //   key,
// //   value
// // ) => {
// //   setFireConfig(
// //     (current) => ({
// //       ...current,
// //       [key]: value,
// //     })
// //   );

// //   setError("");
// // };



// //   const toggleSystem = (systemId) => {
// //     setSelectedSystems((current) => {
// //       if (current.includes(systemId)) {
// //         return current.filter((id) => id !== systemId);
// //       }

// //       return [...current, systemId];
// //     });

// //     setError("");
// //   };

// //   /* =========================================================
// //      VALIDATION
// //   ========================================================= */

// //   const validateProjectStep = () => {
// //     if (!projectDetails.clientName.trim()) {
// //       setError("Enter the client name.");
// //       return false;
// //     }

// //     if (!projectDetails.projectName.trim()) {
// //       setError("Enter the project name.");
// //       return false;
// //     }

// //     if (!projectDetails.projectCode.trim()) {
// //       setError("Enter the project code.");
// //       return false;
// //     }

// //     if (!projectDetails.location.trim()) {
// //       setError("Enter the project location.");
// //       return false;
// //     }

// //     if (!projectDetails.email.trim()) {
// //       setError("Enter the client email.");
// //       return false;
// //     }

// //     if (!projectDetails.password.trim()) {
// //       setError("Enter a demo client password.");
// //       return false;
// //     }

// //     return true;
// //   };

// //   const validateSystemsStep = () => {
// //     if (selectedSystems.length === 0) {
// //       setError("Select at least one BMS system.");
// //       return false;
// //     }

// //     return true;
// //   };

// //   const validateConfigurationStep = () => {
// //     if (selectedSystems.includes("source")) {
// //       const incomingCount = Number(sourceConfig.incomingCount);
// //       const outgoingCount = Number(sourceConfig.outgoingCount);
// //       const meterCount = Number(sourceConfig.meterCount);

// //       if (!Number.isInteger(incomingCount) || incomingCount < 0 || incomingCount > 20) {
// //         setError("Source incoming feeder count must be between 0 and 20.");
// //         return false;
// //       }

// //       if (!Number.isInteger(outgoingCount) || outgoingCount < 0 || outgoingCount > 30) {
// //         setError("Source outgoing feeder count must be between 0 and 30.");
// //         return false;
// //       }

// //       if (!Number.isInteger(meterCount) || meterCount < 0 || meterCount > 20) {
// //         setError("Source energy meter count must be between 0 and 20.");
// //         return false;
// //       }

// //       if (incomingCount === 0 && outgoingCount === 0) {
// //         setError("Source requires at least one incoming or outgoing feeder.");
// //         return false;
// //       }
// //     }

// //     if (selectedSystems.includes("feeder")) {
// //       const incomingCount = Number(feederConfig.incomingCount);
// //       const outgoingCount = Number(feederConfig.outgoingCount);

// //       if (!Number.isInteger(incomingCount) || incomingCount < 1 || incomingCount > 20) {
// //         setError("Feeder incoming feeder count must be between 1 and 20.");
// //         return false;
// //       }

// //       if (!Number.isInteger(outgoingCount) || outgoingCount < 1 || outgoingCount > 30) {
// //         setError("Feeder outgoing feeder count must be between 1 and 30.");
// //         return false;
// //       }
// //     }


// //     if (
// //   selectedSystems.includes(
// //     "transformer"
// //   )
// // ) {
// //   const count = Number(
// //     transformerConfig.count
// //   );

// //   if (
// //     !Number.isInteger(count) ||
// //     count < 1 ||
// //     count > 30
// //   ) {
// //     setError(
// //       "Transformer count must be between 1 and 30."
// //     );

// //     return false;
// //   }

// //   if (
// //     !transformerConfig.primaryVoltage
// //   ) {
// //     setError(
// //       "Select the transformer primary voltage."
// //     );

// //     return false;
// //   }

// //   if (
// //     !transformerConfig.secondaryVoltage
// //   ) {
// //     setError(
// //       "Select the transformer secondary voltage."
// //     );

// //     return false;
// //     }
// // }

// //     if (
// //   selectedSystems.includes(
// //     "lt-kiosk"
// //   )
// // ) {
// //   const count = Number(
// //     ltKioskConfig.count
// //   );

// //   if (
// //     !Number.isInteger(count) ||
// //     count < 1 ||
// //     count > 30
// //   ) {
// //     setError(
// //       "LT Kiosk count must be between 1 and 30."
// //     );

// //     return false;
// //   }
// // }

// //     if (
// //   selectedSystems.includes(
// //     "busduct"
// //   )
// // ) {
// //   const count = Number(
// //     busductConfig.count
// //   );

// //   if (
// //     !Number.isInteger(count) ||
// //     count < 1 ||
// //     count > 30
// //   ) {
// //     setError(
// //       "Busduct count must be between 1 and 30."
// //     );

// //     return false;
// //   }
// // }

// //     if (
// //   selectedSystems.includes(
// //     "pcc"
// //   )
// // ) {
// //   const count = Number(
// //     pccConfig.count
// //   );

// //   if (
// //     !Number.isInteger(count) ||
// //     count < 1 ||
// //     count > 20
// //   ) {
// //     setError(
// //       "PCC panel count must be between 1 and 20."
// //     );

// //     return false;
// //   }

// //   if (
// //     !Array.isArray(pccConfig.panels) ||
// //     pccConfig.panels.length !== count
// //   ) {
// //     setError(
// //       "PCC panel configuration rows must match the PCC panel count."
// //     );

// //     return false;
// //   }

// //   const invalidPanel =
// //     pccConfig.panels.find(
// //       (panel) => {
// //         const circuits =
// //           Array.isArray(
// //             panel.circuits
// //           )
// //             ? panel.circuits
// //             : [];

// //         const invalidCircuit =
// //           circuits.some(
// //             (circuit) =>
// //               !circuit?.id ||
// //               !String(
// //                 circuit?.name ||
// //                 ""
// //               ).trim() ||
// //               ![
// //                 "incoming",
// //                 "outgoing",
// //                 "coupler",
// //               ].includes(
// //                 circuit?.direction
// //               )
// //           );

// //         const hasUtility =
// //           circuits.some(
// //             (circuit) =>
// //               circuit.id?.endsWith(
// //                 "-utility1"
// //               ) ||
// //               circuit.id?.endsWith(
// //                 "-utility2"
// //               )
// //           );

// //         return (
// //           !panel.name.trim() ||
// //           invalidCircuit ||
// //           (
// //             panel.upsUnits.length >
// //               0 &&
// //             !hasUtility
// //           )
// //         );
// //       }
// //     );

// //   if (invalidPanel) {
// //     setError(
// //       "Check the PCC panel name, circuit configuration and UPS supply. UPS units require at least one selected Utility circuit."
// //     );

// //     return false;
// //   }
// // }

// //     if (
// //   selectedSystems.includes(
// //     "raising-main"
// //   )
// // ) {
// //   const count = Number(
// //     raisingMainConfig.count
// //   );

// //   if (
// //     !Number.isInteger(count) ||
// //     count < 1 ||
// //     count > 20
// //   ) {
// //     setError(
// //       "Raising Main count must be between 1 and 20."
// //     );

// //     return false;
// //   }
// // }

// //     if (
// //   selectedSystems.includes(
// //     "wing"
// //   )
// // ) {
// //   const wingCount = Number(
// //     wingConfig.count
// //   );

// //   const floorsPerWing = Number(
// //     wingConfig.floorsPerWing
// //   );

// //   if (
// //     !Number.isInteger(wingCount) ||
// //     wingCount < 1 ||
// //     wingCount > 10
// //   ) {
// //     setError(
// //       "Wing count must be between 1 and 10."
// //     );

// //     return false;
// //   }

// //   if (
// //     !Number.isInteger(floorsPerWing) ||
// //     floorsPerWing < 1 ||
// //     floorsPerWing > 100
// //   ) {
// //     setError(
// //       "Floors per Wing must be between 1 and 100."
// //     );

// //     return false;
// //   }
// // }

// //     if (
// //   selectedSystems.includes(
// //     "dg"
// //   )
// // ) {
// //   const count = Number(
// //     dgConfig.count
// //   );

// //   if (
// //     !Number.isInteger(count) ||
// //     count < 1 ||
// //     count > 20
// //   ) {
// //     setError(
// //       "DG count must be between 1 and 20."
// //     );

// //     return false;
// //   }

// //   if (
// //     dgConfig.units.length !== count
// //   ) {
// //     setError(
// //       "DG capacity rows must match the DG count."
// //     );

// //     return false;
// //   }

// //   const invalidUnit =
// //     dgConfig.units.find(
// //       (unit) => {
// //         const capacity = Number(
// //           unit.capacity
// //         );

// //         return (
// //           !unit.name.trim() ||
// //           !Number.isFinite(capacity) ||
// //           capacity < 1 ||
// //           capacity > 5000
// //         );
// //       }
// //     );

// //   if (invalidUnit) {
// //     setError(
// //       "Enter valid DG names and capacities between 1 and 5000 kVA."
// //     );

// //     return false;
// //   }
// // }

// //     if (
// //   selectedSystems.includes(
// //     "hvac"
// //   )
// // ) {
// //   const count = Number(
// //     hvacConfig.count
// //   );

// //   if (
// //     !Number.isInteger(count) ||
// //     count < 0 ||
// //     count > 30
// //   ) {
// //     setError(
// //       "HVAC equipment count must be between 0 and 30."
// //     );

// //     return false;
// //   }
// // }

// //     if (
// //   selectedSystems.includes(
// //     "wtp"
// //   )
// // ) {
// //   const tankCount = Number(
// //     waterConfig.tankCount
// //   );

// //   if (
// //     !Number.isInteger(tankCount) ||
// //     tankCount < 0 ||
// //     tankCount > 20
// //   ) {
// //     setError(
// //       "Water tank count must be between 0 and 20."
// //     );

// //     return false;
// //   }
// // }

// //     if (
// //   selectedSystems.includes(
// //     "fire"
// //   )
// // ) {
// //   if (
// //     !fireConfig.fireAlarms &&
// //     !fireConfig.fireFighting &&
// //     !fireConfig.firePump
// //   ) {
// //     setError(
// //       "Select at least one Fire subsystem."
// //     );

// //     return false;
// //   }
// // }

// //     return true;
// //   };

// //   /* =========================================================
// //      NEXT / BACK
// //   ========================================================= */

// //   const handleNext = () => {
// //     setError("");

// //     if (step === 1 && !validateProjectStep()) {
// //       return;
// //     }

// //     if (step === 2 && !validateSystemsStep()) {
// //       return;
// //     }

// //     if (step === 3 && !validateConfigurationStep()) {
// //       return;
// //     }

// //     setStep((current) => Math.min(current + 1, 4));
// //   };

// //   const handleBack = () => {
// //     setError("");

// //     setStep((current) => Math.max(current - 1, 1));
// //   };

// //   /* =========================================================
// //      CREATE PROJECT

// //      This creates our frontend project configuration.

// //      Later:
// //      POST /api/projects
// //   ========================================================= */

// //   const handleCreateProject = () => {
// //     const projectId = `project-${Date.now()}`;

// //     const systems = selectedSystemObjects.map((system) => {
// //       if (system.id === "source") {
// //         return {
// //           id: "source",
// //           type: "source",
// //           name: `${sourceConfig.voltageLevel} Source`,
// //           title: `${sourceConfig.voltageLevel} SOURCE`,

// //           configuration: {
// //             voltageLevel: sourceConfig.voltageLevel,

// //             incomingCount: Number(
// //               sourceConfig.incomingCount
// //             ),

// //             outgoingCount: Number(
// //               sourceConfig.outgoingCount
// //             ),

// //             meterCount: Number(sourceConfig.meterCount),

// //             protectionRelay: sourceConfig.protectionRelay,

// //             busCoupler: sourceConfig.busCoupler,
// //           },
// //         };
// //       }

// //       if (system.id === "feeder") {
// //     return {
// //     id: "feeder",
// //     type: "feeder",

// //     name: `${feederConfig.voltageLevel} Feeder`,

// //     title: `${feederConfig.voltageLevel} FEEDER`,

// //     configuration: {
// //       voltageLevel:
// //         feederConfig.voltageLevel,

// //       incomingCount: Number(
// //         feederConfig.incomingCount
// //       ),

// //       outgoingCount: Number(
// //         feederConfig.outgoingCount
// //       ),
// //     },

    

// //   };

  


// // }


// // if (
// //   system.id === "transformer"
// // ) {
// //   return {
// //     id: "transformer",

// //     type: "transformer",

// //     name: "Transformer",

// //     title: "TRANSFORMER",

// //     configuration: {
// //       count: Number(
// //         transformerConfig.count
// //       ),

// //       primaryVoltage:
// //         transformerConfig.primaryVoltage,

// //       secondaryVoltage:
// //         transformerConfig.secondaryVoltage,
// //     },
// //   };
// // }

// // if (
// //   system.id === "lt-kiosk"
// // ) {
// //   return {
// //     id: "lt-kiosk",

// //     type: "lt-kiosk",

// //     name: "LT Kiosk",

// //     title: "LT KIOSK",

// //     configuration: {
// //       count: Number(
// //         ltKioskConfig.count
// //       ),
// //     },
// //   };
// // }

// // if (
// //   system.id === "busduct"
// // ) {
// //   return {
// //     id: "busduct",

// //     type: "busduct",

// //     name: "Busduct",

// //     title: "BUSDUCT",

// //     configuration: {
// //       count: Number(
// //         busductConfig.count
// //       ),
// //     },
// //   };
// // }

// // if (
// //   system.id === "pcc"
// // ) {
// //   return {
// //     id: "pcc",

// //     type: "pcc",

// //     name: "PCC",

// //     title: "PCC",

// //     configuration: {
// //       count: Number(
// //         pccConfig.count
// //       ),

// //       panels: pccConfig.panels.map(
// //         (panel, index) => ({
// //           id:
// //             panel.id ||
// //             `pcc-${index + 1}`,

// //           name:
// //             panel.name.trim() ||
// //             `PCC ${index + 1}`,

// //           circuits:
// //             Array.isArray(
// //               panel.circuits
// //             )
// //               ? panel.circuits
// //                   .filter(Boolean)
// //                   .map(
// //                     (circuit) => ({
// //                       id:
// //                         circuit.id,
// //                       name:
// //                         circuit.name,
// //                       label:
// //                         circuit.label,
// //                       type:
// //                         circuit.type ||
// //                         (
// //                           circuit.direction ===
// //                           "coupler"
// //                             ? "coupler"
// //                             : "pcc-circuit"
// //                         ),
// //                       direction:
// //                         circuit.direction ||
// //                         "outgoing",
// //                       section:
// //                         circuit.section ||
// //                         null,
// //                       source:
// //                         circuit.source ||
// //                         "reference",
// //                     })
// //                   )
// //               : [],

// //           equipment:
// //             panel.equipment.filter(
// //               Boolean
// //             ),

// //           upsUnits:
// //             panel.upsUnits.filter(
// //               Boolean
// //             ),
// //         })
// //       ),
// //     },
// //   };
// // }

// // if (
// //   system.id === "raising-main"
// // ) {
// //   return {
// //     id: "raising-main",

// //     type: "raising-main",

// //     name: "Raising Main",

// //     title: "RAISING MAIN",

// //     configuration: {
// //       count: Number(
// //         raisingMainConfig.count
// //       ),
// //     },
// //   };
// // }

// // if (
// //   system.id === "wing"
// // ) {
// //   return {
// //     id: "wing",

// //     type: "wing",

// //     name: "Wing",

// //     title: "WING",

// //     configuration: {
// //       count: Number(
// //         wingConfig.count
// //       ),

// //       floorsPerWing: Number(
// //         wingConfig.floorsPerWing
// //       ),
// //     },
// //   };
// // }

// // if (
// //   system.id === "dg"
// // ) {
// //   return {
// //     id: "dg",

// //     type: "dg",

// //     name: "DG",

// //     title: "DG",

// //     configuration: {
// //       count: Number(
// //         dgConfig.count
// //       ),

// //       units: dgConfig.units.map(
// //         (unit, index) => ({
// //           name:
// //             unit.name.trim() ||
// //             `DG${index + 1}`,

// //           capacity: Number(
// //             unit.capacity
// //           ),
// //         })
// //       ),
// //     },
// //   };
// // }

// // if (
// //   system.id === "hvac"
// // ) {
// //   return {
// //     id: "hvac",

// //     type: "hvac",

// //     name: "HVAC",

// //     title: "HVAC",

// //     configuration: {
// //       count: Number(
// //         hvacConfig.count
// //       ),
// //     },
// //   };
// // }

// // if (
// //   system.id === "wtp"
// // ) {
// //   return {
// //     id: "wtp",

// //     type: "wtp",

// //     name: "Water Management",

// //     title: "WATER MANAGEMENT",

// //     configuration: {
// //       stpEnabled:
// //         waterConfig.stpEnabled,

// //       wtpEnabled:
// //         waterConfig.wtpEnabled,

// //       tankCount: Number(
// //         waterConfig.tankCount
// //       ),
// //     },
// //   };
// // }

// // if (
// //   system.id === "fire"
// // ) {
// //   return {
// //     id: "fire",

// //     type: "fire",

// //     name: "Fire",

// //     title: "FIRE",

// //     configuration: {
// //       fireAlarms:
// //         fireConfig.fireAlarms,

// //       fireFighting:
// //         fireConfig.fireFighting,

// //       firePump:
// //         fireConfig.firePump,
// //     },
// //   };
// // }
// //       return {
// //         id: system.id,
// //         type: system.id,
// //         name: system.name,
// //         title: system.name.toUpperCase(),

// //         /*
// //           These systems are selected but not yet dynamically
// //           configured in this first proof-of-concept.
// //         */
// //         configuration: {},
// //       };
// //     });

// //     const newProject = {
// //       id: projectId,

// //       clientName: projectDetails.clientName.trim(),

// //       projectName: projectDetails.projectName.trim(),

// //       projectCode: projectDetails.projectCode
// //         .trim()
// //         .toUpperCase(),

// //       location: projectDetails.location.trim(),

// //       clientCredentials: {
// //         email: projectDetails.email.trim().toLowerCase(),

// //         /*
// //           DEMO ONLY.

// //           Never store a real password like this in production.
// //         */
// //         password: projectDetails.password,
// //       },

// //       status: "active",

// //       systems,

// //       createdAt: new Date().toISOString(),
// //     };

// //     onProjectCreated?.(newProject);
// //   };

// //   /* =========================================================
// //      RESET SOURCE
// //   ========================================================= */

// //   const resetSource = () => {
// //     setSourceConfig({
// //       voltageLevel: "33kV",
// //       incomingCount: 2,
// //       outgoingCount: 1,
// //       meterCount: 1,
// //       protectionRelay: true,
// //       busCoupler: false,
// //     });
// //   };

// //   const resetFeeder = () => {
// //     setFeederConfig({
// //       voltageLevel: "33kV",
// //       incomingCount: 1,
// //       outgoingCount: 6,
// //     });
// //   };

// //   const resetTransformer = () => {
// //   setTransformerConfig({
// //     count: 6,
// //     primaryVoltage: "33kV",
// //     secondaryVoltage: "433V",
// //   });
// // };

// //   const resetLTKiosk = () => {
// //   setLTKioskConfig({
// //     count: 6,
// //   });
// // };

// //   const resetBusduct = () => {
// //   setBusductConfig({
// //     count: 6,
// //   });
// // };

// //   const resetPccConfig = () => {
// //   setPccConfig({
// //     count: 4,
// //     panels: createDefaultPccPanels(4),
// //   });

// //   setPccCustomDrafts({});
// // };

// //   const resetRaisingMain = () => {
// //   setRaisingMainConfig({
// //     count: 4,
// //   });
// // };

// //   const resetWing = () => {
// //   setWingConfig({
// //     count: 2,
// //     floorsPerWing: 20,
// //   });
// // };

// //   const resetDg = () => {
// //   setDgConfig({
// //     count: 7,
// //     units: createDefaultDgUnits(7),
// //   });
// // };

// //   const resetHvac = () => {
// //   setHvacConfig({
// //     count: 0,
// //   });
// // };

// //   const resetWaterConfig = () => {
// //   setWaterConfig({
// //     stpEnabled: true,
// //     wtpEnabled: true,
// //     tankCount: 4,
// //   });
// // };

// //   const resetFireConfig = () => {
// //   setFireConfig({
// //     fireAlarms: true,
// //     fireFighting: true,
// //     firePump: true,
// //   });
// // };

// //   /* =========================================================
// //      STYLES
// //   ========================================================= */

// //   const styles = `
// //     .cp {
// //       --cp-bg:#07131e;
// //       --cp-surface:#0d1e2c;
// //       --cp-surface-2:#102638;
// //       --cp-surface-3:#0a1a27;
// //       --cp-border:#203e51;
// //       --cp-border-strong:#2b6077;
// //       --cp-text:#f4f8fb;
// //       --cp-muted:#7f9aaa;
// //       --cp-cyan:#35c4d5;
// //       --cp-cyan-soft:#63d3df;
// //       --cp-green:#31c48d;
// //       --cp-red:#ff707a;

// //       width:100%;
// //       min-height:100vh;

// //       box-sizing:border-box;

// //       color:var(--cp-text);

// //       background:var(--cp-bg);

// //       font-family:
// //         Inter,
// //         ui-sans-serif,
// //         system-ui,
// //         -apple-system,
// //         BlinkMacSystemFont,
// //         "Segoe UI",
// //         sans-serif;
// //     }

// //     .cp * {
// //       box-sizing:border-box;
// //     }

// //     .cp-header {
// //       height:72px;

// //       padding:0 34px;

// //       display:flex;
// //       align-items:center;
// //       justify-content:space-between;

// //       border-bottom:
// //         1px solid
// //         var(--cp-border);

// //       background:#091823;
// //     }

// //     .cp-header__left {
// //       display:flex;
// //       align-items:center;
// //       gap:15px;
// //     }

// //     .cp-back {
// //       width:38px;
// //       height:38px;

// //       display:flex;
// //       align-items:center;
// //       justify-content:center;

// //       border:
// //         1px solid
// //         var(--cp-border);

// //       border-radius:5px;

// //       color:#9db8c7;

// //       background:#102536;

// //       cursor:pointer;
// //     }

// //     .cp-back:hover {
// //       color:var(--cp-cyan-soft);
// //       border-color:#348da5;
// //     }

// //     .cp-header__copy strong {
// //       display:block;

// //       font-size:14px;
// //     }

// //     .cp-header__copy span {
// //       display:block;

// //       margin-top:3px;

// //       color:var(--cp-muted);

// //       font-size:8px;
// //       font-weight:800;

// //       letter-spacing:.12em;
// //     }

// //     .cp-header__badge {
// //       display:flex;
// //       align-items:center;
// //       gap:6px;

// //       padding:7px 10px;

// //       border:
// //         1px solid
// //         #275b70;

// //       border-radius:4px;

// //       color:#67cbd8;

// //       background:#0e2939;

// //       font-size:8px;
// //       font-weight:800;

// //       letter-spacing:.08em;
// //     }

// //     .cp-shell {
// //       width:min(100%,1380px);

// //       margin:0 auto;

// //       padding:30px 38px 45px;
// //     }

// //     .cp-title {
// //       margin-bottom:25px;
// //     }

// //     .cp-title__eyebrow {
// //       margin-bottom:7px;

// //       color:var(--cp-cyan);

// //       font-size:8px;
// //       font-weight:800;

// //       letter-spacing:.14em;
// //     }

// //     .cp-title h1 {
// //       margin:0;

// //       font-size:28px;
// //       font-weight:720;

// //       letter-spacing:-.025em;
// //     }

// //     .cp-title p {
// //       max-width:690px;

// //       margin:7px 0 0;

// //       color:var(--cp-muted);

// //       font-size:10px;

// //       line-height:1.6;
// //     }

// //     /* =====================================================
// //        STEPS
// //     ===================================================== */

// //     .cp-steps {
// //       display:grid;

// //       grid-template-columns:
// //         repeat(4,minmax(0,1fr));

// //       margin-bottom:28px;

// //       border:
// //         1px solid
// //         var(--cp-border);

// //       background:var(--cp-surface);
// //     }

// //     .cp-step {
// //       position:relative;

// //       min-height:66px;

// //       padding:0 18px;

// //       display:flex;
// //       align-items:center;

// //       gap:10px;

// //       color:#607f91;

// //       border-right:
// //         1px solid
// //         var(--cp-border);
// //     }

// //     .cp-step:last-child {
// //       border-right:0;
// //     }

// //     .cp-step__number {
// //       width:27px;
// //       height:27px;

// //       flex:0 0 27px;

// //       display:flex;
// //       align-items:center;
// //       justify-content:center;

// //       border:
// //         1px solid
// //         #345265;

// //       border-radius:50%;

// //       font-size:9px;
// //       font-weight:800;
// //     }

// //     .cp-step span {
// //       font-size:9px;
// //       font-weight:800;

// //       letter-spacing:.08em;
// //     }

// //     .cp-step--active {
// //       color:#dcecf3;

// //       background:#10293a;
// //     }

// //     .cp-step--active::after {
// //       content:"";

// //       position:absolute;

// //       left:0;
// //       right:0;
// //       bottom:-1px;

// //       height:2px;

// //       background:var(--cp-cyan);
// //     }

// //     .cp-step--active
// //     .cp-step__number {
// //       border-color:var(--cp-cyan);

// //       color:#04181f;

// //       background:var(--cp-cyan);
// //     }

// //     .cp-step--complete {
// //       color:#8fcab2;
// //     }

// //     .cp-step--complete
// //     .cp-step__number {
// //       border-color:#2d916b;

// //       color:#b2ecd1;

// //       background:#12392d;
// //     }

// //     /* =====================================================
// //        CONTENT PANEL
// //     ===================================================== */

// //     .cp-panel {
// //       border:
// //         1px solid
// //         var(--cp-border);

// //       background:var(--cp-surface);
// //     }

// //     .cp-panel__header {
// //       padding:20px 22px;

// //       border-bottom:
// //         1px solid
// //         var(--cp-border);
// //     }

// //     .cp-panel__header h2 {
// //       margin:0;

// //       font-size:16px;
// //       font-weight:700;
// //     }

// //     .cp-panel__header p {
// //       margin:6px 0 0;

// //       color:var(--cp-muted);

// //       font-size:9px;

// //       line-height:1.5;
// //     }

// //     .cp-panel__body {
// //       padding:23px;
// //     }

// //     /* =====================================================
// //        FORM
// //     ===================================================== */

// //     .cp-form-grid {
// //       display:grid;

// //       grid-template-columns:
// //         repeat(2,minmax(0,1fr));

// //       gap:18px;
// //     }

// //     .cp-field {
// //       display:flex;
// //       flex-direction:column;

// //       gap:7px;
// //     }

// //     .cp-field--full {
// //       grid-column:1 / -1;
// //     }

// //     .cp-field label {
// //       color:#b7ccd7;

// //       font-size:8px;
// //       font-weight:800;

// //       letter-spacing:.08em;
// //     }

// //     .cp-required {
// //       color:#ff8a91;
// //     }

// //     .cp-input,
// //     .cp-select {
// //       width:100%;
// //       height:44px;

// //       padding:0 13px;

// //       border:
// //         1px solid
// //         #294b60;

// //       border-radius:4px;

// //       outline:none;

// //       color:#edf6fa;

// //       background:#0a1d2b;

// //       font-family:inherit;

// //       font-size:10px;
// //     }

// //     .cp-input::placeholder {
// //       color:#557487;
// //     }

// //     .cp-input:focus,
// //     .cp-select:focus {
// //       border-color:#3196ad;

// //       box-shadow:
// //         0 0 0 3px
// //         rgba(53,196,213,.06);
// //     }

// //     .cp-select {
// //       cursor:pointer;
// //     }

// //     /* =====================================================
// //        SYSTEM SELECTION
// //     ===================================================== */

// //     .cp-system-grid {
// //       display:grid;

// //       grid-template-columns:
// //         repeat(4,minmax(0,1fr));

// //       gap:13px;
// //     }

// //     .cp-system {
// //       position:relative;

// //       min-height:142px;

// //       padding:16px;

// //       border:
// //         1px solid
// //         #29495c;

// //       border-radius:5px;

// //       text-align:left;

// //       color:var(--cp-text);

// //       background:#0b1c29;

// //       cursor:pointer;
// //     }

// //     .cp-system:hover {
// //       border-color:#34778e;
// //     }

// //     .cp-system--selected {
// //       border-color:#2faabd;

// //       background:#0e2b3b;
// //     }

// //     .cp-system__check {
// //       position:absolute;

// //       top:12px;
// //       right:12px;

// //       width:20px;
// //       height:20px;

// //       display:flex;
// //       align-items:center;
// //       justify-content:center;

// //       border:
// //         1px solid
// //         #38586a;

// //       border-radius:3px;

// //       color:transparent;

// //       background:#0b1a26;
// //     }

// //     .cp-system--selected
// //     .cp-system__check {
// //       border-color:var(--cp-cyan);

// //       color:#04171d;

// //       background:var(--cp-cyan);
// //     }

// //     .cp-system__icon {
// //       width:37px;
// //       height:37px;

// //       margin-bottom:13px;

// //       display:flex;
// //       align-items:center;
// //       justify-content:center;

// //       border:
// //         1px solid
// //         #285c72;

// //       border-radius:4px;

// //       color:#5bcbd9;

// //       background:#103145;
// //     }

// //     .cp-system strong {
// //       display:block;

// //       margin-bottom:5px;

// //       font-size:11px;
// //     }

// //     .cp-system p {
// //       margin:0;

// //       color:#718e9f;

// //       font-size:8px;

// //       line-height:1.45;
// //     }

// //     /* =====================================================
// //        CONFIGURATION
// //     ===================================================== */

// //     .cp-config-stack {
// //       display:flex;
// //       flex-direction:column;

// //       gap:16px;
// //     }

// //     .cp-config-card {
// //       border:
// //         1px solid
// //         #294b5f;

// //       background:#0a1b28;
// //     }

// //     .cp-config-card__head {
// //       min-height:58px;

// //       padding:0 17px;

// //       display:flex;
// //       align-items:center;
// //       justify-content:space-between;

// //       border-bottom:
// //         1px solid
// //         #244355;
// //     }

// //     .cp-config-card__identity {
// //       display:flex;
// //       align-items:center;

// //       gap:10px;
// //     }

// //     .cp-config-card__icon {
// //       width:34px;
// //       height:34px;

// //       display:flex;
// //       align-items:center;
// //       justify-content:center;

// //       border:
// //         1px solid
// //         #2b647a;

// //       border-radius:4px;

// //       color:#5bcbd9;

// //       background:#103247;
// //     }

// //     .cp-config-card__identity strong {
// //       display:block;

// //       font-size:11px;
// //     }

// //     .cp-config-card__identity span {
// //       display:block;

// //       margin-top:3px;

// //       color:#6f8d9e;

// //       font-size:8px;
// //     }

// //     .cp-reset {
// //       height:31px;

// //       padding:0 10px;

// //       display:flex;
// //       align-items:center;
// //       gap:6px;

// //       border:
// //         1px solid
// //         #31566a;

// //       border-radius:4px;

// //       color:#91adbc;

// //       background:#102332;

// //       font-size:8px;
// //       font-weight:800;

// //       cursor:pointer;
// //     }

// //     .cp-config-card__body {
// //       padding:18px;
// //     }

// //     .cp-config-grid {
// //       display:grid;

// //       grid-template-columns:
// //         repeat(3,minmax(0,1fr));

// //       gap:16px;
// //     }

// //     .cp-toggle-field {
// //       min-height:70px;

// //       padding:12px 13px;

// //       display:flex;
// //       align-items:center;
// //       justify-content:space-between;

// //       gap:15px;

// //       border:
// //         1px solid
// //         #27475a;

// //       background:#0d202e;
// //     }

// //     .cp-toggle-field strong {
// //       display:block;

// //       margin-bottom:3px;

// //       font-size:9px;
// //     }

// //     .cp-toggle-field span {
// //       color:#6f8d9d;

// //       font-size:8px;
// //     }

// //     .cp-toggle {
// //       width:45px;
// //       height:24px;

// //       padding:2px;

// //       border:0;

// //       border-radius:20px;

// //       background:#344d5d;

// //       cursor:pointer;
// //     }

// //     .cp-toggle::after {
// //       content:"";

// //       display:block;

// //       width:20px;
// //       height:20px;

// //       border-radius:50%;

// //       background:#b8c6ce;

// //       transition:
// //         transform .15s ease;
// //     }

// //     .cp-toggle--on {
// //       background:#218e78;
// //     }

// //     .cp-toggle--on::after {
// //       transform:translateX(21px);

// //       background:#e5fff5;
// //     }

// //     .cp-config-placeholder {
// //       padding:17px;

// //       border:
// //         1px dashed
// //         #315064;

// //       color:#6f8d9e;

// //       background:#0b1d2a;

// //       font-size:9px;

// //       line-height:1.6;
// //     }


// //     .cp-subheading {
// //       margin:20px 0 10px;
// //       color:#8fb0bf;
// //       font-size:8px;
// //       font-weight:800;
// //       letter-spacing:.12em;
// //     }

// //     .cp-custom-builder {
// //       padding:15px;
// //       border:1px solid #27475a;
// //       background:#0d202e;
// //     }

// //     .cp-add-equipment {
// //       height:36px;
// //       margin-top:14px;
// //       padding:0 13px;
// //       display:inline-flex;
// //       align-items:center;
// //       gap:7px;
// //       border:1px solid #2aa9bc;
// //       border-radius:4px;
// //       color:#061b21;
// //       background:var(--cp-cyan);
// //       font-family:inherit;
// //       font-size:8px;
// //       font-weight:800;
// //       cursor:pointer;
// //     }

// //     .cp-custom-list {
// //       margin-top:12px;
// //       display:flex;
// //       flex-direction:column;
// //       gap:7px;
// //     }

// //     .cp-custom-item {
// //       min-height:54px;
// //       padding:9px 11px;
// //       display:flex;
// //       align-items:center;
// //       justify-content:space-between;
// //       gap:14px;
// //       border:1px solid #294b5f;
// //       background:#0a1b28;
// //     }

// //     .cp-custom-item strong {
// //       display:block;
// //       color:#e8f4f8;
// //       font-size:9px;
// //     }

// //     .cp-custom-item span {
// //       display:block;
// //       margin-top:4px;
// //       color:#708e9f;
// //       font-size:8px;
// //     }

// //     .cp-custom-actions {
// //       display:flex;
// //       gap:6px;
// //       flex:0 0 auto;
// //     }

// //     .cp-custom-actions button {
// //       width:30px;
// //       height:30px;
// //       display:grid;
// //       place-items:center;
// //       border:1px solid #31566a;
// //       border-radius:3px;
// //       color:#9fc0ce;
// //       background:#102332;
// //       cursor:pointer;
// //     }

// //     .cp-custom-actions button:disabled {
// //       opacity:.35;
// //       cursor:not-allowed;
// //     }

// //     .cp-custom-actions .cp-custom-delete {
// //       border-color:#71414a;
// //       color:#ff9ca4;
// //       background:#2b171c;
// //     }

// //     /* =====================================================
// //        REVIEW
// //     ===================================================== */

// //     .cp-review-grid {
// //       display:grid;

// //       grid-template-columns:
// //         minmax(0,1fr)
// //         minmax(0,1fr);

// //       gap:17px;
// //     }

// //     .cp-review-card {
// //       border:
// //         1px solid
// //         #294b5f;

// //       background:#0a1b28;
// //     }

// //     .cp-review-card__head {
// //       padding:14px 16px;

// //       border-bottom:
// //         1px solid
// //         #244355;

// //       color:#c7d9e2;

// //       font-size:9px;
// //       font-weight:800;

// //       letter-spacing:.08em;
// //     }

// //     .cp-review-card__body {
// //       padding:15px 16px;
// //     }

// //     .cp-review-row {
// //       min-height:35px;

// //       display:flex;
// //       align-items:center;
// //       justify-content:space-between;

// //       gap:15px;

// //       border-bottom:
// //         1px solid
// //         rgba(43,75,94,.55);
// //     }

// //     .cp-review-row:last-child {
// //       border-bottom:0;
// //     }

// //     .cp-review-row span {
// //       color:#718e9e;

// //       font-size:8px;
// //     }

// //     .cp-review-row strong {
// //       max-width:65%;

// //       color:#e5f0f5;

// //       font-size:9px;
// //       font-weight:650;

// //       text-align:right;
// //     }

// //     .cp-review-systems {
// //       display:flex;
// //       flex-wrap:wrap;

// //       gap:7px;
// //     }

// //     .cp-review-system {
// //       padding:7px 9px;

// //       border:
// //         1px solid
// //         #2b6075;

// //       border-radius:3px;

// //       color:#8bd6df;

// //       background:#0e2a3a;

// //       font-size:8px;
// //       font-weight:750;
// //     }

// //     .cp-review-source {
// //       grid-column:1 / -1;
// //     }

// //     /* =====================================================
// //        ERROR
// //     ===================================================== */

// //     .cp-error {
// //       margin-top:16px;

// //       padding:11px 13px;

// //       border-left:
// //         3px solid
// //         var(--cp-red);

// //       color:#ffabb1;

// //       background:
// //         rgba(185,59,71,.11);

// //       font-size:9px;
// //     }

// //     /* =====================================================
// //        FOOTER
// //     ===================================================== */

// //     .cp-footer {
// //       margin-top:17px;

// //       padding-top:17px;

// //       display:flex;
// //       align-items:center;
// //       justify-content:space-between;

// //       border-top:
// //         1px solid
// //         var(--cp-border);
// //     }

// //     .cp-footer__right {
// //       display:flex;
// //       gap:9px;
// //     }

// //     .cp-btn {
// //       height:39px;

// //       padding:0 15px;

// //       display:flex;
// //       align-items:center;
// //       justify-content:center;

// //       gap:7px;

// //       border-radius:4px;

// //       font-family:inherit;

// //       font-size:9px;
// //       font-weight:800;

// //       cursor:pointer;
// //     }

// //     .cp-btn--secondary {
// //       border:
// //         1px solid
// //         #315367;

// //       color:#9cb6c4;

// //       background:#102331;
// //     }

// //     .cp-btn--primary {
// //       border:
// //         1px solid
// //         #2aa9bc;

// //       color:#04171d;

// //       background:var(--cp-cyan);
// //     }

// //     .cp-btn--create {
// //       border:
// //         1px solid
// //         #2fa676;

// //       color:#041c13;

// //       background:#42ca94;
// //     }

// //     .cp-btn:hover {
// //       filter:brightness(1.08);
// //     }

// //     /* =====================================================
// //        RESPONSIVE
// //     ===================================================== */

// //     @media(max-width:1050px) {
// //       .cp-system-grid {
// //         grid-template-columns:
// //           repeat(3,minmax(0,1fr));
// //       }

// //       .cp-config-grid {
// //         grid-template-columns:
// //           repeat(2,minmax(0,1fr));
// //       }
// //     }

// //     @media(max-width:760px) {
// //       .cp-header {
// //         padding:0 17px;
// //       }

// //       .cp-shell {
// //         padding:22px 17px 35px;
// //       }

// //       .cp-steps {
// //         grid-template-columns:
// //           repeat(2,minmax(0,1fr));
// //       }

// //       .cp-step:nth-child(2) {
// //         border-right:0;
// //       }

// //       .cp-step:nth-child(-n+2) {
// //         border-bottom:
// //           1px solid
// //           var(--cp-border);
// //       }

// //       .cp-form-grid,
// //       .cp-review-grid {
// //         grid-template-columns:1fr;
// //       }

// //       .cp-review-source {
// //         grid-column:auto;
// //       }

// //       .cp-system-grid,
// //       .cp-config-grid {
// //         grid-template-columns:
// //           repeat(2,minmax(0,1fr));
// //       }
// //     }

// //     @media(max-width:520px) {
// //       .cp-system-grid,
// //       .cp-config-grid {
// //         grid-template-columns:1fr;
// //       }

// //       .cp-footer {
// //         align-items:stretch;
// //         flex-direction:column;

// //         gap:9px;
// //       }

// //       .cp-footer__right {
// //         display:grid;
// //         grid-template-columns:1fr 1fr;
// //       }

// //       .cp-footer .cp-btn {
// //         width:100%;
// //       }
// //     }
// //   `;

// //   /* =========================================================
// //      STEP 1
// //   ========================================================= */

// //   const renderProjectDetails = () => (
// //     <section className="cp-panel">
// //       <div className="cp-panel__header">
// //         <h2>Client & Project Details</h2>

// //         <p>
// //           Enter the basic information for the new BMS project.
// //         </p>
// //       </div>

// //       <div className="cp-panel__body">
// //         <div className="cp-form-grid">
// //           <div className="cp-field">
// //             <label>
// //               CLIENT NAME{" "}
// //               <span className="cp-required">*</span>
// //             </label>

// //             <input
// //               className="cp-input"
// //               value={projectDetails.clientName}
// //               placeholder="Example: ABC Technologies"
// //               onChange={(event) =>
// //                 updateProjectDetail(
// //                   "clientName",
// //                   event.target.value
// //                 )
// //               }
// //             />
// //           </div>

// //           <div className="cp-field">
// //             <label>
// //               PROJECT NAME{" "}
// //               <span className="cp-required">*</span>
// //             </label>

// //             <input
// //               className="cp-input"
// //               value={projectDetails.projectName}
// //               placeholder="Example: ABC Tech Park"
// //               onChange={(event) =>
// //                 updateProjectDetail(
// //                   "projectName",
// //                   event.target.value
// //                 )
// //               }
// //             />
// //           </div>

// //           <div className="cp-field">
// //             <label>
// //               PROJECT CODE{" "}
// //               <span className="cp-required">*</span>
// //             </label>

// //             <input
// //               className="cp-input"
// //               value={projectDetails.projectCode}
// //               placeholder="Example: BMS-001"
// //               onChange={(event) =>
// //                 updateProjectDetail(
// //                   "projectCode",
// //                   event.target.value
// //                 )
// //               }
// //             />
// //           </div>

// //           <div className="cp-field">
// //             <label>
// //               PROJECT LOCATION{" "}
// //               <span className="cp-required">*</span>
// //             </label>

// //             <input
// //               className="cp-input"
// //               value={projectDetails.location}
// //               placeholder="Example: Hyderabad"
// //               onChange={(event) =>
// //                 updateProjectDetail(
// //                   "location",
// //                   event.target.value
// //                 )
// //               }
// //             />
// //           </div>

// //           <div className="cp-field">
// //             <label>
// //               CLIENT EMAIL{" "}
// //               <span className="cp-required">*</span>
// //             </label>

// //             <input
// //               className="cp-input"
// //               type="email"
// //               value={projectDetails.email}
// //               placeholder="client@company.com"
// //               onChange={(event) =>
// //                 updateProjectDetail(
// //                   "email",
// //                   event.target.value
// //                 )
// //               }
// //             />
// //           </div>

// //           <div className="cp-field">
// //             <label>
// //               DEMO CLIENT PASSWORD{" "}
// //               <span className="cp-required">*</span>
// //             </label>

// //             <input
// //               className="cp-input"
// //               type="text"
// //               value={projectDetails.password}
// //               placeholder="Demo password"
// //               onChange={(event) =>
// //                 updateProjectDetail(
// //                   "password",
// //                   event.target.value
// //                 )
// //               }
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );

// //   /* =========================================================
// //      STEP 2
// //   ========================================================= */

// //   const renderSystemSelection = () => (
// //     <section className="cp-panel">
// //       <div className="cp-panel__header">
// //         <h2>Select BMS Systems</h2>

// //         <p>
// //           Choose the systems available in this client project.
// //           Only selected systems will eventually appear in the
// //           project dashboard.
// //         </p>
// //       </div>

// //       <div className="cp-panel__body">
// //         <div className="cp-system-grid">
// //           {AVAILABLE_SYSTEMS.map((system) => {
// //             const selected = selectedSystems.includes(system.id);

// //             const Icon =
// //               system.icon ||
// //               ShieldCheck;

// //             return (
// //               <button
// //                 type="button"
// //                 key={system.id}
// //                 className={`cp-system ${
// //                   selected ? "cp-system--selected" : ""
// //                 }`}
// //                 onClick={() => toggleSystem(system.id)}
// //               >
// //                 <div className="cp-system__check">
// //                   <Check size={13} />
// //                 </div>

// //                 <div className="cp-system__icon">
// //                   <Icon
// //                     size={19}
// //                     strokeWidth={1.8}
// //                   />
// //                 </div>

// //                 <strong>{system.name}</strong>

// //                 <p>
// //                   {system.description ||
// //                     "Selected for this project"}
// //                 </p>
// //               </button>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );

// //   /* =========================================================
// //      SOURCE CONFIGURATION
// //   ========================================================= */

// //   const renderSourceConfiguration = () => (
// //     <div className="cp-config-card">
// //       <div className="cp-config-card__head">
// //         <div className="cp-config-card__identity">
// //           <div className="cp-config-card__icon">
// //             <UtilityPole size={18} />
// //           </div>

// //           <div>
// //             <strong>SOURCE</strong>

// //             <span>
// //               HT source and incoming supply configuration
// //             </span>
// //           </div>
// //         </div>

// //         <button
// //           type="button"
// //           className="cp-reset"
// //           onClick={resetSource}
// //         >
// //           <RotateCcw size={12} />

// //           RESET
// //         </button>
// //       </div>

// //       <div className="cp-config-card__body">
// //         <div className="cp-config-grid">
// //           <div className="cp-field">
// //             <label>VOLTAGE LEVEL</label>

// //             <select
// //               className="cp-select"
// //               value={sourceConfig.voltageLevel}
// //               onChange={(event) =>
// //                 updateSourceConfig(
// //                   "voltageLevel",
// //                   event.target.value
// //                 )
// //               }
// //             >
// //               <option value="11kV">11 kV</option>
// //               <option value="22kV">22 kV</option>
// //               <option value="33kV">33 kV</option>
// //               <option value="66kV">66 kV</option>
// //             </select>
// //           </div>

// //           <div className="cp-field">
// //             <label>INCOMING FEEDERS</label>

// //            <input
// //   className="cp-input"
// //   type="number"
// //   min="1"
// //   max="20"
// //   value={sourceConfig.incomingCount}
// //   onChange={(event) =>
// //     updateSourceConfig(
// //       "incomingCount",
// //       event.target.value
// //     )
// //   }
// // />
// //           </div>

// //           <div className="cp-field">
// //             <label>OUTGOING FEEDERS</label>

// //            <input
// //   className="cp-input"
// //   type="number"
// //   min="1"
// //   max="30"
// //   value={sourceConfig.outgoingCount}
// //   onChange={(event) =>
// //     updateSourceConfig(
// //       "outgoingCount",
// //       event.target.value
// //     )
// //   }
// // />
// //           </div>

// //           <div className="cp-field">
// //             <label>ENERGY METERS</label>

// //             <input
// //               className="cp-input"
// //               type="number"
// //               min="0"
// //               max="20"
// //               value={sourceConfig.meterCount}
// //               onChange={(event) =>
// //                 updateSourceConfig(
// //                   "meterCount",
// //                   event.target.value
// //                 )
// //               }
// //             />
// //           </div>

// //           <div className="cp-toggle-field">
// //             <div>
// //               <strong>Protection Relay</strong>

// //               <span>
// //                 Include source protection relay
// //               </span>
// //             </div>

// //             <button
// //               type="button"
// //               className={`cp-toggle ${
// //                 sourceConfig.protectionRelay
// //                   ? "cp-toggle--on"
// //                   : ""
// //               }`}
// //               aria-label="Toggle protection relay"
// //               onClick={() =>
// //                 updateSourceConfig(
// //                   "protectionRelay",
// //                   !sourceConfig.protectionRelay
// //                 )
// //               }
// //             />
// //           </div>

// //           <div className="cp-toggle-field">
// //             <div>
// //               <strong>Bus Coupler</strong>

// //               <span>
// //                 Include bus coupler equipment
// //               </span>
// //             </div>

// //             <button
// //               type="button"
// //               className={`cp-toggle ${
// //                 sourceConfig.busCoupler
// //                   ? "cp-toggle--on"
// //                   : ""
// //               }`}
// //               aria-label="Toggle bus coupler"
// //               onClick={() =>
// //                 updateSourceConfig(
// //                   "busCoupler",
// //                   !sourceConfig.busCoupler
// //                 )
// //               }
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const renderFeederConfiguration = () => (
// //   <div className="cp-config-card">
// //     <div className="cp-config-card__head">
// //       <div className="cp-config-card__identity">
// //         <div className="cp-config-card__icon">
// //           <Network size={18} />
// //         </div>

// //         <div>
// //           <strong>FEEDER</strong>

// //           <span>
// //             HT feeder incoming and outgoing configuration
// //           </span>
// //         </div>
// //       </div>

// //       <button
// //         type="button"
// //         className="cp-reset"
// //         onClick={resetFeeder}
// //       >
// //         <RotateCcw size={12} />

// //         RESET
// //       </button>
// //     </div>

// //     <div className="cp-config-card__body">
// //       <div className="cp-config-grid">

// //         <div className="cp-field">
// //           <label>VOLTAGE LEVEL</label>

// //           <select
// //             className="cp-select"
// //             value={feederConfig.voltageLevel}
// //             onChange={(event) =>
// //               updateFeederConfig(
// //                 "voltageLevel",
// //                 event.target.value
// //               )
// //             }
// //           >
// //             <option value="11kV">
// //               11 kV
// //             </option>

// //             <option value="22kV">
// //               22 kV
// //             </option>

// //             <option value="33kV">
// //               33 kV
// //             </option>

// //             <option value="66kV">
// //               66 kV
// //             </option>
// //           </select>
// //         </div>

// //         <div className="cp-field">
// //           <label>INCOMING FEEDERS</label>

// //           <input
// //             className="cp-input"
// //             type="number"
// //             min="1"
// //             max="20"
// //             value={
// //               feederConfig.incomingCount
// //             }
// //             onChange={(event) =>
// //               updateFeederConfig(
// //                 "incomingCount",
// //                 event.target.value
// //               )
// //             }
// //           />
// //         </div>

// //         <div className="cp-field">
// //           <label>OUTGOING FEEDERS</label>

// //           <input
// //             className="cp-input"
// //             type="number"
// //             min="1"
// //             max="30"
// //             value={
// //               feederConfig.outgoingCount
// //             }
// //             onChange={(event) =>
// //               updateFeederConfig(
// //                 "outgoingCount",
// //                 event.target.value
// //               )
// //             }
// //           />
// //         </div>

// //       </div>
// //     </div>
// //   </div>
// // );

// // const renderTransformerConfiguration =
// //   () => (
// //     <div className="cp-config-card">

// //       <div className="cp-config-card__head">

// //         <div className="cp-config-card__identity">

// //           <div className="cp-config-card__icon">
// //             <Zap size={18} />
// //           </div>

// //           <div>
// //             <strong>
// //               TRANSFORMER
// //             </strong>

// //             <span>
// //               Step-down transformer
// //               configuration
// //             </span>
// //           </div>

// //         </div>


// //         <button
// //           type="button"
// //           className="cp-reset"
// //           onClick={
// //             resetTransformer
// //           }
// //         >
// //           <RotateCcw size={12} />

// //           RESET
// //         </button>

// //       </div>


// //       <div className="cp-config-card__body">

// //         <div className="cp-config-grid">

// //           {/* COUNT */}

// //           <div className="cp-field">

// //             <label>
// //               TRANSFORMER COUNT
// //             </label>

// //             <input
// //               className="cp-input"
// //               type="number"
// //               min="1"
// //               max="30"
// //               value={
// //                 transformerConfig.count
// //               }
// //               onChange={(event) =>
// //                 updateTransformerConfig(
// //                   "count",
// //                   event.target.value
// //                 )
// //               }
// //             />

// //           </div>


// //           {/* PRIMARY */}

// //           <div className="cp-field">

// //             <label>
// //               PRIMARY VOLTAGE
// //             </label>

// //             <select
// //               className="cp-select"
// //               value={
// //                 transformerConfig
// //                   .primaryVoltage
// //               }
// //               onChange={(event) =>
// //                 updateTransformerConfig(
// //                   "primaryVoltage",
// //                   event.target.value
// //                 )
// //               }
// //             >
// //               <option value="11kV">
// //                 11 kV
// //               </option>

// //               <option value="22kV">
// //                 22 kV
// //               </option>

// //               <option value="33kV">
// //                 33 kV
// //               </option>

// //               <option value="66kV">
// //                 66 kV
// //               </option>
// //             </select>

// //           </div>


// //           {/* SECONDARY */}

// //           <div className="cp-field">

// //             <label>
// //               SECONDARY VOLTAGE
// //             </label>

// //             <select
// //               className="cp-select"
// //               value={
// //                 transformerConfig
// //                   .secondaryVoltage
// //               }
// //               onChange={(event) =>
// //                 updateTransformerConfig(
// //                   "secondaryVoltage",
// //                   event.target.value
// //                 )
// //               }
// //             >
// //               <option value="415V">
// //                 415 V
// //               </option>

// //               <option value="433V">
// //                 433 V
// //               </option>

// //               <option value="440V">
// //                 440 V
// //               </option>
// //             </select>

// //           </div>

// //         </div>

// //       </div>

// //     </div>
// //   );

// // const renderLTKioskConfiguration =
// //   () => (
// //     <div className="cp-config-card">

// //       <div className="cp-config-card__head">

// //         <div className="cp-config-card__identity">

// //           <div className="cp-config-card__icon">
// //             <PanelTop size={18} />
// //           </div>

// //           <div>
// //             <strong>
// //               LT KIOSK
// //             </strong>

// //             <span>
// //               LT distribution kiosk
// //               configuration
// //             </span>
// //           </div>

// //         </div>


// //         <button
// //           type="button"
// //           className="cp-reset"
// //           onClick={
// //             resetLTKiosk
// //           }
// //         >
// //           <RotateCcw size={12} />

// //           RESET
// //         </button>

// //       </div>


// //       <div className="cp-config-card__body">

// //         <div className="cp-config-grid">

// //           <div className="cp-field">

// //             <label>
// //               LT KIOSK COUNT
// //             </label>

// //             <input
// //               className="cp-input"
// //               type="number"
// //               min="1"
// //               max="30"
// //               value={
// //                 ltKioskConfig.count
// //               }
// //               onChange={(event) =>
// //                 updateLTKioskConfig(
// //                   "count",
// //                   event.target.value
// //                 )
// //               }
// //             />

// //           </div>

// //         </div>

// //         </div>

// //       </div>

   
// //   );

// // const renderBusductConfiguration =
// //   () => (
// //     <div className="cp-config-card">

// //       <div className="cp-config-card__head">

// //         <div className="cp-config-card__identity">

// //           <div className="cp-config-card__icon">
// //             <Network size={18} />
// //           </div>

// //           <div>
// //             <strong>
// //               BUSDUCT
// //             </strong>

// //             <span>
// //               LT busduct and busbar
// //               configuration
// //             </span>
// //           </div>

// //         </div>


// //         <button
// //           type="button"
// //           className="cp-reset"
// //           onClick={
// //             resetBusduct
// //           }
// //         >
// //           <RotateCcw size={12} />

// //           RESET
// //         </button>

// //       </div>


// //       <div className="cp-config-card__body">

// //         <div className="cp-config-grid">

// //           <div className="cp-field">

// //             <label>
// //               BUSDUCT COUNT
// //             </label>

// //             <input
// //               className="cp-input"
// //               type="number"
// //               min="1"
// //               max="30"
// //               value={
// //                 busductConfig.count
// //               }
// //               onChange={(event) =>
// //                 updateBusductConfig(
// //                   "count",
// //                   event.target.value
// //                 )
// //               }
// //             />

// //           </div>

// //         </div>

// //       </div>

// //     </div>
// //   );

// // const renderPccConfiguration =
// //   () => (
// //     <div className="cp-config-card">
// //       <div className="cp-config-card__head">
// //         <div className="cp-config-card__identity">
// //           <div className="cp-config-card__icon">
// //             <Cpu size={18} />
// //           </div>

// //           <div>
// //             <strong>PCC</strong>
// //             <span>
// //               Select reference circuits or add building-specific custom equipment
// //             </span>
// //           </div>
// //         </div>

// //         <button
// //           type="button"
// //           className="cp-reset"
// //           onClick={resetPccConfig}
// //         >
// //           <RotateCcw size={12} />
// //           RESET
// //         </button>
// //       </div>

// //       <div className="cp-config-card__body">
// //         <div className="cp-config-grid">
// //           <div className="cp-field">
// //             <label>PCC PANEL COUNT</label>
// //             <input
// //               className="cp-input"
// //               type="number"
// //               min="1"
// //               max="20"
// //               value={pccConfig.count}
// //               onChange={(event) =>
// //                 updatePccConfig(
// //                   "count",
// //                   event.target.value
// //                 )
// //               }
// //             />
// //           </div>
// //         </div>

// //         <div
// //           className="cp-config-stack"
// //           style={{ marginTop: 18 }}
// //         >
// //           {pccConfig.panels.map(
// //             (panel, panelIndex) => {
// //               const referenceOptions =
// //                 getPccCircuitOptions(
// //                   panel.id
// //                 );

// //               const circuits =
// //                 Array.isArray(
// //                   panel.circuits
// //                 )
// //                   ? panel.circuits
// //                   : [];

// //               const customCircuits =
// //                 circuits.filter(
// //                   (circuit) =>
// //                     circuit.source ===
// //                     "custom"
// //                 );

// //               const hasUtility1 =
// //                 circuits.some(
// //                   (circuit) =>
// //                     circuit.id?.endsWith(
// //                       "-utility1"
// //                     )
// //                 );

// //               const hasUtility2 =
// //                 circuits.some(
// //                   (circuit) =>
// //                     circuit.id?.endsWith(
// //                       "-utility2"
// //                     )
// //                 );

// //               const canUseUps =
// //                 hasUtility1 ||
// //                 hasUtility2;

// //               const draft =
// //                 pccCustomDrafts[
// //                   panel.id
// //                 ] || {
// //                   name: "",
// //                   label: "",
// //                   direction:
// //                     "outgoing",
// //                   section: "",
// //                 };

// //               return (
// //                 <div
// //                   className="cp-config-card"
// //                   key={panel.id}
// //                 >
// //                   <div className="cp-config-card__head">
// //                     <div className="cp-config-card__identity">
// //                       <div className="cp-config-card__icon">
// //                         <PanelTop size={18} />
// //                       </div>

// //                       <div>
// //                         <strong>
// //                           {panel.name ||
// //                             `PCC ${panelIndex + 1}`}
// //                         </strong>

// //                         <span>
// //                           {circuits.length} configured circuit
// //                           {circuits.length === 1 ? "" : "s"}
// //                           {customCircuits.length > 0
// //                             ? ` / ${customCircuits.length} custom`
// //                             : ""}
// //                         </span>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="cp-config-card__body">
// //                     <div className="cp-config-grid">
// //                       <div className="cp-field">
// //                         <label>PANEL NAME</label>

// //                         <input
// //                           className="cp-input"
// //                           value={panel.name}
// //                           onChange={(event) =>
// //                             updatePccPanel(
// //                               panelIndex,
// //                               "name",
// //                               event.target.value
// //                             )
// //                           }
// //                         />
// //                       </div>
// //                     </div>

// //                     {referenceOptions.length > 0 && (
// //                       <>
// //                         <div className="cp-subheading">
// //                           REFERENCE EQUIPMENT
// //                         </div>

// //                         <div className="cp-config-grid">
// //                           {referenceOptions.map(
// //                             (circuit) => {
// //                               const selected =
// //                                 circuits.some(
// //                                   (item) =>
// //                                     item.id ===
// //                                     circuit.id
// //                                 );

// //                               return (
// //                                 <div
// //                                   className="cp-toggle-field"
// //                                   key={circuit.id}
// //                                 >
// //                                   <div>
// //                                     <strong>
// //                                       {circuit.name}
// //                                     </strong>
// //                                     <span>
// //                                       {circuit.direction.toUpperCase()}
// //                                       {circuit.section
// //                                         ? ` / SECTION ${circuit.section}`
// //                                         : ""}
// //                                     </span>
// //                                   </div>

// //                                   <button
// //                                     type="button"
// //                                     className={`cp-toggle ${
// //                                       selected
// //                                         ? "cp-toggle--on"
// //                                         : ""
// //                                     }`}
// //                                     aria-label={`Toggle ${circuit.name}`}
// //                                     onClick={() =>
// //                                       togglePccCircuit(
// //                                         panelIndex,
// //                                         circuit
// //                                       )
// //                                     }
// //                                   />
// //                                 </div>
// //                               );
// //                             }
// //                           )}
// //                         </div>
// //                       </>
// //                     )}

// //                     <div className="cp-subheading">
// //                       CUSTOM EQUIPMENT
// //                     </div>

// //                     <div className="cp-custom-builder">
// //                       <div className="cp-config-grid">
// //                         <div className="cp-field">
// //                           <label>
// //                             EQUIPMENT NAME
// //                           </label>
// //                           <input
// //                             className="cp-input"
// //                             value={
// //                               draft.name ||
// //                               ""
// //                             }
// //                             placeholder="Example: Lift Panel"
// //                             onChange={(event) =>
// //                               updatePccCustomDraft(
// //                                 panel.id,
// //                                 "name",
// //                                 event.target.value
// //                               )
// //                             }
// //                           />
// //                         </div>

// //                         <div className="cp-field">
// //                           <label>
// //                             EQUIPMENT LABEL
// //                           </label>
// //                           <input
// //                             className="cp-input"
// //                             value={
// //                               draft.label ||
// //                               ""
// //                             }
// //                             placeholder="Example: Lift Distribution"
// //                             onChange={(event) =>
// //                               updatePccCustomDraft(
// //                                 panel.id,
// //                                 "label",
// //                                 event.target.value
// //                               )
// //                             }
// //                           />
// //                         </div>

// //                         <div className="cp-field">
// //                           <label>DIRECTION</label>
// //                           <select
// //                             className="cp-select"
// //                             value={
// //                               draft.direction ||
// //                               "outgoing"
// //                             }
// //                             onChange={(event) =>
// //                               updatePccCustomDraft(
// //                                 panel.id,
// //                                 "direction",
// //                                 event.target.value
// //                               )
// //                             }
// //                           >
// //                             <option value="incoming">
// //                               Incoming
// //                             </option>
// //                             <option value="outgoing">
// //                               Outgoing
// //                             </option>
// //                             <option value="coupler">
// //                               Bus Coupler
// //                             </option>
// //                           </select>
// //                         </div>

// //                         <div className="cp-field">
// //                           <label>
// //                             SECTION / GROUP
// //                           </label>
// //                           <input
// //                             className="cp-input"
// //                             value={
// //                               draft.section ||
// //                               ""
// //                             }
// //                             placeholder="A, B, Chiller, Lift..."
// //                             onChange={(event) =>
// //                               updatePccCustomDraft(
// //                                 panel.id,
// //                                 "section",
// //                                 event.target.value
// //                               )
// //                             }
// //                           />
// //                         </div>
// //                       </div>

// //                       <button
// //                         type="button"
// //                         className="cp-add-equipment"
// //                         onClick={() =>
// //                           addPccCustomCircuit(
// //                             panelIndex
// //                           )
// //                         }
// //                       >
// //                         <Plus size={14} />
// //                         ADD CUSTOM EQUIPMENT
// //                       </button>
// //                     </div>

// //                     {customCircuits.length > 0 && (
// //                       <div className="cp-custom-list">
// //                         {customCircuits.map(
// //                           (circuit) => {
// //                             const actualIndex =
// //                               circuits.findIndex(
// //                                 (item) =>
// //                                   item.id ===
// //                                   circuit.id
// //                               );

// //                             return (
// //                               <div
// //                                 className="cp-custom-item"
// //                                 key={circuit.id}
// //                               >
// //                                 <div>
// //                                   <strong>
// //                                     {circuit.name}
// //                                   </strong>
// //                                   <span>
// //                                     {circuit.direction.toUpperCase()}
// //                                     {circuit.section
// //                                       ? ` / ${circuit.section}`
// //                                       : ""}
// //                                     {" · "}
// //                                     {circuit.label}
// //                                   </span>
// //                                 </div>

// //                                 <div className="cp-custom-actions">
// //                                   <button
// //                                     type="button"
// //                                     disabled={
// //                                       actualIndex <=
// //                                       0
// //                                     }
// //                                     onClick={() =>
// //                                       movePccCircuit(
// //                                         panelIndex,
// //                                         actualIndex,
// //                                         -1
// //                                       )
// //                                     }
// //                                   >
// //                                     ↑
// //                                   </button>

// //                                   <button
// //                                     type="button"
// //                                     disabled={
// //                                       actualIndex >=
// //                                       circuits.length -
// //                                         1
// //                                     }
// //                                     onClick={() =>
// //                                       movePccCircuit(
// //                                         panelIndex,
// //                                         actualIndex,
// //                                         1
// //                                       )
// //                                     }
// //                                   >
// //                                     ↓
// //                                   </button>

// //                                   <button
// //                                     type="button"
// //                                     className="cp-custom-delete"
// //                                     onClick={() =>
// //                                       removePccCustomCircuit(
// //                                         panelIndex,
// //                                         circuit.id
// //                                       )
// //                                     }
// //                                   >
// //                                     <Trash2 size={13} />
// //                                   </button>
// //                                 </div>
// //                               </div>
// //                             );
// //                           }
// //                         )}
// //                       </div>
// //                     )}

// //                     {(panelIndex < 2 ||
// //                       canUseUps ||
// //                       panel.upsUnits.length >
// //                         0) && (
// //                       <>
// //                         <div className="cp-subheading">
// //                           UPS DISTRIBUTION
// //                         </div>

// //                         <div className="cp-config-grid">
// //                           {UPS_UNIT_OPTIONS.map(
// //                             (unit) => (
// //                               <div
// //                                 className="cp-toggle-field"
// //                                 key={unit.id}
// //                               >
// //                                 <div>
// //                                   <strong>
// //                                     {unit.name}
// //                                   </strong>
// //                                   <span>
// //                                     {canUseUps
// //                                       ? "Supplied from selected Utility circuit(s)"
// //                                       : "Select Utility 1 or Utility 2 first"}
// //                                   </span>
// //                                 </div>

// //                                 <button
// //                                   type="button"
// //                                   disabled={
// //                                     !canUseUps
// //                                   }
// //                                   className={`cp-toggle ${
// //                                     panel.upsUnits.includes(
// //                                       unit.id
// //                                     )
// //                                       ? "cp-toggle--on"
// //                                       : ""
// //                                   }`}
// //                                   style={{
// //                                     opacity:
// //                                       canUseUps
// //                                         ? 1
// //                                         : 0.45,
// //                                     cursor:
// //                                       canUseUps
// //                                         ? "pointer"
// //                                         : "not-allowed",
// //                                   }}
// //                                   onClick={() => {
// //                                     if (
// //                                       canUseUps
// //                                     ) {
// //                                       togglePccUpsUnit(
// //                                         panelIndex,
// //                                         unit.id
// //                                       );
// //                                     }
// //                                   }}
// //                                 />
// //                               </div>
// //                             )
// //                           )}
// //                         </div>
// //                       </>
// //                     )}
// //                   </div>
// //                 </div>
// //               );
// //             }
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );

// // const renderRaisingMainConfiguration =
// //   () => (
// //     <div className="cp-config-card">
// //       <div className="cp-config-card__head">
// //         <div className="cp-config-card__identity">
// //           <div className="cp-config-card__icon">
// //             <Bolt size={18} />
// //           </div>

// //           <div>
// //             <strong>
// //               RAISING MAIN
// //             </strong>
// //             <span>
// //               Vertical distribution configuration
// //             </span>
// //           </div>
// //         </div>

// //         <button
// //           type="button"
// //           className="cp-reset"
// //           onClick={resetRaisingMain}
// //         >
// //           <RotateCcw size={12} />
// //           RESET
// //         </button>
// //       </div>

// //       <div className="cp-config-card__body">
// //         <div className="cp-config-grid">
// //           <div className="cp-field">
// //             <label>
// //               RAISING MAIN COUNT
// //             </label>
// //             <input
// //               className="cp-input"
// //               type="number"
// //               min="1"
// //               max="20"
// //               value={raisingMainConfig.count}
// //               onChange={(event) =>
// //                 updateRaisingMainConfig(
// //                   "count",
// //                   event.target.value
// //                 )
// //               }
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );

// // const renderWingConfiguration =
// //   () => (
// //     <div className="cp-config-card">
// //       <div className="cp-config-card__head">
// //         <div className="cp-config-card__identity">
// //           <div className="cp-config-card__icon">
// //             <Building2 size={18} />
// //           </div>

// //           <div>
// //             <strong>
// //               WING
// //             </strong>
// //             <span>
// //               Building wing and floor configuration
// //             </span>
// //           </div>
// //         </div>

// //         <button
// //           type="button"
// //           className="cp-reset"
// //           onClick={resetWing}
// //         >
// //           <RotateCcw size={12} />
// //           RESET
// //         </button>
// //       </div>

// //       <div className="cp-config-card__body">
// //         <div className="cp-config-grid">
// //           <div className="cp-field">
// //             <label>
// //               WING COUNT
// //             </label>
// //             <input
// //               className="cp-input"
// //               type="number"
// //               min="1"
// //               max="10"
// //               value={wingConfig.count}
// //               onChange={(event) =>
// //                 updateWingConfig(
// //                   "count",
// //                   event.target.value
// //                 )
// //               }
// //             />
// //           </div>

// //           <div className="cp-field">
// //             <label>
// //               FLOORS PER WING
// //             </label>
// //             <input
// //               className="cp-input"
// //               type="number"
// //               min="1"
// //               max="100"
// //               value={wingConfig.floorsPerWing}
// //               onChange={(event) =>
// //                 updateWingConfig(
// //                   "floorsPerWing",
// //                   event.target.value
// //                 )
// //               }
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );

// // const renderDgConfiguration =
// //   () => (
// //     <div className="cp-config-card">
// //       <div className="cp-config-card__head">
// //         <div className="cp-config-card__identity">
// //           <div className="cp-config-card__icon">
// //             <Power size={18} />
// //           </div>

// //           <div>
// //             <strong>
// //               DG
// //             </strong>
// //             <span>
// //               Diesel generator capacity configuration
// //             </span>
// //           </div>
// //         </div>

// //         <button
// //           type="button"
// //           className="cp-reset"
// //           onClick={resetDg}
// //         >
// //           <RotateCcw size={12} />
// //           RESET
// //         </button>
// //       </div>

// //       <div className="cp-config-card__body">
// //         <div className="cp-config-grid">
// //           <div className="cp-field">
// //             <label>
// //               DG COUNT
// //             </label>
// //             <input
// //               className="cp-input"
// //               type="number"
// //               min="1"
// //               max="20"
// //               value={dgConfig.count}
// //               onChange={(event) =>
// //                 updateDgConfig(
// //                   "count",
// //                   event.target.value
// //                 )
// //               }
// //             />
// //           </div>
// //         </div>

// //         <div className="cp-config-grid">
// //           {dgConfig.units.map(
// //             (unit, index) => (
// //               <div
// //                 className="cp-field"
// //                 key={`dg-unit-${index}`}
// //               >
// //                 <label>
// //                   {unit.name || `DG${index + 1}`} CAPACITY
// //                 </label>
// //                 <input
// //                   className="cp-input"
// //                   type="number"
// //                   min="1"
// //                   max="5000"
// //                   value={unit.capacity}
// //                   onChange={(event) =>
// //                     updateDgUnit(
// //                       index,
// //                       "capacity",
// //                       event.target.value
// //                     )
// //                   }
// //                 />
// //               </div>
// //             )
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );

// // const renderHvacConfiguration =
// //   () => (
// //     <div className="cp-config-card">
// //       <div className="cp-config-card__head">
// //         <div className="cp-config-card__identity">
// //           <div className="cp-config-card__icon">
// //             <Wind size={18} />
// //           </div>

// //           <div>
// //             <strong>
// //               HVAC
// //             </strong>
// //             <span>
// //               Mechanical equipment configuration
// //             </span>
// //           </div>
// //         </div>

// //         <button
// //           type="button"
// //           className="cp-reset"
// //           onClick={resetHvac}
// //         >
// //           <RotateCcw size={12} />
// //           RESET
// //         </button>
// //       </div>

// //       <div className="cp-config-card__body">
// //         <div className="cp-config-grid">
// //           <div className="cp-field">
// //             <label>
// //               HVAC EQUIPMENT COUNT
// //             </label>
// //             <input
// //               className="cp-input"
// //               type="number"
// //               min="0"
// //               max="30"
// //               value={hvacConfig.count}
// //               onChange={(event) =>
// //                 updateHvacConfig(
// //                   "count",
// //                   event.target.value
// //                 )
// //               }
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );

// // const renderWaterConfiguration =
// //   () => (
// //     <div className="cp-config-card">
// //       <div className="cp-config-card__head">
// //         <div className="cp-config-card__identity">
// //           <div className="cp-config-card__icon">
// //             <Droplets size={18} />
// //           </div>

// //           <div>
// //             <strong>
// //               WATER MANAGEMENT
// //             </strong>
// //             <span>
// //               STP, WTP and tank monitoring configuration
// //             </span>
// //           </div>
// //         </div>

// //         <button
// //           type="button"
// //           className="cp-reset"
// //           onClick={resetWaterConfig}
// //         >
// //           <RotateCcw size={12} />
// //           RESET
// //         </button>
// //       </div>

// //       <div className="cp-config-card__body">
// //         <div className="cp-config-grid">
// //           <div className="cp-toggle-field">
// //             <div>
// //               <strong>STP</strong>
// //               <span>Sewage treatment plant monitoring</span>
// //             </div>

// //             <button
// //               type="button"
// //               className={`cp-toggle ${
// //                 waterConfig.stpEnabled
// //                   ? "cp-toggle--on"
// //                   : ""
// //               }`}
// //               aria-label="Toggle STP"
// //               onClick={() =>
// //                 updateWaterConfig(
// //                   "stpEnabled",
// //                   !waterConfig.stpEnabled
// //                 )
// //               }
// //             />
// //           </div>

// //           <div className="cp-toggle-field">
// //             <div>
// //               <strong>WTP</strong>
// //               <span>Water treatment plant monitoring</span>
// //             </div>

// //             <button
// //               type="button"
// //               className={`cp-toggle ${
// //                 waterConfig.wtpEnabled
// //                   ? "cp-toggle--on"
// //                   : ""
// //               }`}
// //               aria-label="Toggle WTP"
// //               onClick={() =>
// //                 updateWaterConfig(
// //                   "wtpEnabled",
// //                   !waterConfig.wtpEnabled
// //                 )
// //               }
// //             />
// //           </div>

// //           <div className="cp-field">
// //             <label>
// //               WATER TANK COUNT
// //             </label>
// //             <input
// //               className="cp-input"
// //               type="number"
// //               min="0"
// //               max="20"
// //               value={waterConfig.tankCount}
// //               onChange={(event) =>
// //                 updateWaterConfig(
// //                   "tankCount",
// //                   event.target.value
// //                 )
// //               }
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );

// // const renderFireConfiguration =
// //   () => (
// //     <div className="cp-config-card">
// //       <div className="cp-config-card__head">
// //         <div className="cp-config-card__identity">
// //           <div className="cp-config-card__icon">
// //             <Flame size={18} />
// //           </div>

// //           <div>
// //             <strong>
// //               FIRE
// //             </strong>
// //             <span>
// //               Life safety subsystem configuration
// //             </span>
// //           </div>
// //         </div>

// //         <button
// //           type="button"
// //           className="cp-reset"
// //           onClick={resetFireConfig}
// //         >
// //           <RotateCcw size={12} />
// //           RESET
// //         </button>
// //       </div>

// //       <div className="cp-config-card__body">
// //         <div className="cp-config-grid">
// //           {[
// //             [
// //               "fireAlarms",
// //               "Fire Alarms",
// //               "Detection and alarm system",
// //             ],
// //             [
// //               "fireFighting",
// //               "Fire Fighting",
// //               "Hydrant and sprinkler system",
// //             ],
// //             [
// //               "firePump",
// //               "Fire Pump",
// //               "Fire pump monitoring",
// //             ],
// //           ].map(
// //             ([key, label, description]) => (
// //               <div
// //                 className="cp-toggle-field"
// //                 key={key}
// //               >
// //                 <div>
// //                   <strong>{label}</strong>
// //                   <span>{description}</span>
// //                 </div>

// //                 <button
// //                   type="button"
// //                   className={`cp-toggle ${
// //                     fireConfig[key]
// //                       ? "cp-toggle--on"
// //                       : ""
// //                   }`}
// //                   aria-label={`Toggle ${label}`}
// //                   onClick={() =>
// //                     updateFireConfig(
// //                       key,
// //                       !fireConfig[key]
// //                     )
// //                   }
// //                 />
// //               </div>
// //             )
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// //   /* =========================================================
// //      STEP 3
// //   ========================================================= */

// //   const renderConfiguration = () => (
// //     <section className="cp-panel">
// //       <div className="cp-panel__header">
// //         <h2>Configure Selected Systems</h2>
// //         <p>
// //           Configure the selected systems for this client project.
// //           PCC panels use the verified switchboard circuit inventories
// //           and UPS units from the existing BMS topology.
// //         </p>
// //       </div>

// //       <div className="cp-panel__body">
// //         <div className="cp-config-stack">
// //           {selectedSystems.includes("source") &&
// //             renderSourceConfiguration()}

// //           {selectedSystems.includes("feeder") &&
// //             renderFeederConfiguration()}

// //             {selectedSystems.includes(
// //   "transformer"
// // ) &&
// //   renderTransformerConfiguration()}

// //           {selectedSystems.includes(
// //             "lt-kiosk"
// //           ) &&
// //             renderLTKioskConfiguration()}

// //           {selectedSystems.includes(
// //             "busduct"
// //           ) &&
// //             renderBusductConfiguration()}

// //           {selectedSystems.includes(
// //             "pcc"
// //           ) &&
// //             renderPccConfiguration()}

// //           {selectedSystems.includes(
// //             "raising-main"
// //           ) &&
// //             renderRaisingMainConfiguration()}

// //           {selectedSystems.includes(
// //             "wing"
// //           ) &&
// //             renderWingConfiguration()}

// //           {selectedSystems.includes(
// //             "dg"
// //           ) &&
// //             renderDgConfiguration()}

// //           {selectedSystems.includes(
// //             "hvac"
// //           ) &&
// //             renderHvacConfiguration()}

// //           {selectedSystems.includes(
// //             "wtp"
// //           ) &&
// //             renderWaterConfiguration()}

// //           {selectedSystems.includes(
// //             "fire"
// //           ) &&
// //             renderFireConfiguration()}

// //           {selectedSystemObjects
// //             .filter(
// //               (system) =>
// //                 system.id !== "source" &&
// //                 system.id !== "feeder"&&
// //     system.id !== "transformer" &&
// //                 system.id !== "lt-kiosk" &&
// //                 system.id !== "busduct" &&
// //                 system.id !== "pcc" &&
// //                 system.id !== "raising-main" &&
// //                 system.id !== "wing" &&
// //                 system.id !== "dg" &&
// //                 system.id !== "hvac" &&
// //                 system.id !== "wtp" &&
// //                 system.id !== "fire"
// //             )
// //             .map((system) => (
// //               <div className="cp-config-card" key={system.id}>
// //                 <div className="cp-config-card__head">
// //                   <div className="cp-config-card__identity">
// //                     <div className="cp-config-card__icon">
// //                       <Network size={18} />
// //                     </div>
// //                     <div>
// //                       <strong>{system.name.toUpperCase()}</strong>
// //                       <span>Selected for this project</span>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="cp-config-card__body">
// //                   <div className="cp-config-placeholder">
// //                     {system.name} is selected for this project.
// //                     Its detailed equipment configuration will be
// //                     added in the next configuration stage.
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //         </div>
// //       </div>
// //     </section>
// //   );

// //   /* =========================================================
// //      STEP 4
// //   ========================================================= */

// //   const renderReview = () => (
// //     <section className="cp-panel">
// //       <div className="cp-panel__header">
// //         <h2>Review Project Configuration</h2>

// //         <p>
// //           Confirm the client, project and BMS system
// //           configuration before creating the demo project.
// //         </p>
// //       </div>

// //       <div className="cp-panel__body">
// //         <div className="cp-review-grid">
// //           <div className="cp-review-card">
// //             <div className="cp-review-card__head">
// //               PROJECT INFORMATION
// //             </div>

// //             <div className="cp-review-card__body">
// //               <div className="cp-review-row">
// //                 <span>Client</span>
// //                 <strong>
// //                   {projectDetails.clientName}
// //                 </strong>
// //               </div>

// //               <div className="cp-review-row">
// //                 <span>Project</span>
// //                 <strong>
// //                   {projectDetails.projectName}
// //                 </strong>
// //               </div>

// //               <div className="cp-review-row">
// //                 <span>Project Code</span>
// //                 <strong>
// //                   {projectDetails.projectCode.toUpperCase()}
// //                 </strong>
// //               </div>

// //               <div className="cp-review-row">
// //                 <span>Location</span>
// //                 <strong>
// //                   {projectDetails.location}
// //                 </strong>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="cp-review-card">
// //             <div className="cp-review-card__head">
// //               CLIENT ACCESS — DEMO
// //             </div>

// //             <div className="cp-review-card__body">
// //               <div className="cp-review-row">
// //                 <span>Email</span>
// //                 <strong>
// //                   {projectDetails.email}
// //                 </strong>
// //               </div>

// //               <div className="cp-review-row">
// //                 <span>Demo Password</span>
// //                 <strong>
// //                   {projectDetails.password}
// //                 </strong>
// //               </div>

// //               <div className="cp-review-row">
// //                 <span>Status</span>
// //                 <strong
// //                   style={{
// //                     color: "#31c48d",
// //                   }}
// //                 >
// //                   ACTIVE
// //                 </strong>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="cp-review-card">
// //             <div className="cp-review-card__head">
// //               SELECTED SYSTEMS
// //             </div>

// //             <div className="cp-review-card__body">
// //               <div className="cp-review-systems">
// //                 {selectedSystemObjects.map((system) => (
// //                   <div
// //                     key={system.id}
// //                     className="cp-review-system"
// //                   >
// //                     {system.name}
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           {selectedSystems.includes("source") && (
// //             <div className="cp-review-card cp-review-source">
// //               <div className="cp-review-card__head">
// //                 SOURCE CONFIGURATION
// //               </div>

// //               <div className="cp-review-card__body">
// //                 <div className="cp-review-row">
// //                   <span>Voltage Level</span>
// //                   <strong>
// //                     {sourceConfig.voltageLevel}
// //                   </strong>
// //                 </div>

// //                 <div className="cp-review-row">
// //                   <span>Incoming Feeders</span>
// //                   <strong>
// //                     {sourceConfig.incomingCount}
// //                   </strong>
// //                 </div>

// //                 <div className="cp-review-row">
// //                   <span>Outgoing Feeders</span>
// //                   <strong>
// //                     {sourceConfig.outgoingCount}
// //                   </strong>
// //                 </div>

// //                 <div className="cp-review-row">
// //                   <span>Energy Meters</span>
// //                   <strong>
// //                     {sourceConfig.meterCount}
// //                   </strong>
// //                 </div>

// //                 <div className="cp-review-row">
// //                   <span>Protection Relay</span>
// //                   <strong>
// //                     {sourceConfig.protectionRelay
// //                       ? "Included"
// //                       : "Not Included"}
// //                   </strong>
// //                 </div>

// //                 <div className="cp-review-row">
// //                   <span>Bus Coupler</span>
// //                   <strong>
// //                     {sourceConfig.busCoupler
// //                       ? "Included"
// //                       : "Not Included"}
// //                   </strong>
// //                 </div>
// //               </div>
// //             </div>
// //           )}

// //           {selectedSystems.includes("feeder") && (
// //   <div className="cp-review-card cp-review-source">
// //     <div className="cp-review-card__head">
// //       FEEDER CONFIGURATION
// //     </div>

// //     <div className="cp-review-card__body">

// //       <div className="cp-review-row">
// //         <span>Voltage Level</span>

// //         <strong>
// //           {feederConfig.voltageLevel}
// //         </strong>
// //       </div>

// //       <div className="cp-review-row">
// //         <span>Incoming Feeders</span>

// //         <strong>
// //           {feederConfig.incomingCount}
// //         </strong>
// //       </div>

// //       <div className="cp-review-row">
// //         <span>Outgoing Feeders</span>

// //         <strong>
// //           {feederConfig.outgoingCount}
// //         </strong>
// //       </div>

// //     </div>
// //   </div>
// // )}


// // {selectedSystems.includes(
// //   "transformer"
// // ) && (
// //   <div className="cp-review-card cp-review-source">

// //     <div className="cp-review-card__head">
// //       TRANSFORMER CONFIGURATION
// //     </div>


// //     <div className="cp-review-card__body">

// //       <div className="cp-review-row">
// //         <span>
// //           Transformer Count
// //         </span>

// //         <strong>
// //           {transformerConfig.count}
// //         </strong>
// //       </div>


// //       <div className="cp-review-row">
// //         <span>
// //           Primary Voltage
// //         </span>

// //         <strong>
// //           {
// //             transformerConfig
// //               .primaryVoltage
// //           }
// //         </strong>
// //       </div>


// //       <div className="cp-review-row">
// //         <span>
// //           Secondary Voltage
// //         </span>

// //         <strong>
// //           {
// //             transformerConfig
// //               .secondaryVoltage
// //           }
// //         </strong>
// //       </div>

// //     </div>

// //   </div>
// // )}


// // {selectedSystems.includes(
// //   "lt-kiosk"
// // ) && (
// //   <div className="cp-review-card cp-review-source">

// //     <div className="cp-review-card__head">
// //       LT KIOSK CONFIGURATION
// //     </div>


// //     <div className="cp-review-card__body">

// //       <div className="cp-review-row">
// //         <span>
// //           LT Kiosk Count
// //         </span>

// //         <strong>
// //           {ltKioskConfig.count}
// //         </strong>
// //       </div>

// //     </div>

// //   </div>
// // )}


// // {selectedSystems.includes(
// //   "busduct"
// // ) && (
// //   <div className="cp-review-card cp-review-source">

// //     <div className="cp-review-card__head">
// //       BUSDUCT CONFIGURATION
// //     </div>


// //     <div className="cp-review-card__body">

// //       <div className="cp-review-row">
// //         <span>
// //           Busduct Count
// //         </span>

// //         <strong>
// //           {busductConfig.count}
// //         </strong>
// //       </div>

// //     </div>

// //   </div>
// // )}


// // {selectedSystems.includes(
// //   "pcc"
// // ) && (
// //   <div className="cp-review-card cp-review-source">

// //     <div className="cp-review-card__head">
// //       PCC CONFIGURATION
// //     </div>


// //     <div className="cp-review-card__body">

// //       <div className="cp-review-row">
// //         <span>
// //           PCC Panel Count
// //         </span>

// //         <strong>
// //           {pccConfig.count}
// //         </strong>
// //       </div>

// //       {pccConfig.panels.map(
// //         (panel) => (
// //           <div
// //             className="cp-review-row"
// //             key={panel.id}
// //           >
// //             <span>
// //               {panel.name}
// //             </span>

// //             <strong>
// //               {[
// //                 `${panel.circuits?.length || 0} circuits`,
// //                 panel.upsUnits.length > 0
// //                   ? `UPS (${panel.upsUnits.length})`
// //                   : null,
// //               ]
// //                 .filter(Boolean)
// //                 .join(", ")}
// //             </strong>
// //           </div>
// //         )
// //       )}

// //     </div>

// //   </div>
// // )}


// // {selectedSystems.includes(
// //   "raising-main"
// // ) && (
// //   <div className="cp-review-card cp-review-source">
// //     <div className="cp-review-card__head">
// //       RAISING MAIN CONFIGURATION
// //     </div>
// //     <div className="cp-review-card__body">
// //       <div className="cp-review-row">
// //         <span>
// //           Raising Main Count
// //         </span>
// //         <strong>
// //           {raisingMainConfig.count}
// //         </strong>
// //       </div>
// //     </div>
// //   </div>
// // )}


// // {selectedSystems.includes(
// //   "wing"
// // ) && (
// //   <div className="cp-review-card cp-review-source">
// //     <div className="cp-review-card__head">
// //       WING CONFIGURATION
// //     </div>
// //     <div className="cp-review-card__body">
// //       <div className="cp-review-row">
// //         <span>
// //           Wing Count
// //         </span>
// //         <strong>
// //           {wingConfig.count}
// //         </strong>
// //       </div>
// //       <div className="cp-review-row">
// //         <span>
// //           Floors per Wing
// //         </span>
// //         <strong>
// //           {wingConfig.floorsPerWing}
// //         </strong>
// //       </div>
// //     </div>
// //   </div>
// // )}


// // {selectedSystems.includes(
// //   "dg"
// // ) && (
// //   <div className="cp-review-card cp-review-source">
// //     <div className="cp-review-card__head">
// //       DG CONFIGURATION
// //     </div>
// //     <div className="cp-review-card__body">
// //       <div className="cp-review-row">
// //         <span>
// //           DG Count
// //         </span>
// //         <strong>
// //           {dgConfig.count}
// //         </strong>
// //       </div>
// //       <div className="cp-review-row">
// //         <span>
// //           Capacities
// //         </span>
// //         <strong>
// //           {dgConfig.units
// //             .map(
// //               (unit) =>
// //                 `${unit.name}: ${unit.capacity} kVA`
// //             )
// //             .join(", ")}
// //         </strong>
// //       </div>
// //     </div>
// //   </div>
// // )}


// // {selectedSystems.includes(
// //   "hvac"
// // ) && (
// //   <div className="cp-review-card cp-review-source">
// //     <div className="cp-review-card__head">
// //       HVAC CONFIGURATION
// //     </div>
// //     <div className="cp-review-card__body">
// //       <div className="cp-review-row">
// //         <span>
// //           HVAC Equipment Count
// //         </span>
// //         <strong>
// //           {hvacConfig.count}
// //         </strong>
// //       </div>
// //     </div>
// //   </div>
// // )}


// // {selectedSystems.includes(
// //   "wtp"
// // ) && (
// //   <div className="cp-review-card cp-review-source">
// //     <div className="cp-review-card__head">
// //       WATER MANAGEMENT CONFIGURATION
// //     </div>
// //     <div className="cp-review-card__body">
// //       <div className="cp-review-row">
// //         <span>
// //           STP
// //         </span>
// //         <strong>
// //           {waterConfig.stpEnabled
// //             ? "Enabled"
// //             : "Disabled"}
// //         </strong>
// //       </div>
// //       <div className="cp-review-row">
// //         <span>
// //           WTP
// //         </span>
// //         <strong>
// //           {waterConfig.wtpEnabled
// //             ? "Enabled"
// //             : "Disabled"}
// //         </strong>
// //       </div>
// //       <div className="cp-review-row">
// //         <span>
// //           Water Tank Count
// //         </span>
// //         <strong>
// //           {waterConfig.tankCount}
// //         </strong>
// //       </div>
// //     </div>
// //   </div>
// // )}


// // {selectedSystems.includes(
// //   "fire"
// // ) && (
// //   <div className="cp-review-card cp-review-source">
// //     <div className="cp-review-card__head">
// //       FIRE CONFIGURATION
// //     </div>
// //     <div className="cp-review-card__body">
// //       <div className="cp-review-row">
// //         <span>
// //           Fire Alarms
// //         </span>
// //         <strong>
// //           {fireConfig.fireAlarms
// //             ? "Enabled"
// //             : "Disabled"}
// //         </strong>
// //       </div>
// //       <div className="cp-review-row">
// //         <span>
// //           Fire Fighting
// //         </span>
// //         <strong>
// //           {fireConfig.fireFighting
// //             ? "Enabled"
// //             : "Disabled"}
// //         </strong>
// //       </div>
// //       <div className="cp-review-row">
// //         <span>
// //           Fire Pump
// //         </span>
// //         <strong>
// //           {fireConfig.firePump
// //             ? "Enabled"
// //             : "Disabled"}
// //         </strong>
// //       </div>
// //     </div>
// //   </div>
// // )}
// //         </div>
// //       </div>
// //     </section>
// //   );

  
// //   /* =========================================================
// //      PAGE
// //   ========================================================= */

// //   return (
// //     <main className="cp">
// //       <style>{styles}</style>

// //       {/* HEADER */}

// //       <header className="cp-header">
// //         <div className="cp-header__left">
// //           <button
// //             type="button"
// //             className="cp-back"
// //             onClick={onCancel}
// //             aria-label="Back to Super Admin Dashboard"
// //           >
// //             <ArrowLeft size={17} />
// //           </button>

// //           <div className="cp-header__copy">
// //             <strong>Create BMS Project</strong>

// //             <span>
// //               SUPER ADMIN / PROJECT BUILDER
// //             </span>
// //           </div>
// //         </div>

// //         <div className="cp-header__badge">
// //           <ShieldCheck size={13} />

// //           FRONTEND DEMO
// //         </div>
// //       </header>

// //       <div className="cp-shell">
// //         {/* TITLE */}

// //         <div className="cp-title">
// //           <div className="cp-title__eyebrow">
// //             CONFIGURATION-DRIVEN BMS
// //           </div>

// //           <h1>New Client Project</h1>

// //           <p>
// //             Define a client project and its BMS systems. The
// //             resulting configuration will later drive the same
// //             Overview, FlowDetail and SystemDetail components
// //             without creating a separate frontend for each client.
// //           </p>
// //         </div>

// //         {/* STEPS */}

// //         <div className="cp-steps">
// //           {STEPS.map((item) => {
// //             const complete = step > item.id;

// //             const active = step === item.id;

// //             return (
// //               <div
// //                 key={item.id}
// //                 className={`cp-step ${
// //                   active ? "cp-step--active" : ""
// //                 } ${
// //                   complete ? "cp-step--complete" : ""
// //                 }`}
// //               >
// //                 <div className="cp-step__number">
// //                   {complete ? (
// //                     <Check size={13} />
// //                   ) : (
// //                     item.id
// //                   )}
// //                 </div>

// //                 <span>{item.label}</span>
// //               </div>
// //             );
// //           })}
// //         </div>

// //         {/* CURRENT STEP */}

// //         {step === 1 && renderProjectDetails()}

// //         {step === 2 && renderSystemSelection()}

// //         {step === 3 && renderConfiguration()}

// //         {step === 4 && renderReview()}

// //         {/* ERROR */}

// //         {error && (
// //           <div className="cp-error">
// //             {error}
// //           </div>
// //         )}

// //         {/* FOOTER */}

// //         <div className="cp-footer">
// //           <button
// //             type="button"
// //             className="cp-btn cp-btn--secondary"
// //             onClick={onCancel}
// //           >
// //             CANCEL
// //           </button>

// //           <div className="cp-footer__right">
// //             {step > 1 && (
// //               <button
// //                 type="button"
// //                 className="cp-btn cp-btn--secondary"
// //                 onClick={handleBack}
// //               >
// //                 <ChevronLeft size={14} />

// //                 BACK
// //               </button>
// //             )}

// //             {step < 4 ? (
// //               <button
// //                 type="button"
// //                 className="cp-btn cp-btn--primary"
// //                 onClick={handleNext}
// //               >
// //                 CONTINUE

// //                 <ArrowRight size={14} />
// //               </button>
// //             ) : (
// //               <button
// //                 type="button"
// //                 className="cp-btn cp-btn--create"
// //                 onClick={handleCreateProject}
// //               >
// //                 <CheckCircle2 size={15} />

// //                 CREATE PROJECT
// //               </button>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }

// // export default CreateProject;









import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bolt,
  Building2,
  Check,
  CheckCircle2,
  ChevronLeft,
  Cpu,
  Droplets,
  Flame,
  Gauge,
  Network,
  PanelTop,
  Power,
  Plus,
  RotateCcw,
  Trash2,
  ShieldCheck,
  TowerControl,
  UtilityPole,
  Waves,
  Wind,
  Zap,
} from "lucide-react";

/* =========================================================
   AVAILABLE BMS SYSTEMS

   For now:
   - All systems can be selected.
   - Source receives full configuration.
   - Other systems will be configured in the next stages.
========================================================= */

const AVAILABLE_SYSTEMS = [
  {
    id: "source",
    name: "Source",
    description: "HT source and incoming supply monitoring",
    icon: UtilityPole,
  },
  {
    id: "feeder",
    name: "Feeder",
    description: "Incoming and outgoing feeder monitoring",
    icon: Gauge,
  },
  {
    id: "transformer",
    name: "Transformer",
    description: "Transformer status and load monitoring",
    icon: Zap,
  },
  {
    id: "lt-kiosk",
    name: "LT Kiosk",
    description: "LT kiosk distribution monitoring",
    icon: PanelTop,
  },
  {
    id: "busduct",
    name: "Busduct",
    description: "Busduct temperature and health monitoring",
    icon: Network,
  },
  {
    id: "pcc",
    name: "PCC",
    description: "Power control centre monitoring",
    icon: Cpu,
  },
  {
    id: "raising-main",
    name: "Raising Main",
    description: "Vertical distribution monitoring",
    icon: TowerControl,
  },
  {
    id: "wing",
    name: "Wing",
    description: "Building wing electrical monitoring",
    icon: Building2,
  },
  {
    id: "dg",
    name: "DG",
    description: "Diesel generator monitoring",
    icon: Power,
  },
  {
    id: "hvac",
    name: "HVAC",
    description: "Mechanical equipment monitoring",
    icon: Wind,
  },
  {
    id: "wtp",
    name: "Water Management",
    description: "STP, WTP and tank monitoring",
    icon: Droplets,
  },
  {
    id: "fire",
    name: "Fire",
    description: "Fire and life safety monitoring",
    icon: Flame,
  },
];

const STEPS = [
  {
    id: 1,
    label: "PROJECT",
  },
  {
    id: 2,
    label: "SYSTEMS",
  },
  {
    id: 3,
    label: "CONFIGURE",
  },
  {
    id: 4,
    label: "REVIEW",
  },
];

const createDefaultDgUnits = (
  count
) =>
  Array.from(
    {
      length: count,
    },
    (_, index) => ({
      name: `DG${index + 1}`,
      capacity:
        index < 4
          ? 1500
          : 1250,
    })
  );

const UPS_UNIT_OPTIONS = [
  {
    id: "ups-30-1",
    name: "30kVA-1",
  },
  {
    id: "ups-30-2",
    name: "30kVA-2",
  },
  {
    id: "ups-10-1",
    name: "10kVA-1",
  },
  {
    id: "ups-10-2",
    name: "10kVA-2",
  },
];

/* =========================================================
   VERIFIED PCC CIRCUIT OPTIONS

   These IDs match the existing flowTopology PCC circuit IDs.
   PCC 1 / PCC 2 use the verified 14-cell lineups.
   PCC 3 / PCC 4 use their verified LT + DG + OG lineups.
========================================================= */

const PCC_CIRCUIT_OPTIONS = {
  "pcc-1": [
    { id: "pcc1-lt6-in", name: "LT6 IN", group: "SECTION A" },
    { id: "pcc1-dg1234-in-a", name: "DG1-4 IN", group: "SECTION A" },
    { id: "pcc1-og1", name: "OG1", group: "SECTION A" },
    { id: "pcc1-rm1-a", name: "RM1", group: "SECTION A" },
    { id: "pcc1-rm2-a", name: "RM2", group: "SECTION A" },
    { id: "pcc1-utility1", name: "Utility 1", group: "SECTION A" },
    { id: "pcc1-spare1", name: "Spare 1", group: "SECTION A" },
    { id: "pcc1-bus-coupler", name: "Bus Coupler", group: "COUPLER" },
    { id: "pcc1-lt5-in", name: "LT5 IN", group: "SECTION B" },
    { id: "pcc1-dg1234-in-b", name: "DG1-4 IN", group: "SECTION B" },
    { id: "pcc1-rm1-b", name: "RM1", group: "SECTION B" },
    { id: "pcc1-rm2-b", name: "RM2", group: "SECTION B" },
    { id: "pcc1-utility2", name: "Utility 2", group: "SECTION B" },
    { id: "pcc1-spare2", name: "Spare 2", group: "SECTION B" },
  ],

  "pcc-2": [
    { id: "pcc2-lt1-in", name: "LT1 IN", group: "SECTION A" },
    { id: "pcc2-dg1234-in-a", name: "DG1-4 IN", group: "SECTION A" },
    { id: "pcc2-og1", name: "OG1", group: "SECTION A" },
    { id: "pcc2-rm1-a", name: "RM1", group: "SECTION A" },
    { id: "pcc2-rm2-a", name: "RM2", group: "SECTION A" },
    { id: "pcc2-utility1", name: "Utility 1", group: "SECTION A" },
    { id: "pcc2-spare1", name: "Spare 1", group: "SECTION A" },
    { id: "pcc2-bus-coupler", name: "Bus Coupler", group: "COUPLER" },
    { id: "pcc2-lt2-in", name: "LT2 IN", group: "SECTION B" },
    { id: "pcc2-dg1234-in-b", name: "DG1-4 IN", group: "SECTION B" },
    { id: "pcc2-rm1-b", name: "RM1", group: "SECTION B" },
    { id: "pcc2-rm2-b", name: "RM2", group: "SECTION B" },
    { id: "pcc2-utility2", name: "Utility 2", group: "SECTION B" },
    { id: "pcc2-spare2", name: "Spare 2", group: "SECTION B" },
  ],

  "pcc-3": [
    { id: "pcc3-lt4-in", name: "LT4 IN", group: "INCOMING" },
    { id: "pcc3-dg567-in", name: "DG5-7 IN", group: "INCOMING" },
    ...Array.from({ length: 10 }, (_, index) => ({
      id: `pcc3-og-${index + 1}`,
      name: `OG ${index + 1}`,
      group: "OUTGOING",
    })),
  ],

  "pcc-4": [
    { id: "pcc4-lt3-in", name: "LT3 IN", group: "INCOMING" },
    { id: "pcc4-dg567-in", name: "DG5-7 IN", group: "INCOMING" },
    ...Array.from({ length: 10 }, (_, index) => ({
      id: `pcc4-og-${index + 1}`,
      name: `OG ${index + 1}`,
      group: "OUTGOING",
    })),
  ],
};

const normalizeReferencePccCircuit = (circuit) => {
  const group = circuit.group || "";
  const name = circuit.name || "Circuit";

  const direction =
    group === "COUPLER" ||
    name.toLowerCase().includes("coupler")
      ? "coupler"
      : group === "INCOMING" ||
        name.toUpperCase().includes(" IN")
      ? "incoming"
      : "outgoing";

  const section =
    group === "SECTION A"
      ? "A"
      : group === "SECTION B"
      ? "B"
      : null;

  return {
    ...circuit,
    label:
      direction === "incoming"
        ? "Incoming Circuit"
        : direction === "coupler"
        ? "Bus Coupler"
        : "Outgoing Circuit",
    type:
      direction === "coupler"
        ? "coupler"
        : "pcc-circuit",
    direction,
    section,
    source: "reference",
  };
};

const getPccCircuitOptions = (panelId) =>
  (PCC_CIRCUIT_OPTIONS[panelId] || []).map(
    normalizeReferencePccCircuit
  );

const getDefaultPccCircuits = (panelId) =>
  getPccCircuitOptions(panelId).map(
    (circuit) => ({ ...circuit })
  );

const createPccCustomCircuitId = (panelId) =>
  `${String(panelId || "pcc").replace(/[^a-zA-Z0-9-]/g, "-")}-custom-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 7)}`;

const createDefaultPccPanels = (
  count
) =>
  Array.from(
    {
      length: count,
    },
    (_, index) => {
      const panelId = `pcc-${index + 1}`;

      return {
        id: panelId,
        name: `PCC ${index + 1}`,

        /*
          circuits contains the exact existing flowTopology
          circuit IDs selected for this PCC.
        */
        circuits: getDefaultPccCircuits(panelId),

        /*
          equipment is retained for backward compatibility
          with older project configurations.
        */
        equipment:
          index < 2
            ? [
                "utility1",
                "utility2",
                "ups",
              ]
            : [],

        upsUnits:
          index < 2
            ? UPS_UNIT_OPTIONS.map(
                (unit) => unit.id
              )
            : [],
      };
    }
  );

function CreateProject({
  onCancel,
  onProjectCreated,
}) {
  const [step, setStep] = useState(1);

  const [error, setError] = useState("");

  /* =========================================================
     PROJECT DETAILS
  ========================================================= */

  const [projectDetails, setProjectDetails] = useState({
    clientName: "",
    projectName: "",
    projectCode: "",
    location: "",
    email: "",
    password: "",
  });

  /* =========================================================
     SELECTED SYSTEMS
  ========================================================= */

  const [selectedSystems, setSelectedSystems] = useState([
    "source",
  ]);

  /* =========================================================
     SOURCE CONFIGURATION

     This is the first fully dynamic system for our POC.
  ========================================================= */

  const [sourceConfig, setSourceConfig] = useState({
    voltageLevel: "33kV",
    incomingCount: 2,
    outgoingCount: 1,
    meterCount: 1,
    protectionRelay: true,
    busCoupler: false,
  });

  const [feederConfig, setFeederConfig] = useState({
    voltageLevel: "33kV",
    incomingCount: 1,
    outgoingCount: 6,
  });

  const [transformerConfig, setTransformerConfig] =
  useState({
    count: 6,
    primaryVoltage: "33kV",
    secondaryVoltage: "433V",
  });

  const [ltKioskConfig, setLTKioskConfig] =
  useState({
    count: 6,
  });

  const [busductConfig, setBusductConfig] =
  useState({
    count: 6,
  });

  const [pccConfig, setPccConfig] =
  useState({
    count: 4,
    panels: createDefaultPccPanels(4),
  });

  const [pccCustomDrafts, setPccCustomDrafts] =
  useState({});

  const [raisingMainConfig, setRaisingMainConfig] =
  useState({
    count: 4,
  });

  const [wingConfig, setWingConfig] =
  useState({
    count: 2,
    floorsPerWing: 20,
  });

  const [dgConfig, setDgConfig] =
  useState({
    count: 7,
    units: createDefaultDgUnits(7),
  });

  const [hvacConfig, setHvacConfig] =
  useState({
    count: 0,
  });

  const [waterConfig, setWaterConfig] =
  useState({
    stpEnabled: true,
    wtpEnabled: true,
    tankCount: 4,
  });

  const [fireConfig, setFireConfig] =
  useState({
    fireAlarms: true,
    fireFighting: true,
    firePump: true,
  });
  /* =========================================================
     HELPERS
  ========================================================= */

  const selectedSystemObjects = useMemo(
    () =>
      AVAILABLE_SYSTEMS.filter((system) =>
        selectedSystems.includes(system.id)
      ),
    [selectedSystems]
  );

  const updateProjectDetail = (key, value) => {
    setProjectDetails((current) => ({
      ...current,
      [key]: value,
    }));

    setError("");
  };

  const updateSourceConfig = (key, value) => {
    setSourceConfig((current) => ({
      ...current,
      [key]: value,
    }));

    setError("");
  };

  const updateFeederConfig = (key, value) => {
    setFeederConfig((current) => ({
      ...current,
      [key]: value,
    }));

    setError("");
  };

  const updateTransformerConfig = (
  key,
  value
) => {
  setTransformerConfig(
    (current) => ({
      ...current,
      [key]: value,
    })
  );

  setError("");
};

  const updateLTKioskConfig = (
  key,
  value
) => {
  setLTKioskConfig(
    (current) => ({
      ...current,
      [key]: value,
    })
  );

  setError("");
};

  const updateBusductConfig = (
  key,
  value
) => {
  setBusductConfig(
    (current) => ({
      ...current,
      [key]: value,
    })
  );

  setError("");
};

  const updatePccConfig = (
  key,
  value
) => {
  setPccConfig(
    (current) => {
      if (key === "count") {
        const count =
          Number(value);

        if (!Number.isInteger(count)) {
          return {
            ...current,
            count: value,
          };
        }

        const defaults =
          createDefaultPccPanels(count);

        return {
          ...current,
          count: value,
          panels: Array.from(
            {
              length: Math.max(
                count,
                0
              ),
            },
            (_, index) =>
              current.panels?.[index] ||
              defaults[index]
          ),
        };
      }

      return {
        ...current,
        [key]: value,
      };
    }
  );

  setError("");
};

  const updatePccPanel = (
  panelIndex,
  key,
  value
) => {
  setPccConfig(
    (current) => ({
      ...current,
      panels: current.panels.map(
        (panel, index) =>
          index === panelIndex
            ? {
                ...panel,
                [key]: value,
              }
            : panel
      ),
    })
  );

  setError("");
};

  const togglePccCircuit = (
  panelIndex,
  circuit
) => {
  setPccConfig(
    (current) => ({
      ...current,
      panels: current.panels.map(
        (panel, index) => {
          if (index !== panelIndex) {
            return panel;
          }

          const circuits =
            Array.isArray(panel.circuits)
              ? panel.circuits
              : [];

          const exists =
            circuits.some(
              (item) =>
                item?.id === circuit.id
            );

          const nextCircuits =
            exists
              ? circuits.filter(
                  (item) =>
                    item?.id !== circuit.id
                )
              : [
                  ...circuits,
                  { ...circuit },
                ];

          const hasUtility1 =
            nextCircuits.some(
              (item) =>
                item?.id?.endsWith(
                  "-utility1"
                )
            );

          const hasUtility2 =
            nextCircuits.some(
              (item) =>
                item?.id?.endsWith(
                  "-utility2"
                )
            );

          const equipment = [
            ...(hasUtility1
              ? ["utility1"]
              : []),
            ...(hasUtility2
              ? ["utility2"]
              : []),
            ...(panel.upsUnits?.length > 0
              ? ["ups"]
              : []),
          ];

          return {
            ...panel,
            circuits: nextCircuits,
            equipment,
          };
        }
      ),
    })
  );

  setError("");
};

  const updatePccCustomDraft = (
    panelId,
    key,
    value
  ) => {
    setPccCustomDrafts(
      (current) => ({
        ...current,
        [panelId]: {
          name:
            current[panelId]?.name ||
            "",
          label:
            current[panelId]?.label ||
            "",
          direction:
            current[panelId]?.direction ||
            "outgoing",
          section:
            current[panelId]?.section ||
            "",
          [key]: value,
        },
      })
    );

    setError("");
  };

  const addPccCustomCircuit = (
    panelIndex
  ) => {
    const panel =
      pccConfig.panels[
        panelIndex
      ];

    if (!panel) {
      return;
    }

    const draft =
      pccCustomDrafts[
        panel.id
      ] || {};

    const name =
      String(
        draft.name || ""
      ).trim();

    if (!name) {
      setError(
        `Enter a custom equipment name for ${panel.name || `PCC ${panelIndex + 1}`}.`
      );
      return;
    }

    const direction =
      ["incoming", "outgoing", "coupler"].includes(
        draft.direction
      )
        ? draft.direction
        : "outgoing";

    const customCircuit = {
      id:
        createPccCustomCircuitId(
          panel.id
        ),
      name,
      label:
        String(
          draft.label || ""
        ).trim() ||
        (
          direction === "incoming"
            ? "Incoming Circuit"
            : direction === "coupler"
            ? "Bus Coupler"
            : "Outgoing Circuit"
        ),
      type:
        direction === "coupler"
          ? "coupler"
          : "pcc-circuit",
      direction,
      section:
        String(
          draft.section || ""
        ).trim() ||
        null,
      source: "custom",
    };

    setPccConfig(
      (current) => ({
        ...current,
        panels:
          current.panels.map(
            (item, index) =>
              index === panelIndex
                ? {
                    ...item,
                    circuits: [
                      ...(Array.isArray(
                        item.circuits
                      )
                        ? item.circuits
                        : []),
                      customCircuit,
                    ],
                  }
                : item
          ),
      })
    );

    setPccCustomDrafts(
      (current) => ({
        ...current,
        [panel.id]: {
          name: "",
          label: "",
          direction:
            "outgoing",
          section: "",
        },
      })
    );

    setError("");
  };

  const removePccCustomCircuit = (
    panelIndex,
    circuitId
  ) => {
    setPccConfig(
      (current) => ({
        ...current,
        panels:
          current.panels.map(
            (panel, index) =>
              index === panelIndex
                ? {
                    ...panel,
                    circuits:
                      (
                        panel.circuits ||
                        []
                      ).filter(
                        (circuit) =>
                          circuit.id !==
                          circuitId
                      ),
                  }
                : panel
          ),
      })
    );

    setError("");
  };

  const movePccCircuit = (
    panelIndex,
    circuitIndex,
    direction
  ) => {
    setPccConfig(
      (current) => ({
        ...current,
        panels:
          current.panels.map(
            (panel, index) => {
              if (
                index !==
                panelIndex
              ) {
                return panel;
              }

              const circuits = [
                ...(panel.circuits ||
                  []),
              ];

              const targetIndex =
                circuitIndex +
                direction;

              if (
                targetIndex < 0 ||
                targetIndex >=
                  circuits.length
              ) {
                return panel;
              }

              [
                circuits[
                  circuitIndex
                ],
                circuits[
                  targetIndex
                ],
              ] = [
                circuits[
                  targetIndex
                ],
                circuits[
                  circuitIndex
                ],
              ];

              return {
                ...panel,
                circuits,
              };
            }
          ),
      })
    );
  };

  const togglePccPanelEquipment = (
  panelIndex,
  equipmentId
) => {
  setPccConfig(
    (current) => ({
      ...current,
      panels: current.panels.map(
        (panel, index) => {
          if (index !== panelIndex) {
            return panel;
          }

          const equipment =
            panel.equipment.includes(
              equipmentId
            )
              ? panel.equipment.filter(
                  (item) =>
                    item !== equipmentId
                )
              : [
                  ...panel.equipment,
                  equipmentId,
                ];

          return {
            ...panel,
            equipment,
            upsUnits:
              equipmentId === "ups" &&
              equipment.includes("ups") &&
              panel.upsUnits.length === 0
                ? [
                    UPS_UNIT_OPTIONS[0].id,
                  ]
                : equipment.includes("ups")
                ? panel.upsUnits
                : [],
          };
        }
      ),
    })
  );

  setError("");
};

  const togglePccUpsUnit = (
  panelIndex,
  unitId
) => {
  setPccConfig(
    (current) => ({
      ...current,
      panels: current.panels.map(
        (panel, index) => {
          if (index !== panelIndex) {
            return panel;
          }

          const upsUnits =
            panel.upsUnits.includes(unitId)
              ? panel.upsUnits.filter(
                  (item) => item !== unitId
                )
              : [
                  ...panel.upsUnits,
                  unitId,
                ];

          return {
            ...panel,
            upsUnits,
            equipment:
              upsUnits.length > 0 &&
              !panel.equipment.includes("ups")
                ? [
                    ...panel.equipment,
                    "ups",
                  ]
                : upsUnits.length === 0
                ? panel.equipment.filter(
                    (item) => item !== "ups"
                  )
                : panel.equipment,
          };
        }
      ),
    })
  );

  setError("");
};

  const updateRaisingMainConfig = (
  key,
  value
) => {
  setRaisingMainConfig(
    (current) => ({
      ...current,
      [key]: value,
    })
  );

  setError("");
};

  const updateWingConfig = (
  key,
  value
) => {
  setWingConfig(
    (current) => ({
      ...current,
      [key]: value,
    })
  );

  setError("");
};

  const updateDgConfig = (
  key,
  value
) => {
  setDgConfig(
    (current) => {
      if (key === "count") {
        const count =
          Number(value);

        if (!Number.isInteger(count)) {
          return {
            ...current,
            count: value,
          };
        }

        const defaults =
          createDefaultDgUnits(count);

        return {
          ...current,
          count: value,
          units: Array.from(
            {
              length: Math.max(
                count,
                0
              ),
            },
            (_, index) =>
              current.units[index] ||
              defaults[index]
          ),
        };
      }

      return {
        ...current,
        [key]: value,
      };
    }
  );

  setError("");
};

  const updateDgUnit = (
  index,
  key,
  value
) => {
  setDgConfig(
    (current) => ({
      ...current,
      units: current.units.map(
        (unit, unitIndex) =>
          unitIndex === index
            ? {
                ...unit,
                [key]: value,
              }
            : unit
      ),
    })
  );

  setError("");
};

  const updateHvacConfig = (
  key,
  value
) => {
  setHvacConfig(
    (current) => ({
      ...current,
      [key]: value,
    })
  );

  setError("");
};

  const updateWaterConfig = (
  key,
  value
) => {
  setWaterConfig(
    (current) => ({
      ...current,
      [key]: value,
    })
  );

  setError("");
};

  const updateFireConfig = (
  key,
  value
) => {
  setFireConfig(
    (current) => ({
      ...current,
      [key]: value,
    })
  );

  setError("");
};



  const toggleSystem = (systemId) => {
    setSelectedSystems((current) => {
      if (current.includes(systemId)) {
        return current.filter((id) => id !== systemId);
      }

      return [...current, systemId];
    });

    setError("");
  };

  /* =========================================================
     VALIDATION
  ========================================================= */

  const validateProjectStep = () => {
    if (!projectDetails.clientName.trim()) {
      setError("Enter the client name.");
      return false;
    }

    if (!projectDetails.projectName.trim()) {
      setError("Enter the project name.");
      return false;
    }

    if (!projectDetails.projectCode.trim()) {
      setError("Enter the project code.");
      return false;
    }

    if (!projectDetails.location.trim()) {
      setError("Enter the project location.");
      return false;
    }

    if (!projectDetails.email.trim()) {
      setError("Enter the client email.");
      return false;
    }

    if (!projectDetails.password.trim()) {
      setError("Enter a demo client password.");
      return false;
    }

    return true;
  };

  const validateSystemsStep = () => {
    if (selectedSystems.length === 0) {
      setError("Select at least one BMS system.");
      return false;
    }

    return true;
  };

  const validateConfigurationStep = () => {
    if (selectedSystems.includes("source")) {
      const incomingCount = Number(sourceConfig.incomingCount);
      const outgoingCount = Number(sourceConfig.outgoingCount);
      const meterCount = Number(sourceConfig.meterCount);

      if (!Number.isInteger(incomingCount) || incomingCount < 0 || incomingCount > 20) {
        setError("Source incoming feeder count must be between 0 and 20.");
        return false;
      }

      if (!Number.isInteger(outgoingCount) || outgoingCount < 0 || outgoingCount > 30) {
        setError("Source outgoing feeder count must be between 0 and 30.");
        return false;
      }

      if (!Number.isInteger(meterCount) || meterCount < 0 || meterCount > 20) {
        setError("Source energy meter count must be between 0 and 20.");
        return false;
      }

      if (incomingCount === 0 && outgoingCount === 0) {
        setError("Source requires at least one incoming or outgoing feeder.");
        return false;
      }
    }

    if (selectedSystems.includes("feeder")) {
      const incomingCount = Number(feederConfig.incomingCount);
      const outgoingCount = Number(feederConfig.outgoingCount);

      if (!Number.isInteger(incomingCount) || incomingCount < 1 || incomingCount > 20) {
        setError("Feeder incoming feeder count must be between 1 and 20.");
        return false;
      }

      if (!Number.isInteger(outgoingCount) || outgoingCount < 1 || outgoingCount > 30) {
        setError("Feeder outgoing feeder count must be between 1 and 30.");
        return false;
      }
    }


    if (
  selectedSystems.includes(
    "transformer"
  )
) {
  const count = Number(
    transformerConfig.count
  );

  if (
    !Number.isInteger(count) ||
    count < 1 ||
    count > 30
  ) {
    setError(
      "Transformer count must be between 1 and 30."
    );

    return false;
  }

  if (
    !transformerConfig.primaryVoltage
  ) {
    setError(
      "Select the transformer primary voltage."
    );

    return false;
  }

  if (
    !transformerConfig.secondaryVoltage
  ) {
    setError(
      "Select the transformer secondary voltage."
    );

    return false;
    }
}

    if (
  selectedSystems.includes(
    "lt-kiosk"
  )
) {
  const count = Number(
    ltKioskConfig.count
  );

  if (
    !Number.isInteger(count) ||
    count < 1 ||
    count > 30
  ) {
    setError(
      "LT Kiosk count must be between 1 and 30."
    );

    return false;
  }
}

    if (
  selectedSystems.includes(
    "busduct"
  )
) {
  const count = Number(
    busductConfig.count
  );

  if (
    !Number.isInteger(count) ||
    count < 1 ||
    count > 30
  ) {
    setError(
      "Busduct count must be between 1 and 30."
    );

    return false;
  }
}

    if (
  selectedSystems.includes(
    "pcc"
  )
) {
  const count = Number(
    pccConfig.count
  );

  if (
    !Number.isInteger(count) ||
    count < 1 ||
    count > 20
  ) {
    setError(
      "PCC panel count must be between 1 and 20."
    );

    return false;
  }

  if (
    !Array.isArray(pccConfig.panels) ||
    pccConfig.panels.length !== count
  ) {
    setError(
      "PCC panel configuration rows must match the PCC panel count."
    );

    return false;
  }

  const invalidPanel =
    pccConfig.panels.find(
      (panel) => {
        const circuits =
          Array.isArray(
            panel.circuits
          )
            ? panel.circuits
            : [];

        const invalidCircuit =
          circuits.some(
            (circuit) =>
              !circuit?.id ||
              !String(
                circuit?.name ||
                ""
              ).trim() ||
              ![
                "incoming",
                "outgoing",
                "coupler",
              ].includes(
                circuit?.direction
              )
          );

        const hasUtility =
          circuits.some(
            (circuit) =>
              circuit.id?.endsWith(
                "-utility1"
              ) ||
              circuit.id?.endsWith(
                "-utility2"
              )
          );

        return (
          !panel.name.trim() ||
          invalidCircuit ||
          (
            panel.upsUnits.length >
              0 &&
            !hasUtility
          )
        );
      }
    );

  if (invalidPanel) {
    setError(
      "Check the PCC panel name, circuit configuration and UPS supply. UPS units require at least one selected Utility circuit."
    );

    return false;
  }
}

    if (
  selectedSystems.includes(
    "raising-main"
  )
) {
  const count = Number(
    raisingMainConfig.count
  );

  if (
    !Number.isInteger(count) ||
    count < 1 ||
    count > 20
  ) {
    setError(
      "Raising Main count must be between 1 and 20."
    );

    return false;
  }
}

    if (
  selectedSystems.includes(
    "wing"
  )
) {
  const wingCount = Number(
    wingConfig.count
  );

  const floorsPerWing = Number(
    wingConfig.floorsPerWing
  );

  if (
    !Number.isInteger(wingCount) ||
    wingCount < 1 ||
    wingCount > 10
  ) {
    setError(
      "Wing count must be between 1 and 10."
    );

    return false;
  }

  if (
    !Number.isInteger(floorsPerWing) ||
    floorsPerWing < 1 ||
    floorsPerWing > 100
  ) {
    setError(
      "Floors per Wing must be between 1 and 100."
    );

    return false;
  }
}

    if (
  selectedSystems.includes(
    "dg"
  )
) {
  const count = Number(
    dgConfig.count
  );

  if (
    !Number.isInteger(count) ||
    count < 1 ||
    count > 20
  ) {
    setError(
      "DG count must be between 1 and 20."
    );

    return false;
  }

  if (
    dgConfig.units.length !== count
  ) {
    setError(
      "DG capacity rows must match the DG count."
    );

    return false;
  }

  const invalidUnit =
    dgConfig.units.find(
      (unit) => {
        const capacity = Number(
          unit.capacity
        );

        return (
          !unit.name.trim() ||
          !Number.isFinite(capacity) ||
          capacity < 1 ||
          capacity > 5000
        );
      }
    );

  if (invalidUnit) {
    setError(
      "Enter valid DG names and capacities between 1 and 5000 kVA."
    );

    return false;
  }
}

    if (
  selectedSystems.includes(
    "hvac"
  )
) {
  const count = Number(
    hvacConfig.count
  );

  if (
    !Number.isInteger(count) ||
    count < 0 ||
    count > 30
  ) {
    setError(
      "HVAC equipment count must be between 0 and 30."
    );

    return false;
  }
}

    if (
  selectedSystems.includes(
    "wtp"
  )
) {
  const tankCount = Number(
    waterConfig.tankCount
  );

  if (
    !Number.isInteger(tankCount) ||
    tankCount < 0 ||
    tankCount > 20
  ) {
    setError(
      "Water tank count must be between 0 and 20."
    );

    return false;
  }
}

    if (
  selectedSystems.includes(
    "fire"
  )
) {
  if (
    !fireConfig.fireAlarms &&
    !fireConfig.fireFighting &&
    !fireConfig.firePump
  ) {
    setError(
      "Select at least one Fire subsystem."
    );

    return false;
  }
}

    return true;
  };

  /* =========================================================
     NEXT / BACK
  ========================================================= */

  const handleNext = () => {
    setError("");

    if (step === 1 && !validateProjectStep()) {
      return;
    }

    if (step === 2 && !validateSystemsStep()) {
      return;
    }

    if (step === 3 && !validateConfigurationStep()) {
      return;
    }

    setStep((current) => Math.min(current + 1, 4));
  };

  const handleBack = () => {
    setError("");

    setStep((current) => Math.max(current - 1, 1));
  };

  /* =========================================================
     CREATE PROJECT

     This creates our frontend project configuration.

     Later:
     POST /api/projects
  ========================================================= */

  const handleCreateProject = () => {
    const projectId = `project-${Date.now()}`;

    const systems = selectedSystemObjects.map((system) => {
      if (system.id === "source") {
        return {
          id: "source",
          type: "source",
          name: `${sourceConfig.voltageLevel} Source`,
          title: `${sourceConfig.voltageLevel} SOURCE`,

          configuration: {
            voltageLevel: sourceConfig.voltageLevel,

            incomingCount: Number(
              sourceConfig.incomingCount
            ),

            outgoingCount: Number(
              sourceConfig.outgoingCount
            ),

            meterCount: Number(sourceConfig.meterCount),

            protectionRelay: sourceConfig.protectionRelay,

            busCoupler: sourceConfig.busCoupler,
          },
        };
      }

      if (system.id === "feeder") {
    return {
    id: "feeder",
    type: "feeder",

    name: `${feederConfig.voltageLevel} Feeder`,

    title: `${feederConfig.voltageLevel} FEEDER`,

    configuration: {
      voltageLevel:
        feederConfig.voltageLevel,

      incomingCount: Number(
        feederConfig.incomingCount
      ),

      outgoingCount: Number(
        feederConfig.outgoingCount
      ),
    },

    

  };

  


}


if (
  system.id === "transformer"
) {
  return {
    id: "transformer",

    type: "transformer",

    name: "Transformer",

    title: "TRANSFORMER",

    configuration: {
      count: Number(
        transformerConfig.count
      ),

      primaryVoltage:
        transformerConfig.primaryVoltage,

      secondaryVoltage:
        transformerConfig.secondaryVoltage,
    },
  };
}

if (
  system.id === "lt-kiosk"
) {
  return {
    id: "lt-kiosk",

    type: "lt-kiosk",

    name: "LT Kiosk",

    title: "LT KIOSK",

    configuration: {
      count: Number(
        ltKioskConfig.count
      ),
    },
  };
}

if (
  system.id === "busduct"
) {
  return {
    id: "busduct",

    type: "busduct",

    name: "Busduct",

    title: "BUSDUCT",

    configuration: {
      count: Number(
        busductConfig.count
      ),
    },
  };
}

if (
  system.id === "pcc"
) {
  return {
    id: "pcc",

    type: "pcc",

    name: "PCC",

    title: "PCC",

    configuration: {
      count: Number(
        pccConfig.count
      ),

      panels: pccConfig.panels.map(
        (panel, index) => ({
          id:
            panel.id ||
            `pcc-${index + 1}`,

          name:
            panel.name.trim() ||
            `PCC ${index + 1}`,

          circuits:
            Array.isArray(
              panel.circuits
            )
              ? panel.circuits
                  .filter(Boolean)
                  .map(
                    (circuit) => ({
                      id:
                        circuit.id,
                      name:
                        circuit.name,
                      label:
                        circuit.label,
                      type:
                        circuit.type ||
                        (
                          circuit.direction ===
                          "coupler"
                            ? "coupler"
                            : "pcc-circuit"
                        ),
                      direction:
                        circuit.direction ||
                        "outgoing",
                      section:
                        circuit.section ||
                        null,
                      source:
                        circuit.source ||
                        "reference",
                    })
                  )
              : [],

          equipment:
            panel.equipment.filter(
              Boolean
            ),

          upsUnits:
            panel.upsUnits.filter(
              Boolean
            ),
        })
      ),
    },
  };
}

if (
  system.id === "raising-main"
) {
  return {
    id: "raising-main",

    type: "raising-main",

    name: "Raising Main",

    title: "RAISING MAIN",

    configuration: {
      count: Number(
        raisingMainConfig.count
      ),
    },
  };
}

if (
  system.id === "wing"
) {
  return {
    id: "wing",

    type: "wing",

    name: "Wing",

    title: "WING",

    configuration: {
      count: Number(
        wingConfig.count
      ),

      floorsPerWing: Number(
        wingConfig.floorsPerWing
      ),
    },
  };
}

if (
  system.id === "dg"
) {
  return {
    id: "dg",

    type: "dg",

    name: "DG",

    title: "DG",

    configuration: {
      count: Number(
        dgConfig.count
      ),

      units: dgConfig.units.map(
        (unit, index) => ({
          name:
            unit.name.trim() ||
            `DG${index + 1}`,

          capacity: Number(
            unit.capacity
          ),
        })
      ),
    },
  };
}

if (
  system.id === "hvac"
) {
  return {
    id: "hvac",

    type: "hvac",

    name: "HVAC",

    title: "HVAC",

    configuration: {
      count: Number(
        hvacConfig.count
      ),
    },
  };
}

if (
  system.id === "wtp"
) {
  return {
    id: "wtp",

    type: "wtp",

    name: "Water Management",

    title: "WATER MANAGEMENT",

    configuration: {
      stpEnabled:
        waterConfig.stpEnabled,

      wtpEnabled:
        waterConfig.wtpEnabled,

      tankCount: Number(
        waterConfig.tankCount
      ),
    },
  };
}

if (
  system.id === "fire"
) {
  return {
    id: "fire",

    type: "fire",

    name: "Fire",

    title: "FIRE",

    configuration: {
      fireAlarms:
        fireConfig.fireAlarms,

      fireFighting:
        fireConfig.fireFighting,

      firePump:
        fireConfig.firePump,
    },
  };
}
      return {
        id: system.id,
        type: system.id,
        name: system.name,
        title: system.name.toUpperCase(),

        /*
          These systems are selected but not yet dynamically
          configured in this first proof-of-concept.
        */
        configuration: {},
      };
    });

    const newProject = {
      id: projectId,

      clientName: projectDetails.clientName.trim(),

      projectName: projectDetails.projectName.trim(),

      projectCode: projectDetails.projectCode
        .trim()
        .toUpperCase(),

      location: projectDetails.location.trim(),

      clientCredentials: {
        email: projectDetails.email.trim().toLowerCase(),

        /*
          DEMO ONLY.

          Never store a real password like this in production.
        */
        password: projectDetails.password,
      },

      status: "active",

      systems,

      createdAt: new Date().toISOString(),
    };

    onProjectCreated?.(newProject);
  };

  /* =========================================================
     RESET SOURCE
  ========================================================= */

  const resetSource = () => {
    setSourceConfig({
      voltageLevel: "33kV",
      incomingCount: 2,
      outgoingCount: 1,
      meterCount: 1,
      protectionRelay: true,
      busCoupler: false,
    });
  };

  const resetFeeder = () => {
    setFeederConfig({
      voltageLevel: "33kV",
      incomingCount: 1,
      outgoingCount: 6,
    });
  };

  const resetTransformer = () => {
  setTransformerConfig({
    count: 6,
    primaryVoltage: "33kV",
    secondaryVoltage: "433V",
  });
};

  const resetLTKiosk = () => {
  setLTKioskConfig({
    count: 6,
  });
};

  const resetBusduct = () => {
  setBusductConfig({
    count: 6,
  });
};

  const resetPccConfig = () => {
  setPccConfig({
    count: 4,
    panels: createDefaultPccPanels(4),
  });

  setPccCustomDrafts({});
};

  const resetRaisingMain = () => {
  setRaisingMainConfig({
    count: 4,
  });
};

  const resetWing = () => {
  setWingConfig({
    count: 2,
    floorsPerWing: 20,
  });
};

  const resetDg = () => {
  setDgConfig({
    count: 7,
    units: createDefaultDgUnits(7),
  });
};

  const resetHvac = () => {
  setHvacConfig({
    count: 0,
  });
};

  const resetWaterConfig = () => {
  setWaterConfig({
    stpEnabled: true,
    wtpEnabled: true,
    tankCount: 4,
  });
};

  const resetFireConfig = () => {
  setFireConfig({
    fireAlarms: true,
    fireFighting: true,
    firePump: true,
  });
};

  /* =========================================================
     STYLES
  ========================================================= */

  const styles = `
    .cp {
      --cp-bg:#07131e;
      --cp-surface:#0d1e2c;
      --cp-surface-2:#102638;
      --cp-surface-3:#0a1a27;
      --cp-border:#203e51;
      --cp-border-strong:#2b6077;
      --cp-text:#f4f8fb;
      --cp-muted:#7f9aaa;
      --cp-cyan:#35c4d5;
      --cp-cyan-soft:#63d3df;
      --cp-green:#31c48d;
      --cp-red:#ff707a;

      width:100%;
      min-height:100vh;

      box-sizing:border-box;

      color:var(--cp-text);

      background:var(--cp-bg);

      font-family:
        Inter,
        ui-sans-serif,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;
    }

    .cp * {
      box-sizing:border-box;
    }

    .cp-header {
      height:72px;

      padding:0 34px;

      display:flex;
      align-items:center;
      justify-content:space-between;

      border-bottom:
        1px solid
        var(--cp-border);

      background:#091823;
    }

    .cp-header__left {
      display:flex;
      align-items:center;
      gap:15px;
    }

    .cp-back {
      width:38px;
      height:38px;

      display:flex;
      align-items:center;
      justify-content:center;

      border:
        1px solid
        var(--cp-border);

      border-radius:5px;

      color:#9db8c7;

      background:#102536;

      cursor:pointer;
    }

    .cp-back:hover {
      color:var(--cp-cyan-soft);
      border-color:#348da5;
    }

    .cp-header__copy strong {
      display:block;

      font-size:14px;
    }

    .cp-header__copy span {
      display:block;

      margin-top:3px;

      color:var(--cp-muted);

      font-size:8px;
      font-weight:800;

      letter-spacing:.12em;
    }

    .cp-header__badge {
      display:flex;
      align-items:center;
      gap:6px;

      padding:7px 10px;

      border:
        1px solid
        #275b70;

      border-radius:4px;

      color:#67cbd8;

      background:#0e2939;

      font-size:8px;
      font-weight:800;

      letter-spacing:.08em;
    }

    .cp-shell {
      width:min(100%,1380px);

      margin:0 auto;

      padding:30px 38px 45px;
    }

    .cp-title {
      margin-bottom:25px;
    }

    .cp-title__eyebrow {
      margin-bottom:7px;

      color:var(--cp-cyan);

      font-size:8px;
      font-weight:800;

      letter-spacing:.14em;
    }

    .cp-title h1 {
      margin:0;

      font-size:28px;
      font-weight:720;

      letter-spacing:-.025em;
    }

    .cp-title p {
      max-width:690px;

      margin:7px 0 0;

      color:var(--cp-muted);

      font-size:10px;

      line-height:1.6;
    }

    /* =====================================================
       STEPS
    ===================================================== */

    .cp-steps {
      display:grid;

      grid-template-columns:
        repeat(4,minmax(0,1fr));

      margin-bottom:28px;

      border:
        1px solid
        var(--cp-border);

      background:var(--cp-surface);
    }

    .cp-step {
      position:relative;

      min-height:66px;

      padding:0 18px;

      display:flex;
      align-items:center;

      gap:10px;

      color:#607f91;

      border-right:
        1px solid
        var(--cp-border);
    }

    .cp-step:last-child {
      border-right:0;
    }

    .cp-step__number {
      width:27px;
      height:27px;

      flex:0 0 27px;

      display:flex;
      align-items:center;
      justify-content:center;

      border:
        1px solid
        #345265;

      border-radius:50%;

      font-size:9px;
      font-weight:800;
    }

    .cp-step span {
      font-size:9px;
      font-weight:800;

      letter-spacing:.08em;
    }

    .cp-step--active {
      color:#dcecf3;

      background:#10293a;
    }

    .cp-step--active::after {
      content:"";

      position:absolute;

      left:0;
      right:0;
      bottom:-1px;

      height:2px;

      background:var(--cp-cyan);
    }

    .cp-step--active
    .cp-step__number {
      border-color:var(--cp-cyan);

      color:#04181f;

      background:var(--cp-cyan);
    }

    .cp-step--complete {
      color:#8fcab2;
    }

    .cp-step--complete
    .cp-step__number {
      border-color:#2d916b;

      color:#b2ecd1;

      background:#12392d;
    }

    /* =====================================================
       CONTENT PANEL
    ===================================================== */

    .cp-panel {
      border:
        1px solid
        var(--cp-border);

      background:var(--cp-surface);
    }

    .cp-panel__header {
      padding:20px 22px;

      border-bottom:
        1px solid
        var(--cp-border);
    }

    .cp-panel__header h2 {
      margin:0;

      font-size:16px;
      font-weight:700;
    }

    .cp-panel__header p {
      margin:6px 0 0;

      color:var(--cp-muted);

      font-size:9px;

      line-height:1.5;
    }

    .cp-panel__body {
      padding:23px;
    }

    /* =====================================================
       FORM
    ===================================================== */

    .cp-form-grid {
      display:grid;

      grid-template-columns:
        repeat(2,minmax(0,1fr));

      gap:18px;
    }

    .cp-field {
      display:flex;
      flex-direction:column;

      gap:7px;
    }

    .cp-field--full {
      grid-column:1 / -1;
    }

    .cp-field label {
      color:#b7ccd7;

      font-size:8px;
      font-weight:800;

      letter-spacing:.08em;
    }

    .cp-required {
      color:#ff8a91;
    }

    .cp-input,
    .cp-select {
      width:100%;
      height:44px;

      padding:0 13px;

      border:
        1px solid
        #294b60;

      border-radius:4px;

      outline:none;

      color:#edf6fa;

      background:#0a1d2b;

      font-family:inherit;

      font-size:10px;
    }

    .cp-input::placeholder {
      color:#557487;
    }

    .cp-input:focus,
    .cp-select:focus {
      border-color:#3196ad;

      box-shadow:
        0 0 0 3px
        rgba(53,196,213,.06);
    }

    .cp-select {
      cursor:pointer;
    }

    /* =====================================================
       SYSTEM SELECTION
    ===================================================== */

    .cp-system-grid {
      display:grid;

      grid-template-columns:
        repeat(4,minmax(0,1fr));

      gap:13px;
    }

    .cp-system {
      position:relative;

      min-height:142px;

      padding:16px;

      border:
        1px solid
        #29495c;

      border-radius:5px;

      text-align:left;

      color:var(--cp-text);

      background:#0b1c29;

      cursor:pointer;
    }

    .cp-system:hover {
      border-color:#34778e;
    }

    .cp-system--selected {
      border-color:#2faabd;

      background:#0e2b3b;
    }

    .cp-system__check {
      position:absolute;

      top:12px;
      right:12px;

      width:20px;
      height:20px;

      display:flex;
      align-items:center;
      justify-content:center;

      border:
        1px solid
        #38586a;

      border-radius:3px;

      color:transparent;

      background:#0b1a26;
    }

    .cp-system--selected
    .cp-system__check {
      border-color:var(--cp-cyan);

      color:#04171d;

      background:var(--cp-cyan);
    }

    .cp-system__icon {
      width:37px;
      height:37px;

      margin-bottom:13px;

      display:flex;
      align-items:center;
      justify-content:center;

      border:
        1px solid
        #285c72;

      border-radius:4px;

      color:#5bcbd9;

      background:#103145;
    }

    .cp-system strong {
      display:block;

      margin-bottom:5px;

      font-size:11px;
    }

    .cp-system p {
      margin:0;

      color:#718e9f;

      font-size:8px;

      line-height:1.45;
    }

    /* =====================================================
       CONFIGURATION
    ===================================================== */

    .cp-config-stack {
      display:flex;
      flex-direction:column;

      gap:16px;
    }

    .cp-config-card {
      border:
        1px solid
        #294b5f;

      background:#0a1b28;
    }

    .cp-config-card__head {
      min-height:58px;

      padding:0 17px;

      display:flex;
      align-items:center;
      justify-content:space-between;

      border-bottom:
        1px solid
        #244355;
    }

    .cp-config-card__identity {
      display:flex;
      align-items:center;

      gap:10px;
    }

    .cp-config-card__icon {
      width:34px;
      height:34px;

      display:flex;
      align-items:center;
      justify-content:center;

      border:
        1px solid
        #2b647a;

      border-radius:4px;

      color:#5bcbd9;

      background:#103247;
    }

    .cp-config-card__identity strong {
      display:block;

      font-size:11px;
    }

    .cp-config-card__identity span {
      display:block;

      margin-top:3px;

      color:#6f8d9e;

      font-size:8px;
    }

    .cp-reset {
      height:31px;

      padding:0 10px;

      display:flex;
      align-items:center;
      gap:6px;

      border:
        1px solid
        #31566a;

      border-radius:4px;

      color:#91adbc;

      background:#102332;

      font-size:8px;
      font-weight:800;

      cursor:pointer;
    }

    .cp-config-card__body {
      padding:18px;
    }

    .cp-config-grid {
      display:grid;

      grid-template-columns:
        repeat(3,minmax(0,1fr));

      gap:16px;
    }

    .cp-toggle-field {
      min-height:70px;

      padding:12px 13px;

      display:flex;
      align-items:center;
      justify-content:space-between;

      gap:15px;

      border:
        1px solid
        #27475a;

      background:#0d202e;
    }

    .cp-toggle-field strong {
      display:block;

      margin-bottom:3px;

      font-size:9px;
    }

    .cp-toggle-field span {
      color:#6f8d9d;

      font-size:8px;
    }

    .cp-toggle {
      width:45px;
      height:24px;

      padding:2px;

      border:0;

      border-radius:20px;

      background:#344d5d;

      cursor:pointer;
    }

    .cp-toggle::after {
      content:"";

      display:block;

      width:20px;
      height:20px;

      border-radius:50%;

      background:#b8c6ce;

      transition:
        transform .15s ease;
    }

    .cp-toggle--on {
      background:#218e78;
    }

    .cp-toggle--on::after {
      transform:translateX(21px);

      background:#e5fff5;
    }

    .cp-config-placeholder {
      padding:17px;

      border:
        1px dashed
        #315064;

      color:#6f8d9e;

      background:#0b1d2a;

      font-size:9px;

      line-height:1.6;
    }


    .cp-subheading {
      margin:20px 0 10px;
      color:#8fb0bf;
      font-size:8px;
      font-weight:800;
      letter-spacing:.12em;
    }

    .cp-custom-builder {
      padding:15px;
      border:1px solid #27475a;
      background:#0d202e;
    }

    .cp-add-equipment {
      height:36px;
      margin-top:14px;
      padding:0 13px;
      display:inline-flex;
      align-items:center;
      gap:7px;
      border:1px solid #2aa9bc;
      border-radius:4px;
      color:#061b21;
      background:var(--cp-cyan);
      font-family:inherit;
      font-size:8px;
      font-weight:800;
      cursor:pointer;
    }

    .cp-custom-list {
      margin-top:12px;
      display:flex;
      flex-direction:column;
      gap:7px;
    }

    .cp-custom-item {
      min-height:54px;
      padding:9px 11px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:14px;
      border:1px solid #294b5f;
      background:#0a1b28;
    }

    .cp-custom-item strong {
      display:block;
      color:#e8f4f8;
      font-size:9px;
    }

    .cp-custom-item span {
      display:block;
      margin-top:4px;
      color:#708e9f;
      font-size:8px;
    }

    .cp-custom-actions {
      display:flex;
      gap:6px;
      flex:0 0 auto;
    }

    .cp-custom-actions button {
      width:30px;
      height:30px;
      display:grid;
      place-items:center;
      border:1px solid #31566a;
      border-radius:3px;
      color:#9fc0ce;
      background:#102332;
      cursor:pointer;
    }

    .cp-custom-actions button:disabled {
      opacity:.35;
      cursor:not-allowed;
    }

    .cp-custom-actions .cp-custom-delete {
      border-color:#71414a;
      color:#ff9ca4;
      background:#2b171c;
    }

    /* =====================================================
       REVIEW
    ===================================================== */

    .cp-review-grid {
      display:grid;

      grid-template-columns:
        minmax(0,1fr)
        minmax(0,1fr);

      gap:17px;
    }

    .cp-review-card {
      border:
        1px solid
        #294b5f;

      background:#0a1b28;
    }

    .cp-review-card__head {
      padding:14px 16px;

      border-bottom:
        1px solid
        #244355;

      color:#c7d9e2;

      font-size:9px;
      font-weight:800;

      letter-spacing:.08em;
    }

    .cp-review-card__body {
      padding:15px 16px;
    }

    .cp-review-row {
      min-height:35px;

      display:flex;
      align-items:center;
      justify-content:space-between;

      gap:15px;

      border-bottom:
        1px solid
        rgba(43,75,94,.55);
    }

    .cp-review-row:last-child {
      border-bottom:0;
    }

    .cp-review-row span {
      color:#718e9e;

      font-size:8px;
    }

    .cp-review-row strong {
      max-width:65%;

      color:#e5f0f5;

      font-size:9px;
      font-weight:650;

      text-align:right;
    }

    .cp-review-systems {
      display:flex;
      flex-wrap:wrap;

      gap:7px;
    }

    .cp-review-system {
      padding:7px 9px;

      border:
        1px solid
        #2b6075;

      border-radius:3px;

      color:#8bd6df;

      background:#0e2a3a;

      font-size:8px;
      font-weight:750;
    }

    .cp-review-source {
      grid-column:1 / -1;
    }

    /* =====================================================
       ERROR
    ===================================================== */

    .cp-error {
      margin-top:16px;

      padding:11px 13px;

      border-left:
        3px solid
        var(--cp-red);

      color:#ffabb1;

      background:
        rgba(185,59,71,.11);

      font-size:9px;
    }

    /* =====================================================
       FOOTER
    ===================================================== */

    .cp-footer {
      margin-top:17px;

      padding-top:17px;

      display:flex;
      align-items:center;
      justify-content:space-between;

      border-top:
        1px solid
        var(--cp-border);
    }

    .cp-footer__right {
      display:flex;
      gap:9px;
    }

    .cp-btn {
      height:39px;

      padding:0 15px;

      display:flex;
      align-items:center;
      justify-content:center;

      gap:7px;

      border-radius:4px;

      font-family:inherit;

      font-size:9px;
      font-weight:800;

      cursor:pointer;
    }

    .cp-btn--secondary {
      border:
        1px solid
        #315367;

      color:#9cb6c4;

      background:#102331;
    }

    .cp-btn--primary {
      border:
        1px solid
        #2aa9bc;

      color:#04171d;

      background:var(--cp-cyan);
    }

    .cp-btn--create {
      border:
        1px solid
        #2fa676;

      color:#041c13;

      background:#42ca94;
    }

    .cp-btn:hover {
      filter:brightness(1.08);
    }

    /* =====================================================
       RESPONSIVE
    ===================================================== */

    @media(max-width:1050px) {
      .cp-system-grid {
        grid-template-columns:
          repeat(3,minmax(0,1fr));
      }

      .cp-config-grid {
        grid-template-columns:
          repeat(2,minmax(0,1fr));
      }
    }

    @media(max-width:760px) {
      .cp-header {
        padding:0 17px;
      }

      .cp-shell {
        padding:22px 17px 35px;
      }

      .cp-steps {
        grid-template-columns:
          repeat(2,minmax(0,1fr));
      }

      .cp-step:nth-child(2) {
        border-right:0;
      }

      .cp-step:nth-child(-n+2) {
        border-bottom:
          1px solid
          var(--cp-border);
      }

      .cp-form-grid,
      .cp-review-grid {
        grid-template-columns:1fr;
      }

      .cp-review-source {
        grid-column:auto;
      }

      .cp-system-grid,
      .cp-config-grid {
        grid-template-columns:
          repeat(2,minmax(0,1fr));
      }
    }

    @media(max-width:520px) {
      .cp-system-grid,
      .cp-config-grid {
        grid-template-columns:1fr;
      }

      .cp-footer {
        align-items:stretch;
        flex-direction:column;

        gap:9px;
      }

      .cp-footer__right {
        display:grid;
        grid-template-columns:1fr 1fr;
      }

      .cp-footer .cp-btn {
        width:100%;
      }
    }
  `;

  /* =========================================================
     STEP 1
  ========================================================= */

  const renderProjectDetails = () => (
    <section className="cp-panel">
      <div className="cp-panel__header">
        <h2>Client & Project Details</h2>

        <p>
          Enter the basic information for the new BMS project.
        </p>
      </div>

      <div className="cp-panel__body">
        <div className="cp-form-grid">
          <div className="cp-field">
            <label>
              CLIENT NAME{" "}
              <span className="cp-required">*</span>
            </label>

            <input
              className="cp-input"
              value={projectDetails.clientName}
              placeholder="Example: ABC Technologies"
              onChange={(event) =>
                updateProjectDetail(
                  "clientName",
                  event.target.value
                )
              }
            />
          </div>

          <div className="cp-field">
            <label>
              PROJECT NAME{" "}
              <span className="cp-required">*</span>
            </label>

            <input
              className="cp-input"
              value={projectDetails.projectName}
              placeholder="Example: ABC Tech Park"
              onChange={(event) =>
                updateProjectDetail(
                  "projectName",
                  event.target.value
                )
              }
            />
          </div>

          <div className="cp-field">
            <label>
              PROJECT CODE{" "}
              <span className="cp-required">*</span>
            </label>

            <input
              className="cp-input"
              value={projectDetails.projectCode}
              placeholder="Example: BMS-001"
              onChange={(event) =>
                updateProjectDetail(
                  "projectCode",
                  event.target.value
                )
              }
            />
          </div>

          <div className="cp-field">
            <label>
              PROJECT LOCATION{" "}
              <span className="cp-required">*</span>
            </label>

            <input
              className="cp-input"
              value={projectDetails.location}
              placeholder="Example: Hyderabad"
              onChange={(event) =>
                updateProjectDetail(
                  "location",
                  event.target.value
                )
              }
            />
          </div>

          <div className="cp-field">
            <label>
              CLIENT EMAIL{" "}
              <span className="cp-required">*</span>
            </label>

            <input
              className="cp-input"
              type="email"
              value={projectDetails.email}
              placeholder="client@company.com"
              onChange={(event) =>
                updateProjectDetail(
                  "email",
                  event.target.value
                )
              }
            />
          </div>

          <div className="cp-field">
            <label>
              DEMO CLIENT PASSWORD{" "}
              <span className="cp-required">*</span>
            </label>

            <input
              className="cp-input"
              type="text"
              value={projectDetails.password}
              placeholder="Demo password"
              onChange={(event) =>
                updateProjectDetail(
                  "password",
                  event.target.value
                )
              }
            />
          </div>
        </div>
      </div>
    </section>
  );

  /* =========================================================
     STEP 2
  ========================================================= */

  const renderSystemSelection = () => (
    <section className="cp-panel">
      <div className="cp-panel__header">
        <h2>Select BMS Systems</h2>

        <p>
          Choose the systems available in this client project.
          Only selected systems will eventually appear in the
          project dashboard.
        </p>
      </div>

      <div className="cp-panel__body">
        <div className="cp-system-grid">
          {AVAILABLE_SYSTEMS.map((system) => {
            const selected = selectedSystems.includes(system.id);

            const Icon =
              system.icon ||
              ShieldCheck;

            return (
              <button
                type="button"
                key={system.id}
                className={`cp-system ${
                  selected ? "cp-system--selected" : ""
                }`}
                onClick={() => toggleSystem(system.id)}
              >
                <div className="cp-system__check">
                  <Check size={13} />
                </div>

                <div className="cp-system__icon">
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                  />
                </div>

                <strong>{system.name}</strong>

                <p>
                  {system.description ||
                    "Selected for this project"}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );

  /* =========================================================
     SOURCE CONFIGURATION
  ========================================================= */

  const renderSourceConfiguration = () => (
    <div className="cp-config-card">
      <div className="cp-config-card__head">
        <div className="cp-config-card__identity">
          <div className="cp-config-card__icon">
            <UtilityPole size={18} />
          </div>

          <div>
            <strong>SOURCE</strong>

            <span>
              HT source and incoming supply configuration
            </span>
          </div>
        </div>

        <button
          type="button"
          className="cp-reset"
          onClick={resetSource}
        >
          <RotateCcw size={12} />

          RESET
        </button>
      </div>

      <div className="cp-config-card__body">
        <div className="cp-config-grid">
          <div className="cp-field">
            <label>VOLTAGE LEVEL</label>

            <select
              className="cp-select"
              value={sourceConfig.voltageLevel}
              onChange={(event) =>
                updateSourceConfig(
                  "voltageLevel",
                  event.target.value
                )
              }
            >
              <option value="11kV">11 kV</option>
              <option value="22kV">22 kV</option>
              <option value="33kV">33 kV</option>
              <option value="66kV">66 kV</option>
            </select>
          </div>

          <div className="cp-field">
            <label>INCOMING FEEDERS</label>

           <input
  className="cp-input"
  type="number"
  min="1"
  max="20"
  value={sourceConfig.incomingCount}
  onChange={(event) =>
    updateSourceConfig(
      "incomingCount",
      event.target.value
    )
  }
/>
          </div>

          <div className="cp-field">
            <label>OUTGOING FEEDERS</label>

           <input
  className="cp-input"
  type="number"
  min="1"
  max="30"
  value={sourceConfig.outgoingCount}
  onChange={(event) =>
    updateSourceConfig(
      "outgoingCount",
      event.target.value
    )
  }
/>
          </div>

          <div className="cp-field">
            <label>ENERGY METERS</label>

            <input
              className="cp-input"
              type="number"
              min="0"
              max="20"
              value={sourceConfig.meterCount}
              onChange={(event) =>
                updateSourceConfig(
                  "meterCount",
                  event.target.value
                )
              }
            />
          </div>

          <div className="cp-toggle-field">
            <div>
              <strong>Protection Relay</strong>

              <span>
                Include source protection relay
              </span>
            </div>

            <button
              type="button"
              className={`cp-toggle ${
                sourceConfig.protectionRelay
                  ? "cp-toggle--on"
                  : ""
              }`}
              aria-label="Toggle protection relay"
              onClick={() =>
                updateSourceConfig(
                  "protectionRelay",
                  !sourceConfig.protectionRelay
                )
              }
            />
          </div>

          <div className="cp-toggle-field">
            <div>
              <strong>Bus Coupler</strong>

              <span>
                Include bus coupler equipment
              </span>
            </div>

            <button
              type="button"
              className={`cp-toggle ${
                sourceConfig.busCoupler
                  ? "cp-toggle--on"
                  : ""
              }`}
              aria-label="Toggle bus coupler"
              onClick={() =>
                updateSourceConfig(
                  "busCoupler",
                  !sourceConfig.busCoupler
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderFeederConfiguration = () => (
  <div className="cp-config-card">
    <div className="cp-config-card__head">
      <div className="cp-config-card__identity">
        <div className="cp-config-card__icon">
          <Network size={18} />
        </div>

        <div>
          <strong>FEEDER</strong>

          <span>
            HT feeder incoming and outgoing configuration
          </span>
        </div>
      </div>

      <button
        type="button"
        className="cp-reset"
        onClick={resetFeeder}
      >
        <RotateCcw size={12} />

        RESET
      </button>
    </div>

    <div className="cp-config-card__body">
      <div className="cp-config-grid">

        <div className="cp-field">
          <label>VOLTAGE LEVEL</label>

          <select
            className="cp-select"
            value={feederConfig.voltageLevel}
            onChange={(event) =>
              updateFeederConfig(
                "voltageLevel",
                event.target.value
              )
            }
          >
            <option value="11kV">
              11 kV
            </option>

            <option value="22kV">
              22 kV
            </option>

            <option value="33kV">
              33 kV
            </option>

            <option value="66kV">
              66 kV
            </option>
          </select>
        </div>

        <div className="cp-field">
          <label>INCOMING FEEDERS</label>

          <input
            className="cp-input"
            type="number"
            min="1"
            max="20"
            value={
              feederConfig.incomingCount
            }
            onChange={(event) =>
              updateFeederConfig(
                "incomingCount",
                event.target.value
              )
            }
          />
        </div>

        <div className="cp-field">
          <label>OUTGOING FEEDERS</label>

          <input
            className="cp-input"
            type="number"
            min="1"
            max="30"
            value={
              feederConfig.outgoingCount
            }
            onChange={(event) =>
              updateFeederConfig(
                "outgoingCount",
                event.target.value
              )
            }
          />
        </div>

      </div>
    </div>
  </div>
);

const renderTransformerConfiguration =
  () => (
    <div className="cp-config-card">

      <div className="cp-config-card__head">

        <div className="cp-config-card__identity">

          <div className="cp-config-card__icon">
            <Zap size={18} />
          </div>

          <div>
            <strong>
              TRANSFORMER
            </strong>

            <span>
              Step-down transformer
              configuration
            </span>
          </div>

        </div>


        <button
          type="button"
          className="cp-reset"
          onClick={
            resetTransformer
          }
        >
          <RotateCcw size={12} />

          RESET
        </button>

      </div>


      <div className="cp-config-card__body">

        <div className="cp-config-grid">

          {/* COUNT */}

          <div className="cp-field">

            <label>
              TRANSFORMER COUNT
            </label>

            <input
              className="cp-input"
              type="number"
              min="1"
              max="30"
              value={
                transformerConfig.count
              }
              onChange={(event) =>
                updateTransformerConfig(
                  "count",
                  event.target.value
                )
              }
            />

          </div>


          {/* PRIMARY */}

          <div className="cp-field">

            <label>
              PRIMARY VOLTAGE
            </label>

            <select
              className="cp-select"
              value={
                transformerConfig
                  .primaryVoltage
              }
              onChange={(event) =>
                updateTransformerConfig(
                  "primaryVoltage",
                  event.target.value
                )
              }
            >
              <option value="11kV">
                11 kV
              </option>

              <option value="22kV">
                22 kV
              </option>

              <option value="33kV">
                33 kV
              </option>

              <option value="66kV">
                66 kV
              </option>
            </select>

          </div>


          {/* SECONDARY */}

          <div className="cp-field">

            <label>
              SECONDARY VOLTAGE
            </label>

            <select
              className="cp-select"
              value={
                transformerConfig
                  .secondaryVoltage
              }
              onChange={(event) =>
                updateTransformerConfig(
                  "secondaryVoltage",
                  event.target.value
                )
              }
            >
              <option value="415V">
                415 V
              </option>

              <option value="433V">
                433 V
              </option>

              <option value="440V">
                440 V
              </option>
            </select>

          </div>

        </div>

      </div>

    </div>
  );

const renderLTKioskConfiguration =
  () => (
    <div className="cp-config-card">

      <div className="cp-config-card__head">

        <div className="cp-config-card__identity">

          <div className="cp-config-card__icon">
            <PanelTop size={18} />
          </div>

          <div>
            <strong>
              LT KIOSK
            </strong>

            <span>
              LT distribution kiosk
              configuration
            </span>
          </div>

        </div>


        <button
          type="button"
          className="cp-reset"
          onClick={
            resetLTKiosk
          }
        >
          <RotateCcw size={12} />

          RESET
        </button>

      </div>


      <div className="cp-config-card__body">

        <div className="cp-config-grid">

          <div className="cp-field">

            <label>
              LT KIOSK COUNT
            </label>

            <input
              className="cp-input"
              type="number"
              min="1"
              max="30"
              value={
                ltKioskConfig.count
              }
              onChange={(event) =>
                updateLTKioskConfig(
                  "count",
                  event.target.value
                )
              }
            />

          </div>

        </div>

        </div>

      </div>

   
  );

const renderBusductConfiguration =
  () => (
    <div className="cp-config-card">

      <div className="cp-config-card__head">

        <div className="cp-config-card__identity">

          <div className="cp-config-card__icon">
            <Network size={18} />
          </div>

          <div>
            <strong>
              BUSDUCT
            </strong>

            <span>
              LT busduct and busbar
              configuration
            </span>
          </div>

        </div>


        <button
          type="button"
          className="cp-reset"
          onClick={
            resetBusduct
          }
        >
          <RotateCcw size={12} />

          RESET
        </button>

      </div>


      <div className="cp-config-card__body">

        <div className="cp-config-grid">

          <div className="cp-field">

            <label>
              BUSDUCT COUNT
            </label>

            <input
              className="cp-input"
              type="number"
              min="1"
              max="30"
              value={
                busductConfig.count
              }
              onChange={(event) =>
                updateBusductConfig(
                  "count",
                  event.target.value
                )
              }
            />

          </div>

        </div>

      </div>

    </div>
  );

const renderPccConfiguration =
  () => (
    <div className="cp-config-card">
      <div className="cp-config-card__head">
        <div className="cp-config-card__identity">
          <div className="cp-config-card__icon">
            <Cpu size={18} />
          </div>

          <div>
            <strong>PCC</strong>
            <span>
              Select reference circuits or add building-specific custom equipment
            </span>
          </div>
        </div>

        <button
          type="button"
          className="cp-reset"
          onClick={resetPccConfig}
        >
          <RotateCcw size={12} />
          RESET
        </button>
      </div>

      <div className="cp-config-card__body">
        <div className="cp-config-grid">
          <div className="cp-field">
            <label>PCC PANEL COUNT</label>
            <input
              className="cp-input"
              type="number"
              min="1"
              max="20"
              value={pccConfig.count}
              onChange={(event) =>
                updatePccConfig(
                  "count",
                  event.target.value
                )
              }
            />
          </div>
        </div>

        <div
          className="cp-config-stack"
          style={{ marginTop: 18 }}
        >
          {pccConfig.panels.map(
            (panel, panelIndex) => {
              const referenceOptions =
                getPccCircuitOptions(
                  panel.id
                );

              const circuits =
                Array.isArray(
                  panel.circuits
                )
                  ? panel.circuits
                  : [];

              const customCircuits =
                circuits.filter(
                  (circuit) =>
                    circuit.source ===
                    "custom"
                );

              const hasUtility1 =
                circuits.some(
                  (circuit) =>
                    circuit.id?.endsWith(
                      "-utility1"
                    )
                );

              const hasUtility2 =
                circuits.some(
                  (circuit) =>
                    circuit.id?.endsWith(
                      "-utility2"
                    )
                );

              const canUseUps =
                hasUtility1 ||
                hasUtility2;

              const draft =
                pccCustomDrafts[
                  panel.id
                ] || {
                  name: "",
                  label: "",
                  direction:
                    "outgoing",
                  section: "",
                };

              return (
                <div
                  className="cp-config-card"
                  key={panel.id}
                >
                  <div className="cp-config-card__head">
                    <div className="cp-config-card__identity">
                      <div className="cp-config-card__icon">
                        <PanelTop size={18} />
                      </div>

                      <div>
                        <strong>
                          {panel.name ||
                            `PCC ${panelIndex + 1}`}
                        </strong>

                        <span>
                          {circuits.length} configured circuit
                          {circuits.length === 1 ? "" : "s"}
                          {customCircuits.length > 0
                            ? ` / ${customCircuits.length} custom`
                            : ""}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="cp-config-card__body">
                    <div className="cp-config-grid">
                      <div className="cp-field">
                        <label>PANEL NAME</label>

                        <input
                          className="cp-input"
                          value={panel.name}
                          onChange={(event) =>
                            updatePccPanel(
                              panelIndex,
                              "name",
                              event.target.value
                            )
                          }
                        />
                      </div>
                    </div>

                    {referenceOptions.length > 0 && (
                      <>
                        <div className="cp-subheading">
                          REFERENCE EQUIPMENT
                        </div>

                        <div className="cp-config-grid">
                          {referenceOptions.map(
                            (circuit) => {
                              const selected =
                                circuits.some(
                                  (item) =>
                                    item.id ===
                                    circuit.id
                                );

                              return (
                                <div
                                  className="cp-toggle-field"
                                  key={circuit.id}
                                >
                                  <div>
                                    <strong>
                                      {circuit.name}
                                    </strong>
                                    <span>
                                      {circuit.direction.toUpperCase()}
                                      {circuit.section
                                        ? ` / SECTION ${circuit.section}`
                                        : ""}
                                    </span>
                                  </div>

                                  <button
                                    type="button"
                                    className={`cp-toggle ${
                                      selected
                                        ? "cp-toggle--on"
                                        : ""
                                    }`}
                                    aria-label={`Toggle ${circuit.name}`}
                                    onClick={() =>
                                      togglePccCircuit(
                                        panelIndex,
                                        circuit
                                      )
                                    }
                                  />
                                </div>
                              );
                            }
                          )}
                        </div>
                      </>
                    )}

                    <div className="cp-subheading">
                      CUSTOM EQUIPMENT
                    </div>

                    <div className="cp-custom-builder">
                      <div className="cp-config-grid">
                        <div className="cp-field">
                          <label>
                            EQUIPMENT NAME
                          </label>
                          <input
                            className="cp-input"
                            value={
                              draft.name ||
                              ""
                            }
                            placeholder="Example: Lift Panel"
                            onChange={(event) =>
                              updatePccCustomDraft(
                                panel.id,
                                "name",
                                event.target.value
                              )
                            }
                          />
                        </div>

                        <div className="cp-field">
                          <label>
                            EQUIPMENT LABEL
                          </label>
                          <input
                            className="cp-input"
                            value={
                              draft.label ||
                              ""
                            }
                            placeholder="Example: Lift Distribution"
                            onChange={(event) =>
                              updatePccCustomDraft(
                                panel.id,
                                "label",
                                event.target.value
                              )
                            }
                          />
                        </div>

                        <div className="cp-field">
                          <label>DIRECTION</label>
                          <select
                            className="cp-select"
                            value={
                              draft.direction ||
                              "outgoing"
                            }
                            onChange={(event) =>
                              updatePccCustomDraft(
                                panel.id,
                                "direction",
                                event.target.value
                              )
                            }
                          >
                            <option value="incoming">
                              Incoming
                            </option>
                            <option value="outgoing">
                              Outgoing
                            </option>
                            <option value="coupler">
                              Bus Coupler
                            </option>
                          </select>
                        </div>

                        <div className="cp-field">
                          <label>
                            SECTION / GROUP
                          </label>
                          <input
                            className="cp-input"
                            value={
                              draft.section ||
                              ""
                            }
                            placeholder="A, B, Chiller, Lift..."
                            onChange={(event) =>
                              updatePccCustomDraft(
                                panel.id,
                                "section",
                                event.target.value
                              )
                            }
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        className="cp-add-equipment"
                        onClick={() =>
                          addPccCustomCircuit(
                            panelIndex
                          )
                        }
                      >
                        <Plus size={14} />
                        ADD CUSTOM EQUIPMENT
                      </button>
                    </div>

                    {customCircuits.length > 0 && (
                      <div className="cp-custom-list">
                        {customCircuits.map(
                          (circuit) => {
                            const actualIndex =
                              circuits.findIndex(
                                (item) =>
                                  item.id ===
                                  circuit.id
                              );

                            return (
                              <div
                                className="cp-custom-item"
                                key={circuit.id}
                              >
                                <div>
                                  <strong>
                                    {circuit.name}
                                  </strong>
                                  <span>
                                    {circuit.direction.toUpperCase()}
                                    {circuit.section
                                      ? ` / ${circuit.section}`
                                      : ""}
                                    {" · "}
                                    {circuit.label}
                                  </span>
                                </div>

                                <div className="cp-custom-actions">
                                  <button
                                    type="button"
                                    disabled={
                                      actualIndex <=
                                      0
                                    }
                                    onClick={() =>
                                      movePccCircuit(
                                        panelIndex,
                                        actualIndex,
                                        -1
                                      )
                                    }
                                  >
                                    ↑
                                  </button>

                                  <button
                                    type="button"
                                    disabled={
                                      actualIndex >=
                                      circuits.length -
                                        1
                                    }
                                    onClick={() =>
                                      movePccCircuit(
                                        panelIndex,
                                        actualIndex,
                                        1
                                      )
                                    }
                                  >
                                    ↓
                                  </button>

                                  <button
                                    type="button"
                                    className="cp-custom-delete"
                                    onClick={() =>
                                      removePccCustomCircuit(
                                        panelIndex,
                                        circuit.id
                                      )
                                    }
                                  >
                                    <Trash2 size={13} />
                                  </button>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    )}

                    {(panelIndex < 2 ||
                      canUseUps ||
                      panel.upsUnits.length >
                        0) && (
                      <>
                        <div className="cp-subheading">
                          UPS DISTRIBUTION
                        </div>

                        <div className="cp-config-grid">
                          {UPS_UNIT_OPTIONS.map(
                            (unit) => (
                              <div
                                className="cp-toggle-field"
                                key={unit.id}
                              >
                                <div>
                                  <strong>
                                    {unit.name}
                                  </strong>
                                  <span>
                                    {canUseUps
                                      ? "Supplied from selected Utility circuit(s)"
                                      : "Select Utility 1 or Utility 2 first"}
                                  </span>
                                </div>

                                <button
                                  type="button"
                                  disabled={
                                    !canUseUps
                                  }
                                  className={`cp-toggle ${
                                    panel.upsUnits.includes(
                                      unit.id
                                    )
                                      ? "cp-toggle--on"
                                      : ""
                                  }`}
                                  style={{
                                    opacity:
                                      canUseUps
                                        ? 1
                                        : 0.45,
                                    cursor:
                                      canUseUps
                                        ? "pointer"
                                        : "not-allowed",
                                  }}
                                  onClick={() => {
                                    if (
                                      canUseUps
                                    ) {
                                      togglePccUpsUnit(
                                        panelIndex,
                                        unit.id
                                      );
                                    }
                                  }}
                                />
                              </div>
                            )
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );

const renderRaisingMainConfiguration =
  () => (
    <div className="cp-config-card">
      <div className="cp-config-card__head">
        <div className="cp-config-card__identity">
          <div className="cp-config-card__icon">
            <Bolt size={18} />
          </div>

          <div>
            <strong>
              RAISING MAIN
            </strong>
            <span>
              Vertical distribution configuration
            </span>
          </div>
        </div>

        <button
          type="button"
          className="cp-reset"
          onClick={resetRaisingMain}
        >
          <RotateCcw size={12} />
          RESET
        </button>
      </div>

      <div className="cp-config-card__body">
        <div className="cp-config-grid">
          <div className="cp-field">
            <label>
              RAISING MAIN COUNT
            </label>
            <input
              className="cp-input"
              type="number"
              min="1"
              max="20"
              value={raisingMainConfig.count}
              onChange={(event) =>
                updateRaisingMainConfig(
                  "count",
                  event.target.value
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );

const renderWingConfiguration =
  () => (
    <div className="cp-config-card">
      <div className="cp-config-card__head">
        <div className="cp-config-card__identity">
          <div className="cp-config-card__icon">
            <Building2 size={18} />
          </div>

          <div>
            <strong>
              WING
            </strong>
            <span>
              Building wing and floor configuration
            </span>
          </div>
        </div>

        <button
          type="button"
          className="cp-reset"
          onClick={resetWing}
        >
          <RotateCcw size={12} />
          RESET
        </button>
      </div>

      <div className="cp-config-card__body">
        <div className="cp-config-grid">
          <div className="cp-field">
            <label>
              WING COUNT
            </label>
            <input
              className="cp-input"
              type="number"
              min="1"
              max="10"
              value={wingConfig.count}
              onChange={(event) =>
                updateWingConfig(
                  "count",
                  event.target.value
                )
              }
            />
          </div>

          <div className="cp-field">
            <label>
              FLOORS PER WING
            </label>
            <input
              className="cp-input"
              type="number"
              min="1"
              max="100"
              value={wingConfig.floorsPerWing}
              onChange={(event) =>
                updateWingConfig(
                  "floorsPerWing",
                  event.target.value
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );

const renderDgConfiguration =
  () => (
    <div className="cp-config-card">
      <div className="cp-config-card__head">
        <div className="cp-config-card__identity">
          <div className="cp-config-card__icon">
            <Power size={18} />
          </div>

          <div>
            <strong>
              DG
            </strong>
            <span>
              Diesel generator capacity configuration
            </span>
          </div>
        </div>

        <button
          type="button"
          className="cp-reset"
          onClick={resetDg}
        >
          <RotateCcw size={12} />
          RESET
        </button>
      </div>

      <div className="cp-config-card__body">
        <div className="cp-config-grid">
          <div className="cp-field">
            <label>
              DG COUNT
            </label>
            <input
              className="cp-input"
              type="number"
              min="1"
              max="20"
              value={dgConfig.count}
              onChange={(event) =>
                updateDgConfig(
                  "count",
                  event.target.value
                )
              }
            />
          </div>
        </div>

        <div className="cp-config-grid">
          {dgConfig.units.map(
            (unit, index) => (
              <div
                className="cp-field"
                key={`dg-unit-${index}`}
              >
                <label>
                  {unit.name || `DG${index + 1}`} CAPACITY
                </label>
                <input
                  className="cp-input"
                  type="number"
                  min="1"
                  max="5000"
                  value={unit.capacity}
                  onChange={(event) =>
                    updateDgUnit(
                      index,
                      "capacity",
                      event.target.value
                    )
                  }
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );

const renderHvacConfiguration =
  () => (
    <div className="cp-config-card">
      <div className="cp-config-card__head">
        <div className="cp-config-card__identity">
          <div className="cp-config-card__icon">
            <Wind size={18} />
          </div>

          <div>
            <strong>
              HVAC
            </strong>
            <span>
              Mechanical equipment configuration
            </span>
          </div>
        </div>

        <button
          type="button"
          className="cp-reset"
          onClick={resetHvac}
        >
          <RotateCcw size={12} />
          RESET
        </button>
      </div>

      <div className="cp-config-card__body">
        <div className="cp-config-grid">
          <div className="cp-field">
            <label>
              HVAC EQUIPMENT COUNT
            </label>
            <input
              className="cp-input"
              type="number"
              min="0"
              max="30"
              value={hvacConfig.count}
              onChange={(event) =>
                updateHvacConfig(
                  "count",
                  event.target.value
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );

const renderWaterConfiguration =
  () => (
    <div className="cp-config-card">
      <div className="cp-config-card__head">
        <div className="cp-config-card__identity">
          <div className="cp-config-card__icon">
            <Droplets size={18} />
          </div>

          <div>
            <strong>
              WATER MANAGEMENT
            </strong>
            <span>
              STP, WTP and tank monitoring configuration
            </span>
          </div>
        </div>

        <button
          type="button"
          className="cp-reset"
          onClick={resetWaterConfig}
        >
          <RotateCcw size={12} />
          RESET
        </button>
      </div>

      <div className="cp-config-card__body">
        <div className="cp-config-grid">
          <div className="cp-toggle-field">
            <div>
              <strong>STP</strong>
              <span>Sewage treatment plant monitoring</span>
            </div>

            <button
              type="button"
              className={`cp-toggle ${
                waterConfig.stpEnabled
                  ? "cp-toggle--on"
                  : ""
              }`}
              aria-label="Toggle STP"
              onClick={() =>
                updateWaterConfig(
                  "stpEnabled",
                  !waterConfig.stpEnabled
                )
              }
            />
          </div>

          <div className="cp-toggle-field">
            <div>
              <strong>WTP</strong>
              <span>Water treatment plant monitoring</span>
            </div>

            <button
              type="button"
              className={`cp-toggle ${
                waterConfig.wtpEnabled
                  ? "cp-toggle--on"
                  : ""
              }`}
              aria-label="Toggle WTP"
              onClick={() =>
                updateWaterConfig(
                  "wtpEnabled",
                  !waterConfig.wtpEnabled
                )
              }
            />
          </div>

          <div className="cp-field">
            <label>
              WATER TANK COUNT
            </label>
            <input
              className="cp-input"
              type="number"
              min="0"
              max="20"
              value={waterConfig.tankCount}
              onChange={(event) =>
                updateWaterConfig(
                  "tankCount",
                  event.target.value
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );

const renderFireConfiguration =
  () => (
    <div className="cp-config-card">
      <div className="cp-config-card__head">
        <div className="cp-config-card__identity">
          <div className="cp-config-card__icon">
            <Flame size={18} />
          </div>

          <div>
            <strong>
              FIRE
            </strong>
            <span>
              Life safety subsystem configuration
            </span>
          </div>
        </div>

        <button
          type="button"
          className="cp-reset"
          onClick={resetFireConfig}
        >
          <RotateCcw size={12} />
          RESET
        </button>
      </div>

      <div className="cp-config-card__body">
        <div className="cp-config-grid">
          {[
            [
              "fireAlarms",
              "Fire Alarms",
              "Detection and alarm system",
            ],
            [
              "fireFighting",
              "Fire Fighting",
              "Hydrant and sprinkler system",
            ],
            [
              "firePump",
              "Fire Pump",
              "Fire pump monitoring",
            ],
          ].map(
            ([key, label, description]) => (
              <div
                className="cp-toggle-field"
                key={key}
              >
                <div>
                  <strong>{label}</strong>
                  <span>{description}</span>
                </div>

                <button
                  type="button"
                  className={`cp-toggle ${
                    fireConfig[key]
                      ? "cp-toggle--on"
                      : ""
                  }`}
                  aria-label={`Toggle ${label}`}
                  onClick={() =>
                    updateFireConfig(
                      key,
                      !fireConfig[key]
                    )
                  }
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
  /* =========================================================
     STEP 3
  ========================================================= */

  const renderConfiguration = () => (
    <section className="cp-panel">
      <div className="cp-panel__header">
        <h2>Configure Selected Systems</h2>
        <p>
          Configure the selected systems for this client project.
          PCC panels use the verified switchboard circuit inventories
          and UPS units from the existing BMS topology.
        </p>
      </div>

      <div className="cp-panel__body">
        <div className="cp-config-stack">
          {selectedSystems.includes("source") &&
            renderSourceConfiguration()}

          {selectedSystems.includes("feeder") &&
            renderFeederConfiguration()}

            {selectedSystems.includes(
  "transformer"
) &&
  renderTransformerConfiguration()}

          {selectedSystems.includes(
            "lt-kiosk"
          ) &&
            renderLTKioskConfiguration()}

          {selectedSystems.includes(
            "busduct"
          ) &&
            renderBusductConfiguration()}

          {selectedSystems.includes(
            "pcc"
          ) &&
            renderPccConfiguration()}

          {selectedSystems.includes(
            "raising-main"
          ) &&
            renderRaisingMainConfiguration()}

          {selectedSystems.includes(
            "wing"
          ) &&
            renderWingConfiguration()}

          {selectedSystems.includes(
            "dg"
          ) &&
            renderDgConfiguration()}

          {selectedSystems.includes(
            "hvac"
          ) &&
            renderHvacConfiguration()}

          {selectedSystems.includes(
            "wtp"
          ) &&
            renderWaterConfiguration()}

          {selectedSystems.includes(
            "fire"
          ) &&
            renderFireConfiguration()}

          {selectedSystemObjects
            .filter(
              (system) =>
                system.id !== "source" &&
                system.id !== "feeder"&&
    system.id !== "transformer" &&
                system.id !== "lt-kiosk" &&
                system.id !== "busduct" &&
                system.id !== "pcc" &&
                system.id !== "raising-main" &&
                system.id !== "wing" &&
                system.id !== "dg" &&
                system.id !== "hvac" &&
                system.id !== "wtp" &&
                system.id !== "fire"
            )
            .map((system) => (
              <div className="cp-config-card" key={system.id}>
                <div className="cp-config-card__head">
                  <div className="cp-config-card__identity">
                    <div className="cp-config-card__icon">
                      <Network size={18} />
                    </div>
                    <div>
                      <strong>{system.name.toUpperCase()}</strong>
                      <span>Selected for this project</span>
                    </div>
                  </div>
                </div>

                <div className="cp-config-card__body">
                  <div className="cp-config-placeholder">
                    {system.name} is selected for this project.
                    Its detailed equipment configuration will be
                    added in the next configuration stage.
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );

  /* =========================================================
     STEP 4
  ========================================================= */

  const renderReview = () => (
    <section className="cp-panel">
      <div className="cp-panel__header">
        <h2>Review Project Configuration</h2>

        <p>
          Confirm the client, project and BMS system
          configuration before creating the demo project.
        </p>
      </div>

      <div className="cp-panel__body">
        <div className="cp-review-grid">
          <div className="cp-review-card">
            <div className="cp-review-card__head">
              PROJECT INFORMATION
            </div>

            <div className="cp-review-card__body">
              <div className="cp-review-row">
                <span>Client</span>
                <strong>
                  {projectDetails.clientName}
                </strong>
              </div>

              <div className="cp-review-row">
                <span>Project</span>
                <strong>
                  {projectDetails.projectName}
                </strong>
              </div>

              <div className="cp-review-row">
                <span>Project Code</span>
                <strong>
                  {projectDetails.projectCode.toUpperCase()}
                </strong>
              </div>

              <div className="cp-review-row">
                <span>Location</span>
                <strong>
                  {projectDetails.location}
                </strong>
              </div>
            </div>
          </div>

          <div className="cp-review-card">
            <div className="cp-review-card__head">
              CLIENT ACCESS — DEMO
            </div>

            <div className="cp-review-card__body">
              <div className="cp-review-row">
                <span>Email</span>
                <strong>
                  {projectDetails.email}
                </strong>
              </div>

              <div className="cp-review-row">
                <span>Demo Password</span>
                <strong>
                  {projectDetails.password}
                </strong>
              </div>

              <div className="cp-review-row">
                <span>Status</span>
                <strong
                  style={{
                    color: "#31c48d",
                  }}
                >
                  ACTIVE
                </strong>
              </div>
            </div>
          </div>

          <div className="cp-review-card">
            <div className="cp-review-card__head">
              SELECTED SYSTEMS
            </div>

            <div className="cp-review-card__body">
              <div className="cp-review-systems">
                {selectedSystemObjects.map((system) => (
                  <div
                    key={system.id}
                    className="cp-review-system"
                  >
                    {system.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {selectedSystems.includes("source") && (
            <div className="cp-review-card cp-review-source">
              <div className="cp-review-card__head">
                SOURCE CONFIGURATION
              </div>

              <div className="cp-review-card__body">
                <div className="cp-review-row">
                  <span>Voltage Level</span>
                  <strong>
                    {sourceConfig.voltageLevel}
                  </strong>
                </div>

                <div className="cp-review-row">
                  <span>Incoming Feeders</span>
                  <strong>
                    {sourceConfig.incomingCount}
                  </strong>
                </div>

                <div className="cp-review-row">
                  <span>Outgoing Feeders</span>
                  <strong>
                    {sourceConfig.outgoingCount}
                  </strong>
                </div>

                <div className="cp-review-row">
                  <span>Energy Meters</span>
                  <strong>
                    {sourceConfig.meterCount}
                  </strong>
                </div>

                <div className="cp-review-row">
                  <span>Protection Relay</span>
                  <strong>
                    {sourceConfig.protectionRelay
                      ? "Included"
                      : "Not Included"}
                  </strong>
                </div>

                <div className="cp-review-row">
                  <span>Bus Coupler</span>
                  <strong>
                    {sourceConfig.busCoupler
                      ? "Included"
                      : "Not Included"}
                  </strong>
                </div>
              </div>
            </div>
          )}

          {selectedSystems.includes("feeder") && (
  <div className="cp-review-card cp-review-source">
    <div className="cp-review-card__head">
      FEEDER CONFIGURATION
    </div>

    <div className="cp-review-card__body">

      <div className="cp-review-row">
        <span>Voltage Level</span>

        <strong>
          {feederConfig.voltageLevel}
        </strong>
      </div>

      <div className="cp-review-row">
        <span>Incoming Feeders</span>

        <strong>
          {feederConfig.incomingCount}
        </strong>
      </div>

      <div className="cp-review-row">
        <span>Outgoing Feeders</span>

        <strong>
          {feederConfig.outgoingCount}
        </strong>
      </div>

    </div>
  </div>
)}


{selectedSystems.includes(
  "transformer"
) && (
  <div className="cp-review-card cp-review-source">

    <div className="cp-review-card__head">
      TRANSFORMER CONFIGURATION
    </div>


    <div className="cp-review-card__body">

      <div className="cp-review-row">
        <span>
          Transformer Count
        </span>

        <strong>
          {transformerConfig.count}
        </strong>
      </div>


      <div className="cp-review-row">
        <span>
          Primary Voltage
        </span>

        <strong>
          {
            transformerConfig
              .primaryVoltage
          }
        </strong>
      </div>


      <div className="cp-review-row">
        <span>
          Secondary Voltage
        </span>

        <strong>
          {
            transformerConfig
              .secondaryVoltage
          }
        </strong>
      </div>

    </div>

  </div>
)}


{selectedSystems.includes(
  "lt-kiosk"
) && (
  <div className="cp-review-card cp-review-source">

    <div className="cp-review-card__head">
      LT KIOSK CONFIGURATION
    </div>


    <div className="cp-review-card__body">

      <div className="cp-review-row">
        <span>
          LT Kiosk Count
        </span>

        <strong>
          {ltKioskConfig.count}
        </strong>
      </div>

    </div>

  </div>
)}


{selectedSystems.includes(
  "busduct"
) && (
  <div className="cp-review-card cp-review-source">

    <div className="cp-review-card__head">
      BUSDUCT CONFIGURATION
    </div>


    <div className="cp-review-card__body">

      <div className="cp-review-row">
        <span>
          Busduct Count
        </span>

        <strong>
          {busductConfig.count}
        </strong>
      </div>

    </div>

  </div>
)}


{selectedSystems.includes(
  "pcc"
) && (
  <div className="cp-review-card cp-review-source">

    <div className="cp-review-card__head">
      PCC CONFIGURATION
    </div>


    <div className="cp-review-card__body">

      <div className="cp-review-row">
        <span>
          PCC Panel Count
        </span>

        <strong>
          {pccConfig.count}
        </strong>
      </div>

      {pccConfig.panels.map(
        (panel) => (
          <div
            className="cp-review-row"
            key={panel.id}
          >
            <span>
              {panel.name}
            </span>

            <strong>
              {[
                `${panel.circuits?.length || 0} circuits`,
                panel.upsUnits.length > 0
                  ? `UPS (${panel.upsUnits.length})`
                  : null,
              ]
                .filter(Boolean)
                .join(", ")}
            </strong>
          </div>
        )
      )}

    </div>

  </div>
)}


{selectedSystems.includes(
  "raising-main"
) && (
  <div className="cp-review-card cp-review-source">
    <div className="cp-review-card__head">
      RAISING MAIN CONFIGURATION
    </div>
    <div className="cp-review-card__body">
      <div className="cp-review-row">
        <span>
          Raising Main Count
        </span>
        <strong>
          {raisingMainConfig.count}
        </strong>
      </div>
    </div>
  </div>
)}


{selectedSystems.includes(
  "wing"
) && (
  <div className="cp-review-card cp-review-source">
    <div className="cp-review-card__head">
      WING CONFIGURATION
    </div>
    <div className="cp-review-card__body">
      <div className="cp-review-row">
        <span>
          Wing Count
        </span>
        <strong>
          {wingConfig.count}
        </strong>
      </div>
      <div className="cp-review-row">
        <span>
          Floors per Wing
        </span>
        <strong>
          {wingConfig.floorsPerWing}
        </strong>
      </div>
    </div>
  </div>
)}


{selectedSystems.includes(
  "dg"
) && (
  <div className="cp-review-card cp-review-source">
    <div className="cp-review-card__head">
      DG CONFIGURATION
    </div>
    <div className="cp-review-card__body">
      <div className="cp-review-row">
        <span>
          DG Count
        </span>
        <strong>
          {dgConfig.count}
        </strong>
      </div>
      <div className="cp-review-row">
        <span>
          Capacities
        </span>
        <strong>
          {dgConfig.units
            .map(
              (unit) =>
                `${unit.name}: ${unit.capacity} kVA`
            )
            .join(", ")}
        </strong>
      </div>
    </div>
  </div>
)}


{selectedSystems.includes(
  "hvac"
) && (
  <div className="cp-review-card cp-review-source">
    <div className="cp-review-card__head">
      HVAC CONFIGURATION
    </div>
    <div className="cp-review-card__body">
      <div className="cp-review-row">
        <span>
          HVAC Equipment Count
        </span>
        <strong>
          {hvacConfig.count}
        </strong>
      </div>
    </div>
  </div>
)}


{selectedSystems.includes(
  "wtp"
) && (
  <div className="cp-review-card cp-review-source">
    <div className="cp-review-card__head">
      WATER MANAGEMENT CONFIGURATION
    </div>
    <div className="cp-review-card__body">
      <div className="cp-review-row">
        <span>
          STP
        </span>
        <strong>
          {waterConfig.stpEnabled
            ? "Enabled"
            : "Disabled"}
        </strong>
      </div>
      <div className="cp-review-row">
        <span>
          WTP
        </span>
        <strong>
          {waterConfig.wtpEnabled
            ? "Enabled"
            : "Disabled"}
        </strong>
      </div>
      <div className="cp-review-row">
        <span>
          Water Tank Count
        </span>
        <strong>
          {waterConfig.tankCount}
        </strong>
      </div>
    </div>
  </div>
)}


{selectedSystems.includes(
  "fire"
) && (
  <div className="cp-review-card cp-review-source">
    <div className="cp-review-card__head">
      FIRE CONFIGURATION
    </div>
    <div className="cp-review-card__body">
      <div className="cp-review-row">
        <span>
          Fire Alarms
        </span>
        <strong>
          {fireConfig.fireAlarms
            ? "Enabled"
            : "Disabled"}
        </strong>
      </div>
      <div className="cp-review-row">
        <span>
          Fire Fighting
        </span>
        <strong>
          {fireConfig.fireFighting
            ? "Enabled"
            : "Disabled"}
        </strong>
      </div>
      <div className="cp-review-row">
        <span>
          Fire Pump
        </span>
        <strong>
          {fireConfig.firePump
            ? "Enabled"
            : "Disabled"}
        </strong>
      </div>
    </div>
  </div>
)}
        </div>
      </div>
    </section>
  );

  
  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <main className="cp">
      <style>{styles}</style>

      {/* HEADER */}

      <header className="cp-header">
        <div className="cp-header__left">
          <button
            type="button"
            className="cp-back"
            onClick={onCancel}
            aria-label="Back to Super Admin Dashboard"
          >
            <ArrowLeft size={17} />
          </button>

          <div className="cp-header__copy">
            <strong>Create BMS Project</strong>

            <span>
              SUPER ADMIN / PROJECT BUILDER
            </span>
          </div>
        </div>

        <div className="cp-header__badge">
          <ShieldCheck size={13} />

          FRONTEND DEMO
        </div>
      </header>

      <div className="cp-shell">
        {/* TITLE */}

        <div className="cp-title">
          <div className="cp-title__eyebrow">
            CONFIGURATION-DRIVEN BMS
          </div>

          <h1>New Client Project</h1>

          <p>
            Define a client project and its BMS systems. The
            resulting configuration will later drive the same
            Overview, FlowDetail and SystemDetail components
            without creating a separate frontend for each client.
          </p>
        </div>

        {/* STEPS */}

        <div className="cp-steps">
          {STEPS.map((item) => {
            const complete = step > item.id;

            const active = step === item.id;

            return (
              <div
                key={item.id}
                className={`cp-step ${
                  active ? "cp-step--active" : ""
                } ${
                  complete ? "cp-step--complete" : ""
                }`}
              >
                <div className="cp-step__number">
                  {complete ? (
                    <Check size={13} />
                  ) : (
                    item.id
                  )}
                </div>

                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* CURRENT STEP */}

        {step === 1 && renderProjectDetails()}

        {step === 2 && renderSystemSelection()}

        {step === 3 && renderConfiguration()}

        {step === 4 && renderReview()}

        {/* ERROR */}

        {error && (
          <div className="cp-error">
            {error}
          </div>
        )}

        {/* FOOTER */}

        <div className="cp-footer">
          <button
            type="button"
            className="cp-btn cp-btn--secondary"
            onClick={onCancel}
          >
            CANCEL
          </button>

          <div className="cp-footer__right">
            {step > 1 && (
              <button
                type="button"
                className="cp-btn cp-btn--secondary"
                onClick={handleBack}
              >
                <ChevronLeft size={14} />

                BACK
              </button>
            )}

            {step < 4 ? (
              <button
                type="button"
                className="cp-btn cp-btn--primary"
                onClick={handleNext}
              >
                CONTINUE

                <ArrowRight size={14} />
              </button>
            ) : (
              <button
                type="button"
                className="cp-btn cp-btn--create"
                onClick={handleCreateProject}
              >
                <CheckCircle2 size={15} />

                CREATE PROJECT
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default CreateProject;



