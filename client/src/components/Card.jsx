import React, { useEffect, useState } from 'react';

function Card() {
  const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const dataFetch = async () => {
            try {
                const response = await fetch('http://localhost:8000/iss');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        dataFetch();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
  return (
    <div className="card">
      <div className="card__title">
        <h4 className="card__title--text">Card title</h4>
      </div>
      <div className="card__body">
        <p className="card__body--text">
          {data.latitude}
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
