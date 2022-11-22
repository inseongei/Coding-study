// https://school.programmers.co.kr/learn/courses/30/lessons/120912
// 프로그래머스 0단계 : 7의 개수
function solution(array) {
  let arr = [...array.join('')]
  let result = 0;
  for(let i = 0; i<arr.length;i++){
      Number(arr[i]) === 7 ? result++ : result
  }
    return result
}

/* 문제 풀이
1. array에 있는 숫자들을 하나의 배열에 넣고 join을 시켜준다 ( 그렇게 되면 우리는 array 배열의 모든 숫자들의 한자리 수를 배열로 보게 된다)
2. 반복문을 통해서 뽑아준 한 자리수의 숫자들과 7을 비교해서 맞으면 result에 ++ 를 아니면 그냥 그대로 라는 삼항 연산자를 사용해서 문제가 원하는 리턴값을 나올 수 있게 하였다
*/