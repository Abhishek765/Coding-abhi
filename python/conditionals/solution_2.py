score = 100

if score > 100:
    print("Score cannot be more than 100")
    exit()

if score >= 90: 
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
elif score >= 60:
    grade = 'D'
else:
    grade = 'E'

print(f'Student grade: {grade}')