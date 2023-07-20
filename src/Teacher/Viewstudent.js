import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Viewstudent() {
    const [isloading, setloading] = useState(true)
    const [user, setuser] = useState([])
    const params = useParams();
    useEffect(() => {
        getuser();
    }, )
    let getuser = async () => {
        try {
            const datas = await axios.get(`https://6471b8636a9370d5a41a99ed.mockapi.io/users/${params.id}`)
            setuser(datas.data)
            console.log(datas.data)
            setloading(false)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            {isloading ? (
                <div class="col d-flex justify-content-center">
                    <h1>Loading</h1>
                </div>

            )
                :
                <div class="col d-flex justify-content-center">
                    <div class="card text-white bg-primary mb-3" style={{ width: "30rem" }}>
                        <div class="card-body">
                            <h4 class="card-title" style={{ textAlign: "center", color: "black" }} >User Profile</h4>
                            <h5 class="card-text" >First Name: {user.firstname}</h5>
                            <h5 class="card-text" >Last Name: {user.lastname}</h5>
                            <h5 class="card-text" >Email: {user.email}</h5>
                            <h5 class="card-text">City: {user.city}</h5>
                            <h5 class="card-text" >Mentor Name: {user.mentorname}</h5>
                            <Link to={`/portal/editteacher/${user.id}`} className="btn btn-danger mr-2 mt-2">Edit</Link>
                            <Link to={`/portal/student`} className='btn btn-danger mr-2 mt-2'>Back</Link>

                        </div>
                    </div>
                </div >
            }
        </>
    )
}

export default Viewstudent