// https://school.programmers.co.kr/learn/courses/30/lessons/120852
// 프로그래머스 0단계 : 소인수 분해

function solution(n) {
  let result = [];
  let divisor = 2;
  
  while (n >= 2) {
    if (n % divisor === 0) {
      result.push(divisor)
      n = n / divisor;
    }
    
     else divisor ++;
    
  }
  
  return [...new Set(result)];
}

/* 문제 풀이
 이 문제의 가장 큰 포인트는 while문 안에 있는 조건식이다
 n이 divisor로 나눴을때 나머지가 0이라면 result 배열에 divisor를 넣어주고 n을 n/divisor을 해주는데 그 이유가 소인수가 남을 수 있도록 하기 위해서다 
 이해가 안된다면 n을 직접 넣으면서 반복문을 손으로 써보면서 하면 이해 하기 쉽다 그렇게 해서 result에는 값이 차곡차곡 저장이 되고
 마지막에 new Set 을 사용해서 반복을 지워주게 된다면 소인수분해를 쉽게 구할수 있다
*/