# kwargs to accept any number of arguments in the form of key,value pairs
def print_kwargs(**kwargs):
    for key, value in kwargs.items():
        print(f"{key} : {value}")


print_kwargs(name="abhishek", profession="Engineering")
print_kwargs(name="abhishek1", profession="Engineering", hobby="Traveling")
print_kwargs(profession="Engineering")
