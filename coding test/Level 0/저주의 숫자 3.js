// https://school.programmers.co.kr/learn/courses/30/lessons/120871
// 프로그래머스 0단계 : 저주의 숫자 3
function solution(n) {
    let x3 = 0
    // n까지 반복
    for(let i = 1 ; i <= n ; i ++) {
        // i에 증가에 따른 x3의 증가
        x3++
        // 3이 들어가지 않으며, 3의 배수 또한 아닌 경우까지 반복
        while(x3.toString().includes('3') || x3%3 === 0) {
            x3++
        }
    }
    return x3
}

/* 문제 풀이 (kwb020312님꺼 참고)
나는 while문의 조건을 하지 못해 실패하였다
이문제는 x3을 계속 증가시키면서  x3.toString().includes('3') || x3%3 === 0 이 2가지의 조건에 걸리지 않으면 계속 증가시키면 문제가 원하는 답을 찾을 수 있는 문제이다
*/