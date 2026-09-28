import {
  Activity,
  Moon,
  Sun,
} from "lucide-react";

function AppHeader({ theme, setTheme }) {
  return (
    <>
      <header className="app-header">
        <div className="app-header__identity">
          <div className="app-header__brand-mark">
            <Activity size={20} strokeWidth={1.8} />
          </div>

          <div className="app-header__brand-copy">
            <div className="app-header__title-row">
              <h1>ARCOT IIOT 1.0</h1>

              <span className="app-header__product">
                BUILDING MANAGEMENT SYSTEM
              </span>
            </div>

            <p>
              Integrated Building Intelligence & Real-Time Monitoring
            </p>
          </div>
        </div>

        <div className="app-header__actions">
          <div className="app-header__live">
            <span className="app-header__live-dot" />

            <div>
              <small>PLATFORM STATUS</small>
              <strong>SYSTEM LIVE</strong>
            </div>
          </div>

          <div
            className="app-theme-toggle"
            aria-label="Dashboard theme"
          >
            <button
              type="button"
              className={
                theme === "light"
                  ? "is-active"
                  : ""
              }
              onClick={() =>
                setTheme("light")
              }
              title="Bright mode"
              aria-label="Use bright mode"
            >
              <Sun size={14} />
              <span>Bright</span>
            </button>

            <button
              type="button"
              className={
                theme === "dark"
                  ? "is-active"
                  : ""
              }
              onClick={() =>
                setTheme("dark")
              }
              title="Dark mode"
              aria-label="Use dark mode"
            >
              <Moon size={14} />
              <span>Dark</span>
            </button>
          </div>
        </div>
      </header>

      <style>{`
        .app-header {
          width: 100%;
          min-height: 64px;

          padding: 8px 20px;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;

          /* No separate header-card background */
          background: transparent;

          border: 0;
          border-bottom: 1px solid
            var(
              --app-border,
              rgba(96, 119, 138, 0.22)
            );

          border-radius: 0;
          box-shadow: none;
        }

        .app-header__identity {
          min-width: 0;

          display: flex;
          align-items: center;
          gap: 11px;
        }

        .app-header__brand-mark {
          width: 38px;
          height: 38px;

          flex: 0 0 38px;

          display: grid;
          place-items: center;

          color: #ffffff;

          background: #146886;

          border: 1px solid #2589a8;
          border-radius: 5px;
        }

        .app-header__brand-copy {
          min-width: 0;
        }

        .app-header__title-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .app-header h1 {
          margin: 0;

          color: var(
            --app-text,
            #132033
          );

          font-size: clamp(
            18px,
            1.35vw,
            23px
          );

          font-weight: 750;
          line-height: 1;

          letter-spacing: -0.025em;
        }

        .app-header__product {
          padding-left: 12px;

          border-left: 1px solid
            var(
              --app-border,
              #d5dee7
            );

          color: #1483a2;

          font-size: 8px;
          font-weight: 800;

          letter-spacing: 0.13em;
          white-space: nowrap;
        }

        .app-header__brand-copy p {
          margin: 5px 0 0;

          color: var(
            --app-muted,
            #758798
          );

          font-size: 9px;
          font-weight: 500;

          letter-spacing: 0.015em;
        }

        .app-header__actions {
          flex-shrink: 0;

          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* ========================================
           REAL-TIME PLATFORM STATUS
        ======================================== */

        .app-header__live {
          min-width: 126px;
          height: 38px;

          padding: 0 11px;

          display: flex;
          align-items: center;
          gap: 9px;

          border: 1px solid
            rgba(29, 164, 117, 0.35);

          border-radius: 5px;

          background:
            rgba(24, 139, 99, 0.06);
        }

        .app-header__live-dot {
          width: 8px;
          height: 8px;

          flex: 0 0 8px;

          border-radius: 50%;

          background: #22bd83;

          box-shadow:
            0 0 0 3px
            rgba(34, 189, 131, 0.12);
        }

        .app-header__live > div {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .app-header__live small {
          color: var(
            --app-muted,
            #82919d
          );

          font-size: 6px;
          font-weight: 750;

          letter-spacing: 0.12em;
        }

        .app-header__live strong {
          color: #16835e;

          font-size: 8px;
          font-weight: 850;

          letter-spacing: 0.08em;
        }

        /* ========================================
           THEME CONTROL
        ======================================== */

        .app-theme-toggle {
          height: 38px;

          padding: 3px;

          display: flex;
          align-items: center;

          border: 1px solid
            var(
              --app-border,
              #d2dce5
            );

          border-radius: 5px;

          background:
            var(
              --app-surface-2,
              #edf2f6
            );
        }

        .app-theme-toggle button {
          height: 30px;

          padding: 0 10px;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;

          border: 0;
          border-radius: 3px;

          color: var(
            --app-muted,
            #718291
          );

          background: transparent;

          font-family: inherit;
          font-size: 8px;
          font-weight: 750;

          cursor: pointer;

          transition:
            color 0.15s ease,
            background 0.15s ease;
        }

        .app-theme-toggle button:hover {
          color: var(
            --app-text,
            #152638
          );
        }

        .app-theme-toggle button.is-active {
          color: #ffffff;

          background: #147c9d;
        }

        /* ========================================
           DARK MODE
        ======================================== */

        html[data-theme="dark"]
          .app-header h1 {
          color: #f2f6fa;
        }

        html[data-theme="dark"]
          .app-header {
          border-bottom-color:
            rgba(106, 139, 163, 0.2);
        }

        html[data-theme="dark"]
          .app-header__product {
          color: #49c6e1;

          border-left-color:
            rgba(115, 145, 167, 0.25);
        }

        html[data-theme="dark"]
          .app-header__brand-copy p {
          color: #8297a9;
        }

        html[data-theme="dark"]
          .app-header__live {
          border-color:
            rgba(42, 194, 139, 0.27);

          background:
            rgba(24, 139, 99, 0.08);
        }

        html[data-theme="dark"]
          .app-header__live strong {
          color: #65d9ad;
        }

        html[data-theme="dark"]
          .app-theme-toggle {
          border-color: #203951;
          background: #101e2d;
        }

        html[data-theme="dark"]
          .app-theme-toggle button {
          color: #8499aa;
        }

        html[data-theme="dark"]
          .app-theme-toggle button:hover {
          color: #e7f0f6;
        }

        html[data-theme="dark"]
          .app-theme-toggle
          button.is-active {
          color: #ffffff;
          background: #176f8c;
        }

        /* ========================================
           RESPONSIVE
        ======================================== */

        @media (max-width: 760px) {
          .app-header {
            padding: 8px 12px;
          }

          .app-header__product {
            display: none;
          }

          .app-header__brand-copy p {
            display: none;
          }

          .app-header__live {
            min-width: 0;
          }

          .app-header__live small {
            display: none;
          }
        }

        @media (max-width: 560px) {
          .app-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 8px;
          }

          .app-header__actions {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </>
  );
}

export default AppHeader;