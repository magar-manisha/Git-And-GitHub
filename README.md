# Internship
This repository documents my internship first journey , including the tasks, learnings, and progress made each day. Each day focuses on a specific topic to enhance my skills and contribute effectively to the project.

## Day 1: Git and GitHub
The focus of Day 1 is to understand the Git and GitHub, which are essential tools for version control and collaboration. The tasks include learning about branching, staging, tagging, creating PRs/MRs, resolving conflicts, and more.

### Topics Covered
1. **Branching**
   Branches allow you to isolate your work.
   ```bash
  git branch                          # List of branch
  git branch <branch-name>            # Create a new branch
  git checkout <branch-name>          # Switch to a branch
  git switch <branch-name>            # Alternative way to switch
  git switch -c <branch-name>         # creates or switch a new branch 
  git branch -m <old-name> <new-name> # Rename a branch
  git branch -d <branch-name>         # Delete a branch
  ```
2. **Staging and Committing**
  Preparing changes to be committed.
  ```bash
  git add <file-name>             # add/stage specific file
  git add .                       # add/stage all changes
  git status                      # View staged and unstaged changes
  git commit -m "Commit message"  # Commit staged changes
  git commit -am "Commit message" # Stage and commit tracked files
  ```
  
