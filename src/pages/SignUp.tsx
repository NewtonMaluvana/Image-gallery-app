import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/UserAuth";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import toast, { Toaster } from "react-hot-toast";

export const SignUp = () => {
  const { user } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const route = useNavigate();
  console.log(email);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("User Logged in");
      route("/");
    } catch (error) {}
  };
  if (user) {
    return <Navigate to="/" replace={true} />;
  } else {
    return (
      <div>
        <div className="hero bg-base-200 w-full min-h-screen">
          <div className="hero-content w-full flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl text-blue-700 font-bold">
                Image Gallery!
              </h1>
              <p className="py-6">sign up</p>
            </div>
            <div className="card bg-base-100 w-[60%]  shadow-2xl">
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control flex w-full items-center justify-center mt-6">
                  <button className="btn w-56 min-w-48 bg-purple-800">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
