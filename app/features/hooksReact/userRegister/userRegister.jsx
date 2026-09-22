import { USER_REGISTER_TEXT } from "./constants/userRegister.constants";
import useUserRegisterForm from "./hooks/useUserRegisterForm";

export function UserRegister({ count, setCount }) {

    const { name, email, nameError, handleNameChange, handleEmailChange, handleSubmit } = useUserRegisterForm(setCount)

  return (
    <div>
      <h1>{USER_REGISTER_TEXT.TITLE}</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">{USER_REGISTER_TEXT.NAME_LABEL}</label>
            <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />
            {nameError && <p>{nameError}</p>}
            <br />
            <label htmlFor="email">{USER_REGISTER_TEXT.EMAIL_LABEL}</label>
            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
            <br />
            <button type="submit">
              {USER_REGISTER_TEXT.SUBMIT_BUTTON}
            </button>
        </form>
    </div>
  );
}