import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location =useLocation();
    const navigate =useNavigate() 
    const hanlelogin = e => {
        e.preventDefault()
        // const email= e.target.email.value ;
        // const password = e.target.password.value ;
        // console.log(email,password);or 
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        signIn(email,password)
        .then(result=>{
            console.log(result.user);

            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl  text-center mt-10">Please Login</h2>
                <form onSubmit={hanlelogin} className="card-body lg:w-1/2  md:w-3/4 mx-auto">
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-3xl text-center p-4">Dont have an account <Link to='/register' className="text-blue-800 font-bold">Register</Link></p>
            </div>

        </div>
    );
};

export default Login;