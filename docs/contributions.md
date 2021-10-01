# Contributions

All the contribution are Open source and freely available (with proper attribution) to the society.
OdiaNLP has done either _entire or partial_ contributions to the following projects:

## Text to Speech or Speech to Text

### [Mozilla Common Voice](https://commonvoice.mozilla.org/or)

- Speech corpora creation through Mozilla Common Voice.
- 201MB Speech data has been prepared with purely volunteering efforts as of 21 July 2021.

<p align="center">
  <img width="560" height="400" src="/images/Common_Voice_screenshot.png">
</p>

- After downloading you will get a folder structure like this:

``` bash
cv-corpus-<version>-<date>
└── or
    ├── reported.tsv
    ├── dev.tsv
    ├── other.tsv
    ├── test.tsv
    ├── train.tsv
    ├── validated.tsv
    ├── partials/template
    └── clips
        ├── common_voice_or_<count>.mp3
        ├── common_voice_or_<count>.mp3
        ├── common_voice_or_<count>.mp3
        ├── common_voice_or_<count>.mp3
        .
        .
        .
        └── common_voice_or_<count>.mp3
```

- The `.tsv` files contain the odia sentences in odia script.
- The `.mp3` files contain the corresponding pronunciation audio of the script.

## Machine Translation

### [Google Translation API wrapper](https://github.com/ssut/py-googletrans)

- Odia [has been added](https://github.com/ssut/py-googletrans/pull/159) into Unofficial Google Translation API wrapper.

```python
$ pip install googletrans
>>> from googletrans import Translator
>>> translator = Translator()
>>> translator.translate("Hello Odia people", dest="or").text
# 'ନମସ୍କାର ଓଡିଆ ଲୋକମାନେ |'
```

## Data Anonymization

### [Fake Odia name generation](https://github.com/joke2k/faker)

- For fake name generation purposes Odia support has been added to the best data anonymization library, Faker.

```python
$ pip install Faker
>>> from faker import Faker
>>> fake = Faker("or_IN")
>>> for _ in range(10):
...     print(fake.name())
... 
ଚିତରଂଜନ ନନ୍ଦି
ରାଜ, ରବିନାରାୟଣ
କେଦାରନାଥ ବର୍ମା
ଅମରନାଥ ସେଠୀ
ସାଲୁଜା, କଳ୍ପତରୁ
ଦେବରାଜ ରାଧାରାଣୀ ପୋଦ୍ଦାର
ରାଧୁ ମତଲୁବ ଶତପଥୀ
ରନ୍ଧାରୀ, ସୁଶାନ୍ତ
ଗୈାତମ ଓରାମ
```

## Named Entity Recognition

### [Odia Persons' name dataset](https://www.kaggle.com/soumendrak/odia-person-names)

- Odia persons' name dataset has been added to Kaggle, to make it publicly available and further development on NER in Odia language.

## Localization

- Various localization projects to make websites and applications available in Odia language

### [Telegram](https://telegram.org/) - Open source instant messaging tool

<p align="center">
  <img width="560" height="400" src="/images/telegram.jpg">
</p>
### [Mozilla Firefox](https://pontoon.mozilla.org/or/) (In-Progress)
<p align="center">
  <img width="560" height="400" src="/images/pontoon.png">
</p>

### [Duckduckgo](https://duckduckgo.com/) - Privacy based search engine

<p align="center">
  <img width="560" height="400" src="/images/ddg.png">
</p>

### [COVID-19 website](https://www.covid19india.org/) (Unofficial)

<p align="center">
  <img width="560" height="400" src="/images/covid19_screenshot.png">
</p>

## OpenOdia Library

[OpenOdia](https://openodia.soumendrak.com/) is a consolidated tool built for Odia language. It consists of various needed tools for Odia language like:

1. Work tokenization
2. Sentence tokenization
3. Stopword removal
4. Google Translate wrapper
5. Automatic text summarization
6. Odia name generation