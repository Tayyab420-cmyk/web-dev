import React from 'react';
import './Project.css'

const MyComponent = () => {
  return (
    <div>
      <div className="head">
        <p id="font">Login with your Instagram account</p>
      </div>
      <div className="middle">
        <form id="login-form">
          <input className="login" type="text" id="username" placeholder="Username, Email or Phone" required />
          <input className="login" type="password" id="password" placeholder="Password" required />
          <button className="add" type="submit">Login</button>
        </form>
      </div>
      <div className="end">
        <p id="End">Forgot password?<br /><br />or</p>
      </div>
      <div className="main">
        <div className="insta">
          <img src="ig-logo-135.png" alt="insta" />
          <p id="insta font"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Continue with Instagram &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
        </div>
        <div className="bar">
          <img className="image" src="Screenshot 2023-11-05 at 14-42-38 Threads.png" alt="barcode" />
        </div>
      </div>
      <footer>
        <p className="foot">2023 &nbsp; Threads Terms &nbsp; Privacy Policy&nbsp; Cookies Policy &nbsp; Report a Problem</p>
      </footer>
    </div>
  );
}

export default MyComponent;



export default App;