import { useEffect, useState } from "react";
import s from "./widget.module.css";

function Widget() {
  const [date, setDate] = useState(new Date());
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const updateDate = () => {
      setDate(new Date());
    };

    const timer = setInterval(updateDate, 1000 * 60);

    const cleanUp = () => {
      clearInterval(timer);
    };

    return cleanUp;
  }, []);

  useEffect(() => {
    const getWeatherData = async (locationData) => {
      const apiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationData.coords.latitude},${locationData.coords.longitude}&aqi=no`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      console.log(data);
      setWeatherData(data);
    };

    const coords = navigator.geolocation.getCurrentPosition(getWeatherData);
  }, []);

  return (
    <div>
      <h1 className="text-white font-normal text-5xl">
        {date.getHours() + ":" + date.getMinutes()}
      </h1>
      <h4 className="text-white font-normal text-xl mt-2">{date.toDateString()}</h4>
      
      <div className={s.widget_weather}>
        <p className={s.widget_weather_temp}>Temperature</p>
        <p className={s.widget_weather_temp}>
          {!weatherData ? "Loading..." : weatherData.current.temp_c}
        </p>
        <p className={s.widget_weather_humidity}>Humidity</p>
        <p className={s.widget_weather_humidity}>
          {!weatherData ? "Loading..." : weatherData.current.humidity}
        </p>
      </div>
    </div>
  );
}

export default Widget;