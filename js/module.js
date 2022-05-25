import { 
  movingObj,
  root,
  arr,
  movement
} from "./module/moving.js";
console.log(movingObj)
console.dir(arr);
console.log(root);
movingObj.movingObjI.style.width = "400px";
movingObj.movingObjI.style.height = "400px";
// ? 여기서 가져와서 제어하는 건 됨
// todo 함수를 가져오는 import 방법이 따로 있나 찾아볼것
// console.log(movingObj.movingObjI.style.widtsh);




// 다 가져와지나 확인
// console.log(movingObj.movingObjI)
// console.log("root");
// 일단 외부 script에서 함수를 어떻게 호출하는지 확인



// ? js 허브 파일을 만드는 방법을 모르겠음
// ? 계속 따라했는데 안됨
// memo script 태그에 type = "module" 쓰기로 해결