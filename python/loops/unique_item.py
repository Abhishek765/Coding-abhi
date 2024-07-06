items = ["apple", "orange", "banana", "apple", "mango"]

# check whether list contains duplicates

unique_items = set()

for item in items:
    if item in unique_items:
        print(f"Duplicate item: {item}")
        break
    unique_items.add(item)

