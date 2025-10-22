# Build and Deploy Guide

This guide covers how to build and deploy your HelloWorldMobile React Native app so you can install it on your phone and distribute it to users.

## Overview

There are several approaches to building and deploying your Expo React Native app:

- **EAS Build (Recommended)** - Professional cloud builds for production
- **Expo Go** - Quick testing and development
- **Local Development Build** - Development with native features

## Prerequisites

Before building your app, ensure you have:

- [ ] Expo account (free at [expo.dev](https://expo.dev))
- [ ] EAS CLI installed
- [ ] App properly configured with permissions
- [ ] All dependencies installed

## Option 1: EAS Build (Recommended for Production)

EAS Build creates standalone apps that can be installed directly on devices and distributed through app stores.

### Step 1: Install EAS CLI

```bash
npm install -g eas-cli
```

### Step 2: Login to Expo

```bash
eas login
```

Enter your Expo account credentials when prompted.

### Step 3: Initialize EAS in Your Project

```bash
eas init
```

This will create an `eas.json` configuration file in your project root.

### Step 4: Configure Build Profiles

Create or update `eas.json` in your project root:

```json
{
  "build": {
    "development": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      },
      "ios": {
        "simulator": true
      }
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      },
      "ios": {
        "simulator": false
      }
    },
    "production": {
      "distribution": "store",
      "android": {
        "buildType": "app-bundle"
      },
      "ios": {
        "simulator": false
      }
    }
  }
}
```

### Build Profile Explanations

- **development**: For internal testing with debugging capabilities
- **preview**: For testing with production-like builds (recommended for testing)
- **production**: For app store distribution

### Step 5: Build for Your Device

#### For Android:
```bash
eas build --profile preview --platform android
```

#### For iOS:
```bash
eas build --profile preview --platform ios
```

#### For Both Platforms:
```bash
eas build --profile preview --platform all
```

### Step 6: Install on Your Device

#### Android Installation:
1. Wait for build completion (5-10 minutes)
2. Download the APK from the provided link
3. Transfer APK to your Android device
4. Enable "Install from unknown sources" in device settings
5. Install the APK

#### iOS Installation:
1. Build will create a TestFlight link
2. Follow TestFlight installation instructions
3. Install via TestFlight app

## Option 2: Expo Go (Quick Testing)

For rapid development and testing without building standalone apps.

### Step 1: Install Expo Go

- **Android**: Download from [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
- **iOS**: Download from [App Store](https://apps.apple.com/app/expo-go/id982107779)

### Step 2: Start Development Server

```bash
npm run start
# or
npx expo start
```

### Step 3: Connect Your Device

- Open Expo Go app on your phone
- Scan the QR code displayed in your terminal
- Your app will load instantly with live reloading

### Limitations of Expo Go

- Cannot use custom native code
- Limited to Expo SDK APIs
- Cannot access all native device features
- Not suitable for production distribution

## Option 3: Development Build

For development with native features and custom native code.

### Step 1: Create Development Build

```bash
eas build --profile development --platform android
```

### Step 2: Install Development Build

- Download and install the development build on your device
- This replaces Expo Go for your specific app

### Step 3: Run with Development Server

```bash
npx expo start --dev-client
```

### Step 4: Connect to Development Server

- Open your installed development build
- Scan the QR code to connect to the development server

## App Store Distribution

### Building for Production

```bash
# Android
eas build --profile production --platform android

# iOS
eas build --profile production --platform ios
```

### Submitting to App Stores

#### Android (Google Play Store):
```bash
eas submit --platform android
```

#### iOS (Apple App Store):
```bash
eas submit --platform ios
```

## Configuration Requirements

### app.json Configuration

Ensure your `app.json` includes necessary permissions and plugins:

```json
{
  "expo": {
    "name": "HelloWorldMobile",
    "slug": "HelloWorldMobile",
    "version": "0.1.2",
    "plugins": [
      "expo-camera"
    ],
    "android": {
      "permissions": [
        "android.permission.CAMERA"
      ],
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "ios": {
      "infoPlist": {
        "NSCameraUsageDescription": "This app uses the camera to scan barcodes and QR codes."
      }
    }
  }
}
```

### Required Assets

Make sure you have the following assets in your project:

- `assets/icon.png` - App icon (1024x1024px)
- `assets/adaptive-icon.png` - Android adaptive icon (1024x1024px)
- `assets/splash-icon.png` - Splash screen icon
- `assets/favicon.png` - Web favicon

## Build Troubleshooting

### Common Issues

#### Build Fails with Permission Errors
```bash
# Check app.json permissions
# Ensure camera permissions are properly configured
```

#### Build Takes Too Long
- EAS builds typically take 5-15 minutes
- Check EAS build status at [expo.dev](https://expo.dev)
- Consider upgrading to EAS Build priority queue

#### APK Installation Fails
- Enable "Install from unknown sources" on Android
- Check device storage space
- Verify APK file integrity

### Build Status Commands

```bash
# Check build status
eas build:list

# View build logs
eas build:view [BUILD_ID]

# Cancel a build
eas build:cancel [BUILD_ID]
```

## Recommended Workflow

### For Development:
1. Use **Expo Go** for quick iterations
2. Switch to **Development Build** when using native features
3. Test with **EAS Build preview** before production

### For Testing:
1. Build with **preview profile**
2. Distribute APK to testers
3. Collect feedback and iterate

### For Production:
1. Build with **production profile**
2. Submit to app stores
3. Monitor app performance and user feedback

## Cost Considerations

### EAS Build Pricing (as of 2024)

- **Free Tier**: 30 builds per month
- **Production Tier**: $29/month for unlimited builds
- **Enterprise**: Custom pricing for large teams

### Alternative Build Services

- **Local builds**: Use `npx expo run:android` or `npx expo run:ios`
- **GitHub Actions**: Set up CI/CD with EAS Build
- **Other cloud services**: AppCenter, Codemagic, etc.

## Security Considerations

### API Keys and Secrets

- Use EAS Secrets for sensitive data
- Never commit API keys to version control
- Use environment variables for configuration

### App Signing

- EAS handles code signing automatically
- Android: Uses Google Play Console signing
- iOS: Uses Apple Developer Program certificates

## Performance Optimization

### Build Optimization

```json
{
  "build": {
    "production": {
      "android": {
        "buildType": "app-bundle",
        "gradle": {
          "buildVariant": "release"
        }
      }
    }
  }
}
```

### App Size Optimization

- Use `expo install` for compatible versions
- Remove unused dependencies
- Optimize images and assets
- Use app bundles instead of APKs for Android

## Monitoring and Analytics

### EAS Updates

```bash
# Configure OTA updates
eas update:configure

# Publish updates
eas update --branch production --message "Bug fixes"
```

### Crash Reporting

- Integrate with Sentry, Bugsnag, or similar services
- Monitor app performance with EAS Analytics
- Set up error tracking and user feedback

## Next Steps

After successful deployment:

1. **Monitor Performance**: Track app crashes and user engagement
2. **Collect Feedback**: Use app store reviews and analytics
3. **Iterate**: Plan next features and improvements
4. **Scale**: Consider enterprise features and advanced deployment strategies

## Additional Resources

- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [App Store Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Google Play Console](https://play.google.com/console/)
- [Expo Updates Documentation](https://docs.expo.dev/eas-update/introduction/)

---

This guide provides everything needed to build, test, and deploy your HelloWorldMobile app successfully!
