import {FaEnvelope,FaPhone,FaIdBadge}from 'react-icons/fa'

const ClientInfo = ({client}) => {
  return (
    <div>
        <h1 style={{fontSize:"1rem"}}>{client.name}</h1>
        <h1 style={{fontSize:"1rem"}}>{client.email}</h1>
        <h1 style={{fontSize:"1rem"}}>{client.phone}</h1>
    </div>
  )
}

export default ClientInfo