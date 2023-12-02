import { useMutation } from "@apollo/client"
import { DELETE_CLIENT } from "../../Mutations/clientMutation"
const ClientRow = ({client}) => {
    const [deleteClient] = useMutation(DELETE_CLIENT,{
        variables:{ id : client.id},
    } );
  return (
    <tr>
       <td>{client.name}</td>
       <td>{client.email}</td>
       <td>{client.phone}</td>
       <td>
         <button onClick={deleteClient}>
           Delete
         </button>
       </td>  
    </tr>
  )
}

export default ClientRow