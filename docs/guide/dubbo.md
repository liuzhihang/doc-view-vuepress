# Dubbo

## 接口

1. 目标类必须是个接口

## 方法

1. 如果在接口方法中使用，该方法必须没有方法体。

## 接口名称

1. 接口名称默认取值如图截图所示 `类名#方法名`；
   
    ![7LRtm9-LzXotO](https://cdn.jsdelivr.net/gh/liuzhihang/oss/pic/article/7LRtm9-LzXotO.png)

2. 支持在注释上使用 `@name` 设置接口名。

    ![zdw5TG-QtZFyB](https://cdn.jsdelivr.net/gh/liuzhihang/oss/pic/article/zdw5TG-QtZFyB.png)

## 接口描述

1. 接口描述直接取的方法注释；
2. 如果有 `@description` 标签，则会优先使用标签对应的描述。

    ![pcZB5V-Tn33bX](https://cdn.jsdelivr.net/gh/liuzhihang/oss/pic/article/pcZB5V-Tn33bX.png)

## 请求路径

Dubbo 的请求路径是 `ClassName#method` 组成

![pyGcC3-Oliqfn](https://cdn.jsdelivr.net/gh/liuzhihang/oss/pic/article/pyGcC3-Oliqfn.png)


## 请求方式

`Dubbo`

## 请求参数

1. 直接解析请求参数

### 参数类型

参数类型直接通过类文件进行解析。

### 是否必填

当前版本支持 `spring-boot-starter-validation` 、`hibernate-validator`，会判断是否有以下注解：

- `javax.validation.constraints.NotBlank`
- `javax.validation.constraints.NotEmpty`
- `javax.validation.constraints.NotNull`

### 说明备注

从字段注释中进行解析

## 返回参数

支持对象，返回空，返回带泛型方式。这里的泛型仅支持单个泛型且名称为 `T`。

![返回带泛型](https://cdn.jsdelivr.net/gh/liuzhihang/oss/pic/article/9ML932-RbqIqV.png)
