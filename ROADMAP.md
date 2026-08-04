# borderUI maintenance roadmap

This roadmap describes the planned return to active maintenance. It is not a
promise of dates; priorities may change as build and security findings become
clearer.

## Milestone 1: project governance

- [x] Document the current maintenance status.
- [x] Add contribution, conduct, and security policies.
- [x] Add issue and pull request templates.
- [x] Add an open-source license, pending maintainer confirmation of rights.
- [ ] Create the public maintenance tracking issue and milestone.
- [ ] Review repository topics, description, homepage, and branch settings.

## Milestone 2: reproducible builds and CI

- [ ] Identify and document supported Node.js and package-manager versions.
- [ ] Restore application, documentation, and lint builds.
- [ ] Add GitHub Actions checks for pull requests.
- [ ] Add a small smoke-test baseline for core components.
- [ ] Enable required checks before merging.

## Milestone 3: dependency and security recovery

- [ ] Audit direct and transitive dependencies.
- [ ] Replace the historical lockfile with a tested dependency baseline.
- [ ] Triage repository security alerts.
- [ ] Close superseded historical Dependabot pull requests with context.
- [ ] Configure grouped, low-noise dependency updates.

## Milestone 4: modernization

- [ ] Define the supported component API and browser baseline.
- [ ] Plan migration from Vue 2 and Vue CLI to Vue 3 and Vite.
- [ ] Migrate the documentation toolchain.
- [ ] Add component tests and visual regression coverage.
- [ ] Publish migration guidance for existing users.

## Milestone 5: release

- [ ] Publish a maintained prerelease with release notes.
- [ ] Document compatibility, known limitations, and upgrade steps.
- [ ] Decide on a unique package name before any npm publication.
- [ ] Establish a regular triage and release cadence.

Progress should be tracked through issues and pull requests with clear
acceptance criteria. New feature work is lower priority than build,
documentation, and security recovery.
