import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./DoughnutChart.css";

import axios from "axios";

const arraydePrueba = {
  data: {
    male: [
      48.27,
      48.17,
      48.07,
      47.95,
      47.79,
      48.06,
      47.7,
      47.47,
      47.55,
      47.34,
      47.22,
    ],
    female: [
      51.73,
      51.83,
      51.93,
      52.05,
      52.21,
      51.94,
      52.3,
      52.53,
      52.45,
      52.66,
      52.78,
    ],
  },
  units: "Percentage",
  name:
    "Population who studied upper secondary, post-secondary non-tertiary and tertiary education by sex",
};

function DoughnutChart() {
  const [year, setYear] = useState("2009");
  const [firstCountry, setFirstCountry] = useState("ES");
  const [secondCountry, setSecondCountry] = useState("ES");
  const [dataFirstChart, setDataFirstChart] = useState(null);
  const [dataSecondChart, setDataSecondChart] = useState(null);
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        ` https://tecnologia-sustantivo-femenino.herokuapp.com/edu/${firstCountry}/${year}`
      )
      .then((res) => {
        console.log([res.data.data.female, res.data.data.male]);
        setName(res.data.name);
        setDataFirstChart([res.data.data.female, res.data.data.male]);
      });

    axios
      .get(
        `https://tecnologia-sustantivo-femenino.herokuapp.com/edu/${secondCountry}/${year}`
      )
      .then((res) => {
        setName(res.data.name);
        setDataSecondChart([res.data.data.female, res.data.data.male]);
      });
  };

  const firstDoughnut = {
    labels: ["Mujeres", "Hombres"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: ["#FFFAFE", "rgba(255, 255, 255, 0.5)"],
        data: dataFirstChart,
      },
    ],
  };

  const secondDoughnut = {
    labels: ["Mujeres", "Hombres"],
    datasets: [
      {
        label: "Hello",
        backgroundColor: ["#FFFAFE", "rgba(255, 255, 255, 0.5)"],
        data: dataSecondChart,
      },
    ],
  };

  return (
    <div className="doughnut">
      <form onSubmit={handleSubmit}>
        <select onChange={(event) => setYear(event.target.value)}>
          <option value="2009">Año</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
        </select>

        <select onChange={(event) => setFirstCountry(event.target.value)}>
          <option value="EU27_2020">País 1</option>
          <option value="EU27_2020">Unión Europea</option>
          <option value="BE">Belgia</option>
          <option value="BG">Bulgaria</option>
          <option value="CZ">Chequia</option>
          <option value="DK">Dinamarca</option>
          <option value="DE">Alemania</option>
          <option value="EE">Estonia</option>
          <option value="IE">Irlanda</option>
          <option value="EL">Grecia</option>
          <option value="ES">España</option>
          <option value="FR">Francia</option>
          <option value="HR">Croacia</option>
          <option value="IT">Italia</option>
          <option value="CY">Chipre</option>
          <option value="LV">Letonia</option>
          <option value="LT">Lituania</option>
          <option value="LU">Luxemburgo</option>
          <option value="HU">Hungria</option>
          <option value="MT">Malta</option>
          <option value="NL">Países Bajos</option>
          <option value="AT">Australia</option>
          <option value="PL">Polonia</option>
          <option value="PT">Portugal</option>
          <option value="RO">Rumanía</option>
          <option value="SI">Eslovenia</option>
          <option value="SK">Eslovaquia</option>
          <option value="FI">Finlandia</option>
          <option value="SE">Suecia</option>
          <option value="IS">Islandia</option>
          <option value="NO">Noruega</option>
          <option value="CH">Suiza</option>
          <option value="UK">Reino Unido</option>
          <option value="ME">Montenegro</option>
          <option value="MK">Macedonia</option>
          <option value="RS">Serbia</option>
          <option value="TR">Turquia</option>
        </select>

        <select onChange={(event) => setSecondCountry(event.target.value)}>
          <option value="EU27_2020">País 2</option>
          <option value="EU27_2020">Unión Europea</option>
          <option value="BE">Belgia</option>
          <option value="BG">Bulgaria</option>
          <option value="CZ">Chequia</option>
          <option value="DK">Dinamarca</option>
          <option value="DE">Alemania</option>
          <option value="EE">Estonia</option>
          <option value="IE">Irlanda</option>
          <option value="EL">Grecia</option>
          <option value="ES">España</option>
          <option value="FR">Francia</option>
          <option value="HR">Croacia</option>
          <option value="IT">Italia</option>
          <option value="CY">Chipre</option>
          <option value="LV">Letonia</option>
          <option value="LT">Lituania</option>
          <option value="LU">Luxemburgo</option>
          <option value="HU">Hungria</option>
          <option value="MT">Malta</option>
          <option value="NL">Países Bajos</option>
          <option value="AT">Australia</option>
          <option value="PL">Polonia</option>
          <option value="PT">Portugal</option>
          <option value="RO">Rumanía</option>
          <option value="SI">Eslovenia</option>
          <option value="SK">Eslovaquia</option>
          <option value="FI">Finlandia</option>
          <option value="SE">Suecia</option>
          <option value="IS">Islandia</option>
          <option value="NO">Noruega</option>
          <option value="CH">Suiza</option>
          <option value="UK">Reino Unido</option>
          <option value="ME">Montenegro</option>
          <option value="MK">Macedonia</option>
          <option value="RS">Serbia</option>
          <option value="TR">Turquia</option>
        </select>
        <input type="submit" className="doughnut-button" value="Representar" />
      </form>
      <div>
        <Doughnut
          data={firstDoughnut}
          options={{
            title: {
              display: true,
              text: "País 1",
              fontSize: 20,
              position: "bottom",
            },
            legend: {
              display: false,
            },
          }}
        />
        <Doughnut
          data={secondDoughnut}
          options={{
            title: {
              display: true,
              text: "País 2",
              fontSize: 20,
              position: "bottom",
            },
            legend: {
              display: false,
            },
          }}
        />
      </div>
    </div>
  );
}

export default DoughnutChart;
