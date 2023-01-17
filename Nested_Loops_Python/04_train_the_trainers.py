judges_number = int(input())
final_average_assessment = 0
presentation_count = 0

current_presentation = input()
while current_presentation != "Finish":
    average_presentation = 0
    presentation_count +=1
    for i in range(judges_number):
        current_score = float(input())
        average_presentation += current_score
    average_presentation = average_presentation / judges_number
    print(f"{current_presentation} - {average_presentation :.2f}.")

    final_average_assessment += average_presentation
    current_presentation = input()
print(f"Student's final assessment is {(final_average_assessment/presentation_count):.2f}.")
