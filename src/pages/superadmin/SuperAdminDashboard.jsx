import {
  Activity,
  Building2,
  ChevronRight,
  Cpu,
  FolderKanban,
  Moon,
  Plus,
  Sun,
  Trash2,
  Zap,
} from "lucide-react";


function SuperAdminDashboard({
  theme,
  setTheme,
  projects = [],
  onCreateProject,
  onOpenProject,
  onDeleteProject,
}) {
  const dashboardStyles = `
    .sa-dashboard {
      --bg:#07131e;
      --surface:#0d1e2c;
      --surface-2:#102638;
      --border:#203d50;
      --text:#f4f8fb;
      --muted:#819cab;
      --cyan:#20b8ce;
      --green:#31c48d;
      --red:#ef6464;

      width:100%;
      min-height:100vh;
      box-sizing:border-box;

      background:var(--bg);
      color:var(--text);

      font-family:
        Inter,
        ui-sans-serif,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;
    }


    /* =====================================================
       HEADER
    ===================================================== */

    .sa-dashboard__header {
      height:72px;
      padding:0 34px;
      box-sizing:border-box;

      display:flex;
      align-items:center;
      justify-content:space-between;

      border-bottom:1px solid var(--border);
      background:#091823;
    }


    .sa-dashboard__brand {
      display:flex;
      align-items:center;
      gap:12px;
    }


    .sa-dashboard__brand-icon {
      width:40px;
      height:40px;

      display:flex;
      align-items:center;
      justify-content:center;

      border:1px solid #247f98;
      border-radius:6px;

      color:#5bd3e2;
      background:#0e3448;
    }


    .sa-dashboard__brand strong {
      display:block;

      font-size:15px;
      line-height:1.1;
    }


    .sa-dashboard__brand span {
      display:block;
      margin-top:4px;

      color:#7798aa;

      font-size:8px;
      font-weight:800;
      letter-spacing:.14em;
    }


    .sa-dashboard__header-actions {
      display:flex;
      align-items:center;
      gap:12px;
    }


    .sa-dashboard__role {
      padding:7px 10px;

      border:1px solid #24556d;
      border-radius:5px;

      color:#75cbd9;
      background:#0d2939;

      font-size:9px;
      font-weight:800;
      letter-spacing:.08em;
    }


    .sa-dashboard__theme {
      width:38px;
      height:38px;

      display:flex;
      align-items:center;
      justify-content:center;

      border:1px solid var(--border);
      border-radius:5px;

      color:#9ab9c9;
      background:#102536;

      cursor:pointer;

      transition:
        border-color .15s ease,
        color .15s ease,
        background .15s ease;
    }


    .sa-dashboard__theme:hover {
      border-color:#2d9db5;
      color:#67d1df;
    }


    /* =====================================================
       BODY
    ===================================================== */

    .sa-dashboard__body {
      width:min(100%,1440px);

      margin:0 auto;

      padding:32px 38px 44px;

      box-sizing:border-box;
    }


    /* =====================================================
       INTRO
    ===================================================== */

    .sa-dashboard__intro {
      display:flex;
      align-items:flex-end;
      justify-content:space-between;

      gap:30px;

      margin-bottom:28px;
    }


    .sa-dashboard__eyebrow {
      margin-bottom:7px;

      color:var(--cyan);

      font-size:9px;
      font-weight:800;
      letter-spacing:.14em;
    }


    .sa-dashboard__intro h1 {
      margin:0;

      font-size:29px;
      font-weight:720;
      letter-spacing:-.025em;
    }


    .sa-dashboard__intro p {
      max-width:650px;

      margin:8px 0 0;

      color:var(--muted);

      font-size:11px;
      line-height:1.6;
    }


    /* =====================================================
       CREATE PROJECT
    ===================================================== */

    .sa-dashboard__create {
      height:42px;

      padding:0 17px;

      display:flex;
      align-items:center;
      justify-content:center;

      gap:8px;

      flex-shrink:0;

      border:1px solid #28a9bd;
      border-radius:5px;

      color:#04171e;
      background:#36c3d3;

      font-size:10px;
      font-weight:800;

      cursor:pointer;
    }


    .sa-dashboard__create:hover {
      background:#50d0dd;
    }


    /* =====================================================
       GLOBAL SUMMARY
    ===================================================== */

    .sa-dashboard__stats {
      display:grid;

      grid-template-columns:
        repeat(4,minmax(0,1fr));

      gap:14px;

      margin-bottom:30px;
    }


    .sa-stat {
      min-height:102px;

      padding:17px;

      box-sizing:border-box;

      display:flex;
      align-items:center;

      gap:14px;

      border:1px solid var(--border);
      border-radius:6px;

      background:var(--surface);
    }


    .sa-stat__icon {
      width:42px;
      height:42px;

      flex:0 0 42px;

      display:flex;
      align-items:center;
      justify-content:center;

      border:1px solid #235a70;
      border-radius:5px;

      color:#56c9d9;
      background:#103246;
    }


    .sa-stat span {
      display:block;

      margin-bottom:4px;

      color:var(--muted);

      font-size:8px;
      font-weight:800;
      letter-spacing:.09em;
    }


    .sa-stat strong {
      display:block;

      font-size:22px;
      font-weight:600;
    }


    /* =====================================================
       PROJECT SECTION
    ===================================================== */

    .sa-dashboard__section-head {
      display:flex;
      align-items:center;
      justify-content:space-between;

      margin-bottom:13px;
    }


    .sa-dashboard__section-head h2 {
      margin:0;

      font-size:15px;
      font-weight:700;
    }


    .sa-dashboard__section-head span {
      color:var(--muted);

      font-size:9px;
    }


    /* =====================================================
       PROJECT GRID
    ===================================================== */

    .sa-projects {
      display:grid;

      grid-template-columns:
        repeat(3,minmax(0,1fr));

      gap:16px;

      align-items:stretch;
    }


    /* =====================================================
       PROJECT CARD
    ===================================================== */

    .sa-project {
      min-width:0;
      min-height:220px;

      padding:18px;

      box-sizing:border-box;

      display:flex;
      flex-direction:column;

      border:1px solid var(--border);
      border-radius:6px;

      background:var(--surface);
    }


    /* =====================================================
       PROJECT TOP
    ===================================================== */

    .sa-project__top {
      display:flex;
      align-items:center;
      justify-content:space-between;

      gap:12px;
    }


    .sa-project__icon {
      width:40px;
      height:40px;

      flex:0 0 40px;

      display:flex;
      align-items:center;
      justify-content:center;

      border:1px solid #28667d;
      border-radius:5px;

      color:#5dd0df;
      background:#103247;
    }


    .sa-project__top-actions {
      display:flex;
      align-items:center;

      gap:8px;
    }


    /* =====================================================
       SYSTEM COUNT
    ===================================================== */

    .sa-project__system-count {
      height:30px;

      padding:0 10px;

      display:flex;
      align-items:center;

      gap:5px;

      box-sizing:border-box;

      border:1px solid #245568;
      border-radius:4px;

      color:#8ca9b7;
      background:#0b2230;

      white-space:nowrap;
    }


    .sa-project__system-count strong {
      color:#5dd0df;

      font-size:13px;
      font-weight:600;

      line-height:1;
    }


    .sa-project__system-count span {
      color:#7896a5;

      font-size:7px;
      font-weight:800;

      letter-spacing:.08em;
    }


    /* =====================================================
       ACTIVE STATUS
    ===================================================== */

    .sa-project__status {
      height:30px;

      padding:0 8px;

      display:flex;
      align-items:center;

      gap:6px;

      box-sizing:border-box;

      color:#7fd8b5;

      font-size:8px;
      font-weight:800;
      letter-spacing:.08em;
    }


    .sa-project__status::before {
      content:"";

      width:6px;
      height:6px;

      flex:0 0 6px;

      border-radius:50%;

      background:var(--green);
    }


    /* =====================================================
       DELETE PROJECT
    ===================================================== */

    .sa-project__delete {
      width:30px;
      height:30px;

      padding:0;

      flex:0 0 30px;

      display:flex;
      align-items:center;
      justify-content:center;

      border:1px solid rgba(239,100,100,.38);
      border-radius:4px;

      color:#df7373;
      background:rgba(127,29,29,.12);

      cursor:pointer;

      transition:
        border-color .15s ease,
        color .15s ease,
        background .15s ease;
    }


    .sa-project__delete:hover {
      border-color:#d95f5f;

      color:#ff8a8a;

      background:rgba(139,38,38,.24);
    }


    .sa-project__delete:focus-visible {
      outline:2px solid rgba(239,100,100,.4);
      outline-offset:2px;
    }


    /* =====================================================
       PROJECT IDENTITY
    ===================================================== */

    .sa-project__identity {
      margin-top:19px;
    }


    .sa-project__identity h3 {
      margin:0;

      color:var(--text);

      font-size:17px;
      font-weight:700;

      line-height:1.25;
    }


    .sa-project__client {
      margin:6px 0 0;

      color:var(--muted);

      font-size:9px;

      line-height:1.4;
    }


    /* =====================================================
       PROJECT DIVIDER
    ===================================================== */

    .sa-project__divider {
      width:100%;
      height:1px;

      margin:18px 0;

      background:#18394a;
    }


    /* =====================================================
       OPEN PROJECT
    ===================================================== */

    .sa-project__open {
      width:100%;
      height:38px;

      margin-top:auto;

      padding:0 11px;

      display:flex;
      align-items:center;
      justify-content:space-between;

      border:1px solid #285b72;
      border-radius:4px;

      color:#bcd2de;
      background:#10283a;

      font-size:9px;
      font-weight:800;
      letter-spacing:.02em;

      cursor:pointer;

      transition:
        border-color .15s ease,
        color .15s ease,
        background .15s ease;
    }


    .sa-project__open:hover {
      border-color:#2d9db5;

      color:#67d1df;

      background:#112d40;
    }


    /* =====================================================
       EMPTY STATE
    ===================================================== */

    .sa-projects-empty {
      grid-column:1 / -1;

      min-height:310px;

      padding:40px;

      box-sizing:border-box;

      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;

      border:1px dashed #294b60;
      border-radius:6px;

      background:#0a1b28;

      text-align:center;
    }


    .sa-projects-empty__icon {
      width:56px;
      height:56px;

      margin-bottom:16px;

      display:flex;
      align-items:center;
      justify-content:center;

      border:1px solid #265b71;
      border-radius:6px;

      color:#5acbd9;
      background:#0f2c3e;
    }


    .sa-projects-empty h3 {
      margin:0 0 7px;

      font-size:16px;
    }


    .sa-projects-empty p {
      max-width:460px;

      margin:0 0 18px;

      color:var(--muted);

      font-size:10px;
      line-height:1.6;
    }


    /* =====================================================
       LIGHT THEME
    ===================================================== */

    html[data-theme="light"] .sa-dashboard {
      --bg:#f3f6f8;
      --surface:#ffffff;
      --surface-2:#edf3f6;
      --border:#cfdae0;
      --text:#17354b;
      --muted:#647e8e;

      background:var(--bg);
    }


    html[data-theme="light"]
    .sa-dashboard__header {
      background:#ffffff;
    }


    html[data-theme="light"]
    .sa-dashboard__theme {
      color:#476879;
      background:#ffffff;
    }


    html[data-theme="light"]
    .sa-project__system-count {
      border-color:#cbdce3;

      background:#f3f8fa;
    }


    html[data-theme="light"]
    .sa-project__system-count strong {
      color:#168ca0;
    }


    html[data-theme="light"]
    .sa-project__system-count span {
      color:#607e8e;
    }


    html[data-theme="light"]
    .sa-project__divider {
      background:#dbe5ea;
    }


    html[data-theme="light"]
    .sa-project__open {
      color:#315a70;
      background:#edf4f7;
    }


    html[data-theme="light"]
    .sa-project__open:hover {
      color:#167f91;

      border-color:#73b8c5;

      background:#e6f3f6;
    }


    html[data-theme="light"]
    .sa-project__delete {
      color:#c84d4d;

      border-color:#e9baba;

      background:#fff5f5;
    }


    html[data-theme="light"]
    .sa-project__delete:hover {
      color:#a92f2f;

      border-color:#d86969;

      background:#ffeaea;
    }


    html[data-theme="light"]
    .sa-projects-empty {
      background:#ffffff;
    }


    /* =====================================================
       RESPONSIVE
    ===================================================== */

    @media (max-width:1050px) {
      .sa-dashboard__stats {
        grid-template-columns:
          repeat(2,minmax(0,1fr));
      }


      .sa-projects {
        grid-template-columns:
          repeat(2,minmax(0,1fr));
      }
    }


    @media (max-width:700px) {
      .sa-dashboard__header {
        padding:0 18px;
      }


      .sa-dashboard__role {
        display:none;
      }


      .sa-dashboard__body {
        padding:24px 18px 35px;
      }


      .sa-dashboard__intro {
        align-items:flex-start;
        flex-direction:column;
      }


      .sa-dashboard__stats,
      .sa-projects {
        grid-template-columns:1fr;
      }


      .sa-project__top {
        align-items:flex-start;
      }


      .sa-project__top-actions {
        gap:5px;
      }


      .sa-project__system-count {
        padding:0 7px;
      }
    }
  `;


  /* =======================================================
     TOTAL SYSTEMS ACROSS ALL PROJECTS
  ======================================================= */

  const totalSystems = projects.reduce(
    (total, project) => {
      const projectSystems =
        Array.isArray(project.systems)
          ? project.systems
          : [];

      return (
        total +
        projectSystems.length
      );
    },
    0
  );


  /* =======================================================
     DELETE PROJECT
  ======================================================= */

  const handleDeleteProject = (
    project
  ) => {
    if (!project) {
      return;
    }


    const projectName =
      project.projectName ||
      project.name ||
      "this project";


    const confirmed =
      window.confirm(
        `Delete "${projectName}"?\n\n` +
          "This project will be permanently removed from the dashboard."
      );


    if (!confirmed) {
      return;
    }


    onDeleteProject?.(
      project.id
    );
  };


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main className="sa-dashboard">

      <style>
        {dashboardStyles}
      </style>


      {/* ===================================================
          HEADER
      =================================================== */}

      <header className="sa-dashboard__header">

        <div className="sa-dashboard__brand">

          <div className="sa-dashboard__brand-icon">
            <Activity
              size={21}
              strokeWidth={1.8}
            />
          </div>


          <div>

            <strong>
              BMS CONTROL
            </strong>

            <span>
              PROJECT CONFIGURATION PLATFORM
            </span>

          </div>

        </div>


        <div className="sa-dashboard__header-actions">

          <div className="sa-dashboard__role">
            SUPER ADMIN
          </div>


          <button
            type="button"
            className="sa-dashboard__theme"
            onClick={() =>
              setTheme?.(
                theme === "dark"
                  ? "light"
                  : "dark"
              )
            }
            aria-label="Change theme"
            title="Change theme"
          >

            {theme === "dark" ? (
              <Sun size={17} />
            ) : (
              <Moon size={17} />
            )}

          </button>

        </div>

      </header>


      {/* ===================================================
          CONTENT
      =================================================== */}

      <section className="sa-dashboard__body">


        {/* =================================================
            INTRO
        ================================================= */}

        <div className="sa-dashboard__intro">

          <div>

            <div className="sa-dashboard__eyebrow">
              BMS PROJECT MANAGEMENT
            </div>


            <h1>
              Super Admin Dashboard
            </h1>


            <p>
              Create and configure client BMS
              projects from one place. Selected
              systems, equipment and topology
              will be used to generate the
              project's operational dashboard.
            </p>

          </div>


          <button
            type="button"
            className="sa-dashboard__create"
            onClick={onCreateProject}
          >

            <Plus size={16} />

            CREATE NEW PROJECT

          </button>

        </div>


        {/* =================================================
            SUMMARY
        ================================================= */}

        <div className="sa-dashboard__stats">


          <div className="sa-stat">

            <div className="sa-stat__icon">
              <FolderKanban size={20} />
            </div>


            <div>

              <span>
                TOTAL PROJECTS
              </span>

              <strong>
                {projects.length}
              </strong>

            </div>

          </div>


          <div className="sa-stat">

            <div className="sa-stat__icon">
              <Building2 size={20} />
            </div>


            <div>

              <span>
                CLIENTS
              </span>

              <strong>
                {projects.length}
              </strong>

            </div>

          </div>


          <div className="sa-stat">

            <div className="sa-stat__icon">
              <Cpu size={20} />
            </div>


            <div>

              <span>
                CONFIGURED SYSTEMS
              </span>

              <strong>
                {totalSystems}
              </strong>

            </div>

          </div>


          <div className="sa-stat">

            <div className="sa-stat__icon">
              <Zap size={20} />
            </div>


            <div>

              <span>
                PLATFORM STATUS
              </span>


              <strong
                style={{
                  fontSize: "14px",
                  color: "#31c48d",
                }}
              >
                ACTIVE
              </strong>

            </div>

          </div>

        </div>


        {/* =================================================
            PROJECTS HEADER
        ================================================= */}

        <div className="sa-dashboard__section-head">

          <h2>
            Client Projects
          </h2>


          <span>
            {projects.length} configured
          </span>

        </div>


        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div className="sa-projects">

          {projects.length === 0 ? (

            <div className="sa-projects-empty">

              <div className="sa-projects-empty__icon">
                <Building2 size={27} />
              </div>


              <h3>
                No BMS projects yet
              </h3>


              <p>
                Create your first client project
                and configure its Source,
                Transformer, DG and other BMS
                systems.
              </p>


              <button
                type="button"
                className="sa-dashboard__create"
                onClick={onCreateProject}
              >

                <Plus size={16} />

                CREATE FIRST PROJECT

              </button>

            </div>

          ) : (

            projects.map(
              (project) => {

                /* -----------------------------------------
                   SYSTEM COUNT FOR THIS PROJECT
                ----------------------------------------- */

                const configuredSystems =
                  Array.isArray(
                    project.systems
                  )
                    ? project.systems
                    : [];


                const systemCount =
                  configuredSystems.length;


                /* -----------------------------------------
                   PROJECT DETAILS
                ----------------------------------------- */

                const projectName =
                  project.projectName ||
                  project.name ||
                  "BMS Project";


                const clientName =
                  project.clientName ||
                  "Client";


                return (
                  <article
                    className="sa-project"
                    key={project.id}
                  >


                    {/* =====================================
                        TOP
                    ===================================== */}

                    <div className="sa-project__top">


                      {/* PROJECT ICON */}

                      <div className="sa-project__icon">

                        <Building2
                          size={20}
                          strokeWidth={1.8}
                        />

                      </div>


                      {/* RIGHT SIDE */}

                      <div className="sa-project__top-actions">


                        {/* SYSTEM COUNT */}

                        <div
                          className="sa-project__system-count"
                          title={`${systemCount} configured systems`}
                        >

                          <strong>
                            {String(
                              systemCount
                            ).padStart(
                              2,
                              "0"
                            )}
                          </strong>


                          <span>
                            {systemCount === 1
                              ? "SYSTEM"
                              : "SYSTEMS"}
                          </span>

                        </div>


                        {/* ACTIVE */}

                        <div className="sa-project__status">
                          ACTIVE
                        </div>


                        {/* DELETE */}

                        <button
                          type="button"
                          className="sa-project__delete"
                          title={`Delete ${projectName}`}
                          aria-label={`Delete ${projectName}`}
                          onClick={() =>
                            handleDeleteProject(
                              project
                            )
                          }
                        >

                          <Trash2
                            size={15}
                            strokeWidth={1.8}
                          />

                        </button>

                      </div>

                    </div>


                    {/* =====================================
                        PROJECT IDENTITY
                    ===================================== */}

                    <div className="sa-project__identity">

                      <h3>
                        {projectName}
                      </h3>


                      <p className="sa-project__client">
                        {clientName}
                      </p>

                    </div>


                    <div className="sa-project__divider" />


                    {/* =====================================
                        OPEN DASHBOARD
                    ===================================== */}

                    <button
                      type="button"
                      className="sa-project__open"
                      onClick={() =>
                        onOpenProject?.(
                          project
                        )
                      }
                    >

                      <span>
                        OPEN BMS DASHBOARD
                      </span>


                      <ChevronRight
                        size={15}
                        strokeWidth={1.8}
                      />

                    </button>

                  </article>
                );
              }
            )

          )}

        </div>

      </section>

    </main>
  );
}


export default SuperAdminDashboard;