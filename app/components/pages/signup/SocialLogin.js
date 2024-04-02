import React from "react";

const SocialLogin = () => {
  const socialBtns = [
    {
      className: "btn btn_fb",
      iconClass: "fab fa-facebook-f",
      text: "Log In via Facebook",
    },
    {
      className: "btn btn_google",
      iconClass: "fab fa-google",
      text: "Log In via Google+",
    },
  ];

  return (
    <div className="social_btn">
      {socialBtns.map((btn, index) => (
        <React.Fragment key={index}>
          <button className={btn.className}>
            <span className={btn.iconClass} />
            {btn.text}
          </button>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default SocialLogin;
