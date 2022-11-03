// https://school.programmers.co.kr/learn/courses/30/lessons/120585
// 프로그래머스 0단계 : 머쓱이보다 키 큰 사람
function solution(array, height) {
    array.push(height)
    return array.sort((a,b)=>b-a).indexOf(height)   
}

/*
주어진 배열 array에 주인공 키 height 가 몇번쨰로 큰지를 result로 리턴하면 되는 문제
1. array 배열에 height를 push 해서 넣어준다
2. sort((a,b)=>b-a)를 사용해서 오름차순으로 정렬해준다
★ ((a,b)=>b-a) : 오름차순 ((a,b)=>a-b) : 내림차순
3. 그렇게 오름차순으로 정렬해준뒤 indexOf를 사용해서 height가 지금 몇번째에 있는지 리턴해주면 문제 해결
*/