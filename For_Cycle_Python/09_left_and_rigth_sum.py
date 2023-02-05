n = int(input())
left_sum = 0
right_sum = 0
for i in range(1, n + 1):
    left_sum = left_sum + int(input())

for j in range(n, 2 * n):
    right_sum = right_sum + int(input())

if left_sum == right_sum:
    print(f"Yes, sum = {left_sum}")
elif left_sum != right_sum:
    diff = abs(right_sum - left_sum)
    print(f"No, diff = {diff}")