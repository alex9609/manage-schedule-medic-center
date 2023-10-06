import { useNavigate } from "react-router-dom"
import { useState } from "react"
import logoCitas from "../assets/logoCitas.jpg"
import "./login.css"
const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const [errorMessage, setErrorMessages] = useState("");

    const submitRegistration = () => {

        if (username == "paciente" && password == "1234") {
            alert("Ingreso exitoso")
            setErrorMessages("")
            localStorage.setItem("ingreso", "permitido")
            navigate("/inicio")
        } else {
            setErrorMessages("Credenciales invalidas")
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username.length >= 3 && password.length >= 3) {
            submitRegistration();
        } else {
            setErrorMessages("Ingrese más de 3 caracteres")
        }
    }

    return (
        <>
            <div className="login-container">
                <h2>
                    Control de citas
                </h2>
                <img src={logoCitas} alt="logo" className="logoCitas" />
                <h3>Bienvenido</h3>
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="field">
                        <div className="control">
                            <input
                                type="text"
                                placeholder="Usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="general-input"
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="general-input"
                                required
                            />
                        </div>
                    </div>
                    <p className="errorMessage">{errorMessage}</p>
                    <br />
                    <button className="general-button" type="submit">
                        <span className="button-text">Ingresar</span>
                    </button>
                </form>
            </div>

        </>
    )
}

export default Login;

//Crea un formulario para login