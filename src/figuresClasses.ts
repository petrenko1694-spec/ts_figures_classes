export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('some parameter is equal to zero');
    }

    if (a >= b + c || b >= a + c || c >= b + a) {
      throw new Error('some side is equal or more than a sum of two others');
    }
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);

    return (
      Math.floor(
        (s * (s - this.a) * (s - this.b) * (s - this.c)) ** 0.5 * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  readonly shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('some parameter is equal to zero');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('some parameter is equal to zero');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}

// const redRectangle = new Rectangle('red', 3, 5);
//  //=== 'A red rectangle - 15';
// console.log(getInfo(redRectangle));

// const greenCircle = new Circle('green', 1);
//  //=== 'A green circle - 3.14';
// console.log(getInfo(greenCircle));
