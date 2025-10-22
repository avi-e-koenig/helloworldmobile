# 📋 MAINTENANCE CHECKLIST - Quick Reference

## **🚨 Immediate Actions (When Making Changes)**

### **After ANY Project Change:**
- [ ] Update `AI-CONTEXT-INDEX.md` status
- [ ] Update `TECHNICAL-REFERENCE.md` details
- [ ] Test all commands in `STARTUP-GUIDE.md`
- [ ] Verify `TROUBLESHOOTING-GUIDE.md` accuracy
- [ ] Update `SEARCH-INDEX.md` keywords

## **📁 File-Specific Updates**

### **Dependencies Changed:**
- [ ] `package.json` (automatic)
- [ ] `TECHNICAL-REFERENCE.md` dependencies section
- [ ] `AI-CONTEXT-INDEX.md` tech stack
- [ ] `SEARCH-INDEX.md` keywords

### **Scripts Changed:**
- [ ] `package.json` scripts (automatic)
- [ ] `STARTUP-GUIDE.md` commands
- [ ] `TECHNICAL-REFERENCE.md` scripts section
- [ ] VS Code launch configurations

### **App.tsx Modified:**
- [ ] `App.tsx` (automatic)
- [ ] `TECHNICAL-REFERENCE.md` implementation
- [ ] `AI-CONTEXT-INDEX.md` current implementation
- [ ] Code examples updated

### **Issues Fixed:**
- [ ] `TROUBLESHOOTING-GUIDE.md` updated
- [ ] `AI-CONTEXT-INDEX.md` fixes applied
- [ ] `SEARCH-INDEX.md` issues fixed

## **✅ Quality Assurance**

### **Before Session End:**
- [ ] All core files synchronized
- [ ] Commands tested and working
- [ ] Technical details accurate
- [ ] AI context complete
- [ ] Search optimization maintained

## **🔍 Quick Verification Commands**

```bash
# Test primary startup
npm run web

# Test cleanup
npm run cleanup

# Verify dependencies
npm list react-native-paper

# Check processes
netstat -ano | findstr :3001
```

## **📊 Status Indicators**

### **Current Status:**
- ✅ Project: Production Ready
- ✅ Node.js: 22.21.0 LTS
- ✅ React Native: 0.81.5
- ✅ Expo SDK: 54.0.18
- ✅ React Native Paper: 5.14.5

### **Last Updated:** Current Session
### **Context Version:** 1.0

---

**🎯 Use this checklist to ensure proper maintenance of the ai-context folder for optimal AI tool access.**
