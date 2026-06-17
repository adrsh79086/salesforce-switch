import "./Login.css";

const CLIENT_ID = "3MVG97L7PWbPq6UyfT9M4sqf7hrjlcsoGpd33XH8fWxj2snNIar3tVw1986X8P449dU1LTn2DRo85UVNU6YV8";

const login = () => {

const url =
`https://login.salesforce.com/services/oauth2/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=https://salesforce-switch-seven.vercel.app/callback`;

window.location.href = url;
};

export default function Login() {

return (


<div className="login-container">

  <div className="login-card">

    <div className="logo-section">

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
        alt="Salesforce"
        className="logo"
      />

    </div>

    <h1>
      Salesforce Validation Rule Manager
    </h1>

    <p>
      Connect your Salesforce Org and manage
      validation rules directly from a modern dashboard.
    </p>

    <button
      className="login-btn"
      onClick={login}
    >
      Login with Salesforce
    </button>

    <div className="features">

      <div className="feature">
        ✓ OAuth 2.0 Authentication
      </div>

      <div className="feature">
        ✓ View Validation Rules
      </div>

      <div className="feature">
        ✓ Enable / Disable Rules
      </div>

      <div className="feature">
        ✓ Deploy Changes Instantly
      </div>

    </div>

  </div>

</div>


);
}
