import { CompassPoints } from './CompassPoints';
import { East, North, South, West } from './RefactoredCompass';

describe('RefactoredCompass', () => {
  it.each([
    [new North(), CompassPoints.East],
    [new East(), CompassPoints.South],
    [new South(), CompassPoints.West],
    [new West(), CompassPoints.North],
  ])('should turn right from %s to %s', (initialDirection, resultDirection) => {
    expect(initialDirection.turnRight().getDirection()).toBe(resultDirection);
  });

  it.each([
    [new North(), CompassPoints.West],
    [new West(), CompassPoints.South],
    [new South(), CompassPoints.East],
    [new East(), CompassPoints.North],
  ])('should turn left from %s to %s', (initialDirection, resultDirection) => {
    expect(initialDirection.turnLeft().getDirection()).toBe(resultDirection);
  });
});
