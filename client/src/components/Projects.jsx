import {useQuery } from "@apollo/client";
import ProjectRow from './ProjectRow'
import { GET_PROJECTS } from "../../Queries/projectQueries";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  
  if (loading) return <p>Loading</p>;
  if (error) return <p> Something went wrong</p>;

  return (
    <>
      {
        data.projects.length > 0 ?(
            <div style={{margin:"1%",display:"flex",flexDirection:"row",justifyContent:"space-evenly",width:"98%",height:"99%"}}>
                {
                    data.projects.map((project)=>(
                        <ProjectRow key={project.id} project={project}/>
                    ))
                }
            </div>
        ):
        (
            <p>No Projects</p>
        )
      }
    </>
  )
};

export default Projects;
