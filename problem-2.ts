{
  //
  function removeDuplicates(nums: number[]): number[] {
    const uniqueArray: number[] = [...new Set(nums)];
    return uniqueArray;
  }
  const nums: number[] = [1, 2, 2, 3, 4, 4, 5];
  const result: number[] = removeDuplicates(nums);
  console.log(result);
  //
}
