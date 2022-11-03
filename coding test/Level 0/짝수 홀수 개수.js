// https://school.programmers.co.kr/learn/courses/30/lessons/120824
// 프로그래머스 0단계 : 짝수 홀수 개수
function solution(num_list) {
    let a = 0;
    let b = 0;
    for(let i = 0; i<num_list.length;i++){
        if(num_list[i] % 2 === 0){
            a++
        } else{
            b++
        }
    }
    return [a,b]
}
/*
주어진 배열에 있는 숫자가 짝수와 홀수갯수를 파악해서 result 를 리턴하는데 [짝수개수,홀수개수]로 리턴을 하면된다
내가 푼 방식은
1. a,b 변수를 만들어준다 ( 각각의 a 와 b 는 짝수개수 와 홀수개수를 넣은 공간 )
2. 반복문을 통해서 num_list의 길이 만큼 반복을 하되
3. 조건문을 통해 짝수여부를 판단해서 a++ 홀수 여부를 판단해서 b++
4. 리턴을 [a,b] 해주면 끝.
*/