import { useEffect } from "react";
import { api } from "../../Services/api";
import { Container } from "./styles";

export function TransactionTable() {

    useEffect(() => {
      api.get('transaction')
      .then(response => console.log(response.data))
     
    },[]);

    

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    
                    <tr>
                        <td>Desenvolvimento de website </td>
                        <td className="deposit">12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                            
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw"> - R$1.100</td>
                        <td>Casa</td>
                        <td>19/02/2021</td>
                    </tr>
                            
                </tbody>
            </table>
        </Container>
    );
}
                       
                  
                            

                       

                       
