import { CONTADOR_TEXT } from './constants/Contador.constants'
import useContador from './hook/useContador'
import { ContadorHijo } from '../ContadorHijo/ContadorHijo'

export function Contador({ participantes }) {
  const { registrados, disponibles } = useContador(participantes)

  return (
    <>
      <ContadorHijo count={disponibles} name={CONTADOR_TEXT.CONTADOR1} />
      <ContadorHijo count={registrados} name={CONTADOR_TEXT.CONTADOR2} />
    </>
  )
}
