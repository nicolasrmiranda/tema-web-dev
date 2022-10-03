import './Colaborador.css'

/* const Colaborador = (props) => {
    return(
    <section className='colaborador'>
        <article className='cabecalho'>
            <img src={props.imagem} alt={props.nome}/>
        </article>
        <article className='rodape'>
            <h4>{props.nome}</h4>
            <h5>{props.cargo}</h5>
        </article>
    </section>)
} */

const Colaborador = ({nome, imagem, cargo, corCard}) => {
    return(
        <section className='colaborador'>
            <article className='cabecalho' style={{ backgroundColor:corCard }}>
                <img src={imagem} alt={nome}/>
            </article>
            <article className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </article>
        </section>
    )
} 

export default Colaborador;