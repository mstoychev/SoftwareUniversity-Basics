debt = float(input()) * 100
counter = 0
while debt != 0:
    counter += 1
    if debt >= 200:
        debt -= 200
    elif debt >= 100:
        debt -= 100
    elif debt >= 50:
        debt -= 50
    elif debt >= 20:
        debt -= 20
    elif debt >= 10:
        debt -= 10
    elif debt >= 5:
        debt -= 5
    elif debt >= 2:
        debt -= 2
    elif debt >= 1:
        debt -= 1

print(counter)

