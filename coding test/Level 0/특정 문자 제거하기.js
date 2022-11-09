// https://school.programmers.co.kr/learn/courses/30/lessons/120826
// 프로그래머스 0단계 : 특정 문자 제거하기
function solution(my_string, letter) {
  return my_string.replaceAll(letter, '');
}

/*
처음에 정규식과 replace 만으로 문제를 풀려다가 실패했다
하지만 replaceAll 이라는 것을 처음알게 되고 이것은 letter 로 받아오는 그 문자열을 모두 제거 해주는 메소드이다
*/

function solution(my_string, letter) {
    return my_string.split(letter).join('')
    
}

완전 신박한 방법 ㄷㄷ..

제거가 아니라 split으로 letter 기준으로 쪼개고 join 시켜주었다 ..