import React from 'react';

const UserTable = ({datas, deleteData}) => {

    let len = datas.length;

   
    

    return (
        <>
        <table class="table table-hover table-primary me-10px">
            <thead>
                <tr>
                    <td scope="col"> Name</td>
                    <td scope="col"> Email</td>
                    <td scope="col"> Controls</td>
                </tr>
            </thead>
            <tbody>
                {len > 0 ? (datas.map((data)=>(<tr key={data.id}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>
                        <button type="button" class="btn btn-lg btn-outline-primary btn-two">Edit</button>
                        <button type="button" class="btn btn-lg btn-outline-primary" onClick={()=> deleteData(data.id)}>Delete</button>
                        </td>
                </tr>))) : (<tr> <td colSpan={3}>No users</td></tr>)}
            </tbody>
        </table>
        
        </>
    );
}

export default UserTable;