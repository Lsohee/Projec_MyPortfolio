export const root = document.getElementById("container");
export const arr = Array.from(container.children);
export const movingObj = {

movingObjI : arr[0],
movingObjMy : arr[1],
movingObjMe : arr[2],
movingObjMine : arr[3],
movingObjMyself : arr[4],

/*
    이벤트 발생시 변화를 줘야할 요소
    1. 물체들의 크기
    2. 블러 처리
    3. 움직임
*/ 
//   zoomIn : function(obj){
//   let widthValue ;
//   let heightValue;
//   // widthValue ;
//   // heightValue;
//   console.dir(obj)
//   obj.style.height = heightValue + "px";
//   obj.style.width = widthValue + "px";

//   if(widthValue ===300){
//     console.log("꿈이 아파 잠들지 못하는 밤")
//     // heightValue = 400;
//     // widthValue = 400;
//     // 똑딱이 잘 됨 -> 스위치 완료
//     // currnt =false;
//     return false;
//   }else {
//     console.log("작은 숨소리마저 아려와")
//     widthValue = 300;
//     heightValue = 300;
//     // currnt =true;
//   }
//   // return move;
// },



// movement : root.addEventListener("click", this.zoomIn(movingObj.movingObjMine))

}
// console.log(movingObj.movingObjI);
// console.log(movingObjI);
// // ? 왜 콘솔 찍었는데 movingObj가 null로 나올까나