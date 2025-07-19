# 🤝 Contributing to Claude Desktop + Notion

## 🎯 How to Help

### 🐛 Report Bugs
1. Check [existing issues](https://github.com/your-org/claude-desktop-notion/issues)
2. Use our [bug report template](https://github.com/your-org/claude-desktop-notion/issues/new/choose)
3. Include your config, error logs, and reproduction steps

### 💡 Submit Fixes
1. Fork the repository
2. Create a feature branch: `git checkout -b fix/relation-properties`
3. Add your fix to the appropriate `/fixes/` directory
4. Include documentation and test cases
5. Submit a pull request

### 📝 Improve Documentation
- Update setup guides with new findings
- Add workflow examples
- Improve troubleshooting docs

## 🏗️ Project Structure

### `/fixes/` Directory
Each fix should include:
- `README.md` - Problem description & solution
- `patch.js` or `patch.py` - The actual fix code
- `test.js` - Test cases
- `install.sh` - Installation script (if needed)

### Fix Template
```
fixes/mcp-patches/your-fix-name/
├── README.md           # Problem & solution description
├── fix.js              # The actual fix
├── test.js             # Test the fix works
├── install.sh          # How to apply the fix
└── examples/           # Before/after examples
    ├── before.json
    └── after.json
```

## 🧪 Testing Your Fix
1. Test with your own setup
2. Include test cases in your PR
3. Verify it doesn't break existing functionality
4. Document any dependencies or requirements

## 📋 Pull Request Checklist
- [ ] Fix is in the correct `/fixes/` subdirectory
- [ ] README.md explains the problem and solution
- [ ] Test cases are included
- [ ] Documentation is updated
- [ ] No breaking changes to existing fixes
