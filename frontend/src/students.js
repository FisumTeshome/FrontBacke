import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

function Students() {  // Renamed 'student' to 'Student'
    const [student,setStudent]=useState([])
 
    useEffect(() => {
        axios.get('http://localhost:8081/students')
            .then(res => setStudent(res.data))
            .catch(err => console.log(err));
    }, []);
    const handleDelet =async (id) =>{
       try{ await axios.delete('http://localhost:8081/students/'+id)
        window.location.reload()}
        catch (err){
            console.log(err);
        }
    }

    return (
        <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Class</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        student.map((data, i)=>(
                            <tr key={i}>
                                <td>{data.Name}</td>
                                <td>{data.email}</td>
                                <td>{data.class}</td>
                                <td>
                                    <Link to={`update/${data.ID}`} className='btn btn-primary'>update</Link>
                                    <button className='btn btn-danger ms-2' onClick={e => handleDelet(data.ID)}>Remove</button>

                                </td>
                            </tr>
                        ))
                      }  
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Students;  // Renamed here as well