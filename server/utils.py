# utils.py

def calculate_square(number):
    try:
        number = float(number)
    except ValueError:
        raise ValueError("Invalid number format")
    
    return number ** 2
