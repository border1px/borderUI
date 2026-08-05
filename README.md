<h1 align="center">borderUI</h1>

<p align="center">A mobile UI component collection built with Vue.</p>

<p align="center">
  <a href="https://github.com/border1px/borderUI/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-blue.svg">
  </a>
  <a href="https://github.com/border1px/borderUI/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/border1px/borderUI">
  </a>
  <a href="https://github.com/border1px/borderUI/pulls">
    <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/border1px/borderUI">
  </a>
  <a href="https://github.com/border1px/borderUI/actions/workflows/ci.yml">
    <img alt="CI status" src="https://github.com/border1px/borderUI/actions/workflows/ci.yml/badge.svg">
  </a>
</p>

<p align="center">
  <img src="https://github.com/border1px/borderUI/blob/master/preview.png?raw=true" alt="borderUI preview" width="300">
</p>

## Project status

> **Maintenance has resumed.** This repository was originally developed in 2019
> and remains on the end-of-life Vue 2 line. The compatibility baseline uses
> Vue 2.6.14, Vue CLI 5, Node.js 22, and automated CI while a Vue 3 and
> Vite migration is planned.

The current repository is a source and demonstration project. It is marked as
private in `package.json` and is **not published as an installable npm package**.
Do not confuse it with the unrelated `border-1px` package on npm.

- [Documentation](https://border1px.github.io/border-ui/docs/FAQ/introduction.html)
- [Interactive demo](https://border1px.github.io/border-ui/)
- [Maintenance roadmap](ROADMAP.md)
- [How to contribute](CONTRIBUTING.md)

## Components

borderUI contains mobile-oriented components and examples, including:

- Action Sheet
- Button and Button Group
- Cell
- Checkbox and Radio
- Debounce
- Dialog, Alert, Confirm, Loading, Notify, and Toast
- Icon
- Navbar and Tabbar
- Picker
- Popup
- Swipe
- Switch
- Table
- Timeline and Toolbar
- Uploader

Some undocumented or experimental components may also exist under
`src/components`. Their APIs should be treated as unstable until the maintenance
milestone is complete.

## Local development

Use Node.js 22, as recorded in `.nvmrc`, and the npm lockfile committed to the
repository.

```bash
npm ci
npm run serve
```

The development server is available at <http://localhost:8080> by default.

Other scripts:

```bash
npm run lint        # lint source files
npm run test:unit   # run core component smoke tests
npm run build       # build the demo application
npm run audit:prod  # reject high/critical production dependency findings
npm run docs:dev    # start the documentation site
npm run docs:build  # build the documentation site
```

## Supported environments

The maintenance build targets iOS 12+, Android 8+, and the last two versions of
actively maintained browsers. Internet Explorer is not supported. Embedded
WebViews should use an engine equivalent to those platform versions.

This is the compilation and maintenance baseline recorded in
`.browserslistrc`, not a guarantee that every historical or experimental
component has been manually verified on every device.

## Repository structure

```text
src/components/  Component source
src/style/       Shared styles and icon font
src/views/       Component demonstrations
tests/unit/      Core component smoke tests
docs/            VuePress documentation
public/          Static demo assets
```

## Contributing

Bug reports, focused improvements, documentation fixes, and migration help are
welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue
or pull request and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

Please report suspected vulnerabilities privately according to
[SECURITY.md](SECURITY.md).

## License

Licensed under the [MIT License](LICENSE).
