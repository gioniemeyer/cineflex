export default function Footer({movieSelected}) {
    return(
        <div className='footer'>
            <img src={movieSelected.posterURL}/>
            <p>{movieSelected.title}</p>
        </div>
    )
}