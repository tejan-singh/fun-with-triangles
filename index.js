const angleOneInput = document.querySelector(".angle1-input-field");
const angleTwoInput = document.querySelector(".angle2-input-field");
const angleThreeInput = document.querySelector(".angle3-input-field");
const warningMsg = document.querySelector("#warning");
const resultMsg = document.querySelector("#result");
const calculateBtn = document.querySelector(".btn");

const handleClick = () => {
  const angleOneValue = Number(angleOneInput.value);
  const angleTwoValue = Number(angleTwoInput.value);
  const angleThreeValue = Number(angleThreeInput.value);
  
  if (angleOneValue >= 0 && angleTwoValue >= 0 && angleThreeValue >= 0) {
    if (sum > 180 || sum < 180) {
      warningMsg.innerHTML = "Oh Oh! The angle doesn't form a triangle";
      resultMsg.innerHTML = "";
      return;
    }

    warningMsg.innerHTML = "";
    resultMsg.innerHTML = "Yay, the angles form a triangle!";
    return;
  } else {
    warningMsg.innerHTML = "Oh Oh! The angle doesn't form a triangle";
    resultMsg.innerHTML = ""
  }
};

calculateBtn.addEventListener("click", handleClick);
