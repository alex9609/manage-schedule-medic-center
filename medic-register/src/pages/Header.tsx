import "./header.css"
import { useNavigate } from "react-router-dom"; 

const Header = () => {

    const navigate = useNavigate();

    const cerrarSesion = () =>{
        alert("Esta cerrando sesión")

        localStorage.setItem("ingreso","");
        navigate("/")

    }
    return (
        <>          
          <div className="header">
          <div className='welcome-logout'>
            <p>Bienvenido, Paciente</p>
            <button className="LogOut-button" onClick={cerrarSesion}>
              Cerrar sesión
            </button>
          </div>
          </div>
        </>
    )
}

export default Header;