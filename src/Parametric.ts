export class ParametricStack<T> {
  private readonly elements: T[] = [];

  constructor(protected capacity: number) {
    if (capacity < 0) {
      throw new Error(`Invalid capacity: ${capacity}`);
    }
  }

  public push(value: T): void {
    if (this.size() === this.capacity) {
      throw new Error('Cannot push onto full stack');
    }

    this.elements.push(value);
  }

  public pop(): T {
    if (this.isEmpty()) {
      throw new Error('Cannot pop empty stack');
    }

    return this.elements.pop() as T;
  }

  public peek(): T {
    if (this.isEmpty()) {
      throw new Error('Cannot peek empty stack');
    }

    return this.elements[this.elements.length - 1];
  }

  public isEmpty(): boolean {
    return this.elements.length === 0;
  }

  public size(): number {
    return this.elements.length;
  }
}
