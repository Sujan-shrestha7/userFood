import React from "react";
import loginimg from "../images/loginimg.jpg";

const LoginForm = () => {
  return (
    <div className="p-[7%] px-[15%]">
      <div className="flex h-[500px] border-2 border-black shadow-xl">
        <div>
          <img src={loginimg} className="h-[500px] w-[500px]" alt="" />
        </div>
        <div>
          <p>Login Page</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
