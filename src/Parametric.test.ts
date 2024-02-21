import { ParametricStack } from './Parametric';

describe('ParametricStack', () => {
  let stack: ParametricStack<number>;

  beforeEach(() => {
    stack = new ParametricStack(10);
  });

  it('should be empty when created', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it('should not be empty when an item is added', () => {
    stack.push(1);

    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(1);
  });

  it('should have the latest item added at the top', () => {
    stack.push(1);

    expect(stack.peek()).toBe(1);
  });

  it('should be empty when the last item is removed', () => {
    stack.push(1);
    stack.pop();

    expect(stack.isEmpty()).toBe(true);
  });

  it('should underfow when it is empty and an item is removed', () => {
    expect(() => stack.pop()).toThrowError('Cannot pop empty stack');
  });

  it('should overflow when an item is added and it is full', () => {
    const stack = new ParametricStack(1);

    stack.push(1);

    expect(() => {
      stack.push(2);
    }).toThrowError('Cannot push onto full stack');
  });

  it('should not be created with a negative capacity', () => {
    expect(() => new ParametricStack(-1)).toThrowError('Invalid capacity: -1');
  });

  it('should underflow if it is peeked while empty', () => {
    expect(() => stack.peek()).toThrowError('Cannot peek empty stack');
  });
});
