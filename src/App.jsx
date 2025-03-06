import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import Search from './component/Search';
import Result from './component/Result';
import axios from 'axios';
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/Navbar';

const Content = () => {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [searchDate, setSearchDate] = useState(null);

  const changeSearch = (e) => {
    setSearch(e);
  };

  const searchWeather = () => {
    if (search !== '') {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=aa13436c3b8dba4deed11d1b67d5d1b0&units=metric`)
        .then((response) => {
          if (history.indexOf(search) === -1) {
            setHistory([...history, search]);
          }
          setWeather(response.data);
          setSearchDate(new Date());
          return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=aa13436c3b8dba4deed11d1b67d5d1b0&units=metric`);
        })
        .then((forecastResponse) => {
          setForecast(forecastResponse.data.list.slice(0, 8));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const historySearch = (data) => {
    setSearch(data);
    if (data !== '') {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=aa13436c3b8dba4deed11d1b67d5d1b0&units=metric`)
        .then((response) => {
          setWeather(response.data);
          setSearchDate(new Date());
          return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=aa13436c3b8dba4deed11d1b67d5d1b0&units=metric`);
        })
        .then((forecastResponse) => {
          setForecast(forecastResponse.data.list.slice(0, 8));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className='App2'>
        <Search searchData={search} eventHandler={changeSearch} searchWeather={searchWeather} />
      </div>

      <div className="App">
        <Result weatherData={weather} historyData={history} historySearch={historySearch} forecastData={forecast} searchDate={searchDate} />
      </div>
    </>

  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Content />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <Navbar />
        <Contact />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;