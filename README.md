# Internship
This repository documents my internship first journey , including the tasks, learnings, and progress made each day. Each day focuses on a specific topic to enhance my skills and contribute effectively to the project.

## Internship Documentation - Day 1
### Date: 2025/01/21
### Focus: Git and GitHub
### Learning Objectives:
The focus of Day 1 is to understand the Git and GitHub, which are essential tools for version control and collaboration. The tasks include learning about branching, staging, tagging, creating PRs/MRs, resolving conflicts, and more. For more details, you can refer to a helpful guide provided by [Chai Docs](https://docs.chaicode.com/git-and-github/) and [Dangit](https://dangitgit.com/en).
### Topics Covered
1. **Branching**
   Branches allow you to isolate your work.
```bash
  git branch                          
  git branch <branch-name>            
  git checkout <branch-name>          
  git switch <branch-name>            
  git switch -c <branch-name>         
  git branch -m <old-name> <new-name> 
  git branch -d <branch-name>     
  git log    
```
2. **Staging**
  Preparing changes to be committed.
```bash
  git add <file-name>             
  git add .                       
  git status                      
  git commit -m "Commit message"  
  git commit -am "Commit message" 

```
3. **Git diff, stash, Tags**
   Diff shows the differences between two commits.
   Stash is a way to save your changes in a temporary location.
   Tags mark specific points in history, such as releases.
```bash
   git diff --staged
   git diff branch-name-one..branch-name-two
   git stash
   git stash list
   git stash pop
   git stash drop
   git tag <tag-name>
   git tag -a <tag-name> -m "Tag message"
   git push origin <tag-name>
   git tag
   git show <tag-name>
```
4. **PR (Pull Request) / MR (Merge Request) creation**
   PR and MR lets you tell others about changes you've pushed/merge to a branch in a repository on GitHub
   - **Process**:
      1. Create a PR/Mr after pushing changes to a feature branch.
      2. The PR is reviewed by others on the team (typically collaborators or maintainers).
      3. Once approved, the changes are merged into the target branch.
5. **Pull and Merge**
   Pull the code means that you are going to fetch and download the code from the remote repository and merge it with your local repository.
```bash
   git fetch <remote-name>
   git pull <remote-name> <branch-name> or git pull origin main
   git merge <branch-name>
```
6. **Conflict Resolution**
   Resolve conflicts when changes overlap between branches.
   - **Steps**:
     1. Attempt to merge
     2. Manually edit conflicting files
     3. add resolved files
     4. Continue merging
```bash
   git commit --amend
   git reset
   git reset HEAD~ --soft
   git reset HEAD~ --hard
   git reset --hard <commit-hash>
   git reset --hard HEAD@{1}
   
```
7. **Rebase and reflog**
    Rebase allows you to move a branch to a new starting point
    Git reflog is a command that shows you the history of your commits
```bash
   git rebase main
   git rebase --continue
   git reflog
   git reflog <commit-hash>
```
8. **TRACKING PATH CHANGES**
   Versioning file removes and path changes
```bash
   git rm <file>
   git mv <existing-path> <new-path>
```
9. **Fork**
   A fork is a new repository that shares code and visibility settings with the original "upstream" repository. It is a rough copy.

## Internship Documentation - Day 2
### Date: 2025/01/22
### Focus: HTML, CSS
### Learning Objectives:
On Day 2, the focus was on gaining a deeper understanding of Semantic HTML, Accessibility, and styling with CSS and SASS. The tasks also included exploring important practices such as Linting and Code Formatting to ensure clean and maintainable code.
### Topics Covered
1. **Semantic HTML**
   Semantic elements in HTML are tags that clearly describe their meaning and purpose. Example - `<header>`, `<h1>`, `<nav>`, `<main>`,` <article>`, `<section>`, `<footer>` and so on...
   - **Benefits**
   1. Code Readability
   2. Accessibility
   3. Better SEO
   4. Consistent Styling
2. **Accessibility**
   Making web content accessible to all users, including those with disabilities. [Refer](https://youtu.be/e2nkq3h1P68?si=p3M9_oSqG6-s_fHc)
   - **Practical Steps**
   1. Use Semantic HTML (`<button>`, `<div>`)
   2. Text and Colour contrast
   3. Provide Link and Alternative Text 
   4. Heading, List and Text size
   5. Keyboard Navigation
   6. Use ARIA Roles and Attributes
   7. Add Captions and Transcripts
   8. Responsive Design
   so on..
3. **CSS(SASS)**
SASS is a CSS preprocessor that adds features like variables, nested rules, and mixins, making the process of writing CSS more efficient and maintainable.
4. **Linting and Code Formatting**
Linting tools analyze the code for potential errors, while code formatting tools ensure the code adheres to a consistent style.
   - **Tools Used**
   1. ESLint for JavaScript/HTML linting.
   2. Prettier for code formatting.

