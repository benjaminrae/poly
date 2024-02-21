import { CompassPoints } from './CompassPoints';

export abstract class RefactoredCompass {
  constructor(private readonly direction: CompassPoints) {}

  public getDirection(): string {
    return this.direction;
  }

  public abstract turnRight(): RefactoredCompass;
  public abstract turnLeft(): RefactoredCompass;
}

export class North extends RefactoredCompass {
  constructor() {
    super(CompassPoints.North);
  }

  public turnRight() {
    return new East();
  }

  public turnLeft() {
    return new West();
  }
}

export class East extends RefactoredCompass {
  constructor() {
    super(CompassPoints.East);
  }

  public turnRight() {
    return new South();
  }

  public turnLeft() {
    return new North();
  }
}

export class South extends RefactoredCompass {
  constructor() {
    super(CompassPoints.South);
  }

  public turnRight() {
    return new West();
  }

  public turnLeft() {
    return new East();
  }
}

export class West extends RefactoredCompass {
  constructor() {
    super(CompassPoints.West);
  }

  public turnRight() {
    return new North();
  }

  public turnLeft() {
    return new South();
  }
}
