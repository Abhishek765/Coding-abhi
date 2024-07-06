input_str_1 = "Hello world"
input_str_2 = "HHeello wworrlldd"

def first_non_repeated_character(str: str):
    ans = None
    for char in str:
        char_count = str.count(char)
        if(char_count == 1):
            ans = char
            break
    return ans


print(f"First non-repeated character is: {first_non_repeated_character(input_str_1)}")