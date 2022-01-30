import './App.css';
import UserTable from './UserTable';
import { useState } from 'react';
import Form from './Form';


const App =()=> {

  const initalState = [{id:0, name:"", email:""}]
  const userdata = [{ id:1, name:"Nix", email:"email@email" }, { id:2, name:"Baburam", email:"email@email" }, { id:3, name:"Kshitiz", email:"email@email" }];

  const [datas, setData] = useState(initalState);

  const addData =(data)=>{
    data.id = datas.length + 1;
    setData([...datas,data])
  }

  const deleteData = (id) => {
    setData(datas.filter((data)=> data.id !== id) )
  }

  return(
    <>  
    <div className='container'>
      <h1> EMAIL STORING </h1>
      <div className='row mt-2'>
        <div className='col col-lg-6 col-sm-12 mt-2 box '>
        <h2> Add Entry</h2>
        <Form addData={addData}/>
        </div>
        <div className=' col col-lg-6 col-sm-12 mt-2 box'>
          <h2> View Entry </h2>
          <UserTable datas={datas} deleteData={deleteData}/>
        </div>
      </div>
    </div>
    </>
  );
}


export default App;