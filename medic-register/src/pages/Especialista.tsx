import Header from "./Header"
import { useState } from 'react';
import { FaHospitalUser } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import "./medicoGeneral.css"
import MedicoEspecialista from "../assets/MedicoEspcialista.jfif"
import "./especialista.css"

const Especialista = () => {

    const navigate = useNavigate();

    const [isSelectedAlejandro, setIsSelectedAlejandro] = useState(false);
    const [isSelectedSara, setIsSelectedSara] = useState(false);
    const [isSelectedRaul, setIsSelectedRaul] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Vacio');

    const [checkedOp1, setCheckedOp1] = useState(false)
    const [checkedOp2, setCheckedOp2] = useState(false)
    const [checkedOp3, setCheckedOp3] = useState(false)

    const [doctor, setDoctor] = useState("")
    const [opcion1, setOpcion1] = useState("")
    const [opcion2, setOpcion2] = useState("")
    const [opcion3, setOpcion3] = useState("")

    const toggleSelectedAlejandro = () => {
        setIsSelectedRaul(false);
        setIsSelectedSara(false);
        setIsSelectedAlejandro(!isSelectedAlejandro);
        setSelectedValue("Vacio");

        setCheckedOp1(false);
        setCheckedOp2(false);
        setCheckedOp3(false);

        setDoctor("Felipe Suarez")
        setOpcion1("7:00 am");
        setOpcion2("10:00 am");
        setOpcion3("11:00 am");
    };

    const toggleSelecteSara = () => {
        setIsSelectedAlejandro(false);
        setIsSelectedRaul(false);
        setIsSelectedSara(!isSelectedSara);
        setSelectedValue("Vacio");
        setDoctor("Sara Bermudez")

        setCheckedOp1(false);
        setCheckedOp2(false);
        setCheckedOp3(false);

        setOpcion1("12:00 pm");
        setOpcion2("2:00 pm");
        setOpcion3("4:00 pm");
    };

    const toggleSelectedRaul = () => {
        setIsSelectedAlejandro(false);
        setIsSelectedSara(false);
        setIsSelectedRaul(!isSelectedRaul);

        setSelectedValue("Vacio");
        setDoctor("Juan Quintero")

        setCheckedOp1(false);
        setCheckedOp2(false);
        setCheckedOp3(false);

        setOpcion1("5:00 pm");
        setOpcion2("6:00 pm");
        setOpcion3("8:00 pm");
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        var name = e.target.name;
        if (name === "opcion1") {
            setCheckedOp1(true)
            setCheckedOp2(false)
            setCheckedOp3(false)
        }
        if (name === "opcion2") {
            setCheckedOp2(true)
            setCheckedOp1(false)
            setCheckedOp3(false)
        }
        if (name === "opcion3") {
            setCheckedOp3(true)
            setCheckedOp1(false)
            setCheckedOp2(false)
        }

        setSelectedValue(e.target.value);
    };



    const agendar = () => {
        if (selectedValue === "Vacio") {
            alert("Seleccione un horario valido")
            return
        }
        alert("Agendando con: " + doctor + " a la hora " + selectedValue)


        setIsSelectedAlejandro(false);
        setIsSelectedSara(false);
        setIsSelectedRaul(false);
        setSelectedValue('Vacio');

        setCheckedOp1(false)
        setCheckedOp2(false)
        setCheckedOp3(false)

        setDoctor("")
        setOpcion1("")
        setOpcion2("")
        setOpcion3("")
    }

    const inicio = () => {
        navigate("/inicio")
    }




    return (
        <div className="container-inicio">
            <Header />
            <h2>
                Especialista
            </h2>
            <img src={MedicoEspecialista} alt="medico" className="medicoEspecialista" />
            <p>Seleccione el médico especialista que desea agendar:</p>
            <div className="contenedor-grid">
                <div
                    className={`seleccionable ${isSelectedAlejandro ? 'seleccionado' : ''}`}
                    onClick={toggleSelectedAlejandro}
                >

                    <h3><FaHospitalUser /> Felipe Suarez</h3>
                    <h3>Cardiologo</h3>
                    <p>Cel: 324 567 39 23</p>
                </div>

                <div
                    className={`seleccionabl ${isSelectedSara ? 'seleccionadoS' : ''}`}
                    onClick={toggleSelecteSara}
                >
                    <h3><FaHospitalUser /> Sara Bermudez</h3>
                    <h3>Homeopata</h3>
                    <p>Cel: 324 567 39 23</p>
                </div>

                <div
                    className={`seleccionable ${isSelectedRaul ? 'seleccionadoR' : ''}`}
                    onClick={toggleSelectedRaul}
                >
                    <h3><FaHospitalUser /> Juan Quintero</h3>
                    <h3>Dermatologo</h3>
                    <p>Cel: 324 567 39 23</p>
                </div>


                <div className={`disabled ${isSelectedAlejandro || isSelectedSara || isSelectedRaul ? '' : 'disable'}`}>
                    <div>
                        <input type="radio" id="opcion1" name="opcion1" value={opcion1}
                            onChange={handleRadioChange} checked={checkedOp1} />
                        <label>{opcion1}</label>
                        <br></br>

                        <input type="radio" id="opcion2" name="opcion2" value={opcion2}
                            onChange={handleRadioChange} checked={checkedOp2} />
                        <label>{opcion2}</label>
                        <br></br>

                        <input type="radio" id="opcion3" name="opcion3" value={opcion3}
                            onChange={handleRadioChange} checked={checkedOp3} />
                        <label>{opcion3}</label>
                        <br></br>
                        <button onClick={agendar}>
                            Agendar
                        </button>
                    </div>
                </div>

            </div>
            <div>

                <button onClick={inicio}>
                    Volver al inicio
                </button>
            </div>
        </ div >
    )
}

export default Especialista;