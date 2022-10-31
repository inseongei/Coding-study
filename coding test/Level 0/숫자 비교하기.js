﻿// https://school.programmers.co.kr/learn/courses/30/lessons/120807
// 프로그래머스 0단계 : 숫자 비교하기 답 풀이
function solution(num1, num2) {
  return  num1 === num2 ? 1 : -1
}

// 문제가 숫자가 같으면 1 다르면 -1를 리턴하니 삼항연산자를 이용해 num1 === num2를 비교한뒤 맞으면 1 틀리면 -1을 리턴