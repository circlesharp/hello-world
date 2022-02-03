export default class Goal {
  id: string;
  text: string;

  constructor(t: string) {
    this.text = t;
    this.id = Math.random().toString();
  }
}
