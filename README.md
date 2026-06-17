# Salesforce Validation Rule Manager

## Overview

Salesforce Validation Rule Manager is a web application built using React, Node.js, Express, and Salesforce APIs.

The application allows users to authenticate with Salesforce using OAuth 2.0, retrieve validation rules from the Account object, and enable or disable validation rules directly from a web dashboard.

---

## Features

* Salesforce OAuth 2.0 Login
* Fetch Account Validation Rules
* View Validation Rule Status (Active / Inactive)
* Enable or Disable Individual Validation Rules
* Enable All Validation Rules
* Disable All Validation Rules
* Deploy Changes Directly to Salesforce
* Modern Dashboard UI

---

## Technologies Used

### Frontend

* React.js
* Axios
* CSS3

### Backend

* Node.js
* Express.js
* JSForce
* Axios

### Salesforce

* Salesforce Developer Org
* Connected App
* OAuth 2.0
* Tooling API
* Metadata API

---

## Salesforce Setup

### Create Salesforce Developer Org

1. Sign up at:
   https://developer.salesforce.com/signup

2. Log in to Salesforce Developer Edition.

---

### Create Validation Rules

Created validation rules on the Account object:

* Account_Name_Required
* Phone_10_Digits
* Website_Required
* Revenue_Positive
* BillingCity_Required

---

### Create Connected App

1. Go to Setup
2. App Manager
3. Create Connected App
4. Enable OAuth Settings
5. Add Callback URL
6. Save Consumer Key and Consumer Secret

---

## Application Workflow

1. User clicks Login with Salesforce.
2. Salesforce OAuth authentication is performed.
3. Access Token and Instance URL are stored.
4. Validation Rules are fetched using Tooling API.
5. Validation Rules are enabled/disabled using Metadata API.
6. Changes are immediately reflected in Salesforce.

---

## Installation

### Frontend

bash
npm install
npm start

### Backend 

npm install
node index.js

