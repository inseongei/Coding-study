// https://school.programmers.co.kr/learn/courses/30/lessons/120884
// 프로그래머스 0단계 : 치킨 쿠폰
function solution(chicken) {
    let answer = 0;
    let coupon = chicken

    while(coupon >= 10){
        answer += Math.floor(coupon/10)
        coupon = Math.floor(coupon/10)+ coupon%10
    }

    return answer;
}
/* 문제 풀이
치킨이 결국 쿠폰이고 서비스 치킨 또한 쿠폰을 지급하니 while문을 사용해서 쿠폰이 10개 미만일때까지 계속해서 쿠폰을 차감시켜준다
*/