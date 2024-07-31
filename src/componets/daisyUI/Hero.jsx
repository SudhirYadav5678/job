import React from 'react'
import { Link } from 'react-router-dom'
import LatestJob from './LatestJob'

function Hero() {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello Name</h1>
                        <p className="py-6">
                            Serach Your dream with Us
                            let's Start
                        </p>
                        <div className="form-control">
                            <input type="text" placeholder="Jobs" className="input input-bordered w-24 md:w-auto" />
                        </div>
                        {/* pagnination */}
                        <div className='mt-10'>
                            <div className="join justify-center">
                                <button className="join-item btn m-2">«</button>
                                <button className="join-item btn m-2">Page 22</button>
                                <button className="join-item btn m-2">»</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* laest job card */}
            <div>
                <div className='text-5xl'><h2 className='font-bold'>Latest <span className='text-4xl text-purple-600'>Jobs :-</span></h2></div>
                <div className='flex justify-center'>
                    <LatestJob />
                </div>
            </div>

        </>
    )
}

export default Hero