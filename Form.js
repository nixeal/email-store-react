import React, {useState} from 'react';

const Form = ({addData}) => {

    const [inputs, setInput] = useState({
        name: '', 
        email: '',
    });

    const handleNameChange =(e)=>{
        setInput({
            ...inputs,
            name: e.target.value
            
        })
        console.log(e.target.value);
    }
    const handleEmailChange =(e)=>{
        setInput({
            ...inputs,
            email: e.target.value
        })
        console.log(e.target.value);
    }

    return (
        <>
        
        <label>Name: </label><input className="form-control" value={inputs.name} type="text" placeholder="" name="name"  aria-label="default input example" onChange={handleNameChange}></input>

        <label>Email: </label><input type="text" className="form-control" value={inputs.email}  name="email" placeholder="@.com" onChange={handleEmailChange}></input>
        <button type="button" className="btn btn-lg btn-outline-primary btn-one" onClick={()=>addData(inputs)}>Add</button>

        
        </>
    );
}

export default Form;