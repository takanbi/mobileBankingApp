$(function () {
  // let wrapperContent = $("#wrapper-content");
  // wrapperContent.css("visibility","hidden");
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
  let inputUserName;
  let inputPassword;
  // let inputUserName = $("#username").val().trim();
  // let inputPassword = $("#password");
  //   let inputUserName = $("#username").val();
  //   let inputPassword = $("#password").val();
  let leftChevron = $("#left");
  let welcomeMain = $("#welcome-main-content");
  let userFName = $("#userFName");
  login.css("visibility", "visible");
  fullGradient.css("visibility", "visible");
  // login.css("visibility", "hidden");
  // fullGradient.css("visibility", "hidden");
  welcomeTop.css("visibility", "hidden");
  welcomeMiddle.css("visibility", "hidden");
  welcomeBottom.css("visibility", "hidden");
  checking_1.css("visibility", "hidden");
  checkingData.css("visibility", "hidden");
  // submit.click(loadWelcome); //{
  submit.click(loadWelcome);
  function loadWelcome() {
    getUserName();
    getPassword();
    if (inputUserName === username && inputPassword === password) {
      getData();
      login.css("visibility", "hidden");
      login.css("display", "none");
      fullGradient.css("visibility", "hidden");
      welcomeTop.css("visibility", "visible");
      welcomeMiddle.css("visibility", "visible");
      welcomeBottom.css("visibility", "visible");
      welcomeMain.css("z-index", "5");
      // wrapperContent.css("visibility","visible");
      let tl = gsap.timeline();
      tl.from(welcomeTop, { opacity: 0, y: -200, duration: 0.5 });
      tl.from(welcomeMiddle, { opacity: 0, x: 200, duration: 0.5 });
      tl.from(welcomeBottom, { opacity: 0, y: 200, duration: 0.5 });
    }
  }
  checking.click(loadChecking);
  function loadChecking() {
    welcomeTop.css("visibility", "hidden");
    welcomeMiddle.css("visibility", "hidden");
    checking_1.css("visibility", "visible");
    checkingData.css("visibility", "visible");
    welcomeMain.css("z-index", "4");
  }
  leftChevron.click(reLoadWelcome);

  function reLoadWelcome() {
    welcomeTop.css("visibility", "visible");
    welcomeMiddle.css("visibility", "visible");
    checking_1.css("visibility", "hidden");
    checkingData.css("visibility", "hidden");
    welcomeMain.css("z-index", "5");
  }

  function getUserName() {
    $("#username")
      .keyup(function () {
        let userNameValue = $(this).val();
        console.log(userNameValue);
        inputUserName = userNameValue;
      })
      .keyup();
  }
  function getPassword() {
    $("#password")
      .keyup(function () {
        let passwordValue = $(this).val();
        console.log(passwordValue);
        inputPassword = passwordValue;
      })
      .keyup();
  }

  function getData() {
    $.ajax({
      url: "js/data.json",
      type: "GET",
      dataType: "json",
      success: function(data) {
        console.log(data[0].userFName);
        userFName.text(data[0].userFName);
        $("#yearJoin").text("Customer since " + data[0].yearJoined);
        $("#checkingNum").text(data[0].checkingNum);
        $("#checkingBal").text(data[0].checkingBal);
        $("#savingsNum").text(data[0].savingsNum);
        $("#savingsBal").text(data[0].savingsBal);
        
      }
      //error: function(jq)
    })
  }
});
