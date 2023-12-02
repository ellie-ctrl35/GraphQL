
const ClientRow = ({client}) => {
  return (
    <tr>
       <td>{client.name}</td>
       <td>{client.email}</td>
       <td>{client.phone}</td>
       <td>
         <button>
           Delete
         </button>
       </td>  
    </tr>
  )
}

export default ClientRow