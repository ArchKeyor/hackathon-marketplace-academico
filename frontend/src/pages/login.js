import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Matrícula:</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;