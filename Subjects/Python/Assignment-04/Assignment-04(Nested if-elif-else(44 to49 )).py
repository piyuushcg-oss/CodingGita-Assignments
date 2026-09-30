# #question-44
# num1=int(input("Enter 1st no.:"))
# num2=int(input("Enter 2nd no.:"))
# num3=int(input("Enter 3rd no.:"))
# if num1>num2 and num1>num3:
#     print("A is Greatest")
# elif num2>num1 and num2>num3:
#     print("B is greatest")
# elif num3>num1 and num3>num2:
#     print("C is greatest")
# elif num1==num2 and (num1 or num2)>num3:
#     print("A and B are equal and Greatest")
# elif num1==num3 and (num1 or num2)>num2:
#     print("A and C are equal and Greatest")
# elif num2==num3 and (num2 or num3)>num1:
#     print("B and C are equal and Greatest")
# elif num1==num2==num3:
#     print("All are Equal")
# else:
#     print("Not define")






# #question-45
# marks = int(input("Enter marks: "))
# attendance = int(input("Enter attendance: "))

# if attendance >= 75:
#     if marks >= 90:
#         print("Grade A")
#     elif marks >= 75:
#         print("Grade B")
#     elif marks >= 60:
#         print("Grade C")
#     elif marks >= 40:
#         print("Grade D")
#     else:
#         print("Grade F")
# else:
#     print("Not Eligible")







# #question-46
# salary=int(input("Enter your salary:"))
# rating=int(input("Enter your performance rating:"))
# if salary>=30000:
#     if rating==5:
#         print("Bonus:20%")
#     elif rating==4:
#         print("Bonus:15%")
#     elif rating==3:
#         print("Bonus:10%")
#     elif rating==2:
#         print("Bonus:5%")
#     else:
#         print("NO Bonus")
# elif salary<30000:
#     print("Not Eligible for Bonus")






# #question-47
# age = int(input("Enter age: "))
# distance = int(input("Enter distance in km: "))

# if age < 5:
#     print("Free")
# elif age < 60:
#     if distance <= 10:
#         print("Regular - Short Distance")
#     else:
#         print("Regular - Long Distance")
# else:
#     print("Senior")




# #question-48
# stock = int(input("Enter stock: "))
# payment_status = input("Enter payment status: ")

# if stock > 0:
#     if payment_status == "paid":
#         print("Order Confirmed")
#     elif payment_status == "pending":
#         print("Payment Pending")
#     else:
#         print("Invalid Payment Status")
# else:
#     print("Out of Stock")




# #question-49
# age = int(input("Enter age: "))
# ticket_type = input("Enter ticket type: ")

# if age < 5:
#     print("Free Travel")
# elif age < 60:
#     if ticket_type == "AC":
#         print("AC Ticket")
#     elif ticket_type == "Sleeper":
#         print("Sleeper Ticket")
#     else:
#         print("Invalid Ticket Type")
# else:
#     print("Senior Passenger")




