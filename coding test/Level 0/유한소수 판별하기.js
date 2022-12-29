// https://school.programmers.co.kr/learn/courses/30/lessons/120878
// 프로그래머스 0단계 : 유한소수 판별하기
function solution(a, b) {

    return Number((a/b).toFixed(10)) == a/b ? 1 : 2
}
// a를 b로 나눈 수를 소수점 아래 10의 자리만큼 표기한 후 Number 타입으로 변환한다.
// 이때 변환한 값과 a를 b로 나눈 수가 같다면 유한소수이므로 1,
// 아니라면 무한소수이므로 2를 리턴한다.
// 예를 들어 10의 자리 숫자만큼 반환한 무한소수랑 계속 무한으로 이루어진 무한소수랑 당연히 틀리기 때문에 리턴값이 2가 될 수 있는 것 