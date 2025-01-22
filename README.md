# Internship
This repository documents my internship first journey , including the tasks, learnings, and progress made each day. Each day focuses on a specific topic to enhance my skills and contribute effectively to the project.

## Internship Documentation - Day 1
### Date: 
2025/01/21
### Focus: 
Git and GitHub
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
  git commit --amend

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
7. **Rebase and reflog**
    Rebase allows you to move a branch to a new starting point
    Git reflog is a command that shows you the history of your commits
```bash
   git rebase main
   git rebase --continue
   git reflog
   git reflog <commit-hash>
   git reset --hard <commit-hash>
   git reset --hard HEAD@{1}
   git reset HEAD~ --hard
```
8. **TRACKING PATH CHANGES**
   Versioning file removes and path changes
```bash
   git rm [file]
   git mv [existing-path] [new-path]
```
9. **Fork**
   A fork is a new repository that shares code and visibility settings with the original "upstream" repository. It is a rough copy.

## Internship Documentation - Day 2
### Date: 
2025/01/22
### Focus: 
HTML, CSS
### Learning Objectives:
On Day 2, the focus was on gaining a deeper understanding of Semantic HTML, Accessibility, and styling with CSS and SASS. The tasks also included exploring important practices such as Linting and Code Formatting to ensure clean and maintainable code.
### Topics Covered
1. **Semantic HTML**
   Semantic elements in HTML are tags that clearly describe their meaning and purpose. Example - header, nav, main, footer, article, section
   - **Benefits**
   1. Code Readability
   2. Accessibility
   3. Better SEO
   4. Consistent Styling
2. **Accessibility**
   