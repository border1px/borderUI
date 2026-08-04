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
