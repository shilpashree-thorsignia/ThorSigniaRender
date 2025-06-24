# ThorSignia - Full Stack Application

This repository contains the complete ThorSignia application with separated frontend and backend components.

## Repository Structure

```
ThorSignia/
├── frontend/          # React + Vite frontend application
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   ├── package.json  # Frontend dependencies
│   └── render.yaml   # Frontend deployment config
├── backend/          # Flask backend API
│   ├── app/          # Flask application
│   ├── api/          # API routes
│   ├── main.py       # Application entry point
│   ├── requirements.txt # Python dependencies
│   └── render.yaml   # Backend deployment config
└── render.yaml       # Root deployment config (both services)
```

## Technology Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, Framer Motion
- **Deployment**: Render (Static Site)

### Backend
- **Framework**: Flask with Python 3
- **Database**: Railway MySQL
- **ORM**: SQLAlchemy
- **Server**: Gunicorn
- **Deployment**: Render (Web Service)

## Local Development

### Prerequisites
- Node.js 18+ (for frontend)
- Python 3.8+ (for backend)
- MySQL database (or use the Railway connection)

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend will run on `http://localhost:5173`

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
python main.py
```
The backend will run on `http://localhost:5000`

### Environment Variables

#### Frontend (.env in frontend/)
```
VITE_API_BASE_URL=http://localhost:5000  # For local development
```

#### Backend (.env in backend/)
```
FLASK_ENV=development
DATABASE_URL=mysql://root:ydomXWGBWcamiOWQHqyXdJZKTXPPXexc@centerbeam.proxy.rlwy.net:29126/railway
SECRET_KEY=your-secret-key
PORT=5000
```

## Deployment

### Render Deployment

The application is configured for deployment on Render with both services:

1. **Backend API**: `https://thorsignia.onrender.com`
2. **Frontend**: To be deployed separately

#### Deploy Both Services (Recommended)
Use the root `render.yaml` to deploy both services from a single repository:
```bash
# Connect repository to Render and it will deploy both services
```

#### Deploy Separately
- Backend: Use `backend/render.yaml`
- Frontend: Use `frontend/render.yaml`

### Database Configuration

Currently using Railway MySQL:
- **Host**: centerbeam.proxy.rlwy.net:29126
- **Database**: railway
- **Connection**: Already configured in environment variables

## API Endpoints

### Health Check
- `GET /api/health` - API health status

### Contact Form
- `POST /api/contact` - Submit contact form

### Career Applications
- `POST /api/careers` - Submit career application

## Features

- Responsive design with modern UI
- AI-powered service showcases
- Interactive animations and effects
- Contact and career application forms
- Case studies and testimonials
- Service pages with detailed information

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes in the appropriate frontend/ or backend/ directory
4. Test locally
5. Submit a pull request

## License

Copyright © 2025 ThorSignia. All rights reserved.
