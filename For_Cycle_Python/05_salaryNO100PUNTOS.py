count_tabs = int(input())
salary = int(input())

init_salary = salary
for i in range(count_tabs):
    current_tab = input()

    if current_tab == "Facebook":
        init_salary -= 150
    elif current_tab == "Instagram":
        init_salary -= 100
    elif current_tab == "Reddit":
        init_salary -= 50

    if init_salary <= 0:
        break

if init_salary == 0:
    print(f"You have lost your salary.")
else:
    print(init_salary)
