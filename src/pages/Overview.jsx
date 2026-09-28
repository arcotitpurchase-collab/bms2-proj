// // import {
// //   useLayoutEffect,
// //   useRef,
// //   useState,
// // } from "react";

// // import FlowCard from "../components/FlowCard";
// // import { flowCategories } from "../data/flowConfigs";

// // function Overview({ onOpenFlow }) {
// //   const [paths, setPaths] = useState([]);
// //   const mapRef = useRef(null);

// //   useLayoutEffect(() => {
// //     const map = mapRef.current;
// //     if (!map) return undefined;

// //     let frameId = null;

// //     const updatePaths = () => {
// //       if (frameId) cancelAnimationFrame(frameId);

// //       frameId = requestAnimationFrame(() => {
// //         const cards = [...map.querySelectorAll("[data-flow-node]")];
// //         const mapRect = map.getBoundingClientRect();
// //         const nextPaths = [];

// //         for (let i = 0; i < cards.length - 1; i += 1) {
// //           const current = cards[i].getBoundingClientRect();
// //           const next = cards[i + 1].getBoundingClientRect();

// //           const currentCenterX =
// //             current.left - mapRect.left + current.width / 2;
// //           const currentCenterY =
// //             current.top - mapRect.top + current.height / 2;
// //           const nextCenterX =
// //             next.left - mapRect.left + next.width / 2;
// //           const nextCenterY =
// //             next.top - mapRect.top + next.height / 2;

// //           const sameRow =
// //             Math.abs(currentCenterY - nextCenterY) <
// //             Math.max(current.height, next.height) * 0.55;

// //           if (sameRow) {
// //             const goingRight = nextCenterX > currentCenterX;
// //             const startX = goingRight
// //               ? current.right - mapRect.left
// //               : current.left - mapRect.left;
// //             const endX = goingRight
// //               ? next.left - mapRect.left
// //               : next.right - mapRect.left;
// //             const y = currentCenterY;

// //             nextPaths.push({
// //               d: `M ${startX} ${y} L ${endX} ${y}`,
// //             });
// //           } else {
// //             const startX = currentCenterX;
// //             const startY = current.bottom - mapRect.top;
// //             const endX = nextCenterX;
// //             const endY = next.top - mapRect.top;
// //             const availableGap = Math.max(0, endY - startY);
// //             const midY =
// //               availableGap > 0
// //                 ? startY + availableGap / 2
// //                 : startY + 14;

// //             nextPaths.push({
// //               d:
// //                 `M ${startX} ${startY} ` +
// //                 `L ${startX} ${midY} ` +
// //                 `L ${endX} ${midY} ` +
// //                 `L ${endX} ${endY}`,
// //             });
// //           }
// //         }

// //         setPaths(nextPaths);
// //       });
// //     };

// //     updatePaths();

// //     const observer = new ResizeObserver(updatePaths);
// //     observer.observe(map);

// //     [...map.querySelectorAll("[data-flow-node]")].forEach((node) => {
// //       observer.observe(node);
// //     });

// //     window.addEventListener("resize", updatePaths);

// //     return () => {
// //       if (frameId) cancelAnimationFrame(frameId);
// //       observer.disconnect();
// //       window.removeEventListener("resize", updatePaths);
// //     };
// //   }, []);

// //   return (
// //     <main className="overview-shell">
// //       <section className="overview-dashboard">
// //         <section className="overview-section">
// //           <div className="overview-section__header">
// //             <div>
// //               <span>REAL-TIME SYSTEM FLOW</span>
// //               <h2>Systems</h2>
// //             </div>

// //             <p>{flowCategories.length} systems connected</p>
// //           </div>

// //           <div className="overview-flow-canvas" ref={mapRef}>
// //             <svg className="overview-flow-lines" aria-hidden="true">
// //               <defs>
// //                 <marker
// //                   id="overview-flow-arrow"
// //                   markerWidth="6"
// //                   markerHeight="6"
// //                   refX="5.5"
// //                   refY="3"
// //                   orient="auto"
// //                   markerUnits="strokeWidth"
// //                 >
// //                   <path
// //                     d="M0,0 L6,3 L0,6 Z"
// //                     className="overview-flow-arrowhead"
// //                   />
// //                 </marker>
// //               </defs>

// //               {paths.map((path, index) => (
// //                 <g key={`${index}-${path.d}`}>
// //                   <path
// //                     d={path.d}
// //                     className="overview-flow-path overview-flow-path--rail"
// //                   />
// //                   <path
// //                     d={path.d}
// //                     className="overview-flow-path overview-flow-path--glow"
// //                   />
// //                   <path
// //                     d={path.d}
// //                     className="overview-flow-path overview-flow-path--live"
// //                     markerEnd="url(#overview-flow-arrow)"
// //                   />
// //                 </g>
// //               ))}
// //             </svg>

// //             <div className="flow-grid">
// //               {flowCategories.map((item) => (
// //                 <div
// //                   className="overview-flow-node"
// //                   data-flow-node
// //                   key={item.id}
// //                 >
// //                   <FlowCard
// //                     item={item}
// //                     onOpen={onOpenFlow}
// //                   />
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>
// //       </section>
// //     </main>
// //   );
// // }

// // export default Overview;





// import {
//   useLayoutEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";

// import FlowCard from "../components/FlowCard";
// import {
//   buildProjectFlowCategories,
//   flowCategories,
// } from "../data/flowConfigs";

// function Overview({
//   project,
//   onOpenFlow,
// }) {
//   const [paths, setPaths] = useState([]);

//   const mapRef = useRef(null);

//   /* =========================================================
//      PROJECT-AWARE SYSTEM LIST

//      Existing behaviour:
//        No project
//        → use original flowCategories

//      Super Admin project:
//        project.systems
//        → match against existing flowCategories
//        → show only selected systems
//        → merge project configuration into the flow
//   ========================================================= */

//   const visibleFlows = useMemo(() => {
//     if (
//       !project ||
//       !Array.isArray(project.systems)
//     ) {
//       return flowCategories;
//     }

//     if (project.systems.length === 0) {
//       return [];
//     }

//     return buildProjectFlowCategories(
//       project
//     ).map((flow) => ({
//       ...flow,

//       projectId: project.id,

//       projectName:
//         project.projectName,

//       clientName:
//         project.clientName,
//     }));
//   }, [project]);

//   /* =========================================================
//      FLOW CONNECTOR CALCULATION

//      This preserves your existing measured SVG topology.
//   ========================================================= */

//   useLayoutEffect(() => {
//     const map = mapRef.current;

//     if (!map) {
//       return undefined;
//     }

//     let frameId = null;

//     const updatePaths = () => {
//       if (frameId) {
//         cancelAnimationFrame(
//           frameId
//         );
//       }

//       frameId =
//         requestAnimationFrame(() => {
//           const cards = [
//             ...map.querySelectorAll(
//               "[data-flow-node]"
//             ),
//           ];

//           const mapRect =
//             map.getBoundingClientRect();

//           const nextPaths = [];

//           for (
//             let i = 0;
//             i < cards.length - 1;
//             i += 1
//           ) {
//             const current =
//               cards[
//                 i
//               ].getBoundingClientRect();

//             const next =
//               cards[
//                 i + 1
//               ].getBoundingClientRect();

//             const currentCenterX =
//               current.left -
//               mapRect.left +
//               current.width / 2;

//             const currentCenterY =
//               current.top -
//               mapRect.top +
//               current.height / 2;

//             const nextCenterX =
//               next.left -
//               mapRect.left +
//               next.width / 2;

//             const nextCenterY =
//               next.top -
//               mapRect.top +
//               next.height / 2;

//             const sameRow =
//               Math.abs(
//                 currentCenterY -
//                   nextCenterY
//               ) <
//               Math.max(
//                 current.height,
//                 next.height
//               ) *
//                 0.55;

//             if (sameRow) {
//               const goingRight =
//                 nextCenterX >
//                 currentCenterX;

//               const startX =
//                 goingRight
//                   ? current.right -
//                     mapRect.left
//                   : current.left -
//                     mapRect.left;

//               const endX =
//                 goingRight
//                   ? next.left -
//                     mapRect.left
//                   : next.right -
//                     mapRect.left;

//               const y =
//                 currentCenterY;

//               nextPaths.push({
//                 d:
//                   `M ${startX} ${y} ` +
//                   `L ${endX} ${y}`,
//               });
//             } else {
//               const startX =
//                 currentCenterX;

//               const startY =
//                 current.bottom -
//                 mapRect.top;

//               const endX =
//                 nextCenterX;

//               const endY =
//                 next.top -
//                 mapRect.top;

//               const availableGap =
//                 Math.max(
//                   0,
//                   endY - startY
//                 );

//               const midY =
//                 availableGap > 0
//                   ? startY +
//                     availableGap / 2
//                   : startY + 14;

//               nextPaths.push({
//                 d:
//                   `M ${startX} ${startY} ` +
//                   `L ${startX} ${midY} ` +
//                   `L ${endX} ${midY} ` +
//                   `L ${endX} ${endY}`,
//               });
//             }
//           }

//           setPaths(nextPaths);
//         });
//     };

//     updatePaths();

//     const observer =
//       new ResizeObserver(
//         updatePaths
//       );

//     observer.observe(map);

//     [
//       ...map.querySelectorAll(
//         "[data-flow-node]"
//       ),
//     ].forEach((node) => {
//       observer.observe(node);
//     });

//     window.addEventListener(
//       "resize",
//       updatePaths
//     );

//     return () => {
//       if (frameId) {
//         cancelAnimationFrame(
//           frameId
//         );
//       }

//       observer.disconnect();

//       window.removeEventListener(
//         "resize",
//         updatePaths
//       );
//     };
//   }, [visibleFlows]);

//   /* =========================================================
//      OPEN FLOW

//      Pass the merged project-aware flow into App.jsx.
//   ========================================================= */

//   const handleOpenFlow = (
//     flow
//   ) => {
//     onOpenFlow?.(flow);
//   };

//   /* =========================================================
//      RENDER
//   ========================================================= */

//   return (
//     <main className="overview-shell">
//       <section className="overview-dashboard">

//         <section className="overview-section">

//           <div className="overview-section__header">

//             <div>
//               <span>
//                 REAL-TIME SYSTEM FLOW
//               </span>

//               <h2>
//                 Systems
//               </h2>
//             </div>


//             <p>
//               {visibleFlows.length}{" "}
//               {visibleFlows.length === 1
//                 ? "system"
//                 : "systems"}{" "}
//               connected
//             </p>

//           </div>


//           {/* ===============================================
//               PROJECT INFORMATION

//               Only shown when this Overview was opened
//               from a Super Admin generated project.
//           ================================================ */}

//           {project && (
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent:
//                   "space-between",
//                 gap: "20px",

//                 marginBottom: "18px",

//                 padding:
//                   "12px 16px",

//                 border:
//                   "1px solid rgba(69, 130, 153, 0.28)",

//                 background:
//                   "rgba(12, 37, 51, 0.72)",
//               }}
//             >
//               <div>
//                 <div
//                   style={{
//                     marginBottom: "4px",

//                     color:
//                       "#67cbd8",

//                     fontSize: "8px",

//                     fontWeight: 800,

//                     letterSpacing:
//                       ".12em",
//                   }}
//                 >
//                   ACTIVE BMS PROJECT
//                 </div>

//                 <div
//                   style={{
//                     color:
//                       "#e8f3f7",

//                     fontSize: "13px",

//                     fontWeight: 700,
//                   }}
//                 >
//                   {project.projectName}
//                 </div>
//               </div>


//               <div
//                 style={{
//                   textAlign:
//                     "right",
//                 }}
//               >
//                 <div
//                   style={{
//                     color:
//                       "#9ab4c2",

//                     fontSize: "9px",
//                   }}
//                 >
//                   {project.clientName}
//                 </div>

//                 <div
//                   style={{
//                     marginTop: "3px",

//                     color:
//                       "#718f9f",

//                     fontSize: "8px",
//                   }}
//                 >
//                   {project.projectCode}
//                   {project.location
//                     ? ` • ${project.location}`
//                     : ""}
//                 </div>
//               </div>
//             </div>
//           )}


//           {/* ===============================================
//               FLOW MAP
//           ================================================ */}

//           <div
//             className="overview-flow-canvas"
//             ref={mapRef}
//           >

//             <svg
//               className="overview-flow-lines"
//               aria-hidden="true"
//             >

//               <defs>
//                 <marker
//                   id="overview-flow-arrow"
//                   markerWidth="6"
//                   markerHeight="6"
//                   refX="5.5"
//                   refY="3"
//                   orient="auto"
//                   markerUnits="strokeWidth"
//                 >
//                   <path
//                     d="M0,0 L6,3 L0,6 Z"
//                     className="overview-flow-arrowhead"
//                   />
//                 </marker>
//               </defs>


//               {paths.map(
//                 (path, index) => (
//                   <g
//                     key={`${index}-${path.d}`}
//                   >

//                     <path
//                       d={path.d}
//                       className="overview-flow-path overview-flow-path--rail"
//                     />

//                     <path
//                       d={path.d}
//                       className="overview-flow-path overview-flow-path--glow"
//                     />

//                     <path
//                       d={path.d}
//                       className="overview-flow-path overview-flow-path--live"
//                       markerEnd="url(#overview-flow-arrow)"
//                     />

//                   </g>
//                 )
//               )}

//             </svg>


//             <div className="flow-grid">

//               {visibleFlows.map(
//                 (item) => (
//                   <div
//                     className="overview-flow-node"
//                     data-flow-node
//                     key={item.id}
//                   >

//                     <FlowCard
//                       item={item}
//                       onOpen={
//                         handleOpenFlow
//                       }
//                     />

//                   </div>
//                 )
//               )}

//             </div>

//           </div>

//         </section>

//       </section>
//     </main>
//   );
// }

// export default Overview;





import {
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import FlowCard from "../components/FlowCard";
import {
  buildProjectFlowCategories,
  flowCategories,
} from "../data/flowConfigs";

function getOverviewPlacements(count) {
  const patterns = {
    1: [1], 2: [2], 3: [3], 4: [4],
    5: [3, 2], 6: [3, 3], 7: [4, 3], 8: [4, 4],
    9: [3, 3, 3], 10: [4, 3, 3], 11: [4, 4, 3], 12: [4, 4, 4],
  };

  const rows = patterns[Math.min(Math.max(count, 1), 12)] || [];
  const placements = [];
  let itemIndex = 0;

  rows.forEach((itemsInRow, rowIndex) => {
    const span = itemsInRow === 1 ? 4 : itemsInRow === 2 ? 4 : itemsInRow === 3 ? 4 : 3;
    const used = itemsInRow * span;
    const start = Math.floor((12 - used) / 2) + 1;
    const columns = Array.from({ length: itemsInRow }, (_, index) => ({
      gridColumn: `${start + index * span} / span ${span}`,
      gridRow: rowIndex + 1,
    }));

    if (rowIndex % 2 === 1) columns.reverse();
    columns.forEach((placement) => { placements[itemIndex++] = placement; });
  });

  return placements;
}

function Overview({
  project,
  onOpenFlow,
}) {
  const [paths, setPaths] = useState([]);

  const mapRef = useRef(null);

  /* =========================================================
     PROJECT-AWARE SYSTEM LIST

     Existing behaviour:
       No project
       → use original flowCategories

     Super Admin project:
       project.systems
       → match against existing flowCategories
       → show only selected systems
       → merge project configuration into the flow
  ========================================================= */

  const visibleFlows = useMemo(() => {
    if (
      !project ||
      !Array.isArray(project.systems)
    ) {
      return flowCategories;
    }

    if (project.systems.length === 0) {
      return [];
    }

    return buildProjectFlowCategories(
      project
    ).map((flow) => ({
      ...flow,

      projectId: project.id,

      projectName:
        project.projectName,

      clientName:
        project.clientName,
    }));
  }, [project]);

  const placements = useMemo(
    () => getOverviewPlacements(visibleFlows.length),
    [visibleFlows.length]
  );

  /* =========================================================
     FLOW CONNECTOR CALCULATION

     This preserves your existing measured SVG topology.
  ========================================================= */

  useLayoutEffect(() => {
    const map = mapRef.current;

    if (!map) {
      return undefined;
    }

    let frameId = null;

    const updatePaths = () => {
      if (frameId) {
        cancelAnimationFrame(
          frameId
        );
      }

      frameId =
        requestAnimationFrame(() => {
          const cards = [
            ...map.querySelectorAll(
              "[data-flow-node]"
            ),
          ];

          const mapRect =
            map.getBoundingClientRect();

          const nextPaths = [];

          for (
            let i = 0;
            i < cards.length - 1;
            i += 1
          ) {
            const current =
              cards[
                i
              ].getBoundingClientRect();

            const next =
              cards[
                i + 1
              ].getBoundingClientRect();

            const currentCenterX =
              current.left -
              mapRect.left +
              current.width / 2;

            const currentCenterY =
              current.top -
              mapRect.top +
              current.height / 2;

            const nextCenterX =
              next.left -
              mapRect.left +
              next.width / 2;

            const nextCenterY =
              next.top -
              mapRect.top +
              next.height / 2;

            const sameRow =
              Math.abs(
                currentCenterY -
                  nextCenterY
              ) <
              Math.max(
                current.height,
                next.height
              ) *
                0.55;

            if (sameRow) {
              const goingRight =
                nextCenterX >
                currentCenterX;

              const startX =
                goingRight
                  ? current.right -
                    mapRect.left
                  : current.left -
                    mapRect.left;

              const endX =
                goingRight
                  ? next.left -
                    mapRect.left
                  : next.right -
                    mapRect.left;

              const y =
                currentCenterY;

              nextPaths.push({
                d:
                  `M ${startX} ${y} ` +
                  `L ${endX} ${y}`,
              });
            } else {
              const startX =
                currentCenterX;

              const startY =
                current.bottom -
                mapRect.top;

              const endX =
                nextCenterX;

              const endY =
                next.top -
                mapRect.top;

              const availableGap =
                Math.max(
                  0,
                  endY - startY
                );

              const midY =
                availableGap > 0
                  ? startY +
                    availableGap / 2
                  : startY + 14;

              nextPaths.push({
                d:
                  `M ${startX} ${startY} ` +
                  `L ${startX} ${midY} ` +
                  `L ${endX} ${midY} ` +
                  `L ${endX} ${endY}`,
              });
            }
          }

          setPaths(nextPaths);
        });
    };

    updatePaths();

    const observer =
      new ResizeObserver(
        updatePaths
      );

    observer.observe(map);

    [
      ...map.querySelectorAll(
        "[data-flow-node]"
      ),
    ].forEach((node) => {
      observer.observe(node);
    });

    window.addEventListener(
      "resize",
      updatePaths
    );

    return () => {
      if (frameId) {
        cancelAnimationFrame(
          frameId
        );
      }

      observer.disconnect();

      window.removeEventListener(
        "resize",
        updatePaths
      );
    };
  }, [visibleFlows]);

  /* =========================================================
     OPEN FLOW

     Pass the merged project-aware flow into App.jsx.
  ========================================================= */

  const handleOpenFlow = (
    flow
  ) => {
    onOpenFlow?.(flow);
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <main className="overview-shell">
      <section className="overview-dashboard">

        <section className="overview-section">

          <div className="overview-section__header">

            <div>
              <span>
                REAL-TIME SYSTEM FLOW
              </span>

              <h2>
                Systems
              </h2>
            </div>


            <p>
              {visibleFlows.length}{" "}
              {visibleFlows.length === 1
                ? "system"
                : "systems"}{" "}
              connected
            </p>

          </div>


          {/* ===============================================
              FLOW MAP
          ================================================ */}

          <div
            className="overview-flow-canvas"
            ref={mapRef}
          >

            <svg
              className="overview-flow-lines"
              aria-hidden="true"
            >

              <defs>
                <marker
                  id="overview-flow-arrow"
                  markerWidth="6"
                  markerHeight="6"
                  refX="5.5"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path
                    d="M0,0 L6,3 L0,6 Z"
                    className="overview-flow-arrowhead"
                  />
                </marker>
              </defs>


              {paths.map(
                (path, index) => (
                  <g
                    key={`${index}-${path.d}`}
                  >

                    <path
                      d={path.d}
                      className="overview-flow-path overview-flow-path--rail"
                      markerEnd="url(#overview-flow-arrow)"
                    />

                  </g>
                )
              )}

            </svg>


            <div
              className="flow-grid"
              data-flow-count={visibleFlows.length}
              style={{
                gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
                gridTemplateRows: `repeat(${Math.max(1, Math.ceil(visibleFlows.length / 4))}, minmax(0, 1fr))`,
              }}
            >

              {visibleFlows.map(
                (item, index) => (
                  <div
                    className="overview-flow-node"
                    data-flow-node
                    key={item.id}
                    style={placements[index]}
                  >

                    <FlowCard
                      item={item}
                      onOpen={
                        handleOpenFlow
                      }
                    />

                  </div>
                )
              )}

            </div>

          </div>

        </section>

      </section>
    </main>
  );
}

export default Overview;
