// https://school.programmers.co.kr/learn/courses/30/lessons/120868#qna
// 프로그래머스 0단계 : 삼각형의 완성조건(2)
function solution(sides) {
    let count = 0
    const max = Math.max(...sides)
    const min = Math.min(...sides)
    // 만약 기존 요소 중 가장 긴 변이 있다면
    for(let i = max-min+1 ; i <= max ; i ++) {
        count++
    }
    // 나머지 한 변이 가장 긴 변인 경우
    for(let i = max+1 ; i < max+min ; i ++) {
        count++
    }
    return count
}

/* 문제풀이
문제의 조건은 가장 큰 긴변은 작은 변의 두개의 합보다 작아야한다
1. 그렇기 때문에 Math.min 과 max 메소드를 사용해 긴변과 작은 변을 구한뒤
2. 반복문을 통해서 요소중 가장 긴변일때의 반복문과 다른 한변이 가장 긴 변일때의 반복문을 만들어서 count를 증가시켰다
*/