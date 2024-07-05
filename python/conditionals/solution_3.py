password=  'asdaasdaksmdasmds'

password_len = len(password)

if password_len < 6:
    password_strength = 'Weak'
elif password_len <= 10:
    password_strength = 'Medium'
else:
    password_strength = 'Strong'

print(f'Password strength: {password_strength}')

