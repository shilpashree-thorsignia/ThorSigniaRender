# ThorSignia Deployment Guide

## Repository Structure

This repository is organized with separate frontend and backend folders for clean deployment:

```
ThorSignia/
├── frontend/         # React + Vite application
├── backend/          # Flask API application
└── render.yaml       # Combined deployment config
```

## Deployment Options

### Option 1: Deploy Both Services from Single Repository (Recommended)

The root `render.yaml` is configured to deploy both frontend and backend from a single repository:

1. **Connect Repository to Render**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Connect this GitHub repository
   - Render will automatically detect the `render.yaml` and create both services

2. **Services Created**
   - `thorsignia-api` (Backend) - Python web service
   - `thorsignia-frontend` (Frontend) - Node.js web service

3. **URLs**
   - Backend API: `https://thorsignia.onrender.com`
   - Frontend: `https://thorsignia-frontend.onrender.com`

### Option 2: Deploy Services Separately

#### Backend Deployment
1. Create a new Web Service on Render
2. Set root directory to `./backend`
3. Use the following settings:
   - **Runtime**: Python
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn main:app`
   - **Environment Variables**:
     ```
     FLASK_ENV=production
     DATABASE_URL=mysql://root:ydomXWGBWcamiOWQHqyXdJZKTXPPXexc@centerbeam.proxy.rlwy.net:29126/railway
     SECRET_KEY=thor-signia-super-secret-production-key-2025
     PORT=10000
     ```

#### Frontend Deployment
1. Create a new Web Service on Render
2. Set root directory to `./frontend`
3. Use the following settings:
   - **Runtime**: Node
   - **Build Command**: `npm ci && npm run build`
   - **Start Command**: `npm run preview`
   - **Environment Variables**:
     ```
     NODE_ENV=production
     VITE_API_BASE_URL=https://thorsignia.onrender.com
     ```

## Environment Configuration

### Backend Environment Variables
Copy from `backend/env.example` and set in Render dashboard:
- `FLASK_ENV=production`
- `DATABASE_URL` (Railway MySQL connection string)
- `SECRET_KEY` (for session management)
- `PORT` (default: 10000)

### Frontend Environment Variables
Copy from `frontend/env.example` and set in Render dashboard:
- `NODE_ENV=production`
- `VITE_API_BASE_URL` (backend API URL)

## Database Configuration

Currently using Railway MySQL:
- **Connection**: Already configured in DATABASE_URL
- **Auto-initialization**: Tables are created automatically on first run
- **Models**: Contact forms and career applications

## Local Development

### Backend
```bash
cd backend
pip install -r requirements.txt
# Copy env.example to .env and configure for local DB
python main.py
```

### Frontend
```bash
cd frontend
npm install
# Copy env.example to .env and set VITE_API_BASE_URL=http://localhost:5000
npm run dev
```

## Health Checks

- Backend health check: `GET /api/health`
- Returns: `{"status": "ok", "message": "Thor Signia API is running"}`

## Troubleshooting

### Common Issues

1. **Database Connection Errors**
   - Verify DATABASE_URL is correct
   - Check Railway MySQL service status
   - Ensure network connectivity from Render to Railway

2. **Frontend API Calls Failing**
   - Verify VITE_API_BASE_URL points to correct backend
   - Check CORS configuration in backend
   - Ensure backend service is running

3. **Build Failures**
   - Check all dependencies are in correct package.json/requirements.txt
   - Verify build commands in render.yaml
   - Check for any missing environment variables

### Logs and Monitoring

- Access service logs from Render dashboard
- Monitor health check endpoint
- Check Railway database metrics

## Scaling and Performance

- Both services are on Render free tier
- Database hosted on Railway
- Consider upgrading to paid plans for production use
- Monitor resource usage and response times 