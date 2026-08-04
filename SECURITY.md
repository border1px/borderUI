# Security Policy

## Supported versions

borderUI is currently in a maintenance-recovery phase. No released version is
receiving formal security support yet.

| Version | Supported |
| --- | --- |
| Unreleased `master` | Best effort |
| Historical snapshots | No |

This table will be updated after the first maintained release.

## Reporting a vulnerability

Please do not open a public issue for a suspected vulnerability.

Use GitHub's private vulnerability reporting flow:

<https://github.com/border1px/borderUI/security/advisories/new>

Include:

- the affected component or file;
- steps to reproduce;
- the security impact;
- any suggested mitigation;
- whether the report may be publicly credited.

You should receive an acknowledgement within seven days. Timing for validation
and a fix depends on severity and the maintenance work required. Details will
remain private until a fix or coordinated disclosure plan is ready.

Dependency alerts and automated update pull requests are triaged against the
current tested dependency graph. Historical lockfile-only updates may be closed
when a newer dependency refresh supersedes them.

## Current dependency posture

The August 2026 recovery baseline has one low-severity production finding in
Vue 2.6.14. npm identifies Vue 3 as the available fix, so this remains visible
until the planned Vue 3 migration.

The legacy Vue CLI and VuePress 1 development toolchain still includes
high- and critical-severity transitive findings. These packages are used to
build the demo and documentation rather than shipped as production
dependencies. CI rejects any new high- or critical-severity production finding,
and replacing the legacy toolchain is tracked in the maintenance roadmap.
