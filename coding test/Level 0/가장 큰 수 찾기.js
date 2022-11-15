// https://school.programmers.co.kr/learn/courses/30/lessons/120899
// 프로그래머스 0단계 : 가장 큰 수 찾기
function solution(array) {
    let max = Math.max(...array)
    return [max,array.indexOf(max)]
}

/* 문제 풀이
1. Math.max 메소드를 사용하고 스프레드 연산자를 이용해서 array 배열안에 최대값을 찾는다
2. 배열안에 첫번째 요소에는 아까 찾은 최대값을 넣어주고 2번째는 array 배열안에 indexOf를 사용해서 max 의 값이 몇번째에 있는지를 알아낸다.
*/