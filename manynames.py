## 老鼠书_第29章
## manynames.py

X = 11  # 模块属性

def f():
    print(X)

def g():
    X = 22  # 函数内的局部变量
    print(X)

class C:
    X = 33  # 类属性
    def m(self):
        X = 44  # 方法中的局部变量，但是没有作用
        self.X = 55  # 实例属性

if __name__ == '__main__':
    print(X)  # 11
    f()  # 11
    g()  # 22
    print(X)  # 11

    obj = C()
    print(obj.X)  # 33

    obj.m()
    print(obj.X)  # 55，因为执行了 obj.m() 修改了实例属性
    print(C.X)  # 33

    # print(C.m.X)  # 可以查看方法中的局部变量
    # print(g.X)  # 不可查看函数内的局部变量