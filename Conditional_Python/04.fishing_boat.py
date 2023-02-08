budget = int(input())
season = input()
num_fishers = int(input())
boat_price = 0

if season == "Spring":
    boat_price = 3000
    if num_fishers <= 6:
        boat_price *= 0.9
        if num_fishers % 2 == 0:
            boat_price *= 0.95
    elif 7 <= num_fishers <= 11:
        boat_price *= 0.85
        if num_fishers % 2 == 0:
            boat_price *= 0.95
    elif num_fishers >= 12:
        boat_price *= 0.75
        if num_fishers % 2 == 0:
            boat_price *= 0.95      #5% отстъпка, ако са четен брой, освен ако не е есен
elif season == "Summer":
    boat_price = 4200
    if num_fishers <= 6:
        boat_price *= 0.9
        if num_fishers % 2 == 0:
            boat_price *= 0.95
    elif 7 <= num_fishers <= 11:
        boat_price *= 0.85
        if num_fishers % 2 == 0:
            boat_price *= 0.95
    elif num_fishers >= 12:
        boat_price *= 0.75
        if num_fishers % 2 == 0:
            boat_price *= 0.95      #5% отстъпка, ако са четен брой, освен ако не е есен
elif season == "Autumn":
    boat_price = 4200
    if num_fishers <= 6:
        boat_price *= 0.9
    elif 7 <= num_fishers <= 11:
        boat_price *= 0.85
    elif num_fishers >= 12:
        boat_price *= 0.75
elif season == "Winter":
    boat_price = 2600
    if num_fishers <= 6:
        boat_price *= 0.9
        if num_fishers % 2 == 0:
            boat_price *= 0.95
    elif 7 <= num_fishers <= 11:
        boat_price *= 0.85
        if num_fishers % 2 == 0:
            boat_price *= 0.95
    elif num_fishers >= 12:
        boat_price *= 0.75
        if num_fishers % 2 == 0:
            boat_price *= 0.95      # 5% отстъпка, ако са четен брой, освен ако не е есен

diff = abs(boat_price - budget)
if budget >= boat_price:
    print(f"Yes! You have {f'{diff:.2f}'} leva left.")
else:
    print(f"Not enough money! You need {f'{diff:.2f}'} leva.")