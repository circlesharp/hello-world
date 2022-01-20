interface Circle {
  kind: 'circle'; // literal type
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type Shape = Circle | Square;
// type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
  if (shape.kind === 'square') {
    return shape.sideLength ** 2;
  } else if (shape.kind === 'circle') {
    return shape.radius ** 2 * Math.PI;
  } else {
    // at this branch , shape's type is never
    // shape

    // 若有未穷尽的, 将会引发错误, 因为类型不是 never
    const _exhaustiveCheck: never = shape;
    return _exhaustiveCheck;
  }

}
