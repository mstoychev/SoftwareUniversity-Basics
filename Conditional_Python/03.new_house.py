
flowers_type = input()
num_flowers = int(input())
budget = int(input())
final_price = 0

if flowers_type == "Roses":
    if num_flowers > 80:
        final_price = num_flowers * 5 * 0.9
    else:
        final_price = num_flowers * 5
if flowers_type == "Dahlias":
    if num_flowers > 90:
        final_price = num_flowers * 3.8 * 0.85
    else:
        final_price = num_flowers * 3.8
if flowers_type == "Tulips":
    if num_flowers > 80:
        final_price = num_flowers * 2.8 * 0.85
    else:
        final_price = num_flowers * 2.8
if flowers_type == "Narcissus":
    if num_flowers < 120:
        final_price = num_flowers * 3 * 1.15
    else:
        final_price = num_flowers * 3
if flowers_type == "Gladiolus":
    if num_flowers < 80:
        final_price = num_flowers * 2.5 * 1.2
    else:
        final_price = num_flowers * 2.5

diff = abs(budget - final_price)
if budget >= final_price:
    print(f"Hey, you have a great garden with {num_flowers} {flowers_type} and {f'{diff:.2f}'} leva left.")
else:
    print(f"Not enough money, you need {f'{diff:.2f}'} leva more.")
