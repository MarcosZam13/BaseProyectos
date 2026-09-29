import { RegistroList } from './features/RegistroList/RegistroList'
import { Registro } from './features/Registro/Registro'
import { Contador } from './features/ContadorPadre/Contador'
import useRegistro from './features/Registro/hooks/useRegistro'
import './App.css'

function App() {
  const { participantes, error, registrarParticipante } = useRegistro()

  return (
    <>
      <Registro onRegistrar={registrarParticipante} error={error} />
      <Contador participantes={participantes} />
      <RegistroList participantes={participantes} />
    </>
  )
}

export default App
