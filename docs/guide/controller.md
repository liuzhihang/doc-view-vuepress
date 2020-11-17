# Controller

## 注解

1. 目标类内部有方法；
2. 类必须有相关 `Spring` 注解。
   1. `org.springframework.stereotype.Controller` 
   2. `org.springframework.web.bind.annotation.RestController`

## 方法

文档的方法：`Public` 修饰且非静态方法（`static` 修饰），方法上包含以下注解：

1. `org.springframework.web.bind.annotation.GetMapping`
2. `org.springframework.web.bind.annotation.PostMapping`
3. `org.springframework.web.bind.annotation.GetMapping`
4. `org.springframework.web.bind.annotation.DeleteMapping`
5. `org.springframework.web.bind.annotation.PatchMapping`
6. `org.springframework.web.bind.annotation.RequestMapping`


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

取 `Class` 和  `Method` 上的 path 进行拼装组成。

## 请求方式

根据 `Method` 上的注解生成。

## 请求参数

1. 根据是否有 `@RequestBody` 注解，生成请求 Header 是否为 json 还是 form。同时会检测请求参数中是否有 `@RequestHeader` 注解；

    ![Header](https://cdn.jsdelivr.net/gh/liuzhihang/oss/pic/article/pQHnXo-C4oPfT.png)

2. 对象生成列表；
3. 根据请求是 json 还是 form 生成对应的请求示例。

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
