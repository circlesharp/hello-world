## 老鼠书_第28章
## person.py

from classtools import AttrDisplay

class Person(AttrDisplay):
    def __init__(self, name, job=None, pay=0):  # job参数成为可选参数
        self.name = name
        self.job = job
        self.pay = pay
    def lastName(self):
        return self.name.split()[-1]
    def giveRaise(self, percent):
        self.pay = int(self.pay * (1 + percent))  # 原位置修改
    # def  __repr__(self):
    #     return '[Person: %s, %s]' % (self.name, self.pay)

class Manager(Person):
    def __init__(self, name, pay):  # 定制构造函数使得不再需要重复输入岗位mgr
        Person.__init__(self, name, 'mgr', pay)
    def giveRaise(self, percent, bonus=.1):
        Person.giveRaise(self, percent+bonus)  # 注意：这里是调用了Person类的giveRaise方法（先别用super）

if __name__ == '__main__':
    bob = Person('Bob Smith')
    sue = Person('Sue Jones', job='dev', pay=100000)
    print(bob.name)
    print(sue)
    print(bob.lastName(), sue.lastName())
    sue.giveRaise(.10)
    print(sue)
    tom = Manager('Tom Jones', 50000)
    tom.giveRaise(.1)
    print(tom.lastName())
    print(tom)
    print('--All three--')
    # for obj in (bob, sue, tom):
    #     obj.giveRaise(.1)
    #     print(obj)