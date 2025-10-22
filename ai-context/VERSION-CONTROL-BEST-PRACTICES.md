# 📋 Version Control Best Practices

## 🎯 Overview
This document outlines best practices for version control in our React Native project, covering Git workflow, branching strategies, commit conventions, and collaboration guidelines.

## 🌿 Branching Strategy

### 📋 Branch Types
- **`main`** - Production-ready code, stable releases
- **`staging`** - Pre-production testing, integration branch
- **`feature/*`** - New features (e.g., `feature/home-navigation`)
- **`bugfix/*`** - Bug fixes (e.g., `bugfix/navigation-issue`)
- **`hotfix/*`** - Critical production fixes (e.g., `hotfix/security-patch`)

### 🔄 Branch Flow
```
main ← staging ← feature/home-navigation
  ↑       ↑
  └── hotfix/security-patch
```

### 📋 Branch Naming Conventions
- **Features**: `feature/description` (e.g., `feature/user-authentication`)
- **Bug Fixes**: `bugfix/description` (e.g., `bugfix/login-error`)
- **Hotfixes**: `hotfix/description` (e.g., `hotfix/critical-bug`)
- **Refactoring**: `refactor/description` (e.g., `refactor/component-structure`)

## 📝 Commit Conventions

### 🎯 Commit Message Format
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### 📋 Commit Types
- **`feat`** - New feature
- **`fix`** - Bug fix
- **`docs`** - Documentation changes
- **`style`** - Code style changes (formatting, etc.)
- **`refactor`** - Code refactoring
- **`test`** - Adding or updating tests
- **`chore`** - Maintenance tasks
- **`perf`** - Performance improvements
- **`ci`** - CI/CD changes
- **`build`** - Build system changes

### 📋 Examples
```bash
feat(home): add bottom navigation with Material Design
fix(navigation): resolve tab switching issue
docs(api): update authentication endpoints
style(components): format code with prettier
refactor(screens): split components into separate files
test(home): add unit tests for HomeScreen
chore(deps): update React Native Paper to v5.14.5
```

## 🔄 Workflow Process

### 📋 Feature Development
1. **Create Feature Branch**
   ```bash
   git checkout staging
   git pull origin staging
   git checkout -b feature/new-feature
   ```

2. **Develop Feature**
   - Make small, focused commits
   - Write descriptive commit messages
   - Test thoroughly

3. **Push and Create PR**
   ```bash
   git push origin feature/new-feature
   # Create PR to staging branch
   ```

4. **Code Review Process**
   - Request reviews from team members
   - Address feedback and suggestions
   - Ensure CI/CD passes

5. **Merge to Staging**
   - Merge PR after approval
   - Delete feature branch
   - Test on staging environment

### 📋 Bug Fix Workflow
1. **Create Bug Fix Branch**
   ```bash
   git checkout staging
   git checkout -b bugfix/issue-description
   ```

2. **Fix and Test**
   - Implement fix
   - Add tests if needed
   - Verify fix works

3. **Create PR to Staging**
   - Link to issue/ticket
   - Describe the fix
   - Include testing steps

### 📋 Hotfix Workflow
1. **Create Hotfix Branch from Main**
   ```bash
   git checkout main
   git checkout -b hotfix/critical-issue
   ```

2. **Fix and Test**
   - Implement critical fix
   - Test thoroughly
   - Ensure no regressions

3. **Merge to Both Branches**
   ```bash
   # Merge to main
   git checkout main
   git merge hotfix/critical-issue
   
   # Merge to staging
   git checkout staging
   git merge hotfix/critical-issue
   ```

## 📋 File Management

### 🎯 .gitignore Best Practices
```gitignore
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build outputs
dist/
build/
.expo/
.expo-shared/

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/settings.json
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
*.log
logs/

# Runtime data
pids/
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/
```

### 📋 File Organization
- **Keep files focused** - One responsibility per file
- **Use descriptive names** - Clear, meaningful file names
- **Organize by feature** - Group related files together
- **Maintain consistency** - Follow established patterns

## 🔍 Code Review Guidelines

### 📋 Review Checklist
- **Functionality** - Does the code work as intended?
- **Code Quality** - Is the code clean and maintainable?
- **Testing** - Are there adequate tests?
- **Documentation** - Is documentation updated?
- **Performance** - Are there any performance concerns?
- **Security** - Are there any security issues?
- **Standards** - Does it follow project conventions?

### 📋 Review Process
1. **Self-Review** - Review your own code first
2. **Request Review** - Ask for specific reviewers
3. **Address Feedback** - Respond to all comments
4. **Update Documentation** - Keep docs in sync
5. **Final Approval** - Get approval before merging

## 🚀 Release Management

### 📋 Version Numbering Strategy

#### 🎯 Semantic Versioning (SemVer)
- **Format**: `MAJOR.MINOR.PATCH` (e.g., `1.2.3`)
- **Starting Version**: `0.0.2` (current project baseline)

#### 📋 Version Number Definitions
- **MAJOR** (`X.0.0`) - Breaking changes, incompatible API changes
- **MINOR** (`0.X.0`) - New features, backward compatible additions
- **PATCH** (`0.0.X`) - Bug fixes, backward compatible fixes

#### 🔢 Version Increment Rules

##### **PATCH Version (0.0.X)**
- **Bug fixes** that don't add new features
- **Security patches** and vulnerability fixes
- **Performance improvements** without feature changes
- **Documentation updates** and minor corrections
- **Dependency updates** that don't affect functionality

**Examples:**
- `0.0.2` → `0.0.3` (Fixed navigation bug)
- `0.0.3` → `0.0.4` (Updated React Native Paper dependency)
- `0.0.4` → `0.0.5` (Fixed Material Design theme issue)

##### **MINOR Version (0.X.0)**
- **New features** that are backward compatible
- **New screens** or components
- **Enhanced functionality** without breaking existing features
- **New navigation** or user interface improvements
- **New integrations** or third-party services

**Examples:**
- `0.0.2` → `0.1.0` (Added home navigation feature)
- `0.1.0` → `0.2.0` (Added user authentication)
- `0.2.0` → `0.3.0` (Added QR code scanning functionality)

##### **MAJOR Version (X.0.0)**
- **Breaking changes** that require user action
- **API changes** that break existing functionality
- **Architecture changes** that affect app behavior
- **Removal of deprecated features**
- **Significant UI/UX overhauls**

**Examples:**
- `0.3.0` → `1.0.0` (First stable release)
- `1.0.0` → `2.0.0` (Complete UI redesign)
- `2.0.0` → `3.0.0` (New architecture implementation)

#### 📋 Version Numbering Best Practices

##### **✅ Do's**
- **Increment consistently** - Every release gets a new version
- **Use semantic versioning** - Follow MAJOR.MINOR.PATCH format
- **Document changes** - Keep detailed changelog
- **Test thoroughly** - Verify version works before release
- **Update package.json** - Keep version numbers synchronized
- **Tag releases** - Create Git tags for each version
- **Communicate changes** - Notify team of version updates

##### **❌ Don'ts**
- **Don't skip versions** - Always increment from previous version
- **Don't use arbitrary numbers** - Follow semantic versioning rules
- **Don't forget to update** - Keep all version references in sync
- **Don't release untested** - Always test before versioning
- **Don't break semantic rules** - Follow MAJOR.MINOR.PATCH logic

#### 🔄 Version Update Process

##### **1. Determine Version Type**
```bash
# Ask yourself:
# - Does this break existing functionality? → MAJOR
# - Does this add new features? → MINOR  
# - Does this only fix bugs? → PATCH
```

##### **2. Update Version Numbers**
```bash
# Update package.json
{
  "name": "helloworldmobile",
  "version": "0.1.0",  # Update this
  "description": "Hello World Mobile App"
}

# Update app.json
{
  "expo": {
    "name": "HelloWorldMobile",
    "slug": "HelloWorldMobile", 
    "version": "0.1.0",  # Update this
    "orientation": "portrait"
  }
}
```

##### **3. Create Version Tag**
```bash
# Create and push tag
git tag v0.1.0
git push origin v0.1.0

# Or create tag with message
git tag -a v0.1.0 -m "Release version 0.1.0: Added home navigation"
git push origin v0.1.0
```

##### **4. Update Changelog**
```markdown
# Changelog

## [0.1.0] - 2024-01-15
### Added
- Home screen with Material Design 3 components
- Bottom navigation with Home and Scan tabs
- Scan screen with placeholder functionality
- New project structure with folder-based organization

### Changed
- Updated dependencies for navigation
- Improved development conventions

## [0.0.2] - 2024-01-14
### Added
- Initial Material Design 3 implementation
- Basic Hello World functionality
```

#### 📋 Version Numbering Examples

##### **Feature Development Cycle**
```bash
# Starting version
0.0.2

# Bug fix
0.0.2 → 0.0.3 (Fixed navigation issue)

# New feature
0.0.3 → 0.1.0 (Added home navigation)

# Another bug fix
0.1.0 → 0.1.1 (Fixed Material Design theme)

# Another new feature
0.1.1 → 0.2.0 (Added user authentication)

# Multiple bug fixes
0.2.0 → 0.2.1 (Fixed login bug)
0.2.1 → 0.2.2 (Fixed navigation bug)
0.2.2 → 0.2.3 (Fixed theme issue)

# Major feature
0.2.3 → 0.3.0 (Added QR code scanning)

# Breaking change
0.3.0 → 1.0.0 (First stable release)
```

##### **Real-World Scenarios**
```bash
# Scenario 1: Bug Fix
Current: 0.0.2
Issue: Navigation not working properly
Solution: Fix navigation bug
New Version: 0.0.3

# Scenario 2: New Feature
Current: 0.0.3
Feature: Add home screen with navigation
Solution: Implement home navigation
New Version: 0.1.0

# Scenario 3: Security Fix
Current: 0.1.0
Issue: Security vulnerability in dependencies
Solution: Update dependencies
New Version: 0.1.1

# Scenario 4: Major Feature
Current: 0.1.1
Feature: Add user authentication system
Solution: Implement auth with login/logout
New Version: 0.2.0

# Scenario 5: Breaking Change
Current: 0.2.0
Change: Remove deprecated API endpoints
Solution: Update to new API structure
New Version: 1.0.0
```

#### 🔧 Version Management Tools

##### **Automated Versioning**
```bash
# Using npm version command
npm version patch    # 0.0.2 → 0.0.3
npm version minor    # 0.0.3 → 0.1.0
npm version major    # 0.1.0 → 1.0.0

# With commit message
npm version patch -m "Fixed navigation bug"
npm version minor -m "Added home navigation feature"
npm version major -m "First stable release"
```

##### **Version Validation**
```bash
# Check current version
npm version

# Validate version format
node -e "console.log(require('./package.json').version)"

# Check if version exists
git tag | grep v0.1.0
```

#### 📋 Version Numbering Checklist

##### **Before Each Release:**
- [ ] **Determine version type** (PATCH/MINOR/MAJOR)
- [ ] **Update package.json** version
- [ ] **Update app.json** version
- [ ] **Update changelog** with changes
- [ ] **Test thoroughly** before release
- [ ] **Create Git tag** with version number
- [ ] **Push tag** to remote repository
- [ ] **Notify team** of version update
- [ ] **Document changes** in release notes
- [ ] **Verify deployment** works correctly

##### **Version Numbering Rules:**
- [ ] **Every release** gets a new version number
- [ ] **Follow semantic versioning** (MAJOR.MINOR.PATCH)
- [ ] **Increment consistently** from previous version
- [ ] **Update all references** to version numbers
- [ ] **Test version** before releasing
- [ ] **Tag releases** in Git
- [ ] **Document changes** in changelog
- [ ] **Communicate updates** to team

### 📋 Release Process
1. **Create Release Branch**
   ```bash
   git checkout staging
   git checkout -b release/v1.2.0
   ```

2. **Prepare Release**
   - Update version numbers
   - Update changelog
   - Test thoroughly

3. **Merge to Main**
   ```bash
   git checkout main
   git merge release/v1.2.0
   git tag v1.2.0
   ```

4. **Deploy and Monitor**
   - Deploy to production
   - Monitor for issues
   - Create hotfix if needed

## 📋 Collaboration Guidelines

### 🎯 Team Communication
- **Use descriptive PR titles** - Clear, concise descriptions
- **Link to issues** - Reference related tickets
- **Provide context** - Explain why changes were made
- **Ask questions** - Don't hesitate to ask for clarification

### 📋 Conflict Resolution
- **Communicate early** - Discuss conflicts with team
- **Use merge tools** - Leverage Git merge tools
- **Test thoroughly** - Verify resolution works
- **Document decisions** - Record important decisions

## 🔧 Git Configuration

### 📋 Recommended Settings
```bash
# Set up user information
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set up default branch
git config --global init.defaultBranch main

# Set up push behavior
git config --global push.default simple

# Set up pull behavior
git config --global pull.rebase false

# Set up merge tool
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'
```

### 📋 Useful Aliases
```bash
# Add useful aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
```

## 📋 Best Practices Summary

### ✅ Do's
- **Use descriptive commit messages**
- **Keep commits small and focused**
- **Test before committing**
- **Review code thoroughly**
- **Keep branches up to date**
- **Use meaningful branch names**
- **Document important decisions**
- **Follow established conventions**

### ❌ Don'ts
- **Don't commit directly to main**
- **Don't commit broken code**
- **Don't ignore code reviews**
- **Don't use vague commit messages**
- **Don't commit sensitive information**
- **Don't force push to shared branches**
- **Don't ignore merge conflicts**
- **Don't skip testing**

## 📚 Resources

### 🔗 Useful Links
- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [Git Best Practices](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows)

### 📋 Tools
- **Git GUI**: VS Code, SourceTree, GitHub Desktop
- **Merge Tools**: VS Code, Beyond Compare, P4Merge
- **CI/CD**: GitHub Actions, GitLab CI, Jenkins
- **Code Review**: GitHub, GitLab, Bitbucket

---

**🎯 Following these practices ensures clean, maintainable, and collaborative development workflow.**
