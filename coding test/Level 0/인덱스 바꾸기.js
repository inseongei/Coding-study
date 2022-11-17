// https://school.programmers.co.kr/learn/courses/30/lessons/120895
// 프로그래머스 0단계 : 인덱스 바꾸기
function solution(my_string, num1, num2) {
  const str = [...my_string];
  [str[num1], str[num2]] = [str[num2], str[num1]];
  return str.join('');
}

/* 문제 풀이
1. str 이라는 변수에다가 스프레드 문법(깊은 복사)를 하면서 배열에 넣어준다 문자열을
2. str[num1] 와 str[num2]를 교체를 해주고
3. 리턴값으로 뽑아내면 그게 정답이다
*/