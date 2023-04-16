import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false);
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset();
                navigate(from, {replace:true});
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='border border-[#95A0A7] mt-[128px] p-[42px] rounded-lg'>
                <h2 className='text-[#2A414F] text-[35px] text-center mb-[30px]'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="">
                        <label className='text-[#2A414F] text-[17px] block mb-2' htmlFor="email">Email</label>
                        <input type="email" name="email" className='border border-[#95A0A7] text-[21px] pl-[10px] py-2 w-[415px] rounded-md' id="" required />
                    </div>
                    <div className="mt-5">
                        <label className='text-[#2A414F] text-[17px] block mb-2' htmlFor="password">Password</label>
                        <input type={show? "text": "password"} name="password" className='border border-[#95A0A7] text-[21px] pl-[10px] py-2 w-[415px] rounded-md' id="" required />
                        <p onClick={() => setShow(!show)}>
                            <small>
                            {
                                show ? <span>Hide Password</span>: <span>Show Password</span>
                            }
                            </small>
                        </p>
                    </div>
                    <input className='text-[#0E161A] text-[21px] rounded-md bg-[#FF9900] bg-opacity-30 w-full py-[12px] mt-11 mb-[9px]' type="submit" value="Login" />
                </form>
                <p className='text-[#2A414F] text-[15px]'>New to Ema-john? <Link to="/signup"><span className='text-[#FF9900]'>Create New Account</span></Link></p>
            </div>
        </div>
    );
};

export default Login;