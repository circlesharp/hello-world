## 老鼠书_第30章
## skipper.py

class SkipObject:
    def __init__(self, wrapped):
        self.wrapped = wrapped 
    def __iter__(self):
        return SkipIterator(self.wrapped)  # 可返还多个独立的迭代器对象

class SkipIterator:
    def __init__(self, wrapped):
        self.wrapped = wrapped
        self.offset = 0
    def __next__(self):
        if self.offset >= len(self.wrapped):
            raise StopIteration
        else:
            item = self.wrapped[self.offset]
            self.offset += 2
            return item

if __name__ == "__main__":
    alpha = 'abcdef'
    skipper = SkipObject(alpha)
    I = iter(skipper)
    print(next(I), next(I), next(I))

    for x in skipper:
        for y in skipper:
            print(x + y, end=' ')