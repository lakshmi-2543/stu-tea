import React from 'react'
import { Link } from 'react-router-dom'

function Topbar() {
    return (
        <>
            {/* <nav className="navbar navbar-expand navbar-info bg-white topbar mb-4 static-top shadow"> */}
            <nav className="navbar-nav bg-gradient-info topbar topbar-dark accordion mb-4 static-top shadow">

                {/* <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">
                    {/* <!-- Nav Item - User Information --> */}
                    <li className="nav-item dropdown no-arrow">
                        <Link className="nav-link dropdown-toggle" to="/" id="userDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {/* <span class="font-weight-bold" style={{ color: "black" }}>Hello</span> */}
                            <span className="mr-2 d-none d-lg-inline text-black - 600 medium" style={{ color: "black" }}> Hello </span>
                            {/* <img className="img-profile rounded-circle"
                                src="https://th.bing.com/th/id/OIP.1asifY692Tb7m4S1HQgVkwHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7" /> */}
                               <img className="img-profile rounded-circle" src="https://th.bing.com/th/id/OIP.1asifY692Tb7m4S1HQgVkwHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />


                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Topbar