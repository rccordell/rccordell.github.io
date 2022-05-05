---
layout: post
title: Network Analysis Workshop
date:   2016-05-19
description: 
tags: 
categories: 
permalink: /teaching/network-analysis-workshop/
---


I regularly run workshops on humanities network analysis. For participants, I've compiled some starting instructions, sample data files, and suggested reading below. 

<h2>Recommended Reading</h2>
<ul>
<li>First and foremost, I would highly recommend reading Scott Weingart's ongoing blog series, <a href="http://scottbot.net/tag/networks-demystified/">"Demystifying Networks"</a>. Weingart does an excellent job explaining both how networks are structured and identifying what humanists need to understand deeply to use network methods well.</li>
<li>For a more practical introduction to the specific tool Gephi, see <a href="http://literaturegeek.com/tag/gephi/" target="_blank">Amanda Visconti's posts</a> on using Gephi for information visualization.</li>
<li>Miriam Posner's <a href="https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0ahUKEwjynaGS_-XMAhXLDMAKHRcPBjwQFggcMAA&url=http%3A%2F%2Fmiriamposner.com%2Fdh101f15%2Fwp-content%2Fuploads%2F2015%2F10%2FSocial-Network-Analysis-Glossary.docx&usg=AFQjCNE8lEEfiRD1djlUfO90KqvQgJiXJQ&bvm=bv.122448493,d.ZGg&cad=rja" target="_blank">"Social Network Analysis Glossary"</a> provides clear and concise definitions of the major terms in the field.</li> 
<li>HT also to <a href="https://twitter.com/miriamkp/status/726054913520730116" target="_blank">Miriam Posner</a> for recommending Mushon Zer-Aviv's <a href="http://visualisingadvocacy.org/blog/if-everything-network-nothing-network" target="_blank">"If Everything is a Network, Nothing is a Network"</a> for some needed nuance about what networks reveal and where they go wrong.</li>
<li>Of course, no such list should exclude Franco Moretti's <a href="http://litlab.stanford.edu/LiteraryLabPamphlet2.pdf" target="_blank">"Network Theory, Plot Analysis,"</a> which has sparked many humanists' interest in network methods.</li>
<li>Finally, you might browse the posts and resources at the <a href="http://historicalnetworkresearch.org/" target="_blank">Historical Network Research site</a> for ideas about how historians and other humanists are applying network analysis methods in their research.
</ul>

<h2>Tools for Network Analysis</h2>
There are many options at various skill levels for humanists interested in network analysis. Here are just a few:
<ul>
<li>If you're looking for an especially straightforward platform for basic network analyses, you might check out <a href="http://hdlab.stanford.edu/projects/palladio/" target="_blank">Palladio</a> which adapts the platform designed for Stanford's <a href="http://republicofletters.stanford.edu/" target="_blank">Mapping the Republic of Letters</a> project for other scholars' use. Martin Düring's <a href="http://programminghistorian.org/lessons/creating-network-diagrams-from-historical-sources" target="_blank">tutorial at the Programming Historian</a> focuses on extracting network data from unstructured text and visualizing it in Palladio, and Miriam Posner's <a href="http://miriamposner.com/blog/getting-started-with-palladio/" target="_blank">"Getting Started with Palladio"</a> introduces the tool's network functionalities (along with much else).</li> 
<li>You can also create basic network graphs using <a href="https://support.google.com/fusiontables/answer/2566732?hl=en" target="_blank">Fusion Tables</a>.</li> 
<li>If you are running Windows with Microsoft Excel installed, <a href="https://nodexl.codeplex.com/" target="_blank">Node XL</a> aims to make generating network graphs from an Excel spreadsheet as easy as creating a pie chart. Unfortunately Node XL is incompatible with Mac versions of Excel.</li>
<li>And of course, if you're comfortable with programming languages there are plenty of methods for generating network graphs by hand. Taylor Arnold and Lauren Tilton write about using R for network analysis in <a href="http://www.springer.com/us/book/9783319207018" target="_blank"><em>Humanities Data in R</em></a> and Lincoln Mullen has a growing resource in <a href="http://lincolnmullen.com/projects/dh-r/" target="_blank"><em>Digital History Methods in R</em></a>, including an in-progress <a href="http://lincolnmullen.com/projects/dh-r/networks.html" target="_blank">chapter on networks</a>.</li>
</ul> 

<h2>This Workshop: Gephi</h2>
For this workshop, we will be using <a href="http://gephi.github.io/" target="_blank">Gephi</a>, one of the most widely-used tools for network analysis and visualization. You will need to <a href="http://gephi.github.io/users/download/" target="_blank">download and install</a> the application before we can get started. If you find it runs slowly (or not at all) you might need <a href="https://java.com/en/download/" target="_blank">to update Java</a> on your system.

<h2>Workshop Data</h2>
Sample data can be found in <a href="https://www.dropbox.com/sh/vov4yx855zjcjz3/AAD_oCHSVStfEZVvNoJ-eLYKa?dl=0">this folder</a>. You can <a href="https://www.dropbox.com/s/ju4zbmsi3bfb1n1/GephiWorkshopFiles.zip?dl=0">download them all as a zip file</a> or download files separately as we need them. 

<!--The packet includes:
<ol>
<li>A pre-made Gephi file drawn from <a href="https://www.dropbox.com/s/506op57abk069te/Hamlet.gephi?dl=0">Shakespeare's play <em>Hamlet</em></a>.</li>
<li>A <a href="https://www.dropbox.com/s/vjbexa16w24lhiw/participants1789_thru_1793.csv?dl=0">nodes list file</a> from the <a href="http://republicofletters.stanford.edu/" target="_blank">Mapping the Republic of Letters</a> project.</li>
<li>An <a href="https://www.dropbox.com/s/qzl4ht8irlvcuxb/letters1789_thru_1793.csv?dl=0">edges list file</a> from the <a href="http://republicofletters.stanford.edu/" target="_blank">Mapping the Republic of Letters</a> project.</li>
<li>A <a href="https://www.dropbox.com/s/selt1fd9grl3jkz/pairwise_1856-1860_uniq.txt?dl=0">sample dataset</a> from the <a href="http://viraltexts.org/" target="_blank">Viral Texts Project</a>.</li>
</ol>-->