import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { AuthContext } from './../../Provider/AuthProvider/AuthProvider';
import { useContext } from "react";
  
const Register = () => {
    const{createUser} =useContext(AuthContext)
    const handelRegister = e=>{
        e.preventDefault()
        console.log(e.currentTarget);
        const form =new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password =form.get('password')
        console.log(name ,photo,email,password);

            //create user
            createUser(email,password)
            .then(result=>{
                console.log(result.user);
            })
            .catch(error=>{
                console.log('error!please login',error);
            })

    }
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <h3 className="text-3xl text-center">Register Your Account Now...</h3>,
                <form onSubmit={handelRegister} className="card-body lg:w-1/2  md:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo url" className="input input-bordered" required />
                    </div>
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
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-3xl text-center p-4">Already have an account <Link to='/login' className="text-blue-800 font-bold">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;