import SearchWeather from "./Search";
import { useEffect, useState } from "react";

function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherdata, setWeatherdata] = useState(null);

  async function fetchWeatherData(searchpara) {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchpara}&appid=5940b0160021a43c1dc8d3e56abb048c&units=metric`
      );

      const data = await response.json();

      console.log(data, "data");

      if (data) {
        setWeatherdata(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch() {
    if (!search.trim()) return;
    fetchWeatherData(search);
  }

  // Handle Enter key press
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  useEffect(() => {
    fetchWeatherData("Lahore");
  }, []);

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  // Get weather icon based on condition
  function getWeatherIcon(condition) {
    const icons = {
      Clear: "☀️",
      Clouds: "☁️",
      Rain: "🌧️",
      Drizzle: "🌦️",
      Thunderstorm: "⛈️",
      Snow: "❄️",
      Mist: "🌫️",
      Smoke: "🌫️",
      Haze: "🌫️",
      Fog: "🌫️",
      Dust: "💨",
      Sand: "💨",
      Ash: "💨",
      Squall: "💨",
      Tornado: "🌪️",
    };
    return icons[condition] || "🌤️";
  }

  return (
    <div className="weather-container">
      <SearchWeather
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        handleKeyPress={handleKeyPress}
      />

      {loading ? (
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Fetching weather data...</p>
        </div>
      ) : (
        weatherdata && (
          <div className="weather-card">
            {/* Weather Header */}
            <div className="weather-header">
              <div className="location-section">
                <h2 className="city-name">
                  {weatherdata?.name}
                  <span className="country-code">
                    , {weatherdata?.sys?.country}
                  </span>
                </h2>
                <p className="date-text">{getCurrentDate()}</p>
              </div>
              <div className="weather-icon-wrapper">
                <span className="weather-icon">
                  {getWeatherIcon(weatherdata?.weather?.[0]?.main)}
                </span>
              </div>
            </div>

            {/* Temperature Section */}
            <div className="temperature-section">
              <h1 className="temperature">
                {Math.round(weatherdata?.main?.temp)}
              </h1>
              <span className="temperature-unit">°C</span>
              <span className="feels-like">
                Feels like {Math.round(weatherdata?.main?.feels_like)}°
              </span>
            </div>

            <p className="description">
              {weatherdata?.weather?.[0]?.description}
            </p>

            {/* Weather Stats Grid */}
            <div className="weather-stats">
              <div className="stat-box">
                <div className="stat-label">
                  <span className="stat-icon">🌡️</span> Feels Like
                </div>
                <div className="stat-value">
                  {Math.round(weatherdata?.main?.feels_like)}°
                </div>
              </div>

              <div className="stat-box">
                <div className="stat-label">
                  <span className="stat-icon">💧</span> Humidity
                </div>
                <div className="stat-value">
                  {weatherdata?.main?.humidity}%
                </div>
              </div>

              <div className="stat-box">
                <div className="stat-label">
                  <span className="stat-icon">💨</span> Wind Speed
                </div>
                <div className="stat-value">
                  {weatherdata?.wind?.speed} <span style={{fontSize: '0.7rem', opacity: 0.4}}>m/s</span>
                </div>
              </div>

              <div className="stat-box">
                <div className="stat-label">
                  <span className="stat-icon">📊</span> Pressure
                </div>
                <div className="stat-value">
                  {weatherdata?.main?.pressure} <span style={{fontSize: '0.7rem', opacity: 0.4}}>hPa</span>
                </div>
              </div>
            </div>

            {/* Extra details - sunrise/sunset */}
            <div style={{
              marginTop: '20px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              justifyContent: 'space-between',
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.8rem'
            }}>
              <span>🌅 Sunrise: {new Date(weatherdata?.sys?.sunrise * 1000).toLocaleTimeString()}</span>
              <span>🌇 Sunset: {new Date(weatherdata?.sys?.sunset * 1000).toLocaleTimeString()}</span>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Weather;