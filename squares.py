## 老鼠书_第30章
## squares.py

class Squares():
    def __init__(self, start, stop):
        self.value = start - 1
        self.stop = stop
    def __getitem__(self, index):
        return list(self)[index]  # 这是我自己尝试的
    def __iter__(self):
        return self
    def __next__(self):
        if self.value == self.stop:
            raise StopIteration
        self.value += 1
        return self.value ** 2

def gsquares(start, stop):  
    """这是一个生成器函数，
    生成器函数与生成器表达式会隐式储存状态"""
    for i in range(start, stop+1):
        yield i ** 2

if __name__ == "__main__":
    
    for i in Squares(1, 5):
        print(i, end=' ')
    
    squObj = Squares(1, 5)
    print('\n', squObj[1], sep='')
