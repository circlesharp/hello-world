## 老鼠书_第30章
## squares_yield.py

class Squares:
    def __init__(self, start, stop):
        self.start = start
        self.stop = stop
    def __iter__(self):
        for value in range(self.start, self.stop+1):
            yield value **2  # 这是一个生成器对象，先通过iter()，再使用next()
    def gen(self):
        for value in range(self.start, self.stop+1):
            yield value **2

if __name__ == '__main__':
    for i in Squares(1, 5):
        print(i, end=' ')
    for i in Squares(1, 5).gen():
        print(i, end=' ')
    S = Squares(1, 5)
    print(next(iter(S)), '='*40, sep='\n')  # 先通过iter()，再使用next()
    S = Squares(1, 3)
    for i in S:
        for j in S:
            print('%s:%s' % (i, j), end=' ')