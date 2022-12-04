// https://school.programmers.co.kr/learn/courses/30/lessons/120840
// 프로그래머스 0단계 : 구슬을 나누는 경우의 수
function solution(balls, share) {
    let answer = 1
    let temp = 1
    for(let i = 0 ; i<share; i++){
        answer *= balls-i
    }
    for(let k = share; k>=1; k--){
            temp *= k
    }
    return answer/temp
}
