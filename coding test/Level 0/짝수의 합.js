// https://school.programmers.co.kr/learn/courses/30/lessons/120831
// 프로그래머스 0단계 : 짝수의 합
function solution(n) {
    let sum = 0
    for(let i = 2; i<=n;i++){
        if(i % 2 === 0){
            sum += i
        }
    }
    return sum
}

/*
1. 짝수의 합을 저장할 변수를 하나 만든다
2. 반복문을 통해서 첫 시작점을 2 , 끝을 매개변수n으로 두고 i++
ex ) n = 4 라면 for문에 1는 2,3,4
3. 이렇게 반복 시킨 i에 짝수만 뽑아서 (i % 2 === 0)
4. sum += i 하고  return sum 해주면 끝
*/