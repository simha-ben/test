import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { getWeather } from "../services/weatherService";

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(
  mapStateToProps,
  null
)(function Weather({ user }) {
  const [temperature, setTemperature] = useState("-");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [icon, setIcon] = useState("unknown");
  const [unit, setUnit] = useState("C");
  const [celsius, setCelsius] = useState(true);

  useEffect(() => {
    setName("");
  }, []);

  const getWeatherData = async () => {
    const city = name;
    try {
      const { data } = await getWeather(city);
      const { weather } = data;
      const { name, country, temp, desc, icon } = weather;
      setTemperature(Math.floor(temp - 273));
      setDescription(desc);
      setName(name);
      setCountry(country);
      setIcon(icon);
    } catch (err) {
      alert("city not found!");
      setName("");
      setIcon("unknown");
      setCountry("");
      setDescription("");
      setTemperature("-");
    }
  };

  const celsiusToFahrenheit = () => {
    if (!celsius) {
      setCelsius(true);
      setUnit("C");
      setTemperature(Math.round(((temperature - 32) * 5) / 9));
    } else {
      setTemperature(Math.round((temperature * 9) / 5 + 32));
      setCelsius(false);
      setUnit("F");
    }
  };

  return (
    <>
      Weather <br />
      <img
        src={`${process.env.PUBLIC_URL}/icons2/${icon}.png`}
        height="80px"
        alt=""
      />
      <br />
      {
        <button
          className="btn btn-outline-primary"
          onClick={() => celsiusToFahrenheit()}
        >
          {temperature}°{unit}
        </button>
      }
      <br />
      {description}
      <br />
      {`${name}, ${country}`}
      <br />
      <input
        className="cen w-40 my-2"
        placeholder="search city"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br />
      <button className="btn btn-primary mb-2" onClick={getWeatherData}>
        GET
      </button>
    </>
  );
});
