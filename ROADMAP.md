# borderUI maintenance roadmap

This roadmap describes the planned return to active maintenance. It is not a
promise of dates; priorities may change as build and security findings become
clearer.

## Milestone 1: project governance

- [x] Document the current maintenance status.
- [x] Add contribution, conduct, and security policies.
- [x] Add issue and pull request templates.
- [x] Add an open-source license, pending maintainer confirmation of rights.
- [x] Create the public maintenance tracking issue and milestone.
- [ ] Review repository topics, description, homepage, and branch settings.

## Milestone 2: reproducible builds and CI

- [x] Identify and document supported Node.js and package-manager versions.
- [x] Restore application, documentation, and lint builds.
- [x] Add GitHub Actions checks for pull requests.
- [x] Add a small smoke-test baseline for core components.
- [ ] Enable required checks before merging.

## Milestone 3: dependency and security recovery

- [x] Audit direct and transitive dependencies.
- [x] Replace the historical lockfile with a tested dependency baseline.
- [x] Triage repository security alerts.
- [x] Close superseded historical Dependabot pull requests with context.
- [x] Configure grouped, low-noise dependency updates.

## Milestone 4: modernization

- [x] Define the supported browser baseline.
- [x] Define the supported component API.
- [ ] Plan migration from Vue 2 and Vue CLI to Vue 3 and Vite.
- [ ] Migrate VuePress 1 to a maintained documentation toolchain.
- [ ] Add component tests and visual regression coverage.
- [ ] Publish migration guidance for existing users.

## Milestone 5: release

- [x] Publish a maintained prerelease with release notes.
- [x] Document compatibility, known limitations, and upgrade steps.
- [ ] Decide on a unique package name before any npm publication.
- [ ] Establish a regular triage and release cadence.

Progress should be tracked through issues and pull requests with clear
acceptance criteria. New feature work is lower priority than build,
documentation, and security recovery.
