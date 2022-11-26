// https://school.programmers.co.kr/learn/courses/30/lessons/120921
// 프로그래머스 0단계 : 문자열 밀기
let solution=(a,b)=>(b+b).indexOf(a)
/* 문제 풀이
이 풀이 방법은 굉장히 신박했다 indexOf라는 메소드는 있으면 1 없으면 -1를 반환하는 성질을 가지고 있다
그렇기 떄문에 우리는
b를 두번 반복 시켜준 문자열에서 a를 찾는다 ( 이 말은 즉 두번 반복 시킨 B === a의 마지막 문자열을 이동시킬때 B 값이 같다는 소리)
그렇기에 이 풀이 방식은 알맞다
*/