import time

max_attempts = 5
curr_attempts = 0
wait_time = 1

while curr_attempts < max_attempts:
    print(f'Attempt: {curr_attempts + 1}, wait time: {wait_time}')
    time.sleep(wait_time)
    wait_time *= 2
    curr_attempts += 1
    
if curr_attempts == max_attempts:
    print('Attempts exhausted')
