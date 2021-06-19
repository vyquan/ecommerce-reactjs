import React, { useState } from "react";
import Layout from "../../../core/layout";
import { useForm } from "react-hook-form";
import {Redirect} from "react-router"
import { signIn, authenticate, isAuthenticated } from "../../../auth";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom"
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let history = useHistory();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirectToRef, setRedirectToRef] = useState(false); //

  const {user} = isAuthenticated()

  const onSubmit = (data) => {
    // console.log(data);
    setLoading(true);
    signIn(data).then((dataUser) => {
      if (dataUser.error) {
        setError(dataUser.error);
        setLoading(false);
      } else {
        authenticate(dataUser, () => {
          setRedirectToRef(true)
          // history.push("/");
        });
      }
    });
  };
  const showError = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "block" : "none" }}
      >
        <center>{error}</center>
      </div>
    );
  };
  const redirectUser = () =>{
    if(redirectToRef){
      if(user.role == 1){
        return <Redirect to="/admin/dashboard"/>
      }else{
        return <Redirect to="/user/dashboard"/>
      }
    }
  }
  const showLoading = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const signInForm = () => {
    return (
      <section className="login_box_area section-margin">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login_box_img">
                <div className="hover">
                  <h4>New to our website?</h4>
                  <p>
                    There are advances being made in science and technology
                    everyday, and a good example of this is the
                  </p>
                  <Link className="button button-account text-decoration-none" to="/signup">
                    Create an Account
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login_form_inner">
                <h3>Log in to enter</h3>
                <form
                  className="row login_form"
                  onSubmit={handleSubmit(onSubmit)}
                  id="contactForm"
                >
                  <div className="col-md-12 form-group">
                    <input
                      type="email"
                      className={`${
                        errors.email ? "border-danger" : ""
                      } form-control`}
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Email Address'"
                      {...register("email")}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="password"
                      className={`${
                        errors.password ? "border-danger" : ""
                      } form-control`}
                      id="password"
                      name="password"
                      placeholder="Password"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Password'"
                      {...register("password")}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="creat_account">
                      <input type="checkbox" id="f-option2" name="selector" />
                      <label htmlFor="f-option2">Keep me logged in</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <button
                      type="submit"
                      value="submit"
                      className="button button-login w-100"
                    >
                      Log In
                    </button>
                    <a href="#">Forgot Password?</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  return (
    <Layout title="Sign In" description="Đăng nhập" className="register-page">
      {redirectUser()}
      {showLoading()}
      {showError()}
      {signInForm()}
    </Layout>
  );
};

export default SignIn;
