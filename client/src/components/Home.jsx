import { useEffect } from "react";
import * as issService from "../services/issService";

function Home() {
  useEffect(() => {
    getIssCurrentLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //#region ISS CURRENT LOCATION
  const getIssCurrentLocation = () => {
    issService
      .currentLocation()
      .then(onGetIssLocationSuccess)
      .catch(onGetIssLocationError);
  };

  const onGetIssLocationSuccess = (response) => {
    console.log(response);
  };

  const onGetIssLocationError = (error) => {
    console.error(error);
  };
  //#endregion

  return (
    <>
      <main className="home-main">
        <div className="home-container">
          <div className="home-grid-space home-filters">
            <div className="home-filters__title">FILTERS</div>
            <div className="home-filters__body">Checkboxes, inputs</div>
          </div>

          <div className="home-grid-space home-view">
            <div className="home-view__title">TITLE GOES HERE</div>
            <div className="home-view__body">Api response cards</div>
          </div>
          <div className="home-grid-space home-map">GOOGLE MAPS, selector</div>
        </div>
      </main>
    </>
  );
}

export { Home };
