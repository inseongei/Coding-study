// https://school.programmers.co.kr/learn/courses/30/lessons/120806
// 프로그래머스 0단계 : 두 수의 나눗셈
function solution(num1, num2) {
    return Math.floor(num1 / num2 * 1000)
}

/*
두수를 나눈 값에 1000을 해주는 문제이지만 소숫점은 버려야 한다
그렇기 때문에 Math.floor 메소드를 사용해서 소숫점은 버린다
*/