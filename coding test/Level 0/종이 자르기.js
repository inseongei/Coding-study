// https://school.programmers.co.kr/learn/courses/30/lessons/120922
// 프로그래머스 0단계 : 종이 자르기
function solution(M, N) {
    let vertical = M - 1
    let width = M * (N - 1)
    return vertical + width
}

/* 문제 풀이
이 문제는 문제만 거창하지 잘 파보면 엄청 쉬운 문제다
1. 우리는 이 문제를 이해 하기만 하면된다 그렇기 때문에 가로(M) 2면 가위질을 한번 한다 가로에 비교했을때 가로 - 1 은 가로의 가위질의 횟수
2. 세로의 가위질을 구할려면 세로는 가로 * 세로-1 을 해주면 세로의 가위질을 알 수 있고 그 가로와 세로의 합이 문제에서 원하는 리턴값이다
3. 이 문제의 엄청난 힌트는 입출력 예시 이다
*/