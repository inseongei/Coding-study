// https://school.programmers.co.kr/learn/courses/30/lessons/120905
// 프로그래머스 0단계 : n의 배수 고르기
function solution(n, numlist) {
    let result = [];
    for(let i = 0; i< numlist.length;i++){
        if(numlist[i] % n === 0){
            result.push(numlist[i])
        }
    }
    return result
}

/* 문제 풀이
1. 배열 numlist의 길이 만큼 반복을 하면서 
2. 조건문을 통해 numlist[i] 가 % n 으로 나눴을 때 0 일경우 배수라는 소리
3. 그렇게 되면 result라는 배열에 push를 해줄것이다 어떤걸 ? numlist[i]가 0으로 떨어졌을때
4. 문제가 원하는 리턴값을 뽑아낼 수 있다
*/