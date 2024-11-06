{
  //
  function countWordOccurrences(message: string, word: string): number {
    const messageLen: number = message.split(word).length - 1;
    return messageLen;
  }
  const message:string="TypeScript is great. I love TypeScript!";
  const word:string="TypeScript";
  const result:number = countWordOccurrences(message, word);
  console.log(result);
  //
}
