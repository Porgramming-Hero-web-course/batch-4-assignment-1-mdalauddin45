{
  //
  function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    let flag = false;
    keys.forEach((key) => {
      if (key in obj) flag = true;
    });
    return flag;
  }
  const person = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };
  console.log(validateKeys(person, ["name", "age"]));

  //
}
