def factorial(num: int):
    if num <= 1:
        return num
    return num * factorial(num - 1)


number = 2

print(f"factorial of {number} : {factorial(number)} ")
