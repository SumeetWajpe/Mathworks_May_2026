function GetPosts() {
  return new Promise((resolve, reject) => {
    let xmlhttpReq = new XMLHttpRequest();
    xmlhttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts"); // configures

    xmlhttpReq.onreadystatechange = function () {
      console.log(xmlhttpReq.readyState);
      if (xmlhttpReq.readyState === 4 && xmlhttpReq.status === 200) {
        resolve(xmlhttpReq.responseText);
      } else if (xmlhttpReq.readyState == 4 && xmlhttpReq.status !== 200) {
        reject("Something went wrong !");
      }
    };
    xmlhttpReq.send();
  });
}
