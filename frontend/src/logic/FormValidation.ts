export function formValadation(data: any, controls: any) {
  let res = false;
  controls.forEach((el: string) => {
    if (!data[el]) {
      res = true;
      return;
    }
  });
  return res;
}
