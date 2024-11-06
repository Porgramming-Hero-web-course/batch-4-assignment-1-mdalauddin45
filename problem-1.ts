{
    //
    function sumArray(nums:number[]):number{
        let result = 0;
        nums.forEach((n)=>{
            result += n;
        })
        return result;
    }
    const nums:number[] =[1,2,3,4,5];
    const sum=sumArray(nums);
    console.log(sum);
    //
}