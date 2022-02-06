// $(document).ready(function(){
//   new WOW().init();
// });

export function animate() {
  var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }
  ready(() => {
    new WOW().init();
  });
}
