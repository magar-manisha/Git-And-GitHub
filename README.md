# Internship

This repository documents my first internship journey, detailing the tasks, learnings, and progress made each day. Each day focuses on specific topics to enhance my skills and contribute effectively to the project.

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
   - Diff shows the differences between two commits.
   - Stash is a way to save your changes in a temporary location.
   - Tags mark specific points in history, such as releases.

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
   - Pushing changes to a branch.
   - Reviewing by team members.
   - Merging into the target branch after approval.
5. **Pull and Merge**
   Pull the code means that you are going to fetch and download the code from the remote repository and merge it with your local repository.

```bash
   git fetch <remote-name>
   git pull <remote-name> <branch-name> or git pull origin main
   git merge <branch-name>
   git remote add <repo-name> [link]
   git remote -v
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
   A fork creates a copy of a repository for independent changes without affecting the original.

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
   Making web content accessible to all users, including those with disabilities. Some resources: [youTube](https://youtu.be/e2nkq3h1P68?si=p3M9_oSqG6-s_fHc) and [Docs](https://www.w3.org/TR/html-aria/)
   1. Use Semantic HTML (`<button>`, `<div>`)
   2. Text and Colour contrast
   3. Provide Link and Alternative Text
   4. Heading, List and Text size
   5. Keyboard Navigation
   6. Use ARIA(Accessible Rich Internet Applications) Roles and Attributes
   7. Add Captions and Transcripts
   8. Responsive Design
      so on..
3. **CSS(SASS)**
   SASS(Syntactically Awesome Stylesheets) is a CSS preprocessor that adds **features** like variables, map, partial, function nested rules, operation, import, export, mixins and many more making the process of writing CSS more efficient and maintainable.
   Some resources: [youtube](https://youtu.be/_a5j7KoflTs?si=DXf8cAp-aFh_t5k3) and [Docs](https://sass-lang.com/documentation/)
4. **Linting and Code Formatting**
   Linting tools analyze the code for potential errors, while code formatting tools ensure the code adheres to a consistent style.
   - **Tools Used**
     1. ESLint for JavaScript/HTML linting.
     2. Prettier for code formatting.

## Internship Documentation - Day 3

### Date: 2025/01/23

### Focus: JS, TS

### Learning Objectives:

On Day 3, the focus shifted to [JavaScript](https://youtu.be/nZ1DMMsyVyI?si=FhM2LX7-AMRcLV5P) and [TypeScript](https://youtu.be/gieEQFIfgYc?si=4r1i6W0eKzZNZX9v) concept Like, The Event Loop, Types and Interfaces. We also explored various Authentication techniques (JWT, Session, Cookies, OAuth, SAML) and examined different communication methods used in web development, such as REST, jRPC, gRPC, WebSockets and SSE. Additionally, we worked with Axios for HTTP requests and TANstack for data fetching and state management.

### Topics Covered

**JavaScript** is a dynamic, high-level programming language that is primarily used for building interactive and dynamic web applications. **TypeScript** enhances JavaScript by adding static typing, which helps developers avoid errors early in the development process and creates a more robust codebase, especially for large-scale applications.


1. **Event Loop**
   The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack for execution. Some resources: [geeksforgeeks](https://www.geeksforgeeks.org/what-is-an-event-loop-in-javascript/) and [ youTube](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
2. **Type Aliases/Interfaces in TypeScript**
   1. **Type Aliases:** Type aliases give a type a new name. They are similar to interfaces in that they can be used to name primitives and any other kinds that you’d have to define by hand otherwise.

   ```syntax
   type AliasName = ExistingType;
   ```

   2. **Interfaces** define the structure of an object, specifying property types and method signatures. They act as contracts, ensuring that objects adhere to a particular shape, enhancing type safety and code readability, and enabling features like optional properties, read-only properties, and interface inheritance.

   ```syntax
      interface InterfaceName{
      PropertyName: Type;
      methodName() => Type;
      }
   ```

3. **Authentication Methods**

   1. **JWT (JSON Web Token)** A compact, URL-safe token used to securely transmit information between parties, often used for stateless authentication.
   2. **Session** A session is a server-side mechanism for storing user-specific data for the duration of a user's interaction with the application. This data helps the server identify and authenticate a user across multiple requests.
   3. **Cookies** A cookie is a small piece of data stored on the client-side (browser) that the server sends with HTTP responses. It is sent back to the server with every subsequent request to maintain state.
   4. **OAuth** A protocol for third-party authentication, allowing secure access without sharing credentials (e.g., logging in with Google/Facebook).
   5. **SAML (Security Assertion Markup Language)** An XML-based protocol for single sign-on (SSO) to allow authentication across different systems securely.

4. **Communication Methods**
   1. **REST** REST (Representational State Transfer) is a stateless, client-server architecture commonly used in APIs for communication between systems via HTTP methods (GET, POST, PUT, DELETE). Problem of underFetching and overFetching.
   2. **jRPC (JSON-RPC)** A remote procedure call (RPC) protocol that uses JSON to encode the calls and responses.
   3. **gRPC** A high-performance, open-source RPC framework developed by Google, using HTTP/2 for transport, Protocol Buffers as the interface definition language, and providing features like bidirectional streaming. some resources: [Youtube](https://youtu.be/gnchfOojMk4?si=gH27POp0nNPIj_Qn)
   4. **WebSockets** A communication protocol that allows full-duplex communication channels over a single TCP connection, used for real-time applications like chat or live updates.
   5. **SSE (Server-Sent Events)** A server-sent event is when a web page automatically gets updates from a server.A server-push technology that allows servers to send real-time updates to clients over an HTTP connection. some resources: [w3school](https://www.w3schools.com/html/html5_serversentevents.asp)
   6. **Axios** Axios is a promise-based HTTP client for JavaScript that allows you to make HTTP requests from the browser or Node.js. Axios is often used to interact with REST APIs, providing an easy way to send asynchronous HTTP requests.
   7. **TANstack** TANstack is a set of data fetching and state management tools designed to make data handling in React applications more efficient and scalable. For more details, you can refer [tanstack](https://tanstack.com/start/latest)
      - **key Libraries**
        1. **React Query** A data-fetching library that simplifies data management and synchronization for remote data in React applications.
        2. **TanStack Table** A powerful and customizable table library for building tables with React.
        3. **TanStack Router** A router library designed for building complex applications with React.

# Internship Documentation - Day 4

### Date: 2025/01/23

### Focus: Structuring React Code

### Learning Objectives:

On Day 4, the focus was on understanding best practices for structuring large-scale React codebases. The aim was to explore strategies for managing complexity in React applications, identifying the best resources for self-learning, and analyzing real-world open-source projects for inspiration.

### Best Practices for Structuring React Code

When working with large-scale React applications, structuring the code effectively is crucial to maintain readability, scalability, and maintainability. This article explores best practices, learning resources, and insights into structuring huge React codebases.

1.  Adopt a Clear Folder Structure

```
src/
├── components/     # Reusable components
├── features/       # Feature-specific modules
├── hooks/          # Custom React hooks
├── utils/          # Helper functions and utilities
├── context/        # Context providers for state management
├── services/       # API services (e.g., Axios calls)
├── pages/          # Page-level components
└── assets/         # Static assets like images, fonts, etc.
```

2.  Component-Based Architecture
3.  Use State Management Wisely
4.  Code Splitting and Lazy Loading
5.  Follow Naming Conventions

### Learning Resources

1.  YouTube Channels
   - **[Fireship](https://www.youtube.com/c/Fireship)** 
   - **[Codevolution](https://www.youtube.com/c/Codevolution)** 
   - **[Web Dev Simplified](https://www.youtube.com/c/WebDevSimplified)** 

2.  Blogs and Articles
   - **[overreacted](https://overreacted.io/)**
   - **[joshwcomeau](https://www.joshwcomeau.com/react/)**
   - **[robinwieruch](https://www.robinwieruch.de/blog/)**

### Explore Open-Source Projects
   - [marmelab/react-admin](https://github.com/marmelab/react-admin)
   - [mattermost/mattermost](https://github.com/mattermost/mattermost)
   - [persional blog](https://github.com/varHarrie/varharrie.github.io)
   - [adrianhajdin](https://github.com/adrianhajdin/jsmasterypro_devflow)

# Conclusion

Over the course of four days, I gained foundational knowledge in key web development tools and practices including Git and GitHub, HTML and CSS with accessible, JavaScript and TypeScript concepts, and best practices for structuring large-scale React applications. By working with branching, staging, authentication methods, and exploring various communication protocols, 
I developed a deeper understanding of how to efficiently manage and scale web projects. This experience has provided me with valuable skills for contributing to real-world development teams.
