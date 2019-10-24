## 老鼠书_第29章
## classscope.py

X = 1

def nester():
    X = 2
    print(X)
    class C:
        X = 3
        print(X)
        def method1(self):
            print("X => {}".format(X))  # attention: 这里是2，不是3
            print("self.X => {}".format(self.X))  # 类的属性是3，故而实例属性为3
        def method2(self):
            X = 4
            self.X = 5
            print(X)  # 方法中的局部变量
            print(self.X)  # 实例属性
    I = C()
    I.method1()
    I.method2()

print(X)    
nester()
print('-'*40)
