import math
hour_exam = int(input())
minutes_exam = int(input())
hour_arrive = int(input())
minutes_arrive = int(input())
sum_mins_exam = (hour_exam * 60) + minutes_exam
sum_mins_arrive = (hour_arrive * 60) + minutes_arrive
diff = abs(sum_mins_exam - sum_mins_arrive)

if sum_mins_arrive >= sum_mins_exam:
    print("Late")
    if diff <= 59:
        print(f"{diff} minutes after the start")
    else:
        hh = round(diff/60)
        mm = diff % 60
        print(f"{hh}:{mm} hours after the start")

