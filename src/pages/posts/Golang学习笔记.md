---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Golang学习笔记"
pubDate: 2022-03-23 19:46:04
tags: ["Golang"]
weight: 1 # 文章权重，用于同日期文章排序，数字越大排序越靠前
slug: "Golang-Study-Notes" # 请在此处填写英文 slug，如: my-article-name
---

## 此文章用作LeetCode做题记录笔记。
    记录一些不好懂(对我来说)或是怕忘记思路以及收获了新知识的题目
## 1. 轮转数组(难度：中等)
***
![title1](https://images.moecm.com/images/2022/06/06/3a51e56d31caca85538f9229e3e74f6f.png)
***
#### 方法一
``` go
func rotate(nums []int, k int)  {
    nums2 := make([]int,len(nums))
    for i , v := range nums {
        nums2[(i + k) % len(nums)] = v
    }
    copy(nums ,nums2)
} 
```
- #### 首先用make一个切片 ,第一个参数为`类型`,第二个参数为`长度`
`nums2 := make([]int,len(nums))` 

- #### range关键字在`数组和切片`中返回`索引`和`索引对应的值`
    - `(i + k) % len(nums)`可以使 如果i+k的值小于数组的长度,那么无事发生,如果超过数组的长度,可以让其变到前面。
        - 举个例子
        如果`len(nums) = 7,i = 2,k = 3`那么2 + 3 < 7 ,数值正常复制到第5位
        如果`len(nums) = 7,i = 5,k = 3`那么5 + 3 > 7 ,数值8 % 7等于1,这时数值复制到第一位
        跟用`n & 1`判断奇偶一样,很有用的小技巧。

```go
for i , v := range nums {
        nums2[(i + k) % len(nums)] = v
    }
```


- #### 最后copy复制到原数组
`copy(nums ,nums2)`,第一个参数为复制的目标,第二个参数是被复制的对象
***
## 2. 移动零(难度：简单)
***
![title2](https://images.moecm.com/images/2022/06/06/dc1d21b62760961092d077db4057bd36.png)
***
#### 解答
```go
func moveZeroes(nums []int)  {
    right,left,n := 0 , 0 , len(nums)
    for right < n {
        if nums[right] != 0 {
            nums[right],nums[left] = nums[left] , nums[right]
            left++
        }
        right++
    }
}
```
- #### 采用了双指针的做法,
    ##### 即`right`不断向后推移,`left`只有遇到非零值时才会向后推移
    ##### 当数值非零时`right`和`left`互换,当遇到0时,`right`跳过到下一位(假设下一位非零)
    ##### 这时`right`遇到非零值,`right`与`left`值互换,实现了将零向后推移而不改变非零值的顺序
***
## 3. 二分搜索
```go
func search(nums []int, target int) int {
    r := 0
    l :=len(nums) - 1
    for r <= l {
        mid := (r + l) / 2
        if nums[mid] == target {
            return mid
        }else if nums[mid] > target {
            l = mid - 1
        }else if nums[mid] < target {
            r = mid + 1
        }
    }
    return -1
}
```
- #### 第一次发现直接使用一个循环完成二分搜索,遂予记录
***
## 4. 字符串
- #### golang的字符串不能直接修改,但可以将其变为`[]byte`切片,然后修改切片内容,再换回`string`
```go
    var str string = "hello"
    strBytes := []byte(str)
    strBytes[0] = 'H'
    str = string(strBytes)
    fmt.Println(str)
```
- #### 可以使用`len()`获得字符串的长度,但需要注意的是,`len()`获得的是字符串的`字节数`,而非`字符数`,所以有时会出现让人疑惑的结果

## 4-1.反转字符串中的单词 III (难度:简单)
***
![title3](https://images.moecm.com/images/2022/06/06/951ed55dd805ce3cb30aee33b73f5d85.png)
***
- #### 代码
```go
func reverseWords(s string) string {
    abc := []byte(s)

    for i, j := 0, 0 ; i< len(abc) ; i++ {
        
        if abc[i] == ' ' || i == len(abc) - 1 {
            r := i

            if i != len(abc) - 1 {
            i--
            }

            for i > j{
            abc[i] , abc[j] = abc[j] , abc[i]
            i--
            j++
            }

            i = r + 1
            j = r + 1
        }  
    }
    return string(abc)
}
```
- #### 由于Golang的字符串不可修改，于是将字符串转换为字符切片进行修改，通过遍历字符串，在每个空格前停顿，利用双指针改变每个单词的排序
## 5. 位一的个数(难度：简单)
***
![title4](https://images.moecm.com/images/2022/06/06/169552d3816eb87427a55209ced66476.png)
***
- #### 代码
```go
func hammingWeight(num uint32) int {
    var ones int
    for i := 0 ; i < 32 ; i++ {
        if 1<<i & num > 0 {
            ones++
        }
    }
    return ones
}
```
- #### 通过`与`运算，将`2的i次幂` `(即 1 << i & num)`与`二进制数`进行运算
    - ##### eg:(i = 1时) `10 & 11 = 1` 说明第`i + 1`位为1，反之则为零

## 链表的中间节点(难度:简单)
***
![title5](https://images.moecm.com/images/2022/06/06/50953ced1a7b570a0d8b3ba91facbfc6.png)
***
- #### 代码
```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func middleNode(head *ListNode) *ListNode {
    newhead := &ListNode{Next:head}
    fast, slow := newhead, newhead
    for fast != nil && fast.Next != nil {
        slow = slow.Next
        fast = fast.Next.Next
    }
    if fast == nil {
        return slow
    }

    return slow.Next
}
```
- #### 解题思路，设置快慢指针，快指针每次走两步，慢指针每次走一步，快指针走到结尾，返回慢指针即可

- #### 结构体
    - ##### `ListNode{Next:head}` 
        `Next -> key` `head ->value` 
# TO BE CONTINUE......