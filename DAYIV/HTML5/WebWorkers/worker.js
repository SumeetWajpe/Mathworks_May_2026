// 1. No DOM APIS
// 2. No Window object
// 3. XMLHttpRequest + fetch allowed
onmessage = function (msgFromMain) {
  console.log(msgFromMain.data);
  let arr = [];
  for (let i = 0; i < 18000; i++) {
    arr[i] = [];
    for (let j = 0; j < 15000; j++) {
      arr[i][j] = Math.random();
    }
  }
  this.postMessage(arr[5000][5000]);
};
