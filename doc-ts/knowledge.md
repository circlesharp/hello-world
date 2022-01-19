# TypeScript
> 说明:  
> 本文档是依据[官网](https://www.typescriptlang.org/docs/handbook/intro.html)的结构所成的学习笔记. 跟着官网思路成文.旨在系统学习 ts 知识, 建立完整的体系.  
> 后续的博客则根据本文档再次生成.  

## The TypeScript Handbook

### 1 About this Handbook
1. 出现了不匹配: 项目复杂度与语言本身
2. 程序员最常见的错误是 type errors
3. ts 的使命是: be a **static typechecker** for js programs: 一个在代码运行前(static)就运行的工具, 确保程序中的类型是正确的(typechecker).
   
### 2 How is this Handbook Structured
1. The Handbook: a comprehensive guide
2. Reference Files: a concise document

## The Basic
> js 使用 dynamic typing: running the code to see what happens.  
> ts static typing: make predictions about what code is expected before it runs.  

### 1 Static type-checking
静态类型系统描述了在运行的时候我们的值将会是什么样子, 有什么表现

### 2 Non-exception Failures
1. 捕捉合法错误(catch legitimate bugs): 静态类型系统必须把错误标注成错误, 尽管在 js 中不一定是异常
2. 尽管有时, 这涉及到我们表达的权衡问题

### 3 Types for Tooling
1. ts 作为工具, 能够提供代码补全(code completion), 快速修复(quick fixes)

### 4 tsc, the TypeScript compiler
1. tsc: ts编译器
2. 编译器试图 emit 干净的, 可读的代码, 看起来像人写的一样
3. 编译器努力地找错误

### 5 Emitting with Errors
1. 尽管 tsc 报错了, 但是文件还是生成了. 因为 ts 的核心价值观是: much of the time, you will know better than TypeScript.
2. 可设置成更加严格: `noEmitOnError`

### 6 Explicit Types
1. 不需要总是写显式的类型标注(explicit type annotation), 很多时候 ts 会推断(infer, figure out)

### 7 Erased Types
1. 目标代码是不含类型标注的
2. Type annotations never change the runtime behavior of your program.

### 8 Downlevel
1. By default TypeScript targets ES3
2. 设置: `target`

### 9 Strictness
1. `strict`: 默认全部打开
2. `noImplicitAny`: any 意味着 ts 不管, 此开关会禁止隐式的 any
3. `strictNullChecks`: 需要显式地处理 null & undefined
