import { useEffect, useState } from "react";
import { HomeFilters } from "./HomeFilters";
import { HomeView } from "./HomeView";
import { HomeMap } from "./HomeMap";

function Home() {
  const [center, setCenter] = useState(null);
  const [filters, setFilters] = useState({
    test: false,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      onGetLocationSuccess,
      onGetLocationError
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //#region GET LOCATION HANDLERS
  const onGetLocationSuccess = (response) => {
    console.log("onGetLocationSuccess", response);

    const coords = {
      lat: response.coords.latitude,
      lng: response.coords.longitude,
    };

    setCenter(coords);
  };

  const onGetLocationError = (error) => {
    console.log("onGetLocationError", error);
  };
  //#endregion

  return (
    <>
      <main className="home-main">
        <div className="home-container">
          <HomeFilters filters={filters} setFilters={setFilters}></HomeFilters>
          {center ? (
            <HomeView filters={filters} location={center}></HomeView>
          ) : (
            "Loading..."
          )}
          <HomeMap center={center} setCenter={setCenter}></HomeMap>
        </div>
      </main>
    </>
  );
}

export { Home };
