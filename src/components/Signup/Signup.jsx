import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Signup = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const handleSignup = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setError('')
        if(password !== confirm){
            setError('Your confirm password did not match')
            return
        }
        else if(password.length<6){
            setError('Password must be 6 character or longer')
            return
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='border border-[#95A0A7] mt-[128px] p-[42px] rounded-lg'>
                <h2 className='text-[#2A414F] text-[35px] text-center mb-[30px]'>Signup</h2>
                <form onSubmit={handleSignup}>
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
                    <div className="mt-5">
                        <label className='text-[#2A414F] text-[17px] block mb-2' htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" className='border border-[#95A0A7] text-[21px] pl-[10px] py-2 w-[415px] rounded-md' id="" required />
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
                <p className='text-[#2A414F] text-[15px]'>Already have an account? <Link to="/login"><span className='text-[#FF9900]'>Login</span></Link></p>
                <p className='mt-2 text-red-500'>{error}</p>
            </div>
        </div>
    );
};

export default Signup;