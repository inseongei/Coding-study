// https://school.programmers.co.kr/learn/courses/30/lessons/120841
// 프로그래머스 0단계 : 점의 위치 구하기
function solution(dot) {
    if(dot[0] > 0 && dot[1] > 0){
        return 1
    } else if( dot[0] < 0 && dot[1] > 0 ){
        return 2
    } else if (dot[0] < 0 && dot[1] < 0){
        return 3
    } else{
        return 4
    }
}