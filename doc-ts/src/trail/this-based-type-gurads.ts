class FileSystemObject {
  constructor(public path: string, private networked: boolean) {}

  isFile(): this is FileRep {
    return this instanceof FileRep;
  }

  isDirectory(): this is Directory {
    return this instanceof Directory;
  }

  isNetworked(): this is Networked & this {
    return this.networked;
  }
}

class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}

class Directory extends FileSystemObject {
  children!: Array<FileSystemObject>;
}

interface Networked {
  host: string;
}

function dealWithFSObject(fsObject: FileSystemObject) {
  if (fsObject.isFile()) {
    fsObject.content; // ok
  } else if (fsObject.isDirectory()) {
    fsObject.path; // ok
  } else if (fsObject.isNetworked()) {
    fsObject.host; // ok
  } else {
    //
  }
}






// 
class BoxValueOptional<T> {
  value?: T;
 
  hasValue(): this is { value: T } {
    return this.value !== undefined;
  }
}

const boxValueOptional = new BoxValueOptional();
if (boxValueOptional.hasValue()) {
  boxValueOptional.value;
}