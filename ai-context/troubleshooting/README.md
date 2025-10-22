# Troubleshooting Guide

This section contains comprehensive troubleshooting information for React Native Hello World development with Expo and React Native Paper.

## Quick Reference

- [Common Issues](./common-issues.md) - Most frequently encountered problems and solutions

## Categories

### Setup & Installation
- Project creation issues
- Dependency installation problems
- Configuration errors

### Development Server
- Metro bundler issues
- Hot reload problems
- Network connection issues

### Android Development
- Emulator setup
- USB debugging
- Build configuration

### React Native Paper
- Component rendering issues
- Theme application problems
- Styling conflicts

### Performance
- Slow app performance
- Memory issues
- Optimization tips

## Getting Help

When troubleshooting:

1. Check the [Common Issues](./common-issues.md) guide first
2. Search Expo and React Native Paper documentation
3. Check GitHub issues for known problems
4. Join community Discord/Slack channels

## Debug Tools

Essential debugging commands and tools:

```bash
# Clear all caches and restart
npx expo start --clear

# Check project health
npx expo doctor

# Verbose logging
npx expo run:android --verbose

# View development logs
npx expo logs
```
