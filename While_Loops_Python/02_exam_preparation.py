num_of_bad_score = int(input())
bad_score_counter = 0
exercise_counter = 0
flag_failed = False
total_score = 0
last_problem = ""

name_of_problem = input()
score_problem = int(input())
while name_of_problem != "Enough":
    total_score += score_problem
    exercise_counter += 1

    if score_problem <= 4:
        bad_score_counter += 1
        if bad_score_counter == num_of_bad_score:
            flag_failed = True
            print(f"You need a break, {bad_score_counter} poor grades.")
            break

    name_of_problem = input()
    if name_of_problem == "Enough":
        break
    score_problem = int(input())
    last_problem = name_of_problem

if not flag_failed:
    average_score = total_score / exercise_counter
    print(f"Average score: {average_score:.2f}")
    print(f"Number of problems: {exercise_counter}")
    print(f"Last problem: {last_problem}")

    