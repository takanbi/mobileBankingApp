$(function () {
  let login = $("#login");
  let fullGradient = $("#full-gradient-background");
  let welcomeTop = $("#welcome-top-content");
  let welcomeMiddle = $("#welcome-middle-content");
  let welcomeBottom = $("#welcome-bottom-content");
  let checking_1 = $("#checking-1");
  let checkingData = $("#checking-data");
  // const username = "tunjiakanbi@gmail.com";
  // const password = "P@$$w0rd";
  const username = "aaa";
  const password = "bbb";
  let submit = $("#submit");
  let inputUserName = $("#username").val();
  let inputPassword = $("#password").val();
  // console.log(inputUserName);

  login.css("visibility", "visible");
  fullGradient.css("visibility", "visible");
  // login.css("visibility", "hidden");
  // fullGradient.css("visibility", "hidden");
  welcomeTop.css("visibility", "hidden");
  welcomeMiddle.css("visibility", "hidden");
  welcomeBottom.css("visibility", "hidden");
  checking_1.css("visibility", "hidden");
  checkingData.css("visibility", "hidden");
  submit.click(function () {
    login.css("visibility", "hidden");
    fullGradient.css("visibility", "hidden");
    welcomeTop.css("visibility", "visible");
    welcomeMiddle.css("visibility", "visible");
    welcomeBottom.css("visibility", "visible");
    let tl = gsap.timeline();
    tl.from(welcomeTop, {opacity: 0, y: -200, duration: 0.5});
    tl.from(welcomeMiddle, {opacity: 0, x: -200, duration: 0.5});
    tl.from(welcomeBottom, {opacity: 0, y: 200, duration: 0.5});

  });
});
