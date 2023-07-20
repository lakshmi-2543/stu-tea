import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <ul className="navbar-nav bg-gradient-info sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <div className="sidebar-brand d-flex align-items-center justify-content-center" href="">
                    <div className="sidebar-brand-icon rotate-n-15">

                    </div>

                    <div className="sidebar-brand-text mx-3 mt-5">Student - Teacher Management </div>

                </div>
                <br />
                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0 " />

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item active">
                    <Link className="nav-link mt-3" to="/portal/student">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Student</span></Link>
                </li>

                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/teacherlist">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Teacher</span></Link>
                </li>














            </ul>
        </>
    )
}

export default Sidebar