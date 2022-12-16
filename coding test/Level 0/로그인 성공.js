// https://school.programmers.co.kr/learn/courses/30/lessons/120883
// 프로그래머스 0단계 : 로그인 성공?
function solution(id_pw, db) {
  let result = '';
  db.map((item) => {
    if(id_pw[0] === item[0] && id_pw[1] === item[1]) result = "login"
	if(id_pw[0] === item[0] && id_pw[1] !== item[1]) result =  "wrong pw"
    if(id_pw[0] !== item[0] && id_pw[1] !== item[1]) result = "fail"})
	
  return result
}

/* 문제 풀이
1. 이차원 배열을 map 통해서 배열 하나를 풀어주면서 item 요소를 가지고 조건문을 이용해서 풀었다
2. 3가지의 조건을 사용해서 문제에 맞게 && 연산자를 사용해서 풀었다
*/