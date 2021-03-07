import React, { useState } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import Button from '../Button/Button'
import "./DoughnutChart.css";


function DoughnutChart() {
  const [year, setYear] = useState("2009");
  const [firstCountry, setFirstCountry] = useState("EU27_2020");
  const [secondCountry, setSecondCountry] = useState("ES");
  const [dataFirstChart, setDataFirstChart] = useState([50.57, 49.43]);
  const [nameFirstChart, setNameFirstChart] = useState("Unión Europea");
  const [titleFirstChart, setTitleFirstChart] = useState("Unión Europea");
  const [dataSecondChart, setDataSecondChart] = useState([52.78, 47.22]);
  const [nameSecondChart, setNameSecondChart] = useState("España");
  const [titleSecondChart, setTitleSecondChart] = useState("España");
  const [firstPercentage, setFirstPercentage] = useState("50.57");
  const [secondPercentage, setSecondPercentage] = useState("52.78");


  const handleClick = (event) => {
    event.preventDefault();
    axios
      .get(
        ` https://tecnologia-sustantivo-femenino.herokuapp.com/edu/${firstCountry}/${year}`
      )
      .then((res) => {
        console.log("respuesta de axios", res)
        setFirstPercentage(res.data.data.female.toString());
        setDataFirstChart([res.data.data.female.toString(), res.data.data.male.toString()]);
        setTitleFirstChart(nameFirstChart);
      });

    axios
      .get(
        `https://tecnologia-sustantivo-femenino.herokuapp.com/edu/${secondCountry}/${year}`
      )
      .then((res) => {
        setSecondPercentage(res.data.data.female.toString());
        setDataSecondChart([res.data.data.female.toString(), res.data.data.male.toString()]);
        setTitleSecondChart(nameSecondChart);
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
      <form className="form" >
        <div className="select-container">
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
          <option value="2019" selected>2019</option>
        </select>

        <select
          onChange={(event) => {
            let valor = event.target.selectedIndex;
            setFirstCountry(event.target.value);
            setNameFirstChart(event.target.options[valor].text);
          }}
        >          
          <option value="EU27_2020">País 1</option>
          <option value="EU27_2020" selected>UE</option>
          <option value="DE">Alemania</option>
          <option value="AT">Austria</option>
          <option value="BE">Bélgica</option>
          <option value="BG">Bulgaria</option>
          <option value="CZ">Chequia</option>
          <option value="CY">Chipre</option>
          <option value="HR">Croacia</option>
          <option value="DK">Dinamarca</option>
          <option value="SK">Eslovaquia</option>
          <option value="SI">Eslovenia</option>
          <option value="ES">España</option>
          <option value="EE">Estonia</option>
          <option value="FI">Finlandia</option>
          <option value="FR">Francia</option>
          <option value="EL">Grecia</option>
          <option value="HU">Hungria</option>
          <option value="IE">Irlanda</option>
          <option value="IS">Islandia</option>
          <option value="IT">Italia</option>
          <option value="LV">Letonia</option>
          <option value="LT">Lituania</option>
          <option value="LU">Luxemburgo</option>
          <option value="MK">Macedonia</option>
          <option value="MT">Malta</option>
          <option value="ME">Montenegro</option>
          <option value="NO">Noruega</option>
          <option value="NL">Países Bajos</option>
          <option value="PL">Polonia</option>
          <option value="PT">Portugal</option>
          <option value="UK">Reino Unido</option>
          <option value="RO">Rumanía</option>
          <option value="RS">Serbia</option>
          <option value="SE">Suecia</option>
          <option value="CH">Suiza</option>
          <option value="TR">Turquia</option>
        </select>

        <select
          onChange={(event) => {
            let valor = event.target.selectedIndex;
            setSecondCountry(event.target.value);
            setNameSecondChart(event.target.options[valor].text);
          }}
        >    
          <option value="EU27_2020">País 2</option>
          <option value="EU27_2020" >UE</option>
          <option value="DE">Alemania</option>
          <option value="AT">Austria</option>
          <option value="BE">Bélgica</option>
          <option value="BG">Bulgaria</option>
          <option value="CZ">Chequia</option>
          <option value="CY">Chipre</option>
          <option value="HR">Croacia</option>
          <option value="DK">Dinamarca</option>
          <option value="SK">Eslovaquia</option>
          <option value="SI">Eslovenia</option>
          <option value="ES" selected>España</option>
          <option value="EE">Estonia</option>
          <option value="FI">Finlandia</option>
          <option value="FR">Francia</option>
          <option value="EL">Grecia</option>
          <option value="HU">Hungria</option>
          <option value="IE">Irlanda</option>
          <option value="IS">Islandia</option>
          <option value="IT">Italia</option>
          <option value="LV">Letonia</option>
          <option value="LT">Lituania</option>
          <option value="LU">Luxemburgo</option>
          <option value="MK">Macedonia</option>
          <option value="MT">Malta</option>
          <option value="ME">Montenegro</option>
          <option value="NO">Noruega</option>
          <option value="NL">Países Bajos</option>
          <option value="PL">Polonia</option>
          <option value="PT">Portugal</option>
          <option value="UK">Reino Unido</option>
          <option value="RO">Rumanía</option>
          <option value="RS">Serbia</option>
          <option value="SE">Suecia</option>
          <option value="CH">Suiza</option>
          <option value="TR">Turquia</option>
        </select>      
      </div>
        <Button click={handleClick}/>
      </form>
      <div className="doughnut-div">
          <div className="percentage-container">
            <p className="first-percentage"><span className="number-percentage">{`${firstPercentage.slice(0,2)}`}</span> %</p>
          </div>
        <Doughnut
          data={firstDoughnut}
          options={{
            cutoutPercentage: 80,
            responsive: true,
            weight:1,
            title: {
              display: true,
              text: firstPercentage === '0' ? `No hay datos registrados durante este año en ${titleFirstChart}` : titleFirstChart,
              fontize: 12,
              fontColor: '#FFFFFF',
              position: "bottom",
              fontStyle: 'regular',
              padding: 10
            },
            legend: {
              display: false,
            },
          }}
        />
        <div className="percentage-container">
          <p className="second-percentage"><span className="number-percentage">{`${secondPercentage.slice(0,2)}`}</span> %</p>
        </div>
        <Doughnut
        height={150}
          data={secondDoughnut}
          options={{
            responsive: true,
            cutoutPercentage: 80,
            title: {
              display: true,
              text: secondPercentage === '0' ? `No hay datos registrados durante este año en ${titleSecondChart}` : titleSecondChart,
              fontSize: 12,
              fontColor: '#FFFFFF',
              position: "bottom",
              fontStyle: 'regular',
              padding: 10
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
