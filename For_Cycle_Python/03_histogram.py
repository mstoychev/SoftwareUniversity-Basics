num_cycles = int(input())
p1 = 0
p2 = 0
p3 = 0
p4 = 0
p5 = 0
for i in range(0, num_cycles):
    current_number = int(input())
    if current_number < 200:
        p1 += 1
    elif current_number <= 399:
        p2 += 1
    elif current_number <= 599:
        p3 += 1
    elif current_number <= 799:
        p4 += 1
    else:
        p5 += 1

print(f"{(p1 / num_cycles * 100):.2f}"+"%")
print(f"{(p2 / num_cycles * 100):.2f}"+"%")
print(f"{(p3 / num_cycles * 100):.2f}"+"%")
print(f"{(p4 / num_cycles * 100):.2f}"+"%")
print(f"{(p5 / num_cycles * 100):.2f}"+"%")
