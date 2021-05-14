export default function InfosSuccessPage({movieSelected}) {
    return (
        <div className='infos'>
            <strong>Filme e sessão</strong>
            <p>{movieSelected.title}</p>
            <p><span>{movieSession.day.date}</span> <span>{movieSession.name}</span></p>
        </div>
    )
}