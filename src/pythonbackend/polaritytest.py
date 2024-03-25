from nltk.sentiment.vader import SentimentIntensityAnalyzer

analyzer = SentimentIntensityAnalyzer()


# create get_sentiment function

def get_sentiment(text):

    scores = analyzer.polarity_scores(text)

    sentiment = 1 if scores['pos'] > 0 else 0

    return sentiment

print(get_sentiment("The consequences of national polarization may, in the long term, make Trump’s actions look small. This arrest certainly pushes us closer to the edge. Whether that will lead us back to normalcy or over and down is yet to be seen."))