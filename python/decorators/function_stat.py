def func_stat(func):
    """
    function to print function name and its arguments
    """

    def wrapper(*args, **kwargs):
        args_value = ", ".join(str(arg) for arg in args)
        kwargs_value = ", ".join(f"{k}={v}" for k, v in kwargs.items())
        print(
            f"function called: {func.__name__} with args: {args_value} and kwargs: {kwargs_value}"
        )
        return func(*args, **kwargs)

    return wrapper


@func_stat
def user_info(name, age):
    pass


@func_stat
def greeting():
    print("Welcome !")


greeting()
user_info("Abhishek", age=24)
