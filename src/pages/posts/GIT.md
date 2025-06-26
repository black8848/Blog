---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Git Learn"
pubDate: 2024-10-29
tags: ["Learn"]
slug: "git"
---

## 概念

- 工作区：当前实际工作目录
- 暂存区：`git add <FileName>`后 <FileName> 被添加到暂存区 `stage` 等待提交
- 本地库：commit到的地方，本地的库，也即分布式版本控制工具 Git 分布所在地
- 远程库：远程托管代码平台，如：Github, Gitee

---

## 版本控制（不包括远程库）

`git status`可以时刻查看仓库当前的状态。

`git diff <filename>` 查看当前修改过的文件与上次提交的文件有什么差别。

`git log` 添加 `--pretty=oneline` 可以简单输出。

`git rm `删除版本库文件

---

`git checkout` 用来切换分支和恢复文件（现已经更新了最新的指令来更清晰的表达功能 `git switch` 和 ` git restore` ），目前我的主要使用方面在`git checkout -- <filename>` 方面，其会恢复文件至 `暂存区` 的状态，但当暂存区为空时，Git 默认会恢复到最新提交的状态。

<!-- <p float="left">
  <img src="/Users/fzzz/Documents/MyDocuments/MarkDown文档/GIT.assets/checkout测试.png" width="500" />
  <img src="/Users/fzzz/Documents/MyDocuments/MarkDown文档/GIT.assets/截屏2024-10-19 00.48.37.png" width="400" />
</p> -->

---

**重头戏**： `git reset --hard/--soft/--mix(default) HEAD~<number>/commit ID`

- soft模式：只会改变 HEAD 指针的指向，不会修改工作区与暂存区的内容
- mix模式（默认）：暂存区会被清空，HEAD指针将会指向到目标commit ID，不会修改工作区的内容。
- hard模式：丢弃全部更改，恢复到目标commit ID 状态，工作区、暂存区、本地库全部重置到commit的状态

---

**分支管理**：`git switch` `git branch`等命令，可以进行分支控制，Git 鼓励使用分支，分支本质上是将 HEAD 指针从 main 分支上移动到新的分支指针 xxx 上，然后使用分支进行修改，提交，此时mian指针还在原地停留，而 xxx 指针随着我们的修改提交在不断延长，可以在任何时候切换回 mian 分支进行 `git merge` 进行合并，然后删除 xxx 分支。

> HEAD 指针指向在当前工作区的分支节点头上

解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交。

合并分支时，加上`--no-ff`参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而`fast forward`合并就看不出来曾经做过合并。

---

**BUG 分支**：当手头有工作但急需创建一个新分支来修复什么 bug 时，可以使用 `git stash` 将工作区和暂存区全部搬到一个其他地方去，留给你一个干净的工作区来新建分支修复 bug 。

在修复结束后使用`git stash list` 来查看自己归档了什么，并且使用 `git stash pop` 回到工作现场并且删除存档内容。

> 在`master`分支上修复的bug，想要合并到当前`dev`分支，可以用`git cherry-pick <commit>`命令，把bug提交的修改"复制"到当前分支，避免重复劳动。

---

**推送远程**：如果失败（有另外一人在你之前 push 了）需要先 pull（根据提示指定远程库分支），如果遇到合并冲突，就在本地修改冲突区域后再 commit && push

> 因此，多人协作的工作模式通常是这样：
>
> 1. 首先，可以尝试用`git push origin <branch-name>`推送自己的修改；
> 2. 如果推送失败，则因为远程分支比你的本地更新，需要先用`git pull`试图合并；
> 3. 如果合并有冲突，则解决冲突，并在本地提交；
> 4. 没有冲突或者解决掉冲突后，再用`git push origin <branch-name>`推送就能成功！
>
> 如果`git pull`提示`no tracking information`，则说明本地分支和远程分支的链接关系没有创建，用命令`git branch --set-upstream-to <branch-name> origin/<branch-name>`。
>
> 这就是多人协作的工作模式，一旦熟悉了，就非常简单。

---

**基变**： `git rebase` 从分支开始的基，变更到另一条分支的最新节点，从而实现 commit 直线化的整洁的记录。
