function Card() {
  return (
    <div className="card">
      <div className="card__title">
        <h4 className="card__title--text">Card title</h4>
      </div>
      <div className="card__body">
        <p className="card__body--text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
        </p>
      </div>
      <div className="card__footer">
        <div className="card__footer--text">card footer text</div>
        <div className="card__footer--date">date - time</div>
        <div className="card__footer--location">Location</div>
      </div>
    </div>
  );
}

export { Card };
