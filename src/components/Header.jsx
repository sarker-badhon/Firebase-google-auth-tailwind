import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div>
            <div>
                <div className="navbar bg-blue-400">
                    <div className="flex-1">
                        <Link className="btn btn-ghost normal-case font-bold text-white text-2xl">Google Auth</Link>
                    </div>
                    <div className="flex-none gap-2">

                        <div className=" mr-10">
                            <Link className='mr-4 text-white text-xl' to="/">Home</Link>
                            <Link className='mr-4 text-white text-xl' to="/orders">Order</Link>
                            <Link className='mr-4 text-white text-xl' to="/login">Login </Link>
                            <Link className='mr-4 text-white text-xl' to="/register">Register</Link>
                        </div>

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header; <h1>This is Header page</h1>