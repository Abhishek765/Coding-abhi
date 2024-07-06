str = 'python'

def reverse(string):
    str_list = list(string)
    str_list.reverse()
    return "".join(str_list)

print(f'Reversed string: {reverse(str)}')