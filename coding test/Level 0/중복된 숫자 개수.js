// https://school.programmers.co.kr/learn/courses/30/lessons/120583
// 프로그래머스 0단계 : 중복된 숫자 개수
function solution(array, n) {
    let sum = 0 
    for(let i = 0; i< array.length;i++){
        if(n === array[i]){
            sum++
        }
    }
    return sum;
}

/*
array라는 배열에 n이 몇개가 있는지 알아내는 문제이다
나의 풀이법
1. array의 길이만큼 반복을 한다음 조건문을 통해서 만약 n이 array[i] 랑 같다면 sum라는 변수에 1을 더해 주세요
2. 그렇게 된다면 해당 배열의 n이 몇개가 같은지를 알게 되며 sum 리턴하면 문제를 풀 수 있다
*/