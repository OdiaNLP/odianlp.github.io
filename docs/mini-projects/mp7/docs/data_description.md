## Dataset Format

Both the training and validation data are a zip-compressed folder, which contains four different files:

File Name | Description
------------- | -------------
behaviors.tsv  | The click histories and impression logs of users
news.tsv  | The information of news articles
entity_embedding.vec    | The embeddings of entities in news extracted from knowledge graph
relation_embedding.vec    | The embeddings of relations between entities extracted from knowledge graph

### behaviors.tsv

The behaviors.tsv file contains the impression logs and users' news click hostories. 
It has 5 columns divided by the tab symbol:

* Impression ID. The ID of an impression.
* User ID. The anonymous ID of a user.
* Time. The impression time with format "MM/DD/YYYY HH:MM:SS AM/PM".
* History. The news click history (ID list of clicked news) of this user before this impression. The clicked news articles are ordered by time.
* Impressions. List of news displayed in this impression and user's click behaviors on them (1 for click and 0 for non-click). The orders of news in a impressions
have been shuffled.

An example is shown in the table below:

Column | Content
------------- | -------------
Impression ID | 91
User ID | U397059
Time | 11/15/2019 10:22:32 AM
History | N106403 N71977 N97080 N102132 N97212 N121652
Impressions | N129416-0 N26703-1 N120089-1 N53018-0 N89764-0 N91737-0 N29160-0
 
### news.tsv

The docs.tsv file contains the detailed information of news articles involved in the behaviors.tsv file.
It has 7 columns, which are divided by the tab symbol:

* News ID 
* Category 
* SubCategory
* Title
* Abstract
* URL
* Title Entities (entities contained in the title of this news)
* Abstract Entities (entites contained in the abstract of this news)

The full content body of MSN news articles are not made available for download, due to licensing structure. However, for your convenience, we have provided a [utility script](https://github.com/msnews/MIND/tree/master/crawler) to help parse news webpage from the MSN URLs in the dataset. Due to time limitation, some URLs are expired and cannot be accessed successfully. Currently, we are tring our best to solve this problem.

An example is shown in the following table:

Column | Content
------------- | -------------
News ID | N37378
Category | sports
SubCategory | golf
Title | PGA Tour winners
Abstract | A gallery of recent winners on the PGA Tour.
URL | https://www.msn.com/en-us/sports/golf/pga-tour-winners/ss-AAjnQjj?ocid=chopendata
Title Entities | [{"Label": "PGA Tour", "Type": "O", "WikidataId": "Q910409", "Confidence": 1.0, "OccurrenceOffsets": [0], "SurfaceForms": ["PGA Tour"]}]	
Abstract Entites | [{"Label": "PGA Tour", "Type": "O", "WikidataId": "Q910409", "Confidence": 1.0, "OccurrenceOffsets": [35], "SurfaceForms": ["PGA Tour"]}]

The descriptions of the dictionary keys in the "Entities" column are listed as follows:
Keys | Description
------------- | -------------
Label | The entity name in the Wikidata knwoledge graph
Type | The type of this entity in Wikidata
WikidataId | The entity ID in Wikidata
Confidence | The confidence of entity linking
OccurrenceOffsets | The character-level entity offset in the text of title or abstract
SurfaceForms | The raw entity names in the original text