# How to contribute

If you're finding and issue with this add-on I'd love to include a fix for it so it continues to work.  I can't keep up with all the platforms and testing necessary so your contributions are really helpful.

## Getting Started

 * You'll need a copy of the [Add-on SDK](mozilla/addon-sdk/)
 * Make sure you have a [GitHub account](https://github.com/signup/free)
 * [Fork](/clarkbw/google-calendar-tab/fork_select) this repository into your own account

## Making Changes

* Create a topic branch from where you want to base your work.
  * Start from the master branch
  * Create the branch `git branch my_contribution master`
  * Then checkout the new branch with `git checkout my_contribution`.
  * Please avoid working directly on the `master` branch.
* Make commits of logical units.
* Check for unnecessary whitespace with `git diff --check` before committing.
* Include a reasonable commit message describing the change
* Make sure you have added the necessary tests for your changes.
* Run _all_ the tests to assure nothing else was accidentally broken.
  * Run all tests with `cfx test`

## Submitting Changes

* Push your changes to a topic branch in your fork of the repository.
* Submit a pull request to this repository.
