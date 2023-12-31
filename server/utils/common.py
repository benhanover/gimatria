gematria_dict = {
        'א': 1,
        'ב': 2,
        'ג': 3,
        'ד': 4,
        'ה': 5,
        'ו': 6,
        'ז': 7,
        'ח': 8,
        'ט': 9,
        'י': 10,
        'כ': 20,
        'ל': 30,
        'מ': 40,
        'נ': 50,
        'ס': 60,
        'ע': 70,
        'פ': 80,
        'צ': 90,
        'ק': 100,
        'ר': 200,
        'ש': 300,
        'ת': 400,

        'ם': 40,
        'ך': 20,
        'ץ': 90,
        'ף': 80,
        'ן': 50,

        ' ': 0,
    }

hebrew_words = [
        'אחד',
        'שתיים',
        'שלוש'
    ]
def calculate_gematria(hebrew_string):
    gematria_value = sum(gematria_dict[char] for char in hebrew_string)
    return gematria_value

def create_gimatria_entry(hebrew_string):
    return {
        'string_value': hebrew_string, 
        'gimatria':  calculate_gematria(hebrew_string)
    }

def get_mock_gimatria_entries(num):
    mock_entries = []

    for i in range(num):
        mock_entries.append(create_gimatria_entry(hebrew_words[i % len(hebrew_words)]))

    return mock_entries