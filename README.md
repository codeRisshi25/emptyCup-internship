# EmptyCup Project

A full-stack application for showcasing design teams and their portfolios.

## Tech Stack

- **Frontend**: React with TypeScript, Vite, and Tailwind CSS
- **Backend**: Node.js with Express
- **Database**: MongoDB

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/emptyCup.git
cd emptyCup
```

### Running with Docker

The application is containerized using Docker, which makes it easy to run without installing any dependencies locally.

```bash
# Start all services
sudo docker compose up

# Or run in detached mode (background)
sudo docker compose up -d
```

```powershell
# For Windows users
# Start all services
docker compose up

# Or run in detached mode (background)
docker compose up -d
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:8080/data

### Stopping the Application

```bash
# If running in the foreground, press Ctrl+C
# If running in detached mode:
sudo docker compose down
docker compose down

```

## Project Structure

```
emptyCup/
├── backend/                 # Node.js Express API
│   ├── app.js               # Main application file
│   ├── config/              # Configuration files
│   ├── model/               # Database models
│   ├── Dockerfile           # Backend Docker configuration
│   └── package.json         # Node.js dependencies
├── frontend/                # React application
│   ├── src/                 # Source code
│   │   ├── components/      # React components
│   │   ├── App.tsx          # Main application component
│   │   └── ...              # Other source files
│   ├── Dockerfile           # Frontend Docker configuration
│   └── package.json         # Node.js dependencies
└── docker-compose.yml       # Docker Compose configuration
```

## Database Schema

### Listings Collection

The application uses a MongoDB collection called `listings` with the following schema:

```javascript
{
  _id: ObjectId,             // MongoDB auto-generated ID
  name: String,              // Name of the design team
  rating: Number,            // Rating of the team (0-5)
  description: String,       // Description of the team and their services
  projects: Number,          // Number of projects completed
  years: Number,             // Years of experience
  price: Number,             // Price range or starting price
  phNumbers: [String]        // Array of contact phone numbers
}
```

Example document:
```json
{
  "_id": "60d21b4667d0d8992e610c85",
  "name": "Epic Designs",
  "rating": 4.5,
  "description": "Experienced software developer with a passion for building scalable applications.",
  "projects": 10,
  "years": 5,
  "price": 50000,
  "phNumbers": ["+91 - 984532853", "+91 - 984535853"]
}
```

## API Endpoints

- `GET /data`: Returns a list of all design teams and their details

## Author

Developed by [Risshi](https://github.com/codeRisshi25) ❤️