$(function () {
  let login = $("#login");
  let fullGradient = $("#full-gradient-background");
  let welcomeTop = $("#welcome-top-content");
  let welcomeMiddle = $("#welcome-middle-content");
  let welcomeBottom = $("#welcome-bottom-content");
  let checking_1 = $("#checking-1");
  let checkingData = $("#checking-data");
  let checking = $("#checking");
  let savings = $("#savings");
  // const username = "tunjiakanbi@gmail.com";
  // const password = "P@$$w0rd";
  const username = "aaa";
  const password = "bbb";
  let submit = $("#submit");
  let inputUserName = $("#username");
  let inputPassword = $("#password");
//   let inputUserName = $("#username").val();
//   let inputPassword = $("#password").val();
  let leftChevron = $("#left");
  let welcomeMain = $("#welcome-main-content");

  login.css("visibility", "visible");
  fullGradient.css("visibility", "visible");
  // login.css("visibility", "hidden");
  // fullGradient.css("visibility", "hidden");
  welcomeTop.css("visibility", "hidden");
  welcomeMiddle.css("visibility", "hidden");
  welcomeBottom.css("visibility", "hidden");
  checking_1.css("visibility", "hidden");
  checkingData.css("visibility", "hidden");
  submit.click(loadWelcome); //{
//   login.css("visibility", "hidden");
//   login.css("display", "none");
//   fullGradient.css("visibility", "hidden");
//   welcomeTop.css("visibility", "visible");
//   welcomeMiddle.css("visibility", "visible");
//   welcomeBottom.css("visibility", "visible");
//   let tl = gsap.timeline();
//   tl.from(welcomeTop, {opacity: 0, y: -200, duration: 0.5});
//   tl.from(welcomeMiddle, {opacity: 0, x: 200, duration: 0.5});
//   tl.from(welcomeBottom, {opacity: 0, y: 200, duration: 0.5});
//   });
//   if((inputUserName == username) && (inputPassword == password)) {
//     console.log(inputUserName +" "+inputPassword);
//   }
  function loadWelcome() {
    // event.preventDefault();    
//    function CHECK (event) {
//     event.preventDefault();
//     let test1 = inputUserName.val().trim();
//     let test2 = inputPassword.val().trim();
//     console.log(test1);
//     if((username === test1) && (password === test2)) {
//         console.log(test2);
//     }
//    }
// CHECK();
        login.css("visibility", "hidden");
        // login.css("display", "none");
        fullGradient.css("visibility", "hidden");
        welcomeTop.css("visibility", "visible");
        welcomeMiddle.css("visibility", "visible");
        welcomeBottom.css("visibility", "visible");
        welcomeMain.css("z-index", "5");
        let tl = gsap.timeline();
        tl.from(welcomeTop, { opacity: 0, y: -200, duration: 0.5 });
        tl.from(welcomeMiddle, { opacity: 0, x: 200, duration: 0.5 });
        tl.from(welcomeBottom, { opacity: 0, y: 200, duration: 0.5 });
    
 // }
  checking.click(() => {
    welcomeTop.css("visibility", "hidden");
    welcomeMiddle.css("visibility", "hidden");
    checking_1.css("visibility", "visible");
    checkingData.css("visibility", "visible");
    welcomeMain.css("z-index", "4");
  });
  leftChevron.click(() => {
    loadWelcome();
    checking_1.css("visibility", "hidden");
    checkingData.css("visibility", "hidden");
  });
});
