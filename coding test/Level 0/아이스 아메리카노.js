// https://school.programmers.co.kr/learn/courses/30/lessons/120819
// 프로그래머스 0단계 : 아이스 아메리카노
function solution(money) {
    let coffee = 0;
    let leftmoney = 0;
    coffee = Math.floor(money / 5500)
    leftmoney = money - (coffee * 5500)
    return [coffee,leftmoney]
}

/*
단순한 계산문제였다
머쓱이는 얼어죽어도 아메리카노 인데 한잔에 5500원이며 머쓱이가 가지고 있는 돈 money가 매개변수로 주어진다
그렇게 되면 머쓱이의 돈에서 나누기 5500원을 하면 최대 몇잔을 살수 있는지 알수 있다 
여기서 최대 살수 있는 커피의 수를 알기 위해 우리는 Math.floor를 사용해서 자연수 이외 소숫점은 버린다
그렇게 되면 살수 있는 커피의 수를 알수 있고 우리는 나머지 돈을 알기 위해서
머쓱이가 가지고 있는 돈에서 최대로 산 커피의 값을 빼면 나머지가 된다
*/