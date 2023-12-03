import { useState } from "react";
import { ADD_PROJECT} from "../Mutations/projectMutation";
import { GET_PROJECTS } from "../Queries/projectQueries";
import { useMutation ,useQuery} from "@apollo/client";

const AddProject = () => {
    const [name,setName]=useState('');
    const [description ,setdescription ]=useState('');
    const [clientId ,setclientId ]=useState('');
    const [status,setstatus]=useState('NEW');

    const [addProject] = useMutation(ADD_PROJECT,{
        variables: { name, description , status },
        update(cache, { data: { addProject } }) {
            const {projects} = cache.readQuery({query:GET_PROJECTS});
            cache.writeQuery({
                query:GET_PROJECTS,
                data:{ projects: projects.concat([addProject]) },
            }); 
        }
    }); 

    const handleSubmit = (e) =>{
      e.preventDefault();
      if(name===''|| description ===''|| status===''){
        return alert('Please fill in all fields')
      }
      addProject(name,description ,status);
      setName('');
      setdescription('');
      setstatus('');
    };
  return (
    <div>
      <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",gap:"1.4rem"}}>
        <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value )}/>
        <textarea type="text" placeholder="Enter description"  value={description} onChange={(e)=>setdescription(e.target.value )}/>
        <select value={status} onChange={(e)=>setstatus(e.target.value )}>
          <option value="NEW">NEW</option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>
        <button type="submit">ADD CLIENT</button>
      </form>
    </div>
  );
};

export default AddProject;
