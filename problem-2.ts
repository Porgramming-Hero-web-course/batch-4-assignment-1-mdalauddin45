{
  //
  const nums: number[] = [1, 2, 2, 3, 4, 4, 5];
  function removeDuplicates(nums: number[]): number[] {
    return [...new Set(nums)];
  }

  const result: number[] = removeDuplicates(nums);
  console.log(result);
  //
}
