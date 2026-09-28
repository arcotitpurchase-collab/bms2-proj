// import { useEffect, useState } from "react";

// import AppHeader from "./components/AppHeader";
// import Overview from "./pages/Overview";
// import FlowDetail from "./pages/FlowDetail";
// import SystemDetail from "./pages/SystemDetail";

// function App() {
//   const [selectedFlow, setSelectedFlow] = useState(null);
//   const [selectedEquipment, setSelectedEquipment] = useState(null);
//   const [theme, setTheme] = useState(() => {
//     if (typeof window === "undefined") return "dark";
//     return localStorage.getItem("arcot-dashboard-theme") || "dark";
//   });

//   useEffect(() => {
//     localStorage.setItem("arcot-dashboard-theme", theme);
//     document.documentElement.setAttribute("data-theme", theme);
//   }, [theme]);

//   const handleOpenFlow = (flow) => {
//     setSelectedFlow(flow);
//     setSelectedEquipment(null);
//   };

//   const handleOpenEquipment = (equipment) => setSelectedEquipment(equipment);

//   const handleBackToOverview = () => {
//     setSelectedFlow(null);
//     setSelectedEquipment(null);
//   };

//   const handleBackToFlow = () => setSelectedEquipment(null);

//   let pageContent;

//   if (!selectedFlow) {
//     pageContent = <Overview onOpenFlow={handleOpenFlow} />;
//   } else if (!selectedEquipment) {
//     pageContent = (
//       <FlowDetail
//         flow={selectedFlow}
//         onBack={handleBackToOverview}
//         onOpenEquipment={handleOpenEquipment}
//       />
//     );
//   } else {
//     pageContent = (
//       <SystemDetail
//         flow={selectedFlow}
//         equipment={selectedEquipment}
//         onBack={handleBackToFlow}
//       />
//     );
//   }

//   return (
//     <div className="app-root">
//       <AppHeader theme={theme} setTheme={setTheme} />
//       <div className="app-page">{pageContent}</div>
//     </div>
//   );
// }

// export default App;









import { useEffect, useState } from "react";

import AppHeader from "./components/AppHeader";

import Overview from "./pages/Overview";
import FlowDetail from "./pages/FlowDetail";
import SystemDetail from "./pages/SystemDetail";

import SuperAdminDashboard from "./pages/superadmin/SuperAdminDashboard";
import CreateProject from "./pages/superadmin/CreateProject";


function App() {
  /* =======================================================
     THEME
  ======================================================= */

  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    return (
      localStorage.getItem(
        "arcot-dashboard-theme"
      ) || "dark"
    );
  });


  /* =======================================================
     APPLICATION MODE
  ======================================================= */

  const [appMode, setAppMode] =
    useState("superadmin-dashboard");


  /* =======================================================
     PROJECTS
  ======================================================= */

  const [projects, setProjects] = useState(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      const saved =
        localStorage.getItem(
          "bms-projects"
        );

      const parsed =
        saved
          ? JSON.parse(saved)
          : [];

      return Array.isArray(parsed)
        ? parsed
        : [];
    } catch {
      return [];
    }
  });


  /* =======================================================
     ACTIVE PROJECT
  ======================================================= */

  const [
    activeProject,
    setActiveProject,
  ] = useState(null);


  /* =======================================================
     SELECTED FLOW
  ======================================================= */

  const [
    selectedFlow,
    setSelectedFlow,
  ] = useState(null);


  /* =======================================================
     SELECTED EQUIPMENT
  ======================================================= */

  const [
    selectedEquipment,
    setSelectedEquipment,
  ] = useState(null);


  /* =======================================================
     THEME PERSISTENCE
  ======================================================= */

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.setItem(
      "arcot-dashboard-theme",
      theme
    );

    document.documentElement.setAttribute(
      "data-theme",
      theme
    );
  }, [theme]);


  /* =======================================================
     PROJECT PERSISTENCE
  ======================================================= */

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.setItem(
      "bms-projects",
      JSON.stringify(projects)
    );
  }, [projects]);


  /* =======================================================
     CREATE PROJECT
  ======================================================= */

  const handleCreateProject = () => {
    setAppMode(
      "create-project"
    );
  };


  /* =======================================================
     CANCEL PROJECT CREATION
  ======================================================= */

  const handleCancelProject = () => {
    setAppMode(
      "superadmin-dashboard"
    );
  };


  /* =======================================================
     PROJECT CREATED
  ======================================================= */

  const handleProjectCreated = (
    project
  ) => {
    if (
      !project ||
      !Array.isArray(project.systems)
    ) {
      return;
    }


    /*
     * Replace project if the same ID already exists.
     * Otherwise add it as a new project.
     */
    setProjects((current) => [
      ...current.filter(
        (item) =>
          item.id !== project.id
      ),
      project,
    ]);


    /*
     * Open the newly created project immediately.
     */
    setActiveProject(project);

    setSelectedFlow(null);

    setSelectedEquipment(null);

    setAppMode("bms");
  };


  /* =======================================================
     OPEN PROJECT
  ======================================================= */

  const handleOpenProject = (
    project
  ) => {
    if (!project) {
      return;
    }

    setActiveProject(project);

    setSelectedFlow(null);

    setSelectedEquipment(null);

    setAppMode("bms");
  };


  /* =======================================================
     DELETE PROJECT
  ======================================================= */

  const handleDeleteProject = (
    projectId
  ) => {
    if (!projectId) {
      return;
    }


    /*
     * Remove only the selected project.
     */
    setProjects((current) =>
      current.filter(
        (project) =>
          project.id !== projectId
      )
    );


    /*
     * Normally deletion happens from the Super Admin
     * dashboard, so activeProject will be null.
     *
     * This safety check ensures that if deletion is later
     * exposed somewhere else, deleting the active project
     * also clears all BMS navigation state.
     */
    if (
      activeProject?.id ===
      projectId
    ) {
      setActiveProject(null);

      setSelectedFlow(null);

      setSelectedEquipment(null);

      setAppMode(
        "superadmin-dashboard"
      );
    }
  };


  /* =======================================================
     EXIT PROJECT
  ======================================================= */

  const handleExitProject = () => {
    setActiveProject(null);

    setSelectedFlow(null);

    setSelectedEquipment(null);

    setAppMode(
      "superadmin-dashboard"
    );
  };


  /* =======================================================
     OPEN FLOW
  ======================================================= */

  const handleOpenFlow = (
    flow
  ) => {
    setSelectedFlow(flow);

    setSelectedEquipment(null);
  };


  /* =======================================================
     OPEN EQUIPMENT
  ======================================================= */

  const handleOpenEquipment = (
    equipment
  ) => {
    setSelectedEquipment(
      equipment
    );
  };


  /* =======================================================
     BACK TO OVERVIEW
  ======================================================= */

  const handleBackToOverview = () => {
    setSelectedFlow(null);

    setSelectedEquipment(null);
  };


  /* =======================================================
     BACK TO FLOW
  ======================================================= */

  const handleBackToFlow = () => {
    setSelectedEquipment(null);
  };


  /* =======================================================
     SUPER ADMIN DASHBOARD
  ======================================================= */

  if (
    appMode ===
    "superadmin-dashboard"
  ) {
    return (
      <SuperAdminDashboard
        theme={theme}
        setTheme={setTheme}
        projects={projects}

        onCreateProject={
          handleCreateProject
        }

        onOpenProject={
          handleOpenProject
        }

        onDeleteProject={
          handleDeleteProject
        }
      />
    );
  }


  /* =======================================================
     CREATE PROJECT
  ======================================================= */

  if (
    appMode ===
    "create-project"
  ) {
    return (
      <CreateProject
        theme={theme}
        setTheme={setTheme}

        onCancel={
          handleCancelProject
        }

        onProjectCreated={
          handleProjectCreated
        }
      />
    );
  }


  /* =======================================================
     BMS DASHBOARD
  ======================================================= */

  let pageContent;


  /* -------------------------------------------------------
     OVERVIEW
  ------------------------------------------------------- */

  if (!selectedFlow) {
    pageContent = (
      <Overview
        project={
          activeProject
        }

        onOpenFlow={
          handleOpenFlow
        }
      />
    );
  }


  /* -------------------------------------------------------
     FLOW DETAIL
  ------------------------------------------------------- */

  else if (!selectedEquipment) {
    pageContent = (
      <FlowDetail
        project={
          activeProject
        }

        flow={
          selectedFlow
        }

        onBack={
          handleBackToOverview
        }

        onOpenEquipment={
          handleOpenEquipment
        }
      />
    );
  }


  /* -------------------------------------------------------
     SYSTEM DETAIL
  ------------------------------------------------------- */

  else {
    pageContent = (
      <SystemDetail
        project={
          activeProject
        }

        flow={
          selectedFlow
        }

        equipment={
          selectedEquipment
        }

        onBack={
          handleBackToFlow
        }
      />
    );
  }


  /* =======================================================
     BMS APPLICATION SHELL
  ======================================================= */

  return (
    <div className="app-root">

      <AppHeader
        theme={
          theme
        }

        setTheme={
          setTheme
        }

        project={
          activeProject
        }

        onExitProject={
          handleExitProject
        }
      />


      <div className="app-page">
        {pageContent}
      </div>

    </div>
  );
}


export default App;