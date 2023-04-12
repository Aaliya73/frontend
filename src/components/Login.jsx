import React, { useState } from 'react';
import axios from 'axios';
// import { setUserSession } from './Utils/Common';
import { Link, useNavigate } from "react-router-dom";
function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();
  
    function handleSubmit(data) {
    //   e.preventDefault();
  
     
      var requestBody = {
       
        email: data.email,
        password: data.password,
        
      };
     axios
      .post(
        `http://localhost:5000/register`,
        requestBody
      )
      .then((response) => {
        if (response.status === 200) {
         history("/dashboard", { replace: true });
        console.log(email, password);
        }
      })
    }
  return (

    <div >



      <div
      className={
        " bg-gradient-to-tl from-green-400 to-indigo-900  h-screen flex lg:flex-row brightness-100 lg:justify-center"
      }
    >
      <div
        className={"h-full flex justify-center items-center w-full lg:p-0 p-2 "}
      >
        <form
          className={
            "pt-8 pb-5 h-auto bg-white rounded-2xl lg:w-3/12  w-full flex flex-col items-center space-y-5"
          }
          onSubmit={handleSubmit}
        >
          <div className="space-y-1">
            {" "}
            <p className={"text-center text-2xl font-bold mb-3"}>Login</p>
            <p className="text-sm font-normal text-gray-600 mb-4">
              {" "}
              Hello Again ! Welcome Back
            </p>
          </div>
          <div className={"w-9/12 flex flex-col justify-center"}>
            <p className={"font-semibold"}>Email</p>
            <input
              id={"email"}
              onChange={(e) => setEmail(e.target.value)}
              className={"w-full bg-gray-200 h-8 rounded-xl px-3"}
              placeholder={"abc@mail.com"}
            //   {...register("email", emailValidations)}
            />
           
          </div>
          <div className={"w-9/12 flex flex-col justify-center"}>
            <p className={"font-semibold"}>Password</p>
            <div className={"flex bg-gray-200 items-center px-3 rounded-xl"}>
              <input
                id={"password"}
                onChange={(e) => setPassword(e.target.value)}
                // type={isRevealPassword ? "text" : "password"}
                // {...register("password", passwordValidations)}
                className={"w-full bg-gray-200 h-8 py-2"}
                placeholder={"Abc@1234"}
              />
             
            </div>
           
           
          </div>
          {/* {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /> */}
          <button
            className={
              "w-9/12 h-10 bg-[#00838f] font-semibold text-white text-lg rounded-3xl py-[0.15rem]"
            }
            // value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading}
            type={"submit"}
          >
            <Link to="/dashboard">  Login</Link>
             
          
          </button>
          
         </form>
        
      </div>
    </div>
      
    </div>
  );
}




export default Login;