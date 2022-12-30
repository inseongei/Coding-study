// https://school.programmers.co.kr/learn/courses/30/lessons/120882
// 프로그래머스 0단계 : 등수 매기기
function solution(score) {
    // 등수를 담을 object 생성
    const dict = {}
    // 현재의 점수를 평균 별 오름차순으로 정렬 한 후 자료 사전에 입력
    const rank = score
        .map(([a,b]) => (a+b)/2)
        .sort((a,b) => b-a)
        .forEach((a,i) => dict[a] === undefined ? dict[a] = i+1 : null)
    // 현재 점수의 평균을 사전에서 찾아 등수 반환
    return score.map(([a,b]) => dict[(a+b)/2])
}
