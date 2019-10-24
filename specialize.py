## 老鼠书_第29章
## specialize.py

class Super:
    def method(self):
        print('in Super.method')
    def delegate(self):  # 抽象父类：需要通过子类填充的方法（delegate 委托、授权）；在后面将会继续学到 @装饰器语法
        self.action()  # 在子类中预期一个action的方法
    def action(self):  # 触发异常
        assert False, 'action must be defined!'

class Inheritor(Super):
    pass

class Replacer(Super):
    def method(self):
        print('in Replacer.method')

class Extender(Super):
    def method(self):
        print('starting Extender.method')
        Super.method(self)
        print('ending Extender.method')

class Provider(Super):
    def action(self):
        print('in Provider.action')

if __name__ == '__main__':
    for klass in (Inheritor, Replacer, Extender):
        print("\n" + klass.__name__ + "...")
        klass().method()
    print('\nProvider...')
    x = Provider()
    x.delegate()  # 会发生两次独立的继承搜索
    x.action()  # 同样的效果
    # X = Super()
    # X.action()