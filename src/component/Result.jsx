import React from 'react';

const Result = ({ weatherData, historyData, historySearch }) => {
 
  return (
    <>
      <div>
        <div>
          {weatherData.length !== 0 ? (
            <>
              <h2 className="City">{weatherData.name}</h2>
              <div className="Temperature">
                <div>Max Temp: {weatherData.main.temp_max} deg</div>
                <div>Min Temp: {weatherData.main.temp_min} deg</div>
              </div>
              <div className="other">
                <div>
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt=""
                    className="weather-icon"
                  />
                </div>
                <div className="Search-city">{weatherData.weather[0].main}</div>
              </div>
            </>
          ) : (
            <>
              <h3 className="Search-city">Please enter the city name</h3>
            </>
          )}
        </div>
        <div>
          <span className="History">History</span>
          <ul className="item">{historyData.map((item, index) => {
    return (
      <li onClick={() => historySearch(item)} key={index}>
        {item}
      </li>
    );
  })}</ul>
        </div>
      </div>
    </>
  );
};

export default Result;