---
layout: post
title: Network Analysis Workshop 2017
date:   2020-10-05
description: 
tags: 
categories: 
permalink: /teaching/network-analysis-workshop-2017/
---

I regularly run workshops on humanities network analysis. For participants, I've compiled some starting instructions, sample data files, and suggested reading below. 

## Recommended Reading

+ First and foremost, I would highly recommend reading Scott Weingart's ongoing blog series, ["Demystifying Networks"](http://scottbot.net/tag/networks-demystified/). Weingart does an excellent job explaining both how networks are structured and identifying what humanists need to understand deeply to use network methods well. This series expanded to nine posts, and I recommend them all, but [Part 1 of n: An Introduction](http://scottbot.net/lets-talk-about-networks/) and [Networks Demystified 2: Degree](http://scottbot.net/networks-demystified-2-degree/) are absolutely essential reading if you're going to start working on networks as a humanist.
+ For a more practical introduction to the specific tool Gephi, see [Amanda Visconti's posts](http://literaturegeek.com/tag/gephi/) on using Gephi for information visualization.
+ Miriam Posner's ["Social Network Analysis Glossary"](https://github.com/miriamposner/network_analysis_workshop/blob/master/Social%20Network%20Analysis%20Glossary.docx?raw=true) provides clear and concise definitions of the major terms in the field and her [DH 101 post on network analysis](http://miriamposner.com/classes/dh101f16/tutorials-guides/data-visualization/network-analysis/) also provides a wide range of useful links.
+ HT also to [Miriam Posner](https://twitter.com/miriamkp/status/726054913520730116) for recommending Mushon Zer-Aviv's ["If Everything is a Network, Nothing is a Network"](http://visualisingadvocacy.org/blog/if-everything-network-nothing-network) for some needed nuance about what networks reveal and where they go wrong.
+ Finally, you might browse the posts and resources at the [Historical Network Research site](http://historicalnetworkresearch.org/) for ideas about how historians and other humanists are applying network analysis methods in their research.


## Tools for Network Analysis
There are many options at various skill levels for humanists interested in network analysis. Here are just a few:

+ If you're looking for an especially straightforward platform for basic network analyses, you might check out [Palladio](http://hdlab.stanford.edu/projects/palladio/) which adapts the platform designed for Stanford's [*Mapping the Republic of Letters*](http://republicofletters.stanford.edu/) project for other scholars' use. Martin Düring's [tutorial at the Programming Historian](http://programminghistorian.org/lessons/creating-network-diagrams-from-historical-sources) focuses on extracting network data from unstructured text and visualizing it in Palladio, and Miriam Posner's ["Getting Started with Palladio"](http://miriamposner.com/blog/getting-started-with-palladio/) introduces the tool's network functionalities (along with much else). 
+ You can also create basic network graphs using [Fusion Tables](https://support.google.com/fusiontables/answer/2566732?hl=en).
+ Miriam Posner recommends [Cytoscape](which has many of Gephi’s features and a more modern interface), which she writes "has many of Gephi’s features and a more modern interface." She's also published [an introduction to Cytoscape](https://github.com/miriamposner/cytoscape_tutorials).  
+ If you are running Windows with Microsoft Excel installed, [Node XL](https://nodexl.codeplex.com/) aims to make generating network graphs from an Excel spreadsheet as easy as creating a pie chart. Unfortunately Node XL is incompatible with Mac versions of Excel.
+ And of course, if you're comfortable with programming languages there are plenty of methods for generating network graphs through these. Taylor Arnold and Lauren Tilton write about using R for network analysis in [*Humanities Data in R*](http://www.springer.com/us/book/9783319207018).


## This Workshop: Gephi
For this workshop, we will be using [Gephi](http://gephi.github.io/), one of the most widely-used tools for network analysis and visualization. You will need to [download and install](http://gephi.github.io/users/download/) the application before we can get started. If you find it runs slowly (or not at all) you might need to [update Java](https://java.com/en/download/) on your system. There are some troubleshooting instructions about Java [on Gephi's website](https://gephi.org/users/install/). 

## Workshop Data
Sample data can be found in [this folder](https://www.dropbox.com/sh/vov4yx855zjcjz3/AAD_oCHSVStfEZVvNoJ-eLYKa?dl=0). You can [download them all as a zip file](https://www.dropbox.com/s/ju4zbmsi3bfb1n1/GephiWorkshopFiles.zip?dl=0) or download files separately as we need them. 

<!--The packet includes:
<ol>
+ A pre-made Gephi file drawn from <a href="https://www.dropbox.com/s/506op57abk069te/Hamlet.gephi?dl=0">Shakespeare's play <em>Hamlet</em></a>.
+ A <a href="https://www.dropbox.com/s/vjbexa16w24lhiw/participants1789_thru_1793.csv?dl=0">nodes list file</a> from the <a href="http://republicofletters.stanford.edu/" target="_blank">Mapping the Republic of Letters</a> project.
+ An <a href="https://www.dropbox.com/s/qzl4ht8irlvcuxb/letters1789_thru_1793.csv?dl=0">edges list file</a> from the <a href="http://republicofletters.stanford.edu/" target="_blank">Mapping the Republic of Letters</a> project.
+ A <a href="https://www.dropbox.com/s/selt1fd9grl3jkz/pairwise_1856-1860_uniq.txt?dl=0">sample dataset</a> from the <a href="http://viraltexts.org/" target="_blank">Viral Texts Project</a>.
</ol>-->