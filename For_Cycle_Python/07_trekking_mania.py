num_groups = int(input())
total_people = 0
musala = 0
montablan = 0
kilimandjaro = 0
k2 = 0
everest = 0

for i in range(num_groups):
    people_per_group = int(input())
    total_people += people_per_group
    if people_per_group <= 5:
        musala += people_per_group
    elif people_per_group <= 12:
        montablan += people_per_group
    elif people_per_group <= 25:
        kilimandjaro += people_per_group
    elif people_per_group <= 40:
        k2 += people_per_group
    elif people_per_group > 40:
        everest += people_per_group

print(f"{(musala / total_people * 100):.2f}%")
print(f"{(montablan / total_people * 100):.2f}%")
print(f"{(kilimandjaro / total_people * 100):.2f}%")
print(f"{(k2 / total_people * 100):.2f}%")
print(f"{(everest / total_people * 100):.2f}%")