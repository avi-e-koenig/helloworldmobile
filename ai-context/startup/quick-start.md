# Quick Startup Guide

This guide provides the fastest way to get your Material Design Hello World app running.

## 🚀 One-Command Startup

### **Recommended: Web + Mobile (Single Command)**
```bash
npm run web
```

This single command starts:
- **🌐 Web version** at `http://localhost:3002`
- **📱 Mobile QR code** for Expo Go scanning
- **🔄 Metro bundler** serving both platforms

### **Alternative: Mobile Only**
```bash
npm run start
```

Starts mobile development server on port 3001 with QR code for Expo Go.

## 🎯 VS Code Launch Configurations

Press **F5** and select from:

1. **"Run App"** - Standard mobile development server
2. **"Run Android App"** - Android-specific build
3. **"Run iOS App"** - iOS-specific build  
4. **"Run Web App"** - Web version for PC preview
5. **"Run Web + Android (Parallel)"** - Both platforms simultaneously

## 📱 Mobile Testing

### **Option A: Expo Go (Recommended)**
1. Install **Expo Go** from Google Play Store
2. Run `npm run web` or `npm run start`
3. Scan the QR code with Expo Go

### **Option B: Development Build**
```bash
npm run android
```

## 🌐 Web Testing

After running `npm run web`:
- Open browser to `http://localhost:3002`
- See your Material Design app running on PC

## 🛠️ Development Workflow

### **Daily Development:**
```bash
npm run web
```
- Opens both web and mobile
- Hot reload on both platforms
- Single command for everything

### **Cleanup (if needed):**
```bash
npm run cleanup
```
Kills any hanging Node.js processes.

## 🎨 What You'll See

Your Material Design Hello World app features:
- **"Hello, World 👋"** with Material Design typography
- **Material Design button** with proper styling
- **Professional Material You theming**
- **Clean, centered layout**

## 🔧 Custom Ports

Your app runs on custom ports to avoid conflicts:
- **Mobile/Android**: Port 3001
- **Web**: Port 3002

## ⚡ Performance

- **Node.js 22.21.0** (Latest LTS)
- **React Native 0.81.5** (Latest)
- **Expo SDK 54.0.18** (Latest)
- **New Architecture** enabled

## 🆘 Troubleshooting

### **Port Conflicts:**
```bash
npm run cleanup
```

### **Cache Issues:**
```bash
npx expo start --clear
```

### **Check Running Processes:**
```bash
netstat -ano | findstr :3001
netstat -ano | findstr :3002
```

## 🎯 Next Steps

Once running, explore:
- [Code Examples](../code-examples/) - Advanced components
- [Next Steps](../next-steps/enhancements.md) - Feature enhancements
- [Troubleshooting](../troubleshooting/common-issues.md) - Common issues

---

**🎉 Your Material Design Hello World app is ready to go!**
