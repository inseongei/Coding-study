﻿// https://school.programmers.co.kr/learn/courses/30/lessons/120805
// 프로그래머스 0단계 : 몫 구하기 풀이
function solution(num1, num2) {
    return Math.floor(num1 / num2) 
}

// 몫을 구하는 방법은 num1 / num 2 를 해주면 되지만 문제에서 소수점은 버렸으니 Math.floor 라는 소수점 버림 메소드를 사용하여 제거 
// ex ) 7 / 2 = 3.5 -> Math.floor 써주면 3 