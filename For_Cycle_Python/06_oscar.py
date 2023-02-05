actor_name = input()
academy_points = float(input())
judges_number = int(input())
flag = True

for i in range(judges_number):
    judge_name = input()
    points = float(input())
    points_per_judge = len(judge_name) * points / 2
    academy_points += points_per_judge
    if academy_points >= 1250.5:
        break

if academy_points >= 1250.5:
    print(f"Congratulations, {actor_name} got a nominee for leading role with {academy_points:.1f}!")
else:
    diff = 1250.5 - academy_points
    print(f"Sorry, {actor_name} you need {diff:.1f} more!")
