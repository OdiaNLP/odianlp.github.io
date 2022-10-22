<h1 align="center"> Project: Plagiarism checker</h1>

Mentor: [Soumendra Kumar Sahoo](https://www.linkedin.com/in/soumendrak/)

## Problem Statement

Develop a plagiarism checker for English language.

## Requirements

- There should be an API service in which a user can paste a paragraph or document.
- The service will search for the matching sentences/document found across the internet and 
if there is a close enough match(es) found, the service will provide:
    - the matched sentences/paragraphs of the pasted text, 
    - the copyright of the original text and
    - the source link with the original date of publication where it matched.

## How to proceed

### Source documents Procurement

- Set the scope of the project. What is the internet for you to search for?
- The source should have the above mentioned requirements, which you should be able to provide in result.
- To extract data from websites you can check this Scrapy tutorial explained in Odia.
[![Scrapy Tutorial](http://img.youtube.com/vi/1DCpznINiX4/0.jpg)](https://www.youtube.com/watch?v=1DCpznINiX4)

### Storing the data

- Find out the ways you can store the text with corresponding metadata.
    - DB or file? SQL or NoSQL; why?
- Find out how can you store the source text such that, you can easily match the query text by user 
  with the large number of source documents. **This is they key to the project.**
    - Text preprocessing
    - Word to word match? Sentence to sentence match? paragraph to paragraph match? What else?

### Create a service

- Create a service to let the user paste the query text
- Search the source documents for the query text and return the results.

## Bonus points will be given for

- If you can handle multiple varieties of query text and still detect plagiarism.
- If your service can provide search results in less than 2 seconds.
- If you able to deploy the service for others to try.
- Can you reuse your project to create a plagiarism checker for Odia?
