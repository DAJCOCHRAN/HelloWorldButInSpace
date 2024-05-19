import * as PropTypes from "prop-types";

function Card({ data }) {
  function calculateHypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
  }

  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const date = new Date(data.timestamp * 1000);
  console.log(data.timestamp);
  const formattedDate = date.toLocaleString("en-US", dateOptions);
  console.log(formattedDate);

  return (
    <div className="card">
      <div className="card__title">
        <h4 className="card__title--text">Name: {data.name}</h4>
      </div>
      <div className="card__body">
        <p className="card__body--text">
          Distance from you:{" "}
          {parseInt(calculateHypotenuse(data.distance, data.distToHorizon))}{" "}
          Kilometers
        </p>
        <p className="card__body--text">Direction: {data.direction}</p>
        <p className="card__body--text">{formattedDate}</p>
      </div>
      <div className="card__footer">
        {/* <div className="card__footer--date">{new Date(data.timestamp)}</div> */}
        <div className="card__footer--location"></div>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object,
};

export { Card };
