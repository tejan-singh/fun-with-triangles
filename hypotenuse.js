const baseInput = document.querySelector(".base-input-field");
const heightInput = document.querySelector(".height-input-field");
const warningMsg = document.querySelector("#warning");
const resultMsg = document.querySelector("#result");
const calculateBtn = document.querySelector(".btn");

const calculateHypotenuse = (baseValue, heightValue) => {
  const hypotenuse = Math.sqrt(
    baseValue * baseValue + heightValue * heightValue
  );
  return hypotenuse.toFixed(2);
};

const handleClick = () => {
  const baseValue = Number(baseInput.value);
  const heightValue = Number(heightInput.value);

  if (baseValue > 0 && heightValue > 0) {
    warningMsg.innerHTML = "";

    const result = calculateHypotenuse(baseValue, heightValue);

    resultMsg.innerHTML = "The length of hypotenuse is " + result;
    return;
  } else {
    warningMsg.innerHTML = "Please enter correct values";
    resultMsg.innerHTML = "";
  }
};

calculateBtn.addEventListener("click", handleClick);
