import { GitCategory } from "@/types/git";

export const gitItems: GitCategory[] = [
  {
    category: "Getting Started",
    icon: "Rocket",
    description: "Brand new to Git? Start here. These commands will help you install, configure, and understand the basics of version control.",
    items: [
      {
        name: "What is Git?",
        description: "Git is the world's most popular version control system. It lets you track every change you make to your code, collaborate with other developers, and safely experiment with new ideas without breaking your project. Think of it as an \"undo button\" for your entire codebase.",
        tip: "Git is installed on most systems. Run the command below to verify.",
        commands: [
          { cmd: "git --version", desc: "Check your installed Git version" }
        ]
      },
      {
        name: "First-Time Configuration",
        description: "Before you start using Git, you need to tell it who you are. Your name and email will be attached to every commit (save point) you create. This is how your teammates will know who made each change.",
        tip: "You only need to do this once. The --global flag means these settings apply to all your projects.",
        commands: [
          { cmd: "git config --global user.name \"Your Name\"", desc: "Set your display name for commits" },
          { cmd: "git config --global user.email \"you@example.com\"", desc: "Set your email for commits" },
          { cmd: "git config --global init.defaultBranch main", desc: "Set 'main' as the default branch name" },
          { cmd: "git config --list", desc: "Review all your current settings" }
        ]
      }
    ]
  },
  {
    category: "Creating Projects",
    icon: "FolderOpen",
    description: "Every project starts somewhere. Learn how to create a brand new repository or download an existing one.",
    items: [
      {
        name: "Initialize a New Repository",
        description: "When you start a new project from scratch, you need to initialize a Git repository. This creates a hidden .git folder that tracks all your changes from this point forward.",
        tip: "Run this inside your project folder. It won't affect any existing files.",
        commands: [
          { cmd: "git init", desc: "Create a new Git repository in current folder" },
          { cmd: "git init my-project", desc: "Create a new project folder with Git already set up" }
        ]
      },
      {
        name: "Clone an Existing Repository",
        description: "If a project already exists on GitHub (or another remote server), you can download the entire project — including its full history — using the clone command.",
        tip: "This is the most common way to start working on a team project.",
        commands: [
          { cmd: "git clone https://github.com/user/repo.git", desc: "Download a full copy of a remote repository" },
          { cmd: "git clone https://github.com/user/repo.git my-folder", desc: "Clone into a specific folder name" },
          { cmd: "git clone --depth 1 https://github.com/user/repo.git", desc: "Clone only the latest version (faster)" }
        ]
      }
    ]
  },
  {
    category: "Day-to-Day Workflow",
    icon: "Code",
    description: "These are the commands you will type every single day. Master them and Git becomes effortless.",
    items: [
      {
        name: "Checking the Status",
        description: "Before you do anything in Git, it's a good habit to check your status. This tells you which files have been modified, which are staged (ready to commit), and which are untracked (new files Git doesn't know about yet).",
        commands: [
          { cmd: "git status", desc: "See a summary of all changes in your project" },
          { cmd: "git status -s", desc: "Show a compact one-line-per-file summary" }
        ]
      },
      {
        name: "Staging Changes",
        description: "Before committing, you need to 'stage' your changes. Staging means selecting exactly which changes you want to include in your next save point. This gives you fine-grained control over your project history.",
        tip: "Think of staging as putting items in a shopping cart before checking out.",
        commands: [
          { cmd: "git add index.html", desc: "Stage a specific file" },
          { cmd: "git add src/", desc: "Stage an entire folder" },
          { cmd: "git add .", desc: "Stage everything that has changed" },
          { cmd: "git add -p", desc: "Interactively choose specific lines to stage" }
        ]
      },
      {
        name: "Committing Changes",
        description: "A commit is a permanent save point in your project's history. Every commit has a unique ID and a message describing what changed. Good commit messages make your project's history easy to understand.",
        tip: "Write your commit messages in the imperative mood: 'Add feature' not 'Added feature'.",
        commands: [
          { cmd: "git commit -m \"Add user login page\"", desc: "Create a commit with a message" },
          { cmd: "git commit -am \"Fix header styling\"", desc: "Stage all tracked files and commit in one step" },
          { cmd: "git commit --amend", desc: "Edit the message or content of your last commit" }
        ]
      },
      {
        name: "Viewing History",
        description: "Your project's history is a powerful record of every change ever made. You can browse it, search it, and even travel back in time to any point.",
        commands: [
          { cmd: "git log", desc: "View the full commit history" },
          { cmd: "git log --oneline", desc: "Show each commit as a single line (compact)" },
          { cmd: "git log --oneline --graph --all", desc: "Beautiful visual graph of all branches" },
          { cmd: "git show abc1234", desc: "View the full details of a specific commit" },
          { cmd: "git diff", desc: "Show unstaged changes line by line" },
          { cmd: "git diff --staged", desc: "Show staged changes that are ready to commit" }
        ]
      }
    ]
  },
  {
    category: "Branching & Merging",
    icon: "GitBranch",
    description: "Branches let you work on new features, bug fixes, or experiments in isolation — without affecting the main codebase.",
    items: [
      {
        name: "Working with Branches",
        description: "A branch is like a parallel universe for your code. You can create a branch, make changes, and merge them back when you're ready. The main branch stays safe while you experiment freely.",
        tip: "Create a branch for every new feature or bug fix. This is called 'feature branching'.",
        commands: [
          { cmd: "git branch", desc: "List all local branches" },
          { cmd: "git branch -a", desc: "List all branches including remote ones" },
          { cmd: "git branch feature/navbar", desc: "Create a new branch called 'feature/navbar'" },
          { cmd: "git checkout feature/navbar", desc: "Switch to an existing branch" },
          { cmd: "git checkout -b feature/navbar", desc: "Create AND switch to a new branch in one step" },
          { cmd: "git switch feature/navbar", desc: "Modern way to switch branches (Git 2.23+)" },
          { cmd: "git branch -d feature/navbar", desc: "Delete a branch after it's been merged" }
        ]
      },
      {
        name: "Merging Branches",
        description: "Once your work on a branch is complete, you merge it back into the main branch. Git intelligently combines the changes. If two people edited the same line, Git will ask you to resolve the conflict manually.",
        tip: "Always pull the latest changes from main before merging to avoid conflicts.",
        commands: [
          { cmd: "git checkout main", desc: "First, switch to the branch you want to merge INTO" },
          { cmd: "git merge feature/navbar", desc: "Merge the feature branch into main" },
          { cmd: "git merge --abort", desc: "Cancel a merge if there are too many conflicts" }
        ]
      }
    ]
  },
  {
    category: "Remote & Collaboration",
    icon: "Globe",
    description: "Git becomes truly powerful when you connect it to a remote server like GitHub. These commands let you share your work and collaborate with others.",
    items: [
      {
        name: "Connecting to Remote",
        description: "A 'remote' is a version of your project hosted on the internet (like GitHub). When you clone a repository, the remote is set up automatically. For projects you initialized locally, you need to add it manually.",
        commands: [
          { cmd: "git remote -v", desc: "View your current remote connections" },
          { cmd: "git remote add origin https://github.com/user/repo.git", desc: "Connect your local project to GitHub" },
          { cmd: "git remote remove origin", desc: "Disconnect from a remote" }
        ]
      },
      {
        name: "Pushing & Pulling",
        description: "Push sends your local commits to the remote server so others can see your work. Pull downloads the latest changes from the remote and merges them into your local branch.",
        tip: "Always pull before you push to avoid conflicts with your teammate's work.",
        commands: [
          { cmd: "git push origin main", desc: "Upload your commits to the remote main branch" },
          { cmd: "git push -u origin feature/login", desc: "Push a new branch to remote for the first time" },
          { cmd: "git pull origin main", desc: "Download and merge remote changes into your branch" },
          { cmd: "git fetch origin", desc: "Download remote changes without merging (safer)" }
        ]
      }
    ]
  },
  {
    category: "Undoing Mistakes",
    icon: "Undo2",
    description: "Made a mistake? Don't panic. Git has powerful tools to undo almost anything, from a simple typo to an entire commit.",
    items: [
      {
        name: "Unstaging & Discarding",
        description: "If you accidentally staged a file or want to throw away recent changes, these commands can help you go back without losing your commit history.",
        warning: "git checkout -- <file> permanently discards changes. There is no undo for this.",
        commands: [
          { cmd: "git reset HEAD index.html", desc: "Unstage a file (keep the changes in your editor)" },
          { cmd: "git checkout -- index.html", desc: "Discard all changes to a specific file" },
          { cmd: "git restore index.html", desc: "Modern way to discard changes (Git 2.23+)" },
          { cmd: "git restore --staged index.html", desc: "Modern way to unstage a file" }
        ]
      },
      {
        name: "Reverting & Resetting Commits",
        description: "If you need to undo an entire commit, you have two options: revert (safe — creates a new commit that undoes the changes) or reset (destructive — rewrites history).",
        warning: "Never use git reset --hard on commits that have already been pushed to a shared branch.",
        commands: [
          { cmd: "git revert abc1234", desc: "Safely undo a commit by creating a new reversal commit" },
          { cmd: "git reset --soft HEAD~1", desc: "Undo last commit but keep changes staged" },
          { cmd: "git reset --mixed HEAD~1", desc: "Undo last commit and unstage the changes" },
          { cmd: "git reset --hard HEAD~1", desc: "Completely erase the last commit and all its changes" }
        ]
      }
    ]
  },
  {
    category: "Stashing",
    icon: "Archive",
    description: "Need to quickly switch branches but have uncommitted work? Stash lets you save your current changes temporarily and come back to them later.",
    items: [
      {
        name: "Using the Stash",
        description: "The stash is like a clipboard for your code. It saves your current work-in-progress and gives you a clean working directory. When you're ready, you can pop the changes right back.",
        tip: "Stashing is perfect for when you need to switch branches to fix an urgent bug.",
        commands: [
          { cmd: "git stash", desc: "Save all uncommitted changes to the stash" },
          { cmd: "git stash save \"login page work-in-progress\"", desc: "Stash with a descriptive message" },
          { cmd: "git stash list", desc: "See all your saved stashes" },
          { cmd: "git stash pop", desc: "Apply the latest stash and remove it from the list" },
          { cmd: "git stash apply stash@{1}", desc: "Apply a specific stash without removing it" },
          { cmd: "git stash drop stash@{0}", desc: "Delete a specific stash" },
          { cmd: "git stash clear", desc: "Delete ALL stashes (use with caution)" }
        ]
      }
    ]
  },
  {
    category: "Advanced Techniques",
    icon: "Zap",
    description: "Ready to level up? These advanced commands give you surgical precision over your commit history and workflow.",
    items: [
      {
        name: "Interactive Rebase",
        description: "Rebase lets you rewrite your commit history. You can squash multiple messy commits into one clean commit, reorder them, rename them, or even delete specific commits entirely.",
        warning: "Never rebase commits that have been pushed to a shared branch — it rewrites history.",
        commands: [
          { cmd: "git rebase -i HEAD~5", desc: "Interactively edit the last 5 commits" },
          { cmd: "git rebase main", desc: "Move your branch's commits on top of the latest main" },
          { cmd: "git rebase --abort", desc: "Cancel a rebase if something goes wrong" }
        ]
      },
      {
        name: "Cherry-Pick",
        description: "Cherry-pick lets you copy a specific commit from one branch and apply it to another. This is useful when you only need one particular change, not an entire branch merge.",
        commands: [
          { cmd: "git cherry-pick abc1234", desc: "Apply a specific commit to your current branch" },
          { cmd: "git cherry-pick abc1234 --no-commit", desc: "Apply changes without auto-committing" }
        ]
      },
      {
        name: "Tagging Releases",
        description: "Tags mark important points in your project's history, like version releases. Unlike branches, tags don't change — they're permanent bookmarks.",
        commands: [
          { cmd: "git tag v1.0.0", desc: "Create a lightweight tag" },
          { cmd: "git tag -a v1.0.0 -m \"First stable release\"", desc: "Create an annotated tag with a message" },
          { cmd: "git tag", desc: "List all tags" },
          { cmd: "git push origin v1.0.0", desc: "Push a tag to the remote server" },
          { cmd: "git push origin --tags", desc: "Push all tags at once" }
        ]
      }
    ]
  },
  {
    category: "Inspection & Debugging",
    icon: "Search",
    description: "When things go wrong, these commands help you investigate, compare, and find exactly where a bug was introduced.",
    items: [
      {
        name: "Comparing Changes",
        description: "The diff command shows you exactly what has changed, line by line. This is essential for code reviews and understanding what happened between two points in your history.",
        commands: [
          { cmd: "git diff HEAD~3..HEAD", desc: "Compare the last 3 commits" },
          { cmd: "git diff main..feature/login", desc: "Compare two branches" },
          { cmd: "git diff --stat", desc: "Show a summary of changed files and lines" }
        ]
      },
      {
        name: "Blame & Bisect",
        description: "Who changed this line? When was a bug introduced? Git's blame and bisect tools help you answer these detective questions.",
        commands: [
          { cmd: "git blame index.html", desc: "Show who last modified each line of a file" },
          { cmd: "git bisect start", desc: "Start a binary search to find the commit that introduced a bug" },
          { cmd: "git bisect good abc1234", desc: "Mark a commit as 'good' (bug-free)" },
          { cmd: "git bisect bad", desc: "Mark the current commit as 'bad' (has the bug)" }
        ]
      }
    ]
  },
  {
    category: "Cleanup & Maintenance",
    icon: "Trash2",
    description: "Keep your repository clean and organized with these housekeeping commands.",
    items: [
      {
        name: "Cleaning Up",
        description: "Over time, your working directory can accumulate untracked files (build artifacts, temp files, etc.). The clean command helps you remove them.",
        warning: "git clean is destructive. Always use -n (dry run) first to preview what will be deleted.",
        commands: [
          { cmd: "git clean -n", desc: "Preview which untracked files would be deleted" },
          { cmd: "git clean -fd", desc: "Delete untracked files and directories" },
          { cmd: "git gc", desc: "Run garbage collection to optimize the repository" }
        ]
      },
      {
        name: "Using .gitignore",
        description: "The .gitignore file tells Git which files and folders to completely ignore. This is essential for keeping sensitive data, build artifacts, and dependencies out of your repository.",
        tip: "Create a .gitignore file before your first commit. Visit gitignore.io for templates.",
        commands: [
          { cmd: "node_modules/", desc: "Ignore the node_modules folder" },
          { cmd: ".env", desc: "Ignore environment variable files" },
          { cmd: "*.log", desc: "Ignore all .log files" },
          { cmd: "dist/", desc: "Ignore build output folders" }
        ]
      }
    ]
  }
];
