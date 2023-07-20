import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom'



function Viewteacher() {
    const [isloading, setloading] = useState(true)
    const [userlist, setuserlist] = useState([])
    const params = useParams();

    useEffect(() => {
        getuser();
    }, )

    let getuser = async () => {
        const user = await axios.get(`https://6471b8636a9370d5a41a99ed.mockapi.io/teacher/${params.id}`)
        setuserlist(user.data)
        setloading(false)
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
                        {/* <div class="card mb-3" style={{ width: "25rem" }}> */}
                        <div class="card-body">
                            <h4 class="card-title" style={{ textAlign: "center", color: "black" }} >User Profile</h4>
                            <h5 class="card-text" >Name: {userlist.name}</h5>
                            <h5 class="card-text" >Email: {userlist.mail}</h5>
                            <h5 class="card-text" >Subject: {userlist.subject}</h5>
                            <Link to={`/portal/editteacher/${userlist.id}`} className="btn btn-danger mr-2 mt-2">Edit</Link>
                            <Link to="/portal/teacherlist" className="btn btn-danger mt-2">Back</Link>
                        </div>
                    </div>
                </div >
            }



        </>
    )
}

export default Viewteacher