current_film = input()
total_tickets = 0
student_counter = 0
standard_counter = 0
kid_counter = 0
flag_breaker = False

while current_film != "Finish":
    free_sit = int(input())
    full_counter = 0

    type_of_sit = input()
    while type_of_sit != "End":
        if type_of_sit == "Finish":
            flag_breaker = True
            break
        total_tickets += 1
        full_counter += 1
        if type_of_sit == "student":
            student_counter += 1
        elif type_of_sit == "standard":
            standard_counter += 1
        elif type_of_sit == "kid":
            kid_counter += 1

        if full_counter >= free_sit:
            break
        type_of_sit = input()

    print(f"{current_film} - {(full_counter/free_sit * 100):.2f}% full.")
    if flag_breaker:
        break

    current_film = input()
print(f"Total tickets: {total_tickets}")
print(f"{(student_counter/total_tickets * 100):.2f}% student tickets.")
print(f"{(standard_counter/total_tickets*100):.2f}% standard tickets.")
print(f"{(kid_counter/total_tickets*100):.2f}% kids tickets.")