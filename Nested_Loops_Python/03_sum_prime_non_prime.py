current_command = input()
sum_prime = 0
sum_non_prime = 0

while current_command != "stop":
    flag_is_prime = True
    current_number = int(current_command)
    if current_number < 0:
        print("Number is negative.")
        current_command = input()
        continue

    for i in range(2, current_number):
        if current_number % i == 0:
            sum_non_prime += current_number
            flag_is_prime = False
            break

    if flag_is_prime:
        sum_prime += current_number

    current_command = input()

print(f"Sum of all prime numbers is: {sum_prime}")
print(f"Sum of all non prime numbers is: {sum_non_prime}")

