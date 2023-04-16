import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='border border-[#95A0A7] mt-[128px] p-[42px] rounded-lg'>
                <h2 className='text-[#2A414F] text-[35px] text-center mb-[30px]'>Login</h2>
                <form>
                    <div className="">
                        <label className='text-[#2A414F] text-[17px] block mb-2' htmlFor="email">Email</label>
                        <input type="email" name="email" className='border border-[#95A0A7] text-[21px] pl-[10px] py-2 w-[415px] rounded-md' id="" required />
                    </div>
                    <div className="mt-5">
                        <label className='text-[#2A414F] text-[17px] block mb-2' htmlFor="password">Password</label>
                        <input type="password" name="password" className='border border-[#95A0A7] text-[21px] pl-[10px] py-2 w-[415px] rounded-md' id="" required />
                        {/* <p onClick={() => setShow(!show)}>
                            <small>
                            {
                                show ? <span>Hide Password</span>: <span>Show Password</span>
                            }
                            </small>
                        </p> */}
                    </div>
                    <input className='text-[#0E161A] text-[21px] rounded-md bg-[#FF9900] bg-opacity-30 w-full py-[12px] mt-11 mb-[9px]' type="submit" value="Login" />
                </form>
                <p className='text-[#2A414F] text-[15px]'>New to Ema-john? <Link to="/signup"><span className='text-[#FF9900]'>Create New Account</span></Link></p>
            </div>
        </div>
    );
};

export default Login;