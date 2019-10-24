## 老鼠书_第28章
## updatedb.py

import shelve
db = shelve.open('persondb')

for key in db:
    print(key, '\t=>', db[key])

tom = db['Tom Jones']
print(dir(tom))
# print(tom)
tom.giveRaise(.10)
db['Tom Jones'] = tom
db.close()