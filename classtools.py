## 老鼠书_第28章
## classtools.py

class AttrDisplay():
    def _gatherAttrs(self):
        attrs = []
        for key in sorted(self.__dict__):  # __dict__ => 一个关于属性名与属性值的字典
            attrs.append('%s=%s' % (key, getattr(self, key)))  # getattr 获取实例的属性值，属性名用字符串传入
        return ', '.join(attrs)
    def __repr__(self):
        return '[%s: %s]' % (self.__class__.__name__, self._gatherAttrs())  # __class__ => 实例的类； __class__.__name__ => 实例的类的名称

if __name__ == '__main__':
    class TopTest(AttrDisplay):
        count = 0
        def __init__(self):
            self.attr1 = TopTest.count
            self.attr2 = TopTest.count + 1
            TopTest.count += 2
    class SubTest(TopTest):
        pass 

    X, Y, Z, A = TopTest(), TopTest(), SubTest(), SubTest()
    print(X)
    print(Y)
    print(Z)
    print(A)