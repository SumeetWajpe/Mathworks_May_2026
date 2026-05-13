function GetPosts() {
  // XMLHttpRequest
  // Get The data
  // Display data in console

  let xmlhttpReq = new XMLHttpRequest();
  xmlhttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts"); // configures

  xmlhttpReq.onreadystatechange = function () {
    console.log(xmlhttpReq.readyState);
    if (xmlhttpReq.readyState === 4 && xmlhttpReq.status === 200) {
      console.log(xmlhttpReq.responseText);
    }
  };
  xmlhttpReq.send();
}
