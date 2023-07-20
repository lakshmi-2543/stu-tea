import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Teacherlist() {

    const [userlist, setuserlist] = useState([])
    const [isloading, setloading] = useState(true)
    useEffect(() => {
        getuser();
    }, [])

    let getuser = async () => {
        try {
            const users = await axios.get("https://6471b8636a9370d5a41a99ed.mockapi.io/teacher");
            setuserlist(users.data)
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
                <h1 className="h3 mb-0 text-gray-800">Teacher List</h1>
                <div>
                    <Link to="/portal/createteacher" className=" btn btn-primary"> Create Teacher</Link>

                    <span> <Link to="/portal/createstudent" className=" btn btn-primary  "> Create Student</Link></span>
                    <span><Link to="/portal/studentlist" className=" btn btn-primary ml-2 "> Student List</Link></span>
                </div>


            </div>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%">
                            <thead>
                                <tr>
                                    <th >Name</th>
                                    <th >Email</th>
                                    <th>Subject</th>
                                    <th >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isloading ?
                                    (
                                        <h1>Loading</h1>
                                    ) :
                                    userlist.map((users) => {
                                        return <tr>
                                            <td>{users.name}</td>
                                            <td>{users.mail}</td>
                                            <td>{users.subject}</td>
                                            <th>
                                                <Link to={`/portal/viewteacher/${users.id}`} class="btn btn-primary btn-sm mr-2">View</Link>
                                                <Link to={`/portal/editteacher/${users.id}`} class="btn btn-warning btn-sm mr-2">Edit</Link>
                                                <button onClick={() => {
                                                    handledelete(users.id)
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

export default Teacherlist