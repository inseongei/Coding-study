// https://school.programmers.co.kr/learn/courses/30/lessons/120885
// 프로그래머스 0단계 : 이진수 더하기
function solution(bin1, bin2) {
    let one = parseInt(bin1,2)
    let two = parseInt(bin2,2)
    let three = one + two
    return three.toString(2)   
}

/* 문제 풀이
문제에서 매개변수로 받는 bin1과 bin2는 이진수를 표현한것.
1. 변수를 one , two 라는 것을 만든뒤 one에는 parseInt를 사용해서 bin1이 2진수니까 bin1,2를 해서 원래 정수를 반환한다
2. two도 똑같이 원래 정수를 반환시킨뒤 three 라는 변수를 만들어서 one+two의 값을 할당시켜놓고
3. three에는 one의 원래 정수 two의 원래 정수 값이 있다 그렇기에 그 정수들의 합에서 2진수로 변환시키면 문제에서 원하는 리턴값을 추출할 수 있다
*/