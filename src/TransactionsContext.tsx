import { createContext, useEffect, useState, ReactNode} from 'react'
import { api } from './Services/api';



interface Transaction {
    id: string;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
  }

  interface TrasactionsProviderProps {
    children: ReactNode;
  }

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({children}: TrasactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() => {
      api
        .get('transactions')
        .then((response) => setTransactions(response.data.transactions));
    }, []);

    return (
        <TransactionsContext.Provider value={transactions}>
              {children}
        </TransactionsContext.Provider>
    )
}
