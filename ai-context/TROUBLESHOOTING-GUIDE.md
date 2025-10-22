# 🆘 TROUBLESHOOTING GUIDE

## **Common Issues & Solutions**

### **Port Conflicts**
**Problem**: Port already in use
**Solution**: 
```bash
npm run cleanup
```
**Verify**: `netstat -ano | findstr :3001`

### **SafeAreaView Deprecation**
**Problem**: 'SafeAreaView' is deprecated
**Solution**: ✅ **FIXED** - Using `react-native-safe-area-context`
```tsx
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
```

### **TypeScript Configuration Error**
**Problem**: File 'expo/tsconfig.base' not found
**Solution**: ✅ **FIXED** - Using standard TypeScript configuration
```json
{
  "compilerOptions": {
    "target": "esnext",
    "lib": ["dom", "esnext"],
    "jsx": "react-jsx"
  }
}
```

### **Cache Issues**
**Problem**: Metro bundler cache problems
**Solution**:
```bash
npx expo start --clear
```

### **Node.js Version Warnings**
**Problem**: Engine warnings about Node.js version
**Solution**: ✅ **FIXED** - Upgraded to Node.js 22.21.0 LTS
```bash
nvm use 22.21.0
```

### **Process Hanging After Terminal Close**
**Problem**: Node.js processes continue running
**Solution**: 
```bash
npm run cleanup
# Or manually:
taskkill /F /IM node.exe
```

### **React Native Paper Not Rendering**
**Problem**: Components appear as plain text
**Solutions**:
1. Ensure PaperProvider wraps your app
2. Check theme is passed correctly
3. Verify imports are correct

### **Expo Go Connection Issues**
**Problem**: Can't scan QR code or connect
**Solutions**:
1. Ensure both devices on same network
2. Try development build: `npm run android`
3. Check firewall settings

### **Web Version Not Loading**
**Problem**: Web version shows errors
**Solutions**:
1. Install web dependencies: `npx expo install react-dom react-native-web`
2. Clear cache: `npx expo start --clear`
3. Check browser console for errors

## **Debug Commands**

### **Check Running Processes**
```bash
netstat -ano | findstr :3001
netstat -ano | findstr :3002
tasklist | findstr node
```

### **Clear All Caches**
```bash
npm run cleanup
npx expo start --clear
```

### **Verify Installation**
```bash
npx expo doctor
node --version
npm --version
```

### **Check Dependencies**
```bash
npm list react-native-paper
npm list react-native-safe-area-context
```

## **Performance Issues**

### **Slow Hot Reload**
**Solutions**:
1. Use wired connection
2. Enable "Preferred device connection" in Expo Dev Tools
3. Check network connectivity

### **Memory Issues**
**Solutions**:
1. Restart development server
2. Clear Metro cache
3. Check for memory leaks in console

## **Development Environment Issues**

### **VS Code Launch Not Working**
**Solutions**:
1. Check launch.json configuration
2. Ensure working directory is correct
3. Verify npm scripts exist

### **TypeScript Errors**
**Solutions**:
1. Check tsconfig.json configuration
2. Restart TypeScript server in VS Code
3. Verify @types/react is installed

## **Platform-Specific Issues**

### **Android Issues**
- Ensure Android Studio is installed
- Check USB debugging is enabled
- Verify ADB drivers are installed

### **iOS Issues**
- Ensure Xcode is installed (macOS only)
- Check iOS simulator is available
- Verify provisioning profiles

### **Web Issues**
- Check browser compatibility
- Verify react-native-web is installed
- Check for CORS issues

---

**💡 Pro Tip**: Most issues can be resolved with `npm run cleanup` followed by `npm run web`
