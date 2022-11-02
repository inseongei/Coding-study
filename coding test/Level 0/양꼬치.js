// https://school.programmers.co.kr/learn/courses/30/lessons/120830
// 프로그래머스 0단계 : 양꼬치
function solution(n, k) {
    return (n * 12000) + (k * 2000) - (Math.floor(n * 0.1) * 2000)
}

/*
이 문제는 간단한 계산식이지만 어떻게 인원수에 비례한 서비스 음료수 값을 빼는지 구할수 있으면 풀 수있는 문제다 
그렇기 때문에 매개변수로 주어지는 n인분을 * 0.1로 한뒤 소숫점으로 해준다음 ex ) 64인분일 경우 6.4 
Math.floor라는 메소드를 사용해 소숫점을 없애주면 서비스로 주는 음료수의 정수 값이 나오게 된다
*/