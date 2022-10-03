import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {

    const corSecundaria = {backgroundColor: props.corSecundaria};
    
    return (
        /* foi aberto style={} e depois mais um {} dentro para indicar a criação do objeto ex: style={escopo javascript {objeto} } */

        //<section  className='time' style={{ backgroundColor: props.corSecundaria }}>
        props.colaboradores.length > 0 && 
        <section  className='time' style={corSecundaria}>
            <h3 style={{ borderColor: props.corDoFundo }}>{props.nome}</h3>
            <article className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador corCard={props.corDoFundo} key={colaborador.nome} nome={colaborador.nome}  cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
            </article>
        </section>
    )
}

export default Time;