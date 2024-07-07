def even_generator_upto_limit(limit: int):
    for i in range(2, limit + 1, 2):
        yield i


for num in even_generator_upto_limit(10):
    print(num)
