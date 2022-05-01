import { Container } from "./styles";

export function TransactionsTable() {
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
                    <tr>
                        <td>Freelance de Website</td>
                        <td className="deposit">R$ 6.000,00</td>
                        <td>Devenvolvimento</td>
                        <td>01/05/2022</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 1.100,00</td>
                        <td>Casa</td>
                        <td>01/05/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}