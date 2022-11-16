// https://school.programmers.co.kr/learn/courses/30/lessons/120911
// 프로그래머스 0단계 : 문자열 정렬하기(2)
function solution(my_string) {
   return my_string.toLowerCase().split('').sort().join('')
}

/* 문제 풀이
다양한 메소드를 사용해서 문제를 쉽게 풀수 있다
1. 문제는 my_string을 소문자로 변환 : toLowerCase()을 사용해서 해결할 수 있다
2. 알파벳을 정렬하기 위해서는 배열의 형태로 만들어서 sort를 사용해야 하기 때문에 문자열을 split('')을 사용해서 배열로 만들어준다
3. 마지막은 배열로 알파벳 순으로 정렬이 된 배열을 join('') 이용해서 배열을 해제한뒤 문자열로 다시 만들어준다 
*/