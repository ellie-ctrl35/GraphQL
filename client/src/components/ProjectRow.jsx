import { useMutation } from "@apollo/client"
import { DELETE_PROJECT } from "../../Mutations/projectMutation"
import { GET_PROJECTS } from "../../Queries/projectQueries";


const ProjectRow = ({project}) => {
    const [deleteProject] = useMutation(DELETE_PROJECT,{
        variables:{ id : project.id},
        //refetchQueries:[{query:GET_CLIENTS}],
        update(cache, {data:{deleteProject}}){
          const {projects} = cache.readQuery({query:GET_PROJECTS});
          cache.writeQuery({
            query: GET_PROJECTS,
            data: {projects:projects.filter(project => project.id !== deleteProject.id)}
          });
        }
    } );
  return (
    <tr> 
       <td>{client.name}</td>
       <td>{client.description}</td>
       <td>{client.status}</td>
       <td>
         <button onClick={deleteProject}>
           Delete
         </button>
       </td>  
    </tr>
  )
}

export default ProjectRow