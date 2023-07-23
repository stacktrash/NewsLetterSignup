# NewsLetterSignup

# README for MailChimp Signup Web Application

This repository contains a simple web application built with Node.js and Express that allows users to sign up for a mailing list using the MailChimp API. The application provides a basic front-end interface where users can enter their first name, last name, and email address to subscribe to the mailing list. The server then communicates with the MailChimp API to add the user to the mailing list and provides appropriate responses based on the API's response.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using npm:

```bash
npm install body-parser express request
```

3. Obtain your MailChimp API key and list ID:
   - Sign in to your MailChimp account or sign up for one if you don't have it.
   - Go to the "Account" dropdown and select "Extras" > "API Keys."
   - Generate a new API key if you don't have one.
   - In your MailChimp dashboard, navigate to "Audience" > "Audience Dashboard."
   - Select the desired audience (list) and go to "Settings" > "List name and defaults."
   - Copy the "List ID" to use it in the code.

4. Open the `app.js` file and locate the following lines:

```javascript
const url = ''; // Insert mailchimp api. More info at https://mailchimp.com/developer/marketing/docs/fundamentals/
const options = {
  method: "POST",
  auth: ""; // Input your own auth
};
```

Replace the `url` variable with the MailChimp API endpoint (e.g., `https://<datacenter>.api.mailchimp.com/3.0/lists/<list-id>`) and set the `auth` property to your MailChimp API key in the `options` object.

5. Run the application:

```bash
node app.js
```

6. The server should now be running on `http://localhost:3000`. Open your web browser and navigate to this address to access the application.

## Application Structure

- `app.js`: This is the main file containing the server code using Express.js.
- `public/`: This directory contains static assets such as CSS and images used for the front-end interface.
- `signup.html`: This HTML file represents the front-end interface where users can enter their signup details.
- `success.html`: This HTML file is displayed when the user is successfully subscribed to the mailing list.
- `failure.html`: This HTML file is displayed if there is an error with the signup process.

## Endpoints

- `GET /`: This endpoint serves the `signup.html` file, which contains the form for user signup.
- `POST /`: This endpoint is triggered when the user submits the signup form. It processes the form data, communicates with the MailChimp API, and responds appropriately based on the API's response.
- `POST /failure`: This endpoint handles redirection to the homepage if there is an error with the signup process.

## Dependencies

- `express`: A popular web application framework for Node.js that simplifies building web servers and APIs.
- `body-parser`: Middleware for parsing incoming request bodies, allowing easy access to form data.
- `request`: A simplified HTTP client used to send HTTP requests to external APIs.
- `https`: The built-in Node.js module for making HTTPS requests.

## Important Notes

- Before deploying this application to a production environment, ensure that you keep sensitive information, such as API keys and authentication details, secure. It's recommended to use environment variables to store and access such information securely.
- This application is intended as a basic example and may not cover all edge cases or robust error handling. For production use, consider implementing additional error handling and validation.
- If you plan to deploy this application to a public-facing server, make sure to secure it properly and use SSL/TLS certificates for secure communication.
