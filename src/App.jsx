import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Listado from './components/Listado.jsx';
import Formulario from './components/Formulario.jsx';
import Buscador from './components/Buscador.jsx';
import { BaseColaboradores } from './assets/BaseColaboradores.js';

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const eliminarColaborador = (id) => {
    const colaboradoresActualizados = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(colaboradoresActualizados);
  };

  const filtrarColaboradores = (busqueda) => {
    const colaboradoresFiltrados = BaseColaboradores.filter((colaborador) =>
      Object.values(colaborador).join(' ').toLowerCase().includes(busqueda.toLowerCase())
    );
    setColaboradores(colaboradoresFiltrados);
  };

  return (
    <div className="container">
      <h1 className='text-center'>Lista de Colaboradores</h1>
      <Buscador filtrarColaboradores={filtrarColaboradores} />
      <div className="row mt-3">
        <div className="col-12 col-lg-8">
          <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
        </div>
        <div className="col-12 col-lg-4">
          <Formulario agregarColaborador={agregarColaborador} />
        </div>
      </div>
    </div>
  );
};

export default App;