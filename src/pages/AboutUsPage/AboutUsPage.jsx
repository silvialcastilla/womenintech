import React, { useState } from "react";
import Target from "../../components/Target/Target";
import "./AboutUsPage.css";
import Clara from "../../assets/img/clara.png";
import Miriam from "../../assets/img/miriam.png";
import Nora from "../../assets/img/nora.png";
import Sol from "../../assets/img/sol.png";
import Silvia from "../../assets/img/silvia.png";
import Marina from "../../assets/img/marina.png";
import Marinaa from "../../assets/img/marinaa.png";
import Reyes from "../../assets/img/reyes.png";

function AboutUsPage() {
  const [notes, setNotes] = useState([
    {
      name: "Clara",
      profession: "Data Scientist",
      description: "lorem",
      img: Clara,
    },
    {
      name: "Miriam",
      profession: "UX Designer",
      description: "lorem",
      img: Miriam,
    },
    {
      name: "Nora",
      profession: "Fullstack Developer",
      description: "lorem",
      img: Nora,
    },
    {
      name: "Sol",
      profession: "Fullstack Developer",
      description: "lorem",
      img: Sol,
    },
    {
      name: "Silvia",
      profession: "Fullstack Developer",
      description:
        "Poder formar parte de algo que está presente en el día a día de las personas y aportar tu granito de arena es lo que más me gusta de esta profesión",
      img: Silvia,
    },
    {
      name: "Marina",
      profession: "UX Designer",
      description:
        "Lo que más me motiva es la innovación del sector y la posibiilidad de aprender todos los días algo nuevo, para trasladarlo a los usuarios",
      img: Marinaa,
    },
    {
      name: "Marina",
      profession: "UX Designer",
      description:
        "La creatividad y la capacidad de aplicarla  a soluciones digitales para mejorar la vida de las personas, me inspira cada día para actuar",
      img: Marina,
    },
    {
      name: "Reyes",
      profession: "Data Scientist",
      description: "lorem",
      img: Reyes,
    },
  ]);
  return (
    <div className="about-page">
      <div className="rectangul"></div>
      <h3>Nosotras somos:</h3>
      <p>
        Somos el equipo de mujeres que formamos parte del claustro de The Bridge
        Digital Talent Accelerator. Hemos formado equipo y nos hemos puesto a
        colaborar para acercar a todas las mujeres las ociones que ofrece el
        mundo digital y de la tecnología.
      </p>
      <div className="aboutUsPage-container">
        {notes.map((data, i) => (
          <Target key={i} data={data} />
        ))}
      </div>
    </div>
  );
}

export default AboutUsPage;
