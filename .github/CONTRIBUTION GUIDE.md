# Contributing to Travel experience

## Contribution process overview

1. Fork this project.
2. Create a feature branch.
3. Make your changes.
4. Run the app locally
5. Push your changes to your fork/branch.
6. Create a pull request.

### 1. Fork

* Click the fork button up top.
* Clone your fork locally.


### 2. Create a feature branch

Create and switch to a new feature branch: `git checkout -b {branch_name} upstream/master`  
(replace `{branch_name}` with a meaningful name that describes your feature or change).

### 3. Make your changes

Now that you have a new branch you can edit/create/delete files. Use touch-up commits using `git commit --amend`. (You may use git force push after that).

### 4. Run the app locally

- Install the dependencies: `npm install`.
- Start the local development server: `npm start`.

### 5. Push your changes to your fork/branch

After lint and all tests pass, push the changes to your fork/branch on GitHub: `git push origin {branch_name}`. For force push, which will destroy previous commits on the server, use `--force` (or `-f`) option.

### 6. Create a pull request

Create a pull request on GitHub for your feature branch.
