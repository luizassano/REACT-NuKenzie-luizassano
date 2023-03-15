import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface ITransactionsContextProps {
  children: React.ReactNode;
}
export interface ITransactionsContext {
  transactionDescription: string;
  setTransactionDescription: React.Dispatch<React.SetStateAction<string>>;
  transactionValue: string;
  setTransactionValue: React.Dispatch<React.SetStateAction<string>>;
  transactionType: string;
  setTransactionType: React.Dispatch<React.SetStateAction<string>>;
  listTransaction: ITransaction[];
  setListTransaction: React.Dispatch<React.SetStateAction<ITransaction[]>>;
  addTransaction: () => void;
  totalTransaction: number;
  setTotalTransaction: React.Dispatch<React.SetStateAction<number>>;
  filteredList: ITransaction[];
  filterList: (typeFilter: string) => void;
  filterOn: boolean;
  setFilterOn: React.Dispatch<React.SetStateAction<boolean>>;
  deleteTransaction: (id: number) => void;
  filterType: string;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
}

export interface ITransaction {
  description: string;
  value: string;
  type: string;
  id: number;
}

export const TransactionsContext = createContext<ITransactionsContext>(
  {} as ITransactionsContext
);

export const TransactionsProvider = ({
  children,
}: ITransactionsContextProps) => {
  const [transactionDescription, setTransactionDescription] =
    useState<string>("");
  const [transactionValue, setTransactionValue] = useState<string>("");
  const [transactionType, setTransactionType] = useState<string>("Entrada");
  const [listTransaction, setListTransaction] = useState<ITransaction[]>([]);
  const [totalTransaction, setTotalTransaction] = useState<number>(0);
  const [filteredList, setFilteredList] = useState<ITransaction[]>([]);
  const [filterOn, setFilterOn] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<string>("");

  const addTransaction = () => {
    const newTransaction = {
      description: transactionDescription,
      value: transactionValue,
      type: transactionType,
      id: new Date().getTime(),
    };

    toast.success("Transação adicionada!");
    return (
      setListTransaction([...listTransaction, newTransaction]),
      setTransactionDescription(""),
      setTransactionValue("")
    );
  };

  const filterList = (typeFilter: string) => {
    const resultFilter = listTransaction.filter((el) => el.type === typeFilter);

    return setFilteredList(resultFilter), setFilterType(typeFilter);
  };

  const deleteTransaction = (id: number) => {
    if (filterOn) {
      const deleteFilterListItem = filteredList.filter((el) => el.id !== id);
      setFilteredList(deleteFilterListItem);
    }

    const deleteListItem = listTransaction.filter((el) => el.id !== id);
    toast.success("Transação removida!");
    return setListTransaction(deleteListItem);
  };

  useEffect(() => {
    const expenseFilter = listTransaction
      .filter((element) => element.type === "Despesa")
      .reduce((previous, later) => {
        return parseFloat(later.value) + previous;
      }, 0);

    const EntriesFilter = listTransaction
      .filter((element) => element.type === "Entrada")
      .reduce((previous, later) => {
        return parseFloat(later.value) + previous;
      }, 0);

    const totalBalance = EntriesFilter - expenseFilter;

    return setTotalTransaction(totalBalance);
  }, [listTransaction]);

  return (
    <TransactionsContext.Provider
      value={{
        transactionDescription,
        setTransactionDescription,
        transactionValue,
        setTransactionValue,
        transactionType,
        setTransactionType,
        listTransaction,
        setListTransaction,
        addTransaction,
        totalTransaction,
        setTotalTransaction,
        filteredList,
        filterList,
        filterOn,
        setFilterOn,
        filterType,
        setFilterType,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
