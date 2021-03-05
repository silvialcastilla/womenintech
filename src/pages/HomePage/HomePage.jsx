import React from "react";
import PieChart from "../../components/Pie/PieChart";

function HomePage() {
  return (
    <div className="home-page">
      <div>
        <h2>Nuestra hipótesis</h2>
        <p>Para evaluar el impacto de la presencia de la mujer en el mundo tecnológico y digital, buscamos validar o refutar la siguientet hipótesis: “Si integramos a la mujer en la educación, entonces se potencia el desarrollo de los países, porque habrá más mujeres en puestos de responsabilidad y en empleos TIC”.</p>
        <p>Con los siguientes datos pretendemos mostrar como se valida dicha hipótesis.</p>
      </div>
      <div>
        <h2>Nuestros datos</h2>
        <div>
          <PieChart />
          <div>
            <p>mujeres cursando educación secundaria o superior</p>
            <p>En este gráfico os mostramos una comparativa del porcentaje de mujeres cursando educación secundaria o superior con respecto al porcentaje de hombres, para dos países de la Unión Europea en un año concreto.</p>
            <p>Todos los datos se han obtenido de Eurostat.</p>
          </div>
        </div>
        <div>
          <div>
            <p>relación educación y empleos tic</p>
            <p>En este gráfico os mostramos una comparativa del porcentaje de mujeres cursando educación secundaria o superior con respecto al porcentaje de mujeres con un empleo TIC, por año y por país de la Unión Europea.</p>
            <p>Todos los datos se han obtenido de Eurostat.</p>
          </div>
          <PieChart />
        </div>
        <div>          
          <PieChart />
          <div>
            <p>relación puestos de responsabilidad y desarrollo del país</p>
            <p>En este gráfico os mostramos una comparativa del porcentaje de mujeres con un empleo en puesto de responsabilidad con respecto al desarrollo del país, por año y por país de la Unión Europea.</p>
            <p>Todos los datos se han obtenido de Eurostat.</p>
          </div>
        </div>
        <div>          
          <div>
            <p>Relación empleos tIc con el pib del país</p>
            <p>En este gráfico os mostramos una comparativa del porcentaje de mujeres con un empleo TIC con respecto al PIB o desarrollo económico del país, por año y por país de la Unión Europea.</p>
            <p>Todos los datos se han obtenido de Eurostat.</p>
          </div>
          <PieChart />
        </div>
      </div>
    </div>
  );

}

export default HomePage;
