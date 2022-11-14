// https://school.programmers.co.kr/learn/courses/30/lessons/120839
// 프로그래머스 0단계 : 가위 바위 보
function solution(rsp) {
   let result = rsp.split('')
   let array = [];
   for(let i = 0; i<result.length;i++){
       if(result[i] === "2"){
           array.push("0")
       }else if(result[i] === "0"){
           array.push("5")
       }else{
           array.push("2")
       }
   }
   return array.join('')
}

/*
가위 : 2
바위 : 0 
보 : 5
1. 문자열 rsp에 가위바위보의 값이 있다 그렇게 되면 우리는 split를 이용해 어떤것을 냈는지 쪼개 줘야 한다
2. 반복문을 통해 가위바위보의 조건에 맞게 조건을 걸어주고 해당 결과값을 array라는 배열에 push
3. 최종은 그 array를 join메소드를 사용해 문자열로 만드는 것이다
*/