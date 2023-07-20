import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="container">

            {/* <!-- Outer Row --> */}
            <div className="row justify-content-center">

                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}
                            <div className="row">

                                <img src='https://th.bing.com/th/id/OIP.CBi9xY8sk8hxA-LmUBymBwHaE8?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' style={{ width: 450 }} alt="" />


                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome!</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"

                                                    placeholder="Enter Email Address..." />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password" />
                                            </div>

                                            <Link to="/portal/student" className="btn btn-primary btn-user btn-block">
                                                Login
                                            </Link>
                                            <hr />
                                            <a href="index.html" className="btn btn-google btn-user btn-block">
                                                <i className="fab fa-google fa-fw"></i> Login with Google
                                            </a>

                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <div className="medium" >Forgot Password?</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="medium mt-2">Create an Account!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Login