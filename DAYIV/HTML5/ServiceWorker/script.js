if (navigator.serviceWorker) {
  window.addEventListener("load", () => {
    this.navigator.serviceWorker.register("serviceWorker.js").then(() => {
      console.log("Service Worker :  Registered !");
    });
  });
}
