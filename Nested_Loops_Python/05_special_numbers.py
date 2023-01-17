N = int(input())
line_to_print = ""

for a in range(1,10):
    first_num = 0
    if N % a == 0:
        first_num = a
        for b in range(1,10):
            second_num = 0
            if N % b == 0:
                second_num = b
                for c in range(1, 10):
                    third_num = 0
                    if N % c == 0:
                        third_num = c
                        for d in range(1,10):
                            fourth_num = 0
                            final_number = 0
                            if N % d == 0:
                                fourth_num = d
                                final_number = str(a) + str(b) + str(c) + str(d)
                                line_to_print += final_number + " "

print(line_to_print)
