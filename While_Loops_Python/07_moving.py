width = int(input())
length = int(input())
height = int(input())
area = width * length * height
part = 0

concurrent_command = input()
while concurrent_command != "Done":
    part = int(concurrent_command)
    area -= part
    if area <= 0:
        break

    concurrent_command = input()

if area <= 0:
    print(f"No more free space! You need {abs(area)} Cubic meters more.")
else:
    print(f"{abs(area)} Cubic meters left.")

