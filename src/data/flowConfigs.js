// // import {
// //   RadioTower,
// //   GitBranch,
// //   Zap,
// //   Network,
// //   Cpu,
// //   Bolt,
// //   Building2,
// //   CirclePower,
// //   Fan,
// //   Droplets,
// //   Flame,
// //   BatteryCharging,
// //   PanelsTopLeft,
// // } from "lucide-react";


// // /* =========================================================
// //    OVERVIEW
// // ========================================================= */

// // export const flowCategories = [
// //   {
// //     id: "source",
// //     name: "Source",
// //     shortName: "33 kV Source",
// //     icon: RadioTower,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "33 kV",
// //     color: "source",
// //   },
// //   {
// //     id: "feeder",
// //     name: "Feeder",
// //     shortName: "33 kV Feeder",
// //     icon: GitBranch,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "1 IN / 6 OUT",
// //     color: "feeder",
// //   },
// //   {
// //     id: "transformer",
// //     name: "Transformer",
// //     shortName: "33/0.433 kV",
// //     icon: Zap,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "6 Units",
// //     color: "transformer",
// //   },
// //   {
// //     id: "lt-kiosk",
// //     name: "LT Kiosk",
// //     shortName: "LT Distribution",
// //     icon: PanelsTopLeft,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "6 Units",
// //     color: "lt-kiosk",
// //   },
// //   {
// //     id: "busduct",
// //     name: "Busduct",
// //     shortName: "LT Busduct / Busbar",
// //     icon: Network,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "6 Busbars",
// //     color: "busduct",
// //   },
// //   {
// //     id: "pcc",
// //     name: "PCC",
// //     shortName: "Power Control Centre",
// //     icon: Cpu,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "4 Panels",
// //     color: "pcc",
// //   },
// //   {
// //     id: "ups",
// //     name: "UPS",
// //     shortName: "UPS Distribution",
// //     icon: BatteryCharging,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "4 Units",
// //     color: "ups",
// //   },
// //   {
// //     id: "raising-main",
// //     name: "Raising Main",
// //     shortName: "Vertical Distribution",
// //     icon: Bolt,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "4 Mains",
// //     color: "raising-main",
// //   },
// //   {
// //     id: "wing",
// //     name: "Wing",
// //     shortName: "Building Distribution",
// //     icon: Building2,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "2 Wings",
// //     color: "wing",
// //   },
// //   {
// //     id: "dg",
// //     name: "DG",
// //     shortName: "Diesel Generator Plant",
// //     icon: CirclePower,
// //     status: "STANDBY",
// //     health: "READY",
// //     value: "7 DGs",
// //     color: "dg",
// //   },
// //   {
// //     id: "hvac",
// //     name: "HVAC",
// //     shortName: "HVAC Cooling Plant",
// //     icon: Fan,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "Running",
// //     color: "hvac",
// //   },
// //   {
// //     id: "wtp",
// //     name: "Water Management",
// //     shortName: "STP / WTP / Tanks",
// //     icon: Droplets,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "Normal",
// //     color: "wtp",
// //   },
// //   {
// //     id: "fire",
// //     name: "Fire",
// //     shortName: "Fire & Life Safety",
// //     icon: Flame,
// //     status: "ONLINE",
// //     health: "NORMAL",
// //     value: "Normal",
// //     color: "fire",
// //   },
// // ];


// // /* =========================================================
// //    HELPERS
// // ========================================================= */

// // const electrical = (
// //   id,
// //   name,
// //   label,
// //   type = "electrical",
// //   overrides = {}
// // ) => ({
// //   id,
// //   name,
// //   label,
// //   type,
// //   ...overrides,
// // });


// // const makePccCircuit = (
// //   panel,
// //   id,
// //   name,
// //   direction,
// //   section = null
// // ) => ({
// //   id: `${panel}-${id}`,
// //   name,
// //   label:
// //     direction === "incoming"
// //       ? "Incoming Circuit"
// //       : direction === "coupler"
// //       ? "Bus Coupler"
// //       : "Outgoing Circuit",
// //   type:
// //     direction === "coupler"
// //       ? "coupler"
// //       : "pcc-circuit",
// //   direction,
// //   section,
// // });


// // /* =========================================================
// //    PCC CIRCUITS
// // ========================================================= */

// // const pcc1Circuits = [
// //   makePccCircuit("pcc1", "lt6-in", "LT6 IN", "incoming", "A"),
// //   makePccCircuit("pcc1", "dg1234-in-a", "DG1-4 IN", "incoming", "A"),

// //   makePccCircuit("pcc1", "og1", "OG1", "outgoing", "A"),
// //   makePccCircuit("pcc1", "rm1-a", "RM1", "outgoing", "A"),
// //   makePccCircuit("pcc1", "rm2-a", "RM2", "outgoing", "A"),
// //   makePccCircuit("pcc1", "utility1", "Utility 1", "outgoing", "A"),
// //   makePccCircuit("pcc1", "spare1", "Spare 1", "outgoing", "A"),

// //   makePccCircuit("pcc1", "bus-coupler", "Bus Coupler", "coupler"),

// //   makePccCircuit("pcc1", "lt5-in", "LT5 IN", "incoming", "B"),
// //   makePccCircuit("pcc1", "dg1234-in-b", "DG1-4 IN", "incoming", "B"),

// //   makePccCircuit("pcc1", "rm1-b", "RM1", "outgoing", "B"),
// //   makePccCircuit("pcc1", "rm2-b", "RM2", "outgoing", "B"),
// //   makePccCircuit("pcc1", "utility2", "Utility 2", "outgoing", "B"),
// //   makePccCircuit("pcc1", "spare2", "Spare 2", "outgoing", "B"),
// // ];


// // const pcc2Circuits = [
// //   makePccCircuit("pcc2", "lt1-in", "LT1 IN", "incoming", "A"),
// //   makePccCircuit("pcc2", "dg1234-in-a", "DG1-4 IN", "incoming", "A"),

// //   makePccCircuit("pcc2", "og1", "OG1", "outgoing", "A"),
// //   makePccCircuit("pcc2", "rm1-a", "RM1", "outgoing", "A"),
// //   makePccCircuit("pcc2", "rm2-a", "RM2", "outgoing", "A"),
// //   makePccCircuit("pcc2", "utility1", "Utility 1", "outgoing", "A"),
// //   makePccCircuit("pcc2", "spare1", "Spare 1", "outgoing", "A"),

// //   makePccCircuit("pcc2", "bus-coupler", "Bus Coupler", "coupler"),

// //   makePccCircuit("pcc2", "lt2-in", "LT2 IN", "incoming", "B"),
// //   makePccCircuit("pcc2", "dg1234-in-b", "DG1-4 IN", "incoming", "B"),

// //   makePccCircuit("pcc2", "rm1-b", "RM1", "outgoing", "B"),
// //   makePccCircuit("pcc2", "rm2-b", "RM2", "outgoing", "B"),
// //   makePccCircuit("pcc2", "utility2", "Utility 2", "outgoing", "B"),
// //   makePccCircuit("pcc2", "spare2", "Spare 2", "outgoing", "B"),
// // ];


// // const pcc3Circuits = [
// //   makePccCircuit("pcc3", "lt4-in", "LT4 IN", "incoming"),
// //   makePccCircuit("pcc3", "dg567-in", "DG5-7 IN", "incoming"),

// //   ...Array.from(
// //     { length: 10 },
// //     (_, index) =>
// //       makePccCircuit(
// //         "pcc3",
// //         `og-${index + 1}`,
// //         `OG ${index + 1}`,
// //         "outgoing"
// //       )
// //   ),
// // ];


// // const pcc4Circuits = [
// //   makePccCircuit("pcc4", "lt3-in", "LT3 IN", "incoming"),
// //   makePccCircuit("pcc4", "dg567-in", "DG5-7 IN", "incoming"),

// //   ...Array.from(
// //     { length: 10 },
// //     (_, index) =>
// //       makePccCircuit(
// //         "pcc4",
// //         `og-${index + 1}`,
// //         `OG ${index + 1}`,
// //         "outgoing"
// //       )
// //   ),
// // ];


// // /* =========================================================
// //    TOPOLOGY
// // ========================================================= */

// // export const flowTopology = {

// //   source: {
// //     id: "source",
// //     title: "33 kV Source",
// //     subtitle: "Incoming HT Source & Metering",
// //     layout: "grid",
// //     category: "electrical",

// //     equipment: [
// //       electrical(
// //         "source-inc1",
// //         "INC1",
// //         "Primary Incoming Feeder",
// //         "incomer"
// //       ),
// //       electrical(
// //         "source-out",
// //         "OUT",
// //         "Outgoing Busbar",
// //         "busbar"
// //       ),
// //       electrical(
// //         "source-inc2",
// //         "INC2",
// //         "Secondary Incoming Feeder",
// //         "incomer"
// //       ),
// //       electrical(
// //         "source-meter",
// //         "Metering Unit",
// //         "33 kV Energy Monitoring Meter",
// //         "meter"
// //       ),
// //     ],
// //   },


// //   feeder: {
// //     id: "feeder",
// //     title: "33 kV Feeder Panel",
// //     subtitle: "1 Incoming / 6 Outgoing Feeders",
// //     layout: "feeder",
// //     category: "electrical",

// //     incoming: electrical(
// //       "feeder-in-1",
// //       "Incoming Feeder 1",
// //       "33 kV Feeder Incoming",
// //       "incomer"
// //     ),

// //     equipment: Array.from(
// //       { length: 6 },
// //       (_, index) =>
// //         electrical(
// //           `feeder-og-${index + 1}`,
// //           `OG-${index + 1}`,
// //           `Outgoing Feeder → TR-${index + 1}`,
// //           "feeder"
// //         )
// //     ),
// //   },


// //   transformer: {
// //     id: "transformer",
// //     title: "Transformers",
// //     subtitle: "33 kV / 433 V Step-Down Transformers",
// //     layout: "parallel",
// //     category: "transformer",

// //     equipment: Array.from(
// //       { length: 6 },
// //       (_, index) =>
// //         electrical(
// //           `transformer-${index + 1}`,
// //           `TR-${index + 1}`,
// //           "33 kV / 433 V Transformer",
// //           "transformer"
// //         )
// //     ),
// //   },


// //   "lt-kiosk": {
// //     id: "lt-kiosk",
// //     title: "LT Kiosk",
// //     subtitle: "433 V LT Distribution Panels",
// //     layout: "parallel",
// //     category: "electrical",

// //     equipment: Array.from(
// //       { length: 6 },
// //       (_, index) =>
// //         electrical(
// //           `kiosk-${index + 1}`,
// //           `KIOSK-${index + 1}`,
// //           "433 V LT Kiosk",
// //           "kiosk"
// //         )
// //     ),
// //   },


// //   busduct: {
// //     id: "busduct",
// //     title: "LT Busduct / Busbar",
// //     subtitle: "Busbar Condition Monitoring",
// //     layout: "parallel",
// //     category: "busduct",

// //     equipment: Array.from(
// //       { length: 6 },
// //       (_, index) =>
// //         electrical(
// //           `bus-${index + 1}`,
// //           `BUS-${index + 1}`,
// //           "LT Busduct / Busbar",
// //           "busduct"
// //         )
// //     ),
// //   },


// //   pcc: {
// //     id: "pcc",
// //     title: "Power Control Centre",
// //     subtitle: "PCC 1–4 Incomings, Outgoings & Bus Couplers",
// //     layout: "pcc",
// //     category: "pcc",

// //     panels: [
// //       {
// //         id: "pcc-1",
// //         name: "PCC 1",
// //         label: "Wing A LT Distribution",
// //         circuits: pcc1Circuits,
// //       },
// //       {
// //         id: "pcc-2",
// //         name: "PCC 2",
// //         label: "Wing A LT Distribution",
// //         circuits: pcc2Circuits,
// //       },
// //       {
// //         id: "pcc-3",
// //         name: "PCC 3",
// //         label: "Wing B LT Distribution",
// //         circuits: pcc3Circuits,
// //       },
// //       {
// //         id: "pcc-4",
// //         name: "PCC 4",
// //         label: "Wing B LT Distribution",
// //         circuits: pcc4Circuits,
// //       },
// //     ],
// //   },


// //   ups: {
// //     id: "ups",
// //     title: "UPS",
// //     subtitle: "Uninterruptible Power Supply",
// //     layout: "parallel",
// //     category: "ups",

// //     equipment: [
// //       electrical(
// //         "ups-30-1",
// //         "30kVA-1",
// //         "30 kVA UPS",
// //         "ups"
// //       ),
// //       electrical(
// //         "ups-30-2",
// //         "30kVA-2",
// //         "30 kVA UPS",
// //         "ups"
// //       ),
// //       electrical(
// //         "ups-10-1",
// //         "10kVA-1",
// //         "10 kVA UPS",
// //         "ups"
// //       ),
// //       electrical(
// //         "ups-10-2",
// //         "10kVA-2",
// //         "10 kVA UPS",
// //         "ups"
// //       ),
// //     ],
// //   },


// //   "raising-main": {
// //     id: "raising-main",
// //     title: "Raising Main",
// //     subtitle: "Vertical Building Power Distribution",
// //     layout: "parallel",
// //     category: "electrical",

// //     equipment: Array.from(
// //       { length: 4 },
// //       (_, index) =>
// //         electrical(
// //           `rm-${index + 1}`,
// //           `Raising Main ${index + 1}`,
// //           index < 2
// //             ? "Wing A Vertical Distribution"
// //             : "Wing B Vertical Distribution",
// //           "raising-main"
// //         )
// //     ),
// //   },


// //   wing: {
// //     id: "wing",
// //     title: "Building Wings",
// //     subtitle: "Wing-Level Electrical Monitoring",
// //     layout: "parallel",
// //     category: "wing",

// //     equipment: [
// //       electrical(
// //         "wing-a",
// //         "Wing A",
// //         "20 Floors",
// //         "wing"
// //       ),
// //       electrical(
// //         "wing-b",
// //         "Wing B",
// //         "20 Floors",
// //         "wing"
// //       ),
// //     ],
// //   },


// //   dg: {
// //     id: "dg",
// //     title: "Diesel Generator Plant",
// //     subtitle: "Emergency / Standby Generation",
// //     layout: "parallel",
// //     category: "dg",

// //     equipment: Array.from(
// //       { length: 7 },
// //       (_, index) =>
// //         electrical(
// //           `dg-${index + 1}`,
// //           `DG-${index + 1}`,
// //           index < 4
// //             ? "1500 kVA GENSET"
// //             : "1250 kVA GENSET",
// //           "dg"
// //         )
// //     ),
// //   },


// //   hvac: {
// //     id: "hvac",
// //     title: "HVAC",
// //     subtitle: "HVAC Cooling Plant",
// //     layout: "grid",
// //     category: "electrical",

// //     equipment: [
// //       electrical(
// //         "hvac",
// //         "HVAC",
// //         "HVAC Cooling Plant",
// //         "hvac"
// //       ),
// //     ],
// //   },


// //   wtp: {
// //     id: "wtp",
// //     title: "Water Management",
// //     subtitle: "Water, STP, WTP & Tank Monitoring",
// //     layout: "water",
// //     category: "water",

// //     equipment: [
// //       {
// //         id: "water-management",
// //         name: "Water Management",
// //         label: "Central Water Monitoring",
// //         type: "water-main",
// //       },
// //       {
// //         id: "stp",
// //         name: "STP",
// //         label: "Sewage Treatment Plant",
// //         type: "stp",
// //       },
// //       {
// //         id: "wtp",
// //         name: "WTP",
// //         label: "Water Treatment Plant",
// //         type: "wtp",
// //       },
// //       ...Array.from(
// //         { length: 4 },
// //         (_, index) => ({
// //           id: `tank-${index + 1}`,
// //           name: `Tank Level-${index + 1}`,
// //           label: "Water Storage Tank",
// //           type: "tank",
// //         })
// //       ),
// //     ],
// //   },


// //   fire: {
// //     id: "fire",
// //     title: "Fire & Life Safety",
// //     subtitle: "Fire Alarm, Fire Fighting & Pump Monitoring",
// //     layout: "parallel",
// //     category: "fire",

// //     equipment: [
// //       {
// //         id: "fire-alarms",
// //         name: "Fire Alarms",
// //         label: "Detection & Alarm System",
// //         type: "fire-alarm",
// //       },
// //       {
// //         id: "fire-fighting",
// //         name: "Fire Fighting",
// //         label: "Hydrant & Sprinkler System",
// //         type: "fire-fighting",
// //       },
// //       {
// //         id: "fire-pump",
// //         name: "Fire Pump",
// //         label: "Fire Pump System",
// //         type: "fire-pump",
// //       },
// //     ],
// //   },
// // };


// // /* =========================================================
// //    TRANSFORMER DATA
// // ========================================================= */

// // const transformerValues = [
// //   [54, 61, 68],
// //   [52, 59, 62],
// //   [55, 60, 71],
// //   [53, 58, 65],
// //   [56, 63, 74],
// //   [51, 57, 60],
// // ];


// // /* =========================================================
// //    BASE TELEMETRY
// // ========================================================= */

// // const electricalTelemetry = (
// //   index = 0,
// //   voltage = 433
// // ) => ({
// //   status: "ON",
// //   health: "HEALTHY",
// //   communication: true,

// //   kWh: 1245 + index * 18,
// //   kVAh: 1180 + index * 15,

// //   voltage,
// //   current: 210 + index * 4,

// //   powerFactor:
// //     index % 2 === 0
// //       ? 0.98
// //       : 0.97,

// //   load: 62 + (index % 5) * 4,

// //   fault: false,
// //   trip: false,
// //   warning: false,
// // });


// // /* =========================================================
// //    DEMO TELEMETRY
// // ========================================================= */

// // export const demoTelemetry = {

// //   /* SOURCE — old BMS values */

// //   "source-inc1": {
// //     ...electricalTelemetry(0, 33),
// //     kWh: 1280,
// //     kVAh: 1195,
// //     current: 420,
// //     powerFactor: 0.98,
// //     load: 78,
// //     healthScore: 94,
// //     operatingStatus: "Stable",
// //   },

// //   "source-out": {
// //     ...electricalTelemetry(1, 33),
// //     kWh: 1560,
// //     kVAh: 1430,
// //     current: 460,
// //     powerFactor: 0.99,
// //     load: 86,
// //     healthScore: 96,
// //     operatingStatus: "Stable",
// //   },

// //   "source-inc2": {
// //     ...electricalTelemetry(2, 33),
// //     kWh: 1110,
// //     kVAh: 1020,
// //     current: 390,
// //     powerFactor: 0.97,
// //     load: 72,
// //     healthScore: 92,
// //     operatingStatus: "Stable",
// //   },

// //   "source-meter": {
// //     ...electricalTelemetry(3, 33),
// //     kWh: 1420,
// //     kVAh: 1300,
// //     current: 435,
// //     powerFactor: 0.98,
// //     load: 81,
// //     healthScore: 95,
// //     operatingStatus: "Stable",
// //   },


// //   /* FEEDER */

// //   "feeder-in-1": {
// //     ...electricalTelemetry(0, 33),
// //     current: 432,
// //   },

// //   ...Object.fromEntries(
// //     Array.from(
// //       { length: 6 },
// //       (_, index) => [
// //         `feeder-og-${index + 1}`,
// //         {
// //           ...electricalTelemetry(
// //             index + 1,
// //             33
// //           ),
// //           current:
// //             390 - index * 13,
// //         },
// //       ]
// //     )
// //   ),


// //   /* TRANSFORMERS */

// //   ...Object.fromEntries(
// //     transformerValues.map(
// //       (
// //         [
// //           oilTemp,
// //           windingTemp,
// //           load,
// //         ],
// //         index
// //       ) => [
// //         `transformer-${index + 1}`,
// //         {
// //           status: "ON",
// //           health: "HEALTHY",
// //           communication: true,

// //           oilTemp,
// //           windingTemp,

// //           buchholz: "Healthy",
// //           load,

// //           fault: false,
// //           trip: false,
// //           warning: false,
// //         },
// //       ]
// //     )
// //   ),


// //   /* LT KIOSK */

// //   ...Object.fromEntries(
// //     Array.from(
// //       { length: 6 },
// //       (_, index) => [
// //         `kiosk-${index + 1}`,
// //         electricalTelemetry(
// //           index,
// //           433
// //         ),
// //       ]
// //     )
// //   ),


// //   /* BUSDUCT */

// //   ...Object.fromEntries(
// //     Array.from(
// //       { length: 6 },
// //       (_, index) => [
// //         `bus-${index + 1}`,
// //         {
// //           status: "ON",
// //           health: "HEALTHY",
// //           communication: true,

// //           temperature:
// //             38 + index,

// //           vibration:
// //             Number(
// //               (
// //                 1.2 +
// //                 index * 0.1
// //               ).toFixed(1)
// //             ),

// //           voltage: 433,
// //           load:
// //             61 + index * 2,

// //           fault: false,
// //           trip: false,
// //           warning: false,
// //         },
// //       ]
// //     )
// //   ),


// //   /* UPS */

// //   "ups-30-1": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     capacity: "30 kVA",
// //     inputVoltage: 433,
// //     outputVoltage: 230,
// //     load: 62,
// //     battery: 96,
// //     inputFrequency: 50,
// //     outputFrequency: 50,
// //     batteryVoltage: 216,
// //     backupTime: "42 min",
// //     mode: "ONLINE",

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "ups-30-2": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     capacity: "30 kVA",
// //     inputVoltage: 433,
// //     outputVoltage: 230,
// //     load: 58,
// //     battery: 94,
// //     inputFrequency: 50,
// //     outputFrequency: 50,
// //     batteryVoltage: 215,
// //     backupTime: "45 min",
// //     mode: "ONLINE",

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "ups-10-1": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     capacity: "10 kVA",
// //     inputVoltage: 433,
// //     outputVoltage: 230,
// //     load: 48,
// //     battery: 97,
// //     inputFrequency: 50,
// //     outputFrequency: 50,
// //     batteryVoltage: 216,
// //     backupTime: "56 min",
// //     mode: "ONLINE",

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "ups-10-2": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     capacity: "10 kVA",
// //     inputVoltage: 433,
// //     outputVoltage: 230,
// //     load: 45,
// //     battery: 95,
// //     inputFrequency: 50,
// //     outputFrequency: 50,
// //     batteryVoltage: 215,
// //     backupTime: "59 min",
// //     mode: "ONLINE",

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },


// //   /* RAISING MAIN */

// //   ...Object.fromEntries(
// //     Array.from(
// //       { length: 4 },
// //       (_, index) => [
// //         `rm-${index + 1}`,
// //         electricalTelemetry(
// //           index,
// //           433
// //         ),
// //       ]
// //     )
// //   ),


// //   /* WING */

// //   "wing-a": {
// //     ...electricalTelemetry(
// //       0,
// //       433
// //     ),
// //     demand: 1240,
// //     activeAlarms: 0,
// //   },

// //   "wing-b": {
// //     ...electricalTelemetry(
// //       1,
// //       433
// //     ),
// //     demand: 1180,
// //     activeAlarms: 0,
// //   },


// //   /* DG */

// //   ...Object.fromEntries(
// //     Array.from(
// //       { length: 7 },
// //       (_, index) => [
// //         `dg-${index + 1}`,
// //         {
// //           ...electricalTelemetry(
// //             index,
// //             433
// //           ),

// //           status:
// //             index === 0
// //               ? "ON"
// //               : "STANDBY",

// //           health: "READY",

// //           capacity:
// //             index < 4
// //               ? "1500 kVA"
// //               : "1250 kVA",
// //         },
// //       ]
// //     )
// //   ),


// //   /* HVAC */

// //   hvac: {
// //     ...electricalTelemetry(
// //       0,
// //       433
// //     ),
// //   },


// //   /* WATER */

// //   "water-management": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     flowRate: 148,
// //     totalWater: 72,
// //     pressure: 3.2,

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   stp: {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     inletFlow: 82,
// //     outletFlow: 76,
// //     ph: 7.2,
// //     turbidity: 2.4,

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   wtp: {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     inletFlow: 96,
// //     outletFlow: 91,
// //     ph: 7.1,
// //     turbidity: 1.8,

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "tank-1": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,
// //     level: 78,
// //     volume: 42,
// //     inletFlow: 18,
// //     outletFlow: 14,
// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "tank-2": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,
// //     level: 66,
// //     volume: 36,
// //     inletFlow: 15,
// //     outletFlow: 12,
// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "tank-3": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,
// //     level: 83,
// //     volume: 45,
// //     inletFlow: 19,
// //     outletFlow: 16,
// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "tank-4": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,
// //     level: 59,
// //     volume: 31,
// //     inletFlow: 14,
// //     outletFlow: 11,
// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },


// //   /* FIRE */

// //   "fire-alarms": {
// //     status: "ON",
// //     health: "NORMAL",
// //     communication: true,

// //     smokeDetectors: 128,
// //     heatDetectors: 64,
// //     alarmZones: 12,
// //     activeAlarms: 0,

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "fire-fighting": {
// //     status: "ON",
// //     health: "NORMAL",
// //     communication: true,

// //     pressure: 7.2,
// //     hydrantNetwork: "NORMAL",
// //     sprinklerNetwork: "NORMAL",
// //     mainValve: "OPEN",

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "fire-pump": {
// //     status: "STANDBY",
// //     health: "READY",
// //     communication: true,

// //     voltage: 415,
// //     pressure: 7.4,
// //     mode: "AUTO",
// //     pumpState: "STANDBY",

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },
// // };


// // /* =========================================================
// //    PCC TELEMETRY
// // ========================================================= */

// // [
// //   ...pcc1Circuits,
// //   ...pcc2Circuits,
// //   ...pcc3Circuits,
// //   ...pcc4Circuits,
// // ].forEach(
// //   (circuit, index) => {
// //     demoTelemetry[circuit.id] = {
// //       ...electricalTelemetry(
// //         index,
// //         433
// //       ),

// //       breakerState:
// //         circuit.direction ===
// //         "coupler"
// //           ? "OPEN"
// //           : "CLOSED",

// //       direction:
// //         circuit.direction,

// //       section:
// //         circuit.section,
// //     };
// //   }
// // );


// // /* =========================================================
// //    FLATTEN ALL EQUIPMENT
// // ========================================================= */

// // export function getTopologyEquipment(
// //   topology
// // ) {
// //   if (!topology) {
// //     return [];
// //   }

// //   if (topology.layout === "pcc") {
// //     return topology.panels.flatMap(
// //       (panel) =>
// //         panel.circuits
// //     );
// //   }

// //   return [
// //     ...(topology.incoming
// //       ? [topology.incoming]
// //       : []),

// //     ...(topology.equipment || []),
// //   ];
// // }
















// // import {
// //   RadioTower,
// //   GitBranch,
// //   Zap,
// //   Network,
// //   Cpu,
// //   Bolt,
// //   Building2,
// //   CirclePower,
// //   Fan,
// //   Droplets,
// //   Flame,
// //   BatteryCharging,
// //   PanelsTopLeft,
// // } from "lucide-react";


// // /* =========================================================
// //    OVERVIEW
// // ========================================================= */

// // export const flowCategories = [
// //   {
// //     id: "source",
// //     name: "Source",
// //     shortName: "33 kV Source",
// //     icon: RadioTower,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "33 kV",
// //     color: "source",
// //   },
// //   {
// //     id: "feeder",
// //     name: "Feeder",
// //     shortName: "33 kV Feeder",
// //     icon: GitBranch,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "1 IN / 6 OUT",
// //     color: "feeder",
// //   },
// //   {
// //     id: "transformer",
// //     name: "Transformer",
// //     shortName: "33/0.433 kV",
// //     icon: Zap,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "6 Units",
// //     color: "transformer",
// //   },
// //   {
// //     id: "lt-kiosk",
// //     name: "LT Kiosk",
// //     shortName: "LT Distribution",
// //     icon: PanelsTopLeft,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "6 Units",
// //     color: "lt-kiosk",
// //   },
// //   {
// //     id: "busduct",
// //     name: "Busduct",
// //     shortName: "LT Busduct / Busbar",
// //     icon: Network,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "6 Busbars",
// //     color: "busduct",
// //   },
// //   {
// //     id: "pcc",
// //     name: "PCC",
// //     shortName: "Power Control Centre",
// //     icon: Cpu,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "4 Panels",
// //     color: "pcc",
// //   },
// //   {
// //     id: "raising-main",
// //     name: "Raising Main",
// //     shortName: "Vertical Distribution",
// //     icon: Bolt,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "4 Mains",
// //     color: "raising-main",
// //   },
// //   {
// //     id: "wing",
// //     name: "Wing",
// //     shortName: "Building Distribution",
// //     icon: Building2,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "2 Wings",
// //     color: "wing",
// //   },
// //   {
// //     id: "dg",
// //     name: "DG",
// //     shortName: "Diesel Generator Plant",
// //     icon: CirclePower,
// //     status: "STANDBY",
// //     health: "READY",
// //     value: "7 DGs",
// //     color: "dg",
// //   },
// //   {
// //     id: "hvac",
// //     name: "HVAC",
// //     shortName: "HVAC Cooling Plant",
// //     icon: Fan,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "Running",
// //     color: "hvac",
// //   },
// //   {
// //     id: "wtp",
// //     name: "Water Management",
// //     shortName: "STP / WTP / Tanks",
// //     icon: Droplets,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "Normal",
// //     color: "wtp",
// //   },
// //   {
// //     id: "fire",
// //     name: "Fire",
// //     shortName: "Fire & Life Safety",
// //     icon: Flame,
// //     status: "ONLINE",
// //     health: "NORMAL",
// //     value: "Normal",
// //     color: "fire",
// //   },
// // ];


// // /* =========================================================
// //    HELPERS
// // ========================================================= */

// // const electrical = (
// //   id,
// //   name,
// //   label,
// //   type = "electrical",
// //   overrides = {}
// // ) => ({
// //   id,
// //   name,
// //   label,
// //   type,
// //   ...overrides,
// // });


// // const makePccCircuit = (
// //   panel,
// //   id,
// //   name,
// //   direction,
// //   section = null
// // ) => ({
// //   id: `${panel}-${id}`,
// //   name,
// //   label:
// //     direction === "incoming"
// //       ? "Incoming Circuit"
// //       : direction === "coupler"
// //       ? "Bus Coupler"
// //       : "Outgoing Circuit",
// //   type:
// //     direction === "coupler"
// //       ? "coupler"
// //       : "pcc-circuit",
// //   direction,
// //   section,
// // });


// // /* =========================================================
// //    PCC CIRCUITS
// // ========================================================= */

// // const pcc1Circuits = [
// //   makePccCircuit("pcc1", "lt6-in", "LT6 IN", "incoming", "A"),
// //   makePccCircuit("pcc1", "dg1234-in-a", "DG1-4 IN", "incoming", "A"),

// //   makePccCircuit("pcc1", "og1", "OG1", "outgoing", "A"),
// //   makePccCircuit("pcc1", "rm1-a", "RM1", "outgoing", "A"),
// //   makePccCircuit("pcc1", "rm2-a", "RM2", "outgoing", "A"),
// //   makePccCircuit("pcc1", "utility1", "Utility 1", "outgoing", "A"),
// //   makePccCircuit("pcc1", "spare1", "Spare 1", "outgoing", "A"),

// //   makePccCircuit("pcc1", "bus-coupler", "Bus Coupler", "coupler"),

// //   makePccCircuit("pcc1", "lt5-in", "LT5 IN", "incoming", "B"),
// //   makePccCircuit("pcc1", "dg1234-in-b", "DG1-4 IN", "incoming", "B"),

// //   makePccCircuit("pcc1", "rm1-b", "RM1", "outgoing", "B"),
// //   makePccCircuit("pcc1", "rm2-b", "RM2", "outgoing", "B"),
// //   makePccCircuit("pcc1", "utility2", "Utility 2", "outgoing", "B"),
// //   makePccCircuit("pcc1", "spare2", "Spare 2", "outgoing", "B"),
// // ];


// // const pcc2Circuits = [
// //   makePccCircuit("pcc2", "lt1-in", "LT1 IN", "incoming", "A"),
// //   makePccCircuit("pcc2", "dg1234-in-a", "DG1-4 IN", "incoming", "A"),

// //   makePccCircuit("pcc2", "og1", "OG1", "outgoing", "A"),
// //   makePccCircuit("pcc2", "rm1-a", "RM1", "outgoing", "A"),
// //   makePccCircuit("pcc2", "rm2-a", "RM2", "outgoing", "A"),
// //   makePccCircuit("pcc2", "utility1", "Utility 1", "outgoing", "A"),
// //   makePccCircuit("pcc2", "spare1", "Spare 1", "outgoing", "A"),

// //   makePccCircuit("pcc2", "bus-coupler", "Bus Coupler", "coupler"),

// //   makePccCircuit("pcc2", "lt2-in", "LT2 IN", "incoming", "B"),
// //   makePccCircuit("pcc2", "dg1234-in-b", "DG1-4 IN", "incoming", "B"),

// //   makePccCircuit("pcc2", "rm1-b", "RM1", "outgoing", "B"),
// //   makePccCircuit("pcc2", "rm2-b", "RM2", "outgoing", "B"),
// //   makePccCircuit("pcc2", "utility2", "Utility 2", "outgoing", "B"),
// //   makePccCircuit("pcc2", "spare2", "Spare 2", "outgoing", "B"),
// // ];


// // const pcc3Circuits = [
// //   makePccCircuit("pcc3", "lt4-in", "LT4 IN", "incoming"),
// //   makePccCircuit("pcc3", "dg567-in", "DG5-7 IN", "incoming"),

// //   ...Array.from(
// //     { length: 10 },
// //     (_, index) =>
// //       makePccCircuit(
// //         "pcc3",
// //         `og-${index + 1}`,
// //         `OG ${index + 1}`,
// //         "outgoing"
// //       )
// //   ),
// // ];


// // const pcc4Circuits = [
// //   makePccCircuit("pcc4", "lt3-in", "LT3 IN", "incoming"),
// //   makePccCircuit("pcc4", "dg567-in", "DG5-7 IN", "incoming"),

// //   ...Array.from(
// //     { length: 10 },
// //     (_, index) =>
// //       makePccCircuit(
// //         "pcc4",
// //         `og-${index + 1}`,
// //         `OG ${index + 1}`,
// //         "outgoing"
// //       )
// //   ),
// // ];


// // /* =========================================================
// //    TOPOLOGY
// // ========================================================= */

// // export const flowTopology = {

// //   source: {
// //     id: "source",
// //     title: "33 kV Source",
// //     subtitle: "Incoming HT Source & Metering",
// //     layout: "grid",
// //     category: "electrical",

// //     equipment: [
// //       electrical(
// //         "source-inc1",
// //         "INC1",
// //         "Primary Incoming Feeder",
// //         "incomer"
// //       ),
// //       electrical(
// //         "source-out",
// //         "OUT",
// //         "Outgoing Busbar",
// //         "busbar"
// //       ),
// //       electrical(
// //         "source-inc2",
// //         "INC2",
// //         "Secondary Incoming Feeder",
// //         "incomer"
// //       ),
// //       electrical(
// //         "source-meter",
// //         "Metering Unit",
// //         "33 kV Energy Monitoring Meter",
// //         "meter"
// //       ),
// //     ],
// //   },


// //   feeder: {
// //     id: "feeder",
// //     title: "33 kV Feeder Panel",
// //     subtitle: "1 Incoming / 6 Outgoing Feeders",
// //     layout: "feeder",
// //     category: "electrical",

// //     incoming: electrical(
// //       "feeder-in-1",
// //       "Incoming Feeder 1",
// //       "33 kV Feeder Incoming",
// //       "incomer"
// //     ),

// //     equipment: Array.from(
// //       { length: 6 },
// //       (_, index) =>
// //         electrical(
// //           `feeder-og-${index + 1}`,
// //           `OG-${index + 1}`,
// //           `Outgoing Feeder → TR-${index + 1}`,
// //           "feeder"
// //         )
// //     ),
// //   },


// //   transformer: {
// //     id: "transformer",
// //     title: "Transformers",
// //     subtitle: "33 kV / 433 V Step-Down Transformers",
// //     layout: "parallel",
// //     category: "transformer",

// //     equipment: Array.from(
// //       { length: 6 },
// //       (_, index) =>
// //         electrical(
// //           `transformer-${index + 1}`,
// //           `TR-${index + 1}`,
// //           "33 kV / 433 V Transformer",
// //           "transformer"
// //         )
// //     ),
// //   },


// //   "lt-kiosk": {
// //     id: "lt-kiosk",
// //     title: "LT Kiosk",
// //     subtitle: "433 V LT Distribution Panels",
// //     layout: "parallel",
// //     category: "electrical",

// //     equipment: Array.from(
// //       { length: 6 },
// //       (_, index) =>
// //         electrical(
// //           `kiosk-${index + 1}`,
// //           `KIOSK-${index + 1}`,
// //           "433 V LT Kiosk",
// //           "kiosk"
// //         )
// //     ),
// //   },


// //   busduct: {
// //     id: "busduct",
// //     title: "LT Busduct / Busbar",
// //     subtitle: "Busbar Condition Monitoring",
// //     layout: "parallel",
// //     category: "busduct",

// //     equipment: Array.from(
// //       { length: 6 },
// //       (_, index) =>
// //         electrical(
// //           `bus-${index + 1}`,
// //           `BUS-${index + 1}`,
// //           "LT Busduct / Busbar",
// //           "busduct"
// //         )
// //     ),
// //   },


// //   pcc: {
// //     id: "pcc",
// //     title: "Power Control Centre",
// //     subtitle: "PCC 1–4 Incomings, Outgoings & Bus Couplers",
// //     layout: "pcc",
// //     category: "pcc",

// //     panels: [
// //       {
// //         id: "pcc-1",
// //         name: "PCC 1",
// //         label: "Wing A",
// //         circuits: pcc1Circuits,
// //       },
// //       {
// //         id: "pcc-2",
// //         name: "PCC 2",
// //         label: "Wing B",
// //         circuits: pcc2Circuits,
// //       },
// //       {
// //         id: "pcc-3",
// //         name: "PCC 3",
// //         label: "Chillers",
// //         circuits: pcc3Circuits,
// //       },
// //       {
// //         id: "pcc-4",
// //         name: "PCC 4",
// //         label: "Chillers",
// //         circuits: pcc4Circuits,
// //       },
// //     ],
// //   },


// //   ups: {
// //     id: "ups",
// //     title: "UPS",
// //     subtitle: "Uninterruptible Power Supply",
// //     layout: "parallel",
// //     category: "ups",

// //     equipment: [
// //       electrical(
// //         "ups-30-1",
// //         "30kVA-1",
// //         "30 kVA UPS",
// //         "ups"
// //       ),
// //       electrical(
// //         "ups-30-2",
// //         "30kVA-2",
// //         "30 kVA UPS",
// //         "ups"
// //       ),
// //       electrical(
// //         "ups-10-1",
// //         "10kVA-1",
// //         "10 kVA UPS",
// //         "ups"
// //       ),
// //       electrical(
// //         "ups-10-2",
// //         "10kVA-2",
// //         "10 kVA UPS",
// //         "ups"
// //       ),
// //     ],
// //   },


// //   "raising-main": {
// //     id: "raising-main",
// //     title: "Raising Main",
// //     subtitle: "Vertical Building Power Distribution",
// //     layout: "parallel",
// //     category: "electrical",

// //     equipment: Array.from(
// //       { length: 4 },
// //       (_, index) =>
// //         electrical(
// //           `rm-${index + 1}`,
// //           `Raising Main ${index + 1}`,
// //           index < 2
// //             ? "Wing A Vertical Distribution"
// //             : "Wing B Vertical Distribution",
// //           "raising-main"
// //         )
// //     ),
// //   },


// //   wing: {
// //     id: "wing",
// //     title: "Building Wings",
// //     subtitle: "Wing-Level Electrical Monitoring",
// //     layout: "parallel",
// //     category: "wing",

// //     equipment: [
// //       electrical(
// //         "wing-a",
// //         "Wing A",
// //         "20 Floors",
// //         "wing"
// //       ),
// //       electrical(
// //         "wing-b",
// //         "Wing B",
// //         "20 Floors",
// //         "wing"
// //       ),
// //     ],
// //   },


// //   dg: {
// //     id: "dg",
// //     title: "Diesel Generator Plant",
// //     subtitle: "Emergency / Standby Generation",
// //     layout: "parallel",
// //     category: "dg",

// //     equipment: Array.from(
// //       { length: 7 },
// //       (_, index) =>
// //         electrical(
// //           `dg-${index + 1}`,
// //           `DG-${index + 1}`,
// //           index < 4
// //             ? "1500 kVA GENSET"
// //             : "1250 kVA GENSET",
// //           "dg"
// //         )
// //     ),
// //   },


// //   hvac: {
// //     id: "hvac",
// //     title: "HVAC",
// //     subtitle: "HVAC Cooling Plant",
// //     layout: "empty",
// //     category: "electrical",
// //     equipment: [],
// //   },


// //   wtp: {
// //     id: "wtp",
// //     title: "Water Management",
// //     subtitle: "Water, STP, WTP & Tank Monitoring",
// //     layout: "water",
// //     category: "water",

// //     equipment: [
// //       {
// //         id: "water-management",
// //         name: "Water Management",
// //         label: "Central Water Monitoring",
// //         type: "water-main",
// //       },
// //       {
// //         id: "stp",
// //         name: "STP",
// //         label: "Sewage Treatment Plant",
// //         type: "stp",
// //       },
// //       {
// //         id: "wtp",
// //         name: "WTP",
// //         label: "Water Treatment Plant",
// //         type: "wtp",
// //       },
// //       ...Array.from(
// //         { length: 4 },
// //         (_, index) => ({
// //           id: `tank-${index + 1}`,
// //           name: `Tank Level-${index + 1}`,
// //           label: "Water Storage Tank",
// //           type: "tank",
// //         })
// //       ),
// //     ],
// //   },


// //   fire: {
// //     id: "fire",
// //     title: "Fire & Life Safety",
// //     subtitle: "Fire Alarm, Fire Fighting & Pump Monitoring",
// //     layout: "parallel",
// //     category: "fire",

// //     equipment: [
// //       {
// //         id: "fire-alarms",
// //         name: "Fire Alarms",
// //         label: "Detection & Alarm System",
// //         type: "fire-alarm",
// //       },
// //       {
// //         id: "fire-fighting",
// //         name: "Fire Fighting",
// //         label: "Hydrant & Sprinkler System",
// //         type: "fire-fighting",
// //       },
// //       {
// //         id: "fire-pump",
// //         name: "Fire Pump",
// //         label: "Fire Pump System",
// //         type: "fire-pump",
// //       },
// //     ],
// //   },
// // };



// // const transformerValues = [
// //   [54, 61, 68],
// //   [52, 59, 62],
// //   [55, 60, 71],
// //   [53, 58, 65],
// //   [56, 63, 74],
// //   [51, 57, 60],
// // ];

// // const transformerTelemetry = (
// //   index
// // ) => {
// //   const [
// //     oilTemp,
// //     windingTemp,
// //     load,
// //   ] =
// //     transformerValues[
// //       index %
// //         transformerValues.length
// //     ];

// //   return {
// //     ...electricalTelemetry(
// //       index,
// //       433
// //     ),

// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     kWh:
// //       1840 + index * 37,

// //     kVAh:
// //       1710 + index * 35,

// //     voltage: 433,

// //     current:
// //       245 + (index % 10) * 7,

// //     powerFactor:
// //       index % 3 === 0
// //         ? 0.96
// //         : index % 3 === 1
// //         ? 0.97
// //         : 0.98,

// //     oilTemp:
// //       oilTemp + Math.floor(index / 6),

// //     windingTemp:
// //       windingTemp + Math.floor(index / 6),

// //     buchholz: "Healthy",
// //     buchholzRelay: "Healthy",
// //     relay: "Healthy",

// //     load,

// //     protectionStatus:
// //       "Normal",

// //     operatingStatus:
// //       "Running",

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   };
// // };



// // const electricalTelemetry = (
// //   index = 0,
// //   voltage = 433
// // ) => ({
// //   status: "ON",
// //   health: "HEALTHY",
// //   communication: true,

// //   kWh: 1245 + index * 18,
// //   kVAh: 1180 + index * 15,

// //   voltage,
// //   current: 210 + index * 4,

// //   powerFactor:
// //     index % 2 === 0
// //       ? 0.98
// //       : 0.97,

// //   load: 62 + (index % 5) * 4,

// //   fault: false,
// //   trip: false,
// //   warning: false,
// // });

// // export const demoTelemetry = {

// //   /* SOURCE — old BMS values */

// //   "source-inc1": {
// //     ...electricalTelemetry(0, 33),
// //     kWh: 1280,
// //     kVAh: 1195,
// //     current: 420,
// //     powerFactor: 0.98,
// //     load: 78,
// //     healthScore: 94,
// //     operatingStatus: "Stable",
// //   },

// //   "source-out": {
// //     ...electricalTelemetry(1, 33),
// //     kWh: 1560,
// //     kVAh: 1430,
// //     current: 460,
// //     powerFactor: 0.99,
// //     load: 86,
// //     healthScore: 96,
// //     operatingStatus: "Stable",
// //   },

// //   "source-inc2": {
// //     ...electricalTelemetry(2, 33),
// //     kWh: 1110,
// //     kVAh: 1020,
// //     current: 390,
// //     powerFactor: 0.97,
// //     load: 72,
// //     healthScore: 92,
// //     operatingStatus: "Stable",
// //   },

// //   "source-meter": {
// //     ...electricalTelemetry(3, 33),
// //     kWh: 1420,
// //     kVAh: 1300,
// //     current: 435,
// //     powerFactor: 0.98,
// //     load: 81,
// //     healthScore: 95,
// //     operatingStatus: "Stable",
// //   },

// //   ...Object.fromEntries(
// //     Array.from(
// //       {
// //         length: 20,
// //       },
// //       (_, index) => [
// //         `source-inc${index + 1}`,
// //         {
// //           ...electricalTelemetry(
// //             index,
// //             33
// //           ),
// //           load:
// //             64 +
// //             (index * 5) % 28,
// //           healthScore:
// //             90 +
// //             (index % 8),
// //           operatingStatus:
// //             "Stable",
// //         },
// //       ]
// //     )
// //   ),

// //   ...Object.fromEntries(
// //     Array.from(
// //       {
// //         length: 30,
// //       },
// //       (_, index) => [
// //         index === 0
// //           ? "source-out"
// //           : `source-out-${index + 1}`,
// //         {
// //           ...electricalTelemetry(
// //             index + 20,
// //             33
// //           ),
// //           load:
// //             58 +
// //             (index * 4) % 34,
// //           healthScore:
// //             89 +
// //             (index % 9),
// //           operatingStatus:
// //             "Stable",
// //         },
// //       ]
// //     )
// //   ),

// //   ...Object.fromEntries(
// //     Array.from(
// //       {
// //         length: 20,
// //       },
// //       (_, index) => [
// //         index === 0
// //           ? "source-meter"
// //           : `source-meter-${index + 1}`,
// //         {
// //           ...electricalTelemetry(
// //             index + 50,
// //             33
// //           ),
// //           healthScore:
// //             92 +
// //             (index % 6),
// //           operatingStatus:
// //             "Stable",
// //         },
// //       ]
// //     )
// //   ),


// //   /* FEEDER */

// // /* =====================================================
// //    FEEDER DEMO TELEMETRY

// //    Generate enough demo telemetry for the maximum
// //    Super Admin feeder configuration.

// //    Project topology still decides how many feeders
// //    are actually displayed.
// // ===================================================== */


// // /* INCOMING FEEDERS */

// // ...Object.fromEntries(
// //   Array.from(
// //     { length: 20 },
// //     (_, index) => [
// //       `feeder-in-${index + 1}`,

// //       {
// //         ...electricalTelemetry(
// //           index,
// //           33
// //         ),

// //         current:
// //           Math.max(
// //             260,
// //             432 - index * 6
// //           ),

// //         direction:
// //           "incoming",

// //         feederNumber:
// //           index + 1,

// //         operatingStatus:
// //           "Stable",
// //       },
// //     ]
// //   )
// // ),


// // /* OUTGOING FEEDERS */

// // ...Object.fromEntries(
// //   Array.from(
// //     { length: 30 },
// //     (_, index) => [
// //       `feeder-og-${index + 1}`,

// //       {
// //         ...electricalTelemetry(
// //           index + 1,
// //           33
// //         ),

// //         current:
// //           Math.max(
// //             120,
// //             390 - index * 9
// //           ),

// //         direction:
// //           "outgoing",

// //         feederNumber:
// //           index + 1,

// //         operatingStatus:
// //           "Stable",
// //       },
// //     ]
// //   )
// // ),

// //   ...Object.fromEntries(
// //     Array.from(
// //       { length: 6 },
// //       (_, index) => [
// //         `feeder-og-${index + 1}`,
// //         {
// //           ...electricalTelemetry(
// //             index + 1,
// //             33
// //           ),
// //           current:
// //             390 - index * 13,
// //         },
// //       ]
// //     )
// //   ),


// //   /* TRANSFORMERS */

// //   ...Object.fromEntries(
// //     Array.from(
// //       {
// //         length: 30,
// //       },
// //       (_, index) => [
// //         `transformer-${index + 1}`,
// //         transformerTelemetry(index),
// //       ]
// //     )
// //   ),


// //   /* LT KIOSK */

// //   ...Object.fromEntries(
// //     Array.from(
// //       { length: 30 },
// //       (_, index) => [
// //         `kiosk-${index + 1}`,
// //         {
// //           ...electricalTelemetry(
// //             index,
// //             433
// //           ),

// //           operatingStatus:
// //             "Stable",
// //         },
// //       ]
// //     )
// //   ),


// //   /* BUSDUCT */

// //   ...Object.fromEntries(
// //     Array.from(
// //       { length: 30 },
// //       (_, index) => [
// //         `bus-${index + 1}`,
// //         {
// //           status: "ON",
// //           health: "HEALTHY",
// //           communication: true,

// //           temperature:
// //             38 + index,

// //           vibration:
// //             Number(
// //               (
// //                 1.2 +
// //                 index * 0.1
// //               ).toFixed(1)
// //             ),

// //           voltage: 433,
// //           load:
// //             61 + index * 2,

// //           fault: false,
// //           trip: false,
// //           warning: false,
// //         },
// //       ]
// //     )
// //   ),


// //   /* PCC PANELS */

// //   ...Object.fromEntries(
// //     Array.from(
// //       { length: 20 },
// //       (_, index) => [
// //         `pcc-${index + 1}`,
// //         {
// //           ...electricalTelemetry(
// //             index,
// //             433
// //           ),

// //           panelNumber:
// //             index + 1,

// //           operatingStatus:
// //             "Running",
// //         },
// //       ]
// //     )
// //   ),


// //   /* UPS */

// //   "ups-30-1": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     capacity: "30 kVA",
// //     inputVoltage: 433,
// //     outputVoltage: 230,
// //     load: 62,
// //     battery: 96,
// //     inputFrequency: 50,
// //     outputFrequency: 50,
// //     batteryVoltage: 216,
// //     backupTime: "42 min",
// //     mode: "ONLINE",

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "ups-30-2": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     capacity: "30 kVA",
// //     inputVoltage: 433,
// //     outputVoltage: 230,
// //     load: 58,
// //     battery: 94,
// //     inputFrequency: 50,
// //     outputFrequency: 50,
// //     batteryVoltage: 215,
// //     backupTime: "45 min",
// //     mode: "ONLINE",

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "ups-10-1": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     capacity: "10 kVA",
// //     inputVoltage: 433,
// //     outputVoltage: 230,
// //     load: 48,
// //     battery: 97,
// //     inputFrequency: 50,
// //     outputFrequency: 50,
// //     batteryVoltage: 216,
// //     backupTime: "56 min",
// //     mode: "ONLINE",

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "ups-10-2": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     capacity: "10 kVA",
// //     inputVoltage: 433,
// //     outputVoltage: 230,
// //     load: 45,
// //     battery: 95,
// //     inputFrequency: 50,
// //     outputFrequency: 50,
// //     batteryVoltage: 215,
// //     backupTime: "59 min",
// //     mode: "ONLINE",

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },


// //   /* RAISING MAIN */

// //   ...Object.fromEntries(
// //     Array.from(
// //       { length: 20 },
// //       (_, index) => [
// //         `rm-${index + 1}`,
// //         electricalTelemetry(
// //           index,
// //           433
// //         ),
// //       ]
// //     )
// //   ),


// //   /* WING */

// //   ...Object.fromEntries(
// //     Array.from(
// //       { length: 10 },
// //       (_, index) => {
// //         const letter =
// //           String.fromCharCode(
// //             65 + index
// //           ).toLowerCase();

// //         return [
// //           `wing-${letter}`,
// //           {
// //             ...electricalTelemetry(
// //               index,
// //               433
// //             ),
// //             demand:
// //               Math.max(
// //                 720,
// //                 1240 - index * 60
// //               ),
// //             activeAlarms: 0,
// //           },
// //         ];
// //       }
// //     )
// //   ),


// //   /* DG */

// //   ...Object.fromEntries(
// //     Array.from(
// //       { length: 20 },
// //       (_, index) => [
// //         `dg-${index + 1}`,
// //         {
// //           ...electricalTelemetry(
// //             index,
// //             433
// //           ),

// //           status:
// //             index === 0
// //               ? "ON"
// //               : "STANDBY",

// //           health: "READY",

// //           capacity:
// //             index < 4
// //               ? "1500 kVA"
// //               : "1250 kVA",
// //         },
// //       ]
// //     )
// //   ),


// //   /* HVAC */

// //   hvac: {
// //     ...electricalTelemetry(
// //       0,
// //       433
// //     ),
// //   },

// //   ...Object.fromEntries(
// //     Array.from(
// //       {
// //         length: 30,
// //       },
// //       (_, index) => [
// //         `hvac-${index + 1}`,
// //         {
// //           ...electricalTelemetry(
// //             90 + index * 4,
// //             415
// //           ),
// //           status:
// //             index % 9 === 0
// //               ? "STANDBY"
// //               : "ON",
// //           health:
// //             index % 11 === 0
// //               ? "CHECK"
// //               : "HEALTHY",
// //         },
// //       ]
// //     )
// //   ),


// //   /* WATER */

// //   "water-management": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     flowRate: 148,
// //     totalWater: 72,
// //     pressure: 3.2,

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   stp: {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     inletFlow: 82,
// //     outletFlow: 76,
// //     ph: 7.2,
// //     turbidity: 2.4,

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   wtp: {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     inletFlow: 96,
// //     outletFlow: 91,
// //     ph: 7.1,
// //     turbidity: 1.8,

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "tank-1": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,
// //     level: 78,
// //     volume: 42,
// //     inletFlow: 18,
// //     outletFlow: 14,
// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "tank-2": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,
// //     level: 66,
// //     volume: 36,
// //     inletFlow: 15,
// //     outletFlow: 12,
// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "tank-3": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,
// //     level: 83,
// //     volume: 45,
// //     inletFlow: 19,
// //     outletFlow: 16,
// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "tank-4": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,
// //     level: 59,
// //     volume: 31,
// //     inletFlow: 14,
// //     outletFlow: 11,
// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   ...Object.fromEntries(
// //     Array.from(
// //       {
// //         length: 20,
// //       },
// //       (_, index) => {
// //         const tankNumber =
// //           index + 1;

// //         return [
// //           `tank-${tankNumber}`,
// //           {
// //             status: "ON",
// //             health: "HEALTHY",
// //             communication: true,
// //             level:
// //               54 +
// //               (index * 7) % 35,
// //             volume:
// //               28 +
// //               (index * 5) % 24,
// //             inletFlow:
// //               12 +
// //               (index * 3) % 10,
// //             outletFlow:
// //               10 +
// //               (index * 2) % 9,
// //             fault: false,
// //             trip: false,
// //             warning: false,
// //           },
// //         ];
// //       }
// //     )
// //   ),



// //   "fire-alarms": {
// //     status: "ON",
// //     health: "NORMAL",
// //     communication: true,

// //     smokeDetectors: 128,
// //     heatDetectors: 64,
// //     alarmZones: 12,
// //     activeAlarms: 0,

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "fire-fighting": {
// //     status: "ON",
// //     health: "NORMAL",
// //     communication: true,

// //     pressure: 7.2,
// //     hydrantNetwork: "NORMAL",
// //     sprinklerNetwork: "NORMAL",
// //     mainValve: "OPEN",

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "fire-pump": {
// //     status: "STANDBY",
// //     health: "READY",
// //     communication: true,

// //     voltage: 415,
// //     pressure: 7.4,
// //     mode: "AUTO",
// //     pumpState: "STANDBY",

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },
// // };



// // [
// //   ...pcc1Circuits,
// //   ...pcc2Circuits,
// //   ...pcc3Circuits,
// //   ...pcc4Circuits,
// // ].forEach(
// //   (circuit, index) => {
// //     demoTelemetry[circuit.id] = {
// //       ...electricalTelemetry(
// //         index,
// //         433
// //       ),

// //       breakerState:
// //         circuit.direction ===
// //         "coupler"
// //           ? "OPEN"
// //           : "CLOSED",

// //       direction:
// //         circuit.direction,

// //       section:
// //         circuit.section,
// //     };
// //   }
// // );


// // export function getTopologyEquipment(
// //   topology
// // ) {
// //   if (!topology) {
// //     return [];
// //   }


// //   if (topology.layout === "pcc") {
// //     return Array.isArray(
// //       topology.panels
// //     )
// //       ? topology.panels.flatMap(
// //           (panel) =>
// //             Array.isArray(
// //               panel.circuits
// //             )
// //               ? panel.circuits
// //               : []
// //         )
// //       : [];
// //   }



// //   if (topology.id === "feeder") {
// //     const incomingFeeders =
// //       Array.isArray(
// //         topology.incomingFeeders
// //       )
// //         ? topology.incomingFeeders
// //         : topology.incoming
// //         ? [topology.incoming]
// //         : [];


// //     const outgoingFeeders =
// //       Array.isArray(
// //         topology.outgoingFeeders
// //       )
// //         ? topology.outgoingFeeders
// //         : Array.isArray(
// //             topology.equipment
// //           )
// //         ? topology.equipment
// //         : [];


// //     return [
// //       ...incomingFeeders,
// //       ...outgoingFeeders,
// //     ];
// //   }



// //   return [
// //     ...(topology.incoming
// //       ? [topology.incoming]
// //       : []),

// //     ...(Array.isArray(
// //       topology.equipment
// //     )
// //       ? topology.equipment
// //       : []),
// //   ];
// // }

// // const safeCount = (
// //   value,
// //   fallback = 0,
// //   max = 100
// // ) => {
// //   const parsed = Number(value);

// //   if (!Number.isFinite(parsed)) {
// //     return fallback;
// //   }

// //   return Math.max(
// //     0,
// //     Math.min(
// //       max,
// //       Math.floor(parsed)
// //     )
// //   );
// // };


// // const normalizeVoltage = (
// //   value,
// //   fallback = "33kV"
// // ) => {
// //   if (!value) {
// //     return fallback;
// //   }

// //   return String(value)
// //     .replace(/\s+/g, "")
// //     .replace("KV", "kV")
// //     .replace("Kv", "kV")
// //     .replace("kv", "kV");
// // };


// // const cloneTopology = (
// //   topology
// // ) => {
// //   if (!topology) {
// //     return null;
// //   }

// //   return {
// //     ...topology,



// //     incoming:
// //       topology.incoming
// //         ? {
// //             ...topology.incoming,
// //           }
// //         : undefined,



// //     incomingFeeders:
// //       Array.isArray(
// //         topology.incomingFeeders
// //       )
// //         ? topology.incomingFeeders.map(
// //             (item) => ({
// //               ...item,
// //             })
// //           )
// //         : undefined,



// //     outgoingFeeders:
// //       Array.isArray(
// //         topology.outgoingFeeders
// //       )
// //         ? topology.outgoingFeeders.map(
// //             (item) => ({
// //               ...item,
// //             })
// //           )
// //         : undefined,



// //     equipment:
// //       Array.isArray(
// //         topology.equipment
// //       )
// //         ? topology.equipment.map(
// //             (item) => ({
// //               ...item,
// //             })
// //           )
// //         : undefined,



// //     panels:
// //       Array.isArray(
// //         topology.panels
// //       )
// //         ? topology.panels.map(
// //             (panel) => ({
// //               ...panel,

// //               circuits:
// //                 Array.isArray(
// //                   panel.circuits
// //                 )
// //                   ? panel.circuits.map(
// //                       (circuit) => ({
// //                         ...circuit,
// //                       })
// //                     )
// //                   : [],
// //             })
// //           )
// //         : undefined,
// //   };
// // };



// // const buildSourceTopology = (
// //   configuration = {}
// // ) => {
// //   const voltageLevel =
// //     normalizeVoltage(
// //       configuration.voltageLevel,
// //       "33kV"
// //     );

// //   const incomingCount =
// //     safeCount(
// //       configuration.incomingCount,
// //       2,
// //       20
// //     );

// //   const outgoingCount =
// //     safeCount(
// //       configuration.outgoingCount,
// //       1,
// //       30
// //     );

// //   const meterCount =
// //     safeCount(
// //       configuration.meterCount,
// //       1,
// //       20
// //     );

// //   const protectionRelay =
// //     Boolean(
// //       configuration.protectionRelay
// //     );

// //   const busCoupler =
// //     Boolean(
// //       configuration.busCoupler
// //     );

// //   const equipment = [];


// //   for (
// //     let index = 0;
// //     index < incomingCount;
// //     index += 1
// //   ) {
// //     equipment.push(
// //       electrical(
// //         `source-inc${index + 1}`,

// //         `Incoming ${index + 1}`,

// //         `${voltageLevel} Incoming Feeder`,

// //         "incomer",

// //         {
// //           voltageLevel,
// //           role: "incoming",
// //         }
// //       )
// //     );
// //   }


// //   for (
// //     let index = 0;
// //     index < outgoingCount;
// //     index += 1
// //   ) {
// //     equipment.push(
// //       electrical(
// //         index === 0
// //           ? "source-out"
// //           : `source-out-${index + 1}`,

// //         `Outgoing ${index + 1}`,

// //         `${voltageLevel} Outgoing Feeder`,

// //         "busbar",

// //         {
// //           voltageLevel,
// //           role: "outgoing",
// //         }
// //       )
// //     );
// //   }


// //   for (
// //     let index = 0;
// //     index < meterCount;
// //     index += 1
// //   ) {
// //     equipment.push(
// //       electrical(
// //         index === 0
// //           ? "source-meter"
// //           : `source-meter-${index + 1}`,

// //         `Meter ${index + 1}`,

// //         `${voltageLevel} Energy Monitoring Meter`,

// //         "meter",

// //         {
// //           voltageLevel,
// //           role: "meter",
// //         }
// //       )
// //     );
// //   }

// //   return {
// //     id: "source",

// //     title:
// //       `${voltageLevel} Source`,

// //     subtitle:
// //       `${incomingCount} Incoming / ` +
// //       `${outgoingCount} Outgoing / ` +
// //       `${meterCount} Meter${
// //         meterCount === 1
// //           ? ""
// //           : "s"
// //       }`,

// //     layout: "grid",

// //     category: "electrical",

// //     voltageLevel,

// //     configuration: {
// //       ...configuration,

// //       voltageLevel,
// //       incomingCount,
// //       outgoingCount,
// //       meterCount,

// //       protectionRelay,
// //       busCoupler,
// //     },

// //     equipment,
// //   };
// // };



// // const buildFeederTopology = (
// //   configuration = {}
// // ) => {
// //   const voltageLevel =
// //     normalizeVoltage(
// //       configuration.voltageLevel,
// //       "33kV"
// //     );



// //   const incomingCount =
// //     safeCount(
// //       configuration.incomingCount,
// //       1,
// //       20
// //     );

// //   const outgoingCount =
// //     safeCount(
// //       configuration.outgoingCount,
// //       6,
// //       30
// //     );



// //   const incomingFeeders =
// //     Array.from(
// //       {
// //         length: incomingCount,
// //       },

// //       (_, index) =>
// //         electrical(
// //           `feeder-in-${index + 1}`,

// //           incomingCount === 1
// //             ? "Incoming Feeder"
// //             : `Incoming Feeder ${index + 1}`,

// //           `${voltageLevel} Incoming Feeder`,

// //           "incomer",

// //           {
// //             voltageLevel,
// //             direction: "incoming",
// //             feederNumber:
// //               index + 1,
// //           }
// //         )
// //     );



// //   const outgoingFeeders =
// //     Array.from(
// //       {
// //         length: outgoingCount,
// //       },

// //       (_, index) =>
// //         electrical(
// //           `feeder-og-${index + 1}`,

// //           `OG-${index + 1}`,

// //           `Outgoing Feeder ${index + 1}`,

// //           "feeder",

// //           {
// //             voltageLevel,
// //             direction: "outgoing",
// //             feederNumber:
// //               index + 1,
// //           }
// //         )
// //     );


// //   return {
// //     id: "feeder",

// //     title:
// //       `${voltageLevel} Feeder Panel`,

// //     subtitle:
// //       `${incomingCount} Incoming / ` +
// //       `${outgoingCount} Outgoing Feeders`,

// //     layout: "feeder",

// //     category: "electrical",

// //     voltageLevel,

// //     configuration: {
// //       ...configuration,

// //       voltageLevel,
// //       incomingCount,
// //       outgoingCount,
// //     },


// //     incomingFeeders,
// //     outgoingFeeders,

    

// //     incoming:
// //       incomingFeeders[0] || null,

// //     equipment:
// //       outgoingFeeders,
// //   };
// // };


// // const buildParallelEquipment = ({
// //   systemId,
// //   title,
// //   subtitle,
// //   category,
// //   count,
// //   equipmentIdPrefix,
// //   equipmentNamePrefix,
// //   labelBuilder,
// //   type,
// //   configuration,
// // }) => ({
// //   id: systemId,

// //   title,

// //   subtitle,

// //   layout: "parallel",

// //   category,

// //   configuration,

// //   equipment:
// //     Array.from(
// //       {
// //         length: count,
// //       },

// //       (_, index) =>
// //         electrical(
// //           `${equipmentIdPrefix}-${
// //             index + 1
// //           }`,

// //           `${equipmentNamePrefix}-${
// //             index + 1
// //           }`,

// //           labelBuilder(index),

// //           type
// //         )
// //     ),
// // });



// // const buildTransformerTopology = (
// //   configuration = {}
// // ) => {
// //   const count =
// //     safeCount(
// //       configuration.count,
// //       6,
// //       30
// //     );

// //   const primaryVoltage =
// //     normalizeVoltage(
// //       configuration.primaryVoltage,
// //       "33kV"
// //     );

// //   const secondaryVoltage =
// //     configuration.secondaryVoltage ||
// //     "433V";

// //   return buildParallelEquipment({
// //     systemId: "transformer",

// //     title: "Transformers",

// //     subtitle:
// //       `${primaryVoltage} / ` +
// //       `${secondaryVoltage} ` +
// //       "Step-Down Transformers",

// //     category: "transformer",

// //     count,

// //     equipmentIdPrefix:
// //       "transformer",

// //     equipmentNamePrefix:
// //       "TR",

// //     labelBuilder: () =>
// //       `${primaryVoltage} / ` +
// //       `${secondaryVoltage} Transformer`,

// //     type: "transformer",

// //     configuration: {
// //       ...configuration,

// //       count,
// //       primaryVoltage,
// //       secondaryVoltage,
// //     },
// //   });
// // };


// // const buildLtKioskTopology = (
// //   configuration = {}
// // ) => {
// //   const count =
// //     safeCount(
// //       configuration.count,
// //       6,
// //       30
// //     );

// //   const voltage =
// //     configuration.voltage ||
// //     "433V";

// //   return buildParallelEquipment({
// //     systemId: "lt-kiosk",

// //     title: "LT Kiosk",

// //     subtitle:
// //       `${voltage} LT Distribution Panels`,

// //     category: "electrical",

// //     count,

// //     equipmentIdPrefix:
// //       "kiosk",

// //     equipmentNamePrefix:
// //       "KIOSK",

// //     labelBuilder: () =>
// //       `${voltage} LT Kiosk`,

// //     type: "kiosk",

// //     configuration: {
// //       ...configuration,

// //       count,
// //       voltage,
// //     },
// //   });
// // };



// // const buildBusductTopology = (
// //   configuration = {}
// // ) => {
// //   const count =
// //     safeCount(
// //       configuration.count,
// //       6,
// //       30
// //     );

// //   return buildParallelEquipment({
// //     systemId: "busduct",

// //     title:
// //       "LT Busduct / Busbar",

// //     subtitle:
// //       "Busbar Condition Monitoring",

// //     category: "busduct",

// //     count,

// //     equipmentIdPrefix:
// //       "bus",

// //     equipmentNamePrefix:
// //       "BUS",

// //     labelBuilder: () =>
// //       "LT Busduct / Busbar",

// //     type: "busduct",

// //     configuration: {
// //       ...configuration,

// //       count,
// //     },
// //   });
// // };



// // const buildRaisingMainTopology = (
// //   configuration = {}
// // ) => {
// //   const count =
// //     safeCount(
// //       configuration.count,
// //       4,
// //       20
// //     );

// //   return buildParallelEquipment({
// //     systemId: "raising-main",

// //     title: "Raising Main",

// //     subtitle:
// //       "Vertical Building Power Distribution",

// //     category: "electrical",

// //     count,

// //     equipmentIdPrefix:
// //       "rm",

// //     equipmentNamePrefix:
// //       "Raising Main",

// //     labelBuilder: (
// //       index
// //     ) =>
// //       index < 2
// //         ? "Wing A Vertical Distribution"
// //         : index < 4
// //         ? "Wing B Vertical Distribution"
// //         : "Configured Vertical Distribution",

// //     type: "raising-main",

// //     configuration: {
// //       ...configuration,

// //       count,
// //     },
// //   });
// // };


// // const buildWingTopology = (
// //   configuration = {}
// // ) => {
// //   const count =
// //     safeCount(
// //       configuration.count,
// //       2,
// //       10
// //     );

// //   const floorsPerWing =
// //     safeCount(
// //       configuration.floorsPerWing,
// //       20,
// //       100
// //     );

// //   const equipment =
// //     Array.from(
// //       {
// //         length: count,
// //       },

// //       (_, index) => {
// //         const letter =
// //           String.fromCharCode(
// //             65 + index
// //           );

// //         return electrical(
// //           `wing-${letter.toLowerCase()}`,

// //           `Wing ${letter}`,

// //           `${floorsPerWing} Floors`,

// //           "wing"
// //         );
// //       }
// //     );


// //   return {
// //     id: "wing",

// //     title:
// //       "Building Wings",

// //     subtitle:
// //       "Wing-Level Electrical Monitoring",

// //     layout:
// //       "parallel",

// //     category:
// //       "wing",

// //     configuration: {
// //       ...configuration,

// //       count,
// //       floorsPerWing,
// //     },

// //     equipment,
// //   };
// // };



// // const buildDgTopology = (
// //   configuration = {}
// // ) => {
// //   const units = Array.isArray(configuration.units)
// //     ? configuration.units
// //     : null;

// //   const count = units
// //     ? Math.min(20, units.length)
// //     : safeCount(configuration.count, 7, 20);

// //   const equipment = Array.from({ length: count }, (_, index) => {
// //     const unit = units?.[index] || {};
// //     const capacity = Number(unit.capacity);
// //     const safeCapacity = Number.isFinite(capacity) ? capacity : (index < 4 ? 1500 : 1250);

// //     return electrical(
// //       unit.id || `dg-${index + 1}`,
// //       unit.name || `DG-${index + 1}`,
// //       `${safeCapacity} kVA GENSET`,
// //       "dg",
// //       { capacity: `${safeCapacity} kVA`, unitIndex: index + 1 }
// //     );
// //   });

// //   return {
// //     id: "dg",
// //     title: "Diesel Generator Plant",
// //     subtitle: "Emergency / Standby Generation",
// //     layout: count === 0 ? "empty" : "parallel",
// //     category: "dg",
// //     configuration: { ...configuration, count, units: units || undefined },
// //     equipment,
// //   };
// // };



// // const buildHvacTopology = (
// //   configuration = {}
// // ) => {
// //   const count =
// //     safeCount(
// //       configuration.count,
// //       0,
// //       30
// //     );

// //   return {
// //     id: "hvac",

// //     title: "HVAC",

// //     subtitle:
// //       "HVAC Cooling Plant",

// //     layout:
// //       count === 0
// //         ? "empty"
// //         : "parallel",

// //     category:
// //       "electrical",

// //     configuration: {
// //       ...configuration,

// //       count,
// //     },

// //     equipment:
// //       Array.from(
// //         {
// //           length: count,
// //         },

// //         (_, index) =>
// //           electrical(
// //             `hvac-${index + 1}`,

// //             `HVAC-${index + 1}`,

// //             "HVAC Equipment",

// //             "hvac"
// //           )
// //       ),
// //   };
// // };



// // const buildWaterTopology = (
// //   configuration = {}
// // ) => {
// //   const stpEnabled =
// //     configuration.stpEnabled !==
// //     false;

// //   const wtpEnabled =
// //     configuration.wtpEnabled !==
// //     false;

// //   const tankCount =
// //     safeCount(
// //       configuration.tankCount,
// //       4,
// //       20
// //     );


// //   const equipment = [
// //     {
// //       id: "water-management",

// //       name:
// //         "Water Management",

// //       label:
// //         "Central Water Monitoring",

// //       type:
// //         "water-main",
// //     },
// //   ];

// //   if (stpEnabled) {
// //     equipment.push({
// //       id: "stp",

// //       name: "STP",

// //       label:
// //         "Sewage Treatment Plant",

// //       type: "stp",
// //     });
// //   }

// //   if (wtpEnabled) {
// //     equipment.push({
// //       id: "wtp",

// //       name: "WTP",

// //       label:
// //         "Water Treatment Plant",

// //       type: "wtp",
// //     });
// //   }

// //   if (tankCount > 0) {
// //     equipment.push(
// //       ...Array.from(
// //         {
// //           length:
// //             tankCount,
// //         },

// //         (_, index) => ({
// //           id:
// //             `tank-${index + 1}`,

// //           name:
// //             `Tank Level-${index + 1}`,

// //           label:
// //             "Water Storage Tank",

// //           type:
// //             "tank",
// //         })
// //       )
// //     );
// //   }


// //   return {
// //     id: "wtp",

// //     title:
// //       "Water Management",

// //     subtitle:
// //       "Water, STP, WTP & Tank Monitoring",

// //     layout:
// //       "water",

// //     category:
// //       "water",

// //     configuration: {
// //       ...configuration,

// //       stpEnabled,
// //       wtpEnabled,
// //       tankCount,
// //     },

// //     equipment,
// //   };
// // };



// // const buildFireTopology = (
// //   configuration = {}
// // ) => {
// //   const fireAlarms =
// //     configuration.fireAlarms !==
// //     false;

// //   const fireFighting =
// //     configuration.fireFighting !==
// //     false;

// //   const firePump =
// //     configuration.firePump !==
// //     false;

// //   const base =
// //     cloneTopology(
// //       flowTopology.fire
// //     );

// //   const enabledIds =
// //     new Set(
// //       [
// //         fireAlarms
// //           ? "fire-alarms"
// //           : null,
// //         fireFighting
// //           ? "fire-fighting"
// //           : null,
// //         firePump
// //           ? "fire-pump"
// //           : null,
// //       ].filter(Boolean)
// //     );

// //   return {
// //     ...base,

// //     configuration: {
// //       ...configuration,

// //       fireAlarms,
// //       fireFighting,
// //       firePump,
// //     },

// //     equipment:
// //       base.equipment.filter(
// //         (item) =>
// //           enabledIds.has(
// //             item.id
// //           )
// //       ),
// //   };
// // };



// // const buildPccTopology = (
// //   configuration = {}
// // ) => {
// //   const count =
// //     safeCount(
// //       configuration.count,
// //       4,
// //       20
// //     );

// //   const baseTopology =
// //     cloneTopology(
// //       flowTopology.pcc
// //     );

// //   const referencePanels =
// //     Array.isArray(
// //       baseTopology.panels
// //     )
// //       ? baseTopology.panels
// //       : [];

// //   const configuredPanels =
// //     Array.isArray(
// //       configuration.panels
// //     )
// //       ? configuration.panels
// //       : null;

// //   const normalizeConfiguredCircuit = (
// //     item,
// //     referenceCircuits
// //   ) => {
// //     /*
// //       New project format stores the complete circuit object.
// //       Older project format may contain only a circuit ID.
// //     */
// //     if (
// //       typeof item ===
// //       "string"
// //     ) {
// //       const reference =
// //         referenceCircuits.find(
// //           (circuit) =>
// //             circuit.id === item
// //         );

// //       return reference
// //         ? {
// //             ...reference,
// //             source:
// //               "reference",
// //           }
// //         : null;
// //     }

// //     if (
// //       !item ||
// //       typeof item !==
// //         "object" ||
// //       !item.id
// //     ) {
// //       return null;
// //     }

// //     const reference =
// //       referenceCircuits.find(
// //         (circuit) =>
// //           circuit.id ===
// //           item.id
// //       );

// //     if (reference) {
// //       return {
// //         ...reference,
// //         ...item,
// //         source:
// //           item.source ||
// //           "reference",
// //       };
// //     }

// //     /*
// //       No reference match means this is building-specific
// //       custom PCC equipment. Preserve it exactly instead
// //       of discarding it.
// //     */
// //     const direction =
// //       [
// //         "incoming",
// //         "outgoing",
// //         "coupler",
// //       ].includes(
// //         item.direction
// //       )
// //         ? item.direction
// //         : "outgoing";

// //     return {
// //       id: item.id,
// //       name:
// //         item.name ||
// //         "Custom Equipment",
// //       label:
// //         item.label ||
// //         (
// //           direction ===
// //           "incoming"
// //             ? "Incoming Circuit"
// //             : direction ===
// //               "coupler"
// //             ? "Bus Coupler"
// //             : "Outgoing Circuit"
// //         ),
// //       type:
// //         item.type ||
// //         (
// //           direction ===
// //           "coupler"
// //             ? "coupler"
// //             : "pcc-circuit"
// //         ),
// //       direction,
// //       section:
// //         item.section ||
// //         null,
// //       source:
// //         item.source ||
// //         "custom",
// //     };
// //   };

// //   const panels =
// //     Array.from(
// //       {
// //         length: count,
// //       },
// //       (_, index) => {
// //         const panelNumber =
// //           index + 1;

// //         const expectedId =
// //           `pcc-${panelNumber}`;

// //         const configuredPanel =
// //           configuredPanels?.find(
// //             (panel) =>
// //               panel?.id ===
// //               expectedId
// //           ) ||
// //           configuredPanels?.[
// //             index
// //           ];

// //         const referencePanel =
// //           referencePanels.find(
// //             (panel) =>
// //               panel?.id ===
// //               expectedId
// //           ) ||
// //           referencePanels[
// //             index
// //           ];

// //         const referenceCircuits =
// //           Array.isArray(
// //             referencePanel?.circuits
// //           )
// //             ? referencePanel.circuits
// //             : [];

// //         /*
// //           IMPORTANT SEMANTICS

// //           configuredPanel.circuits missing:
// //             legacy project -> use reference topology.

// //           configuredPanel.circuits = []:
// //             user explicitly selected no PCC circuits.

// //           configuredPanel.circuits = [...] :
// //             use exactly those reference/custom circuits,
// //             in exactly the saved order.
// //         */
// //         const hasCircuitConfiguration =
// //           Array.isArray(
// //             configuredPanel?.circuits
// //           );

// //         const circuits =
// //           hasCircuitConfiguration
// //             ? configuredPanel.circuits
// //                 .map((item) =>
// //                   normalizeConfiguredCircuit(
// //                     item,
// //                     referenceCircuits
// //                   )
// //                 )
// //                 .filter(Boolean)
// //             : referenceCircuits.map(
// //                 (circuit) => ({
// //                   ...circuit,
// //                   source:
// //                     "reference",
// //                 })
// //               );

// //         /*
// //           Same explicit semantics for UPS:
// //           [] means no UPS.
// //           Missing means legacy reference fallback.
// //         */
// //         const hasUpsConfiguration =
// //           Array.isArray(
// //             configuredPanel?.upsUnits
// //           );

// //         const upsUnits =
// //           hasUpsConfiguration
// //             ? configuredPanel.upsUnits.filter(
// //                 Boolean
// //               )
// //             : panelNumber <= 2
// //             ? [
// //                 "ups-30-1",
// //                 "ups-30-2",
// //                 "ups-10-1",
// //                 "ups-10-2",
// //               ]
// //             : [];

// //         return {
// //           ...(referencePanel ||
// //             {}),

// //           id:
// //             configuredPanel?.id ||
// //             referencePanel?.id ||
// //             expectedId,

// //           name:
// //             configuredPanel?.name ||
// //             referencePanel?.name ||
// //             `PCC ${panelNumber}`,

// //           label:
// //             configuredPanel?.label ||
// //             referencePanel?.label ||
// //             "Configured PCC Panel",

// //           circuits,

// //           equipment:
// //             Array.isArray(
// //               configuredPanel?.equipment
// //             )
// //               ? configuredPanel.equipment.filter(
// //                   Boolean
// //                 )
// //               : undefined,

// //           upsUnits,
// //         };
// //       }
// //     );

// //   return {
// //     ...baseTopology,

// //     subtitle:
// //       `PCC 1-${count} Configured Switchboards`,

// //     panels,

// //     configuration: {
// //       ...configuration,
// //       count,
// //       panels:
// //         configuredPanels ||
// //         undefined,
// //     },
// //   };
// // };

// // export function buildProjectSystemTopology(
// //   projectSystem
// // ) {
// //   if (!projectSystem) {
// //     return null;
// //   }


// //   const systemId =
// //     projectSystem.type ||
// //     projectSystem.id;


// //   const configuration =
// //     projectSystem.configuration ||
// //     {};


// //   switch (systemId) {

// //     case "source":
// //       return buildSourceTopology(
// //         configuration
// //       );


// //     case "feeder":
// //       return buildFeederTopology(
// //         configuration
// //       );


// //     case "transformer":
// //       return buildTransformerTopology(
// //         configuration
// //       );


// //     case "lt-kiosk":
// //       return buildLtKioskTopology(
// //         configuration
// //       );


// //     case "busduct":
// //       return buildBusductTopology(
// //         configuration
// //       );


// //     case "pcc":
// //       return buildPccTopology(
// //         configuration
// //       );


// //     case "raising-main":
// //       return buildRaisingMainTopology(
// //         configuration
// //       );


// //     case "wing":
// //       return buildWingTopology(
// //         configuration
// //       );


// //     case "dg":
// //       return buildDgTopology(
// //         configuration
// //       );


// //     case "hvac":
// //       return buildHvacTopology(
// //         configuration
// //       );


// //     case "wtp":
// //       return buildWaterTopology(
// //         configuration
// //       );


// //     case "fire":
// //       return buildFireTopology(
// //         configuration
// //       );


// //     default:
    
// //       return null;
// //   }
// // }


// // export function buildProjectFlowConfigs(
// //   project
// // ) {
// //   if (
// //     !project ||
// //     !Array.isArray(
// //       project.systems
// //     )
// //   ) {
// //     return flowTopology;
// //   }


// //   return Object.fromEntries(
// //     project.systems
// //       .map(
// //         (
// //           projectSystem
// //         ) => {
// //           const topology =
// //             buildProjectSystemTopology(
// //               projectSystem
// //             );


// //           if (!topology) {
// //             return null;
// //           }


// //           return [
// //             topology.id,
// //             topology,
// //           ];
// //         }
// //       )
// //       .filter(Boolean)
// //   );
// // }



// // export function getProjectTopology(
// //   project,
// //   systemId
// // ) {
// //   if (!systemId) {
// //     return null;
// //   }


// //   if (
// //     !project ||
// //     !Array.isArray(
// //       project.systems
// //     )
// //   ) {
// //     return (
// //       flowTopology[
// //         systemId
// //       ] || null
// //     );
// //   }


// //   const projectSystem =
// //     project.systems.find(
// //       (system) =>
// //         (
// //           system.type ||
// //           system.id
// //         ) === systemId
// //     );


// //   if (!projectSystem) {
// //     return null;
// //   }


// //   return buildProjectSystemTopology(
// //     projectSystem
// //   );
// // }



// // export function buildProjectFlowCategories(
// //   project
// // ) {
// //   if (
// //     !project ||
// //     !Array.isArray(
// //       project.systems
// //     )
// //   ) {
// //     return flowCategories;
// //   }


// //   const projectTopologies =
// //     buildProjectFlowConfigs(
// //       project
// //     );


// //   return project.systems
// //     .map(
// //       (
// //         projectSystem
// //       ) => {
// //         const systemId =
// //           projectSystem.type ||
// //           projectSystem.id;


// //         const baseCategory =
// //           flowCategories.find(
// //             (category) =>
// //               category.id ===
// //               systemId
// //           );


// //         const topology =
// //           projectTopologies[
// //             systemId
// //           ];


// //         if (
// //           !baseCategory ||
// //           !topology
// //         ) {
// //           return null;
// //         }


// //         const configuration =
// //           projectSystem.configuration ||
// //           {};


// //         const category = {
// //           ...baseCategory,

// //           projectSystem,

// //           configuration,
// //         };


// //         /* SOURCE */

// //         if (
// //           systemId ===
// //           "source"
// //         ) {
// //           const voltage =
// //             normalizeVoltage(
// //               configuration.voltageLevel,
// //               "33kV"
// //             );


// //           category.shortName =
// //             `${voltage} Source`;

// //           category.value =
// //             voltage;
// //         }


// //         /* FEEDER */

// //         if (
// //           systemId ===
// //           "feeder"
// //         ) {
// //           const incomingCount =
// //             safeCount(
// //               configuration.incomingCount,
// //               1
// //             );

// //           const outgoingCount =
// //             safeCount(
// //               configuration.outgoingCount,
// //               6
// //             );


// //           category.value =
// //             `${incomingCount} IN / ` +
// //             `${outgoingCount} OUT`;
// //         }


// //         /* TRANSFORMER */

// //         if (
// //           systemId ===
// //           "transformer"
// //         ) {
// //           const count =
// //             topology.equipment?.length ||
// //             0;


// //           category.value =
// //             `${count} Unit${
// //               count === 1
// //                 ? ""
// //                 : "s"
// //             }`;
// //         }


// //         /* LT KIOSK */

// //         if (
// //           systemId ===
// //           "lt-kiosk"
// //         ) {
// //           const count =
// //             topology.equipment?.length ||
// //             0;


// //           category.value =
// //             `${count} Unit${
// //               count === 1
// //                 ? ""
// //                 : "s"
// //             }`;
// //         }


// //         /* BUSDUCT */

// //         if (
// //           systemId ===
// //           "busduct"
// //         ) {
// //           const count =
// //             topology.equipment?.length ||
// //             0;


// //           category.value =
// //             `${count} Busbar${
// //               count === 1
// //                 ? ""
// //                 : "s"
// //             }`;
// //         }


// //         /* PCC */

// //         if (
// //           systemId ===
// //           "pcc"
// //         ) {
// //           const count =
// //             topology.panels?.length ||
// //             0;


// //           category.value =
// //             `${count} Panel${
// //               count === 1
// //                 ? ""
// //                 : "s"
// //             }`;
// //         }


// //         /* RAISING MAIN */

// //         if (
// //           systemId ===
// //           "raising-main"
// //         ) {
// //           const count =
// //             topology.equipment?.length ||
// //             0;


// //           category.value =
// //             `${count} Main${
// //               count === 1
// //                 ? ""
// //                 : "s"
// //             }`;
// //         }


// //         /* WING */

// //         if (
// //           systemId ===
// //           "wing"
// //         ) {
// //           const count =
// //             topology.equipment?.length ||
// //             0;


// //           category.value =
// //             `${count} Wing${
// //               count === 1
// //                 ? ""
// //                 : "s"
// //             }`;
// //         }


// //         /* DG */

// //         if (
// //           systemId ===
// //           "dg"
// //         ) {
// //           const count =
// //             topology.equipment?.length ||
// //             0;


// //           category.value =
// //             `${count} DG${
// //               count === 1
// //                 ? ""
// //                 : "s"
// //             }`;
// //         }


// //         /* HVAC */

// //         if (
// //           systemId ===
// //           "hvac"
// //         ) {
// //           const count =
// //             topology.equipment?.length ||
// //             0;


// //           if (
// //             count === 0
// //           ) {
// //             category.status =
// //               "NOT CONFIGURED";

// //             category.health =
// //               "UNAVAILABLE";

// //             category.value =
// //               "0 Units";
// //           } else {
// //             category.status =
// //               "ONLINE";

// //             category.health =
// //               "HEALTHY";

// //             category.value =
// //               `${count} Unit${
// //                 count === 1
// //                   ? ""
// //                   : "s"
// //               }`;
// //           }
// //         }


// //         /* WATER */

// //         if (
// //           systemId ===
// //           "wtp"
// //         ) {
// //           const tankCount =
// //             topology.configuration
// //               ?.tankCount ??
// //             4;


// //           category.value =
// //             `${tankCount} Tank${
// //               tankCount === 1
// //                 ? ""
// //                 : "s"
// //             }`;
// //         }


// //         return category;
// //       }
// //     )
// //     .filter(Boolean);
// // }









// // import {
// //   RadioTower,
// //   GitBranch,
// //   Zap,
// //   Network,
// //   Cpu,
// //   Bolt,
// //   Building2,
// //   CirclePower,
// //   Fan,
// //   Droplets,
// //   Flame,
// //   BatteryCharging,
// //   PanelsTopLeft,
// // } from "lucide-react";


// // /* =========================================================
// //    OVERVIEW
// // ========================================================= */

// // export const flowCategories = [
// //   {
// //     id: "source",
// //     name: "Source",
// //     shortName: "33 kV Source",
// //     icon: RadioTower,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "33 kV",
// //     color: "source",
// //   },
// //   {
// //     id: "feeder",
// //     name: "Feeder",
// //     shortName: "33 kV Feeder",
// //     icon: GitBranch,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "1 IN / 6 OUT",
// //     color: "feeder",
// //   },
// //   {
// //     id: "transformer",
// //     name: "Transformer",
// //     shortName: "33/0.433 kV",
// //     icon: Zap,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "6 Units",
// //     color: "transformer",
// //   },
// //   {
// //     id: "lt-kiosk",
// //     name: "LT Kiosk",
// //     shortName: "LT Distribution",
// //     icon: PanelsTopLeft,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "6 Units",
// //     color: "lt-kiosk",
// //   },
// //   {
// //     id: "busduct",
// //     name: "Busduct",
// //     shortName: "LT Busduct / Busbar",
// //     icon: Network,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "6 Busbars",
// //     color: "busduct",
// //   },
// //   {
// //     id: "pcc",
// //     name: "PCC",
// //     shortName: "Power Control Centre",
// //     icon: Cpu,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "4 Panels",
// //     color: "pcc",
// //   },
// //   {
// //     id: "ups",
// //     name: "UPS",
// //     shortName: "UPS Distribution",
// //     icon: BatteryCharging,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "4 Units",
// //     color: "ups",
// //   },
// //   {
// //     id: "raising-main",
// //     name: "Raising Main",
// //     shortName: "Vertical Distribution",
// //     icon: Bolt,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "4 Mains",
// //     color: "raising-main",
// //   },
// //   {
// //     id: "wing",
// //     name: "Wing",
// //     shortName: "Building Distribution",
// //     icon: Building2,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "2 Wings",
// //     color: "wing",
// //   },
// //   {
// //     id: "dg",
// //     name: "DG",
// //     shortName: "Diesel Generator Plant",
// //     icon: CirclePower,
// //     status: "STANDBY",
// //     health: "READY",
// //     value: "7 DGs",
// //     color: "dg",
// //   },
// //   {
// //     id: "hvac",
// //     name: "HVAC",
// //     shortName: "HVAC Cooling Plant",
// //     icon: Fan,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "Running",
// //     color: "hvac",
// //   },
// //   {
// //     id: "wtp",
// //     name: "Water Management",
// //     shortName: "STP / WTP / Tanks",
// //     icon: Droplets,
// //     status: "ONLINE",
// //     health: "HEALTHY",
// //     value: "Normal",
// //     color: "wtp",
// //   },
// //   {
// //     id: "fire",
// //     name: "Fire",
// //     shortName: "Fire & Life Safety",
// //     icon: Flame,
// //     status: "ONLINE",
// //     health: "NORMAL",
// //     value: "Normal",
// //     color: "fire",
// //   },
// // ];


// // /* =========================================================
// //    HELPERS
// // ========================================================= */

// // const electrical = (
// //   id,
// //   name,
// //   label,
// //   type = "electrical",
// //   overrides = {}
// // ) => ({
// //   id,
// //   name,
// //   label,
// //   type,
// //   ...overrides,
// // });


// // const makePccCircuit = (
// //   panel,
// //   id,
// //   name,
// //   direction,
// //   section = null
// // ) => ({
// //   id: `${panel}-${id}`,
// //   name,
// //   label:
// //     direction === "incoming"
// //       ? "Incoming Circuit"
// //       : direction === "coupler"
// //       ? "Bus Coupler"
// //       : "Outgoing Circuit",
// //   type:
// //     direction === "coupler"
// //       ? "coupler"
// //       : "pcc-circuit",
// //   direction,
// //   section,
// // });


// // /* =========================================================
// //    PCC CIRCUITS
// // ========================================================= */

// // const pcc1Circuits = [
// //   makePccCircuit("pcc1", "lt6-in", "LT6 IN", "incoming", "A"),
// //   makePccCircuit("pcc1", "dg1234-in-a", "DG1-4 IN", "incoming", "A"),

// //   makePccCircuit("pcc1", "og1", "OG1", "outgoing", "A"),
// //   makePccCircuit("pcc1", "rm1-a", "RM1", "outgoing", "A"),
// //   makePccCircuit("pcc1", "rm2-a", "RM2", "outgoing", "A"),
// //   makePccCircuit("pcc1", "utility1", "Utility 1", "outgoing", "A"),
// //   makePccCircuit("pcc1", "spare1", "Spare 1", "outgoing", "A"),

// //   makePccCircuit("pcc1", "bus-coupler", "Bus Coupler", "coupler"),

// //   makePccCircuit("pcc1", "lt5-in", "LT5 IN", "incoming", "B"),
// //   makePccCircuit("pcc1", "dg1234-in-b", "DG1-4 IN", "incoming", "B"),

// //   makePccCircuit("pcc1", "rm1-b", "RM1", "outgoing", "B"),
// //   makePccCircuit("pcc1", "rm2-b", "RM2", "outgoing", "B"),
// //   makePccCircuit("pcc1", "utility2", "Utility 2", "outgoing", "B"),
// //   makePccCircuit("pcc1", "spare2", "Spare 2", "outgoing", "B"),
// // ];


// // const pcc2Circuits = [
// //   makePccCircuit("pcc2", "lt1-in", "LT1 IN", "incoming", "A"),
// //   makePccCircuit("pcc2", "dg1234-in-a", "DG1-4 IN", "incoming", "A"),

// //   makePccCircuit("pcc2", "og1", "OG1", "outgoing", "A"),
// //   makePccCircuit("pcc2", "rm1-a", "RM1", "outgoing", "A"),
// //   makePccCircuit("pcc2", "rm2-a", "RM2", "outgoing", "A"),
// //   makePccCircuit("pcc2", "utility1", "Utility 1", "outgoing", "A"),
// //   makePccCircuit("pcc2", "spare1", "Spare 1", "outgoing", "A"),

// //   makePccCircuit("pcc2", "bus-coupler", "Bus Coupler", "coupler"),

// //   makePccCircuit("pcc2", "lt2-in", "LT2 IN", "incoming", "B"),
// //   makePccCircuit("pcc2", "dg1234-in-b", "DG1-4 IN", "incoming", "B"),

// //   makePccCircuit("pcc2", "rm1-b", "RM1", "outgoing", "B"),
// //   makePccCircuit("pcc2", "rm2-b", "RM2", "outgoing", "B"),
// //   makePccCircuit("pcc2", "utility2", "Utility 2", "outgoing", "B"),
// //   makePccCircuit("pcc2", "spare2", "Spare 2", "outgoing", "B"),
// // ];


// // const pcc3Circuits = [
// //   makePccCircuit("pcc3", "lt4-in", "LT4 IN", "incoming"),
// //   makePccCircuit("pcc3", "dg567-in", "DG5-7 IN", "incoming"),

// //   ...Array.from(
// //     { length: 10 },
// //     (_, index) =>
// //       makePccCircuit(
// //         "pcc3",
// //         `og-${index + 1}`,
// //         `OG ${index + 1}`,
// //         "outgoing"
// //       )
// //   ),
// // ];


// // const pcc4Circuits = [
// //   makePccCircuit("pcc4", "lt3-in", "LT3 IN", "incoming"),
// //   makePccCircuit("pcc4", "dg567-in", "DG5-7 IN", "incoming"),

// //   ...Array.from(
// //     { length: 10 },
// //     (_, index) =>
// //       makePccCircuit(
// //         "pcc4",
// //         `og-${index + 1}`,
// //         `OG ${index + 1}`,
// //         "outgoing"
// //       )
// //   ),
// // ];


// // /* =========================================================
// //    TOPOLOGY
// // ========================================================= */

// // export const flowTopology = {

// //   source: {
// //     id: "source",
// //     title: "33 kV Source",
// //     subtitle: "Incoming HT Source & Metering",
// //     layout: "grid",
// //     category: "electrical",

// //     equipment: [
// //       electrical(
// //         "source-inc1",
// //         "INC1",
// //         "Primary Incoming Feeder",
// //         "incomer"
// //       ),
// //       electrical(
// //         "source-out",
// //         "OUT",
// //         "Outgoing Busbar",
// //         "busbar"
// //       ),
// //       electrical(
// //         "source-inc2",
// //         "INC2",
// //         "Secondary Incoming Feeder",
// //         "incomer"
// //       ),
// //       electrical(
// //         "source-meter",
// //         "Metering Unit",
// //         "33 kV Energy Monitoring Meter",
// //         "meter"
// //       ),
// //     ],
// //   },


// //   feeder: {
// //     id: "feeder",
// //     title: "33 kV Feeder Panel",
// //     subtitle: "1 Incoming / 6 Outgoing Feeders",
// //     layout: "feeder",
// //     category: "electrical",

// //     incoming: electrical(
// //       "feeder-in-1",
// //       "Incoming Feeder 1",
// //       "33 kV Feeder Incoming",
// //       "incomer"
// //     ),

// //     equipment: Array.from(
// //       { length: 6 },
// //       (_, index) =>
// //         electrical(
// //           `feeder-og-${index + 1}`,
// //           `OG-${index + 1}`,
// //           `Outgoing Feeder → TR-${index + 1}`,
// //           "feeder"
// //         )
// //     ),
// //   },


// //   transformer: {
// //     id: "transformer",
// //     title: "Transformers",
// //     subtitle: "33 kV / 433 V Step-Down Transformers",
// //     layout: "parallel",
// //     category: "transformer",

// //     equipment: Array.from(
// //       { length: 6 },
// //       (_, index) =>
// //         electrical(
// //           `transformer-${index + 1}`,
// //           `TR-${index + 1}`,
// //           "33 kV / 433 V Transformer",
// //           "transformer"
// //         )
// //     ),
// //   },


// //   "lt-kiosk": {
// //     id: "lt-kiosk",
// //     title: "LT Kiosk",
// //     subtitle: "433 V LT Distribution Panels",
// //     layout: "parallel",
// //     category: "electrical",

// //     equipment: Array.from(
// //       { length: 6 },
// //       (_, index) =>
// //         electrical(
// //           `kiosk-${index + 1}`,
// //           `KIOSK-${index + 1}`,
// //           "433 V LT Kiosk",
// //           "kiosk"
// //         )
// //     ),
// //   },


// //   busduct: {
// //     id: "busduct",
// //     title: "LT Busduct / Busbar",
// //     subtitle: "Busbar Condition Monitoring",
// //     layout: "parallel",
// //     category: "busduct",

// //     equipment: Array.from(
// //       { length: 6 },
// //       (_, index) =>
// //         electrical(
// //           `bus-${index + 1}`,
// //           `BUS-${index + 1}`,
// //           "LT Busduct / Busbar",
// //           "busduct"
// //         )
// //     ),
// //   },


// //   pcc: {
// //     id: "pcc",
// //     title: "Power Control Centre",
// //     subtitle: "PCC 1–4 Incomings, Outgoings & Bus Couplers",
// //     layout: "pcc",
// //     category: "pcc",

// //     panels: [
// //       {
// //         id: "pcc-1",
// //         name: "PCC 1",
// //         label: "Wing A LT Distribution",
// //         circuits: pcc1Circuits,
// //       },
// //       {
// //         id: "pcc-2",
// //         name: "PCC 2",
// //         label: "Wing A LT Distribution",
// //         circuits: pcc2Circuits,
// //       },
// //       {
// //         id: "pcc-3",
// //         name: "PCC 3",
// //         label: "Wing B LT Distribution",
// //         circuits: pcc3Circuits,
// //       },
// //       {
// //         id: "pcc-4",
// //         name: "PCC 4",
// //         label: "Wing B LT Distribution",
// //         circuits: pcc4Circuits,
// //       },
// //     ],
// //   },


// //   ups: {
// //     id: "ups",
// //     title: "UPS",
// //     subtitle: "Uninterruptible Power Supply",
// //     layout: "parallel",
// //     category: "ups",

// //     equipment: [
// //       electrical(
// //         "ups-30-1",
// //         "30kVA-1",
// //         "30 kVA UPS",
// //         "ups"
// //       ),
// //       electrical(
// //         "ups-30-2",
// //         "30kVA-2",
// //         "30 kVA UPS",
// //         "ups"
// //       ),
// //       electrical(
// //         "ups-10-1",
// //         "10kVA-1",
// //         "10 kVA UPS",
// //         "ups"
// //       ),
// //       electrical(
// //         "ups-10-2",
// //         "10kVA-2",
// //         "10 kVA UPS",
// //         "ups"
// //       ),
// //     ],
// //   },


// //   "raising-main": {
// //     id: "raising-main",
// //     title: "Raising Main",
// //     subtitle: "Vertical Building Power Distribution",
// //     layout: "parallel",
// //     category: "electrical",

// //     equipment: Array.from(
// //       { length: 4 },
// //       (_, index) =>
// //         electrical(
// //           `rm-${index + 1}`,
// //           `Raising Main ${index + 1}`,
// //           index < 2
// //             ? "Wing A Vertical Distribution"
// //             : "Wing B Vertical Distribution",
// //           "raising-main"
// //         )
// //     ),
// //   },


// //   wing: {
// //     id: "wing",
// //     title: "Building Wings",
// //     subtitle: "Wing-Level Electrical Monitoring",
// //     layout: "parallel",
// //     category: "wing",

// //     equipment: [
// //       electrical(
// //         "wing-a",
// //         "Wing A",
// //         "20 Floors",
// //         "wing"
// //       ),
// //       electrical(
// //         "wing-b",
// //         "Wing B",
// //         "20 Floors",
// //         "wing"
// //       ),
// //     ],
// //   },


// //   dg: {
// //     id: "dg",
// //     title: "Diesel Generator Plant",
// //     subtitle: "Emergency / Standby Generation",
// //     layout: "parallel",
// //     category: "dg",

// //     equipment: Array.from(
// //       { length: 7 },
// //       (_, index) =>
// //         electrical(
// //           `dg-${index + 1}`,
// //           `DG-${index + 1}`,
// //           index < 4
// //             ? "1500 kVA GENSET"
// //             : "1250 kVA GENSET",
// //           "dg"
// //         )
// //     ),
// //   },


// //   hvac: {
// //     id: "hvac",
// //     title: "HVAC",
// //     subtitle: "HVAC Cooling Plant",
// //     layout: "grid",
// //     category: "electrical",

// //     equipment: [
// //       electrical(
// //         "hvac",
// //         "HVAC",
// //         "HVAC Cooling Plant",
// //         "hvac"
// //       ),
// //     ],
// //   },


// //   wtp: {
// //     id: "wtp",
// //     title: "Water Management",
// //     subtitle: "Water, STP, WTP & Tank Monitoring",
// //     layout: "water",
// //     category: "water",

// //     equipment: [
// //       {
// //         id: "water-management",
// //         name: "Water Management",
// //         label: "Central Water Monitoring",
// //         type: "water-main",
// //       },
// //       {
// //         id: "stp",
// //         name: "STP",
// //         label: "Sewage Treatment Plant",
// //         type: "stp",
// //       },
// //       {
// //         id: "wtp",
// //         name: "WTP",
// //         label: "Water Treatment Plant",
// //         type: "wtp",
// //       },
// //       ...Array.from(
// //         { length: 4 },
// //         (_, index) => ({
// //           id: `tank-${index + 1}`,
// //           name: `Tank Level-${index + 1}`,
// //           label: "Water Storage Tank",
// //           type: "tank",
// //         })
// //       ),
// //     ],
// //   },


// //   fire: {
// //     id: "fire",
// //     title: "Fire & Life Safety",
// //     subtitle: "Fire Alarm, Fire Fighting & Pump Monitoring",
// //     layout: "parallel",
// //     category: "fire",

// //     equipment: [
// //       {
// //         id: "fire-alarms",
// //         name: "Fire Alarms",
// //         label: "Detection & Alarm System",
// //         type: "fire-alarm",
// //       },
// //       {
// //         id: "fire-fighting",
// //         name: "Fire Fighting",
// //         label: "Hydrant & Sprinkler System",
// //         type: "fire-fighting",
// //       },
// //       {
// //         id: "fire-pump",
// //         name: "Fire Pump",
// //         label: "Fire Pump System",
// //         type: "fire-pump",
// //       },
// //     ],
// //   },
// // };


// // /* =========================================================
// //    TRANSFORMER DATA
// // ========================================================= */

// // const transformerValues = [
// //   [54, 61, 68],
// //   [52, 59, 62],
// //   [55, 60, 71],
// //   [53, 58, 65],
// //   [56, 63, 74],
// //   [51, 57, 60],
// // ];


// // /* =========================================================
// //    BASE TELEMETRY
// // ========================================================= */

// // const electricalTelemetry = (
// //   index = 0,
// //   voltage = 433
// // ) => ({
// //   status: "ON",
// //   health: "HEALTHY",
// //   communication: true,

// //   kWh: 1245 + index * 18,
// //   kVAh: 1180 + index * 15,

// //   voltage,
// //   current: 210 + index * 4,

// //   powerFactor:
// //     index % 2 === 0
// //       ? 0.98
// //       : 0.97,

// //   load: 62 + (index % 5) * 4,

// //   fault: false,
// //   trip: false,
// //   warning: false,
// // });


// // /* =========================================================
// //    DEMO TELEMETRY
// // ========================================================= */

// // export const demoTelemetry = {

// //   /* SOURCE — old BMS values */

// //   "source-inc1": {
// //     ...electricalTelemetry(0, 33),
// //     kWh: 1280,
// //     kVAh: 1195,
// //     current: 420,
// //     powerFactor: 0.98,
// //     load: 78,
// //     healthScore: 94,
// //     operatingStatus: "Stable",
// //   },

// //   "source-out": {
// //     ...electricalTelemetry(1, 33),
// //     kWh: 1560,
// //     kVAh: 1430,
// //     current: 460,
// //     powerFactor: 0.99,
// //     load: 86,
// //     healthScore: 96,
// //     operatingStatus: "Stable",
// //   },

// //   "source-inc2": {
// //     ...electricalTelemetry(2, 33),
// //     kWh: 1110,
// //     kVAh: 1020,
// //     current: 390,
// //     powerFactor: 0.97,
// //     load: 72,
// //     healthScore: 92,
// //     operatingStatus: "Stable",
// //   },

// //   "source-meter": {
// //     ...electricalTelemetry(3, 33),
// //     kWh: 1420,
// //     kVAh: 1300,
// //     current: 435,
// //     powerFactor: 0.98,
// //     load: 81,
// //     healthScore: 95,
// //     operatingStatus: "Stable",
// //   },


// //   /* FEEDER */

// //   "feeder-in-1": {
// //     ...electricalTelemetry(0, 33),
// //     current: 432,
// //   },

// //   ...Object.fromEntries(
// //     Array.from(
// //       { length: 6 },
// //       (_, index) => [
// //         `feeder-og-${index + 1}`,
// //         {
// //           ...electricalTelemetry(
// //             index + 1,
// //             33
// //           ),
// //           current:
// //             390 - index * 13,
// //         },
// //       ]
// //     )
// //   ),


// //   /* TRANSFORMERS */

// //   ...Object.fromEntries(
// //     transformerValues.map(
// //       (
// //         [
// //           oilTemp,
// //           windingTemp,
// //           load,
// //         ],
// //         index
// //       ) => [
// //         `transformer-${index + 1}`,
// //         {
// //           status: "ON",
// //           health: "HEALTHY",
// //           communication: true,

// //           oilTemp,
// //           windingTemp,

// //           buchholz: "Healthy",
// //           load,

// //           fault: false,
// //           trip: false,
// //           warning: false,
// //         },
// //       ]
// //     )
// //   ),


// //   /* LT KIOSK */

// //   ...Object.fromEntries(
// //     Array.from(
// //       { length: 6 },
// //       (_, index) => [
// //         `kiosk-${index + 1}`,
// //         electricalTelemetry(
// //           index,
// //           433
// //         ),
// //       ]
// //     )
// //   ),


// //   /* BUSDUCT */

// //   ...Object.fromEntries(
// //     Array.from(
// //       { length: 6 },
// //       (_, index) => [
// //         `bus-${index + 1}`,
// //         {
// //           status: "ON",
// //           health: "HEALTHY",
// //           communication: true,

// //           temperature:
// //             38 + index,

// //           vibration:
// //             Number(
// //               (
// //                 1.2 +
// //                 index * 0.1
// //               ).toFixed(1)
// //             ),

// //           voltage: 433,
// //           load:
// //             61 + index * 2,

// //           fault: false,
// //           trip: false,
// //           warning: false,
// //         },
// //       ]
// //     )
// //   ),


// //   /* UPS */

// //   "ups-30-1": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     capacity: "30 kVA",
// //     inputVoltage: 433,
// //     outputVoltage: 230,
// //     load: 62,
// //     battery: 96,
// //     inputFrequency: 50,
// //     outputFrequency: 50,
// //     batteryVoltage: 216,
// //     backupTime: "42 min",
// //     mode: "ONLINE",

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "ups-30-2": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     capacity: "30 kVA",
// //     inputVoltage: 433,
// //     outputVoltage: 230,
// //     load: 58,
// //     battery: 94,
// //     inputFrequency: 50,
// //     outputFrequency: 50,
// //     batteryVoltage: 215,
// //     backupTime: "45 min",
// //     mode: "ONLINE",

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "ups-10-1": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     capacity: "10 kVA",
// //     inputVoltage: 433,
// //     outputVoltage: 230,
// //     load: 48,
// //     battery: 97,
// //     inputFrequency: 50,
// //     outputFrequency: 50,
// //     batteryVoltage: 216,
// //     backupTime: "56 min",
// //     mode: "ONLINE",

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "ups-10-2": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     capacity: "10 kVA",
// //     inputVoltage: 433,
// //     outputVoltage: 230,
// //     load: 45,
// //     battery: 95,
// //     inputFrequency: 50,
// //     outputFrequency: 50,
// //     batteryVoltage: 215,
// //     backupTime: "59 min",
// //     mode: "ONLINE",

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },


// //   /* RAISING MAIN */

// //   ...Object.fromEntries(
// //     Array.from(
// //       { length: 4 },
// //       (_, index) => [
// //         `rm-${index + 1}`,
// //         electricalTelemetry(
// //           index,
// //           433
// //         ),
// //       ]
// //     )
// //   ),


// //   /* WING */

// //   "wing-a": {
// //     ...electricalTelemetry(
// //       0,
// //       433
// //     ),
// //     demand: 1240,
// //     activeAlarms: 0,
// //   },

// //   "wing-b": {
// //     ...electricalTelemetry(
// //       1,
// //       433
// //     ),
// //     demand: 1180,
// //     activeAlarms: 0,
// //   },


// //   /* DG */

// //   ...Object.fromEntries(
// //     Array.from(
// //       { length: 7 },
// //       (_, index) => [
// //         `dg-${index + 1}`,
// //         {
// //           ...electricalTelemetry(
// //             index,
// //             433
// //           ),

// //           status:
// //             index === 0
// //               ? "ON"
// //               : "STANDBY",

// //           health: "READY",

// //           capacity:
// //             index < 4
// //               ? "1500 kVA"
// //               : "1250 kVA",
// //         },
// //       ]
// //     )
// //   ),


// //   /* HVAC */

// //   hvac: {
// //     ...electricalTelemetry(
// //       0,
// //       433
// //     ),
// //   },


// //   /* WATER */

// //   "water-management": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     flowRate: 148,
// //     totalWater: 72,
// //     pressure: 3.2,

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   stp: {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     inletFlow: 82,
// //     outletFlow: 76,
// //     ph: 7.2,
// //     turbidity: 2.4,

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   wtp: {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,

// //     inletFlow: 96,
// //     outletFlow: 91,
// //     ph: 7.1,
// //     turbidity: 1.8,

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "tank-1": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,
// //     level: 78,
// //     volume: 42,
// //     inletFlow: 18,
// //     outletFlow: 14,
// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "tank-2": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,
// //     level: 66,
// //     volume: 36,
// //     inletFlow: 15,
// //     outletFlow: 12,
// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "tank-3": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,
// //     level: 83,
// //     volume: 45,
// //     inletFlow: 19,
// //     outletFlow: 16,
// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "tank-4": {
// //     status: "ON",
// //     health: "HEALTHY",
// //     communication: true,
// //     level: 59,
// //     volume: 31,
// //     inletFlow: 14,
// //     outletFlow: 11,
// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },


// //   /* FIRE */

// //   "fire-alarms": {
// //     status: "ON",
// //     health: "NORMAL",
// //     communication: true,

// //     smokeDetectors: 128,
// //     heatDetectors: 64,
// //     alarmZones: 12,
// //     activeAlarms: 0,

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "fire-fighting": {
// //     status: "ON",
// //     health: "NORMAL",
// //     communication: true,

// //     pressure: 7.2,
// //     hydrantNetwork: "NORMAL",
// //     sprinklerNetwork: "NORMAL",
// //     mainValve: "OPEN",

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },

// //   "fire-pump": {
// //     status: "STANDBY",
// //     health: "READY",
// //     communication: true,

// //     voltage: 415,
// //     pressure: 7.4,
// //     mode: "AUTO",
// //     pumpState: "STANDBY",

// //     fault: false,
// //     trip: false,
// //     warning: false,
// //   },
// // };


// // /* =========================================================
// //    PCC TELEMETRY
// // ========================================================= */

// // [
// //   ...pcc1Circuits,
// //   ...pcc2Circuits,
// //   ...pcc3Circuits,
// //   ...pcc4Circuits,
// // ].forEach(
// //   (circuit, index) => {
// //     demoTelemetry[circuit.id] = {
// //       ...electricalTelemetry(
// //         index,
// //         433
// //       ),

// //       breakerState:
// //         circuit.direction ===
// //         "coupler"
// //           ? "OPEN"
// //           : "CLOSED",

// //       direction:
// //         circuit.direction,

// //       section:
// //         circuit.section,
// //     };
// //   }
// // );


// // /* =========================================================
// //    FLATTEN ALL EQUIPMENT
// // ========================================================= */

// // export function getTopologyEquipment(
// //   topology
// // ) {
// //   if (!topology) {
// //     return [];
// //   }

// //   if (topology.layout === "pcc") {
// //     return topology.panels.flatMap(
// //       (panel) =>
// //         panel.circuits
// //     );
// //   }

// //   return [
// //     ...(topology.incoming
// //       ? [topology.incoming]
// //       : []),

// //     ...(topology.equipment || []),
// //   ];
// // }
















// import {
//   RadioTower,
//   GitBranch,
//   Zap,
//   Network,
//   Cpu,
//   Bolt,
//   Building2,
//   CirclePower,
//   Fan,
//   Droplets,
//   Flame,
//   BatteryCharging,
//   PanelsTopLeft,
// } from "lucide-react";


// /* =========================================================
//    OVERVIEW
// ========================================================= */

// export const flowCategories = [
//   {
//     id: "source",
//     name: "Source",
//     shortName: "33 kV Source",
//     icon: RadioTower,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "33 kV",
//     color: "source",
//   },
//   {
//     id: "feeder",
//     name: "Feeder",
//     shortName: "33 kV Feeder",
//     icon: GitBranch,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "1 IN / 6 OUT",
//     color: "feeder",
//   },
//   {
//     id: "transformer",
//     name: "Transformer",
//     shortName: "33/0.433 kV",
//     icon: Zap,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "6 Units",
//     color: "transformer",
//   },
//   {
//     id: "lt-kiosk",
//     name: "LT Kiosk",
//     shortName: "LT Distribution",
//     icon: PanelsTopLeft,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "6 Units",
//     color: "lt-kiosk",
//   },
//   {
//     id: "busduct",
//     name: "Busduct",
//     shortName: "LT Busduct / Busbar",
//     icon: Network,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "6 Busbars",
//     color: "busduct",
//   },
//   {
//     id: "pcc",
//     name: "PCC",
//     shortName: "Power Control Centre",
//     icon: Cpu,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "4 Panels",
//     color: "pcc",
//   },
//   {
//     id: "raising-main",
//     name: "Raising Main",
//     shortName: "Vertical Distribution",
//     icon: Bolt,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "4 Mains",
//     color: "raising-main",
//   },
//   {
//     id: "wing",
//     name: "Wing",
//     shortName: "Building Distribution",
//     icon: Building2,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "2 Wings",
//     color: "wing",
//   },
//   {
//     id: "dg",
//     name: "DG",
//     shortName: "Diesel Generator Plant",
//     icon: CirclePower,
//     status: "STANDBY",
//     health: "READY",
//     value: "7 DGs",
//     color: "dg",
//   },
//   {
//     id: "hvac",
//     name: "HVAC",
//     shortName: "HVAC Cooling Plant",
//     icon: Fan,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "Running",
//     color: "hvac",
//   },
//   {
//     id: "wtp",
//     name: "Water Management",
//     shortName: "STP / WTP / Tanks",
//     icon: Droplets,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "Normal",
//     color: "wtp",
//   },
//   {
//     id: "fire",
//     name: "Fire",
//     shortName: "Fire & Life Safety",
//     icon: Flame,
//     status: "ONLINE",
//     health: "NORMAL",
//     value: "Normal",
//     color: "fire",
//   },
// ];


// /* =========================================================
//    HELPERS
// ========================================================= */

// const electrical = (
//   id,
//   name,
//   label,
//   type = "electrical",
//   overrides = {}
// ) => ({
//   id,
//   name,
//   label,
//   type,
//   ...overrides,
// });


// const makePccCircuit = (
//   panel,
//   id,
//   name,
//   direction,
//   section = null
// ) => ({
//   id: `${panel}-${id}`,
//   name,
//   label:
//     direction === "incoming"
//       ? "Incoming Circuit"
//       : direction === "coupler"
//       ? "Bus Coupler"
//       : "Outgoing Circuit",
//   type:
//     direction === "coupler"
//       ? "coupler"
//       : "pcc-circuit",
//   direction,
//   section,
// });


// /* =========================================================
//    PCC CIRCUITS
// ========================================================= */

// const pcc1Circuits = [
//   makePccCircuit("pcc1", "lt6-in", "LT6 IN", "incoming", "A"),
//   makePccCircuit("pcc1", "dg1234-in-a", "DG1-4 IN", "incoming", "A"),

//   makePccCircuit("pcc1", "og1", "OG1", "outgoing", "A"),
//   makePccCircuit("pcc1", "rm1-a", "RM1", "outgoing", "A"),
//   makePccCircuit("pcc1", "rm2-a", "RM2", "outgoing", "A"),
//   makePccCircuit("pcc1", "utility1", "Utility 1", "outgoing", "A"),
//   makePccCircuit("pcc1", "spare1", "Spare 1", "outgoing", "A"),

//   makePccCircuit("pcc1", "bus-coupler", "Bus Coupler", "coupler"),

//   makePccCircuit("pcc1", "lt5-in", "LT5 IN", "incoming", "B"),
//   makePccCircuit("pcc1", "dg1234-in-b", "DG1-4 IN", "incoming", "B"),

//   makePccCircuit("pcc1", "rm1-b", "RM1", "outgoing", "B"),
//   makePccCircuit("pcc1", "rm2-b", "RM2", "outgoing", "B"),
//   makePccCircuit("pcc1", "utility2", "Utility 2", "outgoing", "B"),
//   makePccCircuit("pcc1", "spare2", "Spare 2", "outgoing", "B"),
// ];


// const pcc2Circuits = [
//   makePccCircuit("pcc2", "lt1-in", "LT1 IN", "incoming", "A"),
//   makePccCircuit("pcc2", "dg1234-in-a", "DG1-4 IN", "incoming", "A"),

//   makePccCircuit("pcc2", "og1", "OG1", "outgoing", "A"),
//   makePccCircuit("pcc2", "rm1-a", "RM1", "outgoing", "A"),
//   makePccCircuit("pcc2", "rm2-a", "RM2", "outgoing", "A"),
//   makePccCircuit("pcc2", "utility1", "Utility 1", "outgoing", "A"),
//   makePccCircuit("pcc2", "spare1", "Spare 1", "outgoing", "A"),

//   makePccCircuit("pcc2", "bus-coupler", "Bus Coupler", "coupler"),

//   makePccCircuit("pcc2", "lt2-in", "LT2 IN", "incoming", "B"),
//   makePccCircuit("pcc2", "dg1234-in-b", "DG1-4 IN", "incoming", "B"),

//   makePccCircuit("pcc2", "rm1-b", "RM1", "outgoing", "B"),
//   makePccCircuit("pcc2", "rm2-b", "RM2", "outgoing", "B"),
//   makePccCircuit("pcc2", "utility2", "Utility 2", "outgoing", "B"),
//   makePccCircuit("pcc2", "spare2", "Spare 2", "outgoing", "B"),
// ];


// const pcc3Circuits = [
//   makePccCircuit("pcc3", "lt4-in", "LT4 IN", "incoming"),
//   makePccCircuit("pcc3", "dg567-in", "DG5-7 IN", "incoming"),

//   ...Array.from(
//     { length: 10 },
//     (_, index) =>
//       makePccCircuit(
//         "pcc3",
//         `og-${index + 1}`,
//         `OG ${index + 1}`,
//         "outgoing"
//       )
//   ),
// ];


// const pcc4Circuits = [
//   makePccCircuit("pcc4", "lt3-in", "LT3 IN", "incoming"),
//   makePccCircuit("pcc4", "dg567-in", "DG5-7 IN", "incoming"),

//   ...Array.from(
//     { length: 10 },
//     (_, index) =>
//       makePccCircuit(
//         "pcc4",
//         `og-${index + 1}`,
//         `OG ${index + 1}`,
//         "outgoing"
//       )
//   ),
// ];


// /* =========================================================
//    TOPOLOGY
// ========================================================= */

// export const flowTopology = {

//   source: {
//     id: "source",
//     title: "33 kV Source",
//     subtitle: "Incoming HT Source & Metering",
//     layout: "grid",
//     category: "electrical",

//     equipment: [
//       electrical(
//         "source-inc1",
//         "INC1",
//         "Primary Incoming Feeder",
//         "incomer"
//       ),
//       electrical(
//         "source-out",
//         "OUT",
//         "Outgoing Busbar",
//         "busbar"
//       ),
//       electrical(
//         "source-inc2",
//         "INC2",
//         "Secondary Incoming Feeder",
//         "incomer"
//       ),
//       electrical(
//         "source-meter",
//         "Metering Unit",
//         "33 kV Energy Monitoring Meter",
//         "meter"
//       ),
//     ],
//   },


//   feeder: {
//     id: "feeder",
//     title: "33 kV Feeder Panel",
//     subtitle: "1 Incoming / 6 Outgoing Feeders",
//     layout: "feeder",
//     category: "electrical",

//     incoming: electrical(
//       "feeder-in-1",
//       "Incoming Feeder 1",
//       "33 kV Feeder Incoming",
//       "incomer"
//     ),

//     equipment: Array.from(
//       { length: 6 },
//       (_, index) =>
//         electrical(
//           `feeder-og-${index + 1}`,
//           `OG-${index + 1}`,
//           `Outgoing Feeder → TR-${index + 1}`,
//           "feeder"
//         )
//     ),
//   },


//   transformer: {
//     id: "transformer",
//     title: "Transformers",
//     subtitle: "33 kV / 433 V Step-Down Transformers",
//     layout: "parallel",
//     category: "transformer",

//     equipment: Array.from(
//       { length: 6 },
//       (_, index) =>
//         electrical(
//           `transformer-${index + 1}`,
//           `TR-${index + 1}`,
//           "33 kV / 433 V Transformer",
//           "transformer"
//         )
//     ),
//   },


//   "lt-kiosk": {
//     id: "lt-kiosk",
//     title: "LT Kiosk",
//     subtitle: "433 V LT Distribution Panels",
//     layout: "parallel",
//     category: "electrical",

//     equipment: Array.from(
//       { length: 6 },
//       (_, index) =>
//         electrical(
//           `kiosk-${index + 1}`,
//           `KIOSK-${index + 1}`,
//           "433 V LT Kiosk",
//           "kiosk"
//         )
//     ),
//   },


//   busduct: {
//     id: "busduct",
//     title: "LT Busduct / Busbar",
//     subtitle: "Busbar Condition Monitoring",
//     layout: "parallel",
//     category: "busduct",

//     equipment: Array.from(
//       { length: 6 },
//       (_, index) =>
//         electrical(
//           `bus-${index + 1}`,
//           `BUS-${index + 1}`,
//           "LT Busduct / Busbar",
//           "busduct"
//         )
//     ),
//   },


//   pcc: {
//     id: "pcc",
//     title: "Power Control Centre",
//     subtitle: "PCC 1–4 Incomings, Outgoings & Bus Couplers",
//     layout: "pcc",
//     category: "pcc",

//     panels: [
//       {
//         id: "pcc-1",
//         name: "PCC 1",
//         label: "Wing A",
//         circuits: pcc1Circuits,
//       },
//       {
//         id: "pcc-2",
//         name: "PCC 2",
//         label: "Wing B",
//         circuits: pcc2Circuits,
//       },
//       {
//         id: "pcc-3",
//         name: "PCC 3",
//         label: "Chillers",
//         circuits: pcc3Circuits,
//       },
//       {
//         id: "pcc-4",
//         name: "PCC 4",
//         label: "Chillers",
//         circuits: pcc4Circuits,
//       },
//     ],
//   },


//   ups: {
//     id: "ups",
//     title: "UPS",
//     subtitle: "Uninterruptible Power Supply",
//     layout: "parallel",
//     category: "ups",

//     equipment: [
//       electrical(
//         "ups-30-1",
//         "30kVA-1",
//         "30 kVA UPS",
//         "ups"
//       ),
//       electrical(
//         "ups-30-2",
//         "30kVA-2",
//         "30 kVA UPS",
//         "ups"
//       ),
//       electrical(
//         "ups-10-1",
//         "10kVA-1",
//         "10 kVA UPS",
//         "ups"
//       ),
//       electrical(
//         "ups-10-2",
//         "10kVA-2",
//         "10 kVA UPS",
//         "ups"
//       ),
//     ],
//   },


//   "raising-main": {
//     id: "raising-main",
//     title: "Raising Main",
//     subtitle: "Vertical Building Power Distribution",
//     layout: "parallel",
//     category: "electrical",

//     equipment: Array.from(
//       { length: 4 },
//       (_, index) =>
//         electrical(
//           `rm-${index + 1}`,
//           `Raising Main ${index + 1}`,
//           index < 2
//             ? "Wing A Vertical Distribution"
//             : "Wing B Vertical Distribution",
//           "raising-main"
//         )
//     ),
//   },


//   wing: {
//     id: "wing",
//     title: "Building Wings",
//     subtitle: "Wing-Level Electrical Monitoring",
//     layout: "parallel",
//     category: "wing",

//     equipment: [
//       electrical(
//         "wing-a",
//         "Wing A",
//         "20 Floors",
//         "wing"
//       ),
//       electrical(
//         "wing-b",
//         "Wing B",
//         "20 Floors",
//         "wing"
//       ),
//     ],
//   },


//   dg: {
//     id: "dg",
//     title: "Diesel Generator Plant",
//     subtitle: "Emergency / Standby Generation",
//     layout: "parallel",
//     category: "dg",

//     equipment: Array.from(
//       { length: 7 },
//       (_, index) =>
//         electrical(
//           `dg-${index + 1}`,
//           `DG-${index + 1}`,
//           index < 4
//             ? "1500 kVA GENSET"
//             : "1250 kVA GENSET",
//           "dg"
//         )
//     ),
//   },


//   hvac: {
//     id: "hvac",
//     title: "HVAC",
//     subtitle: "HVAC Cooling Plant",
//     layout: "empty",
//     category: "electrical",
//     equipment: [],
//   },


//   wtp: {
//     id: "wtp",
//     title: "Water Management",
//     subtitle: "Water, STP, WTP & Tank Monitoring",
//     layout: "water",
//     category: "water",

//     equipment: [
//       {
//         id: "water-management",
//         name: "Water Management",
//         label: "Central Water Monitoring",
//         type: "water-main",
//       },
//       {
//         id: "stp",
//         name: "STP",
//         label: "Sewage Treatment Plant",
//         type: "stp",
//       },
//       {
//         id: "wtp",
//         name: "WTP",
//         label: "Water Treatment Plant",
//         type: "wtp",
//       },
//       ...Array.from(
//         { length: 4 },
//         (_, index) => ({
//           id: `tank-${index + 1}`,
//           name: `Tank Level-${index + 1}`,
//           label: "Water Storage Tank",
//           type: "tank",
//         })
//       ),
//     ],
//   },


//   fire: {
//     id: "fire",
//     title: "Fire & Life Safety",
//     subtitle: "Fire Alarm, Fire Fighting & Pump Monitoring",
//     layout: "parallel",
//     category: "fire",

//     equipment: [
//       {
//         id: "fire-alarms",
//         name: "Fire Alarms",
//         label: "Detection & Alarm System",
//         type: "fire-alarm",
//       },
//       {
//         id: "fire-fighting",
//         name: "Fire Fighting",
//         label: "Hydrant & Sprinkler System",
//         type: "fire-fighting",
//       },
//       {
//         id: "fire-pump",
//         name: "Fire Pump",
//         label: "Fire Pump System",
//         type: "fire-pump",
//       },
//     ],
//   },
// };


// /* =========================================================
//    TRANSFORMER DATA
// ========================================================= */

// const transformerValues = [
//   [54, 61, 68],
//   [52, 59, 62],
//   [55, 60, 71],
//   [53, 58, 65],
//   [56, 63, 74],
//   [51, 57, 60],
// ];

// const transformerTelemetry = (
//   index
// ) => {
//   const [
//     oilTemp,
//     windingTemp,
//     load,
//   ] =
//     transformerValues[
//       index %
//         transformerValues.length
//     ];

//   return {
//     ...electricalTelemetry(
//       index,
//       433
//     ),

//     status: "ON",
//     health: "HEALTHY",
//     communication: true,

//     kWh:
//       1840 + index * 37,

//     kVAh:
//       1710 + index * 35,

//     voltage: 433,

//     current:
//       245 + (index % 10) * 7,

//     powerFactor:
//       index % 3 === 0
//         ? 0.96
//         : index % 3 === 1
//         ? 0.97
//         : 0.98,

//     oilTemp:
//       oilTemp + Math.floor(index / 6),

//     windingTemp:
//       windingTemp + Math.floor(index / 6),

//     buchholz: "Healthy",
//     buchholzRelay: "Healthy",
//     relay: "Healthy",

//     load,

//     protectionStatus:
//       "Normal",

//     operatingStatus:
//       "Running",

//     fault: false,
//     trip: false,
//     warning: false,
//   };
// };


// /* =========================================================
//    BASE TELEMETRY
// ========================================================= */

// const electricalTelemetry = (
//   index = 0,
//   voltage = 433
// ) => ({
//   status: "ON",
//   health: "HEALTHY",
//   communication: true,

//   kWh: 1245 + index * 18,
//   kVAh: 1180 + index * 15,

//   voltage,
//   current: 210 + index * 4,

//   powerFactor:
//     index % 2 === 0
//       ? 0.98
//       : 0.97,

//   load: 62 + (index % 5) * 4,

//   fault: false,
//   trip: false,
//   warning: false,
// });


// /* =========================================================
//    DEMO TELEMETRY
// ========================================================= */

// export const demoTelemetry = {

//   /* SOURCE — old BMS values */

//   "source-inc1": {
//     ...electricalTelemetry(0, 33),
//     kWh: 1280,
//     kVAh: 1195,
//     current: 420,
//     powerFactor: 0.98,
//     load: 78,
//     healthScore: 94,
//     operatingStatus: "Stable",
//   },

//   "source-out": {
//     ...electricalTelemetry(1, 33),
//     kWh: 1560,
//     kVAh: 1430,
//     current: 460,
//     powerFactor: 0.99,
//     load: 86,
//     healthScore: 96,
//     operatingStatus: "Stable",
//   },

//   "source-inc2": {
//     ...electricalTelemetry(2, 33),
//     kWh: 1110,
//     kVAh: 1020,
//     current: 390,
//     powerFactor: 0.97,
//     load: 72,
//     healthScore: 92,
//     operatingStatus: "Stable",
//   },

//   "source-meter": {
//     ...electricalTelemetry(3, 33),
//     kWh: 1420,
//     kVAh: 1300,
//     current: 435,
//     powerFactor: 0.98,
//     load: 81,
//     healthScore: 95,
//     operatingStatus: "Stable",
//   },

//   ...Object.fromEntries(
//     Array.from(
//       {
//         length: 20,
//       },
//       (_, index) => [
//         `source-inc${index + 1}`,
//         {
//           ...electricalTelemetry(
//             index,
//             33
//           ),
//           load:
//             64 +
//             (index * 5) % 28,
//           healthScore:
//             90 +
//             (index % 8),
//           operatingStatus:
//             "Stable",
//         },
//       ]
//     )
//   ),

//   ...Object.fromEntries(
//     Array.from(
//       {
//         length: 30,
//       },
//       (_, index) => [
//         index === 0
//           ? "source-out"
//           : `source-out-${index + 1}`,
//         {
//           ...electricalTelemetry(
//             index + 20,
//             33
//           ),
//           load:
//             58 +
//             (index * 4) % 34,
//           healthScore:
//             89 +
//             (index % 9),
//           operatingStatus:
//             "Stable",
//         },
//       ]
//     )
//   ),

//   ...Object.fromEntries(
//     Array.from(
//       {
//         length: 20,
//       },
//       (_, index) => [
//         index === 0
//           ? "source-meter"
//           : `source-meter-${index + 1}`,
//         {
//           ...electricalTelemetry(
//             index + 50,
//             33
//           ),
//           healthScore:
//             92 +
//             (index % 6),
//           operatingStatus:
//             "Stable",
//         },
//       ]
//     )
//   ),


//   /* FEEDER */

// /* =====================================================
//    FEEDER DEMO TELEMETRY

//    Generate enough demo telemetry for the maximum
//    Super Admin feeder configuration.

//    Project topology still decides how many feeders
//    are actually displayed.
// ===================================================== */


// /* INCOMING FEEDERS */

// ...Object.fromEntries(
//   Array.from(
//     { length: 20 },
//     (_, index) => [
//       `feeder-in-${index + 1}`,

//       {
//         ...electricalTelemetry(
//           index,
//           33
//         ),

//         current:
//           Math.max(
//             260,
//             432 - index * 6
//           ),

//         direction:
//           "incoming",

//         feederNumber:
//           index + 1,

//         operatingStatus:
//           "Stable",
//       },
//     ]
//   )
// ),


// /* OUTGOING FEEDERS */

// ...Object.fromEntries(
//   Array.from(
//     { length: 30 },
//     (_, index) => [
//       `feeder-og-${index + 1}`,

//       {
//         ...electricalTelemetry(
//           index + 1,
//           33
//         ),

//         current:
//           Math.max(
//             120,
//             390 - index * 9
//           ),

//         direction:
//           "outgoing",

//         feederNumber:
//           index + 1,

//         operatingStatus:
//           "Stable",
//       },
//     ]
//   )
// ),

//   ...Object.fromEntries(
//     Array.from(
//       { length: 6 },
//       (_, index) => [
//         `feeder-og-${index + 1}`,
//         {
//           ...electricalTelemetry(
//             index + 1,
//             33
//           ),
//           current:
//             390 - index * 13,
//         },
//       ]
//     )
//   ),


//   /* TRANSFORMERS */

//   ...Object.fromEntries(
//     Array.from(
//       {
//         length: 30,
//       },
//       (_, index) => [
//         `transformer-${index + 1}`,
//         transformerTelemetry(index),
//       ]
//     )
//   ),


//   /* LT KIOSK */

//   ...Object.fromEntries(
//     Array.from(
//       { length: 30 },
//       (_, index) => [
//         `kiosk-${index + 1}`,
//         {
//           ...electricalTelemetry(
//             index,
//             433
//           ),

//           operatingStatus:
//             "Stable",
//         },
//       ]
//     )
//   ),


//   /* BUSDUCT */

//   ...Object.fromEntries(
//     Array.from(
//       { length: 30 },
//       (_, index) => [
//         `bus-${index + 1}`,
//         {
//           status: "ON",
//           health: "HEALTHY",
//           communication: true,

//           temperature:
//             38 + index,

//           vibration:
//             Number(
//               (
//                 1.2 +
//                 index * 0.1
//               ).toFixed(1)
//             ),

//           voltage: 433,
//           load:
//             61 + index * 2,

//           fault: false,
//           trip: false,
//           warning: false,
//         },
//       ]
//     )
//   ),


//   /* PCC PANELS */

//   ...Object.fromEntries(
//     Array.from(
//       { length: 20 },
//       (_, index) => [
//         `pcc-${index + 1}`,
//         {
//           ...electricalTelemetry(
//             index,
//             433
//           ),

//           panelNumber:
//             index + 1,

//           operatingStatus:
//             "Running",
//         },
//       ]
//     )
//   ),


//   /* UPS */

//   "ups-30-1": {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,

//     capacity: "30 kVA",
//     inputVoltage: 433,
//     outputVoltage: 230,
//     load: 62,
//     battery: 96,
//     inputFrequency: 50,
//     outputFrequency: 50,
//     batteryVoltage: 216,
//     backupTime: "42 min",
//     mode: "ONLINE",

//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   "ups-30-2": {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,

//     capacity: "30 kVA",
//     inputVoltage: 433,
//     outputVoltage: 230,
//     load: 58,
//     battery: 94,
//     inputFrequency: 50,
//     outputFrequency: 50,
//     batteryVoltage: 215,
//     backupTime: "45 min",
//     mode: "ONLINE",

//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   "ups-10-1": {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,

//     capacity: "10 kVA",
//     inputVoltage: 433,
//     outputVoltage: 230,
//     load: 48,
//     battery: 97,
//     inputFrequency: 50,
//     outputFrequency: 50,
//     batteryVoltage: 216,
//     backupTime: "56 min",
//     mode: "ONLINE",

//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   "ups-10-2": {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,

//     capacity: "10 kVA",
//     inputVoltage: 433,
//     outputVoltage: 230,
//     load: 45,
//     battery: 95,
//     inputFrequency: 50,
//     outputFrequency: 50,
//     batteryVoltage: 215,
//     backupTime: "59 min",
//     mode: "ONLINE",

//     fault: false,
//     trip: false,
//     warning: false,
//   },


//   /* RAISING MAIN */

//   ...Object.fromEntries(
//     Array.from(
//       { length: 20 },
//       (_, index) => [
//         `rm-${index + 1}`,
//         electricalTelemetry(
//           index,
//           433
//         ),
//       ]
//     )
//   ),


//   /* WING */

//   ...Object.fromEntries(
//     Array.from(
//       { length: 10 },
//       (_, index) => {
//         const letter =
//           String.fromCharCode(
//             65 + index
//           ).toLowerCase();

//         return [
//           `wing-${letter}`,
//           {
//             ...electricalTelemetry(
//               index,
//               433
//             ),
//             demand:
//               Math.max(
//                 720,
//                 1240 - index * 60
//               ),
//             activeAlarms: 0,
//           },
//         ];
//       }
//     )
//   ),


//   /* DG */

//   ...Object.fromEntries(
//     Array.from(
//       { length: 20 },
//       (_, index) => [
//         `dg-${index + 1}`,
//         {
//           ...electricalTelemetry(
//             index,
//             433
//           ),

//           status:
//             index === 0
//               ? "ON"
//               : "STANDBY",

//           health: "READY",

//           capacity:
//             index < 4
//               ? "1500 kVA"
//               : "1250 kVA",
//         },
//       ]
//     )
//   ),


//   /* HVAC */

//   hvac: {
//     ...electricalTelemetry(
//       0,
//       433
//     ),
//   },

//   ...Object.fromEntries(
//     Array.from(
//       {
//         length: 30,
//       },
//       (_, index) => [
//         `hvac-${index + 1}`,
//         {
//           ...electricalTelemetry(
//             90 + index * 4,
//             415
//           ),
//           status:
//             index % 9 === 0
//               ? "STANDBY"
//               : "ON",
//           health:
//             index % 11 === 0
//               ? "CHECK"
//               : "HEALTHY",
//         },
//       ]
//     )
//   ),


//   /* WATER */

//   "water-management": {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,

//     flowRate: 148,
//     totalWater: 72,
//     pressure: 3.2,

//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   stp: {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,

//     inletFlow: 82,
//     outletFlow: 76,
//     ph: 7.2,
//     turbidity: 2.4,

//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   wtp: {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,

//     inletFlow: 96,
//     outletFlow: 91,
//     ph: 7.1,
//     turbidity: 1.8,

//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   "tank-1": {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,
//     level: 78,
//     volume: 42,
//     inletFlow: 18,
//     outletFlow: 14,
//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   "tank-2": {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,
//     level: 66,
//     volume: 36,
//     inletFlow: 15,
//     outletFlow: 12,
//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   "tank-3": {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,
//     level: 83,
//     volume: 45,
//     inletFlow: 19,
//     outletFlow: 16,
//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   "tank-4": {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,
//     level: 59,
//     volume: 31,
//     inletFlow: 14,
//     outletFlow: 11,
//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   ...Object.fromEntries(
//     Array.from(
//       {
//         length: 20,
//       },
//       (_, index) => {
//         const tankNumber =
//           index + 1;

//         return [
//           `tank-${tankNumber}`,
//           {
//             status: "ON",
//             health: "HEALTHY",
//             communication: true,
//             level:
//               54 +
//               (index * 7) % 35,
//             volume:
//               28 +
//               (index * 5) % 24,
//             inletFlow:
//               12 +
//               (index * 3) % 10,
//             outletFlow:
//               10 +
//               (index * 2) % 9,
//             fault: false,
//             trip: false,
//             warning: false,
//           },
//         ];
//       }
//     )
//   ),


//   /* FIRE */

//   "fire-alarms": {
//     status: "ON",
//     health: "NORMAL",
//     communication: true,

//     smokeDetectors: 128,
//     heatDetectors: 64,
//     alarmZones: 12,
//     activeAlarms: 0,

//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   "fire-fighting": {
//     status: "ON",
//     health: "NORMAL",
//     communication: true,

//     pressure: 7.2,
//     hydrantNetwork: "NORMAL",
//     sprinklerNetwork: "NORMAL",
//     mainValve: "OPEN",

//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   "fire-pump": {
//     status: "STANDBY",
//     health: "READY",
//     communication: true,

//     voltage: 415,
//     pressure: 7.4,
//     mode: "AUTO",
//     pumpState: "STANDBY",

//     fault: false,
//     trip: false,
//     warning: false,
//   },
// };


// /* =========================================================
//    PCC TELEMETRY
// ========================================================= */

// [
//   ...pcc1Circuits,
//   ...pcc2Circuits,
//   ...pcc3Circuits,
//   ...pcc4Circuits,
// ].forEach(
//   (circuit, index) => {
//     demoTelemetry[circuit.id] = {
//       ...electricalTelemetry(
//         index,
//         433
//       ),

//       breakerState:
//         circuit.direction ===
//         "coupler"
//           ? "OPEN"
//           : "CLOSED",

//       direction:
//         circuit.direction,

//       section:
//         circuit.section,
//     };
//   }
// );


// /* =========================================================
//    FLATTEN ALL EQUIPMENT
// ========================================================= */

// /* =========================================================
//    FLATTEN ALL EQUIPMENT
// ========================================================= */

// export function getTopologyEquipment(
//   topology
// ) {
//   if (!topology) {
//     return [];
//   }

//   /* =====================================================
//      PCC

//      PCC has panels, and every panel contains circuits.
//   ===================================================== */

//   if (topology.layout === "pcc") {
//     return Array.isArray(
//       topology.panels
//     )
//       ? topology.panels.flatMap(
//           (panel) =>
//             Array.isArray(
//               panel.circuits
//             )
//               ? panel.circuits
//               : []
//         )
//       : [];
//   }


//   /* =====================================================
//      FEEDER

//      New dynamic feeder topology supports:
//      - multiple incoming feeders
//      - multiple outgoing feeders

//      Also supports the old structure as a fallback.
//   ===================================================== */

//   if (topology.id === "feeder") {
//     const incomingFeeders =
//       Array.isArray(
//         topology.incomingFeeders
//       )
//         ? topology.incomingFeeders
//         : topology.incoming
//         ? [topology.incoming]
//         : [];


//     const outgoingFeeders =
//       Array.isArray(
//         topology.outgoingFeeders
//       )
//         ? topology.outgoingFeeders
//         : Array.isArray(
//             topology.equipment
//           )
//         ? topology.equipment
//         : [];


//     return [
//       ...incomingFeeders,
//       ...outgoingFeeders,
//     ];
//   }


//   /* =====================================================
//      ALL OTHER SYSTEMS

//      Preserve compatibility with the existing topology
//      structure.
//   ===================================================== */

//   return [
//     ...(topology.incoming
//       ? [topology.incoming]
//       : []),

//     ...(Array.isArray(
//       topology.equipment
//     )
//       ? topology.equipment
//       : []),
//   ];
// }

// /* =========================================================
//    PROJECT CONFIGURATION GENERATOR

//    Converts a Super Admin project configuration into the
//    topology objects used by Overview / FlowDetail.

//    IMPORTANT:
//    - Existing flowTopology remains the default BMS template.
//    - This function creates project-specific copies.
//    - Existing topology is never mutated.
// ========================================================= */


// /* =========================================================
//    SMALL HELPERS
// ========================================================= */

// const safeCount = (
//   value,
//   fallback = 0,
//   max = 100
// ) => {
//   const parsed = Number(value);

//   if (!Number.isFinite(parsed)) {
//     return fallback;
//   }

//   return Math.max(
//     0,
//     Math.min(
//       max,
//       Math.floor(parsed)
//     )
//   );
// };


// const normalizeVoltage = (
//   value,
//   fallback = "33kV"
// ) => {
//   if (!value) {
//     return fallback;
//   }

//   return String(value)
//     .replace(/\s+/g, "")
//     .replace("KV", "kV")
//     .replace("Kv", "kV")
//     .replace("kv", "kV");
// };


// const cloneTopology = (
//   topology
// ) => {
//   if (!topology) {
//     return null;
//   }

//   return {
//     ...topology,


//     /* OLD SINGLE-INCOMING STRUCTURE */

//     incoming:
//       topology.incoming
//         ? {
//             ...topology.incoming,
//           }
//         : undefined,


//     /* NEW DYNAMIC INCOMING STRUCTURE */

//     incomingFeeders:
//       Array.isArray(
//         topology.incomingFeeders
//       )
//         ? topology.incomingFeeders.map(
//             (item) => ({
//               ...item,
//             })
//           )
//         : undefined,


//     /* NEW DYNAMIC OUTGOING STRUCTURE */

//     outgoingFeeders:
//       Array.isArray(
//         topology.outgoingFeeders
//       )
//         ? topology.outgoingFeeders.map(
//             (item) => ({
//               ...item,
//             })
//           )
//         : undefined,


//     /* STANDARD EQUIPMENT */

//     equipment:
//       Array.isArray(
//         topology.equipment
//       )
//         ? topology.equipment.map(
//             (item) => ({
//               ...item,
//             })
//           )
//         : undefined,


//     /* PCC PANELS */

//     panels:
//       Array.isArray(
//         topology.panels
//       )
//         ? topology.panels.map(
//             (panel) => ({
//               ...panel,

//               circuits:
//                 Array.isArray(
//                   panel.circuits
//                 )
//                   ? panel.circuits.map(
//                       (circuit) => ({
//                         ...circuit,
//                       })
//                     )
//                   : [],
//             })
//           )
//         : undefined,
//   };
// };


// /* =========================================================
//    SOURCE GENERATOR

//    Example Super Admin configuration:

//    {
//      voltageLevel: "33kV",
//      incomingCount: 2,
//      outgoingCount: 1,
//      meterCount: 1,
//      protectionRelay: true,
//      busCoupler: false
//    }
// ========================================================= */

// const buildSourceTopology = (
//   configuration = {}
// ) => {
//   const voltageLevel =
//     normalizeVoltage(
//       configuration.voltageLevel,
//       "33kV"
//     );

//   const incomingCount =
//     safeCount(
//       configuration.incomingCount,
//       2,
//       20
//     );

//   const outgoingCount =
//     safeCount(
//       configuration.outgoingCount,
//       1,
//       30
//     );

//   const meterCount =
//     safeCount(
//       configuration.meterCount,
//       1,
//       20
//     );

//   const protectionRelay =
//     Boolean(
//       configuration.protectionRelay
//     );

//   const busCoupler =
//     Boolean(
//       configuration.busCoupler
//     );

//   const equipment = [];

//   /* =====================================================
//      INCOMING FEEDERS
//   ===================================================== */

//   for (
//     let index = 0;
//     index < incomingCount;
//     index += 1
//   ) {
//     equipment.push(
//       electrical(
//         `source-inc${index + 1}`,

//         `Incoming ${index + 1}`,

//         `${voltageLevel} Incoming Feeder`,

//         "incomer",

//         {
//           voltageLevel,
//           role: "incoming",
//         }
//       )
//     );
//   }

//   /* =====================================================
//      OUTGOING FEEDERS / BUSBARS
//   ===================================================== */

//   for (
//     let index = 0;
//     index < outgoingCount;
//     index += 1
//   ) {
//     equipment.push(
//       electrical(
//         index === 0
//           ? "source-out"
//           : `source-out-${index + 1}`,

//         `Outgoing ${index + 1}`,

//         `${voltageLevel} Outgoing Feeder`,

//         "busbar",

//         {
//           voltageLevel,
//           role: "outgoing",
//         }
//       )
//     );
//   }

//   /* =====================================================
//      ENERGY METERS
//   ===================================================== */

//   for (
//     let index = 0;
//     index < meterCount;
//     index += 1
//   ) {
//     equipment.push(
//       electrical(
//         index === 0
//           ? "source-meter"
//           : `source-meter-${index + 1}`,

//         `Meter ${index + 1}`,

//         `${voltageLevel} Energy Monitoring Meter`,

//         "meter",

//         {
//           voltageLevel,
//           role: "meter",
//         }
//       )
//     );
//   }

//   /* =====================================================
//      IMPORTANT

//      Protection Relay and Bus Coupler are intentionally
//      NOT added to equipment[].

//      They are capabilities/configuration of the Source
//      system until a verified visual topology is defined
//      for them.
//   ===================================================== */

//   return {
//     id: "source",

//     title:
//       `${voltageLevel} Source`,

//     subtitle:
//       `${incomingCount} Incoming / ` +
//       `${outgoingCount} Outgoing / ` +
//       `${meterCount} Meter${
//         meterCount === 1
//           ? ""
//           : "s"
//       }`,

//     layout: "grid",

//     category: "electrical",

//     voltageLevel,

//     configuration: {
//       ...configuration,

//       voltageLevel,
//       incomingCount,
//       outgoingCount,
//       meterCount,

//       protectionRelay,
//       busCoupler,
//     },

//     equipment,
//   };
// };


// /* =========================================================
//    FEEDER GENERATOR

//    This is prepared now so the architecture supports it.

//    Future Super Admin configuration:

//    {
//      voltageLevel: "33kV",
//      incomingCount: 1,
//      outgoingCount: 6
//    }
// ========================================================= */

// const buildFeederTopology = (
//   configuration = {}
// ) => {
//   const voltageLevel =
//     normalizeVoltage(
//       configuration.voltageLevel,
//       "33kV"
//     );

//   /*
//     These are project-specific quantities.

//     1 incoming / 6 outgoing are only defaults.
//     They are NOT platform restrictions.
//   */

//   const incomingCount =
//     safeCount(
//       configuration.incomingCount,
//       1,
//       20
//     );

//   const outgoingCount =
//     safeCount(
//       configuration.outgoingCount,
//       6,
//       30
//     );


//   /* =====================================================
//      INCOMING FEEDERS
//   ===================================================== */

//   const incomingFeeders =
//     Array.from(
//       {
//         length: incomingCount,
//       },

//       (_, index) =>
//         electrical(
//           `feeder-in-${index + 1}`,

//           incomingCount === 1
//             ? "Incoming Feeder"
//             : `Incoming Feeder ${index + 1}`,

//           `${voltageLevel} Incoming Feeder`,

//           "incomer",

//           {
//             voltageLevel,
//             direction: "incoming",
//             feederNumber:
//               index + 1,
//           }
//         )
//     );


//   /* =====================================================
//      OUTGOING FEEDERS
//   ===================================================== */

//   const outgoingFeeders =
//     Array.from(
//       {
//         length: outgoingCount,
//       },

//       (_, index) =>
//         electrical(
//           `feeder-og-${index + 1}`,

//           `OG-${index + 1}`,

//           `Outgoing Feeder ${index + 1}`,

//           "feeder",

//           {
//             voltageLevel,
//             direction: "outgoing",
//             feederNumber:
//               index + 1,
//           }
//         )
//     );


//   /* =====================================================
//      RETURN PROJECT FEEDER TOPOLOGY
//   ===================================================== */

//   return {
//     id: "feeder",

//     title:
//       `${voltageLevel} Feeder Panel`,

//     subtitle:
//       `${incomingCount} Incoming / ` +
//       `${outgoingCount} Outgoing Feeders`,

//     layout: "feeder",

//     category: "electrical",

//     voltageLevel,

//     configuration: {
//       ...configuration,

//       voltageLevel,
//       incomingCount,
//       outgoingCount,
//     },

//     /*
//       New dynamic structure.
//     */

//     incomingFeeders,
//     outgoingFeeders,

//     /*
//       Keep these aliases temporarily for compatibility
//       with any existing code that still reads
//       topology.incoming or topology.equipment.

//       topology.incoming:
//       first incoming feeder for old code.

//       topology.equipment:
//       outgoing feeders for getTopologyEquipment()
//       and existing telemetry/navigation logic.
//     */

//     incoming:
//       incomingFeeders[0] || null,

//     equipment:
//       outgoingFeeders,
//   };
// };

// /* =========================================================
//    GENERIC PARALLEL EQUIPMENT GENERATOR
// ========================================================= */

// const buildParallelEquipment = ({
//   systemId,
//   title,
//   subtitle,
//   category,
//   count,
//   equipmentIdPrefix,
//   equipmentNamePrefix,
//   labelBuilder,
//   type,
//   configuration,
// }) => ({
//   id: systemId,

//   title,

//   subtitle,

//   layout: "parallel",

//   category,

//   configuration,

//   equipment:
//     Array.from(
//       {
//         length: count,
//       },

//       (_, index) =>
//         electrical(
//           `${equipmentIdPrefix}-${
//             index + 1
//           }`,

//           `${equipmentNamePrefix}-${
//             index + 1
//           }`,

//           labelBuilder(index),

//           type
//         )
//     ),
// });


// /* =========================================================
//    TRANSFORMER GENERATOR
// ========================================================= */

// const buildTransformerTopology = (
//   configuration = {}
// ) => {
//   const count =
//     safeCount(
//       configuration.count,
//       6,
//       30
//     );

//   const primaryVoltage =
//     normalizeVoltage(
//       configuration.primaryVoltage,
//       "33kV"
//     );

//   const secondaryVoltage =
//     configuration.secondaryVoltage ||
//     "433V";

//   return buildParallelEquipment({
//     systemId: "transformer",

//     title: "Transformers",

//     subtitle:
//       `${primaryVoltage} / ` +
//       `${secondaryVoltage} ` +
//       "Step-Down Transformers",

//     category: "transformer",

//     count,

//     equipmentIdPrefix:
//       "transformer",

//     equipmentNamePrefix:
//       "TR",

//     labelBuilder: () =>
//       `${primaryVoltage} / ` +
//       `${secondaryVoltage} Transformer`,

//     type: "transformer",

//     configuration: {
//       ...configuration,

//       count,
//       primaryVoltage,
//       secondaryVoltage,
//     },
//   });
// };


// /* =========================================================
//    LT KIOSK GENERATOR
// ========================================================= */

// const buildLtKioskTopology = (
//   configuration = {}
// ) => {
//   const count =
//     safeCount(
//       configuration.count,
//       6,
//       30
//     );

//   const voltage =
//     configuration.voltage ||
//     "433V";

//   return buildParallelEquipment({
//     systemId: "lt-kiosk",

//     title: "LT Kiosk",

//     subtitle:
//       `${voltage} LT Distribution Panels`,

//     category: "electrical",

//     count,

//     equipmentIdPrefix:
//       "kiosk",

//     equipmentNamePrefix:
//       "KIOSK",

//     labelBuilder: () =>
//       `${voltage} LT Kiosk`,

//     type: "kiosk",

//     configuration: {
//       ...configuration,

//       count,
//       voltage,
//     },
//   });
// };


// /* =========================================================
//    BUSDUCT GENERATOR
// ========================================================= */

// const buildBusductTopology = (
//   configuration = {}
// ) => {
//   const count =
//     safeCount(
//       configuration.count,
//       6,
//       30
//     );

//   return buildParallelEquipment({
//     systemId: "busduct",

//     title:
//       "LT Busduct / Busbar",

//     subtitle:
//       "Busbar Condition Monitoring",

//     category: "busduct",

//     count,

//     equipmentIdPrefix:
//       "bus",

//     equipmentNamePrefix:
//       "BUS",

//     labelBuilder: () =>
//       "LT Busduct / Busbar",

//     type: "busduct",

//     configuration: {
//       ...configuration,

//       count,
//     },
//   });
// };


// /* =========================================================
//    RAISING MAIN GENERATOR
// ========================================================= */

// const buildRaisingMainTopology = (
//   configuration = {}
// ) => {
//   const count =
//     safeCount(
//       configuration.count,
//       4,
//       20
//     );

//   return buildParallelEquipment({
//     systemId: "raising-main",

//     title: "Raising Main",

//     subtitle:
//       "Vertical Building Power Distribution",

//     category: "electrical",

//     count,

//     equipmentIdPrefix:
//       "rm",

//     equipmentNamePrefix:
//       "Raising Main",

//     labelBuilder: (
//       index
//     ) =>
//       index < 2
//         ? "Wing A Vertical Distribution"
//         : index < 4
//         ? "Wing B Vertical Distribution"
//         : "Configured Vertical Distribution",

//     type: "raising-main",

//     configuration: {
//       ...configuration,

//       count,
//     },
//   });
// };


// /* =========================================================
//    WING GENERATOR
// ========================================================= */

// const buildWingTopology = (
//   configuration = {}
// ) => {
//   const count =
//     safeCount(
//       configuration.count,
//       2,
//       10
//     );

//   const floorsPerWing =
//     safeCount(
//       configuration.floorsPerWing,
//       20,
//       100
//     );

//   const equipment =
//     Array.from(
//       {
//         length: count,
//       },

//       (_, index) => {
//         const letter =
//           String.fromCharCode(
//             65 + index
//           );

//         return electrical(
//           `wing-${letter.toLowerCase()}`,

//           `Wing ${letter}`,

//           `${floorsPerWing} Floors`,

//           "wing"
//         );
//       }
//     );


//   return {
//     id: "wing",

//     title:
//       "Building Wings",

//     subtitle:
//       "Wing-Level Electrical Monitoring",

//     layout:
//       "parallel",

//     category:
//       "wing",

//     configuration: {
//       ...configuration,

//       count,
//       floorsPerWing,
//     },

//     equipment,
//   };
// };


// /* =========================================================
//    DG GENERATOR
// ========================================================= */

// const buildDgTopology = (
//   configuration = {}
// ) => {
//   const units = Array.isArray(configuration.units)
//     ? configuration.units
//     : null;

//   const count = units
//     ? Math.min(20, units.length)
//     : safeCount(configuration.count, 7, 20);

//   const equipment = Array.from({ length: count }, (_, index) => {
//     const unit = units?.[index] || {};
//     const capacity = Number(unit.capacity);
//     const safeCapacity = Number.isFinite(capacity) ? capacity : (index < 4 ? 1500 : 1250);

//     return electrical(
//       unit.id || `dg-${index + 1}`,
//       unit.name || `DG-${index + 1}`,
//       `${safeCapacity} kVA GENSET`,
//       "dg",
//       { capacity: `${safeCapacity} kVA`, unitIndex: index + 1 }
//     );
//   });

//   return {
//     id: "dg",
//     title: "Diesel Generator Plant",
//     subtitle: "Emergency / Standby Generation",
//     layout: count === 0 ? "empty" : "parallel",
//     category: "dg",
//     configuration: { ...configuration, count, units: units || undefined },
//     equipment,
//   };
// };


// /* =========================================================
//    HVAC GENERATOR

//    HVAC = 0 is valid.
//    We do not create fake equipment.
// ========================================================= */

// const buildHvacTopology = (
//   configuration = {}
// ) => {
//   const count =
//     safeCount(
//       configuration.count,
//       0,
//       30
//     );

//   return {
//     id: "hvac",

//     title: "HVAC",

//     subtitle:
//       "HVAC Cooling Plant",

//     layout:
//       count === 0
//         ? "empty"
//         : "parallel",

//     category:
//       "electrical",

//     configuration: {
//       ...configuration,

//       count,
//     },

//     equipment:
//       Array.from(
//         {
//           length: count,
//         },

//         (_, index) =>
//           electrical(
//             `hvac-${index + 1}`,

//             `HVAC-${index + 1}`,

//             "HVAC Equipment",

//             "hvac"
//           )
//       ),
//   };
// };


// /* =========================================================
//    WATER GENERATOR

//    Preserve established Water topology:
//    Water Management
//         ↓
//    STP / WTP / Tanks

//    Tank count can become project-specific.
// ========================================================= */

// const buildWaterTopology = (
//   configuration = {}
// ) => {
//   const stpEnabled =
//     configuration.stpEnabled !==
//     false;

//   const wtpEnabled =
//     configuration.wtpEnabled !==
//     false;

//   const tankCount =
//     safeCount(
//       configuration.tankCount,
//       4,
//       20
//     );


//   const equipment = [
//     {
//       id: "water-management",

//       name:
//         "Water Management",

//       label:
//         "Central Water Monitoring",

//       type:
//         "water-main",
//     },
//   ];

//   if (stpEnabled) {
//     equipment.push({
//       id: "stp",

//       name: "STP",

//       label:
//         "Sewage Treatment Plant",

//       type: "stp",
//     });
//   }

//   if (wtpEnabled) {
//     equipment.push({
//       id: "wtp",

//       name: "WTP",

//       label:
//         "Water Treatment Plant",

//       type: "wtp",
//     });
//   }

//   if (tankCount > 0) {
//     equipment.push(
//       ...Array.from(
//         {
//           length:
//             tankCount,
//         },

//         (_, index) => ({
//           id:
//             `tank-${index + 1}`,

//           name:
//             `Tank Level-${index + 1}`,

//           label:
//             "Water Storage Tank",

//           type:
//             "tank",
//         })
//       )
//     );
//   }


//   return {
//     id: "wtp",

//     title:
//       "Water Management",

//     subtitle:
//       "Water, STP, WTP & Tank Monitoring",

//     layout:
//       "water",

//     category:
//       "water",

//     configuration: {
//       ...configuration,

//       stpEnabled,
//       wtpEnabled,
//       tankCount,
//     },

//     equipment,
//   };
// };


// /* =========================================================
//    FIRE GENERATOR

//    Current established project:
//    - Fire Alarms
//    - Fire Fighting
//    - Fire Pump

//    Do not invent a sequential relationship.
// ========================================================= */

// const buildFireTopology = (
//   configuration = {}
// ) => {
//   const fireAlarms =
//     configuration.fireAlarms !==
//     false;

//   const fireFighting =
//     configuration.fireFighting !==
//     false;

//   const firePump =
//     configuration.firePump !==
//     false;

//   const base =
//     cloneTopology(
//       flowTopology.fire
//     );

//   const enabledIds =
//     new Set(
//       [
//         fireAlarms
//           ? "fire-alarms"
//           : null,
//         fireFighting
//           ? "fire-fighting"
//           : null,
//         firePump
//           ? "fire-pump"
//           : null,
//       ].filter(Boolean)
//     );

//   return {
//     ...base,

//     configuration: {
//       ...configuration,

//       fireAlarms,
//       fireFighting,
//       firePump,
//     },

//     equipment:
//       base.equipment.filter(
//         (item) =>
//           enabledIds.has(
//             item.id
//           )
//       ),
//   };
// };


// /* =========================================================
//    PCC GENERATOR

//    PCC topology is currently highly project-specific.

//    We intentionally preserve the verified PCC1–PCC4
//    topology instead of inventing new circuits based
//    only on a panel count.

//    Later Super Admin PCC configuration will use
//    explicit panel/circuit templates.
// ========================================================= */

// const buildPccTopology = (
//   configuration = {}
// ) => {
//   const count =
//     safeCount(
//       configuration.count,
//       4,
//       20
//     );

//   const baseTopology =
//     cloneTopology(
//       flowTopology.pcc
//     );

//   const referencePanels =
//     Array.isArray(
//       baseTopology.panels
//     )
//       ? baseTopology.panels
//       : [];

//   const configuredPanels =
//     Array.isArray(
//       configuration.panels
//     )
//       ? configuration.panels
//       : null;

//   const normalizeConfiguredCircuit = (
//     item,
//     referenceCircuits
//   ) => {
//     /*
//       New project format stores the complete circuit object.
//       Older project format may contain only a circuit ID.
//     */
//     if (
//       typeof item ===
//       "string"
//     ) {
//       const reference =
//         referenceCircuits.find(
//           (circuit) =>
//             circuit.id === item
//         );

//       return reference
//         ? {
//             ...reference,
//             source:
//               "reference",
//           }
//         : null;
//     }

//     if (
//       !item ||
//       typeof item !==
//         "object" ||
//       !item.id
//     ) {
//       return null;
//     }

//     const reference =
//       referenceCircuits.find(
//         (circuit) =>
//           circuit.id ===
//           item.id
//       );

//     if (reference) {
//       return {
//         ...reference,
//         ...item,
//         source:
//           item.source ||
//           "reference",
//       };
//     }

//     /*
//       No reference match means this is building-specific
//       custom PCC equipment. Preserve it exactly instead
//       of discarding it.
//     */
//     const direction =
//       [
//         "incoming",
//         "outgoing",
//         "coupler",
//       ].includes(
//         item.direction
//       )
//         ? item.direction
//         : "outgoing";

//     return {
//       id: item.id,
//       name:
//         item.name ||
//         "Custom Equipment",
//       label:
//         item.label ||
//         (
//           direction ===
//           "incoming"
//             ? "Incoming Circuit"
//             : direction ===
//               "coupler"
//             ? "Bus Coupler"
//             : "Outgoing Circuit"
//         ),
//       type:
//         item.type ||
//         (
//           direction ===
//           "coupler"
//             ? "coupler"
//             : "pcc-circuit"
//         ),
//       direction,
//       section:
//         item.section ||
//         null,
//       source:
//         item.source ||
//         "custom",
//     };
//   };

//   const panels =
//     Array.from(
//       {
//         length: count,
//       },
//       (_, index) => {
//         const panelNumber =
//           index + 1;

//         const expectedId =
//           `pcc-${panelNumber}`;

//         const configuredPanel =
//           configuredPanels?.find(
//             (panel) =>
//               panel?.id ===
//               expectedId
//           ) ||
//           configuredPanels?.[
//             index
//           ];

//         const referencePanel =
//           referencePanels.find(
//             (panel) =>
//               panel?.id ===
//               expectedId
//           ) ||
//           referencePanels[
//             index
//           ];

//         const referenceCircuits =
//           Array.isArray(
//             referencePanel?.circuits
//           )
//             ? referencePanel.circuits
//             : [];

//         /*
//           IMPORTANT SEMANTICS

//           configuredPanel.circuits missing:
//             legacy project -> use reference topology.

//           configuredPanel.circuits = []:
//             user explicitly selected no PCC circuits.

//           configuredPanel.circuits = [...] :
//             use exactly those reference/custom circuits,
//             in exactly the saved order.
//         */
//         const hasCircuitConfiguration =
//           Array.isArray(
//             configuredPanel?.circuits
//           );

//         const circuits =
//           hasCircuitConfiguration
//             ? configuredPanel.circuits
//                 .map((item) =>
//                   normalizeConfiguredCircuit(
//                     item,
//                     referenceCircuits
//                   )
//                 )
//                 .filter(Boolean)
//             : referenceCircuits.map(
//                 (circuit) => ({
//                   ...circuit,
//                   source:
//                     "reference",
//                 })
//               );

//         /*
//           Same explicit semantics for UPS:
//           [] means no UPS.
//           Missing means legacy reference fallback.
//         */
//         const hasUpsConfiguration =
//           Array.isArray(
//             configuredPanel?.upsUnits
//           );

//         const upsUnits =
//           hasUpsConfiguration
//             ? configuredPanel.upsUnits.filter(
//                 Boolean
//               )
//             : panelNumber <= 2
//             ? [
//                 "ups-30-1",
//                 "ups-30-2",
//                 "ups-10-1",
//                 "ups-10-2",
//               ]
//             : [];

//         return {
//           ...(referencePanel ||
//             {}),

//           id:
//             configuredPanel?.id ||
//             referencePanel?.id ||
//             expectedId,

//           name:
//             configuredPanel?.name ||
//             referencePanel?.name ||
//             `PCC ${panelNumber}`,

//           label:
//             configuredPanel?.label ||
//             referencePanel?.label ||
//             "Configured PCC Panel",

//           circuits,

//           equipment:
//             Array.isArray(
//               configuredPanel?.equipment
//             )
//               ? configuredPanel.equipment.filter(
//                   Boolean
//                 )
//               : undefined,

//           upsUnits,
//         };
//       }
//     );

//   return {
//     ...baseTopology,

//     subtitle:
//       `PCC 1-${count} Configured Switchboards`,

//     panels,

//     configuration: {
//       ...configuration,
//       count,
//       panels:
//         configuredPanels ||
//         undefined,
//     },
//   };
// };


// /* =========================================================
//    BUILD ONE PROJECT SYSTEM
// ========================================================= */

// export function buildProjectSystemTopology(
//   projectSystem
// ) {
//   if (!projectSystem) {
//     return null;
//   }


//   const systemId =
//     projectSystem.type ||
//     projectSystem.id;


//   const configuration =
//     projectSystem.configuration ||
//     {};


//   switch (systemId) {

//     case "source":
//       return buildSourceTopology(
//         configuration
//       );


//     case "feeder":
//       return buildFeederTopology(
//         configuration
//       );


//     case "transformer":
//       return buildTransformerTopology(
//         configuration
//       );


//     case "lt-kiosk":
//       return buildLtKioskTopology(
//         configuration
//       );


//     case "busduct":
//       return buildBusductTopology(
//         configuration
//       );


//     case "pcc":
//       return buildPccTopology(
//         configuration
//       );


//     case "raising-main":
//       return buildRaisingMainTopology(
//         configuration
//       );


//     case "wing":
//       return buildWingTopology(
//         configuration
//       );


//     case "dg":
//       return buildDgTopology(
//         configuration
//       );


//     case "hvac":
//       return buildHvacTopology(
//         configuration
//       );


//     case "wtp":
//       return buildWaterTopology(
//         configuration
//       );


//     case "fire":
//       return buildFireTopology(
//         configuration
//       );


//     default:
//       /*
//         Unknown project system.

//         Do not invent topology.
//       */
//       return null;
//   }
// }


// /* =========================================================
//    BUILD ALL TOPOLOGIES FOR ONE PROJECT

//    Example:

//    const projectFlows =
//      buildProjectFlowConfigs(project);

//    projectFlows.source
//    projectFlows.transformer
//    projectFlows.dg
// ========================================================= */

// export function buildProjectFlowConfigs(
//   project
// ) {
//   if (
//     !project ||
//     !Array.isArray(
//       project.systems
//     )
//   ) {
//     return flowTopology;
//   }


//   return Object.fromEntries(
//     project.systems
//       .map(
//         (
//           projectSystem
//         ) => {
//           const topology =
//             buildProjectSystemTopology(
//               projectSystem
//             );


//           if (!topology) {
//             return null;
//           }


//           return [
//             topology.id,
//             topology,
//           ];
//         }
//       )
//       .filter(Boolean)
//   );
// }


// /* =========================================================
//    GET ONE TOPOLOGY

//    This will be useful inside FlowDetail.jsx.

//    No project:
//       original flowTopology

//    Project:
//       generated project topology
// ========================================================= */

// export function getProjectTopology(
//   project,
//   systemId
// ) {
//   if (!systemId) {
//     return null;
//   }


//   if (
//     !project ||
//     !Array.isArray(
//       project.systems
//     )
//   ) {
//     return (
//       flowTopology[
//         systemId
//       ] || null
//     );
//   }


//   const projectSystem =
//     project.systems.find(
//       (system) =>
//         (
//           system.type ||
//           system.id
//         ) === systemId
//     );


//   if (!projectSystem) {
//     return null;
//   }


//   return buildProjectSystemTopology(
//     projectSystem
//   );
// }


// /* =========================================================
//    PROJECT-AWARE OVERVIEW CATEGORIES

//    This allows Overview to receive the correct:
//    - selected systems
//    - Source voltage
//    - equipment counts
//    - HVAC NOT CONFIGURED state
// ========================================================= */

// export function buildProjectFlowCategories(
//   project
// ) {
//   if (
//     !project ||
//     !Array.isArray(
//       project.systems
//     )
//   ) {
//     return flowCategories;
//   }


//   const projectTopologies =
//     buildProjectFlowConfigs(
//       project
//     );


//   return project.systems
//     .map(
//       (
//         projectSystem
//       ) => {
//         const systemId =
//           projectSystem.type ||
//           projectSystem.id;


//         const baseCategory =
//           flowCategories.find(
//             (category) =>
//               category.id ===
//               systemId
//           );


//         const topology =
//           projectTopologies[
//             systemId
//           ];


//         if (
//           !baseCategory ||
//           !topology
//         ) {
//           return null;
//         }


//         const configuration =
//           projectSystem.configuration ||
//           {};


//         const category = {
//           ...baseCategory,

//           projectSystem,

//           configuration,
//         };


//         /* SOURCE */

//         if (
//           systemId ===
//           "source"
//         ) {
//           const voltage =
//             normalizeVoltage(
//               configuration.voltageLevel,
//               "33kV"
//             );


//           category.shortName =
//             `${voltage} Source`;

//           category.value =
//             voltage;
//         }


//         /* FEEDER */

//         if (
//           systemId ===
//           "feeder"
//         ) {
//           const incomingCount =
//             safeCount(
//               configuration.incomingCount,
//               1
//             );

//           const outgoingCount =
//             safeCount(
//               configuration.outgoingCount,
//               6
//             );


//           category.value =
//             `${incomingCount} IN / ` +
//             `${outgoingCount} OUT`;
//         }


//         /* TRANSFORMER */

//         if (
//           systemId ===
//           "transformer"
//         ) {
//           const count =
//             topology.equipment?.length ||
//             0;


//           category.value =
//             `${count} Unit${
//               count === 1
//                 ? ""
//                 : "s"
//             }`;
//         }


//         /* LT KIOSK */

//         if (
//           systemId ===
//           "lt-kiosk"
//         ) {
//           const count =
//             topology.equipment?.length ||
//             0;


//           category.value =
//             `${count} Unit${
//               count === 1
//                 ? ""
//                 : "s"
//             }`;
//         }


//         /* BUSDUCT */

//         if (
//           systemId ===
//           "busduct"
//         ) {
//           const count =
//             topology.equipment?.length ||
//             0;


//           category.value =
//             `${count} Busbar${
//               count === 1
//                 ? ""
//                 : "s"
//             }`;
//         }


//         /* PCC */

//         if (
//           systemId ===
//           "pcc"
//         ) {
//           const count =
//             topology.panels?.length ||
//             0;


//           category.value =
//             `${count} Panel${
//               count === 1
//                 ? ""
//                 : "s"
//             }`;
//         }


//         /* RAISING MAIN */

//         if (
//           systemId ===
//           "raising-main"
//         ) {
//           const count =
//             topology.equipment?.length ||
//             0;


//           category.value =
//             `${count} Main${
//               count === 1
//                 ? ""
//                 : "s"
//             }`;
//         }


//         /* WING */

//         if (
//           systemId ===
//           "wing"
//         ) {
//           const count =
//             topology.equipment?.length ||
//             0;


//           category.value =
//             `${count} Wing${
//               count === 1
//                 ? ""
//                 : "s"
//             }`;
//         }


//         /* DG */

//         if (
//           systemId ===
//           "dg"
//         ) {
//           const count =
//             topology.equipment?.length ||
//             0;


//           category.value =
//             `${count} DG${
//               count === 1
//                 ? ""
//                 : "s"
//             }`;
//         }


//         /* HVAC */

//         if (
//           systemId ===
//           "hvac"
//         ) {
//           const count =
//             topology.equipment?.length ||
//             0;


//           if (
//             count === 0
//           ) {
//             category.status =
//               "NOT CONFIGURED";

//             category.health =
//               "UNAVAILABLE";

//             category.value =
//               "0 Units";
//           } else {
//             category.status =
//               "ONLINE";

//             category.health =
//               "HEALTHY";

//             category.value =
//               `${count} Unit${
//                 count === 1
//                   ? ""
//                   : "s"
//               }`;
//           }
//         }


//         /* WATER */

//         if (
//           systemId ===
//           "wtp"
//         ) {
//           const tankCount =
//             topology.configuration
//               ?.tankCount ??
//             4;


//           category.value =
//             `${tankCount} Tank${
//               tankCount === 1
//                 ? ""
//                 : "s"
//             }`;
//         }


//         return category;
//       }
//     )
//     .filter(Boolean);
// }







// import {
//   RadioTower,
//   GitBranch,
//   Zap,
//   Network,
//   Cpu,
//   Bolt,
//   Building2,
//   CirclePower,
//   Fan,
//   Droplets,
//   Flame,
//   BatteryCharging,
//   PanelsTopLeft,
// } from "lucide-react";


// /* =========================================================
//    OVERVIEW
// ========================================================= */

// export const flowCategories = [
//   {
//     id: "source",
//     name: "Source",
//     shortName: "33 kV Source",
//     icon: RadioTower,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "33 kV",
//     color: "source",
//   },
//   {
//     id: "feeder",
//     name: "Feeder",
//     shortName: "33 kV Feeder",
//     icon: GitBranch,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "1 IN / 6 OUT",
//     color: "feeder",
//   },
//   {
//     id: "transformer",
//     name: "Transformer",
//     shortName: "33/0.433 kV",
//     icon: Zap,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "6 Units",
//     color: "transformer",
//   },
//   {
//     id: "lt-kiosk",
//     name: "LT Kiosk",
//     shortName: "LT Distribution",
//     icon: PanelsTopLeft,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "6 Units",
//     color: "lt-kiosk",
//   },
//   {
//     id: "busduct",
//     name: "Busduct",
//     shortName: "LT Busduct / Busbar",
//     icon: Network,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "6 Busbars",
//     color: "busduct",
//   },
//   {
//     id: "pcc",
//     name: "PCC",
//     shortName: "Power Control Centre",
//     icon: Cpu,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "4 Panels",
//     color: "pcc",
//   },
//   {
//     id: "ups",
//     name: "UPS",
//     shortName: "UPS Distribution",
//     icon: BatteryCharging,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "4 Units",
//     color: "ups",
//   },
//   {
//     id: "raising-main",
//     name: "Raising Main",
//     shortName: "Vertical Distribution",
//     icon: Bolt,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "4 Mains",
//     color: "raising-main",
//   },
//   {
//     id: "wing",
//     name: "Wing",
//     shortName: "Building Distribution",
//     icon: Building2,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "2 Wings",
//     color: "wing",
//   },
//   {
//     id: "dg",
//     name: "DG",
//     shortName: "Diesel Generator Plant",
//     icon: CirclePower,
//     status: "STANDBY",
//     health: "READY",
//     value: "7 DGs",
//     color: "dg",
//   },
//   {
//     id: "hvac",
//     name: "HVAC",
//     shortName: "HVAC Cooling Plant",
//     icon: Fan,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "Running",
//     color: "hvac",
//   },
//   {
//     id: "wtp",
//     name: "Water Management",
//     shortName: "STP / WTP / Tanks",
//     icon: Droplets,
//     status: "ONLINE",
//     health: "HEALTHY",
//     value: "Normal",
//     color: "wtp",
//   },
//   {
//     id: "fire",
//     name: "Fire",
//     shortName: "Fire & Life Safety",
//     icon: Flame,
//     status: "ONLINE",
//     health: "NORMAL",
//     value: "Normal",
//     color: "fire",
//   },
// ];


// /* =========================================================
//    HELPERS
// ========================================================= */

// const electrical = (
//   id,
//   name,
//   label,
//   type = "electrical",
//   overrides = {}
// ) => ({
//   id,
//   name,
//   label,
//   type,
//   ...overrides,
// });


// const makePccCircuit = (
//   panel,
//   id,
//   name,
//   direction,
//   section = null
// ) => ({
//   id: `${panel}-${id}`,
//   name,
//   label:
//     direction === "incoming"
//       ? "Incoming Circuit"
//       : direction === "coupler"
//       ? "Bus Coupler"
//       : "Outgoing Circuit",
//   type:
//     direction === "coupler"
//       ? "coupler"
//       : "pcc-circuit",
//   direction,
//   section,
// });


// /* =========================================================
//    PCC CIRCUITS
// ========================================================= */

// const pcc1Circuits = [
//   makePccCircuit("pcc1", "lt6-in", "LT6 IN", "incoming", "A"),
//   makePccCircuit("pcc1", "dg1234-in-a", "DG1-4 IN", "incoming", "A"),

//   makePccCircuit("pcc1", "og1", "OG1", "outgoing", "A"),
//   makePccCircuit("pcc1", "rm1-a", "RM1", "outgoing", "A"),
//   makePccCircuit("pcc1", "rm2-a", "RM2", "outgoing", "A"),
//   makePccCircuit("pcc1", "utility1", "Utility 1", "outgoing", "A"),
//   makePccCircuit("pcc1", "spare1", "Spare 1", "outgoing", "A"),

//   makePccCircuit("pcc1", "bus-coupler", "Bus Coupler", "coupler"),

//   makePccCircuit("pcc1", "lt5-in", "LT5 IN", "incoming", "B"),
//   makePccCircuit("pcc1", "dg1234-in-b", "DG1-4 IN", "incoming", "B"),

//   makePccCircuit("pcc1", "rm1-b", "RM1", "outgoing", "B"),
//   makePccCircuit("pcc1", "rm2-b", "RM2", "outgoing", "B"),
//   makePccCircuit("pcc1", "utility2", "Utility 2", "outgoing", "B"),
//   makePccCircuit("pcc1", "spare2", "Spare 2", "outgoing", "B"),
// ];


// const pcc2Circuits = [
//   makePccCircuit("pcc2", "lt1-in", "LT1 IN", "incoming", "A"),
//   makePccCircuit("pcc2", "dg1234-in-a", "DG1-4 IN", "incoming", "A"),

//   makePccCircuit("pcc2", "og1", "OG1", "outgoing", "A"),
//   makePccCircuit("pcc2", "rm1-a", "RM1", "outgoing", "A"),
//   makePccCircuit("pcc2", "rm2-a", "RM2", "outgoing", "A"),
//   makePccCircuit("pcc2", "utility1", "Utility 1", "outgoing", "A"),
//   makePccCircuit("pcc2", "spare1", "Spare 1", "outgoing", "A"),

//   makePccCircuit("pcc2", "bus-coupler", "Bus Coupler", "coupler"),

//   makePccCircuit("pcc2", "lt2-in", "LT2 IN", "incoming", "B"),
//   makePccCircuit("pcc2", "dg1234-in-b", "DG1-4 IN", "incoming", "B"),

//   makePccCircuit("pcc2", "rm1-b", "RM1", "outgoing", "B"),
//   makePccCircuit("pcc2", "rm2-b", "RM2", "outgoing", "B"),
//   makePccCircuit("pcc2", "utility2", "Utility 2", "outgoing", "B"),
//   makePccCircuit("pcc2", "spare2", "Spare 2", "outgoing", "B"),
// ];


// const pcc3Circuits = [
//   makePccCircuit("pcc3", "lt4-in", "LT4 IN", "incoming"),
//   makePccCircuit("pcc3", "dg567-in", "DG5-7 IN", "incoming"),

//   ...Array.from(
//     { length: 10 },
//     (_, index) =>
//       makePccCircuit(
//         "pcc3",
//         `og-${index + 1}`,
//         `OG ${index + 1}`,
//         "outgoing"
//       )
//   ),
// ];


// const pcc4Circuits = [
//   makePccCircuit("pcc4", "lt3-in", "LT3 IN", "incoming"),
//   makePccCircuit("pcc4", "dg567-in", "DG5-7 IN", "incoming"),

//   ...Array.from(
//     { length: 10 },
//     (_, index) =>
//       makePccCircuit(
//         "pcc4",
//         `og-${index + 1}`,
//         `OG ${index + 1}`,
//         "outgoing"
//       )
//   ),
// ];


// /* =========================================================
//    TOPOLOGY
// ========================================================= */

// export const flowTopology = {

//   source: {
//     id: "source",
//     title: "33 kV Source",
//     subtitle: "Incoming HT Source & Metering",
//     layout: "grid",
//     category: "electrical",

//     equipment: [
//       electrical(
//         "source-inc1",
//         "INC1",
//         "Primary Incoming Feeder",
//         "incomer"
//       ),
//       electrical(
//         "source-out",
//         "OUT",
//         "Outgoing Busbar",
//         "busbar"
//       ),
//       electrical(
//         "source-inc2",
//         "INC2",
//         "Secondary Incoming Feeder",
//         "incomer"
//       ),
//       electrical(
//         "source-meter",
//         "Metering Unit",
//         "33 kV Energy Monitoring Meter",
//         "meter"
//       ),
//     ],
//   },


//   feeder: {
//     id: "feeder",
//     title: "33 kV Feeder Panel",
//     subtitle: "1 Incoming / 6 Outgoing Feeders",
//     layout: "feeder",
//     category: "electrical",

//     incoming: electrical(
//       "feeder-in-1",
//       "Incoming Feeder 1",
//       "33 kV Feeder Incoming",
//       "incomer"
//     ),

//     equipment: Array.from(
//       { length: 6 },
//       (_, index) =>
//         electrical(
//           `feeder-og-${index + 1}`,
//           `OG-${index + 1}`,
//           `Outgoing Feeder → TR-${index + 1}`,
//           "feeder"
//         )
//     ),
//   },


//   transformer: {
//     id: "transformer",
//     title: "Transformers",
//     subtitle: "33 kV / 433 V Step-Down Transformers",
//     layout: "parallel",
//     category: "transformer",

//     equipment: Array.from(
//       { length: 6 },
//       (_, index) =>
//         electrical(
//           `transformer-${index + 1}`,
//           `TR-${index + 1}`,
//           "33 kV / 433 V Transformer",
//           "transformer"
//         )
//     ),
//   },


//   "lt-kiosk": {
//     id: "lt-kiosk",
//     title: "LT Kiosk",
//     subtitle: "433 V LT Distribution Panels",
//     layout: "parallel",
//     category: "electrical",

//     equipment: Array.from(
//       { length: 6 },
//       (_, index) =>
//         electrical(
//           `kiosk-${index + 1}`,
//           `KIOSK-${index + 1}`,
//           "433 V LT Kiosk",
//           "kiosk"
//         )
//     ),
//   },


//   busduct: {
//     id: "busduct",
//     title: "LT Busduct / Busbar",
//     subtitle: "Busbar Condition Monitoring",
//     layout: "parallel",
//     category: "busduct",

//     equipment: Array.from(
//       { length: 6 },
//       (_, index) =>
//         electrical(
//           `bus-${index + 1}`,
//           `BUS-${index + 1}`,
//           "LT Busduct / Busbar",
//           "busduct"
//         )
//     ),
//   },


//   pcc: {
//     id: "pcc",
//     title: "Power Control Centre",
//     subtitle: "PCC 1–4 Incomings, Outgoings & Bus Couplers",
//     layout: "pcc",
//     category: "pcc",

//     panels: [
//       {
//         id: "pcc-1",
//         name: "PCC 1",
//         label: "Wing A LT Distribution",
//         circuits: pcc1Circuits,
//       },
//       {
//         id: "pcc-2",
//         name: "PCC 2",
//         label: "Wing A LT Distribution",
//         circuits: pcc2Circuits,
//       },
//       {
//         id: "pcc-3",
//         name: "PCC 3",
//         label: "Wing B LT Distribution",
//         circuits: pcc3Circuits,
//       },
//       {
//         id: "pcc-4",
//         name: "PCC 4",
//         label: "Wing B LT Distribution",
//         circuits: pcc4Circuits,
//       },
//     ],
//   },


//   ups: {
//     id: "ups",
//     title: "UPS",
//     subtitle: "Uninterruptible Power Supply",
//     layout: "parallel",
//     category: "ups",

//     equipment: [
//       electrical(
//         "ups-30-1",
//         "30kVA-1",
//         "30 kVA UPS",
//         "ups"
//       ),
//       electrical(
//         "ups-30-2",
//         "30kVA-2",
//         "30 kVA UPS",
//         "ups"
//       ),
//       electrical(
//         "ups-10-1",
//         "10kVA-1",
//         "10 kVA UPS",
//         "ups"
//       ),
//       electrical(
//         "ups-10-2",
//         "10kVA-2",
//         "10 kVA UPS",
//         "ups"
//       ),
//     ],
//   },


//   "raising-main": {
//     id: "raising-main",
//     title: "Raising Main",
//     subtitle: "Vertical Building Power Distribution",
//     layout: "parallel",
//     category: "electrical",

//     equipment: Array.from(
//       { length: 4 },
//       (_, index) =>
//         electrical(
//           `rm-${index + 1}`,
//           `Raising Main ${index + 1}`,
//           index < 2
//             ? "Wing A Vertical Distribution"
//             : "Wing B Vertical Distribution",
//           "raising-main"
//         )
//     ),
//   },


//   wing: {
//     id: "wing",
//     title: "Building Wings",
//     subtitle: "Wing-Level Electrical Monitoring",
//     layout: "parallel",
//     category: "wing",

//     equipment: [
//       electrical(
//         "wing-a",
//         "Wing A",
//         "20 Floors",
//         "wing"
//       ),
//       electrical(
//         "wing-b",
//         "Wing B",
//         "20 Floors",
//         "wing"
//       ),
//     ],
//   },


//   dg: {
//     id: "dg",
//     title: "Diesel Generator Plant",
//     subtitle: "Emergency / Standby Generation",
//     layout: "parallel",
//     category: "dg",

//     equipment: Array.from(
//       { length: 7 },
//       (_, index) =>
//         electrical(
//           `dg-${index + 1}`,
//           `DG-${index + 1}`,
//           index < 4
//             ? "1500 kVA GENSET"
//             : "1250 kVA GENSET",
//           "dg"
//         )
//     ),
//   },


//   hvac: {
//     id: "hvac",
//     title: "HVAC",
//     subtitle: "HVAC Cooling Plant",
//     layout: "grid",
//     category: "electrical",

//     equipment: [
//       electrical(
//         "hvac",
//         "HVAC",
//         "HVAC Cooling Plant",
//         "hvac"
//       ),
//     ],
//   },


//   wtp: {
//     id: "wtp",
//     title: "Water Management",
//     subtitle: "Water, STP, WTP & Tank Monitoring",
//     layout: "water",
//     category: "water",

//     equipment: [
//       {
//         id: "water-management",
//         name: "Water Management",
//         label: "Central Water Monitoring",
//         type: "water-main",
//       },
//       {
//         id: "stp",
//         name: "STP",
//         label: "Sewage Treatment Plant",
//         type: "stp",
//       },
//       {
//         id: "wtp",
//         name: "WTP",
//         label: "Water Treatment Plant",
//         type: "wtp",
//       },
//       ...Array.from(
//         { length: 4 },
//         (_, index) => ({
//           id: `tank-${index + 1}`,
//           name: `Tank Level-${index + 1}`,
//           label: "Water Storage Tank",
//           type: "tank",
//         })
//       ),
//     ],
//   },


//   fire: {
//     id: "fire",
//     title: "Fire & Life Safety",
//     subtitle: "Fire Alarm, Fire Fighting & Pump Monitoring",
//     layout: "parallel",
//     category: "fire",

//     equipment: [
//       {
//         id: "fire-alarms",
//         name: "Fire Alarms",
//         label: "Detection & Alarm System",
//         type: "fire-alarm",
//       },
//       {
//         id: "fire-fighting",
//         name: "Fire Fighting",
//         label: "Hydrant & Sprinkler System",
//         type: "fire-fighting",
//       },
//       {
//         id: "fire-pump",
//         name: "Fire Pump",
//         label: "Fire Pump System",
//         type: "fire-pump",
//       },
//     ],
//   },
// };


// /* =========================================================
//    TRANSFORMER DATA
// ========================================================= */

// const transformerValues = [
//   [54, 61, 68],
//   [52, 59, 62],
//   [55, 60, 71],
//   [53, 58, 65],
//   [56, 63, 74],
//   [51, 57, 60],
// ];


// /* =========================================================
//    BASE TELEMETRY
// ========================================================= */

// const electricalTelemetry = (
//   index = 0,
//   voltage = 433
// ) => ({
//   status: "ON",
//   health: "HEALTHY",
//   communication: true,

//   kWh: 1245 + index * 18,
//   kVAh: 1180 + index * 15,

//   voltage,
//   current: 210 + index * 4,

//   powerFactor:
//     index % 2 === 0
//       ? 0.98
//       : 0.97,

//   load: 62 + (index % 5) * 4,

//   fault: false,
//   trip: false,
//   warning: false,
// });


// /* =========================================================
//    DEMO TELEMETRY
// ========================================================= */

// export const demoTelemetry = {

//   /* SOURCE — old BMS values */

//   "source-inc1": {
//     ...electricalTelemetry(0, 33),
//     kWh: 1280,
//     kVAh: 1195,
//     current: 420,
//     powerFactor: 0.98,
//     load: 78,
//     healthScore: 94,
//     operatingStatus: "Stable",
//   },

//   "source-out": {
//     ...electricalTelemetry(1, 33),
//     kWh: 1560,
//     kVAh: 1430,
//     current: 460,
//     powerFactor: 0.99,
//     load: 86,
//     healthScore: 96,
//     operatingStatus: "Stable",
//   },

//   "source-inc2": {
//     ...electricalTelemetry(2, 33),
//     kWh: 1110,
//     kVAh: 1020,
//     current: 390,
//     powerFactor: 0.97,
//     load: 72,
//     healthScore: 92,
//     operatingStatus: "Stable",
//   },

//   "source-meter": {
//     ...electricalTelemetry(3, 33),
//     kWh: 1420,
//     kVAh: 1300,
//     current: 435,
//     powerFactor: 0.98,
//     load: 81,
//     healthScore: 95,
//     operatingStatus: "Stable",
//   },


//   /* FEEDER */

//   "feeder-in-1": {
//     ...electricalTelemetry(0, 33),
//     current: 432,
//   },

//   ...Object.fromEntries(
//     Array.from(
//       { length: 6 },
//       (_, index) => [
//         `feeder-og-${index + 1}`,
//         {
//           ...electricalTelemetry(
//             index + 1,
//             33
//           ),
//           current:
//             390 - index * 13,
//         },
//       ]
//     )
//   ),


//   /* TRANSFORMERS */

//   ...Object.fromEntries(
//     transformerValues.map(
//       (
//         [
//           oilTemp,
//           windingTemp,
//           load,
//         ],
//         index
//       ) => [
//         `transformer-${index + 1}`,
//         {
//           status: "ON",
//           health: "HEALTHY",
//           communication: true,

//           oilTemp,
//           windingTemp,

//           buchholz: "Healthy",
//           load,

//           fault: false,
//           trip: false,
//           warning: false,
//         },
//       ]
//     )
//   ),


//   /* LT KIOSK */

//   ...Object.fromEntries(
//     Array.from(
//       { length: 6 },
//       (_, index) => [
//         `kiosk-${index + 1}`,
//         electricalTelemetry(
//           index,
//           433
//         ),
//       ]
//     )
//   ),


//   /* BUSDUCT */

//   ...Object.fromEntries(
//     Array.from(
//       { length: 6 },
//       (_, index) => [
//         `bus-${index + 1}`,
//         {
//           status: "ON",
//           health: "HEALTHY",
//           communication: true,

//           temperature:
//             38 + index,

//           vibration:
//             Number(
//               (
//                 1.2 +
//                 index * 0.1
//               ).toFixed(1)
//             ),

//           voltage: 433,
//           load:
//             61 + index * 2,

//           fault: false,
//           trip: false,
//           warning: false,
//         },
//       ]
//     )
//   ),


//   /* UPS */

//   "ups-30-1": {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,

//     capacity: "30 kVA",
//     inputVoltage: 433,
//     outputVoltage: 230,
//     load: 62,
//     battery: 96,
//     inputFrequency: 50,
//     outputFrequency: 50,
//     batteryVoltage: 216,
//     backupTime: "42 min",
//     mode: "ONLINE",

//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   "ups-30-2": {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,

//     capacity: "30 kVA",
//     inputVoltage: 433,
//     outputVoltage: 230,
//     load: 58,
//     battery: 94,
//     inputFrequency: 50,
//     outputFrequency: 50,
//     batteryVoltage: 215,
//     backupTime: "45 min",
//     mode: "ONLINE",

//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   "ups-10-1": {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,

//     capacity: "10 kVA",
//     inputVoltage: 433,
//     outputVoltage: 230,
//     load: 48,
//     battery: 97,
//     inputFrequency: 50,
//     outputFrequency: 50,
//     batteryVoltage: 216,
//     backupTime: "56 min",
//     mode: "ONLINE",

//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   "ups-10-2": {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,

//     capacity: "10 kVA",
//     inputVoltage: 433,
//     outputVoltage: 230,
//     load: 45,
//     battery: 95,
//     inputFrequency: 50,
//     outputFrequency: 50,
//     batteryVoltage: 215,
//     backupTime: "59 min",
//     mode: "ONLINE",

//     fault: false,
//     trip: false,
//     warning: false,
//   },


//   /* RAISING MAIN */

//   ...Object.fromEntries(
//     Array.from(
//       { length: 4 },
//       (_, index) => [
//         `rm-${index + 1}`,
//         electricalTelemetry(
//           index,
//           433
//         ),
//       ]
//     )
//   ),


//   /* WING */

//   "wing-a": {
//     ...electricalTelemetry(
//       0,
//       433
//     ),
//     demand: 1240,
//     activeAlarms: 0,
//   },

//   "wing-b": {
//     ...electricalTelemetry(
//       1,
//       433
//     ),
//     demand: 1180,
//     activeAlarms: 0,
//   },


//   /* DG */

//   ...Object.fromEntries(
//     Array.from(
//       { length: 7 },
//       (_, index) => [
//         `dg-${index + 1}`,
//         {
//           ...electricalTelemetry(
//             index,
//             433
//           ),

//           status:
//             index === 0
//               ? "ON"
//               : "STANDBY",

//           health: "READY",

//           capacity:
//             index < 4
//               ? "1500 kVA"
//               : "1250 kVA",
//         },
//       ]
//     )
//   ),


//   /* HVAC */

//   hvac: {
//     ...electricalTelemetry(
//       0,
//       433
//     ),
//   },


//   /* WATER */

//   "water-management": {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,

//     flowRate: 148,
//     totalWater: 72,
//     pressure: 3.2,

//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   stp: {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,

//     inletFlow: 82,
//     outletFlow: 76,
//     ph: 7.2,
//     turbidity: 2.4,

//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   wtp: {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,

//     inletFlow: 96,
//     outletFlow: 91,
//     ph: 7.1,
//     turbidity: 1.8,

//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   "tank-1": {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,
//     level: 78,
//     volume: 42,
//     inletFlow: 18,
//     outletFlow: 14,
//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   "tank-2": {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,
//     level: 66,
//     volume: 36,
//     inletFlow: 15,
//     outletFlow: 12,
//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   "tank-3": {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,
//     level: 83,
//     volume: 45,
//     inletFlow: 19,
//     outletFlow: 16,
//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   "tank-4": {
//     status: "ON",
//     health: "HEALTHY",
//     communication: true,
//     level: 59,
//     volume: 31,
//     inletFlow: 14,
//     outletFlow: 11,
//     fault: false,
//     trip: false,
//     warning: false,
//   },


//   /* FIRE */

//   "fire-alarms": {
//     status: "ON",
//     health: "NORMAL",
//     communication: true,

//     smokeDetectors: 128,
//     heatDetectors: 64,
//     alarmZones: 12,
//     activeAlarms: 0,

//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   "fire-fighting": {
//     status: "ON",
//     health: "NORMAL",
//     communication: true,

//     pressure: 7.2,
//     hydrantNetwork: "NORMAL",
//     sprinklerNetwork: "NORMAL",
//     mainValve: "OPEN",

//     fault: false,
//     trip: false,
//     warning: false,
//   },

//   "fire-pump": {
//     status: "STANDBY",
//     health: "READY",
//     communication: true,

//     voltage: 415,
//     pressure: 7.4,
//     mode: "AUTO",
//     pumpState: "STANDBY",

//     fault: false,
//     trip: false,
//     warning: false,
//   },
// };


// /* =========================================================
//    PCC TELEMETRY
// ========================================================= */

// [
//   ...pcc1Circuits,
//   ...pcc2Circuits,
//   ...pcc3Circuits,
//   ...pcc4Circuits,
// ].forEach(
//   (circuit, index) => {
//     demoTelemetry[circuit.id] = {
//       ...electricalTelemetry(
//         index,
//         433
//       ),

//       breakerState:
//         circuit.direction ===
//         "coupler"
//           ? "OPEN"
//           : "CLOSED",

//       direction:
//         circuit.direction,

//       section:
//         circuit.section,
//     };
//   }
// );


// /* =========================================================
//    FLATTEN ALL EQUIPMENT
// ========================================================= */

// export function getTopologyEquipment(
//   topology
// ) {
//   if (!topology) {
//     return [];
//   }

//   if (topology.layout === "pcc") {
//     return topology.panels.flatMap(
//       (panel) =>
//         panel.circuits
//     );
//   }

//   return [
//     ...(topology.incoming
//       ? [topology.incoming]
//       : []),

//     ...(topology.equipment || []),
//   ];
// }
















import {
  RadioTower,
  GitBranch,
  Zap,
  Network,
  Cpu,
  Bolt,
  Building2,
  CirclePower,
  Fan,
  Droplets,
  Flame,
  BatteryCharging,
  PanelsTopLeft,
} from "lucide-react";


/* =========================================================
   OVERVIEW
========================================================= */

export const flowCategories = [
  {
    id: "source",
    name: "Source",
    shortName: "33 kV Source",
    icon: RadioTower,
    status: "ONLINE",
    health: "HEALTHY",
    value: "33 kV",
    color: "source",
  },
  {
    id: "feeder",
    name: "Feeder",
    shortName: "33 kV Feeder",
    icon: GitBranch,
    status: "ONLINE",
    health: "HEALTHY",
    value: "1 IN / 6 OUT",
    color: "feeder",
  },
  {
    id: "transformer",
    name: "Transformer",
    shortName: "33/0.433 kV",
    icon: Zap,
    status: "ONLINE",
    health: "HEALTHY",
    value: "6 Units",
    color: "transformer",
  },
  {
    id: "lt-kiosk",
    name: "LT Kiosk",
    shortName: "LT Distribution",
    icon: PanelsTopLeft,
    status: "ONLINE",
    health: "HEALTHY",
    value: "6 Units",
    color: "lt-kiosk",
  },
  {
    id: "busduct",
    name: "Busduct",
    shortName: "LT Busduct / Busbar",
    icon: Network,
    status: "ONLINE",
    health: "HEALTHY",
    value: "6 Busbars",
    color: "busduct",
  },
  {
    id: "pcc",
    name: "PCC",
    shortName: "Power Control Centre",
    icon: Cpu,
    status: "ONLINE",
    health: "HEALTHY",
    value: "4 Panels",
    color: "pcc",
  },
  {
    id: "raising-main",
    name: "Raising Main",
    shortName: "Vertical Distribution",
    icon: Bolt,
    status: "ONLINE",
    health: "HEALTHY",
    value: "4 Mains",
    color: "raising-main",
  },
  {
    id: "wing",
    name: "Wing",
    shortName: "Building Distribution",
    icon: Building2,
    status: "ONLINE",
    health: "HEALTHY",
    value: "2 Wings",
    color: "wing",
  },
  {
    id: "dg",
    name: "DG",
    shortName: "Diesel Generator Plant",
    icon: CirclePower,
    status: "STANDBY",
    health: "READY",
    value: "7 DGs",
    color: "dg",
  },
  {
    id: "hvac",
    name: "HVAC",
    shortName: "HVAC Cooling Plant",
    icon: Fan,
    status: "ONLINE",
    health: "HEALTHY",
    value: "Running",
    color: "hvac",
  },
  {
    id: "wtp",
    name: "Water Management",
    shortName: "STP / WTP / Tanks",
    icon: Droplets,
    status: "ONLINE",
    health: "HEALTHY",
    value: "Normal",
    color: "wtp",
  },
  {
    id: "fire",
    name: "Fire",
    shortName: "Fire & Life Safety",
    icon: Flame,
    status: "ONLINE",
    health: "NORMAL",
    value: "Normal",
    color: "fire",
  },
];


/* =========================================================
   HELPERS
========================================================= */

const electrical = (
  id,
  name,
  label,
  type = "electrical",
  overrides = {}
) => ({
  id,
  name,
  label,
  type,
  ...overrides,
});


const makePccCircuit = (
  panel,
  id,
  name,
  direction,
  section = null
) => ({
  id: `${panel}-${id}`,
  name,
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
});


/* =========================================================
   PCC CIRCUITS
========================================================= */

const pcc1Circuits = [
  makePccCircuit("pcc1", "lt6-in", "LT6 IN", "incoming", "A"),
  makePccCircuit("pcc1", "dg1234-in-a", "DG1-4 IN", "incoming", "A"),

  makePccCircuit("pcc1", "og1", "OG1", "outgoing", "A"),
  makePccCircuit("pcc1", "rm1-a", "RM1", "outgoing", "A"),
  makePccCircuit("pcc1", "rm2-a", "RM2", "outgoing", "A"),
  makePccCircuit("pcc1", "utility1", "Utility 1", "outgoing", "A"),
  makePccCircuit("pcc1", "spare1", "Spare 1", "outgoing", "A"),

  makePccCircuit("pcc1", "bus-coupler", "Bus Coupler", "coupler"),

  makePccCircuit("pcc1", "lt5-in", "LT5 IN", "incoming", "B"),
  makePccCircuit("pcc1", "dg1234-in-b", "DG1-4 IN", "incoming", "B"),

  makePccCircuit("pcc1", "rm1-b", "RM1", "outgoing", "B"),
  makePccCircuit("pcc1", "rm2-b", "RM2", "outgoing", "B"),
  makePccCircuit("pcc1", "utility2", "Utility 2", "outgoing", "B"),
  makePccCircuit("pcc1", "spare2", "Spare 2", "outgoing", "B"),
];


const pcc2Circuits = [
  makePccCircuit("pcc2", "lt1-in", "LT1 IN", "incoming", "A"),
  makePccCircuit("pcc2", "dg1234-in-a", "DG1-4 IN", "incoming", "A"),

  makePccCircuit("pcc2", "og1", "OG1", "outgoing", "A"),
  makePccCircuit("pcc2", "rm1-a", "RM1", "outgoing", "A"),
  makePccCircuit("pcc2", "rm2-a", "RM2", "outgoing", "A"),
  makePccCircuit("pcc2", "utility1", "Utility 1", "outgoing", "A"),
  makePccCircuit("pcc2", "spare1", "Spare 1", "outgoing", "A"),

  makePccCircuit("pcc2", "bus-coupler", "Bus Coupler", "coupler"),

  makePccCircuit("pcc2", "lt2-in", "LT2 IN", "incoming", "B"),
  makePccCircuit("pcc2", "dg1234-in-b", "DG1-4 IN", "incoming", "B"),

  makePccCircuit("pcc2", "rm1-b", "RM1", "outgoing", "B"),
  makePccCircuit("pcc2", "rm2-b", "RM2", "outgoing", "B"),
  makePccCircuit("pcc2", "utility2", "Utility 2", "outgoing", "B"),
  makePccCircuit("pcc2", "spare2", "Spare 2", "outgoing", "B"),
];


const pcc3Circuits = [
  makePccCircuit("pcc3", "lt4-in", "LT4 IN", "incoming"),
  makePccCircuit("pcc3", "dg567-in", "DG5-7 IN", "incoming"),

  ...Array.from(
    { length: 10 },
    (_, index) =>
      makePccCircuit(
        "pcc3",
        `og-${index + 1}`,
        `OG ${index + 1}`,
        "outgoing"
      )
  ),
];


const pcc4Circuits = [
  makePccCircuit("pcc4", "lt3-in", "LT3 IN", "incoming"),
  makePccCircuit("pcc4", "dg567-in", "DG5-7 IN", "incoming"),

  ...Array.from(
    { length: 10 },
    (_, index) =>
      makePccCircuit(
        "pcc4",
        `og-${index + 1}`,
        `OG ${index + 1}`,
        "outgoing"
      )
  ),
];


/* =========================================================
   TOPOLOGY
========================================================= */

export const flowTopology = {

  source: {
    id: "source",
    title: "33 kV Source",
    subtitle: "Incoming HT Source & Metering",
    layout: "grid",
    category: "electrical",

    equipment: [
      electrical(
        "source-inc1",
        "INC1",
        "Primary Incoming Feeder",
        "incomer"
      ),
      electrical(
        "source-out",
        "OUT",
        "Outgoing Busbar",
        "busbar"
      ),
      electrical(
        "source-inc2",
        "INC2",
        "Secondary Incoming Feeder",
        "incomer"
      ),
      electrical(
        "source-meter",
        "Metering Unit",
        "33 kV Energy Monitoring Meter",
        "meter"
      ),
    ],
  },


  feeder: {
    id: "feeder",
    title: "33 kV Feeder Panel",
    subtitle: "1 Incoming / 6 Outgoing Feeders",
    layout: "feeder",
    category: "electrical",

    incoming: electrical(
      "feeder-in-1",
      "Incoming Feeder 1",
      "33 kV Feeder Incoming",
      "incomer"
    ),

    equipment: Array.from(
      { length: 6 },
      (_, index) =>
        electrical(
          `feeder-og-${index + 1}`,
          `OG-${index + 1}`,
          `Outgoing Feeder → TR-${index + 1}`,
          "feeder"
        )
    ),
  },


  transformer: {
    id: "transformer",
    title: "Transformers",
    subtitle: "33 kV / 433 V Step-Down Transformers",
    layout: "parallel",
    category: "transformer",

    equipment: Array.from(
      { length: 6 },
      (_, index) =>
        electrical(
          `transformer-${index + 1}`,
          `TR-${index + 1}`,
          "33 kV / 433 V Transformer",
          "transformer"
        )
    ),
  },


  "lt-kiosk": {
    id: "lt-kiosk",
    title: "LT Kiosk",
    subtitle: "433 V LT Distribution Panels",
    layout: "parallel",
    category: "electrical",

    equipment: Array.from(
      { length: 6 },
      (_, index) =>
        electrical(
          `kiosk-${index + 1}`,
          `KIOSK-${index + 1}`,
          "433 V LT Kiosk",
          "kiosk"
        )
    ),
  },


  busduct: {
    id: "busduct",
    title: "LT Busduct / Busbar",
    subtitle: "Busbar Condition Monitoring",
    layout: "parallel",
    category: "busduct",

    equipment: Array.from(
      { length: 6 },
      (_, index) =>
        electrical(
          `bus-${index + 1}`,
          `BUS-${index + 1}`,
          "LT Busduct / Busbar",
          "busduct"
        )
    ),
  },


  pcc: {
    id: "pcc",
    title: "Power Control Centre",
    subtitle: "PCC 1–4 Incomings, Outgoings & Bus Couplers",
    layout: "pcc",
    category: "pcc",

    panels: [
      {
        id: "pcc-1",
        name: "PCC 1",
        label: "Wing A",
        circuits: pcc1Circuits,
      },
      {
        id: "pcc-2",
        name: "PCC 2",
        label: "Wing B",
        circuits: pcc2Circuits,
      },
      {
        id: "pcc-3",
        name: "PCC 3",
        label: "Chillers",
        circuits: pcc3Circuits,
      },
      {
        id: "pcc-4",
        name: "PCC 4",
        label: "Chillers",
        circuits: pcc4Circuits,
      },
    ],
  },


  ups: {
    id: "ups",
    title: "UPS",
    subtitle: "Uninterruptible Power Supply",
    layout: "parallel",
    category: "ups",

    equipment: [
      electrical(
        "ups-30-1",
        "30kVA-1",
        "30 kVA UPS",
        "ups"
      ),
      electrical(
        "ups-30-2",
        "30kVA-2",
        "30 kVA UPS",
        "ups"
      ),
      electrical(
        "ups-10-1",
        "10kVA-1",
        "10 kVA UPS",
        "ups"
      ),
      electrical(
        "ups-10-2",
        "10kVA-2",
        "10 kVA UPS",
        "ups"
      ),
    ],
  },


  "raising-main": {
    id: "raising-main",
    title: "Raising Main",
    subtitle: "Vertical Building Power Distribution",
    layout: "parallel",
    category: "electrical",

    equipment: Array.from(
      { length: 4 },
      (_, index) =>
        electrical(
          `rm-${index + 1}`,
          `Raising Main ${index + 1}`,
          index < 2
            ? "Wing A Vertical Distribution"
            : "Wing B Vertical Distribution",
          "raising-main"
        )
    ),
  },


  wing: {
    id: "wing",
    title: "Building Wings",
    subtitle: "Wing-Level Electrical Monitoring",
    layout: "parallel",
    category: "wing",

    equipment: [
      electrical(
        "wing-a",
        "Wing A",
        "20 Floors",
        "wing"
      ),
      electrical(
        "wing-b",
        "Wing B",
        "20 Floors",
        "wing"
      ),
    ],
  },


  dg: {
    id: "dg",
    title: "Diesel Generator Plant",
    subtitle: "Emergency / Standby Generation",
    layout: "parallel",
    category: "dg",

    equipment: Array.from(
      { length: 7 },
      (_, index) =>
        electrical(
          `dg-${index + 1}`,
          `DG-${index + 1}`,
          index < 4
            ? "1500 kVA GENSET"
            : "1250 kVA GENSET",
          "dg"
        )
    ),
  },


  hvac: {
    id: "hvac",
    title: "HVAC",
    subtitle: "HVAC Cooling Plant",
    layout: "empty",
    category: "electrical",
    equipment: [],
  },


  wtp: {
    id: "wtp",
    title: "Water Management",
    subtitle: "Water, STP, WTP & Tank Monitoring",
    layout: "water",
    category: "water",

    equipment: [
      {
        id: "water-management",
        name: "Water Management",
        label: "Central Water Monitoring",
        type: "water-main",
      },
      {
        id: "stp",
        name: "STP",
        label: "Sewage Treatment Plant",
        type: "stp",
      },
      {
        id: "wtp",
        name: "WTP",
        label: "Water Treatment Plant",
        type: "wtp",
      },
      ...Array.from(
        { length: 4 },
        (_, index) => ({
          id: `tank-${index + 1}`,
          name: `Tank Level-${index + 1}`,
          label: "Water Storage Tank",
          type: "tank",
        })
      ),
    ],
  },


  fire: {
    id: "fire",
    title: "Fire & Life Safety",
    subtitle: "Fire Alarm, Fire Fighting & Pump Monitoring",
    layout: "parallel",
    category: "fire",

    equipment: [
      {
        id: "fire-alarms",
        name: "Fire Alarms",
        label: "Detection & Alarm System",
        type: "fire-alarm",
      },
      {
        id: "fire-fighting",
        name: "Fire Fighting",
        label: "Hydrant & Sprinkler System",
        type: "fire-fighting",
      },
      {
        id: "fire-pump",
        name: "Fire Pump",
        label: "Fire Pump System",
        type: "fire-pump",
      },
    ],
  },
};


/* =========================================================
   TRANSFORMER DATA
========================================================= */

const transformerValues = [
  [54, 61, 68],
  [52, 59, 62],
  [55, 60, 71],
  [53, 58, 65],
  [56, 63, 74],
  [51, 57, 60],
];

const transformerTelemetry = (
  index
) => {
  const [
    oilTemp,
    windingTemp,
    load,
  ] =
    transformerValues[
      index %
        transformerValues.length
    ];

  return {
    ...electricalTelemetry(
      index,
      433
    ),

    status: "ON",
    health: "HEALTHY",
    communication: true,

    kWh:
      1840 + index * 37,

    kVAh:
      1710 + index * 35,

    voltage: 433,

    current:
      245 + (index % 10) * 7,

    powerFactor:
      index % 3 === 0
        ? 0.96
        : index % 3 === 1
        ? 0.97
        : 0.98,

    oilTemp:
      oilTemp + Math.floor(index / 6),

    windingTemp:
      windingTemp + Math.floor(index / 6),

    buchholz: "Healthy",
    buchholzRelay: "Healthy",
    relay: "Healthy",

    load,

    protectionStatus:
      "Normal",

    operatingStatus:
      "Running",

    fault: false,
    trip: false,
    warning: false,
  };
};


/* =========================================================
   BASE TELEMETRY
========================================================= */

const electricalTelemetry = (
  index = 0,
  voltage = 433
) => ({
  status: "ON",
  health: "HEALTHY",
  communication: true,

  kWh: 1245 + index * 18,
  kVAh: 1180 + index * 15,

  voltage,
  current: 210 + index * 4,

  powerFactor:
    index % 2 === 0
      ? 0.98
      : 0.97,

  load: 62 + (index % 5) * 4,

  fault: false,
  trip: false,
  warning: false,
});


/* =========================================================
   DEMO TELEMETRY
========================================================= */

export const demoTelemetry = {

  /* SOURCE — old BMS values */

  "source-inc1": {
    ...electricalTelemetry(0, 33),
    kWh: 1280,
    kVAh: 1195,
    current: 420,
    powerFactor: 0.98,
    load: 78,
    healthScore: 94,
    operatingStatus: "Stable",
  },

  "source-out": {
    ...electricalTelemetry(1, 33),
    kWh: 1560,
    kVAh: 1430,
    current: 460,
    powerFactor: 0.99,
    load: 86,
    healthScore: 96,
    operatingStatus: "Stable",
  },

  "source-inc2": {
    ...electricalTelemetry(2, 33),
    kWh: 1110,
    kVAh: 1020,
    current: 390,
    powerFactor: 0.97,
    load: 72,
    healthScore: 92,
    operatingStatus: "Stable",
  },

  "source-meter": {
    ...electricalTelemetry(3, 33),
    kWh: 1420,
    kVAh: 1300,
    current: 435,
    powerFactor: 0.98,
    load: 81,
    healthScore: 95,
    operatingStatus: "Stable",
  },

  ...Object.fromEntries(
    Array.from(
      {
        length: 20,
      },
      (_, index) => [
        `source-inc${index + 1}`,
        {
          ...electricalTelemetry(
            index,
            33
          ),
          load:
            64 +
            (index * 5) % 28,
          healthScore:
            90 +
            (index % 8),
          operatingStatus:
            "Stable",
        },
      ]
    )
  ),

  ...Object.fromEntries(
    Array.from(
      {
        length: 30,
      },
      (_, index) => [
        index === 0
          ? "source-out"
          : `source-out-${index + 1}`,
        {
          ...electricalTelemetry(
            index + 20,
            33
          ),
          load:
            58 +
            (index * 4) % 34,
          healthScore:
            89 +
            (index % 9),
          operatingStatus:
            "Stable",
        },
      ]
    )
  ),

  ...Object.fromEntries(
    Array.from(
      {
        length: 20,
      },
      (_, index) => [
        index === 0
          ? "source-meter"
          : `source-meter-${index + 1}`,
        {
          ...electricalTelemetry(
            index + 50,
            33
          ),
          healthScore:
            92 +
            (index % 6),
          operatingStatus:
            "Stable",
        },
      ]
    )
  ),


  /* FEEDER */

/* =====================================================
   FEEDER DEMO TELEMETRY

   Generate enough demo telemetry for the maximum
   Super Admin feeder configuration.

   Project topology still decides how many feeders
   are actually displayed.
===================================================== */


/* INCOMING FEEDERS */

...Object.fromEntries(
  Array.from(
    { length: 20 },
    (_, index) => [
      `feeder-in-${index + 1}`,

      {
        ...electricalTelemetry(
          index,
          33
        ),

        current:
          Math.max(
            260,
            432 - index * 6
          ),

        direction:
          "incoming",

        feederNumber:
          index + 1,

        operatingStatus:
          "Stable",
      },
    ]
  )
),


/* OUTGOING FEEDERS */

...Object.fromEntries(
  Array.from(
    { length: 30 },
    (_, index) => [
      `feeder-og-${index + 1}`,

      {
        ...electricalTelemetry(
          index + 1,
          33
        ),

        current:
          Math.max(
            120,
            390 - index * 9
          ),

        direction:
          "outgoing",

        feederNumber:
          index + 1,

        operatingStatus:
          "Stable",
      },
    ]
  )
),

  ...Object.fromEntries(
    Array.from(
      { length: 6 },
      (_, index) => [
        `feeder-og-${index + 1}`,
        {
          ...electricalTelemetry(
            index + 1,
            33
          ),
          current:
            390 - index * 13,
        },
      ]
    )
  ),


  /* TRANSFORMERS */

  ...Object.fromEntries(
    Array.from(
      {
        length: 30,
      },
      (_, index) => [
        `transformer-${index + 1}`,
        transformerTelemetry(index),
      ]
    )
  ),


  /* LT KIOSK */

  ...Object.fromEntries(
    Array.from(
      { length: 30 },
      (_, index) => [
        `kiosk-${index + 1}`,
        {
          ...electricalTelemetry(
            index,
            433
          ),

          operatingStatus:
            "Stable",
        },
      ]
    )
  ),


  /* BUSDUCT */

  ...Object.fromEntries(
    Array.from(
      { length: 30 },
      (_, index) => [
        `bus-${index + 1}`,
        {
          status: "ON",
          health: "HEALTHY",
          communication: true,

          temperature:
            38 + index,

          vibration:
            Number(
              (
                1.2 +
                index * 0.1
              ).toFixed(1)
            ),

          voltage: 433,
          load:
            61 + index * 2,

          fault: false,
          trip: false,
          warning: false,
        },
      ]
    )
  ),


  /* PCC PANELS */

  ...Object.fromEntries(
    Array.from(
      { length: 20 },
      (_, index) => [
        `pcc-${index + 1}`,
        {
          ...electricalTelemetry(
            index,
            433
          ),

          panelNumber:
            index + 1,

          operatingStatus:
            "Running",
        },
      ]
    )
  ),


  /* UPS */

  "ups-30-1": {
    status: "ON",
    health: "HEALTHY",
    communication: true,

    capacity: "30 kVA",
    inputVoltage: 433,
    outputVoltage: 230,
    load: 62,
    battery: 96,
    inputFrequency: 50,
    outputFrequency: 50,
    batteryVoltage: 216,
    backupTime: "42 min",
    mode: "ONLINE",

    fault: false,
    trip: false,
    warning: false,
  },

  "ups-30-2": {
    status: "ON",
    health: "HEALTHY",
    communication: true,

    capacity: "30 kVA",
    inputVoltage: 433,
    outputVoltage: 230,
    load: 58,
    battery: 94,
    inputFrequency: 50,
    outputFrequency: 50,
    batteryVoltage: 215,
    backupTime: "45 min",
    mode: "ONLINE",

    fault: false,
    trip: false,
    warning: false,
  },

  "ups-10-1": {
    status: "ON",
    health: "HEALTHY",
    communication: true,

    capacity: "10 kVA",
    inputVoltage: 433,
    outputVoltage: 230,
    load: 48,
    battery: 97,
    inputFrequency: 50,
    outputFrequency: 50,
    batteryVoltage: 216,
    backupTime: "56 min",
    mode: "ONLINE",

    fault: false,
    trip: false,
    warning: false,
  },

  "ups-10-2": {
    status: "ON",
    health: "HEALTHY",
    communication: true,

    capacity: "10 kVA",
    inputVoltage: 433,
    outputVoltage: 230,
    load: 45,
    battery: 95,
    inputFrequency: 50,
    outputFrequency: 50,
    batteryVoltage: 215,
    backupTime: "59 min",
    mode: "ONLINE",

    fault: false,
    trip: false,
    warning: false,
  },


  /* RAISING MAIN */

  ...Object.fromEntries(
    Array.from(
      { length: 20 },
      (_, index) => [
        `rm-${index + 1}`,
        electricalTelemetry(
          index,
          433
        ),
      ]
    )
  ),


  /* WING */

  ...Object.fromEntries(
    Array.from(
      { length: 10 },
      (_, index) => {
        const letter =
          String.fromCharCode(
            65 + index
          ).toLowerCase();

        return [
          `wing-${letter}`,
          {
            ...electricalTelemetry(
              index,
              433
            ),
            demand:
              Math.max(
                720,
                1240 - index * 60
              ),
            activeAlarms: 0,
          },
        ];
      }
    )
  ),


  /* DG */

  ...Object.fromEntries(
    Array.from(
      { length: 20 },
      (_, index) => [
        `dg-${index + 1}`,
        {
          ...electricalTelemetry(
            index,
            433
          ),

          status:
            index === 0
              ? "ON"
              : "STANDBY",

          health: "READY",

          capacity:
            index < 4
              ? "1500 kVA"
              : "1250 kVA",
        },
      ]
    )
  ),


  /* HVAC */

  hvac: {
    ...electricalTelemetry(
      0,
      433
    ),
  },

  ...Object.fromEntries(
    Array.from(
      {
        length: 30,
      },
      (_, index) => [
        `hvac-${index + 1}`,
        {
          ...electricalTelemetry(
            90 + index * 4,
            415
          ),
          status:
            index % 9 === 0
              ? "STANDBY"
              : "ON",
          health:
            index % 11 === 0
              ? "CHECK"
              : "HEALTHY",
        },
      ]
    )
  ),


  /* WATER */

  "water-management": {
    status: "ON",
    health: "HEALTHY",
    communication: true,

    flowRate: 148,
    totalWater: 72,
    pressure: 3.2,

    fault: false,
    trip: false,
    warning: false,
  },

  stp: {
    status: "ON",
    health: "HEALTHY",
    communication: true,

    inletFlow: 82,
    outletFlow: 76,
    ph: 7.2,
    turbidity: 2.4,

    fault: false,
    trip: false,
    warning: false,
  },

  wtp: {
    status: "ON",
    health: "HEALTHY",
    communication: true,

    inletFlow: 96,
    outletFlow: 91,
    ph: 7.1,
    turbidity: 1.8,

    fault: false,
    trip: false,
    warning: false,
  },

  "tank-1": {
    status: "ON",
    health: "HEALTHY",
    communication: true,
    level: 78,
    volume: 42,
    inletFlow: 18,
    outletFlow: 14,
    fault: false,
    trip: false,
    warning: false,
  },

  "tank-2": {
    status: "ON",
    health: "HEALTHY",
    communication: true,
    level: 66,
    volume: 36,
    inletFlow: 15,
    outletFlow: 12,
    fault: false,
    trip: false,
    warning: false,
  },

  "tank-3": {
    status: "ON",
    health: "HEALTHY",
    communication: true,
    level: 83,
    volume: 45,
    inletFlow: 19,
    outletFlow: 16,
    fault: false,
    trip: false,
    warning: false,
  },

  "tank-4": {
    status: "ON",
    health: "HEALTHY",
    communication: true,
    level: 59,
    volume: 31,
    inletFlow: 14,
    outletFlow: 11,
    fault: false,
    trip: false,
    warning: false,
  },

  ...Object.fromEntries(
    Array.from(
      {
        length: 20,
      },
      (_, index) => {
        const tankNumber =
          index + 1;

        return [
          `tank-${tankNumber}`,
          {
            status: "ON",
            health: "HEALTHY",
            communication: true,
            level:
              54 +
              (index * 7) % 35,
            volume:
              28 +
              (index * 5) % 24,
            inletFlow:
              12 +
              (index * 3) % 10,
            outletFlow:
              10 +
              (index * 2) % 9,
            fault: false,
            trip: false,
            warning: false,
          },
        ];
      }
    )
  ),


  /* FIRE */

  "fire-alarms": {
    status: "ON",
    health: "NORMAL",
    communication: true,

    smokeDetectors: 128,
    heatDetectors: 64,
    alarmZones: 12,
    activeAlarms: 0,

    fault: false,
    trip: false,
    warning: false,
  },

  "fire-fighting": {
    status: "ON",
    health: "NORMAL",
    communication: true,

    pressure: 7.2,
    hydrantNetwork: "NORMAL",
    sprinklerNetwork: "NORMAL",
    mainValve: "OPEN",

    fault: false,
    trip: false,
    warning: false,
  },

  "fire-pump": {
    status: "STANDBY",
    health: "READY",
    communication: true,

    voltage: 415,
    pressure: 7.4,
    mode: "AUTO",
    pumpState: "STANDBY",

    fault: false,
    trip: false,
    warning: false,
  },
};


/* =========================================================
   PCC TELEMETRY
========================================================= */

[
  ...pcc1Circuits,
  ...pcc2Circuits,
  ...pcc3Circuits,
  ...pcc4Circuits,
].forEach(
  (circuit, index) => {
    demoTelemetry[circuit.id] = {
      ...electricalTelemetry(
        index,
        433
      ),

      breakerState:
        circuit.direction ===
        "coupler"
          ? "OPEN"
          : "CLOSED",

      direction:
        circuit.direction,

      section:
        circuit.section,
    };
  }
);


/* =========================================================
   FLATTEN ALL EQUIPMENT
========================================================= */

/* =========================================================
   FLATTEN ALL EQUIPMENT
========================================================= */

export function getTopologyEquipment(
  topology
) {
  if (!topology) {
    return [];
  }

  /* =====================================================
     PCC

     PCC has panels, and every panel contains circuits.
  ===================================================== */

  if (topology.layout === "pcc") {
    return Array.isArray(
      topology.panels
    )
      ? topology.panels.flatMap(
          (panel) =>
            Array.isArray(
              panel.circuits
            )
              ? panel.circuits
              : []
        )
      : [];
  }


  /* =====================================================
     FEEDER

     New dynamic feeder topology supports:
     - multiple incoming feeders
     - multiple outgoing feeders

     Also supports the old structure as a fallback.
  ===================================================== */

  if (topology.id === "feeder") {
    const incomingFeeders =
      Array.isArray(
        topology.incomingFeeders
      )
        ? topology.incomingFeeders
        : topology.incoming
        ? [topology.incoming]
        : [];


    const outgoingFeeders =
      Array.isArray(
        topology.outgoingFeeders
      )
        ? topology.outgoingFeeders
        : Array.isArray(
            topology.equipment
          )
        ? topology.equipment
        : [];


    return [
      ...incomingFeeders,
      ...outgoingFeeders,
    ];
  }


  /* =====================================================
     ALL OTHER SYSTEMS

     Preserve compatibility with the existing topology
     structure.
  ===================================================== */

  return [
    ...(topology.incoming
      ? [topology.incoming]
      : []),

    ...(Array.isArray(
      topology.equipment
    )
      ? topology.equipment
      : []),
  ];
}

/* =========================================================
   PROJECT CONFIGURATION GENERATOR

   Converts a Super Admin project configuration into the
   topology objects used by Overview / FlowDetail.

   IMPORTANT:
   - Existing flowTopology remains the default BMS template.
   - This function creates project-specific copies.
   - Existing topology is never mutated.
========================================================= */


/* =========================================================
   SMALL HELPERS
========================================================= */

const safeCount = (
  value,
  fallback = 0,
  max = 100
) => {
  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return fallback;
  }

  return Math.max(
    0,
    Math.min(
      max,
      Math.floor(parsed)
    )
  );
};


const normalizeVoltage = (
  value,
  fallback = "33kV"
) => {
  if (!value) {
    return fallback;
  }

  return String(value)
    .replace(/\s+/g, "")
    .replace("KV", "kV")
    .replace("Kv", "kV")
    .replace("kv", "kV");
};


const cloneTopology = (
  topology
) => {
  if (!topology) {
    return null;
  }

  return {
    ...topology,


    /* OLD SINGLE-INCOMING STRUCTURE */

    incoming:
      topology.incoming
        ? {
            ...topology.incoming,
          }
        : undefined,


    /* NEW DYNAMIC INCOMING STRUCTURE */

    incomingFeeders:
      Array.isArray(
        topology.incomingFeeders
      )
        ? topology.incomingFeeders.map(
            (item) => ({
              ...item,
            })
          )
        : undefined,


    /* NEW DYNAMIC OUTGOING STRUCTURE */

    outgoingFeeders:
      Array.isArray(
        topology.outgoingFeeders
      )
        ? topology.outgoingFeeders.map(
            (item) => ({
              ...item,
            })
          )
        : undefined,


    /* STANDARD EQUIPMENT */

    equipment:
      Array.isArray(
        topology.equipment
      )
        ? topology.equipment.map(
            (item) => ({
              ...item,
            })
          )
        : undefined,


    /* PCC PANELS */

    panels:
      Array.isArray(
        topology.panels
      )
        ? topology.panels.map(
            (panel) => ({
              ...panel,

              circuits:
                Array.isArray(
                  panel.circuits
                )
                  ? panel.circuits.map(
                      (circuit) => ({
                        ...circuit,
                      })
                    )
                  : [],
            })
          )
        : undefined,
  };
};


/* =========================================================
   SOURCE GENERATOR

   Example Super Admin configuration:

   {
     voltageLevel: "33kV",
     incomingCount: 2,
     outgoingCount: 1,
     meterCount: 1,
     protectionRelay: true,
     busCoupler: false
   }
========================================================= */

const buildSourceTopology = (
  configuration = {}
) => {
  const voltageLevel =
    normalizeVoltage(
      configuration.voltageLevel,
      "33kV"
    );

  const incomingCount =
    safeCount(
      configuration.incomingCount,
      2,
      20
    );

  const outgoingCount =
    safeCount(
      configuration.outgoingCount,
      1,
      30
    );

  const meterCount =
    safeCount(
      configuration.meterCount,
      1,
      20
    );

  const protectionRelay =
    Boolean(
      configuration.protectionRelay
    );

  const busCoupler =
    Boolean(
      configuration.busCoupler
    );

  const equipment = [];

  /* =====================================================
     INCOMING FEEDERS
  ===================================================== */

  for (
    let index = 0;
    index < incomingCount;
    index += 1
  ) {
    equipment.push(
      electrical(
        `source-inc${index + 1}`,

        `Incoming ${index + 1}`,

        `${voltageLevel} Incoming Feeder`,

        "incomer",

        {
          voltageLevel,
          role: "incoming",
        }
      )
    );
  }

  /* =====================================================
     OUTGOING FEEDERS / BUSBARS
  ===================================================== */

  for (
    let index = 0;
    index < outgoingCount;
    index += 1
  ) {
    equipment.push(
      electrical(
        index === 0
          ? "source-out"
          : `source-out-${index + 1}`,

        `Outgoing ${index + 1}`,

        `${voltageLevel} Outgoing Feeder`,

        "busbar",

        {
          voltageLevel,
          role: "outgoing",
        }
      )
    );
  }

  /* =====================================================
     ENERGY METERS
  ===================================================== */

  for (
    let index = 0;
    index < meterCount;
    index += 1
  ) {
    equipment.push(
      electrical(
        index === 0
          ? "source-meter"
          : `source-meter-${index + 1}`,

        `Meter ${index + 1}`,

        `${voltageLevel} Energy Monitoring Meter`,

        "meter",

        {
          voltageLevel,
          role: "meter",
        }
      )
    );
  }

  /* =====================================================
     IMPORTANT

     Protection Relay and Bus Coupler are intentionally
     NOT added to equipment[].

     They are capabilities/configuration of the Source
     system until a verified visual topology is defined
     for them.
  ===================================================== */

  return {
    id: "source",

    title:
      `${voltageLevel} Source`,

    subtitle:
      `${incomingCount} Incoming / ` +
      `${outgoingCount} Outgoing / ` +
      `${meterCount} Meter${
        meterCount === 1
          ? ""
          : "s"
      }`,

    layout: "grid",

    category: "electrical",

    voltageLevel,

    configuration: {
      ...configuration,

      voltageLevel,
      incomingCount,
      outgoingCount,
      meterCount,

      protectionRelay,
      busCoupler,
    },

    equipment,
  };
};


/* =========================================================
   FEEDER GENERATOR

   This is prepared now so the architecture supports it.

   Future Super Admin configuration:

   {
     voltageLevel: "33kV",
     incomingCount: 1,
     outgoingCount: 6
   }
========================================================= */

const buildFeederTopology = (
  configuration = {}
) => {
  const voltageLevel =
    normalizeVoltage(
      configuration.voltageLevel,
      "33kV"
    );

  /*
    These are project-specific quantities.

    1 incoming / 6 outgoing are only defaults.
    They are NOT platform restrictions.
  */

  const incomingCount =
    safeCount(
      configuration.incomingCount,
      1,
      20
    );

  const outgoingCount =
    safeCount(
      configuration.outgoingCount,
      6,
      30
    );


  /* =====================================================
     INCOMING FEEDERS
  ===================================================== */

  const incomingFeeders =
    Array.from(
      {
        length: incomingCount,
      },

      (_, index) =>
        electrical(
          `feeder-in-${index + 1}`,

          incomingCount === 1
            ? "Incoming Feeder"
            : `Incoming Feeder ${index + 1}`,

          `${voltageLevel} Incoming Feeder`,

          "incomer",

          {
            voltageLevel,
            direction: "incoming",
            feederNumber:
              index + 1,
          }
        )
    );


  /* =====================================================
     OUTGOING FEEDERS
  ===================================================== */

  const outgoingFeeders =
    Array.from(
      {
        length: outgoingCount,
      },

      (_, index) =>
        electrical(
          `feeder-og-${index + 1}`,

          `OG-${index + 1}`,

          `Outgoing Feeder ${index + 1}`,

          "feeder",

          {
            voltageLevel,
            direction: "outgoing",
            feederNumber:
              index + 1,
          }
        )
    );


  /* =====================================================
     RETURN PROJECT FEEDER TOPOLOGY
  ===================================================== */

  return {
    id: "feeder",

    title:
      `${voltageLevel} Feeder Panel`,

    subtitle:
      `${incomingCount} Incoming / ` +
      `${outgoingCount} Outgoing Feeders`,

    layout: "feeder",

    category: "electrical",

    voltageLevel,

    configuration: {
      ...configuration,

      voltageLevel,
      incomingCount,
      outgoingCount,
    },

    /*
      New dynamic structure.
    */

    incomingFeeders,
    outgoingFeeders,

    /*
      Keep these aliases temporarily for compatibility
      with any existing code that still reads
      topology.incoming or topology.equipment.

      topology.incoming:
      first incoming feeder for old code.

      topology.equipment:
      outgoing feeders for getTopologyEquipment()
      and existing telemetry/navigation logic.
    */

    incoming:
      incomingFeeders[0] || null,

    equipment:
      outgoingFeeders,
  };
};

/* =========================================================
   GENERIC PARALLEL EQUIPMENT GENERATOR
========================================================= */

const buildParallelEquipment = ({
  systemId,
  title,
  subtitle,
  category,
  count,
  equipmentIdPrefix,
  equipmentNamePrefix,
  labelBuilder,
  type,
  configuration,
}) => ({
  id: systemId,

  title,

  subtitle,

  layout: "parallel",

  category,

  configuration,

  equipment:
    Array.from(
      {
        length: count,
      },

      (_, index) =>
        electrical(
          `${equipmentIdPrefix}-${
            index + 1
          }`,

          `${equipmentNamePrefix}-${
            index + 1
          }`,

          labelBuilder(index),

          type
        )
    ),
});


/* =========================================================
   TRANSFORMER GENERATOR
========================================================= */

const buildTransformerTopology = (
  configuration = {}
) => {
  const count =
    safeCount(
      configuration.count,
      6,
      30
    );

  const primaryVoltage =
    normalizeVoltage(
      configuration.primaryVoltage,
      "33kV"
    );

  const secondaryVoltage =
    configuration.secondaryVoltage ||
    "433V";

  return buildParallelEquipment({
    systemId: "transformer",

    title: "Transformers",

    subtitle:
      `${primaryVoltage} / ` +
      `${secondaryVoltage} ` +
      "Step-Down Transformers",

    category: "transformer",

    count,

    equipmentIdPrefix:
      "transformer",

    equipmentNamePrefix:
      "TR",

    labelBuilder: () =>
      `${primaryVoltage} / ` +
      `${secondaryVoltage} Transformer`,

    type: "transformer",

    configuration: {
      ...configuration,

      count,
      primaryVoltage,
      secondaryVoltage,
    },
  });
};


/* =========================================================
   LT KIOSK GENERATOR
========================================================= */

const buildLtKioskTopology = (
  configuration = {}
) => {
  const count =
    safeCount(
      configuration.count,
      6,
      30
    );

  const voltage =
    configuration.voltage ||
    "433V";

  return buildParallelEquipment({
    systemId: "lt-kiosk",

    title: "LT Kiosk",

    subtitle:
      `${voltage} LT Distribution Panels`,

    category: "electrical",

    count,

    equipmentIdPrefix:
      "kiosk",

    equipmentNamePrefix:
      "KIOSK",

    labelBuilder: () =>
      `${voltage} LT Kiosk`,

    type: "kiosk",

    configuration: {
      ...configuration,

      count,
      voltage,
    },
  });
};


/* =========================================================
   BUSDUCT GENERATOR
========================================================= */

const buildBusductTopology = (
  configuration = {}
) => {
  const count =
    safeCount(
      configuration.count,
      6,
      30
    );

  return buildParallelEquipment({
    systemId: "busduct",

    title:
      "LT Busduct / Busbar",

    subtitle:
      "Busbar Condition Monitoring",

    category: "busduct",

    count,

    equipmentIdPrefix:
      "bus",

    equipmentNamePrefix:
      "BUS",

    labelBuilder: () =>
      "LT Busduct / Busbar",

    type: "busduct",

    configuration: {
      ...configuration,

      count,
    },
  });
};


/* =========================================================
   RAISING MAIN GENERATOR
========================================================= */

const buildRaisingMainTopology = (
  configuration = {}
) => {
  const count =
    safeCount(
      configuration.count,
      4,
      20
    );

  return buildParallelEquipment({
    systemId: "raising-main",

    title: "Raising Main",

    subtitle:
      "Vertical Building Power Distribution",

    category: "electrical",

    count,

    equipmentIdPrefix:
      "rm",

    equipmentNamePrefix:
      "Raising Main",

    labelBuilder: (
      index
    ) =>
      index < 2
        ? "Wing A Vertical Distribution"
        : index < 4
        ? "Wing B Vertical Distribution"
        : "Configured Vertical Distribution",

    type: "raising-main",

    configuration: {
      ...configuration,

      count,
    },
  });
};


/* =========================================================
   WING GENERATOR
========================================================= */

const buildWingTopology = (
  configuration = {}
) => {
  const count =
    safeCount(
      configuration.count,
      2,
      10
    );

  const floorsPerWing =
    safeCount(
      configuration.floorsPerWing,
      20,
      100
    );

  const equipment =
    Array.from(
      {
        length: count,
      },

      (_, index) => {
        const letter =
          String.fromCharCode(
            65 + index
          );

        return electrical(
          `wing-${letter.toLowerCase()}`,

          `Wing ${letter}`,

          `${floorsPerWing} Floors`,

          "wing"
        );
      }
    );


  return {
    id: "wing",

    title:
      "Building Wings",

    subtitle:
      "Wing-Level Electrical Monitoring",

    layout:
      "parallel",

    category:
      "wing",

    configuration: {
      ...configuration,

      count,
      floorsPerWing,
    },

    equipment,
  };
};


/* =========================================================
   DG GENERATOR
========================================================= */

const buildDgTopology = (
  configuration = {}
) => {
  const count =
    safeCount(
      configuration.count,
      7,
      20
    );

  const units =
    Array.isArray(
      configuration.units
    )
      ? configuration.units
      : [];


  return buildParallelEquipment({
    systemId: "dg",

    title:
      "Diesel Generator Plant",

    subtitle:
      "Emergency / Standby Generation",

    category: "dg",

    count,

    equipmentIdPrefix:
      "dg",

    equipmentNamePrefix:
      "DG",

    labelBuilder: (
      index
    ) => {
      const unit =
        units[index];

      const capacity =
        unit?.capacity ||
        (
          index < 4
            ? 1500
            : 1250
        );

      return `${capacity} kVA GENSET`;
    },

    type: "dg",

    configuration: {
      ...configuration,

      count,
    },
  });
};


/* =========================================================
   HVAC GENERATOR

   HVAC = 0 is valid.
   We do not create fake equipment.
========================================================= */

const buildHvacTopology = (
  configuration = {}
) => {
  const count =
    safeCount(
      configuration.count,
      0,
      30
    );

  return {
    id: "hvac",

    title: "HVAC",

    subtitle:
      "HVAC Cooling Plant",

    layout:
      count === 0
        ? "empty"
        : "parallel",

    category:
      "electrical",

    configuration: {
      ...configuration,

      count,
    },

    equipment:
      Array.from(
        {
          length: count,
        },

        (_, index) =>
          electrical(
            `hvac-${index + 1}`,

            `HVAC-${index + 1}`,

            "HVAC Equipment",

            "hvac"
          )
      ),
  };
};


/* =========================================================
   WATER GENERATOR

   Preserve established Water topology:
   Water Management
        ↓
   STP / WTP / Tanks

   Tank count can become project-specific.
========================================================= */

const buildWaterTopology = (
  configuration = {}
) => {
  const stpEnabled =
    configuration.stpEnabled !==
    false;

  const wtpEnabled =
    configuration.wtpEnabled !==
    false;

  const tankCount =
    safeCount(
      configuration.tankCount,
      4,
      20
    );


  const equipment = [
    {
      id: "water-management",

      name:
        "Water Management",

      label:
        "Central Water Monitoring",

      type:
        "water-main",
    },
  ];

  if (stpEnabled) {
    equipment.push({
      id: "stp",

      name: "STP",

      label:
        "Sewage Treatment Plant",

      type: "stp",
    });
  }

  if (wtpEnabled) {
    equipment.push({
      id: "wtp",

      name: "WTP",

      label:
        "Water Treatment Plant",

      type: "wtp",
    });
  }

  if (tankCount > 0) {
    equipment.push(
      ...Array.from(
        {
          length:
            tankCount,
        },

        (_, index) => ({
          id:
            `tank-${index + 1}`,

          name:
            `Tank Level-${index + 1}`,

          label:
            "Water Storage Tank",

          type:
            "tank",
        })
      )
    );
  }


  return {
    id: "wtp",

    title:
      "Water Management",

    subtitle:
      "Water, STP, WTP & Tank Monitoring",

    layout:
      "water",

    category:
      "water",

    configuration: {
      ...configuration,

      stpEnabled,
      wtpEnabled,
      tankCount,
    },

    equipment,
  };
};


/* =========================================================
   FIRE GENERATOR

   Current established project:
   - Fire Alarms
   - Fire Fighting
   - Fire Pump

   Do not invent a sequential relationship.
========================================================= */

const buildFireTopology = (
  configuration = {}
) => {
  const fireAlarms =
    configuration.fireAlarms !==
    false;

  const fireFighting =
    configuration.fireFighting !==
    false;

  const firePump =
    configuration.firePump !==
    false;

  const base =
    cloneTopology(
      flowTopology.fire
    );

  const enabledIds =
    new Set(
      [
        fireAlarms
          ? "fire-alarms"
          : null,
        fireFighting
          ? "fire-fighting"
          : null,
        firePump
          ? "fire-pump"
          : null,
      ].filter(Boolean)
    );

  return {
    ...base,

    configuration: {
      ...configuration,

      fireAlarms,
      fireFighting,
      firePump,
    },

    equipment:
      base.equipment.filter(
        (item) =>
          enabledIds.has(
            item.id
          )
      ),
  };
};


/* =========================================================
   PCC GENERATOR

   PCC topology is currently highly project-specific.

   We intentionally preserve the verified PCC1–PCC4
   topology instead of inventing new circuits based
   only on a panel count.

   Later Super Admin PCC configuration will use
   explicit panel/circuit templates.
========================================================= */

const buildPccTopology = (configuration = {}) => {
  const configuredPanels = Array.isArray(configuration.panels)
    ? configuration.panels
    : null;

  const count = configuredPanels
    ? Math.min(20, configuredPanels.length)
    : safeCount(configuration.count, 4, 20);

  const panels = Array.from({ length: count }, (_, panelIndex) => {
    const panelNumber = panelIndex + 1;
    const panelId = `pcc-${panelNumber}`;
    const configuredPanel = configuredPanels?.[panelIndex];

    const isCountBased =
      configuredPanel &&
      (
        Object.prototype.hasOwnProperty.call(configuredPanel, "incomingCount") ||
        Object.prototype.hasOwnProperty.call(configuredPanel, "outgoingCount") ||
        Object.prototype.hasOwnProperty.call(configuredPanel, "busCoupler")
      );

    if (isCountBased) {
      const incomingCount = safeCount(configuredPanel.incomingCount, 0, 50);
      const outgoingCount = safeCount(configuredPanel.outgoingCount, 0, 50);

      const incoming = Array.from({ length: incomingCount }, (_, index) =>
        makePccCircuit(
          panelId,
          `inc-${index + 1}`,
          `INC ${index + 1}`,
          "incoming",
          "A"
        )
      );

      const outgoing = Array.from({ length: outgoingCount }, (_, index) =>
        makePccCircuit(
          panelId,
          `out-${index + 1}`,
          `OUT ${index + 1}`,
          "outgoing",
          "A"
        )
      );

      const coupler = configuredPanel.busCoupler
        ? [
            makePccCircuit(
              panelId,
              "bus-coupler",
              "Bus Coupler",
              "coupler"
            ),
          ]
        : [];

      const customEquipment = Array.isArray(configuredPanel.customEquipment)
        ? configuredPanel.customEquipment
            .filter(Boolean)
            .map((item, index) => ({
              ...item,
              id: item.id || `${panelId}-custom-${index + 1}`,
              source: "custom",
            }))
        : [];

      const upsEnabled = Boolean(configuredPanel.upsEnabled);
      const upsUnits =
        upsEnabled && Array.isArray(configuredPanel.upsUnits)
          ? configuredPanel.upsUnits
              .filter(Boolean)
              .map((unit) =>
                typeof unit === "string" ? unit : { ...unit }
              )
          : [];

      return {
        id: configuredPanel.id || panelId,
        name: configuredPanel.name || `PCC ${panelNumber}`,
        incomingCount,
        outgoingCount,
        busCoupler: Boolean(configuredPanel.busCoupler),
        circuits: [...incoming, ...outgoing, ...coupler, ...customEquipment],
        equipment: upsEnabled ? ["ups"] : [],
        upsEnabled,
        upsSupply: configuredPanel.upsSupply || "incoming",
        upsSupplyCircuitIds: [],
        upsUnits,
      };
    }

    const referencePanels =
      flowTopology.pcc?.panels || [];

    const referencePanel =
      referencePanels.find(
        (item) =>
          item.id ===
          (configuredPanel?.id || panelId)
      ) ||
      referencePanels[panelIndex] || {
        id: panelId,
        name: `PCC ${panelNumber}`,
        circuits: [],
      };

    const hasCircuits =
      configuredPanel &&
      Object.prototype.hasOwnProperty.call(configuredPanel, "circuits");

    const circuits = hasCircuits
      ? (Array.isArray(configuredPanel.circuits) ? configuredPanel.circuits : [])
          .filter(Boolean)
          .map((item) => ({ ...item }))
      : (referencePanel.circuits || []).map((item) => ({ ...item }));

    const hasUpsUnits =
      configuredPanel &&
      Object.prototype.hasOwnProperty.call(configuredPanel, "upsUnits");

    const upsUnits = hasUpsUnits
      ? (Array.isArray(configuredPanel.upsUnits) ? configuredPanel.upsUnits : [])
          .filter(Boolean)
          .map((unit) => (typeof unit === "string" ? unit : { ...unit }))
      : panelNumber <= 2
        ? ["ups-30-1", "ups-30-2", "ups-10-1", "ups-10-2"]
        : [];

    const upsEnabled =
      typeof configuredPanel?.upsEnabled === "boolean"
        ? configuredPanel.upsEnabled
        : upsUnits.length > 0;

    return {
      id: configuredPanel?.id || referencePanel.id || panelId,
      name: configuredPanel?.name || referencePanel.name || `PCC ${panelNumber}`,
      circuits,
      equipment: upsEnabled ? ["ups"] : [],
      upsEnabled,
      upsSupply: configuredPanel?.upsSupply || "incoming",
      upsSupplyCircuitIds: Array.isArray(configuredPanel?.upsSupplyCircuitIds)
        ? configuredPanel.upsSupplyCircuitIds
        : [],
      upsUnits,
    };
  });

  return {
    id: "pcc",
    title: "PCC Panels",
    subtitle: "Power Control Centre Distribution",
    layout: count === 0 ? "empty" : "pcc",
    category: "pcc",
    configuration: { ...configuration, count, panels },
    equipment: panels.map((panel) =>
      electrical(
        panel.id,
        panel.name,
        "POWER CONTROL CENTRE",
        "pcc",
        {
          panelId: panel.id,
          incomingCount: panel.incomingCount,
          outgoingCount: panel.outgoingCount,
        }
      )
    ),
    panels,
  };
};

export function buildProjectSystemTopology(
  projectSystem
) {
  if (!projectSystem) {
    return null;
  }


  const systemId =
    projectSystem.type ||
    projectSystem.id;


  const configuration =
    projectSystem.configuration ||
    {};


  switch (systemId) {

    case "source":
      return buildSourceTopology(
        configuration
      );


    case "feeder":
      return buildFeederTopology(
        configuration
      );


    case "transformer":
      return buildTransformerTopology(
        configuration
      );


    case "lt-kiosk":
      return buildLtKioskTopology(
        configuration
      );


    case "busduct":
      return buildBusductTopology(
        configuration
      );


    case "pcc":
      return buildPccTopology(
        configuration
      );


    case "raising-main":
      return buildRaisingMainTopology(
        configuration
      );


    case "wing":
      return buildWingTopology(
        configuration
      );


    case "dg":
      return buildDgTopology(
        configuration
      );


    case "hvac":
      return buildHvacTopology(
        configuration
      );


    case "wtp":
      return buildWaterTopology(
        configuration
      );


    case "fire":
      return buildFireTopology(
        configuration
      );


    default:
      /*
        Unknown project system.

        Do not invent topology.
      */
      return null;
  }
}


/* =========================================================
   BUILD ALL TOPOLOGIES FOR ONE PROJECT

   Example:

   const projectFlows =
     buildProjectFlowConfigs(project);

   projectFlows.source
   projectFlows.transformer
   projectFlows.dg
========================================================= */

export function buildProjectFlowConfigs(
  project
) {
  if (
    !project ||
    !Array.isArray(
      project.systems
    )
  ) {
    return flowTopology;
  }


  return Object.fromEntries(
    project.systems
      .map(
        (
          projectSystem
        ) => {
          const topology =
            buildProjectSystemTopology(
              projectSystem
            );


          if (!topology) {
            return null;
          }


          return [
            topology.id,
            topology,
          ];
        }
      )
      .filter(Boolean)
  );
}


/* =========================================================
   GET ONE TOPOLOGY

   This will be useful inside FlowDetail.jsx.

   No project:
      original flowTopology

   Project:
      generated project topology
========================================================= */

export function getProjectTopology(
  project,
  systemId
) {
  if (!systemId) {
    return null;
  }


  if (
    !project ||
    !Array.isArray(
      project.systems
    )
  ) {
    return (
      flowTopology[
        systemId
      ] || null
    );
  }


  const projectSystem =
    project.systems.find(
      (system) =>
        (
          system.type ||
          system.id
        ) === systemId
    );


  if (!projectSystem) {
    return null;
  }


  return buildProjectSystemTopology(
    projectSystem
  );
}


/* =========================================================
   PROJECT-AWARE OVERVIEW CATEGORIES

   This allows Overview to receive the correct:
   - selected systems
   - Source voltage
   - equipment counts
   - HVAC NOT CONFIGURED state
========================================================= */

export function buildProjectFlowCategories(
  project
) {
  if (
    !project ||
    !Array.isArray(
      project.systems
    )
  ) {
    return flowCategories;
  }


  const projectTopologies =
    buildProjectFlowConfigs(
      project
    );


  return project.systems
    .map(
      (
        projectSystem
      ) => {
        const systemId =
          projectSystem.type ||
          projectSystem.id;


        const baseCategory =
          flowCategories.find(
            (category) =>
              category.id ===
              systemId
          );


        const topology =
          projectTopologies[
            systemId
          ];


        if (
          !baseCategory ||
          !topology
        ) {
          return null;
        }


        const configuration =
          projectSystem.configuration ||
          {};


        const category = {
          ...baseCategory,

          projectSystem,

          configuration,
        };


        /* SOURCE */

        if (
          systemId ===
          "source"
        ) {
          const voltage =
            normalizeVoltage(
              configuration.voltageLevel,
              "33kV"
            );


          category.shortName =
            `${voltage} Source`;

          category.value =
            voltage;
        }


        /* FEEDER */

        if (
          systemId ===
          "feeder"
        ) {
          const incomingCount =
            safeCount(
              configuration.incomingCount,
              1
            );

          const outgoingCount =
            safeCount(
              configuration.outgoingCount,
              6
            );


          category.value =
            `${incomingCount} IN / ` +
            `${outgoingCount} OUT`;
        }


        /* TRANSFORMER */

        if (
          systemId ===
          "transformer"
        ) {
          const count =
            topology.equipment?.length ||
            0;


          category.value =
            `${count} Unit${
              count === 1
                ? ""
                : "s"
            }`;
        }


        /* LT KIOSK */

        if (
          systemId ===
          "lt-kiosk"
        ) {
          const count =
            topology.equipment?.length ||
            0;


          category.value =
            `${count} Unit${
              count === 1
                ? ""
                : "s"
            }`;
        }


        /* BUSDUCT */

        if (
          systemId ===
          "busduct"
        ) {
          const count =
            topology.equipment?.length ||
            0;


          category.value =
            `${count} Busbar${
              count === 1
                ? ""
                : "s"
            }`;
        }


        /* PCC */

        if (
          systemId ===
          "pcc"
        ) {
          const count =
            topology.panels?.length ||
            0;


          category.value =
            `${count} Panel${
              count === 1
                ? ""
                : "s"
            }`;
        }


        /* RAISING MAIN */

        if (
          systemId ===
          "raising-main"
        ) {
          const count =
            topology.equipment?.length ||
            0;


          category.value =
            `${count} Main${
              count === 1
                ? ""
                : "s"
            }`;
        }


        /* WING */

        if (
          systemId ===
          "wing"
        ) {
          const count =
            topology.equipment?.length ||
            0;


          category.value =
            `${count} Wing${
              count === 1
                ? ""
                : "s"
            }`;
        }


        /* DG */

        if (
          systemId ===
          "dg"
        ) {
          const count =
            topology.equipment?.length ||
            0;


          category.value =
            `${count} DG${
              count === 1
                ? ""
                : "s"
            }`;
        }


        /* HVAC */

        if (
          systemId ===
          "hvac"
        ) {
          const count =
            topology.equipment?.length ||
            0;


          if (
            count === 0
          ) {
            category.status =
              "NOT CONFIGURED";

            category.health =
              "UNAVAILABLE";

            category.value =
              "0 Units";
          } else {
            category.status =
              "ONLINE";

            category.health =
              "HEALTHY";

            category.value =
              `${count} Unit${
                count === 1
                  ? ""
                  : "s"
              }`;
          }
        }


        /* WATER */

        if (
          systemId ===
          "wtp"
        ) {
          const tankCount =
            topology.configuration
              ?.tankCount ??
            4;


          category.value =
            `${tankCount} Tank${
              tankCount === 1
                ? ""
                : "s"
            }`;
        }


        return category;
      }
    )
    .filter(Boolean);
}
