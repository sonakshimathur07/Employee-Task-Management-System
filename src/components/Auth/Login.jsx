import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  // console.log(props)
  //two way binding
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    //   console.log("email is", email);
    //   console.log("password is", password);
    handleLogin(email, password);
    // Clear inputs after submit
    setemail("");
    setpassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={
              (e) => setemail(e.target.value)
              // console.log(e.target.value)
            }
            required
            className="border-2 outline-none placeholder:text-gray-400 bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full"
            type="email"
            placeholder="Enter your Email"
          />

          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
            className="border-2 outline-none mt-4 placeholder:text-gray-400 bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full"
            type="password"
            placeholder="Enter Password"
          />
          <button className="text-white mt-5 border-2 bg-emerald-600  border-none outline-none text-xl py-3 px-28 rounded-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
