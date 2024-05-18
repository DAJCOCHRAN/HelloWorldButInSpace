import * as PropTypes from "prop-types";

function Card({ data }) {
  console.log(data);
  return (
    <div className="card">
      <div className="card__title">
        <h4 className="card__title--text">{data.name}</h4>
      </div>
      <div className="card__body">
        <p className="card__body--text">{data.distance}k away.</p>
        <p className="card__body--text">{data.altitude}k above you</p>
      </div>
      <div className="card__footer">
        {/* <div className="card__footer--date">{new Date(data.timestamp)}</div> */}
        <div className="card__footer--location">
          Latitude: {data.latitude}. Longitude: {data.longitude}.
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object,
};

export { Card };
