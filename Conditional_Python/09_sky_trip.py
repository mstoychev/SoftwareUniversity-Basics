nights = int(input()) - 1
type_of_room = input()
qualification = input()
price_per_night = 0
total_money = 0

if type_of_room == "room for one person":
    price_per_night = 18
    total_money = price_per_night * nights
    if qualification == "positive":
        total_money *= 1.25
    elif qualification == "negative":
        total_money *= 0.9
    print(f"{total_money:.2f}")

elif type_of_room == "apartment":
    price_per_night = 25
    total_money = price_per_night * nights
    if nights < 10:
        total_money *= 0.7
    elif 10 <= nights <= 15:
        total_money *= 0.65
    elif nights > 15:
        total_money *= 0.5

    if qualification == "positive":
        total_money *= 1.25
    elif qualification == "negative":
        total_money *= 0.9
    print(f"{total_money:.2f}")

elif type_of_room == "president apartment":
    price_per_night = 35
    total_money = price_per_night * nights
    if nights < 10:
        total_money *= 0.9
    elif 10 <= nights <= 15:
        total_money *= 0.85
    elif nights > 15:
        total_money *= 0.8

    if qualification == "positive":
        total_money *= 1.25
    elif qualification == "negative":
        total_money *= 0.9
    print(f"{total_money:.2f}")