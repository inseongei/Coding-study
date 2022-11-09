// https://school.programmers.co.kr/learn/courses/30/lessons/120836
// 프로그래머스 0단계 : 순서쌍의 개수
function solution(n) {
    let answer = 0;
    for(let i = 0;i<=n;i++){
        if(n % i === 0 ){
            answer++        }
    }
    return answer;
}

/*
순서쌍의 개수를 구하는 문제이다 
1.우리는 반복문을 통해서 n번만큼 반복을 해주고 
2.조건문을 사용해서 n에서 i번 반복을 하는 자연수를 나눴을때 나머지가 0이라면 그 순서쌍의 조건 하나가 되는것이니 
3. answer++를 해주면 문제에서 원하는 답이 나오게된다
*/