import { Link, useParams } from 'react-router-dom'
import{useQuery} from '@apollo/client'
import { GET_PROJECT } from '../../Queries/projectQueries'
import ClientInfo from '../components/ClientInfo'

const Project = () => {
    const {id} = useParams();
    const {loading,error,data} = useQuery(GET_PROJECT, {variables:{id}});
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>

  return (
    <div style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
        {
          !loading && !error && (
            <div style={{height:"50vh",marginTop:"4%",background:"dodgerblue",width:"60vw",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
              <h1 style={{fontSize:"1rem"}}>{data.project.name}</h1>
                <h1 style={{fontSize:"1rem"}}>{data.project.description}</h1>
              <h1 style={{fontSize:"1rem"}}>{data.project.status}</h1>
              <ClientInfo client={data.project.client}/>
              <Link to={`/projects/${data.project.id}/edit`}>EDIT</Link>
              <Link to={`/projects/${data.project.id}/addtask`}>DELETE</Link>
              <Link to='/addproject'>ADD PROJECT</Link>
            </div>
          )
        }
    </div>
  )
}

export default Project