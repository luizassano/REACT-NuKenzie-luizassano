import { useContext } from "react"
import trash from "../../assets/trash.png"
import { TransactionsContext } from "../../contexts/transactionsContext"
import { CardStyle } from "./style"

const Card = ({infoCard}: any) => {

    const {deleteTransaction} = useContext(TransactionsContext)
    return (
        <CardStyle>
            <div className={infoCard.type === "Entrada" ?  "boxCard" : "boxExpenseCard"}>
                <div className="boxName">
                    <h2 className="Title3">{infoCard.description}</h2>
                    <span className="Body">{infoCard.type}</span>
                </div>
                <div className="boxTrash">
                    <p className="Body">{parseFloat(infoCard.value).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
                    <button onClick={() => deleteTransaction(infoCard.id)}><img src={trash} alt="imagem lixo" /></button>
                </div>
            </div>
        </CardStyle>
    )
}

export default Card