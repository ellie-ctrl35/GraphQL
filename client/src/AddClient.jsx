import { useState } from "react";
import { ADD_CLIENT} from "../Mutations/clientMutation";
import { GET_CLIENTS } from "../Queries/clientQueries";
import { useMutation } from "@apollo/client";

const AddClient = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');

    const [addClient] = useMutation(ADD_CLIENT,{
        variables: { name, email, phone },
        update(cache, { data: { addClient } }) {
            const {clients} = cache.readQuery({query:GET_CLIENTS});
            cache.writeQuery({
                query:GET_CLIENTS,
                data:{ clients: clients.concat([addClient]) },
            }); 
        }
    }); 

    const handleSubmit = (e) =>{
      e.preventDefault();
      if(name===''|| email===''|| phone===''){
        return alert('Please fill in all fields')
      }
      addClient(name,email,phone);
      setName('');
      setEmail('');
      setPhone('');
    };
  return (
    <div>
      <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",gap:"1.4rem"}}>
        <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value )}/>
        <input type="text" placeholder="Enter email"  value={email} onChange={(e)=>setEmail(e.target.value )}/>
        <input type="text" placeholder="Enter phone"  value={phone} onChange={(e)=>setPhone(e.target.value )}/>
        <button type="submit">ADD CLIENT</button>
      </form>
    </div>
  );
};

export default AddClient;
