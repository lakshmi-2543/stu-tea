import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

function Editstudent() {
    const [isupdating, setupdating] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    useEffect(() => {
        getuser();

    }, );
    let getuser = async () => {
        try {
            const user = await axios.get(`https://6471b8636a9370d5a41a99ed.mockapi.io/users/${params.id}`)
            formik.setValues(user.data)
        } catch (error) {
            console.log(error)
        }
    }
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            city: "",
            mentorname: ""

        },
        validate: (values) => {
            let errors = {}
            if (!values.firstname) {
                errors.firstname = "First Name is required"
            }
            if (!values.lastname) {
                errors.lastname = "Last Name is required"
            }
            if (!values.email) {
                errors.email = "Email is required"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Enter a valid email"
            }
            if (!values.city) {
                errors.city = "City is required"
            }
            if (!values.mentorname) {
                errors.mentorname = "Mentor Name is required"
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {

                setupdating(true)
                const user = await axios.put(`https://6471b8636a9370d5a41a99ed.mockapi.io/users/${params.id}`, values)
                alert("update done")
                console.log(user)
                navigate(`/portal/studentlist`)
            } catch (error) {
                console.log(error)
            }
            console.log(values)
        }

    })
    return (
        <>
            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label >First Name</label>
                            <input type='text'
                                name='firstname'
                                value={formik.values.firstname}
                                onChange={formik.handleChange}
                                className={`form-control ${formik.errors.firstname ? "is-invalid" : "is-valid"}`} />
                            <span style={{ color: "red" }}>{formik.errors.firstname}</span>
                        </div>
                        <div className='col-lg-6'>
                            <label >Last Name</label>
                            <input type='text'
                                name='lastname'
                                value={formik.values.lastname}
                                onChange={formik.handleChange}
                                className={`form-control ${formik.errors.lastname ? "is-invalid" : "is-valid"}`} />
                            <span style={{ color: "red" }}>{formik.errors.lastname}</span>
                        </div>
                        <div className='col-lg-4'>
                            <label >Email</label>
                            <input type='email'
                                name='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                className={`form-control ${formik.errors.email ? "is-invalid" : "is-valid"}`} />
                            <span style={{ color: "red" }}>{formik.errors.email}</span>
                        </div>
                        <div className='col-lg-4'>
                            <label >City</label>
                            <input type='text'
                                name='city'
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                className={`form-control ${formik.errors.city ? "is-invalid" : "is-valid"}`} />
                            <span style={{ color: "red" }}>{formik.errors.city}</span>
                        </div>
                        <div className='col-lg-4'>
                            <label >Mentor Name</label>
                            <input type='text'
                                name='mentorname'
                                value={formik.values.mentorname}
                                onChange={formik.handleChange}
                                className={`form-control ${formik.errors.mentorname ? "is-invalid" : "is-valid"}`} />
                            <span style={{ color: "red" }}>{formik.errors.mentorname}</span>
                        </div>


                        <div className='col-lg-3 mt-4 '>
                            <input type={"submit"} disabled={isupdating} value={isupdating ? "Updating..." : "Update"}
                                className='btn btn-primary' />
                            <Link to={`/portal/studentlist`} className='btn btn-primary ml-2 '>Back</Link>
                        </div>


                    </div>
                </form >
            </div>
        </>
    )
}

export default Editstudent