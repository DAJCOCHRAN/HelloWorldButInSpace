import * as PropTypes from "prop-types";
import { Card } from "./Card";
Card;

function HomeView(props) {
  return (
    <div className="home-grid-space home-view">
      <div className="home-view__title">
        <h2 className="heading-secondary">
          Happening in Space near:
          {props.location
            ? `${props.location.city} ${props.location.state}`
            : " loading..."}
        </h2>
      </div>
      <div className="home-view__body">
        <Card></Card>
      </div>
    </div>
  );
}

HomeView.propTypes = {
  location: PropTypes.object,
};

export { HomeView };
