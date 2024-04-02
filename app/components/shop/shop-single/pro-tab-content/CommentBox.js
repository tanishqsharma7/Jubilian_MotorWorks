"use client";
import React, { useState } from "react";

const CommentBox = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if required fields are filled
    if (!name || !email || !message) {
      // Handle validation error
      alert("Please fill in all required fields.");
      return;
    }

    // Perform any additional logic or submit form data
    // For example, you can send the form data to an API endpoint

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="comments_form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-12">
          <h5 className="fz16 mb30">Write a review</h5>
          <div className="sspd_review mb30">
            <ul>
              {[...Array(5)].map((_, index) => (
                <li className="list-inline-item" key={index}>
                  <a href="#">
                    <i className="fa fa-star" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-md-6">
          <div className="mb-3">
            <input
              type="text"
              className="form-control form_control"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <input
              type="email"
              className="form-control form_control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <textarea
              className="form-control form_control"
              rows={6}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="defaultCheck1"
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
          <button type="submit" className="btn btn-thm">
            Send Your Review
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentBox;
