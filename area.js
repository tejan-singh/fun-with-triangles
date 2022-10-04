const baseInput = document.querySelector(".base-input-field");
const heightInput = document.querySelector(".height-input-field");
const warningMsg = document.querySelector("#warning");
const resultMsg = document.querySelector("#result");
const calculateBtn = document.querySelector(".btn");

const calculateArea = (baseValue, heightValue) => {
  const area = (baseValue * heightValue) / 2
  return area;
};

const handleClick = () => {
  const baseValue = Number(baseInput.value);
  const heightValue = Number(heightInput.value);

  if (baseValue > 0 && heightValue > 0) {
    warningMsg.innerHTML = "";

    const result = calculateArea(baseValue, heightValue);

    resultMsg.innerHTML = "Area of the triangle is " + result;
    return;
  } else {
    warningMsg.innerHTML = "Please enter correct values";
    resultMsg.innerHTML = "";
  }
};

calculateBtn.addEventListener("click", handleClick);
