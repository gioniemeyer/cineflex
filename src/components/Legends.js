export default function Legends() {
    return (
        <div className="legend">
            <div className="legend-topic">
            <div className='seat chosen'></div>
                <p>Selecionado</p>
            </div>
            <div className="legend-topic">
                <div className='seat'></div>
                <p>Disponível</p>
            </div>
            <div className="legend-topic">
                <div className='seat taken'></div>
                <p>Indisponível</p>
            </div>
        </div>
    )
}