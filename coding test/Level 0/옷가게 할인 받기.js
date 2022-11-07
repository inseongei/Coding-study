// https://school.programmers.co.kr/learn/courses/30/lessons/120818
// 프로그래머스 0단계 : 옷가게 할인 받기
function solution(price) {
    if(price >= 500000){
       return Math.floor(price - (price * 0.2))
    } else if(price >= 300000) {
        return Math.floor(price - (price * 0.1))
    } else if (price >= 100000){
        return Math.floor(price - (price * 0.05))
    }else{
        return price    
}
    }

/*
이 문제는 머쓱이네 옷가게에서 10만원 이상 5% 30만원 이상 10% 50만원 이상 20%를 할인해준다
이 문제를 풀면서 조건문을 쓸때는 항상 높은 순으로 처리를 해야 겠다고 생각이 들었다
왜냐하면 만약에 옷 가격이 52만원이고 if문을 10만원 부터 조건을 처리해준다고 생각해보면 할인율이 계속 중첩이 되지 않을까 생각이 들고 테스트도 자꾸 통과하지 못했다
그렇기 때문에 
1. 조건문을 만들어서 가격대로 할인율을 가격에서 빼주었고 기본 테스트는 통과했지만 최종 테스트케이스에선 불통과가 있었다
2. 그 이유는 소수점 이하를 버린 정수를 return 하니까 Math.floor로 소숫점을 제거 해준다
*/