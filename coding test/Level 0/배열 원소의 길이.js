// https://school.programmers.co.kr/learn/courses/30/lessons/120854
// 프로그래머스 0단계 : 배열 원소의 길이
function solution(strlist) {
    let array = []
    for(let i = 0; i<strlist.length;i++){
        array.push(strlist[i].length)
    }
    return array
}