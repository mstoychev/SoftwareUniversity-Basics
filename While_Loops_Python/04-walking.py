current_steps_str = input()
steps_per_day = 0
while current_steps_str != "Going home":
    current_steps = int(current_steps_str)
    steps_per_day += current_steps
    if steps_per_day >= 10000:
        break

    current_steps_str = input()


if steps_per_day >= 10000:
    print("Goal reached! Good job!")
    print(f"{abs(10000 - steps_per_day)} steps over the goal!")
else:
    current_steps = int(input())
    steps_per_day += current_steps
    if steps_per_day < 10000:
        print(f"{10000 - steps_per_day} more steps to reach goal.")
    else:
        print("Goal reached! Good job!")
        print(f"{abs(10000 - steps_per_day)} steps over the goal!")
