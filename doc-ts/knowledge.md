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

## More on Functions

### Function Type Expressions
1. 最简单的就是函数类型表达式(function type expression): `(a: string) => void`

### Call Signatures
1. 对于具有属性的函数, 可以使用调用签名(call signature), 写在对象类型上
2. 注意, call signature 不同于 function type expression, 用 `:` 而非 `=>`
``` ts
type Fun = {
   prop: string;
   (a: string): boolean;
}
```

### Construct Signatures
1. 构造签名(construct signature): 在 call signature 前增加 new
2. 部分函数既可构造也可调用, 可以同时写这两个签名
``` ts
type Date = {
   new (s?: string): Date;
   (s?: string): number;
}
```

### Generic Functions
1. generic: generics are used when we want to describe a correspondence between two values.
2. type parameter: 可以给函数增加类型参数(type parameter)
3. Inference: ts 可以在调用的时候推断类型参数, 不需显式传入
4. Constraints: 可以对这个泛型进行约束
   1. `<T extends {length: number}>`
5. Working with Constrained Values: 列举了一个错误示例, 满足 constraint 不代表满足这个泛型
6. Specifying Type Arguments: 没啥说的
7. Guidelines for Writing Good Generic Functions
   1. Push Type Parameters Down: 尽可能使用类型本身, 而非限制它
   2. Use Fewer Type Parameters
   3. Type Parameters Should Appear Twice: 如果只用了一次, 想想是否真的需要它

### Optional Parameters
1. mark the parameter as optional with `?`, 这代表该值的类型会和 undefined 联合(`type | undefined`)
2. can also provide a parameter default with `= defaultValue`
3. 对于回调函数, 不要指定可选参数, 除非真的不想传递这个参数

### Function Overloads
1. Some JavaScript functions can be called in a variety of argument counts and types. In TypeScript, we can specify a function that can be called in different ways by writing overload signatures.
2. To do this, write some number of function signatures (usually two or more), followed by the body of the function
3. 函数声明是写在函数定义之上的, 成为 overload signature; 函数体是 implementation signature, 但是是不能直接调用的; 能调用的合法形式只能是 overload signature
4. Overload Signatures and the Implementation Signature: implementation signature 对外是不可见的, 而且要和诸多 overload signature 兼容
5. Writing Good Overloads: 尽可能有 union type 的参数代替 overload, 如果 overload signature 不支持 union type, 即使 implementation signature 支持也没用

### Declaring this in a Function
1. TypeScript will infer what the this should be in a function via code flow analysis
2. The JavaScript specification states that you cannot have a parameter called this, and so TypeScript uses that syntax space to let you declare the type for this in the function body: `(this: type) => boolean`
3. 需要注意, 箭头函数不能使用此类型
4. p.s. 我不知道有啥用

### Other Types to Know About
1. void: void represents the return value of functions which don’t return a value, 注意: void 与 undefined 是不一样的
2. object: The special type object refers to any value that isn’t a primitive, 注意: 不同于 {}, 不同于 Object
3. unknown: The unknown type represents any value, but not the any type; it’s not legal to do anything with an unknown value. 例如: JSON.parse 的结果就是 unknown
4. never: The never type represents values which are never observed:
   1. 函数 throw error, 返回值就是 never
   2. there’s nothing left in a union
5. Function: describes properties can always be called, return any, 注意, 因为返回值是 any, 代表不安全, 建议在不想调用这个函数的情况下使用安全的 `() => void`

### Rest Parameters and Arguments
1. Rest Parameters: define functions that take an unbounded number of arguments using rest parameters. 类型必须是 `Array<T>` 或 tuple
2. Rest Arguments: we can provide a variable number of arguments from an array using the spread syntax; 但注意, ts 不会认为 array 是 immutable, 所以有时需要 as const, 否则可能不符合函数的入参标准

### Parameter Destructuring
1. You can use parameter destructuring to conveniently unpack objects provided as an argument into one or more local variables in the function body

### Assignability of Functions
1. a contextual function type with a void return type (type vf = () => void), when implemented, can return any other value, but it will be ignored. 实现了指定了返回值类型为 void 的函数的返回值会被忽略
2. 这使得 `src.forEach((el) => dst.push(el))` 合理, 因为 forEach 期待的函数的返回值是 void
3. 如果字面量函数定义 (literal function definition) 制定了 void 为返回类型, 则不能返回东西 (ps 所以第一条强调了 implement)

## Object Types
> 1. anonymous: `{ name: string; age: number }`
> 2. interface: `interface Person { name: string; age: number; }`
> 3. type alias: `type Person = { name: string; age: number; }`

### Property Modifiers
1. Optional Properties: `?`, 在 strictNullChecks 下:
   1. 需要判断是否为 undefined
   2. 也可以用 js 的解构语法提供默认值: `{shape, xPos = 0, yPos = 0}`, 此时, 函数体内所有值都是存在的, 但对于调用函数时确是可选的
   3. 需要注意, 解构内部是不能写类型标注的, 因为在解构是写冒号意味着重命名
2. readonly Properties: a property marked as readonly can’t be written to during type-checking
   1. 在运行是不能改变其值
   2. 不意味着 immutable, 仅意味着值本身不能改变
   3. 在检查两个类型是否兼容时, readonly 不在考虑之类
3. Index Signatures: Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values: `[prop: string]: xxx`
   1. 索引签名(index signature)属性的类型必须是 string or number
   2. 如果同时支持两种类型, 数值索引的值必须时字符串索引的子类 (the type returned from a numeric indexer must be a subtype of the type returned from the string indexer.)
   3. string index signature 会强迫所有属性匹配他们的返回类型, 所以可以对其指定 union
   4. 可以对 index signature 指定 readonly, 禁止对其索引赋值

### Extending Types
interface can extend from 1 or multiple interface
`interface ColorfulCircle extends Colorful, Circle {}`

### Intersection Types
1. An intersection type is defined using the & operator.
2. interface vs intersection: 回顾之前的笔记, interface 用 extends 拓展, type 用 intersection 拓展
3. ps: 交集(intersection of sets), 并集(union of sets)

### Generic Object Types
``` ts
// A Box of Type is something whose contents have type Type
interface Box<Type> {
  contents: Type;
}
```
不仅 interface 支持泛型, type 也支持泛型

### The Array Type
1. Generic object types are often some sort of container type that work independently of the type of elements they contain. 泛型对象类型被看作容器, 与他们所储存的元素无关
2. Array itself is a generic type.
3. Modern JavaScript also provides other data structures which are generic, like `Map<K, V>, Set<T>, and Promise<T>`, All this really means is that they can work with any sets of types.

### The ReadonlyArray Type
1. `ReadonlyArray<T>` 或 `readonly T[]`
2. 不像 readonly property modifier, ReadonlyArray 不能赋值给 Array

### The ReadonlyArray Type
1. A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions:
   1. 元素数量确定
   2. 各元素类型确定
   3. 本质是数组
2. `[Type1, Type2]`
3. 如果可以, 用对象来取代元组 (with descriptive property names)
4. 元组可以有 optional properties: `[Type1, Type2?]`, 可选的类型被认为是 `Type2 | undefined`
5. 元组支持 rest elements, 好处是使得 ts 能用元组描述 parameter list
   1. `...args: [string, number, ...boolean[]]` === `name: string, version: number, ...input: boolean[]`

### readonly Tuple Type
1. `readonly [Type1, Type2]`
2. `let val = [value1, value2] as const`

## Type Manipulation - Creating Type from Types
> ts allow expressing types in terms of other types

### Generics

#### Hello World of Generics
``` ts
function identity<T>(arg: T): T {
   return arg;
}
```
1. 使用方法
   1. pass all of the arguments, including the type argument: `let output = identity<string>("myString");`
   2. use type argument inference: `let output = identity("myString");`

#### Working with Generic Type Variables
1. 代表任何类型
2. 可以缩小泛型的所指范围, 并跟据这个小范围拓展成大范围

#### Generic Types
1. generic functions
   1. `function fun<T>(arg: T): T {}`
   2. `<T>(arg: T) => T;`
   3. `{<T>(arg: T): T}` (call signature)
2. generic interface
   1. `interface Fn { <T>(arg: T): T }`
   2. `interface Fn<T> { (arg: T): T }`
3. Note that it is not possible to create generic enums and namespaces.
4. generic class
   1. `class Ca<T> { arg: T; }`
   2. class 具有两面: static side, instance side; 而 generic class 仅 cover the instance side, not the static side
   
#### Generic Constraints
> want to write a generic function that works on a set of types where you have some knowledge about what capabilities that set of types will have.
1. generic 意味 any and all types, 可以对其约束: `<T extends {length: number}>`
2. Using Type Parameters in Generic Constraints: You can declare a type parameter that is constrained by another type parameter:
   1. <T, K extends keyof T>

#### Using Class Types in Generics
1. `interface ConFn<T> {new (...args: Array<any>): T;}`
2. 注意, class 作为类型

### The keyof Type Operator
1. The keyof operator takes an object type and produces a string or numeric **literal union** of its keys: `keyof P` => `'x' | 'y'`
2. 如果 keyof Type 中的这个 Type 有 index signature:
   1. `[prop: number]` => `number`
   2. `[prop: string]` => `number | string`

### Typeof Type Operator
1. TypeScript adds a typeof operator you can use in a **type context** to refer to the type of a variable or property: `let str = ''; typeof str` => `string`
   1. ps. 注意区分这里 type context, 与之相对的是 expression context
   2. 基本类型定义的时候如果用了 const, 会被认为是字面量类型
2. typeof 用在复杂类型上比较有用
3. ts 限制了 typeof 表达式, 仅适用于标识符与标识符的属性 (identifiers of their properties)

### Indexed Access Types
1. We can use an indexed access type to look up a specific property on another type: `type OneType = AnotherType[key]`
2. the indexing type is itself a type:
   1. union: `typeof Person["age" | "name"]` => `string | number`
   2. keyof: `typeof Person[keyof Person]` => 相当于 `typeof Person["age" | "name" | ...]`, 因为 keyof 返回的是字面量 union
   3. number: `typeof myArray[number]` => 取出 Array 的元素的值
3. 注意, indexing 的时候, 只能是 type, 不能是变量

### Conditional Types
1. Definition: Conditional types take a form that looks a little like conditional expressions (condition ? trueExpression : falseExpression) in JavaScript: `SomeType extends OtherType ? TrueType : FalseType;`
2. Conditional Type Constraints: 就是基本的形式, 在第一段使用 extends
3. Inferring Within Conditional Types: 多使用了一个泛型, 但不是作为类型参数
4. Distributive Condition Types: 遵循分配律的条件类型, When conditional types act on a generic type, they become distributive when given a union type; To avoid that behavior, you can surround each side of the extends keyword with square brackets.

### Mapped Types
1. mapped types build on the index signature.
2. a mapped type is a generic type which uses a union of PropertyKeys (frequently create via a keyof) to iterate through keys to create type: `type  OptionsFlags<Type> = { [Property in keyof Type]: boolean; };`
3. Mapping Modifiers: can remove of add `readonly` and `?` by prefixing with `-` or `+`
4. Key Remapping via as: re-map keys in mapped types with an as clause in a mapped type: `type MappedTypeWithNewProperties<T> = { [P in keyof T as NewKeyType]: T[P]; }`
5. Further Exploration: 没啥说的, 就是一个例子, mapped type 可以和 conditional type work well

### Template Literal Types
1. Template literal types build on string literal types, 模板字面量类型是基于字符串字面量类型的
2. When a union is used in the interpolated position, the type is the set of every possible string literal that could be represented by each union member, 即: 如果插值处使用了 union, 这个类型也是 union, 如: `` type X = `${A | B}_id`; ``, 而且,  the unions are cross multiplied (交叉相乘)
3. String Unions in Types: 一个很 fancy 的例子
4. Intrinsic String Manipulation Types:
   1. Uppercase
   2. Lowercase
   3. Capitalize
   4. Uncapitalize