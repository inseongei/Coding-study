// https://school.programmers.co.kr/learn/courses/30/lessons/120848
// 프로그래머스 0단계 : 팩토리얼
function solution(n) {
    let sum = 1;
    let result = 1;

    for(let i = 2; i<=10;i++){
        sum *= i
        result++
        if(sum === n){return result}
        if(sum > n){return result-1}
    }
}

/* 문제 풀이
팩토리얼에 관한 문제이다. 
1. 반복문을 사용해서 sum이라는 변수에다가 하나씩 값이 증가하면 곱해준 값들을 넣어준다
2. result는 팩토리얼이 되는 것이고
3. 조건문을 통해서 sum === n 같으면 몇팩토리얼이 답인지 알려주는 것이고 sum > n 몇 팩토리얼이 되기 이전의 팩토리얼이 정답이 되는 것이다 
*/