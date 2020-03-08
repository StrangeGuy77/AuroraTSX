export const genRandomId = () => {
  const possible = "0123456789";
  let randomId = "";
  for (let index = 0; index < 16; index++) {
    randomId += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return randomId;
};