#question-58

# student_id = input("Enter Student ID: ")

# degree, batch, branch, roll_number = student_id.split("-")

# if branch == "CSE":
#     print("CSE Student")
# else:
#     print("Non-CSE Student")




# #question-59
# mail=input("Enter your email :").split("@")
# a,b=mail
# if b=="gmail.com":
#     print("Gmail user")
# else:
#     print("Other email user")




# #question-60
# full_name = input("Enter full name: ")

# name = full_name.split(" ")

# first_name = name[0]
# last_name = name[2]

# username = first_name + "." + last_name

# if "." in username:
#     print("Valid Username Format")
# else:
#     print("Invalid Username Format")




# #question-61
# number = int(input("Enter a positive integer: "))

# if number < 10:
#     print("One Digit")
# elif number < 100:
#     print("Two Digits")
# elif number < 1000:
#     print("Three Digits")
# else:
#     print("Four or More Digits")







#question-62
# price = float(input("Enter product price: "))
# quantity = int(input("Enter quantity: "))

# subtotal = price * quantity

# if subtotal >= 5000:
#     discount_percentage = 20
# elif subtotal >= 2000:
#     discount_percentage = 10
# else:
#     discount_percentage = 0

# discount = subtotal * discount_percentage / 100
# final_amount = subtotal - discount

# print(f"Subtotal: {subtotal:.0f}")
# print(f"Discount: {discount_percentage}%")
# print(f"Final: {final_amount:.2f}")








#question-63
# units = int(input("Enter units consumed: "))

# if units <= 100:
#     rate = 5
# elif units <= 300:
#     rate = 7
# else:
#     rate = 10

# bill = units * rate

# print(f"Units: {units}")
# print(f"Rate: ₹{rate}")
# print(f"Bill: ₹{bill}")






# #question-64
# balance = 10000

# print("1. Check Balance")
# print("2. Deposit")
# print("3. Withdraw")
# print("4. Exit")

# choice = int(input("Enter your choice: "))

# match choice:
#     case 1:
#         print(f"Balance: {balance}")

#     case 2:
#         amount = int(input("Enter deposit amount: "))
#         balance = balance + amount
#         print(f"Deposit Successful, Balance: {balance}")

#     case 3:
#         amount = int(input("Enter withdrawal amount: "))

#         if amount <= balance:
#             balance = balance - amount
#             print(f"Withdrawal Successful, Balance: {balance}")
#         else:
#             print("Insufficient Balance")

#     case 4:
#         print("Exit")

#     case _:
#         print("Invalid Choice")




# #question-65
# print("1. Pizza - ₹250")
# print("2. Burger - ₹150")
# print("3. Pasta - ₹200")
# print("4. Sandwich - ₹120")

# choice = int(input("Enter your choice: "))
# quantity = int(input("Enter quantity: "))

# match choice:
#     case 1:
#         price = 250
#     case 2:
#         price = 150
#     case 3:
#         price = 200
#     case 4:
#         price = 120
#     case _:
#         price = 0

# if price == 0:
#     print("Invalid Choice")
# else:
#     total = price * quantity

#     if total >= 500:
#         discount = total * 10 / 100
#     else:
#         discount = 0

#     final_amount = total - discount

#     print(f"Total: {total}")
#     print(f"Discount: {discount:.2f}")
#     print(f"Final: {final_amount:.2f}")





# #question-66
# marks1 = int(input("Enter marks of subject 1: "))
# marks2 = int(input("Enter marks of subject 2: "))
# marks3 = int(input("Enter marks of subject 3: "))
# attendance = int(input("Enter attendance: "))

# total = marks1 + marks2 + marks3
# average = total / 3

# if attendance >= 75:
#     if average >= 90:
#         print("Outstanding")
#     elif average >= 75:
#         print("Very Good")
#     elif average >= 60:
#         print("Good")
#     elif average >= 40:
#         print("Pass")
#     else:
#         print("Fail")
# else:
#     print("Not Eligible")






# #question-67
# distance = float(input("Enter distance in km: "))
# ride_type = input("Enter ride type: ")

# match ride_type:
#     case "normal":
#         rate = 15
#     case "premium":
#         rate = 25
#     case _:
#         rate = 0

# if rate == 0:
#     print("Invalid Ride Type")
# else:
#     fare = distance * rate

#     if distance > 20:
#         surcharge = fare * 10 / 100
#     else:
#         surcharge = 0

#     final_fare = fare + surcharge

#     print(f"Fare: {final_fare:.2f}")





# #question-68
# score = int(input("Enter entrance score: "))
# percentage = float(input("Enter 12th percentage: "))
# category = input("Enter category: ")

# match category:
#     case "general":
#         if score >= 80 and percentage >= 75:
#             print("Admission Eligible")
#         else:
#             print("Admission Not Eligible")

#     case "obc":
#         if score >= 70 and percentage >= 70:
#             print("Admission Eligible")
#         else:
#             print("Admission Not Eligible")

#     case "sc":
#         if score >= 60 and percentage >= 60:
#             print("Admission Eligible")
#         else:
#             print("Admission Not Eligible")

#     case _:
#         print("Invalid Category")