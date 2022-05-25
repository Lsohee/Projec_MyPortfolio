export const root = document.getElementById("container");
export const arr = Array.from(container.children);
export const movingObj = {
  movingObjI : arr[0],
  movingObjMy : arr[1],
  movingObjMe : arr[2],
  movingObjMine : arr[3],
  movingObjMyself : arr[4],
}
export let movement = function() {
  // movingObj.movingObjI.style.width = "400px";
  // movingObj.movingObjI.style.height = "400px";
  console.log(movingObj)
  return;
}

/*
todo 무엇을 : object들을  
todo 의도 : 크기를 증가시켜서 화면을 줌인하는 느낌을 주고 싶음
순서
// 1. 호출
2. 크기를 제어하는 방법 찾기
? 여기서 함수로 movingObjI를 제어하려고 하면 안됨 -> why?
? 크기 제어부터가 안되는 구나 
3. 이벤트 발생시 크기가 변하는 함수
4. 크기가 변하는 대상 (object)를 변경할 수 있는 방법 연구
*/ 