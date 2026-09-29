import { REGISTROLIST_TEXT } from './constants/registroList.constants.js'

export function RegistroList({ participantes }) {

  return (
    <>
      <h1>{REGISTROLIST_TEXT.NAME}</h1>
        <ul>
            {participantes.map((nombre, index) => (
                <li key={index}>{nombre}</li>
            ))}
        </ul>
    </>
  )
}
