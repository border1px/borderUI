# Release process

borderUI uses a lightweight branch and tag strategy appropriate for its current
maintenance-recovery phase.

## Branches

- `master` is the integration branch for reviewed maintenance and modernization
  work. Pull requests target `master` unless they are a patch for an older
  maintained release line.
- `release/<minor>` branches retain the latest verified commit for a maintained
  minor line. For example, `release/0.2` is the base for any 0.2.x patch.
- Feature, fix, dependency, and automation branches are short-lived. They are
  merged through pull requests and may be deleted after merge; keeping them is
  not part of the release history.

The source of truth for shipped versions is an annotated `v<version>` tag and
its matching GitHub Release, not the number of long-lived branches.

## Prerelease checklist

1. Create a tracking issue with acceptance criteria.
2. Update `package.json`, `package-lock.json`, the changelog, and release notes.
3. Run:

   ```bash
   npm run audit:prod
   npm run lint
   npm run test:unit
   npm run build
   npm run docs:build
   ```

4. Merge the release-preparation pull request only after CI succeeds.
5. Create an annotated tag on the verified merge commit.
6. Push the tag and create a matching GitHub prerelease or release.
7. Create or fast-forward the matching `release/<minor>` branch to the tagged
   commit.
8. Verify the default-branch CI and the public release page.

## Version policy

While the repository remains a private source/demo project, recovery builds use
SemVer prerelease identifiers such as `0.2.0-alpha.1`. A stable release requires
a package-name decision, migration guidance, and an explicit npm publication
plan. Tags must never imply that an npm package was published when it was not.
