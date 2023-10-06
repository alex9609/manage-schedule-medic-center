import { useNavigate } from "react-router-dom"
import CardCitaMedica from "./CardCitaMedica"
import Header from "./Header"
import "./Inicio.css"
import medicoGeneral from "../assets/medicoGeneral.png"
import especialista from "../assets/especialista.jfif"
import laboratorio from "../assets/laboratorio.png"

const Inicio = () => {

    const navigate = useNavigate()

    const medicoSubmit = () => {
        //e.preventDefault();
        alert("Revisando disponibilidad de Medico general")
        navigate("/inicio/MedicoGeneral")

    }

    const especialistaSubmit = () => {
        //e.preventDefault();
        alert("Consultando Especialistas")
        navigate("/inicio/Especialista")
    }

    const laboratorioSubmit = () => {
        //e.preventDefault();
        alert("Ingresando al Laboratorio")
        navigate("/inicio/Laboratorio")
    }

    return (
        <div className="container-inicio">
            <Header />
            <div>
                <h2>
                    Registro de control medico
                </h2>
                <p>
                    Nos interesa que estes bien, tú salud es lo más importante para nosotros
                </p>
            </div>
            <hr />
            <div>
                <h2>¿Que deseas hacer?</h2>
                <div className="contenedor-grid">
                    <div>
                        <img src={medicoGeneral} alt="medico" className="medicoGeneral" />
                        <CardCitaMedica titulo="Médico General"
                            descripcion="¡Aquí puedes agendar tus citas médicas para resolver tus preocupaciones de salud!"
                            nombreBoton="Agendar Médico"
                            funcion={medicoSubmit}

                        />
                    </div>
                    <div>
                        <img src={especialista} alt="especialista" className="especialista" />
                        <CardCitaMedica titulo="Especialista"
                            descripcion="¡Reserva tus consultas con nuestros especialistas altamente capacitados para abordar tus necesidades médicas específicas!"
                            nombreBoton="Agendar especialista"
                            funcion={especialistaSubmit}
                        />
                    </div>
                    <div>
                        <img src={laboratorio} alt="laboratorio" className="laboratorio" />
                        <CardCitaMedica titulo="Laboratorio"
                            descripcion="Consulta tus resultados de laboratorio de manera rápida y sencilla reservando aquí."
                            nombreBoton="Consultar examenes"
                            funcion={laboratorioSubmit}
                        />
                    </div>
                </div>
            </div>
        </ div>
    )

}

export default Inicio;