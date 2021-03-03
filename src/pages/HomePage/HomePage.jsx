import React from "react";
import { Pie } from "react-chartjs-2";

const arraydePrueba = {
  labels: ["Mujeres", "Hombres"],
  data: [53, 40],
};
const state = {
  labels: arraydePrueba.labels,
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["#000000", "#FF0000"],
      hoverBackgroundColor: ["#FFFF00", "#4B5000"],
      data: arraydePrueba.data,
    },
  ],
};

function ArchivePage() {
  return (
    <div className="archive-page">
      <h1>HomePage</h1>
      <Pie
        data={state}
        options={{
          title: {
            display: true,
            text: "La comparativa",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}

export default ArchivePage;
