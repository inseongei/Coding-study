// https://school.programmers.co.kr/learn/courses/30/lessons/120829
// 프로그래머스 0단계 : 각도기
function solution(angle) {
    let result = 0
    if (angle < 90){
    result = 1
    } else if (angle == 90){
        result = 2
    } else if (angle < 180){
        result = 3
    }else{
        result = 4
    }
    return result
}

/*
90도 미만은 예각(1)
90도는 직각(2)
180미만은 둔각(3)
180도는 평각(4)
result라는 변수를 만든뒤 4개의 조건문을 사용하여 result 값을 조건에 맞게 바꿔준다
*/ 