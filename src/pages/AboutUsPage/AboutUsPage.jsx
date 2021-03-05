import React, { useState } from 'react'
import Target from '../../components/Target/Target';
import './AboutUsPage.css'

function AboutUsPage() {

  const [notes, setNotes] = useState([{ name: "Clara", profession: "Data Scientist", description: "lorem" }, { name: "Miriam", profession: "UX Designer", description: "lorem" }, { name: "Nora", profession: "Fullstack Developer", description: "lorem" }, { name: "Sol", profession: "Fullstack Developer", description: "lorem" }, { name: "Silvia", profession: "Fullstack Developer", description: "Poder formar parte de algo que está presente en el día a día de las personas y aportar tu granito de arena es lo que más me gusta de esta profesión" }, { name: "Marina", profession: "UX Designer", description: "Lo que más me motiva es la innovación del sector y la posibiilidad de aprender todos los días algo nuevo, para trasladarlo a los usuarios" }, { name: "Marina", profession: "UX Designer", description: "La creatividad y la capacidad de aplicarla  a soluciones digitales para mejorar la vida de las personas, me inspira cada día para actuar" }, { name: "Reyes", profession: "Data Scientist", description: "lorem" }])
  return (
    <div className="aboutUsPage">
      <h1>Nosotras somos</h1>
      <p>Somos el equipo de mujeres que formamos parte del claustro de The Bridge Digital Talent Accelerator. Hemos formado equipo y nos hemos puesto a colaborar para acercar a todas las mujeres las ociones que ofrece el mundo digital y de la tecnología.</p>
      <div className="aboutUsPage-container">
        {notes.map((data, i) => (
          <Target key={i} data={data} />
        ))}
      </div>
    </div>
  );
}

export default AboutUsPage;