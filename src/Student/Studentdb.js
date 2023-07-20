import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Studentdb() {
    const [userlist, setuserlist] = useState([])
    const [isloading, setloading] = useState(true)
    useEffect(() => {
        getuser();

    }, []);
    let getuser = async () => {
        try {
            const users = await axios.get("https://6471b8636a9370d5a41a99ed.mockapi.io/users")
            setuserlist(users.data)
            console.log(users.data)
            setloading(false)
        } catch (error) {
            console.log(error)
        }

    }
    let handledelete = async (id) => {
        try {
            const confirm = window.confirm("Are you Sure")
            if (confirm) {
                await axios.delete(`https://6471b8636a9370d5a41a99ed.mockapi.io/teacher/${id}`)
                getuser()
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            < div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Student List</h1>
            </div>
            <div className="card shadow mb-4">

                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%"  >
                            <thead>
                                <tr>
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th>Email</th>
                                    <th>City</th>
                                    <th>Mentor Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {isloading ? (
                                    <h1>Loading</h1>
                                ) :
                                    userlist.map((user, index) => {
                                        return <tr key={index}>
                                            <td>{user.firstname}</td>
                                            <td>{user.lastname}</td>
                                            <td>{user.email}</td>
                                            <td>{user.city}</td>
                                            <td>{user.mentorname}</td>
                                            <th>
                                                <Link to={`/portal/viewstudent/${user.id}`} className='btn btn-info btn-sm mr-1'>View</Link>
                                                <Link to={`/portal/editteacher/${user.id}`} class="btn btn-warning btn-sm mr-2">Edit</Link>
                                                <button onClick={() => {
                                                    handledelete(user.id)
                                                }} class="btn btn-danger btn-sm mr-2">Delete</button>
                                            </th>
                                            
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Studentdb