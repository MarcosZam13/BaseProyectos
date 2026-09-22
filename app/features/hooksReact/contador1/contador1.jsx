import { CONTADOR_TEXT } from '../contador/constants/contador.constants'
import { CONTADOR_LIMITS } from '../contador/constants/contador.constants'
import  useContador  from '../contador/hooks/useContador'

//Este seria el componente hijo que recibe las props count y setCount del componente padre 
//LayoutContador, y utiliza el hook useContador para manejar los eventos de incremento y decremento del contador
export function Contador1({count, setCount}) {


  const { handleIncrement, handleDecrement } = useContador(setCount)

  return (
    <>
      <h2>{CONTADOR_TEXT.TITLE}</h2>
      <p>{count}</p>
      <button onClick={count < CONTADOR_LIMITS.MAX && handleIncrement}>  {CONTADOR_TEXT.INCREMENT} </button>
      <button onClick={count > CONTADOR_LIMITS.MIN ? handleDecrement : null}>  {CONTADOR_TEXT.DECREMENT} </button>
    </>
  )
}
