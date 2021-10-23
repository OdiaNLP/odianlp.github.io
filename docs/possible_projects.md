# Possible projects

This list contains the proposals for the projects which can be started with Odia language. This list has been created keeping students, research scholars and hobbist in mind, who by little knowledge on this domain can learn and able to execute this project.

- [Monolingual corpus](#monolingual-corpus)
- [Language detector](#lang-detector)
- [Word tokenizer](#word-tokenizer)
- [Word2vec preparation](#word2vec)
- [Word similarity](#word-similarity)
- [Sentence tokenizer](#sent-tokenizer)
- [Random sentence generator](#sentence-generator)
- [Sentence similarity](#sentence-similarity)
- [Stemming](#stemming)
- [Synonym](#synonym)
- [Part of Speech tagging](#pos-tag)
- [Dependency parse tree creation](#dep-parse-tree)
- [Lemmatization](#lemmatization)
- [Sentiment analysis](#sentiment-analysis)
- [Text classification](#text-classification)
- [Co-reference resolution](#coref-resolution)
- [Word(s) based sentence creation](#word-based-sentence-generator)
- [Random quotation generator](#quote-generator)
- [Author specific Quotation generation](#auth-quote-generator)
- [Syntactically sentence correction](#sentence-correction)
- [Correct punctuation marks](#punct-correction)
- [Autocomplete](#autocomplete)
- [Spell corrector](#spell-corrector)
- [Sentence completion](#sentence-completion)
- [Automatic speech recognition (major project)](#speech-recognition)
- [Text Summarization](#text-summarization)
- [Optical Character Recognition](#ocr)

## <a name="monolingual-corpus"></a> Monolingual corpus

- Please check the [resources page](/resources/text/#monolingual-corpus) for existing corpus details.

## <a name="lang-detector"></a> Language detector

- Given a text string, detect its language. It should identify if Odia language text are given.
- An existing language detector can be found in [OpenOdia project](https://openodia.soumendrak.com/#detect-odia-language).

### Existing Algorithms

1. [Google language detector](https://github.com/CLD2Owners/cld2)

## <a name="pos-tag"></a> Part of speech tagging

Given a sentence find out the part of speeches present on that sentence.  
Part of speech can be verb, noun, adjective, pronoun, preposition, etc.

## <a name="stemming"></a> Stemming

??? note "Initial rough corpus"
    - ["ଲେ", "ଠୁ", "ର", "ରେ", "ଟି", "ଟେ", "ଟା",
    - ୁଥିଲେ
    - ["ଥିଲେ", "ଥିଲ", "ଥିଲୁ", "ଥିଲି", 
        "ଉଛେ", "ଉଛ", "ଉଛୁ", "ଉଛି", 
        "ଇଛେ", "ଇଛ", "ଇଛୁ", "ଇଛି",
         "ଅଛେ", "ଅଛ", "ଅଛୁ", "ଅଛି",
        "ସିଛେ", "ସିଛ", "ସିଛୁ", "ସିଛି",
        "ଅନ୍ତେ", "ଅନ୍ତ", "ଅନ୍ତୁ", "ଅନ୍ତି",
        "ଇଲେ", "ଇଲ", "ଇଲୁ", "ଇଲି",
        "ଇବେ", "ଇବ", "ଇବୁ", "ଇବି",
        "ଥିବେ", "ଥିବ", "ଥିବୁ", "ଥିବି",
        "ଟାକୁ", "ଟାକେ", "ଟିର", "ଟିରେ", "ଟିଏ", "ମାନେ", "ଗୁଡ଼ା"]
    - ["ଗୁଡ଼ାଏ", "ଗୁଡ଼ାକ",] 

#### Largest substring approach
- By using the largest suffix substring removal process as shown in [this code](https://github.com/sainimohit23/hindi-stemmer/blob/master/stemmer.py) by Mohit for Hindi language. 
- In Odia language by using a specific set of suffixes we can omit critical information form the sentence.
- For example the suffixes like _uthilu_, _uthibe_ describes about the tense of the sentence, whether it is in future or past or present.
- Similarly, there will be exceptions throughout the process and we can not use a generic set of suffixes to stem.
- Therefore, a better method need to be found out.

#### Existing work

- [A Suffix Stripping Algorithm for Odia Stemmer](https://docplayer.net/55951889-A-suffix-stripping-algorithm-for-odia-stemmer.html) by Utkal university with 88% accuracy.
- [Design of Lightweight stemmer for Odia Derivational Suffixes](https://ijarcce.com/wp-content/uploads/2012/03/IJARCCE2I-A-Excellent-DESIGN.pdf) by Govt. college of Engineering Keonjhar with 85% accuracy.


## <a name="text-summarization"></a>Odia text summarization

- An existing extractive word-frequency based text summarizer is implemented in the [OpenOdia project](https://openodia.soumendrak.com/#automatic-extractive-text-summarization).  
- [Extrative text summarization](https://research.ijais.org/volume1/number3/ijais12-450135.pdf)
- [Automatic Text Summarization for Oriya Language](https://www.ijcaonline.org/research/volume132/number1/biswas-2015-ijca-907258.pdf)

## <a name="ocr"></a> Optical Character Recognition of Odia script

- [Automatic recognition of printed Oriya script](https://www.ias.ac.in/article/fulltext/sadh/027/01/0023-0034)

--8<-- "includes/abbreviations.md"
