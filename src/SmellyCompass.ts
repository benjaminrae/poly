export enum CompassPoints {
  North = 'N',
  East = 'E',
  South = 'S',
  West = 'W',
}

export class SmellyCompass {
  constructor(private readonly direction: CompassPoints) {}

  public turnRight() {
    switch (this.direction) {
      case CompassPoints.North:
        return new SmellyCompass(CompassPoints.East);
      case CompassPoints.East:
        return new SmellyCompass(CompassPoints.South);
      case CompassPoints.South:
        return new SmellyCompass(CompassPoints.West);
      case CompassPoints.West:
        return new SmellyCompass(CompassPoints.North);
      default:
        throw new Error('Invalid direction');
    }
  }

  public turnLeft() {
    switch (this.direction) {
      case CompassPoints.North:
        return new SmellyCompass(CompassPoints.West);
      case CompassPoints.West:
        return new SmellyCompass(CompassPoints.South);
      case CompassPoints.South:
        return new SmellyCompass(CompassPoints.East);
      case CompassPoints.East:
        return new SmellyCompass(CompassPoints.North);
      default:
        throw new Error('Invalid direction');
    }
  }

  public getDirection() {
    return this.direction;
  }
}
