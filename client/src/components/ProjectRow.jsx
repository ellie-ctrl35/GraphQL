import { useMutation } from "@apollo/client"
import { DELETE_PROJECT } from "../../Mutations/projectMutation"
import { GET_PROJECTS } from "../../Queries/projectQueries";


import { Link } from "react-router-dom";

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
    <div style={{display:"flex",flexFlow:'row',justifyContent:"space-evenly",width:"15%",height:"40%",background:"purple"}}>
        <div>
            <h1 style={{fontSize:"0.8rem"}}>{project.name}</h1>
            <h1 style={{fontSize:"0.5rem"}}>{project.status}</h1>
            <button onClick={deleteProject}>DELETE</button>
            <Link to={`/projects/${project.id}`}>VIEW</Link>
        </div>
    </div>
  )
}

export default ProjectRow