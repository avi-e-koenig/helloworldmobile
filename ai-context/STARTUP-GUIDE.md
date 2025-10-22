# 🚀 STARTUP GUIDE - Quick Reference

## **One-Command Startup (RECOMMENDED)**
```bash
npm run web
```
**Result**: Starts both web (port 3002) and mobile (QR code) simultaneously

## **Alternative Commands**
```bash
npm run start    # Mobile only (port 3001)
npm run cleanup  # Kill hanging processes
npm run dev      # Parallel web + Android with cleanup
```

## **VS Code Launch**
- Press **F5** → Select configuration:
  - "Run App" - Standard mobile
  - "Run Web App" - Web version
  - "Run Web + Android (Parallel)" - Both platforms

## **Access URLs**
- **Web**: `http://localhost:3002`
- **Mobile**: Scan QR code with Expo Go
- **Metro**: Port 3001

## **What You'll See**
- Material Design 3 "Hello, World 👋" text
- Material Design button
- Professional Material You styling

## **Troubleshooting**
- **Port conflicts**: `npm run cleanup`
- **Cache issues**: `npx expo start --clear`
- **Check processes**: `netstat -ano | findstr :3001`

---
**🎉 Ready to go!**
