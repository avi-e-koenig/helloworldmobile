#!/bin/bash

# Build APK with custom output directory
# Usage: ./build-apk.sh [output-dir]

set -e

# Default output directory
OUTPUT_DIR=${1:-"dist/apk"}

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Build the APK
echo "Building APK..."
cd android
./gradlew assembleRelease

# Copy APK to custom directory with timestamp
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
APK_NAME="HelloWorldMobile-release-${TIMESTAMP}.apk"

echo "Copying APK to $OUTPUT_DIR/$APK_NAME..."
cp app/build/outputs/apk/release/app-release.apk "../$OUTPUT_DIR/$APK_NAME"

echo "✅ APK built successfully!"
echo "📁 Location: $OUTPUT_DIR/$APK_NAME"
echo "📊 Size: $(ls -lh "../$OUTPUT_DIR/$APK_NAME" | awk '{print $5}')"

cd ..
