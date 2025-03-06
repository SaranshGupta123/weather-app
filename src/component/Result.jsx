import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { WiHumidity } from "react-icons/wi";
import { GiPressureCooker } from "react-icons/gi";
import { FaWind } from "react-icons/fa";

const Result = ({ weatherData, historyData, historySearch, forecastData, searchDate }) => {
  return (
    <>
      <div>
        <div>
          {weatherData ? (
            <>
              <div className='other2'>
                <div className='other3'>
                  <h2 className="City"><FaLocationDot className='city-icon' />{weatherData.name}</h2>
                  {searchDate && <p><SlCalender /> Search Date: {searchDate.toLocaleString()}</p>}
                </div>
                <div className='other4'>
                  <div className='temperature1'>Max Temp: {weatherData.main.temp_max} deg</div>
                  <div >Min Temp: {weatherData.main.temp_min} deg</div>
                  <div>
                    <img
                      src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                      alt=""
                      className="weather-icon"
                    />
                  </div>
                  <div className="Search-city">{weatherData.weather[0].main}</div>
                </div>
              </div>

              <div className="Temperature">
                <div className='Humidity'><WiHumidity className='weather-extra'/>Humidity: {weatherData.main.humidity}%</div>
                <div className='Pressure'><GiPressureCooker className='weather-extra'/>Pressure: {weatherData.main.pressure} hPa</div>
                <div className='Wind'><FaWind className='weather-extra'/>Wind Speed: {weatherData.wind.speed} m/s</div>
              </div>
              <div className='forecast1'>
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