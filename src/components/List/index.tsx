import { useContext } from "react"
import { ITransaction, TransactionsContext } from "../../contexts/transactionsContext"
import Card from "../Card"
import noCard from "../../assets/NoCard.png"
import { ListStyle } from "./style"

const List = () => {

    const {listTransaction, 
        filteredList, 
        filterList, 
        filterOn, 
        setFilterOn,
        setFilterType,
        filterType} 
        = useContext(TransactionsContext)

    return (
        <ListStyle>
            <div className="boxFilter">
                <h2 className="Title3">Resumo financeiro</h2>
                <div>
                    <button className={filterType === "" ? "Body FilterButton" : "Body filterButtonNo"} onClick={() => {return (setFilterOn(false), filterList(""), setFilterType(""))}}>Todos</button>
                    <button className={filterType === "Entrada" ? "Body FilterButton" : "Body filterButtonNo"} onClick={() => {return (setFilterOn(true), filterList("Entrada"), setFilterType("Entrada"))}}>Entradas</button>
                    <button className={filterType === "Despesa" ? "Body FilterButton" : "Body filterButtonNo"} onClick={() => {return (setFilterOn(true), filterList("Despesa"), setFilterType("Despesa"))}}>Despesas</button>
                </div>
            </div>
            <ul>
                {(!filterOn && listTransaction[0] === undefined) || (filterOn && filteredList[0] === undefined) ?
                <>
                    <h3 className="Title3">Você ainda não possui nenhum lançamento</h3>
                    <li className="boxNoCard"><img src={noCard} alt="card sem valor"/></li>
                    <li className="boxNoCard"><img src={noCard} alt="card sem valor"/></li>
                    <li className="boxNoCard"><img src={noCard} alt="card sem valor"/></li>
                </>
                : 
                !filterOn ? 
                listTransaction.map((el: ITransaction) => <Card infoCard={el} key={el.id}/>)
                :
                filteredList.map((el: ITransaction) => <Card infoCard={el} key={el.id}/>)}
            </ul>
        </ListStyle>
    )
}

export default List