// https://school.programmers.co.kr/learn/courses/30/lessons/120817
// 프로그래머스 0단계 : 배열의 평균값
function solution(numbers) {
    let sum = 0;
   for(let i = 0; i< numbers.length;i++){
       sum += numbers[i]
   }
    return sum / numbers.length
}

/*
문제에서 주어진 정수 배열 numbers가 매개변수로 주어진다
우리는 이 매개변수의 평균값을 구하면된다
1. 반복문을 통해서 각 위치에 있는 변수들의 합계를 구하기 위해 sum이라는 변수를 만들고 반복문을 통해 합계를 구한다
2. 그 합계와 numbers의 길이 만큼 나누어 주면 해당 매개변수의 평균값을 구할 수 있다 
*/