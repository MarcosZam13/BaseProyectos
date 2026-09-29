import { CONTADOR_LIMITS } from '../constants/Contador.constants.js'

// Calcula los contadores a partir de la lista, sin guardar estado extra
function useContador(participantes) {
    const registrados = participantes.length
    const disponibles = CONTADOR_LIMITS.MAX - registrados

    return { registrados, disponibles };
}

export default useContador;
