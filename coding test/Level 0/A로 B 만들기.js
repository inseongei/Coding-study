// https://school.programmers.co.kr/learn/courses/30/lessons/120886
// 프로그래머스 0단계 : A로 B 만들기
function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1:0
}

/* 문제 풀이
이 문제는 단순히 before 를 뒤집어서 after를 만드는 것이 아니라 before의 알파벳으로 after를 만들수 있냐의 문제였다
1. before를 split('')를 이용해서 배열로 만든다
2. sort 함수를 이용해서 오름차순으로 바꿔준다 ( 이유 : sort로 뒤죽박죽된 알파벳을 순서대로 정렬을 해주기 위해서 )
3. 다시 문자열로 join('') 시켜주고 after도 똑같이 해주면 before이 가지고 있는 알파벳과 after이 가지고 있는 알파벳이 맞는지를 볼 수 있다
*/
