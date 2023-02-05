length = int(input())
width = int(input())
cake = length * width

current_command = input()
while current_command != "STOP":
    current_part = int(current_command)
    cake -= current_part
    if cake <= 0:
        break
    current_command = input()

if cake > 0:
    print(f"{abs(cake)} pieces are left.")
else:
    print(f"No more cake left! You need {abs(cake)} pieces more.")
