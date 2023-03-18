// Componente de botão incluir Negociação - com função de callback

export const Botao = ({ onClick }) => {
    return (
    <div className="col-1 d-flex align-items-end justify-content-end">
    <button className="btn btn-primary" type="submit" onClick={onClick}>Incluir</button>
    </div>
    )
    }