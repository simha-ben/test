import { getHistory } from "../services/weatherService";
import React, { useState } from "react";

function WeatherHistory(props) {
  const [history, setHistory] = useState([]);

  const getHistoryData = async () => {
    const { data } = await getHistory();
    data.reverse();
    setHistory(data);
  };

  const formatDate = (string) => {
    var options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(string).toLocaleDateString([], options);
  };

  return (
    <>
      <br />
      <div>
        <button className="btn btn-primary" onClick={getHistoryData}>
          Get History
        </button>
        <ul>
          {history.reverse().map((w) => (
            <li key={w._id}>
              <a data-toggle="collapse" href={`#${w._id}`}>
                {w.name}
              </a>

              <div id={`${w._id}`} className="collapse in">
                {`${w.desc} ${Math.floor(w.temp - 273)}°C on ${formatDate(
                  w.date
                )}`}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <br />
    </>
  );
}

export default WeatherHistory;
