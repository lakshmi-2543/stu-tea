import { useFormik } from 'formik'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Createteacher() {

    const [isloading, setloading] = useState(false)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            mail: "",
            subject: ""
        },
        validate: (values) => {
            let errors = {}
            if (!values.name) {
                errors.name = "Name is required"
            }
            if (!values.mail) {
                errors.mail = "Email is required"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)) {
                errors.email = "Enter a valid email"
            }

            if (!values.subject) {
                errors.subject = "Subject is required"
            }

            return errors;
        },
        onSubmit: async (values) => {
            console.log(values)
            try {
                console.log(values)
                setloading(true)
                const user = await axios.post("https://6471b8636a9370d5a41a99ed.mockapi.io/teacher", values)
                console.log(user)
                navigate(`/portal/teacherlist`)
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
                        <div className='col-lg-4'>
                            <label >Name</label>
                            <input type='text'
                                name='name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                className={`form-control ${formik.errors.name ? "is-invalid" : "is-valid"}`} />
                            <span style={{ color: "red" }}>{formik.errors.name}</span>
                        </div>
                        <div className='col-lg-4'>
                            <label >Email</label>
                            <input type='email'
                                name='mail'
                                value={formik.values.mail}
                                onChange={formik.handleChange}
                                className={`form-control ${formik.errors.mail ? "is-invalid" : "is-valid"}`} />
                            <span style={{ color: "red" }}>{formik.errors.mail}</span>
                        </div>

                        <div className='col-lg-4'>
                            <label >Subject</label>
                            <input type='text'
                                name='subject'
                                value={formik.values.subject}
                                onChange={formik.handleChange}
                                className={`form-control ${formik.errors.subject ? "is-invalid" : "is-valid"}`} />
                            <span style={{ color: "red" }}>{formik.errors.subject}</span>
                        </div>
                        <div className='col-lg-3 mt-4 '>
                            <input type={"submit"} disabled={isloading} value={isloading ? "Loading.." : "Create"}
                                className='btn btn-primary' />
                            <Link to="/portal/teacherlist" className="btn btn-primary ml-2">Back</Link>
                        </div>


                    </div>
                </form >
            </div>
        </>
    )
}

export default Createteacher