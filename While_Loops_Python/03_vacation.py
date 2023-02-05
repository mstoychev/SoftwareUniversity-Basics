needed_money = float(input())
current_money = float(input())
spend_consecutive_counter = 0
flag_failed = False

spend_day = 1
current_action = input()
current_quantity = float(input())
while current_money < needed_money:
    if current_action == "save":
        spend_consecutive_counter = 0
        current_money += current_quantity
    elif current_action == "spend":
        current_money -= current_quantity
        if current_money < 0:
            current_money = 0
        spend_consecutive_counter += 1
        if spend_consecutive_counter == 5:
            print("You can't save the money.")
            print(f"{spend_day}")
            flag_failed = True
            break

    if current_money >= needed_money:
        break
    spend_day += 1
    current_action = input()
    current_quantity = float(input())

if not flag_failed:
    print(f"You saved the money for {spend_day} days.")