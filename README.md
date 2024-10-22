Next.js Demo with Saleor GraphQL API
This is a demo project built with Next.js and Saleor's GraphQL API. It demonstrates how to integrate a Next.js frontend with a Saleor backend for e-commerce functionality.

Features
Next.js for the frontend
GraphQL integration with Saleor's API
Product listing, product details, and categories
Add to cart functionality
Responsive design
Requirements
Node.js (v14 or higher)
Saleor GraphQL API access (either self-hosted or via Saleor Cloud)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install the dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env.local file in the root directory with the following variables:

bash
Copy code
NEXT_PUBLIC_SALEOR_API_URL=<Your Saleor API URL>
Start the development server:

bash
Copy code
npm run dev
Your app will be available at http://localhost:3000.

Folder Structure
app/ - Contains the Next.js pages (e.g., home, product details)
lib/ - GraphQL queries and mutations for interacting with Saleor API

GraphQL Integration
The app uses Apollo Client for managing GraphQL queries. You can find the queries and mutations in the graphql/ folder, including:

Fetching product lists
Fetching product details
