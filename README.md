# Moments - A Wedding Photography Service Web Application

<a href="https://your--moments.web.app/"><b>Live Preview</b> <a/>
<br>
<img src="https://shahidul-portfolio.web.app/_next/static/media/moment.d4519d92.png" height="400"/>
<br>
Moments is a single page web application created using React.js for a wedding photography agency. It provides users with the ability to browse and book services, view their booking history, and leave reviews for the services they received. Additionally, it provides administrators with the ability to manage services, view orders, and add new administrators.

---

# Table of Contents

<ul>
<li><b>Installation </b></li>
<li><b>Usage </b></li>
<li><b> Technologies Used</b></li>
</ul>

---

# Installation

### Clone the client and server repositories to your local machine using the following commands:

```bash
git clone https://github.com/shahiduljahid/Moments.git
```

```bash
git clone https://github.com/shahiduljahid/wedding-photographer-server.git
```

### Navigate to the root directory of each repository and run the following command to install the required dependencies:

```bash
npm install
```

### Create a Firebase project and configure the authentication and hosting settings as described in the Firebase documentation.

### Create a MongoDB database and obtain the connection string.

### Create a .env file in the server directory and add the following environment variables:

```bash
PORT=5000
DB_URI=<your MongoDB connection string>
```

### Create a .env.local file in the client directory and add the following environment variables:

```bash
REACT_APP_API_BASE_URL=http://localhost:5000
REACT_APP_FIREBASE_API_KEY=<your Firebase API key>
REACT_APP_FIREBASE_APP_ID=<your Firebase API ID>
```

### Start the server and client by running the following commands in the respective directories:

```bash
npm start
```

---

# Usage

### User

As a user, you can browse and book services, view your booking history, and leave reviews for the services you received.

<ol>
<li><b>Visit the Moments web application at https://your--moments.web.app/ </b></li>
<li><b> Click on the "Appointment" or "Check Service" button to view the available services.</b></li>
<li><b>Click on the "Book Now" button next to the service you want to book. </b></li>
<li><b> Fill out the booking form with your information and click the "Pay Now" button to complete the booking process.</b></li>
<li><b>Click on the "Order" button in the navigation bar to view your booking history. </b></li>
<li><b> Click on the "Review" button in the navigation bar to leave a review for the services you received.</b></li>
</ol>

### Admin

As an admin, you can manage services, view orders, and add new administrators.

<ol>
<li><b> Visit the Moments web application at https://your--moments.web.app/</b></li>
<li><b>Click on the "Admin" button in the navigation bar and enter your admin email and password to log in. </b></li>
<li><b>Click on the "Add Service" button to add a new service. </b></li>
<li><b>Click on the "Order List" button to view the orders placed by users. </b></li>
<li><b>Click on the "Add Admin" button to add a new administrator. </b></li>
</ol>

# Technologies Used

<ul>
<li><b> React.js</b></li>
<li><b>React Router </b></li>
<li><b>Firebase Authentication </b></li>
<li><b> Firebase Hosting</b></li>
<li><b>Bootstrap
 </b></li>
<li><b>Axios </b></li>
<li><b> Express.js</b></li>
<li><b>MongoDB </b></li>
<li><b>Mongoose </b></li>
<li><b> JSON Web Tokens</b></li>
<li><b>Vercel Hosting </b></li>
</ul>
 
