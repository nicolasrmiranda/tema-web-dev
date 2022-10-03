import './CampoTexto.css';

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }
    
    return (
        <article className="campo-texto">
            {/* {} usado para variaveis */}
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </article>
    )
}

export default CampoTexto;