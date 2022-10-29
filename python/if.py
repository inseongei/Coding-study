# 1. if 조건문의 시작
# 2. 실행여부를 결정하는 조건
# 3. 조건식 끝에 콜론 기호(:) 
# 4. 탭키 후 조건이 참이면 실행할 코드
people = 20 
apple = 3

if people > apple :
    print('신나는 사과 파티 ! 배 터지게 먹자')    


if True:
    pass # 조건이 참일 때 실행
    
else:
    pass # 조건이 거짓일 때 실행


SCISSOR = '가위'
ROCK = '바위'
PAPER = '보'

WIN = '승리'
DRAW = '무승부' 
LOSE = '패배'

mine = '가위'
yours = '바위'

if mine == yours:
    result = DRAW
else:
    if mine == SCISSOR:
        if yours == ROCK:
            result = LOSE
        else:
            result = WIN
    else:
        if mine == ROCK:
            if yours == PAPER:
                result = LOSE
            else:
                result = WIN
        else:
            if mine == PAPER:
                if yours == SCISSOR:
                    result = LOSE
                else:
                    result = WIN
            else:
                print('이상함')
    
print(result)

# 파이썬에서는 else if 를 합칠수 가 있다 그래서 위의 코드를 elif로 합친다면.
if mine == yours:
    result = DRAW
else:
    if mine == SCISSOR:
        if yours == ROCK:
            result = LOSE
        else:
            result = WIN
    elif mine == ROCK:
        if yours == PAPER:
            result = LOSE
        else:
            result = WIN
    elif mine == PAPER:
        if yours == SCISSOR:
            result = LOSE
        else:
            result = WIN
    else:
        print('이상함')
    
print(result)