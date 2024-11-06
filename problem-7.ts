{
  //
  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}
    getCarAge() {
      const currentYear = 2024;
      return currentYear - this.year;
    }
  }
  const car = new Car("Honda", "Civic", 2018);
  console.log(car.getCarAge());
  //
}
