import reactLogo from '../assets/react.svg'

const Header = () => {
  return (
    <div style={{background:"dodgerblue",height:"15vh",width:"100vw",margin:"0"}}>
       <div style={{display:"flex",flexDirection:'row',height:"80%",width:"10%",justifyContent:'center',alignItems:'center'}}>
        <img style={{height:"80%",width:"10%"}} src={reactLogo} alt="" />
         <h1 style={{fontSize:'0.5rem'}}>Graphql CRUD</h1>
       </div>
    </div>
  )
}

export default Header