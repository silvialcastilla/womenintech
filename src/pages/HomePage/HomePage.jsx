import React from "react";
import Doughnut from "../../components/DoughnutChart/DoughnutChart";
import MultiLine from "../../components/MultiLine/index";
import MultiLine2 from "../../components/MultiLine2/index";
import SingleLine from "../../components/SingleLine/index";
import "./HomePage.css";
import Container from "../../components/container/index";

function HomePage() {
  return (
    <div className="home-page">
      <div>
        <div className="rectang"></div>
        <h3 className="main-title">Nuestra hipótesis</h3>
        <p className="home-page-first-p">
          Para evaluar el impacto de la presencia de la mujer en el mundo
          tecnológico y digital, buscamos validar o refutar la siguiente
          hipótesis:
          <i>
            “Si integramos a la mujer en la educación, entonces se potencia el
            desarrollo de los países, porque habrá más mujeres en puestos de
            responsabilidad y en empleos TIC”.
          </i>
        </p>
        <p className="home-page-second-p">
          Con los siguientes datos pretendemos mostrar como se valida dicha
          hipótesis.
        </p>
      </div>
      <div>
        <div className="rectangu"></div>
        <h3 className="our-data">Nuestros datos</h3>
        <div className="home-page-general-div" id="home-page-first-div">
          <Doughnut />
          <div className="home-page-div-left">
            <p className="titles-left">
              mujeres cursando educación secundaria o superior
            </p>
            <p>
              En este gráfico os mostramos una comparativa del porcentaje de
              mujeres cursando educación secundaria o superior con respecto al
              porcentaje de hombres, para dos países de la Unión Europea en un
              año concreto.
            </p>
            <p>Todos los datos se han obtenido de Eurostat.</p>
          </div>
        </div>
        <div className="home-page-general-div">
          <div className="home-page-div-right">
            <p className="titles-right">relación educación y empleos tic</p>
            <p>
              En este gráfico os mostramos una comparativa del porcentaje de
              mujeres cursando educación secundaria o superior con respecto al
              porcentaje de mujeres con un empleo TIC, por año y por país de la
              Unión Europea.
            </p>
            <p>Todos los datos se han obtenido de Eurostat.</p>
          </div>
          <Container component={SingleLine} />
        </div>
        <div className="home-page-general-div" id="home-page-third-div">
          <Container component={MultiLine} />
          {/* <div className="lines-chart-left" /> */}
          <div className="home-page-div-left" id="home-page-div-left">
            <p className="titles-left">
              relación puestos de responsabilidad y desarrollo del país
            </p>
            <p>
              En este gráfico os mostramos una comparativa del porcentaje de
              mujeres con un empleo en puesto de responsabilidad con respecto al
              desarrollo del país, por año y por país de la Unión Europea.
            </p>
            <p>Todos los datos se han obtenido de Eurostat.</p>
          </div>
        </div>
        <div className="home-page-general-div">
          <div className="home-page-div-right">
            <p className="titles-right">
              Relación empleos tIc con el pib del país
            </p>
            <p>
              En este gráfico os mostramos una comparativa del porcentaje de
              mujeres con un empleo TIC con respecto al PIB o desarrollo
              económico del país, por año y por país de la Unión Europea.
            </p>
            <p>Todos los datos se han obtenido de Eurostat.</p>
          </div>
          {/* <div className="lines-chart" /> */}
          <Container component={MultiLine2} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
