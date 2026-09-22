import { CONTADOR_TEXT, CONTADOR_LIMITS } from './constants/contador2.constants'
import  useContador  from '../contador/hooks/useContador'

//Este seria el componente hijo que recibe las props count y setCount del componente padre 
//LayoutContador, y utiliza el hook useContador para manejar los eventos de incremento y decremento del contador
export function Contador2({count, setCount}) {


  const { } = useContador(setCount)

  return (
    <>
      <h2>{CONTADOR_TEXT.TITLE}</h2>
      <p>{count}</p>
    </>
  )
}
