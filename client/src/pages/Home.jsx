import React from 'react'
import Clients from '../components/clients'
import AddClient from '../AddClient'
import Projects from '../components/Projects'
const Home = () => {
  return (
    <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0",
            alignItems: "center",
            margin: "0",
            gap:"3rem",
            height:"100vh"
          }}
        >
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",gap:"6rem",width:"99%",height:"50vh",marginTop:"14vh"}}>
          <Clients/>
          <AddClient/>
          </div>
          <div style={{width:'90%',height:"60vh"}}>
           <Projects/>
          </div>
        </div>
    </div>
  )
}

export default Home