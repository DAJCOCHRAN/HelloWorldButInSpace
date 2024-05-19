import * as PropTypes from "prop-types";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import * as issService from "../services/issService";
import { calcIsVisible } from "../calcIsVisible";
import { getDirection } from "../calcBearing";

function HomeView(props) {
  const [cardData, setCardData] = useState({
    array: [],
    components: [],
  });

  useEffect(() => {
    getIssCurrent();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.filters]);

  useEffect(() => {
    setCardData((prev) => {
      const newCardData = { ...prev };
      newCardData.components = prev.array.map(cardMapper);
      return newCardData;
    });
  }, [cardData.array]);

  const cardMapper = (data) => {
    return <Card key={"card-" + data.name} data={data} />;
  };

  const getIssCurrent = () => {
    issService
      .currentLocation()
      .then(onGetCurrentIssSuccess)
      .catch(onGetCurrentIssError);
  };

  const onGetCurrentIssSuccess = (response) => {
    console.log("onGetCurrentIssSuccess", response);

    const { data } = response;

    const dataForCard = mapData(data);

    let duplicate = cardData.array.some((card) => {
      return card?.name === dataForCard?.name;
    });

    if (dataForCard && !duplicate) {
      setCardData((prev) => {
        const newCardData = { ...prev };
        newCardData.array = [...prev.array];
        newCardData.array.push(dataForCard);
        return newCardData;
      });
    } else {
      setCardData((prev) => {
        const newCardData = { ...prev };
        newCardData.array = [];
        return newCardData;
      });
    }
  };

  const onGetCurrentIssError = (error) => {
    console.log("onGetCurrentIssError", error);
  };

  const mapData = (data) => {
    let result = {};

    const clientLocation = !props.filters.test
      ? {
          latitude: props.location.lat,
          longitude: props.location.lng,
        }
      : {
          latitude: data.latitude + 3,
          longitude: data.longitude - 5,
        };

    const issLocation = { latitude: data.latitude, longitude: data.longitude };

    const { altitude } = data;

    const direction = getDirection(clientLocation, issLocation);

    const proximity = calcIsVisible(clientLocation, issLocation, altitude);

    if (data.name === "iss" && proximity.isVisible) {
      result = {
        name: data.name,
        latitude: data.latitude,
        longitude: data.longitude,
        altitude: data.altitude,
        timestamp: data.timestamp,
        ...proximity,
        direction: direction,
      };
    } else {
      result = null;
    }

    return result;
  };

  return (
    <div className="home-grid-space home-view">
      <div className="home-view__title">
        <h2 className="heading-secondary">Happening in Space near me:</h2>
      </div>
      <div className="home-view__body">{cardData.components}</div>
      <img src="images/moon.png" alt="moon" className="home-moon-large" />
    </div>
  );
}

HomeView.propTypes = {
  location: PropTypes.object,
  filters: PropTypes.object,
};

export { HomeView };
