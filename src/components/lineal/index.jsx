import { useState, useEffect } from 'react'
import { Line} from "react-chartjs-2";
import './styles.css'

const dataFromFetch = [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      lineTension: 0.1,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.5,
      borderJoinStyle: 'miter',
      pointBorderColor: "white",
      pointBackgroundColor: "black",
      pointBorderWidth: 0,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "blue",
      pointHoverBorderColor: "cyan",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
      fill: true,
      backgroundColor: "rgba(116, 39, 116, 0.068)",

    }
  ]

const finalData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: dataFromFetch,
    axisX: {
      showLabel: false,
      showGrid: false
    },
    axisY: {
      showLabel: false,
      showGrid: false
    },
}

const options = {
  high: 3,
  low: -3,
  showArea: true,
  showLine: false,
  showPoint: false,
  fullWidth: true,
  axisX: {
    showLabel: false,
    showGrid: false
  }
}

export default function App() {

  const [data, setData] = useState(finalData)
  const [selectedData, setSelectedData] = useState(dataFromFetch)

  const changeData = (info) => finalData.datasets = info

  useEffect( async() => {
    const show = await changeData(selectedData)
    setData(show)
  }, [selectedData])

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
      <Line data={finalData} />
      <button onClick={()=> handleClick(1)}className="first-data">First Dataset</button>
      <button onClick={()=> handleClick(2)}className="second-data">Second Dataset</button>
      <button onClick={()=> handleClick(3)}className="all-data">All Datasets</button>
    </div>
  );
}

