export default class Todo {
  id: string;
  text: string;

  constructor(text: string) {
    this.id = Math.random().toString();
    this.text = text;
  }
}
