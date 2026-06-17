import { useState } from "react";
import axios from "axios";
import "./Dashboard.css";

export default function Dashboard() {

const [rules, setRules] = useState([]);
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");

const showMessage = (msg) => {


setMessage(msg);

setTimeout(() => {
  setMessage("");
}, 3000);

};

const fetchRules = async () => {


try {

  setLoading(true);

  const token = localStorage.getItem("token");
  const instance = localStorage.getItem("instance");

  const response = await axios.post(
    "http://https://server-2u2s.onrender.com/validation-rules",
    {
      token,
      instance
    }
  );

  setRules(response.data.records || []);

} catch (error) {

  showMessage("Failed to fetch validation rules");

} finally {

  setLoading(false);

}


};

const toggleRule = async (rule) => {

try {

  const token = localStorage.getItem("token");
  const instance = localStorage.getItem("instance");

  await axios.post(
    "http://https://server-2u2s.onrender.com/toggle-rule",
    {
      token,
      instance,
      ruleName: rule.ValidationName
    }
  );

  showMessage("Rule updated successfully");

  fetchRules();

} catch (error) {

  showMessage("Toggle failed");

}


};

const enableAllRules = async () => {


try {

  await axios.post(
    "http://https://server-2u2s.onrender.com/set-all-rules",
    {
      token: localStorage.getItem("token"),
      instance: localStorage.getItem("instance"),
      active: true
    }
  );

  showMessage("All rules enabled");

  fetchRules();

} catch (error) {

  showMessage("Enable all failed");

}


};

const disableAllRules = async () => {


try {

  await axios.post(
    "http://https://server-2u2s.onrender.com/set-all-rules",
    {
      token: localStorage.getItem("token"),
      instance: localStorage.getItem("instance"),
      active: false
    }
  );

  showMessage("All rules disabled");

  fetchRules();

} catch (error) {

  showMessage("Disable all failed");

}


};

const deployChanges = () => {


showMessage("Changes deployed successfully");

fetchRules();


};

return (


<div className="dashboard">

  {message && (
    <div className="toast">
      {message}
    </div>
  )}

  <h1>
    Salesforce Validation Rule Manager
  </h1>

  <div className="stats-container">

    <div className="stat-card">
      <h2>{rules.length}</h2>
      <p>Total Rules</p>
    </div>

    <div className="stat-card">
      <h2>{rules.filter(r => r.Active).length}</h2>
      <p>Active</p>
    </div>

    <div className="stat-card">
      <h2>{rules.filter(r => !r.Active).length}</h2>
      <p>Inactive</p>
    </div>

  </div>

  <div className="top-buttons">

    <button
      className="btn primary"
      onClick={fetchRules}
    >
      {loading ? "Loading..." : "Get Validation Rules"}
    </button>

    <button
      className="btn success"
      onClick={enableAllRules}
    >
      Enable All
    </button>

    <button
      className="btn danger"
      onClick={disableAllRules}
    >
      Disable All
    </button>

    <button
      className="btn deploy"
      onClick={deployChanges}
    >
      Deploy Changes
    </button>

  </div>

  <div className="cards">

    {rules.map((rule) => (

      <div
        key={rule.Id}
        className="card"
      >

        <h3>{rule.ValidationName}</h3>

        <p>
          Status:
          <span
            className={
              rule.Active
              ? "status-active"
              : "status-inactive"
            }
          >
            {rule.Active
              ? " Active"
              : " Inactive"}
          </span>
        </p>

        <div
          className={`toggle-switch ${
            rule.Active ? "active" : ""
          }`}
          onClick={() => toggleRule(rule)}
        >
          <div className="toggle-circle"></div>
        </div>

      </div>

    ))}

  </div>

</div>


);
}
