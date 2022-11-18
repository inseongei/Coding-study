// https://school.programmers.co.kr/learn/courses/30/lessons/120862
// 프로그래머스 0단계 : 최대값 만들기 (2)
function solution(numbers) {
    numbers.sort((a,b)=>a-b)
    let one = numbers[0] * numbers[1]
    let two = numbers[numbers.length-1] * numbers[numbers.length-2]
    return one > two ? one : two
}

/* 문제 풀이
문제는 numbers 배열안에 요소들의 최대값을 구하는것이다
1. sort 메소드를 사용해서 오름차순 정렬을 하였고
2. 두개의 변수를 선언하여 하나는 앞에 두개 하나는 뒤에 두개를 곱해주었다 (앞에 두개를 곱하는 이유는 음수 * 음수 = 양수임을 대비해서 뒤에 두개를 곱할때보다 큰 경우가 있기 때문에)
3. 삼항 연산자를 이용해서 간편하게 one > two 보다 크다면 one 리턴하고 그게 아니라면 two를 리턴하여 문제가 원하는 결과값을 뽑았다
*/