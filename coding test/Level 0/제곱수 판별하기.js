// https://school.programmers.co.kr/learn/courses/30/lessons/120909
// 프로그래머스 0단계 : 제곱수 판별하기
function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? 1 : 2
}

/*
매개변수 n이 어떤 자연수의 제곱이라면 1 아니면 2
우리는 Math.sqrt 메소드를 사용해서 이 문제를 풀 수 있다
Math.sqrt(n) 사용하게 되면 n은 어떤 자연수를 제곱해서 나왔는지를 알수 있다
그렇기 때문에 제곱근이면 나머지가 1이 될 것이고 삼항연산자를 돌려 문제가 원하는 답을 출력할 수 있다
*/