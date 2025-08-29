Environment setup (.env.local)

Create a file named .env.local in the project root (same folder as package.json) with the following keys:

MONGODB_URI="mongodb+srv://USER:PASS@CLUSTER/dbname?retryWrites=true&w=majority"
BREVO_API_KEY="your-brevo-api-key"
SITE_FROM_EMAIL="website@yourdomain.com"
ADMIN_TO_EMAIL="you@yourdomain.com"

Notes
- MONGODB_URI: Use a MongoDB Atlas connection string or your local MongoDB.
- SITE_FROM_EMAIL: Must be a verified sender in Brevo.
- ADMIN_TO_EMAIL: Where new contact notifications are delivered.

Scripts
- Development: npm run dev
- Build: npm run build


