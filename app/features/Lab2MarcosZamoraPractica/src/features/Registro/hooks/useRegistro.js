import { useState } from 'react'
import { CONTADOR_LIMITS } from '../../ContadorPadre/constants/Contador.constants'
import { REGISTRO_ERROR, REGISTRO_VALIDATION } from '../constants/registro.constants'

function useRegistro() {
  const [participantes, setParticipantes] = useState([])
  const [error, setError] = useState('')

  const registrarParticipante = (nombre) => {
    const nombreLimpio = nombre.trim()

    if (nombreLimpio.length < REGISTRO_VALIDATION.MIN_LENGTH) {
      setError(REGISTRO_ERROR.NAME)
      return false
    }
    if (participantes.length >= CONTADOR_LIMITS.MAX) {
      setError(REGISTRO_ERROR.SIN_CUPOS)
      return false
    }

    setParticipantes(prev => [...prev, nombreLimpio])
    setError('')
    return true
  }

  return { participantes, error, registrarParticipante };
}

export default useRegistro;
