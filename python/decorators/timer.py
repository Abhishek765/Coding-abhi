import time


# Decorators are nothing but more like Higher order functions
def timer(func):
    def wrapper(*args, **kwargs):
        startTime = time.time()
        result = func(*args, **kwargs)
        endTime = time.time()
        print(f"{func.__name__} ran in {endTime - startTime} seconds")
        return result

    return wrapper


@timer
def example_func(delay: int):
    time.sleep(delay)


example_func(2)
