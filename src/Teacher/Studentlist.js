import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
function Studentlist() {
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
            const confirm = window.confirm("Are u sure?")
            if (confirm) {
                await axios.delete(`https://6471b8636a9370d5a41a99ed.mockapi.io/users/${id}`)
                getuser()
            }

        } catch (error) {
            console.log(error)
            alert("Something went wronmg")
        }
    }
    return (
        <>
            < div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Student List</h1>
                <Link to="/portal/createstudent" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Create Student</Link>
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
                                                <Link to={`/portal/editstudent/${user.id}`} className='btn btn-primary btn-sm mr-1'>Edit</Link>
                                                <button onClick={() => {
                                                    handledelete(user.id)
                                                }} className='btn btn-danger btn-sm mr-1'>Delete</button>
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

export default Studentlist