export default function Seat({seat, toggleSelection}) {
    return(
        <div className={!seat.isAvailable ? 'seat taken' : seat.isChosen ? 'seat chosen' : 'seat'} seat={seat} onClick={() => toggleSelection(seat)}>
            <p>{seat.name}</p>
        </div> 
    )
}