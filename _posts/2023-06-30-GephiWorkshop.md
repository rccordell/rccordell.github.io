---
title: "Visualizing Historical Networks with Gephi"
date: 2023-06-30
author: Ryan Cordell
permalink: /teaching/GephiWorkshop/
layout: post
---

## Necessary Downloads

+ [Gephi for Mac, Windows, or Linux](https://gephi.org/). 
+ Melanie Walsh's [Sample Social Network Datasets](https://github.com/melaniewalsh/sample-social-network-datasets/tree/master). To download from Github, click the green `<> Code` button toward the upper right corner of the page and then click `Download ZIP`.
+ [Nineteenth-century newspaper reprinting data](https://www.dropbox.com/s/lrl25dcookqddeg/dynamic-C19newspapers.gexf?dl=0) from the [_Viral Texts Project_](https://viraltexts.org/)
+ For the Viral Texts data above, we will want to add the `GeoLayout` plugin to Gephi. To do this, click `Tools` -> `Plugins` -> `Available Plugins` and then click the box next to `GeoLayout`. Click `Install` and then you will likely be prompted to restart Gephi.

## Today's Workshop

In today's workshop, we will learn a bit about basic network theory and explore a few network datasets using Gephi, which is an open-source tool for network statistics and visualization commonly used in the digital humanities community. I will be asking you to download and install Gephi for this workshop. 

There is a new online version of the software called [Gephi Lite](https://gephi.org/gephi-lite/), which is designed to make creating network visualizations very simple. However, Gephi Lite does not make its calculations transparent or allow users to see the numbers behind the visualizations it produces. Before making use of network visualizations, it is important for scholars to have a fundamental understanding of what various metrics mean and how they might interpret them. For that reason, we will work in the full version of Gephi, which will enable us to discuss those fundamentals. 

We will approach these topics organically as we explore datasets together, but in our two hours I hope to cover:

1. Navigating Gephi (i.e. Data Laboratory, Overview, Preview)
2. Basic network structures (i.e. nodes & edges, directed vs. undirected)
3. Common network metrics (e.g. degree, centrality, betweenness)
4. Layout algorithms
5. Filtering
6. Network data vs. network visualizations
7. (if we have time) Dynamic networks

As we work, you may encounter obstacles. I neither want to interrupt the workshop constantly nor leave anyone behind. If you hit a roadblock, please find a sticky note—they should be spread around the room—and attach it to the top of your screen so that I can see it. When I reach natural pauses in the workshop I will help those with sticky notes address whatever obstacles they've encountered.

## Additional Resources

+ Scott B. Weingart, Demystifying Networks, Parts 1 & 2 at the [_Journal of Digital Humanities_](https://journalofdigitalhumanities.org/1-1/demystifying-networks-by-scott-weingart/), all 9 parts [on Scott's website](https://www.scottbot.net/HIAL/index.html@tag=networks-demystified.html)
+ _Programming Historian_'s various [networks tutorials](https://programminghistorian.org/en/lessons/?topic=network-analysis)
+ Miriam Posner's [Network Analysis resources](https://miriamposner.com/classes/dh101f16/tutorials-guides/data-visualization/network-analysis/)
+ Stanford's [Palladio tool for network analysis](https://hdlab.stanford.edu/palladio/)
+ _Reviews in Digital Humanities_ projects [tagged 'network analysis'](https://reviewsindh.pubpub.org/network-analysis)