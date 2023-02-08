cinema_type = input()
num_rows = int(input())
num_columns = int(input())
price = 0
money = 0

if cinema_type == "Premiere":
    price = 12
    money = price * num_rows * num_columns
elif cinema_type == "Normal":
    price = 7.5
    money = price * num_rows * num_columns
elif cinema_type == "Discount":
    price = 5
    money = price * num_rows * num_columns

print(f"{f'{money:.2f}'} leva")            #print(f"{money:.2f} leva")

