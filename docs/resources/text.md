This page contains probable open source resources found over internet on Odia text.

## Monolingual Corpus

- For much NLP related tasks a large [monolingual corpus](https://en.wikipedia.org/wiki/Text_corpus) is a necessity.
- As the name suggest a monolingual corpus stores text of only one language. In this case it will be of Odia.
- An existing monolingual corpus can be found in the [IndicNLP corpus](https://indicnlp.ai4bharat.org/corpora/) with 6.94 million sentences formed of 107 million tokens.
- Similarly, you can check this [resource list](https://github.com/shantipriyap/Odia-NLP-Resource-Catalog#monolingual-corpus) by Dr. Shantipriya Parida for further monolingual corpus in Odia language 

## Parallel Corpus

Dataset |                                License | Need to be cleaned? | Estimated number of pairs | Note
:---------|:----------------------------------:|:---------|:--------------------------|:---------------------------------------
 [Wikipedia Data dump](https://www.mediawiki.org/wiki/Content_translation/Published_translations) |    [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | Yes | 2,00,000+                 | Pairs can be taken from the [dumps](https://dumps.wikimedia.org). ([Reference](https://medium.com/@soumendrak/extracting-parallel-text-pairs-from-wikipedia-e473ad167b41)).
 [OdiEnCorp 1.0](https://lindat.mff.cuni.cz/repository/xmlui/handle/11234/1-2879) | [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) | Yes | 1,00,000+                 | Mostly Bible data
 [OdiaNLP corpus]((https://github.com/OdiaNLP/NMT/tree/master/data/output/organised)) |    [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) | No | 80,437                    | Generic En-Or pairs collected from [many sources](../machine_translation/datasets.md#sources) with multiple liceses.
 [OdiEnCorp 2.0](https://lindat.mff.cuni.cz/repository/xmlui/handle/11234/1-3211) | [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) | - | 94,000+                   | Quality not checked.
 [TDIL](http://tdil-dc.in/index.php?option=com_download&task=showresourceDetails&toolid=1070&lang=en) |                               Freeware | Yes | 52,000+                   | Technical terms strings
 [Press Information Bureau](http://preon.iiit.ac.in/~jerin/bhasha/) | [CC-BY-4.0](https://creativecommons.org/licenses/by-sa/4.0/legalcode) | Yes | 58,461                    | Sentences are aligned. Contains _Mann Ki Baat_ pairs too.  
 [Mann ki baat](http://data.statmt.org/pmindia/v1/parallel/pmindia.v1.or-en.tsv) |       [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/) | Yes | 38,359                    | High quality translation and [much more](https://arxiv.org/pdf/2001.09907.pdf). However, cleaning needs to be done.
 [IndoWordnet](https://github.com/anoopkunchukuttan/indowordnet_parallel) |    [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | - | 30,000+                   | Corpus quality need to be checked.
 [OPUS](https://opus.nlpl.eu/)|                               Multiple | - | 6,00,000+                 | Corpus contitute of the following corporas: Wikimedia, GNOME, Mozilla, etc. 
 [Samanantar](https://indicnlp.ai4bharat.org/samanantar/#downloads)|[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)                           | - | 10,00,000+                | One of the best available corpus as of Dec 2021. 

## Odia Transliteration

- Odia Wikimedia community has developed an [open-source unicode converter](https://github.com/OdiaWikimedia/Converter) to transliterate between various languages to Odia language.

    ??? note "Languages supported"
        - The following languages are supported now:
              - Ahamiya
              - Bengali
              - Santali
              - Hindi
              - Gujarati
              - Roman and
              - Urdu
- [Online demo](https://or.wikipedia.org/s/1hv1)

## Additional Resources

- [Odia-NLP-Resource-Catalog](https://github.com/shantipriyap/Odia-NLP-Resource-Catalog) by Dr. Shantipriya Parida
- [A Catalog of resources for Indian language NLP](https://github.com/AI4Bharat/indicnlp_catalog) by AI4Bharat team
- [OpenOdia : Tools for Odia language](https://github.com/soumendrak/openodia)
<!-- Citation -->
<hr>
To cite this resource list, please use:

```bibtex
@misc{OdiaNLP,
    author       = {Soumendra Kumar Sahoo},
    title        = {Text resources by Odia NLP},
    howpublished = {\url{https://www.mte2o.com/}},
    year         = {2021}
}
```
--8<-- "includes/abbreviations.md"
