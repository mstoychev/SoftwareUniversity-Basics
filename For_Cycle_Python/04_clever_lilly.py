age = int(input())
laundry_price = float(input())
toys_price = int(input())
toy_number = 0
a = 0
saved_money = 0
brother_counter = 0

for i in range(1, age + 1):
    if i % 2 == 0:
        a += 10           #a = birthday present starts with 10, 20 , 30...
        brother_counter += 1
        saved_money += a
    else:
        toy_number += 1

saved_money = saved_money + toy_number * toys_price - brother_counter
if saved_money >= laundry_price:
    print(f"Yes! {(saved_money - laundry_price):.2f}")
else:
    print(f"No! {(laundry_price - saved_money):.2f}")
