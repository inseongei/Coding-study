// https://school.programmers.co.kr/learn/courses/30/lessons/120908
// 프로그래머스 0단계 : 문자열안에 문자열
function solution(str1, str2) {
    return str1.includes(str2) ? 1 : 2
}

/*
문제에서 주어진 str1에 str2가 있으면 1 아니면 2를 리턴해주면 되는 문제에서
1. 조건이 맞으면 1 틀리면 2 이기 때문에 가독성을 좋게 하기 위해 삼항 연산자를 사용할 수 있으며
2. includes를 사용해서 str1 안에 str2가 있으면 true 또는 false 를 리턴해주는 includes 메소드를 사용해줌
*/