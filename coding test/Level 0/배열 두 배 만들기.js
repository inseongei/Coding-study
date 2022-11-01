// https://school.programmers.co.kr/learn/courses/30/lessons/120809
// 프로그래머스 0단계 : 배열 두 배 만들기
function solution(numbers) {
    let result = []
    for(let i = 0 ; i<numbers.length;i++){
    result.push(numbers[i] * 2) 
    }
    return result
}
/*
문제에서 주어진 배열의 요소를 2배한 result 라는 배열을 리턴하면되는 문제다
1. for문을 통해서 해당 매개변수 numbers 배열 길이만큼 돌려주고
result라는 새로 만든 배열에 push를 사용해서 * 2 를 해주고  result 배열에 넣어준다 
2. 반복문이 끝나면 result를 리턴해주면 되는것
*/