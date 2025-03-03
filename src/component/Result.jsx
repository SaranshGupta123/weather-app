import React from 'react';

const Result = ({ weatherData, historyData, historySearch, forecastData, searchDate }) => {
  return (
    <>
      <div>
        <div>
          {weatherData ? (
            <>
              <h2 className="City">{weatherData.name}</h2>
              {searchDate && <p>Search Date: {searchDate.toLocaleString()}</p>}
              <div className="Temperature">
                <div>Max Temp: {weatherData.main.temp_max} deg</div>
                <div>Min Temp: {weatherData.main.temp_min} deg</div>
                <div>Humidity: {weatherData.main.humidity}%</div>
                <div>Pressure: {weatherData.main.pressure} hPa</div>
                <div>Wind Speed: {weatherData.wind.speed} m/s</div>
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
              <div>
                <h3>Hourly Forecast:</h3>
                <div className="forecast">
                  {forecastData.map((item, index) => (
                    <div key={index} className="forecast-item">
                      <p>{new Date().toLocaleTimeString()}</p>
                      <img
                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                        alt=""
                        className="forecast-icon"
                      />
                      <p>{item.main.temp} deg</p>
                    </div>
                  ))}
                </div>
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
          <ul className="item">
            {historyData.map((item, index) => {
              return (
                <li onClick={() => historySearch(item)} key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Result;