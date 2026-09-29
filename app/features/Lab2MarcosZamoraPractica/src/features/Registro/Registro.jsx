import { useState } from 'react'
import { REGISTRO_TEXT, REGISTRO_PLACEHOLDER, REGISTRO_BUTTON } from './constants/registro.constants'

export function Registro({ onRegistrar, error }) {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onRegistrar(name)) {
      setName('')
    }
  }

  return (
    <>
      <h1>{REGISTRO_TEXT.TITLE}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">{REGISTRO_TEXT.NAME}</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={REGISTRO_PLACEHOLDER.NAME}
        />
        <button type="submit">{REGISTRO_BUTTON.REGISTER}</button>
      </form>
      {error && <p>{error}</p>}
    </>
  )
}
