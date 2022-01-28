export class Todo {
  public id: string;
  public text: string;

  constructor(t: string, id?: string) {
    this.text = t;
    this.id = id || Math.random().toString();
  }
}