export function randomName(length: number) {
  // '/()%' keywords send error whenever they're in the name of any image.
  const possible: string = "abcdefghijklmnopqrstuvwxyz0123456789";
  let randomName: any;
  for (let index = 0; index < length; index++) {
    randomName += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return randomName;
}

export const checkBuy = (collection: any, object: any) => {
  for (const iterator of object) {
    if (collection[iterator].id === object) {
      return true;
    }
  }
  return false;
};
