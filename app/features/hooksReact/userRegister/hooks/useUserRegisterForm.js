import { useState } from "react";
import useContador from "../../contador/hooks/useContador";
import { USER_REGISTER_VALIDATION, USER_REGISTER_ERRORS } from "../constants/userRegister.constants";

// Hook del formulario de registro: guarda name/email, valida el nombre
// y delega el conteo al useContador ya existente.
function useUserRegisterForm(setCount) {
    const { handleIncrement } = useContador(setCount)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [nameError, setNameError] = useState("")

    function validateName(value) {
        if (!value.trim()) return USER_REGISTER_ERRORS.NAME_REQUIRED
        if (value.trim().length <= USER_REGISTER_VALIDATION.NAME_MIN_LENGTH) return USER_REGISTER_ERRORS.NAME_TOO_SHORT
        if (!USER_REGISTER_VALIDATION.NAME_REGEX.test(value)) return USER_REGISTER_ERRORS.NAME_INVALID
        return ""
    }

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const error = validateName(name)
        setNameError(error)
        if (error) return

        handleIncrement()
        setName("")
        setEmail("")
    }

    return {
        name,
        email,
        nameError,
        handleNameChange,
        handleEmailChange,
        handleSubmit
    }
}

export default useUserRegisterForm;
