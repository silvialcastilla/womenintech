import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./DoughnutChart.css";

import axios from "axios";

function DoughnutChart() {
  const [year, setYear] = useState("2009");
  const [firstCountry, setFirstCountry] = useState("ES");
  const [secondCountry, setSecondCountry] = useState("ES");
  const [dataFirstChart, setDataFirstChart] = useState(null);
  const [dataSecondChart, setDataSecondChart] = useState(null);
  const [firstPercentage, setFirstPercentage] = useState(null);
  const [secondPercentage, setSecondPercentage] = useState(null);
  const [data, setData] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        ` https://tecnologia-sustantivo-femenino.herokuapp.com/edu/${firstCountry}/${year}`
      )
      .then((res) => {
        setFirstPercentage(res.data.data.female);
        setDataFirstChart([res.data.data.female, res.data.data.male]);
      });

    axios
      .get(
        `https://tecnologia-sustantivo-femenino.herokuapp.com/edu/${secondCountry}/${year}`
      )
      .then((res) => {
        setSecondPercentage(res.data.data.female);
        setDataSecondChart([res.data.data.female, res.data.data.male]);
        setData(true);
      });
  };

  const firstDoughnut = {
    labels: ["Mujeres", "Hombres"],
    datasets: [
      {
        label: "First Doughnut",
        backgroundColor: ["#FFFAFE", "rgba(255, 255, 255, 0.5)"],
        borderWidth: 0,
        data: dataFirstChart,
      },
    ],
  };

  const secondDoughnut = {
    labels: ["Mujeres", "Hombres"],
    datasets: [
      {
        label: "Second Doughnut",
        backgroundColor: ["#FFFAFE", "rgba(255, 255, 255, 0.5)"],
        borderWidth: 0,
        data: dataSecondChart,
      },
    ],
  };

  return (
    <div className="doughnut">
      <form className="form" onSubmit={handleSubmit}>
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
      {data ? (
        <div className="doughnut-div">
          <p className="first-percentage">{firstPercentage}%</p>
          <Doughnut
            className="ey"
            data={firstDoughnut}
            options={{
              cutoutPercentage: 70,
              responsive: true,
              title: {
                display: true,
                text: firstCountry,
                fontSize: 20,
                position: "bottom",
              },
              legend: {
                display: false,
              },
            }}
          />
          <p className="second-percentage">{secondPercentage}%</p>
          <Doughnut
            data={secondDoughnut}
            options={{
              cutoutPercentage: 70,
              responsive: true,
              title: {
                display: true,
                text: secondCountry,
                fontSize: 20,
                position: "bottom",
              },
              legend: {
                display: false,
              },
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default DoughnutChart;
