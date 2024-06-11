// Callback: A function that tells JS that something has been completed.
/*
Sometimes we need to perform some tasks that needs request/response from outside of our app. Such as get an image from Palestinebook. Js has no way to know wether these tasks have been completed or not. Callbacks acknowledges JS on these tasks completion.
*/

setTimeout(function () {
  console.log("Execute after 2 seconds.");
}, 2000);