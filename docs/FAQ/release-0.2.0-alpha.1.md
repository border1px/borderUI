# v0.2.0-alpha.1 maintenance prerelease

Released: 2026-08-07

This is the first prerelease since borderUI resumed maintenance. It provides a
verified source and demo baseline for contributors and existing users; it is
not a stable npm package release.

## Highlights

- Restored reproducible Node.js 22 and npm builds with a committed lockfile.
- Added GitHub Actions verification for audit, lint, unit tests, application
  build, and documentation build.
- Added smoke and regression tests for Button, Switch, Cell, and CellItem.
- Fixed the Vue 2 `v-model` contract for Switch.
- Added form-safe Button defaults and keyboard-accessible CellItem behavior.
- Documented the maintained component API and browser baseline.
- Restored repository governance, security policy, contribution templates,
  Dependabot grouping, and Actions dependency updates.

## Compatibility

- Vue: 2.6.14
- Node.js: 22 or newer
- Package manager: npm 11 with the committed lockfile
- Browsers: iOS 12+, Android 8+, and the last two versions of actively
  maintained browsers

The release is verified by CI on the tagged source. Historical components that
are not included in the maintained API baseline may still have unverified edge
cases.

## Known limitations

- Vue 2 and Vue CLI 5 are end-of-life dependencies.
- The repository remains marked `private` in `package.json`; no package is
  published to npm under the `border-1px` name.
- The demo bundle still reports webpack size recommendations.
- VuePress 1 produces deprecation notices on current Node.js releases.
- A low-severity Vue 2 advisory remains; its available automated fix requires a
  breaking Vue 3 upgrade.

## Upgrade and usage

There is no npm upgrade command for this prerelease. Existing users should test
against the tagged source before adopting changes:

```bash
git fetch --tags
git checkout v0.2.0-alpha.1
npm ci
npm run test:unit
npm run build
```

Consumers copying components from an older revision should review the
[maintained component API](component-api.md), especially the new Switch input
event, Button `nativeType`, and CellItem keyboard behavior.

## Next steps

The `release/0.2` branch receives focused fixes for this prerelease line.
Modernization work continues on `master`, including Vue 3/Vite planning and a
maintained documentation toolchain.
