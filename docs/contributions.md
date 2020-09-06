All the contribution are Open source and freely available (with proper attribution) to the society.   
OdiaNLP has done either _entire or partial_ contributions to the following projects:

## Text to Speech or Speech to Text 
### [Mozilla Common Voice](https://commonvoice.mozilla.org/or)
- Speech corpora creation through Mozilla Common Voice.
- 150MB Speech data has been prepared with purely volunteering efforts.

<p align="center">
  <img width="560" height="400" src="/images/Common_Voice_screenshot.png">
</p>

## Machine Translation

### [Google Translation API wrapper](https://github.com/ssut/py-googletrans)
- Odia has been added into Unofficial Google Translation API wrapper.
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
