import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { getEduWomanData } from "../../utils/data";
import Select from '../Select/Select'
import Button from '../Button/Button'
import "./styles.css";

const dataFromFetch = [
  {
    label: "Mujeres en educación secundaria o superior",
    yAxisID: "Mujeres en educación secundaria o superior",
    data: [51, 51, 51, 52, 52, 51, 52, 52, 52, 52, 53],
    fill: false,
    borderColor: "#8C0582",
    backgroundColor: "transparent",
    lineTension: 0,
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 10,
    borderJoinStyle: "miter",
    pointRadius: 1,
    pointBorderColor: 'transparent',
    pointBackgroundColor: '#8C0582',
  },
  {
    label: "Mujeres trabajando en empleos TIC",
    yAxisID: "Mujeres trabajando en empleos TIC",
    data: [22.7, 22.7, 20.2, 19.6, 19.8, 18.7, 18.8, 17.6, 16.7, 17.8, 19.7],
    fill: false,
    borderColor: "#00CFFF",
    lineTension: 0,
    backgroundColor: "transparent",
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 10,
    borderJoinStyle: "miter",
    pointRadius: 1,
    pointBorderColor: 'transparent',
    pointBackgroundColor: '#00CFFF',
  },
];
const womenStudies = {
  data: [
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
  units: "Percentage",
  name:
    "Women who studied upper secondary, post-secondary non-tertiary and tertiary",
};

const womenInTech = {
  data: [22.7, 22.7, 20.2, 19.6, 19.8, 18.7, 18.8, 17.6, 16.7, 17.8, 19.7],
  units: "Percentage",
  name: "Employed",
};

const finalData = {
  labels: [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
  ],
  datasets: dataFromFetch,
  title: "hola",
};

const lineOptions = {
  maintainAspectRatio: true,
  responsive: true,
  onResize: function () {
    console.log("onResize");
  },
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
          min: dataFromFetch[0].data[0],
          max: dataFromFetch[0].data[10],
          stepSize: 5,
        },
      },
      {
        id: "Mujeres trabajando en empleos TIC",
        type: "linear",
        position: "right",
        ticks: {
          // min: dataFromFetch[1].data[0],
          // max: dataFromFetch[1].data[10],
          stepSize: 5,
          beginAtZero: true,
          callback: function (value) {
            return value + "M";
          },
          padding: 20,
        },
        scaleLabel: {
          display: true,
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

export default function MultiLine() {
  const [data, setData] = useState(finalData);
  const [selectedData, setSelectedData] = useState(dataFromFetch);
  const [country, setCountry] = useState('')

  useEffect(async () => {
    const eduWomanData = await getEduWomanData("ES");
    dataFromFetch[0].data = eduWomanData.data;
    console.log("data eduwoman", finalData);
  }, []);

  useEffect(() => {
    console.log("opcion seleccionada", country)
  }, [country])

  const handleChange = (country) => {
    setCountry(country)
    console.log("valor que llega a MultiLine", country)
  };

  const handleClick = () =>{
    console.log('click')
  }
  return (
    <div className="lineal">
      <div className="line-chart-header">
        <h2 className="chart-title">Educación vs empleos TIC</h2>
        <Select type={'country'} getValue={handleChange} value={country}/>
        <Button click={()=>handleClick}/>
      </div>
      <div className="chart-container">
        <Line data={finalData} width={110} height={35} options={lineOptions} />
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
      {/* <button onClick={() => handleClick(1)} className="first-data">
        First Dataset
      </button>
      <button onClick={() => handleClick(2)} className="second-data">
        Second Dataset
      </button>
      <button onClick={() => handleClick(3)} className="all-data">
        All Datasets
      </button> */}
    </div>
  );
}