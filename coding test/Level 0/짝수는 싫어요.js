// https://school.programmers.co.kr/learn/courses/30/lessons/120813
// 프로그래머스 0단계 : 짝수는 싫어요 
function solution(n) {
    let result = [];
    for(let i = 0 ; i<=n;i++){
        if(i % 2 != 0){
            result.push(i)
        }else {
            null
        } 
    }
    return result
}
/*
문제에서 원하는 것은 매개변수 n의 홀수를 result라는 배열에 담으라는 것이다
1. 반복문을 통해서 우리는 매개변수 n의 홀수를 다 구해야 한다
2. 조건문을 사용해서 반복문을 돌면서 홀수이면 result라는 배열에 넣어주고
3. 조건문과 반복문이 끝나게 될때 result라는 배열을 리턴해준다 
*/