// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import useAuth from '../Hooks/useAuth';
// // import { Spinner } from 'react-bootstrap';


// const Register = () => {
//     const [loginData, setLoginData] = useState({});
//     const navigate = useNavigate();
//     const { registerUser, isLoading, authError } = useAuth();

//     const handleOnChange = e => {
//         const field = e.target.name;
//         const value = e.target.value;
//         const newLoginData = { ...loginData };
//         newLoginData[field] = value;
//         setLoginData(newLoginData);
//     }
//     const handleSignIn = e => {
//         if (loginData.password !== loginData.password2) {
//             alert('Your Password did not match')
//             return
//         }
//         registerUser(loginData.email, loginData.password, loginData.name, navigate)
//         e.preventDefault();
//     }

//     // if (isLoading) {
//     //     return <Spinner animation="border" variant="info" />
//     // }

//     return (
//         <div className="loginBackground py-5">
//             <form onSubmit={handleSignIn}>
//                 <h1 className="text-info py-5">Register Your Account</h1>
//                 <input onBlur={handleOnChange} className="" type="text" name="name" placeholder="Your Name" />
//                 <br /><br />
//                 <input className="" onChange={handleOnChange} type="email" name="email" placeholder="Enter Your Email" required />
//                 <br /><br />
//                 <input className="" onBlur={handleOnChange} type="password" name="password" placeholder="Enter Your Password" id="" required />
//                 <br /><br />
//                 <input className="" onBlur={handleOnChange} type="password" name="password2" placeholder="ReEnter Your Password" id="" required />
//                 <br /><br />
//                 <input className="" type="submit" value="Register" />
//             </form>
//             <h5 className="">{authError}</h5>
//             <br />
//             <p className="">Already have an account ? <Link to="/login">Login</Link></p>
//         </div>
//     );
// };

// export default Register;