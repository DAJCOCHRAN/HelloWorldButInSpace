import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import * as PropTypes from "prop-types";

function HomeMap(props) {
  const [zoom, setZoom] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setZoom(8);
    }, 500);
  }, []);

  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const { center } = props;

  //#region GOOGLE MAPS
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsApiKey,
  });

  const onLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  };

  const containerStyle = { height: 500, width: "100%" };
  //#endregion

  return (
    <div className="home-grid-space home-map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          onLoad={onLoad}
        >
          <MarkerF position={center} />
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}

HomeMap.propTypes = {
  center: PropTypes.object,
};

export { HomeMap };
