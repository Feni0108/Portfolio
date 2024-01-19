"use client";
import { useEffect, useState } from "react";

export default function Temperature() {
  const [degree, setDegree] = useState<String>();

  const getTemperature = async () => {
    const apiCall = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=46.94531&lon=9.57218&appid=e3ea083e4d3214e2dd95ef01665b4fd3"
    );
    const data = await apiCall.json();
    console.log(data);
    const celsius = Math.round(data.main.temp - 273);
    setDegree(celsius);
  };

  useEffect(() => {
    getTemperature();
  }, []);

  return <span>{degree}</span>;
}
