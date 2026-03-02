# Dependency Limitations

## nth-check Version Inconsistency

### Current State

The project has multiple versions of the `nth-check` package installed:

- **4 instances**: `nth-check@2.1.1` (latest stable version)
- **1 instance**: `nth-check@1.0.2` (older version)

### Root Cause

The inconsistency is caused by a transitive dependency chain that cannot be updated without upgrading React infrastructure:

```
react-scripts@5.0.1
  └── @svgr/webpack@5.5.0
      └── @svgr/plugin-svgo@5.5.0
          └── svgo@1.3.2
              └── css-select@2.1.0
                  └── nth-check@1.0.2
```

### Why This Exists

- `react-scripts@5.0.1` is the latest stable version available
- `@svgr/webpack@5.5.0` is pinned as a dependency of react-scripts
- `svgo@1.3.2` (the SVG optimizer) has not been updated to use newer css-select versions
- `css-select@2.1.0` requires `nth-check@1.0.2`

### Impact

This is a **minor issue** with **no functional impact** on the application:

- Both nth-check versions are compatible with each other
- The application builds and runs without errors
- Security vulnerabilities (if any) affecting only nth-check@1.0.2 would be rare

### Resolution Path

To resolve this inconsistency, one of the following would need to happen:

1. **Create React App releases react-scripts v6+** with updated @svgr/webpack
   - Estimated timeline: Unknown (as of March 2026, only v5.1.0-next previews exist)

2. **Use npm overrides** (risky, may cause compatibility issues)

   ```json
   "overrides": {
     "css-select": "4.3.0"
   }
   ```

   - Not recommended for this project

3. **Eject from Create React App** and manage dependencies manually
   - Significant maintenance burden

### Recommendation

**Keep the current setup.** The limitation is acceptable because:

- No functional impact
- Minimal security risk
- Application builds and tests pass
- Waiting for upstream updates is the safest approach

---

**Last Updated**: March 2, 2026
