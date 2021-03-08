import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { getEduWomanData, getWomenTic } from "../../utils/data";
import Select from "../Select/Select";
import Button from "../Button/Button";
import "./styles.css";

const lineOptions = {
  maintainAspectRatio: true,
  responsive: true,
  title: {
    display: false,
    text: "",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 20,
    padding: 100,
    color: "#10182B",
  },
  legend: {
    display: false,
    position: "bottom",
    align: "start",
  },
  scales: {
    xAxes: [
      {
        ticks: {
          padding: 20,
        },
      },
    ],
    yAxes: [
      {
        id: "Mujeres en educación secundaria o superior",
        type: "linear",
        position: "left",
        ticks: {
          padding: 20,
          min: 15,
          max: 55,
        },
      },
      {
        id: "Mujeres trabajando en empleos TIC",
        type: "linear",
        position: "right",
        ticks: {
          min: 15,
          max: 55,
          beginAtZero: true,
          callback: function (value) {
            return value + "M";
          },
          padding: 20,
          display: true,
          fontColor: "transparent",
        },
        scaleLabel: {
          display: false,
        },
      },
    ],
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    position: "center",
  },
};

export default function SingleLine() {
  const finalData = {
    labels: ["2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"],
    datasets:[
      {
        label: "Mujeres en educación secundaria o superior",
        yAxisID: "Mujeres en educación secundaria o superior",
        data: [],
        fill: false,
        borderColor: "#8C0582",
        backgroundColor: "transparent",
        lineTension: 0,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 10,
        borderJoinStyle: "miter",
        pointRadius: 1,
        pointBorderColor: "transparent",
        pointBackgroundColor: "#8C0582",
      },
      {
        label: "Mujeres trabajando en empleos TIC",
        yAxisID: "Mujeres trabajando en empleos TIC",
        data: [],
        fill: false,
        borderColor: "#00CFFF",
        lineTension: 0,
        backgroundColor: "transparent",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 10,
        borderJoinStyle: "miter",
        pointRadius: 1,
        pointBorderColor: "transparent",
        pointBackgroundColor: "#00CFFF",
      }
    ]
  }
  const [info, setInfo] = useState(null);
  const [option, setOption] = useState('EU27_2020')
  const [country, setCountry] = useState('EU27_2020');

  // fetch
  // formatear data
  // setInfo
  // setOption en change
  // setCountry en click

  const formatDataOne = (data1, data2) =>{
    const firstData = data1 ? data1.data.map(e => !e ? null : e) : []
    const secondData = data2 ? data2.data.map(e => !e ? null : e) : []
    finalData.datasets[0].data = firstData
    finalData.datasets[1].data = secondData
    setInfo(finalData)
  }

  useEffect(async () => {
    try {
      const eduWomanData = await getEduWomanData("EU27_2020");
      const womenTic = await getWomenTic("EU27_2020")
    formatDataOne(eduWomanData, womenTic)
    } catch (err){
      console.log("error", err)
    }
  }, []);

  useEffect(async () => {
    try{
      const eduWomanData = await getEduWomanData(country);
      const womenTic = await getWomenTic(country)
      formatDataOne(eduWomanData, womenTic);
    } catch (err){
      console.log("error", err)
    }
  }, [country]);

    const handleChange = (value) => {
      setOption(value);
    };
    
    const handleClick = async() => {
      setCountry(option)
  };
  
  return (
    <div className="lineal">
      <div className="line-chart-header">
        <h2 className="chart-title">Educación vs empleos TIC</h2>
        <Select type={"country"} getValue={handleChange} value={option} />
        <Button click={handleClick} />
      </div>
      <div className="chart-container">
        <Line data={info && info} width={110} height={35} options={lineOptions} />
      </div>
      <div className="chart-legend">
        <div className="legend">
          <div className="legend-circle-one"></div>
          <p className="legend-title">
            Mujeres en educación secundaria o superior
          </p>
        </div>
        <div className="legend">
          <div className="legend-circle-two"></div>
          <p className="legend-title">Mujeres trabajando en empleos TIC</p>
        </div>
      </div>
    </div>
  );
}
