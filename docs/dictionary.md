# Dictionary

This project has been started to prepare a English to Odia dictionary.  
However, to start with Odia to Odia dictionary has been given higher priority.  The following tasks are prepared as a roadmap.

## Completed work

- Data scraping from Online Odia to Odia dictionary.
    - Odia to Odia dictionary dataset (138 MB) can be found at [Kaggle dataset](https://www.kaggle.com/soumendrak/odia-structured-dictionary).
    - This [source code](https://github.com/OdiaNLP/dictionary) has been developed to fetch the data.

??? note "Obsolete tasks"
    ### Immediate Tasks
    - [x] Cleaning of the dataset -> Parked till further resource availability
    - [ ] Extracting the missing pages dataset

    ### Long term tasks

    - Hosting a dictionary.
    - Using the dictionary for English to Odia translation.
    - Exposing the dictionary as an API for the public.

## English to Odia dictionary

To add on to the past activity of Odia to Odia dictionary, English to Odia dictionary task has been taken up.

???+hint "Challenges"
    1. Initial English words corpus preparation.
    2. Finding Odia words of the corresponding English words.
    3. Cleaning up the pairs.
    4. What to do in case no matching English words found in the corpus?

### English words corpus

To prepare the English words corpus, which will be used as the dataset the following minimum features were required.

???+note "Characteristics"
    1. The words list corpus should be available open source.
    2. As like most of the tasks in this project, there is a high chance that we will get parallel en-or word pairs. However, check if any parallel corpus found.
    3. It is better if we can find most used English words of generic domain. It's better to get domain specific words, but not in highest priority.

- With all these characteristics in mind, I have got an English wordlist from this [GitHub repository](https://github.com/meetDeveloper/freeDictionaryAPI/blob/master/meta/wordList/english.txt).
- It was GPL 3.0 licensed and open sourced; good to start with.
- There are 2,33,464 words/phrases found in this word list.

### English-Odia word pair

Now that we have got the list of English words. The next major challenge is to find the corresponding Odia words.

???+note "Resources available"
    We do have the following resources available:

    1. Get the parallel pairs from the existing parallel pairs available with us. These are manually curated by us.
    2. Take any of the 3rd party corpus, but again cleaning and all needs to be done. Nobody loves cleaning other people's garbage. Definitely not in this volunteering work.
    3. Use Bing or Google translate API to find those English words' Odia text.

I have chosen to go ahead with the 3rd approach.

???+hint "Challenges to use Google translate API"
    1. We need to use only free version of Google translate. I do not have money :D
    2. Google translate will rate limit the API calls for sure.[^1][^2] Everybody does rate limiting. There are many advantages to it.[^3]

#### googletrans

- Enter [Googletrans](https://github.com/ssut/py-googletrans) python library, in which I am already a [contributor](../contributions/#google-translation-api-wrapper).
- With `Googletrans`, I was able to translate from English to Odia words without any API token or credit card.
- For rate limiter constraints, I have thought to use multiple browser agents, asynchronous POST calls and random sleep time in between a batch of POST call requests.
- But, I got lazy and forgot these thoughts, simply used a `try` and `catch` block in synchronous POST calls, where after every rate limit exception the program sleeps for 2 minutes and tries again.
- This sleeping and calling continued till the end of all elements in the English word list.
- It has been 2 days 12+ hours and I have not reached even half of the words in the list.
- Now, I could not break away from the program otherwise duplicates may occur. Yeah, I know we can avoid that through program also, but you know I am lazy.
- Do not worry, about 1 lakh pairs I have got till now. I will upload these pairs to Kaggle dataset, so that you do not have to.

### Cleaning up the pairs

- Those who have experience in Google translate, may know that Google translate results are good, but not fully accurate. Even I have contributed to Google translate (before Odia is available in their website) with level 17 contributor. Google translate needs help to translate accurately.
- There is a need for manual verification of the translated pairs. But, I am not sure when we will get time to do that.
- The other cleaning methods used:
    1. All english words are lemmatized[^4] to their root form for e.g. `managers` becomes `manager`, `eaten` becomes `eat`
    2. All words are converted to lower case.
    3. Spaces and newline characters are stripped off from the words.

### In case an exact word not found

- In case a word not found in the English word list as the exact match, check for the word in phrases i.e. multiple words, if it is found then respond back with that response.
???+example
    - suppose `add` is not found in the English word list.
    - `add` will be searched in phrases
    - if there are phrases like `add on`, `add up` those phrases will be picked and shown in the response.

## Hosting Dictionary API on server

???+hint "Challenges"
    1. The server needs to be in the free tier. I do not have money. :D
    2. Rate limiting number of requests from users.
    3. To make the API stable and scalable.

- I have started working in Heroku to deploy this dictionary.
- It's deployed in <https://odia-dictionary.herokuapp.com/> but, it is not stable, due to 500 MB RAM free-tier limitation in Heroku.

???+note "Future Work"
    - [ ] Host the dictionary in a stable server.
    - [ ] Upload the English-Odia dictionary data to Kaggle.

[^1]: https://cloud.google.com/translate/quotas
[^2]: https://stackoverflow.com/q/7646112/5014656
[^3]: https://nordicapis.com/everything-you-need-to-know-about-api-rate-limiting/
[^4]: https://en.wikipedia.org/wiki/Lemmatisation
