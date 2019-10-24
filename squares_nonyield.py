## 老鼠书_第30章
## squares_nonyield.py

class Squares:
    def __init__(self, start, stop):
        self.start = start
        self.stop = stop
    def __iter__(self):
        return SquaresIter(self.start, self.stop)

class SquaresIter:
    def __init__(self, start, stop):
        self.value = start - 1
        self.stop = stop
    def __next__(self):
        if self.value == self.stop:
            raise StopIteration
        self.value += 1
        return self.value ** 2

if __name__ == '__main__':
    for i in Squares(1, 5):
        print(i, end=' ')
    # for i in Squares(1, 5).gen():
    #     print(i, end=' ')
    S = Squares(1, 5)
    print(next(iter(S)), '='*40, sep='\n')  # 先通过iter()，再使用next()
    S = Squares(1, 3)
    for i in S:
        for j in S:
            print('%s:%s' % (i, j), end=' ')