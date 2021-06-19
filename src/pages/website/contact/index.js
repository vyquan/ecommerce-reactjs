import React from "react";

const Contact = () => {
  window.scrollTo(0, 0);
  return (
    <section className="section-margin--small">
      <div className="container">
        <div className="d-none d-sm-block mb-5 pb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5964.605128686213!2d-122.01049715174169!3d37.335150933740245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e1!3m2!1svi!2s!4v1623169056939!5m2!1svi!2s"
            width={1269}
            height={444}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-home" />
              </span>
              <div className="media-body">
                <h3>California United States</h3>
                <p>Santa monica bullevard</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-headphone" />
              </span>
              <div className="media-body">
                <h3>
                  <a>00 (440) 9865 562</a>
                </h3>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-email" />
              </span>
              <div className="media-body">
                <h3>
                  <a>support@apple.com</a>
                </h3>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-9">
            <form
              action="#/"
              className="form-contact contact_form"
              method="post"
              id="contactForm"
              noValidate="novalidate"
            >
              <div className="row">
                <div className="col-lg-5">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="subject"
                      id="subject"
                      type="text"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="form-group">
                    <textarea
                      className="form-control different-control w-100"
                      name="message"
                      id="message"
                      cols={30}
                      rows={5}
                      placeholder="Enter Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group text-center text-md-right mt-3">
                <button
                  type="submit"
                  className="button button--active button-contactForm"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
