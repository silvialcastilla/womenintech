import React from 'react'
import Lineal from '../../components/lineal'
import Container from '../../components/container'



function ArchivePage() {
  return (
    <div className="archive-page">
      <h1>Educación vs empleos TIC</h1>
      <Container component={Lineal} />
    </div>
  );
}

export default ArchivePage;