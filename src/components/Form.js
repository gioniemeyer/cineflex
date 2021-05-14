export default function Form({buyer, setBuyer, cpf, setCpf}) {
    return (
        <form>
            <p>Nome do comprador:</p>
            <input value={buyer} onChange={e => setBuyer(e.target.value)} placeholder="Digite seu nome..."/>
            <p>CPF do comprador:</p>
            <input set={cpf} onChange={e => setCpf(e.target.value)} placeholder="Digite seu CPF..."/>
        </form>
    )
}