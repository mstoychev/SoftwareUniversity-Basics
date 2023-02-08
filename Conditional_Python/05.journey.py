budget = float(input())
season = input()
destination = ""
type_of_trip = ""

if budget <= 100:
    destination = "Bulgaria"
    if season == "summer":
        type_of_trip = "Camp"
        budget *= 0.3
    elif season == "winter":
        type_of_trip = "Hotel"
        budget *= 0.7

elif budget <= 1000:
    destination = "Balkans"
    if season == "summer":
        type_of_trip = "Camp"
        budget *= 0.4
    elif season == "winter":
        type_of_trip = "Hotel"
        budget *= 0.8

elif budget > 1000:
    destination = "Europe"
    type_of_trip = "Hotel"
    budget *= 0.9
print(f"Somewhere in {destination}")
print(f"{type_of_trip} - {f'{budget:.2f}'}")