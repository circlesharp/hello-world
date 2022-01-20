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

## Everyday Type
> In this chapter, we’ll cover some of the most common types of values you’ll find in JavaScript code, and explain the corresponding ways to describe those types in TypeScript.

### The primitives
Js 最常用的基本类型(primitives): string, number, boolean

### Arrays
1. 写法一 `number[]`, `string[]`
2. 写法二 `Array<number>`
3. `[number]` 这是元组

### any
1. 用于不想让一个值引起 ts 的类型检查错误
2. 当没有标明类型, 且 ts 无法通过上下文推导类型, tsc 会将其默认为 any
3. 通过 `noImplicitAny` 避免

### Type Annotations on Variables
当使用 var, let, const 声明一个变量时可以显式进行类型注解, 尽管不是必须的

### Functions
ts 允许指定函数的输入输出的值的类型
1. Parameter Type Annotations
   1. 类型注解在参数后
   2. 即使不注解, ts 也会检查参数数量
2. Return Type Annotations
   1. 返回值类型注解写在参数后
3. Anonymous Functions
   1. 上下文类型(contextual typing)

### Object Types
1. 直接写, 可用逗号或分号分割 `pt: {x: number; y: number;}`
2. 可选属性(Optional Properties): 在属性名后面加个问号
   1. 要注意, 如果访问可选属性, 请先判断是否 undefined, 或者用 optional chaining

### Union Types
1. 定义一个 Union Type
   1. A union type is a type formed from two or more other types, representing values that **may be any one of those types**.
   2. We refer to each of these types as the union’s members.  
2. Working with Union Types
   1. 可以去传满足该 union type 其中一个的 member 类型的值
   2. 需要 narrow
   3. 或者操作他们共有的东西(intersection of those types' properties)

### Type Aliases
`type xxx = any type`

### Interfaces
1. 像 anonymous object type, ts 只检查结构和能力(structure and capabilities), 因此 ts 是结构类型类型系统 (structurally typed type system)
2. Differences Between Type Aliases and Interfaces  
  A type cannot be re-opened to add new properties vs an interface which is always extendable.  
   1. interface 用 extends 拓展, type 用 intersections(交叉, &) 拓展
   2. interface 支持 declaration merging, type 不支持

### Type Assertions
1. 语法: `<type>xxx` 或 `xxx as type`
2. TypeScript only allows type assertions which convert to a more specific or less specific version of a type, 防止去转换成一些不可能的值. 可以使用 `const a = (expr as any) as T;`

### Literal Types
1. 当使用了 const 来声明, 相当于 ts 创建了一个字面量类型
2. 可以通过 union 组合起来, 如 `type boolean = true | false`
3. Literal Inference: 当字母量推断失败, 可以使用: `as LiteralType` 或 `as const`

### null and undefined
他们的表现取决于 `strictNullChecks`
1. strictNullChecks off: the values null and undefined can be assigned to a property of any type
2. strictNullChecks on: when a value is null or undefined, you will need to test for those values before using methods or properties on that value.
3. Non-null Assertion Operator (postfix !)

### Enums
describe a value which could be one of a set of possible named constants
不是一个类型层面(type-level)的存在, 会编译进代码的

### Less Common Primitives
1. bigint
2. symbol: 不要标注类型, ts 会给单独给 symbol 实例创建类型

## Narrowing
> Much like how TypeScript analyzes runtime values using static types, it overlays type analysis on JavaScript’s runtime control flow constructs like if/else, conditional ternaries, loops, truthiness checks, etc., which can all affect those types.  
> ts 在 js 运行时控制流结构中也覆盖了类型检查, 这些结构包括: if/else, 三元表达式, 循环, 真实性检查  
> narrow: the process of refining types to more specific types  

### typeof type guards
1. typeof: string, number, bigint, boolean, symbol, undefined, object, function
2. ts 也知道 js typeof 的一些怪癖(quirks)

### Truthiness narrowing
1. js coerce things to boolean, when: `&&, ||, if, !, ...`
2. 等价于 `Boolean` (Boolean function) 或 `!!` (double-Boolean negation)
3. 谨记, 对基本类型使用 truthiness checking 通常易出错, 因为诸如 空字符, 数字0 会被认为错误

### Equality narrowing
1. switch
2. ===, !==, ==, !=

### The in operator narrowing
1. "value" in x. where "value" is a string literal and x is a union type
2. 如果是可选属性(optional property), 会出现在 narrowing 的真假两条分支

### instanceof narrowing
1. x instanceof Foo checks whether the prototype chain of x contains Foo.prototype
2. instanceof 因l此也是 type guard

### Assignments
如果标注的类型是 union, 允许给这个变量赋值 union 其中的任一 member, 且 ts 能 narrow

### Control flow analysis
基于代码是否可抵达(reachability)的分析称为控制流分析(control flow analysis), 不同的点变量允许具有不同的类型

### Using type predicates
1. To define a **user-defined type guard**, we simply need to define a function whose **return type is a type predicate**. 函数的返回值的类型是类型谓词, 类型谓词是用户自定义 type-guard 的一种实现方式
2. A predicate takes the form `parameterName is Type`, parameterName 必须是函数的参数

### Discriminated unions
discriminated union: every type in a union contains a common property with literal types, 即 union 的每个 member 都包含一个共同属性, 其类型是字面量

### The never type
TypeScript will use a never type to represent a state which shouldn’t exist.
随着 narrow 的进展, 没有 member 剩余的时候, 用 never 代表这个不存在的状态

### Exhaustiveness checking
The never type is assignable to every type; however, no type is assignable to never (except never itself). 
可以作为检验是否穷尽了所有状态
