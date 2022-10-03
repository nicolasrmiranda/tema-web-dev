import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <article className="lista-suspensa">
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)}>
            <option value="">Selecione a opção</option>
            {/* [].map valida e retorna algo em todos as posiçoes do vetor*/}
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </article>
    )
}

export default ListaSuspensa;