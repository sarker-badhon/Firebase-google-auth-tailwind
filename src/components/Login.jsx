import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';


const Login = () => {
    const { SignIn, signInWithGoogle } = useContext(AuthContext)


    const handlerSubmitBtn = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value
        //  console.log(email,password);
        form.reset('')



        SignIn(email, password)
            .then((result) => {
                const loggedUser = result.user
                console.log(loggedUser);
            })
            .catch((error) => {
                console.log(error);
            })

        }
            const  =()=>{
                signInWithGoogle()
                .then((result) => {
                    const user = result.user;
                   
                  }).catch((error) => {
                    // Handle Errors here.
                    const errorMessage = error.message;
                 
                  });
            }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Login</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handlerSubmitBtn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="form-control w-20 ms-10">
                            <button onClick={handlerGoogleSignIn} className="btn btn-primary ">Google</button>
                        </div>
                        <div className='ms-5 mb-4 mr-10'>
                            <Link to="/register" className="label-text-alt link link-hover">Please register?</Link>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login; <h1>This is login page</h1>