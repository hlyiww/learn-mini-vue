# readonly

> Metadata:
>
> Date: 2022/11/5 20:42

## 本篇内容关键性思想

- 高阶函数的封装
- 缓存 getter 和 setter 的创建

## 如何实现 readonly

readonly 和 reactive 在实现逻辑上都使用到了 proxy，不同的是，readonly 无需关心 set 实现，也无需拥有依赖收集和依赖触发的能力

## 重构代码带来哪些好处？

- 从项目的角度来说，重构代码更多的是让代码的层次清晰，同时提升代码的可复用性及可读性
- 从个人的角度来说，重构代码有助于提升程序员对代码的封装能力、以及逻辑思维能力，让代码可以更优雅。同时在阅读其他源码库的时候也能够得心应手

## 实现 isReadonly 和 isReactive

实现思路主要是通过先前在 createGetter 高阶函数中传入的 isReadonly 标识来判断。我们需要去触发一次 set 操作，并传给它一个特定的 key（`__v_isReactive` 和 `__v_isReadonly`），set 在接受到这些特定 key 后将 isReadonly 标识处理，然后返回给函数
