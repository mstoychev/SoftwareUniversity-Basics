number = int(input())
current = 1


for row in range(1, number + 1):
    print_current_line = ""
    is_bigger_than_number = False

    for col in range(1, row + 1):
        if current > number:
            is_bigger_than_number = True
            break

        current_str = str(current)
        print_current_line += current_str + " "
        current += 1
    print(print_current_line)
    if is_bigger_than_number:
        break