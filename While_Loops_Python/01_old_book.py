old_book = input()
book_counter = 0
flag = True

current_book = input()
while current_book != "No More Books":
    book_counter += 1
    if current_book == old_book:
        flag = False
        print(f"You checked {book_counter - 1} books and found it.")
        break

    current_book = input()

if flag:
    print(f"The book you search is not here!")
    print(f"You checked {book_counter} books.")
