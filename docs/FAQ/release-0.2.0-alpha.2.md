# v0.2.0-alpha.2 form controls prerelease

Released: 2026-08-08

This maintenance prerelease builds on the reproducible baseline established in
`v0.2.0-alpha.1`. It focuses on making Checkbox and Radio usable as native,
controlled form controls while preserving the existing Vue 2 component API.
It is a verified source and demo release, not an npm publication.

## Highlights

- Restored the native `input[type="checkbox"]` previously disabled by the
  component template.
- Added a native `input[type="radio"]` to Radio.
- Restored keyboard focus, Space activation, disabled propagation, and
  assistive-technology semantics.
- Fixed standalone Radio selection so checked state is based on
  `value === label`, rather than model truthiness.
- Preserved controlled Vue 2 `v-model` updates and added explicit standalone
  `change` events.
- Preserved Checkbox custom `trueValue` and `falseValue` values.
- Made CheckboxGroup reject duplicate or over-limit selections without leaving
  the native input in a stale visual state; a numeric `max` of `0` is now
  handled correctly.
- Added group roles, accessible labels, and a shared native name for grouped
  radios.
- Expanded the maintained API baseline from four to six component families and
  increased the unit suite from 12 to 17 tests.

The implementation was reviewed and verified through [pull request #49](https://github.com/border1px/borderUI/pull/49).

## Compatibility

- Vue: 2.6.14
- Node.js: 22 or newer
- Package manager: npm 11 with the committed lockfile
- Browsers: iOS 12+, Android 8+, and the last two versions of actively
  maintained browsers

The tagged source passes the production dependency gate, lint, all 17 unit
tests, the application build, and the documentation build.

## Known limitations

- Vue 2, Vue CLI 5, and VuePress 1 are end-of-life dependencies.
- The repository remains marked `private` in `package.json`; no package is
  published to npm under the `border-1px` name.
- The demo bundle still reports webpack size recommendations.
- VuePress 1 produces deprecation notices on current Node.js releases.
- A low-severity Vue 2 ReDoS advisory remains. The available automated fix
  requires a breaking Vue 3 upgrade and is therefore outside this prerelease.
- Historical components outside the maintained API baseline may still contain
  unverified edge cases.

## Upgrade and usage

There is no npm upgrade command for this prerelease. Test against the tagged
source instead:

```bash
git fetch --tags
git checkout v0.2.0-alpha.2
npm ci
npm run test:unit
npm run build
```

Checkbox and Radio users should review the updated
[component API baseline](component-api.md), [Checkbox documentation](../Comp/checkbox.md),
and [Radio documentation](../Comp/radio.md). The restored inputs improve native
behavior without changing the component names or Vue 2 `v-model` event.

## Next steps

The `release/0.2` branch follows the latest verified 0.2 prerelease. Further
work on `master` will continue expanding regression coverage and preparing the
Vue 3/Vite and documentation-toolchain migrations.
