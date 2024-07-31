import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className="navbar bg-base-90">
            {/* logo */}
            <div className="flex-1 m-2">
                <a className="btn btn-ghost text-xl"><Link to="/">Job Ha</Link></a>
            </div>
            {/* button on navbar */}
            <div className='m-5'>
                <button className="btn btn-outline m-2"><Link to="/">Home</Link></button>
                <button className="btn btn-outline btn-primary m-2"><Link to="/jobs">Jobs</Link></button>
                <button className="btn btn-outline btn-secondary m-2"><Link to="/resumes">Resumes</Link></button>
                <button className="btn btn-outline btn-accent m-2"><Link to="/about">About</Link></button>
                {/* <button className="btn btn-outline btn-primary m-2"><Link to="/login">Login</Link></button> */}
                <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                    </div>
                </dialog>
                <button className="btn btn-outline btn-primary m-2"><Link to="/signup">SignUp</Link></button>
            </div>
            {/* serach and avatar */}
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar