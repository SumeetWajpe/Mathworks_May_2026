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
