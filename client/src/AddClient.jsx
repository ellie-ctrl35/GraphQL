

const AddClient = () => {
  return (
    <div>
      <form style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",gap:"1.4rem"}}>
        <input type="text" placeholder="Enter name" />
        <input type="text" placeholder="Enter email" />
        <input type="text" placeholder="Enter phone"/>
        <button>ADD CLIENT</button>
      </form>
    </div>
  );
};

export default AddClient;
