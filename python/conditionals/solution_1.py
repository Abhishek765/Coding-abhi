day = "Wednesday"
age = 20

price = 12 if age >= 18 else 8
price = price - 2 if day == 'Wednesday' else price
print(f"Ticket pricing for you is ${price}")
