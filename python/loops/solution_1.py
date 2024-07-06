sum_of_even_numbers = 0

max_number = 4

for i in range(1, max_number + 1):
    if i % 2 == 0:
        sum_of_even_numbers += i


print(f"Sum of even numbers: {sum_of_even_numbers}")