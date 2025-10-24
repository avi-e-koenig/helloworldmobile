# Build Guide - Creating Standalone APK

This guide documents the complete process for building a standalone APK from the HelloWorldMobile React Native project using Android Studio and Gradle.

## Prerequisites

### Required Software

- **Java 17+** (Required for React Native 0.81.5)
- **Android Studio** (with Android SDK)
- **Node.js** (22.21.0 LTS or compatible)
- **Git Bash** (for Windows command line)

### System Requirements

- Windows 10/11
- Minimum 8GB RAM (16GB recommended for large builds)
- At least 10GB free disk space

## Step-by-Step Build Process

### 1. Install Java 17+

If you don't have Java 17+, install it using Windows Package Manager:

```bash
winget install Microsoft.OpenJDK.17
```

Verify installation:

```bash
"C:/Program Files/Microsoft/jdk-17.0.16.8-hotspot/bin/java" -version
```

### 2. Set Up Environment

Navigate to the project directory:

```bash
cd C:\workspace\HelloWorldMobile\android
```

Set Java PATH for the current session:

```bash
export PATH="/c/Program Files/Microsoft/jdk-17.0.16.8-hotspot/bin:$PATH"
```

Verify Java is active:

```bash
java -version
```

### 3. Clean Previous Builds

Clean any previous build artifacts:

```bash
./gradlew clean
```

### 4. Build Release APK

Build the release APK:

```bash
./gradlew assembleRelease
```

This process will:

- Download and install required Android SDK components
- Bundle JavaScript and assets
- Compile native Android code
- Generate the final APK

### 5. Locate Generated APK

The APK will be generated at:

```
android/app/build/outputs/apk/release/app-release.apk
```

Copy to project root for easy access:

```bash
cp ./app/build/outputs/apk/release/app-release.apk ../HelloWorldMobile-release.apk
```

## Custom Output Directory Configuration

### Method 1: Copy After Build

```bash
./gradlew assembleRelease && mkdir -p ../dist/apk && cp app/build/outputs/apk/release/app-release.apk ../dist/apk/HelloWorldMobile-release-$(date +%Y%m%d-%H%M%S).apk
```

### Method 2: Using Custom Build Script

```bash
# Build with default output directory (dist/apk)
./build-apk.sh

# Build with custom output directory
./build-apk.sh custom-output-dir
```

### Method 3: Using Gradle Properties

The `android/gradle.properties` file includes:

```properties
# Custom output directory configuration
android.output.dir=../dist/apk
```

### Method 4: Using Command Line Parameters

```bash
./gradlew assembleRelease -Pandroid.output.dir=../dist/apk
```

## Build Configuration

### Current Build Settings

**App Configuration:**

- Package Name: `com.darkmift.pocbarcodescanner`
- Version: 0.1.2
- Min SDK: 24 (Android 7.0)
- Target SDK: 36 (Android 15)

**Signing Configuration:**

- Currently using debug keystore
- Suitable for testing and development
- **NOT suitable for production distribution**

**Build Optimizations:**

- Minification: Enabled
- Resource shrinking: Enabled
- PNG crunching: Enabled

## APK Details

### File Information

- **File Size**: ~97.8 MB
- **Architecture**: Universal (supports multiple CPU architectures)
- **Permissions**: Camera access, Record Audio
- **Features**: Barcode scanning, Navigation, Material Design UI

### Included Dependencies

- React Native 0.81.5
- Expo SDK 54.0.18
- React Native Paper 5.14.5
- Expo Camera 17.0.8
- React Navigation 7.x

## Troubleshooting

### Common Issues

#### Java Version Mismatch

**Error**: `No Java compiler found, please ensure you are running Gradle with a JDK`

**Solution**:

1. Install Java 17+ using the command above
2. Set the correct PATH as shown in step 2

#### Memory Issues

**Error**: `The Daemon will expire after the build after running out of JVM Metaspace`

**Solution**: Increase memory allocation in `gradle.properties`:

```properties
org.gradle.jvmargs=-Xmx4g -XX:MaxMetaspaceSize=1g
```

#### Build Timeout

**Error**: Build process hangs or times out

**Solution**:

1. Ensure stable internet connection
2. Close other resource-intensive applications
3. Run build during off-peak hours

### Build Commands Reference

```bash
# Clean build
./gradlew clean

# Build debug APK
./gradlew assembleDebug

# Build release APK
./gradlew assembleRelease

# Build and install on connected device
./gradlew installRelease

# Check build tasks
./gradlew tasks

# Custom output directory methods
./gradlew assembleRelease && mkdir -p ../dist/apk && cp app/build/outputs/apk/release/app-release.apk ../dist/apk/HelloWorldMobile-release-$(date +%Y%m%d-%H%M%S).apk

# Using custom build script
./build-apk.sh [output-dir]
```

## Production Build Considerations

### For Google Play Store Distribution

1. **Generate Release Keystore**:

```bash
keytool -genkey -v -keystore release-key.keystore -alias release-key -keyalg RSA -keysize 2048 -validity 10000
```

2. **Update build.gradle** with release signing config:

```gradle
signingConfigs {
    release {
        storeFile file('release-key.keystore')
        storePassword 'your-store-password'
        keyAlias 'release-key'
        keyPassword 'your-key-password'
    }
}
```

3. **Update buildTypes**:

```gradle
buildTypes {
    release {
        signingConfig signingConfigs.release
        minifyEnabled true
        proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
    }
}
```

### APK Size Optimization

- Enable R8/ProGuard for code shrinking
- Use WebP images instead of PNG
- Remove unused resources
- Consider using App Bundle (AAB) format for Play Store

## Testing the APK

### Installation on Device

1. **Enable Unknown Sources**:
   - Go to Settings > Security > Unknown Sources
   - Enable installation from unknown sources

2. **Transfer APK**:
   - Copy APK to device via USB, email, or cloud storage

3. **Install**:
   - Tap the APK file to install
   - Follow installation prompts

### Testing Checklist

- [ ] App launches successfully
- [ ] Navigation works correctly
- [ ] Barcode scanner functions properly
- [ ] Camera permissions are granted
- [ ] Permission request dialog appears when needed
- [ ] Permission request button works correctly
- [ ] UI renders correctly on different screen sizes
- [ ] App handles orientation changes
- [ ] No crashes during normal usage

## Build Performance Tips

### Speed Up Builds

1. **Use Gradle Daemon** (enabled by default)
2. **Enable Build Cache**:

```properties
org.gradle.caching=true
```

3. **Increase Memory Allocation**:

```properties
org.gradle.jvmargs=-Xmx4g -XX:MaxMetaspaceSize=1g
```

4. **Use Parallel Builds**:

```properties
org.gradle.parallel=true
```

### Build Environment Optimization

- Use SSD storage for faster I/O
- Ensure adequate RAM (16GB+ recommended)
- Close unnecessary applications during build
- Use wired internet connection for faster downloads

## Maintenance

### Regular Tasks

1. **Update Dependencies**: Keep React Native, Expo, and other dependencies updated
2. **Clean Builds**: Regularly run `./gradlew clean` to remove build artifacts
3. **Monitor Build Times**: Track build performance and optimize as needed
4. **Update Documentation**: Keep this guide updated with any process changes

### Version Control

- Commit build configuration changes
- Tag releases with version numbers
- Document any build process modifications
- Keep build scripts in version control

## Support and Resources

### Documentation Links

- [React Native Build Documentation](https://reactnative.dev/docs/signed-apk-android)
- [Expo Build Documentation](https://docs.expo.dev/build/setup/)
- [Android Gradle Plugin Documentation](https://developer.android.com/studio/build)

### Project-Specific Resources

- Main project directory: `C:\workspace\HelloWorldMobile`
- Android configuration: `android/` directory
- Build outputs: `android/app/build/outputs/apk/`

---

**Last Updated**: October 24, 2024
**Build Environment**: Windows 10/11, Java 17, Android SDK 36
**Project Version**: 0.1.2
