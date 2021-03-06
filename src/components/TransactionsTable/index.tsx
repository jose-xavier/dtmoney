import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
    id: number;
    title: string;
    category: string;
    type: string;
    amount: number;
    createdAt: string;
}

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api('/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map( transaction => (
                               <tr key={transaction.id}>
                               <td>{transaction.title}</td>
                               <td className={transaction.type}>
                                   {new Intl.NumberFormat('pt-BR', {
                                       style: 'currency',
                                       currency: 'BRL'
                                   }).format(transaction.amount)}
                               </td>
                               <td>{transaction.category}</td>
                               <td>{ new Intl.DateTimeFormat('pt-Br').format(
                                   new Date(transaction.createdAt)
                                )}
                                </td>
                           </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}