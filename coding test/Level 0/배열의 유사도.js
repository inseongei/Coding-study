// https://school.programmers.co.kr/learn/courses/30/lessons/120903
// 프로그래머스 0단계 : 배열의 유사도
function solution(s1, s2) {
    let result = 0;
    for(let i = 0 ; i<s1.length;i++){
        if(s2.includes(s1[i])){
            result++
        }
    }
    return result
}

/*
이 문제는 s1 배열이 s2랑 일치하는게 있으면 result에 1씩 더해서 최종 결과를 반환하는 문제이다
1. result라는 변수를 선언 시켜주고 
2. 반복문을 통해서 s1의 길이만큼 돌려줄 것이다 
3. 조건문을 통해서 만약에 s2에 s1의 배열의 길이 만큼 반복을 하면서 같은게 있을 경우 result++를 한다
*/