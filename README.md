# TenserGo_Assignment-
The SaaS Invoice Management System is a full-stack application designed to streamline invoice management and automate reminders for SaaS businesses. Users can log in with Google OAuth, view due invoices, and automatically send past-due reminders via Zapier. Built with a microservices architecture, the system ensures scalability and maintainabilit.
Prerequisites
Docker: Ensure Docker and Docker Compose are installed on your system.
Google OAuth Credentials: Obtain Google OAuth credentials (Client ID and Client Secret) from the Google Developer Console.
Zapier Webhook URL: Set up a Zapier webhook for sending reminders.
Steps to Set Up and Run the Application....
Clone the Repository.... 
mkdir my-saas-app
cd my-saas-app
# Create Environment Variables File
In the root directory of the project, create a .env file with the following content:

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
SESSION_SECRET=your-session-secret
ZAPIER_WEBHOOK_URL=your-zapier-webhook-url
MONGO_URI=mongodb://mongo:27017/invoices

# Replace the placeholder values with your actual values:

your-google-client-id: Your Google OAuth client ID.
your-google-client-secret: Your Google OAuth client secret.
your-session-secret: A secret key for session management.
your-zapier-webhook-url: The Zapier webhook URL for reminders.
Docker Compose Configuration

# Ensure the docker-compose.yml file is set up as follows:

# Run the following command to build and start all services using Docker Compose:
docker-compose up --build
Accessing the Application

Frontend: Open your web browser and navigate to http://localhost:3004.
Auth Service: Available at http://localhost:3000.
Invoice Service: Available at http://localhost:3001.
Reminder Service: Available at http://localhost:3002.
API Gateway: Available at http://localhost:3003.
MongoDB: Running at mongodb://localhost:27017 (exposed on port 27017).

# End-to-End Flow
Login with Google OAuth:

Access the frontend at http://localhost:3004.
Click on "Login with Google".
Authorize the application using your Google account.
You will be redirected to the dashboard after successful login.
View Due Invoices:

On the dashboard, the app will fetch and display the due invoices from the invoiceService.
Send Reminders:

Click on the "Send Reminder" button next to a due invoice.
This will trigger a request to the reminderService, which sends a reminder via the Zapier webhook.
