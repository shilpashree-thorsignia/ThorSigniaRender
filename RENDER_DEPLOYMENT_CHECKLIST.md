# 🚀 Render Deployment Checklist

## Pre-Deployment Requirements

### ✅ Repository Preparation
- [x] All render.yaml files configured
- [x] Health check endpoints implemented
- [x] CORS settings updated for production
- [x] Contact model imports fixed
- [x] Environment variables documented

### 🔧 Configuration Files
- [x] `/render.yaml` - Main deployment configuration
- [x] `/backend/render.yaml` - Backend-specific config
- [x] `/frontend/render.yaml` - Frontend-specific config
- [x] `/build.sh` - Deployment build script

### 🔒 Environment Variables Required

#### Backend (`thorsignia-api`)
```
FLASK_ENV=production
SECRET_KEY=thor-signia-super-secret-production-key-2025
DATABASE_URL=mysql://root:ydomXWGBWcamiOWQHqyXdJZKTXPPXexc@centerbeam.proxy.rlwy.net:29126/railway
PORT=10000
```

#### Frontend (`thorsignia-frontend`)
```
NODE_ENV=production
VITE_API_BASE_URL=https://thorsignia-api.onrender.com
PORT=10000
```

## 📋 Deployment Steps

### 1. Connect Repository to Render
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New" → "Blueprint"
3. Connect your GitHub repository
4. Render will detect the `render.yaml` file automatically

### 2. Verify Service Creation
Two services should be created:
- **thorsignia-api** (Backend API)
- **thorsignia-frontend** (Frontend App)

### 3. Monitor Deployment
- Check build logs for both services
- Verify health checks pass: `https://thorsignia-api.onrender.com/api/health`
- Test frontend loads: `https://thorsignia-frontend.onrender.com`

### 4. Database Verification
- Ensure MySQL connection is working
- Verify tables are created automatically
- Test contact form submission

## 🔍 Testing Endpoints

### Backend Health Check
```bash
curl https://thorsignia-api.onrender.com/api/health
```

Expected Response:
```json
{
  "status": "ok",
  "message": "Thor Signia API is running",
  "database": "connected",
  "environment": "production",
  "timestamp": 1704067200
}
```

### Frontend Application
Visit: `https://thorsignia-frontend.onrender.com`

### API Endpoints to Test
- `POST /api/contact` - Contact form
- `POST /api/careers/apply` - Career applications
- `POST /api/assessments` - Assessment submissions

## 🚨 Troubleshooting

### Common Issues & Solutions

#### Backend Won't Start
- Check DATABASE_URL is correct
- Verify all environment variables are set
- Check build logs for dependency issues

#### Frontend Build Fails
- Ensure Node.js version compatibility
- Check for missing dependencies
- Verify environment variables

#### Database Connection Issues
- Confirm Railway MySQL service is running
- Check network connectivity from Render
- Verify database credentials

#### CORS Errors
- Ensure frontend URL is in CORS origins
- Check API URL in frontend environment variables

## 🔄 Post-Deployment Tasks

### 1. Domain Configuration (Optional)
- Add custom domain to frontend service
- Update CORS settings with new domain
- Update environment variables if needed

### 2. Monitoring Setup
- Enable Render monitoring and alerts
- Set up uptime monitoring (optional)
- Configure log aggregation (optional)

### 3. Performance Optimization
- Monitor resource usage
- Consider upgrading to paid plans for production
- Implement caching strategies

## 🔗 Service URLs

After successful deployment:
- **Backend API**: `https://thorsignia-api.onrender.com`
- **Frontend App**: `https://thorsignia-frontend.onrender.com`
- **Health Check**: `https://thorsignia-api.onrender.com/api/health`

## 📞 Support Resources

- [Render Documentation](https://render.com/docs)
- [Flask Deployment Guide](https://render.com/docs/deploy-flask)
- [React Deployment Guide](https://render.com/docs/deploy-create-react-app)
- [Environment Variables](https://render.com/docs/environment-variables)

---

✅ **Ready for deployment!** Your ThorSignia application is now optimized for Render deployment. 