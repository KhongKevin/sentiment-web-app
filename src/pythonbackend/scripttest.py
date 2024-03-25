import pandas as pd
import wikipedia
import re

def find_sentences_with_word(content, word):
    # Split content into sentences
    sentences = re.split(r'(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s', content)

    # Find sentences containing the word
    matching_sentences = [sentence for sentence in sentences if word.lower() in sentence.lower()]

    return matching_sentences

def search_word(word):
    search_results = wikipedia.search(word)
    data = []

    if not search_results:
        print("No results found.")
        return

    for title in search_results:
        try:
            try:
                page = wikipedia.page(title)
                content = page.content
                occurrences = content.lower().count(word.lower())
                sentences_with_word = find_sentences_with_word(content, word)
                data.append({'Title': title, 'Occurrences': occurrences, 'Sentences': sentences_with_word})
            except wikipedia.exceptions.DisambiguationError as e:
                print(f"Ambiguous term: {title}")
        except wikipedia.exceptions.PageError:
            print("PageError")

    df = pd.DataFrame(data)
    return df

if __name__ == "__main__":
    result_df = search_word("dogs")
    print(result_df)
