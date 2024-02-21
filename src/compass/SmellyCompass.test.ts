import { CompassPoints } from './CompassPoints';
import { SmellyCompass } from './SmellyCompass';

describe('SmellyCompass', () => {
  it.each([
    [CompassPoints.North, CompassPoints.East],
    [CompassPoints.East, CompassPoints.South],
    [CompassPoints.South, CompassPoints.West],
    [CompassPoints.West, CompassPoints.North],
  ])('should turn right from %s to %s', (from, to) => {
    const compass = new SmellyCompass(from);

    expect(compass.turnRight().getDirection()).toBe(to);
  });

  it.each([
    [CompassPoints.North, CompassPoints.West],
    [CompassPoints.West, CompassPoints.South],
    [CompassPoints.South, CompassPoints.East],
    [CompassPoints.East, CompassPoints.North],
  ])('should turn left from %s to %s', (from, to) => {
    const compass = new SmellyCompass(from);

    expect(compass.turnLeft().getDirection()).toBe(to);
  });
});
