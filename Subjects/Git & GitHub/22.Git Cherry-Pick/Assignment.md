# Git Cherry-Pick — Assignment

## Instructions

* Complete all questions.
* Use meaningful branch names and commit messages.
* Perform the practical tasks using Git.
* Use `git log --oneline --graph --all` to show your commit history.
* Take screenshots of important steps if required.
* Write the answers of the theoretical questions in your notebook and submit the photos in your CodingGita_assignment repository.
* Take the screenshots of commit history of all branches and submit the screenshots + GitHub Repo link for all practical questions in your CodingGita_assignment repository.


---

# Q1. Theory — Understanding Cherry-Pick

Answer the following questions:

1. What is `git cherry-pick`?
2. What is the difference between **cherry-pick** and **merge**?
3. Does cherry-pick move the original commit? Explain.
4. Why does cherry-pick create a new commit?
5. What is the purpose of the following commands?

   * `git cherry-pick --continue`
   * `git cherry-pick --abort`
   * `git cherry-pick --skip`
6. What is the difference between:

   ```bash
   git cherry-pick <start_commit>..<end_commit>
   ```

   and

   ```bash
   git cherry-pick <start_commit>^..<end_commit>
   ```

---
---

# Q2. Practical — Cherry-Pick a Specific Commit

## Scenario

You are developing a **Student Management System**.

Create a new Git repository and create a file:

```text
Student.txt
```

Add:

```text
Student Management System
```

Commit it with a meaningful commit message.

### Tasks

1. Initialize the Git repository.
2. Create and commit `Student.txt`.
3. Create a new branch for student information.
4. Add information about **Rahul** and commit it.
5. Add information about **Amit** and commit it.
6. Switch back to `main`.
7. Find the commit ID of the **Amit** commit.
8. Cherry-pick only the **Amit** commit into `main`.
9. Display the commit history using:

```bash
git log --oneline --graph --all
```

### Expected Concept

The final history should show a **new cherry-picked commit on `main`**, while the original commit remains on the student-information branch.


***Answer***


https://github.com/piyuushcg-oss/Assignment-22-cherry-pick-part-1.git


<img width="1912" height="1077" alt="Git   Github Day 22 question-02 jpeg" src="https://github.com/user-attachments/assets/596a3aed-4fb3-4ca1-9cbe-9bac764020f7" />

<img width="1917" height="1076" alt="Git   Github Day 22 question-02-02 jpeg" src="https://github.com/user-attachments/assets/430bf7c0-ab56-440b-9a85-39b663c4a4b7" />



---
