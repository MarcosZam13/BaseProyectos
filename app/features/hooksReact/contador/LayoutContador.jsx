import { useState } from 'react'
import { Contador1 }from '../contador1/contador1'
import { Contador2 }from '../contador2/contador2'
import { UserRegister } from '../userRegister/userRegister'

//Este seria el componente padre que contiene al componente hijo contador1, y le pasa las props count y setCount
export function LayoutContador() {

  const [count, setCount] = useState(0)

  return (
    <>
      <UserRegister count={count} setCount={setCount} />
      <Contador2 count={count} setCount={setCount} />
    </>
  )
}
