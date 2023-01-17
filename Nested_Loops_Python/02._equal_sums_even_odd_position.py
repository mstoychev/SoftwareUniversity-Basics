initial_number = int(input())
final_number = int(input())

print_line = ""

for i in range(initial_number, final_number + 1):
    current_number = i
    current_number_str = str(current_number)
    sum_even = 0
    sum_odd = 0
    for j in range(0, len(current_number_str)):
        character = current_number_str[j]
        character_num = int(character)
        if j % 2 == 0:
            sum_even += character_num
        else:
            sum_odd += character_num

    if sum_even == sum_odd:
        final_num = current_number_str
        final_num_str = str(final_num)
        print_line += final_num_str + " "

print(print_line)

