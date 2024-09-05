import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/UserAuth";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";

export const SignUp = () => {
  const { user } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState(false);

  const route = useNavigate();

  const [isLogin, setLogin] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const password = v4();
      const Email = email + "@gamil.com";
      await createUserWithEmailAndPassword(auth, Email, password);
      setLogin(true);
      route("/");
    } catch (error) {
      setError(true);
    }
  };
  if (user) {
    return <Navigate to="/" replace={true} />;
  } else {
    return (
      <div>
        {isLogin && (
          <div className="toast">
            <div className="alert alert-success">
              <span>User loged In</span>
            </div>
          </div>
        )}
        <div className="hero bg-base-200 w-full min-h-screen">
          <div className="hero-content w-full flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl text-blue-700 font-bold">
                Image Gallery!
              </h1>
              <p className="py-6">sign in</p>
            </div>
            <div className="card bg-base-100  w-[90%] md:w-[60%] shadow-2xl">
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Username"
                    className="input input-bordered"
                    required
                  />

                  {error && (
                    <div className="text-red-600">
                      user with that name already exist
                    </div>
                  )}
                </div>
                <div className="form-control">
                  {/* <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  /> */}
                </div>
                <div className="form-control flex w-full items-center justify-center mt-6">
                  <button className="btn w-56 min-w-48 bg-purple-800">
                    Go in
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
