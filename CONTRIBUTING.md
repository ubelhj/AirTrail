# Contributing to AirTrail

We would love your help! We want to make contributing to this project as easy and transparent as possible.

## Contribution recogniton

We plan to use [All Contributors](https://allcontributors.org/docs/en/specification) specification to handle
recognitions.

## Summary of the contribution flow

The following is a summary of the ideal contribution flow. Please, note that Pull Requests can also be rejected by the
maintainers when appropriate.

```
    ┌───────────────────────┐
    │                       │
    │    Open an issue      │
    │  (a bug report or a   │
    │   feature request)    │
    │                       │
    └───────────────────────┘
               ⇩
    ┌───────────────────────┐
    │                       │
    │  Open a Pull Request  │
    │   (only after issue   │
    │     is approved)      │
    │                       │
    └───────────────────────┘
               ⇩
    ┌───────────────────────┐
    │                       │
    │   Your changes will   │
    │     be merged and     │
    │ published on the next │
    │        release        │
    │                       │
    └───────────────────────┘
```

## Code of Conduct

AirTrail has adopted a Code of Conduct that we expect project participants to adhere to.
Please [read the full text](CODE_OF_CONDUCT.md) so that you can understand what sort of behaviour is expected.

## Our Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## Code Style

- 2 spaces for indentation.
- 80 character line length.
- Run `bun run lint` to check for linting errors.
- Run `bun run format` to format the code.

## Issues

[Open an issue](https://github.com/JohanOhly/AirTrail/issues/new) **only** if you want to report a bug or a feature.
Don't open issues for questions or support, instead join
our [GitHub discussions](https://github.com/JohanOhly/AirTrail/discussions) and ask there.

## Bug Reports and Feature Requests

Please use our issues templates that provide you with hints on what information we need from you to help you out.

## Pull Requests

**Please, make sure you open an issue before starting with a Pull Request, unless it's a typo or a really obvious error.
** Pull requests are the best way to propose changes to the specification. Take time to check the current working branch
for the repository you want to contribute on before working :wink:

## Conventional commits

Our repositories follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) specification.

Pull requests should have a title that follows the specification, otherwise, merging is blocked. If you are not familiar
with the specification simply ask maintainers to modify. You can also use this cheatsheet if you want:

- `fix: ` prefix in the title indicates that PR is a bug fix.
- `feat: ` prefix in the title indicates that PR is a feature.
- `docs: ` prefix in the title indicates that PR is only related to the documentation.
- `chore: ` prefix in the title indicates that PR is only related to cleanup in the project.
- `test: ` prefix in the title indicates that PR is only related to tests.
- `refactor: ` prefix in the title indicates that PR is only related to refactoring.

Prefix that follows specification is not enough though. Remember that the title must be clear and descriptive with usage
of [imperative mood](https://chris.beams.io/posts/git-commit/#imperative).

Happy contributing :heart:

## License

When you submit changes, your submissions are understood to be under the
same [GPL-3.0 license](LICENSE) that covers the project.

## References

This document was adapted from the open-source contribution guidelines
for [Facebook's Draft](https://github.com/facebook/draft-js/blob/master/CONTRIBUTING.md).