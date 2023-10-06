interface CardCitaMedicaProps {
    titulo: string;
    descripcion: string;
    nombreBoton: string;
    funcion: () => void; // Ajusta el tipo según lo que necesites
}

const CardCitaMedica: React.FC<CardCitaMedicaProps> = ({
    titulo,
    descripcion,
    nombreBoton,
    funcion,
}) => {

    return (
        <>
            <h3 className="text card-title">{titulo}</h3>
            <p className="text description">{descripcion}</p>
            <button onClick={funcion}>
                {nombreBoton}
            </button>
        </>
    );

}

export default CardCitaMedica;