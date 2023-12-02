import {useQuery } from "@apollo/client";
import ProjectRow from './ProjectRow'
import { GET_PROJECTS } from "../../Queries/projectQueries";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  
  if (loading) return <p>Loading</p>;
  if (error) return <p> Something went wrong</p>;

  return (
    <div>
      {!loading && !error && (
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {data.projects.map(project =>(
                    <ProjectRow key={project.id} project={project}/>
                ))}
            </tbody>
        </table>
      )}
    </div>
  );
};

export default Projects;
