import math
num_tournaments = int(input())
initial_points = int(input())
for_average = 0
counter_winner = 0

final_points = initial_points
for i in range(num_tournaments):
    result = input()
    if result == "W":
        final_points += 2000
        for_average += 2000
        counter_winner += 1
    elif result == "F":
        final_points += 1200
        for_average += 1200
    elif result == "SF":
        final_points += 720
        for_average += 720

average_points = math.floor(for_average / num_tournaments)

print(f"Final points: {final_points}")
print(f"Average points: {average_points}")
print(f"{(counter_winner / num_tournaments * 100):.2f}%")
