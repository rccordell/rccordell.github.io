---
layout: post
title: 'Representing the &#8220;Known Unknowns&#8221; in Humanities Visualizations'
date:   2014-03-27
description: 
tags: 
categories: 
permalink: /research/representing-the-known-unknowns-in-humanities-visualizations/
---

<em>Note: If this topic interests, you should read <a href="https://twitter.com/laurenfklein">Lauren Klein</a>'s recent article in <a href="http://americanliterature.dukejournals.org/content/current"><em>American Literature</em></a>, "The Image of Absence: Archival Silence, Data Visualization, and James Hemings," which does far more justice to the topic than I do in my scant paragraphs here.</em>

Pretty much every time I present the <a href="http://viraltexts.org"><em>Viral Texts</em> Project</a>, the following exchange plays out. During my talk I will have said something like, "Using these methods we have uncovered more than 40,000 reprinted texts from the Library of Congress' <a href="http://chroniclingamerica.loc.gov/"><em>Chronicling America</em></a> collection, many hundreds of which were <em>widely</em> reprinted—and most of which have not been discussed by scholars." During the Q&amp;A following the talk, a scholar will inevitably ask, "you realize you're missing <em>lots</em> of newspapers (and/or <em>lots</em> of the texts that were reprinted), right?"

To which my first instinct is exasperation. Of <em>course</em> we're missing lots of newspapers. The majority of C19 newspapers aren't preserved anywhere, and the majority of archived newspapers aren't digitized. But the ability to identify patterns across large sets of newspapers is, frankly, transformative. The newspapers that have been digitized under the <em>Chronicling America</em> banner are actually the product of many state-level digitization efforts, which means we're able to study patterns across collections that were housed in many separate physical archives, providing <a href="http://winedarksea.org/?p=926">a level of textual address</a> not impossible, but very difficult in the physical archive. So my flip answer—which I never quite give—is "yes, we're missing a lot. But 40,000 new texts is pretty great."

But those questions do nag at me. In particular I've been thinking about how we might represent the "known unknowns" of our work,<sup><a id="ref1" href="#fn1">1</a></sup> particularly in visualizations. I really started picking at this problem after discussing the <em>Viral Texts</em> work with a group of librarians. I was showing them this map,

<img src="/img/ChronAm-network-map.png" alt="" width="100%" />

which transposes a network graph of our data onto a map which merges census data from 1840 with the <a href="http://publications.newberry.org/ahcbp/">Newberry Library's Atlas of Historical County Boundaries</a>. One of the librarians was from New Hampshire, and she told me she was initially dismayed that there were no influential newspapers from New Hampshire, until she realized that our data doesn't include any newspapers from New Hampshire, because that state has not yet contributed to <em>Chronicling America</em>. She suggested our maps would be vastly improved if we somehow indicated such gaps visually, rather than simply talking about them.

In the weeks since then, I've been experimenting with how to visualize those absences without overwhelming a map with symbology. The simplest solution, as almost always, appears to be the best.

<img src="/img/viraltext-CA.png" alt="" width="100%" />

In this map I've visualized the 50 reprintings we have identified of one text, a religious reflection by Nashville editor George D. Prentice, often titled "Eloquent Extract," between the years 1836-1860. The county boundaries are historical, drawn from the Newberry Atlas, but I've overlain modern state boundaries with shading to indicate whether we have significant, scant, or no open-access historical newspaper data from those states. This is still a blunt instrument. Entire states are shaded, even when our coverage is geographically concentrated. For New York, for instance, we have data from a few NYC newspapers and magazines, but nothing yet from the north or west of the state.

Nevertheless, I'm happy with these maps as helping me begin to think through how I can represent the absences of the digital archives from which our project draws. And indeed, I've begun thinking about how such maps might help us agitate—in admittedly small ways—for increased digitization and data-level access for humanities projects.

<img src="/img/ViralText-FP.png" alt="" width="100%" />


This map, for instance, visualizes the <strong>130 reprints</strong> of that same "Eloquent Extract" which we were able to identify searching across <em>Chronicling America</em> and a range of commercial periodicals archives (and huge thanks to project RA <a href="https://twitter.com/Peter_Roby">Peter Roby</a> for keyword searching many archives in search of such examples). For me this map is both exciting and dispiriting, pointing to what could be possible for large-scale text mining projects while simultaneously emphasizing just how much we are missing when forced to work only with openly-available data. If we had access to a larger digitized cultural record we could do so much more. A part of me hopes that if scholars, librarians, and others see such maps they will advocate for increased access to historical materials in open collections. As I said in my talk at the recent C19 conference:

<blockquote>While the dream of archival completeness will always and forever elude us—and please do not mistake the digital for “the complete,” which it never has been and never will be—this map is to my mind nonetheless sad.  Whether you consider yourself a “digital humanist” or not, and whether you ever plan to leverage the computational potential of historical databases, I would argue that the contours and content of our online archive should be important to you. Scholars self-consciously working in “digital humanities” and also those working in literature, history, and related fields should make themselves heard in conversations about what will become our digital, scholarly commons. The worst possible thing today would be for us to believe this problem is solved or beyond our influence.</blockquote>

In the meantime, though, we're starting conversations with commercial archive providers to see if they would be willing to let us use their raw text data. I hope maps like this can help us demonstrate the value of such access, but we shall see how those conversations unfold.

I will continue thinking about how to better represent absence as the geospatial aspects of our project develop in the coming months. Indeed, the same questions arise in our network visualizations. Working with historical data means that we have far more missing nodes than many network scientists working, for instance, with modern social media data. Finding a way to represent missingness—the "known unknowns" of our work—seems like an essential humanities contribution to geospatial and network methodologies.

<sup id="fn1">1. Yes, I'm borrowing a term from Donald Rumsfeld here, which seems like a useful term for thinking about archival gaps, while perhaps not such a useful term for thinking about starting a war. We can blame this on me watching an interview with Errol Morris about <a href="http://www.imdb.com/title/tt2390962/"><em>The Unknown Known</em></a> on <em>The Daily Show</em> last night.<a title="Back to footnote 1 in text" href="#ref1">↩</a></sup>