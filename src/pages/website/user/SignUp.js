import React, { useState } from "react";
import Layout from "../../../core/layout";
import { useForm } from "react-hook-form";
import { signUp } from "../../../auth";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = (data, e) => {
    // console.log(data);
    signUp(data).then((dataInput) => {
      if (dataInput.error) {
        setError(dataInput.error);
      } else {
        e.target.reset(); //Xóa dữ liệu trong input
        setError("");
        setSuccess(true);
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
  const showSuccess = () => {
    return (
      <div
        className="alert alert-info"
        style={{ display: success ? "block" : "none" }}
      >
        <center>Tạo tài khoản thành công. <Link to="/signin">Đăng nhập ngay</Link></center>
      </div>
    );
  };

  const signUpForm = () => {
    return (
      <section className="login_box_area section-margin">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login_box_img">
                <div className="hover">
                  <h4>Already have an account?</h4>
                  <p>
                    There are advances being made in science and technology
                    everyday, and a good example of this is the
                  </p>
                  <Link className="button button-account text-decoration-none" to="/signin">
                    Login Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login_form_inner register_form_inner">
                <h3>Create an account</h3>
                <form
                  className="row login_form"
                  onSubmit={handleSubmit(onSubmit)}
                  id="register_form"
                >
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className={`${
                        errors.name ? "border-danger" : ""
                      } form-control`}
                      id="name"
                      name="name"
                      placeholder="Username"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Username'"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className={`${
                        errors.email ? "border-danger" : ""
                      } form-control`}
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Email Address'"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className={`${
                        errors.password ? "border-danger" : ""
                      } form-control`}
                      id="password"
                      name="password"
                      placeholder="Password"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Password'"
                      {...register("password", { required: true })}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Confirm Password'"
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
                      className="button button-register w-100"
                    >
                      Register
                    </button>
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
    <Layout title="Sign Up" description="Đăng ký" className="register-page">
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </Layout>
  );
};

export default SignUp;
