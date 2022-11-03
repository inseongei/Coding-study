// https://school.programmers.co.kr/learn/courses/30/lessons/120898
// 프로그래머스 0단계 : 편지
function solution(message) {
    return message.split('').length * 2
}

/*
 주어진 메시지의 문자열 하나 길이가 2cm 몇개의 문자열이 있는지 알아낸뒤 * 2(문자크기)를 해주면 문제해결
message를 split 메소드를 사용하여 ('')를 기준으로 짤라준다 
그러면 해당 message의 문자 하나하나 나눠서 배열에 저장이 되는데 그 배열의 길이를 구한뒤 문자크기(2)를 곱해주면 문제해결 
*/