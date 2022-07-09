import React from 'react';
import contact from '../../assets/images/contact.png'
const Contact = () => {
    return (
        <div id='contact' className="hero bg-black">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='lg:ml-32 h-3/5 lg:w-4/5' src={contact} alt="" />
                </div>
                <div className="lg:mr-32 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body bg-black text-white">
                        <h1 className="text-3xl text-center font-bold">Contact ME!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text lg:text-lg text-white">Enter Your Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered my-3" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text lg:text-lg text-white">Enter Your Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered py-3" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text lg:text-lg text-white">Enter Your Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered my-3" placeholder="Message"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;