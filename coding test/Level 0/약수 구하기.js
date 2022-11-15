// https://school.programmers.co.kr/learn/courses/30/lessons/120897
// 프로그래머스 0단계 : 약수 구하기
function solution(n) {
    let result = []
    for(let i = 1 ; i<= n; i++){
        if(n % i === 0 ){
            result.push(i)
        }
    }
    return result
}

/* 문제 풀이
1. 반복문을 통해서 n이 될때까지 1부터 나머지를 구해준다
2. 나머지가 0 일 때 n의 약수가 되므로 result 배열을 만든뒤 push로 넣어준다
*/