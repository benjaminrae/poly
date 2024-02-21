/* eslint-disable @typescript-eslint/naming-convention */
export abstract class SubtypingComponent {
  constructor(protected className: string) {}

  public abstract getHTML(): string;
}

export class Button extends SubtypingComponent {
  public getHTML() {
    return `<button class="${this.className}">Click me!</button>`;
  }
}

export class Input extends SubtypingComponent {
  constructor(className: string, private readonly type: string) {
    super(className);
  }

  public getHTML() {
    return `<input class="${this.className}" type="${this.type}" />`;
  }
}
