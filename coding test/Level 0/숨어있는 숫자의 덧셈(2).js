// https://school.programmers.co.kr/learn/courses/30/lessons/120864
// 프로그래머스 0단계 : 숨어있는 숫자의 덧셈(2)
function solution(my_string) {
    const nums = my_string
    .match(/[0-9]+/g)

  return nums ?  nums.map(num => +num).reduce((a, c) => a + c, 0) : 0

}

/* 문제 풀이
1. 정규식과 match를 사용해서 my_string문자열에 0~9까지의 숫자가 얼마나 있는지를 확인한다
2.map을 통해서 전부 숫자열로 바꿔주고 reduce를 이용해서 더해준다
3. 문제에서 문자열에 자연수가 없는 경우가 있으니 0을 리턴해주는 식까지 만들면 된다
*/