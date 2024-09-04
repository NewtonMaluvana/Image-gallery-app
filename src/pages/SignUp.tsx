export const SignUp = () => {
  return (
    <div>
      <div className="hero bg-base-200 w-full min-h-screen">
        <div className="hero-content w-full flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-blue-700 font-bold">Image Gallery!</h1>
            <p className="py-6">sign up</p>
          </div>
          <div className="card bg-base-100 w-[60%]  shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
              <div className="form-control mt-6">
                <button className="btn bg-purple-800">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
