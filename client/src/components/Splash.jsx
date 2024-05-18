function Splash () {
    return <>
        <main className="splash-main">
            <div className="splash">
                <div className="splash-title">

                <h1 className="heading-primary">
                    HelloWorldButInSpace
                </h1>
                </div>
                <div className="splash-sub-title">
                    <h3 className="heading-tertiary">
                        Space Exploration from Earth
                    </h3>
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
}

export {Splash}