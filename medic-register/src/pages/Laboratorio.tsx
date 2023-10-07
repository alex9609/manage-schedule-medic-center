import Header from "./Header"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./laboratorio.css"
import { FaCloudDownloadAlt } from 'react-icons/fa';


const Laboratorio = () => {

    const navigate = useNavigate();

    const [cedula, setCedula] = useState("");
    const [mostrarExamenes, setMostrarExamenes] = useState(false);
    const [cedulaRespuesta, setCedulaRespuesta] = useState("")
    const changeCedula = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCedula(e.target.value)
    }


    const examenes = () => {
        if (cedula == "1111") {
            alert("Consultando")
            setCedulaRespuesta("1111")
            setMostrarExamenes(true);
        } else {
            alert("No se encontraron examenes para la cedula " + cedula)
            setMostrarExamenes(false);
        }

        setCedula("")

    }

    const limpiar = () => {
        setCedula("")
        setMostrarExamenes(false)

    }

    const inicio = () => {
        navigate("/inicio")
    }

    const descargar = () => {
        alert("Descargando examen")
    }

    return (
        <div className="container-inicio">
            <Header />
            <h2>
                Laboratorio
            </h2>

            <p>Ingrese su número de cedula para consultar examentes pendientes: </p>
            <p>Ejemplo: 1111</p>
            <div className="consultadiv">
                <label className="label">Cédula:</label>
                <input
                    className="cedula-input"
                    type="number"
                    id="cedula"
                    value={cedula}
                    onChange={changeCedula}
                    required
                />
                <div className="botones">
                    <button className="consulta-examen" onClick={examenes}>Consultar examentes</button>
                    <button className="limpiar-examen" onClick={limpiar}>Limpiar</button>

                </div>
            </div>
            <br>
            </br>
            {mostrarExamenes && (
                <div>
                    <h2>Resultados de examenes: Cedula {cedulaRespuesta}</h2>
                    {/* Aquí renderiza el componente examenes */}
                    <div className="tabla">
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>Examen</th>
                                    <th>Fecha</th>
                                    <th>Resultado</th>
                                    <th>Descargar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Examen de Sangre</td>
                                    <td>2023-10-01</td>
                                    <td>Normal</td>
                                    <td className="icon-download"><FaCloudDownloadAlt onClick={descargar} className="icon" /></td>
                                </tr>
                                <tr>
                                    <td>Examen de Orina</td>
                                    <td>2023-10-05</td>
                                    <td>Anormal</td>
                                    <td className="icon-download"><FaCloudDownloadAlt onClick={descargar} className="icon" /></td>
                                </tr>
                                <tr>
                                    <td>Examen de Colesterol</td>
                                    <td>2023-09-25</td>
                                    <td>Alto</td>
                                    <td className="icon-download"><FaCloudDownloadAlt onClick={descargar} className="icon" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {!mostrarExamenes && (
                <div>
                </div>
            )}

            <div>

                <button className="boton-inicio" onClick={inicio}>
                    Volver al inicio
                </button>
            </div>

        </ div>
    )
}

export default Laboratorio;