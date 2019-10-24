## 老鼠书_第30章
## contains.py
"""
优先级：__contains__ > __iter__ > __getitem__
但是， __getitem__ 能够拦截迭代、索引、分片
"""

class Iters:
    def __init__(self, value):
        self.data = value
    
    def __getitem__(self, i):  # 继承别人的 __getitem__
        print('get[%s]:' % i, end='')
        return self.data[i]  

    # def __iter__(self):
    #     print('iter=> ', end='')
    #     self.ix = 0  # self.ix是一个计数器
    #     return self
    
    def __next__(self):
        print('next:', end='')
        if self.ix == len(self.data): raise StopIteration  # 通过计数器 raise 异常
        item = self.data[self.ix]  # 这个能行，是因为 __getitem__
        self.ix += 1
        return item
    
    # def __contains__(self, x):  # 成员操作符
    #     print('contains: ', end='')  # 每一次 in 都会打印出来
    #     return x in self.data  # 继承了别人的 __contains__

if __name__ == '__main__':
    X = Iters([1, 2, 3, 4, 5])
    print(3 in X)
    for i in X:  # 尽管有 in , 但是实际上是执行了 __iter__
        print(i, end =' | ')
    
    print('\n', '='*30)

    print([i ** 2 for i in X])
    print(list(map(bin, X)))
    I = iter(X)
    while True:
        try:
            print(next(I), end=" @ ")
        except StopIteration:
            break