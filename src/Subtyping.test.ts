import { Button, Input } from './Subtyping';

describe('Subtyping', () => {
  describe('Button', () => {
    it('should render a button', () => {
      const button = new Button('btn');

      expect(button.getHTML()).toBe('<button class="btn">Click me!</button>');
    });
  });

  describe('Input', () => {
    it('should render an input', () => {
      const input = new Input('username', 'text');

      expect(input.getHTML()).toBe('<input class="username" type="text" />');
    });
  });
});
