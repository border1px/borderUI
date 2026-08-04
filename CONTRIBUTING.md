# Contributing to borderUI

Thank you for helping improve borderUI. The project is being restored after a
long maintenance gap, so small, focused changes are especially valuable.

## Before opening an issue

- Search existing issues and pull requests for the same topic.
- Use the bug report or feature request form.
- Include a minimal reproduction for behavior bugs when possible.
- Do not disclose security vulnerabilities in a public issue. Follow
  [SECURITY.md](SECURITY.md) instead.

Questions about using the existing components should include the component
name, browser or WebView, operating system, Vue version, and a reproduction.

## Development workflow

1. Fork the repository and create a branch from `master`.
2. Use Node.js 22 (`nvm use`) and install dependencies with `npm ci`.
3. Make one focused change.
4. Run the checks relevant to your change:

   ```bash
   npm run lint
   npm run build
   npm run docs:build
   ```

5. Update documentation when behavior or public APIs change.
6. Open a pull request using the repository template.

If installation or a build fails, include your Node and npm versions in the
pull request so the failure can be reproduced.

## Pull request guidelines

- Keep refactors separate from fixes or dependency upgrades.
- Explain the user-visible behavior before and after the change.
- Add or update tests once the test harness is available.
- Avoid committing generated build output, dependency directories, editor
  files, or unrelated formatting changes.
- Preserve backward compatibility unless the pull request is explicitly part
  of an approved breaking-change milestone.
- Link the issue that the pull request resolves.

Maintainers may ask for a pull request to be rebased, split, or updated before
review. Stale automated dependency pull requests may be closed when a newer,
tested dependency refresh supersedes them.

## Commit messages

Use short, descriptive commit messages. Conventional Commit prefixes are
encouraged:

```text
fix(picker): prevent duplicate change events
docs: clarify local development setup
chore(deps): refresh the Vue 2 dependency baseline
```

## Community expectations

Participation in this project is governed by the
[Code of Conduct](CODE_OF_CONDUCT.md).
