// https://school.programmers.co.kr/learn/courses/30/lessons/120849
// 프로그래머스 0단계 : 모음 제거
function solution(my_string) {
    let a = ['a','e','i','o','u']
    for(let i = 0; i<a.length;i++){
       my_string = my_string.replaceAll(a[i],'')
    }
    return my_string
}

/*
1. 영어의 모음은 5가지가 있는데 그 모음 배열을 하나 만들어주고 
2. 반복문을 통해서 그 모음을 my_string으로 오는 매개변수를 보면서 제거를 해주고 리턴해주면 끝.
*/