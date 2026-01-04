"""
TASK:
Count the number of vowels in a string.

Input:
"opensource"

Output:
5
"""

# TODO: Write your solution here

def count_vowels(text):
    """
    Count the number of vowels in a given string.

    Args:
        text: The string to be analyzed.

    Output:
        int: The total count of vowels.
    """
    vowels = 'aeiou'
    count = 0

    for char in text.lower():
        if char in vowels:
            count += 1

    return count

#Example usage
result = count_vowels('opensource')
print(f"Vowel count: {result}")
