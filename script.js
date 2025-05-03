let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// 필요한 경우 콘솔에서 제대로 선택됐는지 확인
// console.log("btns 확인 : ", btns);

btns.forEach((button) => {
  button.addEventListener("click", (event) => {
    // 클릭된 버튼의 id 확인
    // console.log("event 확인 : ", event);

    let btnElementID = event.currentTarget.id;

    if (btnElementID === "decrease") {
      count--;
    } else if (btnElementID === "reset") {
      count = 0;
    } else {
      count++;
    }

    // count 값에 따라 텍스트 색상 변화
    if (count > 0) {
      value.style.color = "blue";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }

    // 화면에 카운트 값 표시
    value.textContent = count;
  });
});