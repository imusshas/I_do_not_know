function abcd(val) {
  val();    // First class function
}

abcd(
  /*********     First class function     ***************/
  function () {
    console.log("I am a function");
  }
  /*********     First class function     ***************/
);