// https://school.programmers.co.kr/learn/courses/30/lessons/120880
// 프로그래머스 0단계 : 특이한 정렬
function solution(numlist, n) {
    return numlist.sort((a,b) => {
        const [aGab, bGab] = [Math.abs(a-n), Math.abs(b-n)]
        // 거리가 같다면 더 큰 수를 우선 배치
        if(aGab === bGab) return b-a
        // 다르다면 거리별 오름차순 정렬
        return aGab-bGab
    })
}
/* 문제 풀이 ( kwb020312님꺼 참고 )
1. numlist를 정렬을 할때 거리가 같다면 큰 수를 우선 배치하게 하였다 Math.abs로 음수는 신경쓰지 않게 하였고 조건문을 사용해서 정렬을 함
*/