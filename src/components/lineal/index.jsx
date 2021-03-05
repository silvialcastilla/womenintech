import { useState, useEffect } from 'react'
import { Line } from "react-chartjs-2";
import { getEduWomanData } from '../../utils/data'
import './styles.css'

const dataFromFetch = [
    {
      label: "Mujeres en educación secundaria o superior",
      data: [],
      fill: false,
      borderColor: "#8C0582",
      lineTension: 0,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 10,
      borderJoinStyle: 'miter',
      pointRadius: 0,
      pointHitRadius: 0,
    },
    {
      label: "Mujeres trabajando en empleos TIC",
      data: [],
      fill: false,
      borderColor: "#00CFFF",
      lineTension: 0,
      borderDashOffset: 10,
      pointRadius: 0,
      pointHitRadius: 0,

    }
  ]
  const womenStudies = {
    "data": [51.73, 51.83, 51.93, 52.05, 52.21, 51.94, 52.3, 52.53, 52.45, 52.66, 52.78], 
    "units": "Percentage", 
    "name": "Women who studied upper secondary, post-secondary non-tertiary and tertiary"
  }

  const womenInTech = {
    "data": [22.7, 22.7, 20.2, 19.6, 19.8, 18.7, 18.8, 17.6, 16.7, 17.8, 19.7], 
    "units": "Percentage", 
    "name": "Employed"
  }

const finalData = {
    labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
    datasets: dataFromFetch,
    title: "hola"
}


const lineOptions = {
  maintainAspectRatio: true,
  title:{
    display:false,
    text:'',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 20,
    padding: 10,
    color: '#10182B'
  },
  legend:{
    display:false,
    position:'bottom',
    align: 'start'
  }
}

export default function App() {
  const [country, setCoutry] = useState('')
  const [data, setData] = useState(finalData)
  const [selectedData, setSelectedData] = useState(dataFromFetch)

  useEffect( async() => {
    const eduWomanData = await getEduWomanData("ES")
    dataFromFetch[0].data = eduWomanData.data
    console.log("data eduwoman", dataFromFetch)
  }, [])

  const handleClick = (option) => {
    let dataToShow = []
    if(option === 1){
      dataToShow.push(dataFromFetch[0])
    }
    if(option === 2){
      dataToShow.push(dataFromFetch[1])
    }
    if(option === 3){
      dataToShow = dataFromFetch
    }
    setSelectedData(dataToShow)
  }
  return (
    <div className="lineal">
      <h2 className="chart-title">Educación vs empleos TIC</h2>
      <Line 
        data={finalData}
        width={100}
        height={50}
        options={lineOptions}
      />
      <div className="chart-leyend">
        <div className="leyend">
          <div className="leyend-circle-one"></div>
          <p className="leyend-title">Mujeres en educación secundaria o superior</p>
        </div>
        <div className="leyend">
          <div className="leyend-circle-two"></div>
          <p className="leyend-title">Mujeres trabajando en empleos TIC</p>
        </div>
      </div>
      <button onClick={()=> handleClick(1)}className="first-data">First Dataset</button>
      <button onClick={()=> handleClick(2)}className="second-data">Second Dataset</button>
      <button onClick={()=> handleClick(3)}className="all-data">All Datasets</button>
    </div>
  );
}

