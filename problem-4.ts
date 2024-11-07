{
  //
  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    height: number;
    width: number;
  };
  type Shape = Circle | Rectangle;
  function isRectangle(shape: Shape): shape is Rectangle {
    return shape.shape === "rectangle";
  }
  function calculateShapeArea(shape: Shape): number {
    let area: number = 0;
    if (isRectangle(shape)) area = shape.height * shape.width;
    else area = Math.PI * shape.radius * shape.radius;
    return parseFloat(area.toFixed(2));
  }

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(circleArea);
  console.log(rectangleArea);

  //
}
