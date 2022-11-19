// https://school.programmers.co.kr/learn/courses/30/lessons/120888
// 프로그래머스 0단계 : 중복된 문자 제거
function solution(my_string) {
  return [...new Set(my_string)].join('')
}
/* 문제 풀이
이문제는 매개변수로 주어진 my_string 이라는 문자열의 중복을 제거해주는 문제이다
new Set이라는 메소드만 알고 있으면 쉽게 풀 수 있는 문제
1. 중복값이 있는 my_string 배열로 만들고
2. new Set을 활용해서 배열안에 중복을 제거해준다.
3.join 이용해서 문제가 원하는 리턴값을 뽑아낼 수 있다 
*/