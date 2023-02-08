week = input()
nights = int(input())
studio_price = 0
apartment_price = 0
total_money_studio = 0
total_money_apartment = 0

if week == "May" or week == "October":
    studio_price = 50
    apartment_price = 65
    if nights > 14:
        apartment_price *= 0.9
        total_money_apartment = apartment_price * nights
        print(f"Apartment: {f'{total_money_apartment:.2f}'} lv.")
    else:
        total_money_apartment = apartment_price * nights
        print(f"Apartment: {f'{total_money_apartment:.2f}'} lv.")

    if 7 < nights <= 14:
        studio_price *= 0.95
    elif nights > 14:
        studio_price *= 0.7
    total_money_studio = studio_price * nights
    print(f"Studio: {f'{total_money_studio:.2f}'} lv.")

elif week == "June" or week == "September":
    studio_price = 75.2
    apartment_price = 68.70
    if nights > 14:
        apartment_price *= 0.9
        total_money_apartment = apartment_price * nights
        print(f"Apartment: {f'{total_money_apartment:.2f}'} lv.")
    else:
        total_money_apartment = apartment_price * nights
        print(f"Apartment: {f'{total_money_apartment:.2f}'} lv.")

    if nights > 14:
        studio_price *= 0.8
    total_money_studio = studio_price * nights
    print(f"Studio: {f'{total_money_studio:.2f}'} lv.")

elif week == "July" or week == "August":
    studio_price = 76
    apartment_price = 77
    total_money_studio = studio_price * nights
    if nights > 14:
        apartment_price *= 0.9
        total_money_apartment = apartment_price * nights
        print(f"Apartment: {f'{total_money_apartment:.2f}'} lv.")
    else:
        total_money_apartment = apartment_price * nights
        print(f"Apartment: {f'{total_money_apartment:.2f}'} lv.")

    print(f"Studio: {f'{total_money_studio:.2f}'} lv.")
