import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  interface HandleNameChangeInterface {
    target: HTMLInputElement;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginData);
  };
  function handleChange(e: { target: { name: string; value: string } }) {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <h1>Sing In to your account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email address"
          name="email"
          onChange={handleChange}
          value={loginData.email}
          required
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={loginData.password}
          required
        />

        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
