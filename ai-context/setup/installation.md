# Setup and Installation Guide

This guide covers the setup process for your existing React Native Hello World app with Expo and React Native Paper.

## Current Project Status

Your project is already set up with:
- ✅ Expo SDK ~54.0.18
- ✅ React Native 0.81.5
- ✅ TypeScript configuration
- ✅ New Architecture enabled
- ✅ Clean bootstrap structure

## Prerequisites

- Node.js (version 18 or higher) ✅
- npm package manager ✅
- Android Studio (for Android development)
- Android device or emulator (optional - can use Expo Go)

## Step 1: Project Already Created

Your project `HelloWorldMobile` is already initialized with:
- Expo TypeScript template
- React 19.1.0
- Modern React Native setup

## Step 2: Install React Native Paper

```bash
# Install React Native Paper (Material Design 3 components)
npm i react-native-paper

# Paper relies on react-native-safe-area-context (already included in Expo SDK)
# If your template didn't include it:
# npm i react-native-safe-area-context
```

React Native Paper provides Material You components and works seamlessly with Expo.

## Step 3: Optional - Material You Dynamic Theming

For Android 12+ dynamic colors based on user's wallpaper:

```bash
npx expo install expo-material3-theme
```

This allows you to read Android's dynamic palette in Expo.

## Step 4: Development Environment Setup

### Option A: Expo Go (Recommended for beginners)

1. Install **Expo Go** from Google Play Store on your Android device
2. Start the development server:
   ```bash
   npm run start   # or: npx expo start
   ```
3. Scan the QR code from terminal/devtools with Expo Go app

### Option B: Development Build (Closer to production)

1. Ensure Android Studio and emulator are installed
2. Create a native debug build:
   ```bash
   npx expo run:android
   ```

## Step 5: Verify Current Installation

Your current setup should already work:
```bash
npm run start
```

You should see:
- Basic "Hello World" text in the center
- Expo development server running
- QR code for device connection

## Next Steps

Once setup is complete, proceed to the [Implementation Guide](./implementation/main-guide.md) to create your Hello World app with React Native Paper components.
