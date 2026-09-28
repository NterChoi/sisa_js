export class Todo {
  #content;
  #isDone;
  #deadline;

  constructor(a, b) {
    this.#content = a;
    this.#deadline = b;
    this.#isDone = false;
  }

  toggle() {
    this.#isDone = !this.#isDone;
  }

  getContent() {
    return this.#content;
  }

  getDeadline() {
    return this.#deadline;
  }
}
