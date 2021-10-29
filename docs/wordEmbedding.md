# Word Embeddings in Odia language [In-progress]

In this article we will go through the followings:

1. [Introduction to Word embeddings](#introduction)
2. [Design and Architecture](#design-and-architecture)
3. [Implementation for Odia language](#implementation)
4. [Usability](#usability)
5. [Conclusion](#conclusion)
6. [Future work](#future-work)

## Introduction

- In text processing, one can split a bulk of paragraphs or pages into words (or tokens in NLP).
- In NLP, words can be represented as dense vectors.
    
    ??? question "What is dense vector?"
        There are two kinds of vector representation in NLP for representation purpose.

        1. Sparse Vector
            - Sparse means in this there will be number of zeroes like [0,0,1,0,0,1,0]
        2. Dense Vector
            - Dense vector represents the same data in non-zero values like [(2, 5), (1, 1)]
            - This is an example, where it is a unique combination of the position and value of the elements in the matrix.
        
- In `Word Embedding` the values are represented in such a way that the words which are similar to each other have similar vector representation.
- If we take an example then `କଲମ` (kalama) would have more similarity with `ପେନସିଲ` (pencil) than with `ସଙ୍ଗୀତ` (sangeeta).
- This similarity is represented by dense vectors.

## Design and Architecture

- There mainly three ways we can determine the word embeddings:  

    1. Word2Vec (Word to Vector)
    2. CBOW (Continuous Bag of Words) and 
    3. GloVe (Global Vectors)

- Here we have implemented the word embedding using word2vec approach.

<!-- Citation -->
<hr>
To cite this page, please use:

```bibtex
    @misc{OdiaNLP,
        author       = {Soumendra Kumar Sahoo},
        title        = {Word Embeddings by Odia NLP},
        howpublished = {\url{https://www.mte2o.com/}},
        year         = {2021}
    }
```
--8<-- "includes/abbreviations.md"
