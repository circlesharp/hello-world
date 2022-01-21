interface ShowID {
  (this: User): string;
}

interface UserInterface {
  showId: ShowID;
}

class User implements UserInterface {
  constructor(private id: string) {}
  showId() {
    return this.id;
  };
}

const user = new User('id');

let aa = {
  id: 'a',
  showId() {},
};

let bb = {showId() {}};

// 好像也没报错, 不知道有啥用...
aa.showId = user.showId;
bb.showId = user.showId;

bb.showId();