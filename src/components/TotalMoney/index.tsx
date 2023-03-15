import { useContext } from "react"
import { TransactionsContext } from "../../contexts/transactionsContext"
import { TotalMoneyStyle } from "./style"

const TotalMoney = () => {

    const {totalTransaction} = useContext(TransactionsContext)

    return (
        <TotalMoneyStyle>
            <div>
                <h2 className="Title3">Valor total:</h2>
                <p className="Title3">{totalTransaction.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
            </div>
            <h3 className="Body">O valor se refere ao saldo</h3>
        </TotalMoneyStyle>
    )
}

export default TotalMoney