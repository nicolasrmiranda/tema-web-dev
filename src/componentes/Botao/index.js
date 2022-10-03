import './Botao.css';

const Botao = (props) => {
    return(
        /* children usado para colocar o que tem dentro do componente lá no html 
        ex: <button>Criar card</button> */
        <button className="botao">{props.children}</button>
    )
}

export default Botao;