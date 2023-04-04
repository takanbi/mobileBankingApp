$(function () {
  gsap.registerPlugin(GSDevTools, TextPlugin);
  // let wrapperContent = $("#wrapper-content");
  // wrapperContent.css("visibility","hidden");
  let login = $("#login");
  let fullGradient = $("#full-gradient-background");
  let welcomeTop = $("#welcome-top-content");
  let welcomeMiddle = $("#welcome-middle-content");
  let welcomeBottom = $("#welcome-bottom-content");
  let checkingMain = $("#checking-main-content");
  let checking_1 = $("#checking-1");
  let checkingData = $("#checking-data");
  let checking = $("#checking");
  let savings = $("#savings");
  let checkingDataDivs = $(".checking-data-divs");
  // console.log(checkingDataDivs);
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
  // let transDate = new Array;
 let transDate = $(".transDate");
  let transAmt = $(".transAmt");
  let transPurc = $(".transPurc");
  let transCard = $(".transCard");
  console.log(transDate);
  // transDate[0].text("Yes");
  login.css("visibility", "visible");
  fullGradient.css("visibility", "visible");
  // login.css("visibility", "hidden");
  // fullGradient.css("visibility", "hidden");
  welcomeTop.css("visibility", "hidden");
  welcomeMiddle.css("visibility", "hidden");
  welcomeBottom.css("visibility", "hidden");
  // checkingMain.css("visibility", "hidden");
  // checkingMain.css("display", "none");
  checking_1.css("visibility", "hidden");
  checkingData.css("visibility", "hidden");
  // submit.click(loadWelcome); //{
  submit.click(loadWelcome);
  function loadWelcome() {
   //!**** remember to add back getUserName and getPassword//*****
    // getUserName();
    // getPassword();
    // if (inputUserName === username && inputPassword === password) {
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
      tl.from(welcomeBottom, { opacity: 0, y: 100, duration: 0.5 });
    // }
  }
  checking.click(loadChecking);

  function loadChecking() {
    welcomeTop.css("visibility", "hidden");
    welcomeMiddle.css("visibility", "hidden");
    checkingMain.css("visibility", "visible");
    checking_1.css("visibility", "visible");
    checkingData.css("visibility", "visible");
    welcomeMain.css("z-index", "4");
    let tl = gsap.timeline();
    tl.from(checkingDataDivs,{ opacity: 0, duration: 2, stagger: 0.3, ease:"power4.out"});
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
        // console.log(userNameValue);
        inputUserName = userNameValue;
      })
      .keyup();
  }
  function getPassword() {
    $("#password")
      .keyup(function () {
        let passwordValue = $(this).val();
        // console.log(passwordValue);
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
        // console.log(data[1][1]); //this will be our counter
        userFName.text(data[0].userFName);
        $("#yearJoin").text("Customer since " + data[0].yearJoined);
        $("#checkingNum").text(data[0].checkingNum);
        $("#checkingBal").text(data[0].checkingBal);
        $("#savingsNum").text(data[0].savingsNum);
        $("#savingsBal").text(data[0].savingsBal);
        for(let i = 0; i < data[1].length; i++) {
          // let test = data[1][i].transactionDate
          // console.log(data[1][i].transactionDate);
          transDate.text(data[1][i].transactionDate);
        }
        // let test = userFName.text().toString();
        // console.log(test);
        
//         let test = data[0].userFName;
//         typeWriter(userFName, test);

// function typeWriter(elem, _text) {
//   let tl = gsap.timeline();
//   tl.to(elem, {
//     text: _text,
//     ease: "power1.in",
//     duration: 1,
    
//   });
// }
      }
      //error: function(jq)
    })
  }

  // let tl = gsap.timeline();
  // tl.to($("#userFName"), {
  //   text: userFName.text(data[0].userFName),
  //   ease: "power1.in"
  // })
});
