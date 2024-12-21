import React, { useState } from "react";
import { useFirebaseContext } from "./Context";

const MyComponent = () => {
  const { Signup, SignIn, islogins } = useFirebaseContext();
  console.log(islogins);

  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const datasubmit = (event) => {
    event.preventDefault();
    Signup(signupEmail, signupPassword);
    setSignupEmail("");
    setSignupPassword("");
  };

  const datasubmitsignin = (event) => {
    event.preventDefault();
    SignIn(signinEmail, signinPassword);
    setSigninEmail("");
    setSigninPassword("");
  };

  const SignupDesign = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        <form className="space-y-4" onSubmit={datasubmit}>
          <div>
            <label htmlFor="signup-email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="signup-email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSignupEmail(e.target.value)}
              value={signupEmail}
            />
          </div>
          <div>
            <label htmlFor="signup-password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="signup-password"
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSignupPassword(e.target.value)}
              value={signupPassword}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );

  const SigninPage = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Sign In
        </h2>
        <form className="space-y-4" onSubmit={datasubmitsignin}>
          <div>
            <label htmlFor="signin-email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="signin-email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSigninEmail(e.target.value)}
              value={signinEmail}
            />
          </div>
          <div>
            <label htmlFor="signin-password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="signin-password"
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSigninPassword(e.target.value)}
              value={signinPassword}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );

  if (islogins === undefined) return <div>Loading...</div>;

  return islogins ? <SigninPage /> : <SignupDesign />;
};

export default MyComponent;
