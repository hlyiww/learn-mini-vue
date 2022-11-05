# readonly

> Metadata:
>
> Date: 2022/11/5 20:42

## 如何实现 readonly

readonly 和 reactive 在实现逻辑上都使用到了 proxy，不同的是，readonly 无需关心 set 实现，也无需拥有依赖收集和依赖触发的能力

## 重构代码
