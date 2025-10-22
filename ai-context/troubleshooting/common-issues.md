# Troubleshooting Common Issues

This guide covers common issues you might encounter when implementing React Native Paper in your existing Expo Hello World app.

## Setup Issues

### Issue: Blank Screen After Adding React Native Paper

**Symptoms**: App starts but shows blank screen after replacing App.tsx with React Native Paper code

**Solutions**:
1. **Check Babel Configuration**: Ensure your `babel.config.js` uses `babel-preset-expo`:
   ```javascript
   module.exports = function(api) {
     api.cache(true);
     return {
       presets: ['babel-preset-expo'],
     };
   };
   ```

2. **Clear Metro Cache**: Run the following commands:
   ```bash
   npx expo start --clear
   # or
   npm run start -- --clear
   ```

3. **Check Dependencies**: Verify all required packages are installed:
   ```bash
   npm install
   ```

### Issue: Font or Icon Loading Problems

**Symptoms**: Text appears but fonts/icons don't render correctly

**Solutions**:
1. **Expo Bundles Icons**: Expo automatically bundles vector icons, so no additional setup is needed
2. **Check Metro Config**: Ensure Metro bundler is configured correctly (should be automatic with Expo)
3. **Restart Development Server**: Sometimes a restart resolves font loading issues

## Development Server Issues

### Issue: Slow Hot Reload or Network Issues

**Symptoms**: Changes take long to reflect or connection issues with device

**Solutions**:
1. **Use Wired Connection**: Connect your device via USB for faster refresh
2. **Enable Preferred Connection**: In Expo Dev Tools, enable "Preferred device connection"
3. **Check Network**: Ensure your phone and computer are on the same network
4. **Use LAN IP**: For network requests, use your machine's LAN IP instead of `localhost`

### Issue: QR Code Not Working

**Symptoms**: Can't scan QR code or connection fails

**Solutions**:
1. **Check Network**: Ensure both devices are on the same Wi-Fi network
2. **Try Development Build**: Use `npx expo run:android` for a native build
3. **Manual Connection**: Enter the connection URL manually in Expo Go

## Android-Specific Issues

### Issue: Android Emulator Not Starting

**Symptoms**: `npx expo run:android` fails or emulator won't start

**Solutions**:
1. **Check Android Studio**: Ensure Android Studio is installed and configured
2. **Verify SDK**: Make sure Android SDK is properly installed
3. **Check Environment Variables**: Ensure `ANDROID_HOME` is set correctly
4. **Try Different Emulator**: Create a new AVD (Android Virtual Device)

### Issue: USB Debugging Problems

**Symptoms**: Device not recognized or debugging fails

**Solutions**:
1. **Enable Developer Options**: Go to Settings > About Phone > Tap Build Number 7 times
2. **Enable USB Debugging**: In Developer Options, enable USB Debugging
3. **Check USB Connection**: Try different USB cable or port
4. **Install ADB Drivers**: Ensure proper Android Debug Bridge drivers are installed

## React Native Paper Issues

### Issue: Components Not Rendering

**Symptoms**: React Native Paper components appear as plain text or don't render

**Solutions**:
1. **Check PaperProvider**: Ensure your app is wrapped with `PaperProvider`
2. **Verify Theme**: Make sure you're passing a valid theme to `PaperProvider`
3. **Check Imports**: Verify all components are imported correctly
4. **Restart Metro**: Clear cache and restart development server

### Issue: Theme Not Applying

**Symptoms**: Material Design styling not appearing

**Solutions**:
1. **Check Theme Import**: Ensure `MD3LightTheme` or `MD3DarkTheme` is imported
2. **Verify Provider**: Make sure `PaperProvider` wraps your app
3. **Check Theme Prop**: Verify theme is passed correctly to `PaperProvider`

## Performance Issues

### Issue: Slow App Performance

**Symptoms**: App runs slowly or lags

**Solutions**:
1. **Use Release Build**: Test with release build for better performance
2. **Check Console**: Look for JavaScript errors in Metro bundler console
3. **Optimize Images**: Ensure images are optimized and properly sized
4. **Check Memory**: Monitor memory usage in development tools

## Getting Help

If you encounter issues not covered here:

1. **Check Expo Documentation**: [docs.expo.dev](https://docs.expo.dev)
2. **React Native Paper Docs**: [reactnativepaper.com](https://reactnativepaper.com)
3. **Expo Discord**: Join the Expo Discord community
4. **GitHub Issues**: Check existing issues on relevant repositories

## Debug Commands

Useful commands for debugging:

```bash
# Clear all caches
npx expo start --clear

# Check Expo installation
npx expo doctor

# Check Android setup
npx expo run:android --verbose

# View logs
npx expo logs
```
