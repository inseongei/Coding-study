// https://school.programmers.co.kr/learn/courses/30/lessons/120814
// 프로그래머스 0단계 : 피자 나눠 먹기
function solution(n) {
   return Math.ceil(n / 7) 
}

/*
피자가게에서 피자 한판을 7등분을 해서 짤라줍니다
그럼 7명이 가면 최소 1판이 필요 하고
1명이 가도 한조각을 먹기 위해 1판이 필요하고
15명이 가면 최소 15조각이 필요하니까 3판이 필요하겠죠 ?
인원수대비(n) / 7등분을 하면 
ex ) 1명이 가면 1/7 = 0.142... 
15명이 가면 2.1428
결국 뒤에 딱 나누어 떨어지지 않는다면 1판을 더 시켜야 되는상황 그럼 올림 Math.ceil 메소드를 사용해서 올림 처리를 해주거나 소숫점을 버리고 조건문을 사용해서 1판을 추가해주면 되는문제
*/

// 소숫점 버리고 조건문을 사용해서 1판 추가해서 푸는 문제
function solution(n) {
    let result = 0;
    if(n / 7 % 1 === 0) {
    result = Math.floor(n / 7) 
   } else{
      result =  Math.floor(n / 7) + 1
   }
    return result
}