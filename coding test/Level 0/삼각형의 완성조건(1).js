// https://school.programmers.co.kr/learn/courses/30/lessons/120889
// 프로그래머스 0단계 : 삼각형의 완성조건(1)
function solution(sides) {
    sides.sort((a,b)=>a-b)
    return sides[2] < sides[0] + sides[1] ? 1 : 2
}

/*
가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다는 문제의 조건을 따라야 한다
그렇기 때문에 우리는
1. 주어진 세변의 길이를 오름차순 sort를 사용해서 정렬 먼저 해준다음
긴 변의 길이가 다른 두변의 길이의 합보다 작은지 여부를 삼항 연산자를 이용해서 판단을 한다
*/