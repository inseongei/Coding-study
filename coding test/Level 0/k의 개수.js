// https://school.programmers.co.kr/learn/courses/30/lessons/120887
// 프로그래머스 0단계 : k의 개수
function solution(i, j, k) {
    let a ='';
    for(i;i<=j;i++){
        a += i;
        
    }

    return a.split(k).length-1
}

/* 문제풀이
1. a라는 변수에 반복문을 통해서 하나하나를 다 문자열로 바꾸면서 값을 다 넣어준다
2. 그 넣어준 a에 split(k)를 이용해서 k로 쪼개진 배열 수의 길이 -1이 문제가 원하는 리턴값이다
*/