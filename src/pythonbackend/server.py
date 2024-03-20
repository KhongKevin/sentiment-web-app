# import nltk
# nltk.download('all')

# import libraries
from flask import Flask , request, jsonify

import pandas as pd

import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer

analyzer = SentimentIntensityAnalyzer()


# create get_sentiment function

def get_sentiment(text):

    scores = analyzer.polarity_scores(text)

    sentiment = 1 if scores['pos'] > 0 else 0

    return sentiment

app = Flask(__name__)


@app.route("/")
def index():
    return "Hello, World!"

@app.route("/favicon.ico")
def favicon():
    # Return a 404 Not Found error for favicon requests
    return "", 404

@app.route("/sentimentWord", methods=["POST"])
def sentimentWord():
    data = request.json
    sentiment_word = data.get("sentimentWord", "")
    if(get_sentiment(sentiment_word) > 0):
        sentiment = "postive"
    else:
        sentiment = "neutral or negative"
    return jsonify({"sentiment": sentiment})


if __name__ == "__main__":
    app.run(debug=True, ssl_context='adhoc')

# from nltk.sentiment.vader import SentimentIntensityAnalyzer

# from nltk.corpus import stopwords

# from nltk.tokenize import word_tokenize

# from nltk.stem import WordNetLemmatizer


# # download nltk corpus (first time only)
# import nltk

#nltk.download('all')




# # Load the amazon review dataset

# df = pd.read_csv('https://raw.githubusercontent.com/pycaret/pycaret/master/datasets/amazon.csv')

# #SOURCING CODE FROM https://www.datacamp.com/tutorial/text-analytics-beginners-nltk


# # create preprocess_text function
# def preprocess_text(text):

#     # Tokenize the text

#     tokens = word_tokenize(text.lower())




#     # Remove stop words

#     filtered_tokens = [token for token in tokens if token not in stopwords.words('english')]




#     # Lemmatize the tokens

#     lemmatizer = WordNetLemmatizer()

#     lemmatized_tokens = [lemmatizer.lemmatize(token) for token in filtered_tokens]




#     # Join the tokens back into a string

#     processed_text = ' '.join(lemmatized_tokens)

#     return processed_text

# # apply the function df

# df['reviewText'] = df['reviewText'].apply(preprocess_text)

# print(df)

# # initialize NLTK sentiment analyzer

# analyzer = SentimentIntensityAnalyzer()


# # create get_sentiment function

# def get_sentiment(text):

#     scores = analyzer.polarity_scores(text)

#     sentiment = 1 if scores['pos'] > 0 else 0

#     return sentiment




# # apply get_sentiment function

# df['sentiment'] = df['reviewText'].apply(get_sentiment)

# print(df)


# print(get_sentiment("this works yes?"))
# print(get_sentiment("I love trump and this so much!"))
# print(get_sentiment("this sucks balls"))