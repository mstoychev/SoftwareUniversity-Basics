num_cycles = int(input())
max_number = 0   # podría ser -sys.maxsize
total_sum = 0

for i in range(0, num_cycles):
    current_num = int(input())
    total_sum += current_num
    if current_num > max_number:
        max_number = current_num

other_sum = total_sum - max_number
if max_number == other_sum:
    print("Yes")
    print(f"Sum = {max_number}")
else:
    print("No")
    print(f"Diff = {abs(max_number - other_sum)}")