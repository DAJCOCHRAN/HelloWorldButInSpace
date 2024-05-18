function Splash() {
  return (
    <>
      <main className="splash-main">
        <div className="splash">
          <div className="splash-title">
            <h1 className="heading-primary">
              <span className="splash-title-hover">H</span>
              <span className="splash-title-hover">e</span>
              <span className="splash-title-hover">l</span>
              <span className="splash-title-hover">l</span>
              <span className="splash-title-hover">o</span>
              <span className="splash-title-hover">W</span>
              <span className="splash-title-hover">o</span>
              <span className="splash-title-hover">r</span>
              <span className="splash-title-hover">l</span>
              <span className="splash-title-hover">d</span>
              <span className="splash-title-hover">B</span>
              <span className="splash-title-hover">u</span>
              <span className="splash-title-hover">t</span>
              <span className="splash-title-hover">I</span>
              <span className="splash-title-hover">n</span>
              <span className="splash-emphasis">
                <span className="splash-title-hover">S</span>
                <span className="splash-title-hover">p</span>
                <span className="splash-title-hover">a</span>
                <span className="splash-title-hover">c</span>
                <span className="splash-title-hover">e</span>
              </span>
            </h1>
          </div>
          <div className="splash-sub-title">
            <h3 className="heading-tertiary">Space Exploration from Earth</h3>
          </div>
          <div className="splash-explore">
            <button type="button" className="splash-btn">
              Enter
            </button>
          </div>
          <div className="splash-moon">
            <img src="src/public/images/moon-sm.png" alt="moon" />
          </div>
        </div>
      </main>
    </>
  );
}

export { Splash };
