---
title: "Viral Texts: Reprinting and Circulation in the Data of Historical Newspapers"
date: 2017-10-19
author: Ryan Cordell
layout: post
permalink: /research/unam-workshop/
---


Where: [Congreso Internacional Las Edades del Libro](http://www.actividadesacademicas.iib.unam.mx/index.php/EDL/edl17/schedConf/overview), UNAM, Mexico City  
When: Thursday, 19 October 2017, 4:30-6:30pm

### Abstract 

This workshop will teach participants about the structures of exchange, aggregation, and reproduction that underlay newspapers during the nineteenth century. Together we will explore the technologies, economics, and social relationships that fostered the culture of reprinting; examine the genres of writing that flourished in this system; and overview the institutional, legal, and political changes that shifted the newspaper toward twentieth-century journalistic ideals. The workshop will consider the ways that an examination of historical reprinting might help us better understand “viral media” online, as well as considering the limitations of such transhistorical metaphors. Finally, the workshop will offer an introduction to computational techniques for exploring digitized newspapers, demonstrating to participants how algorithmic approaches to text can surface patterns in digital historical data that are less apparent in analog media.

-----

### I. Introductions (4:30-4:40)

First, let's get a sense of what people are interested in.

### II. Exploring Nineteenth-Century Newspapers (4:40-5:10)

Next, I've brought a sample of nineteenth-century newspapers with me. These come from around the United States and were published from the very early 19th century—1804 is, I believe, the earliest date in my own collection—to near the end of the century—from the 1880s. I'd you to spend some time with at least 2-3 of these newspapers, perhaps choosing from distinct time periods. As you browse, think about (and take some notes about) questions such as:

1. What is the structure of the nineteenth-century newspaper? What kinds of texts does it contain, and how are they put together? Can you discern where its texts come from, or how they are arranged?
2. How would you describe the rhetoric, or voice, of the nineteenth-century newspaper? Who is speaking and to whom? How does the paper create an idea of authenticity?
3. Do you notice any differences by region or by time period in the newspapers you looked at?
4. How is the nineteenth-century newspaper similar or dissimilar to newspapers from the twentieth or twenty-first centuries?

### III. Discussion (5:10-5:40)

Once everyone has time to evaluate 2-3 newspapers, we will discuss our ideas together. I will share information about nineteenth-century newspaper printing practices as applicable to our conversation.

[![A newspaper illustration depicting a man engaging in barter, paying his yearly newspaper subscription to the "Podunk Weekly Bugle" with various farm produce.](https://upload.wikimedia.org/wikipedia/commons/0/05/Barter-Chickens_for_Subscription.jpg)](https://commons.wikimedia.org/wiki/File:Barter-Chickens_for_Subscription.jpg)

*The Country Editor—Paying the Yearly Subscription, drawn by F. S. Church for* Harper's Weekly *(17 January 1874). See a full-resolution version at [at Wikimedia](https://upload.wikimedia.org/wikipedia/commons/0/05/Barter-Chickens_for_Subscription.jpg)*

### IV. Computational Exploration (5:40-6:10)

In this segment, I will walk through some basic computational text analysis with newspapers that will begin to illustrate our approach to finding reprints in [the Viral Texts Project](http://viraltexts.org). Publications from the project and links to our tools can be found at [http://viraltexts.org](http://viraltexts.org). I've included the code below, and I will walk through it live to explain how it works.

```{r}

library(tidyverse)
library(tidytext)
library(wordcloud)

raven <- tibble(text=read_file("http://chroniclingamerica.loc.gov/lccn/sn85055199/1849-11-28/ed-1/seq-1/ocr.txt")) # a tibble is special kind of dataframe we'll learn more about in week 3

raven %>% 
  unnest_tokens(word,text) %>%
  count(word,sort=T)

raven %>% 
  unnest_tokens(word,text) %>%
  count(word,sort=T) %>% 
  with(wordcloud(word,n,max.words = 100))

data("stop_words") # <- Load the stop words data

raven %>% 
  unnest_tokens(word,text) %>%
  count(word,sort=T) %>% 
  anti_join(stop_words) %>% #<- This is the only change to our little program from before.
  with(wordcloud(word,n))

raven %>%
  unnest_tokens(word,text,token="ngrams",n=5) %>%
  count(word,sort=T)

raven %>%
  unnest_tokens(word,text,token="ngrams",n=3) %>%
  group_by(word) %>% 
  filter(n()>3) %>%
  ggplot() + 
  geom_bar(fill="red") + 
  aes(x=word) + 
  coord_flip()

ravenGrams <- as_data_frame(raven %>%
  unnest_tokens(word,text,token="ngrams",n=5) %>%
  count(word,sort=T))

View(ravenGrams)

# moving beyond one text to a (tiny) corpus

newspaperPages <- data_frame(
  text = c(text=read_file("http://chroniclingamerica.loc.gov/lccn/sn85055199/1849-11-28/ed-1/seq-1/ocr.txt"),text=read_file("http://chroniclingamerica.loc.gov/lccn/sn98060050/1845-02-28/ed-1/seq-1/ocr.txt")),
  title = c("LewisburgChronicle","VermontPhoenix"))

newspaperPages %>% 
  unnest_tokens(word,text,token = "ngrams", n = 5) %>% # <- New
  group_by(title, word) %>% 
  summarize(count = n()) %>%
  arrange(desc(count)) %>%
  View()

newspaperPages %>%
  unnest_tokens(word,text,token = "ngrams", n=5) %>%
  group_by(title,word) %>% 
  summarize(count=n()) %>% 
  spread(title,count,fill=0) %>% 
  # filter(LewisburgChronicle + VermontPhoenix > 2) %>% 
  ggplot() +
  aes(x=LewisburgChronicle,y=VermontPhoenix,label=word) + 
  geom_point(alpha=.3) + 
  geom_text(check_overlap = TRUE) +
#  scale_x_log10() +
#  scale_y_log10() +
  geom_abline(color = "red")


newspaperPages %>%
  unnest_tokens(word,text,token = "ngrams", n=5) %>%
  group_by(title,word) %>% 
  summarize(count=n()) %>% 
  spread(title,count,fill=0) %>%
  # filter(LewisburgChronicle >= 1 & VermontPhoenix >= 1) %>%
  View()


sharedFiveGrams <- newspaperPages %>%
  unnest_tokens(word,text,token = "ngrams", n=5) %>%
  group_by(title,word) %>% 
  summarize(count=n()) %>% 
  spread(title,count,fill=0) %>%
  filter(LewisburgChronicle >= 1 & VermontPhoenix >= 1) %>%
  rename(fivegram = word) %>%
  mutate(sharedSum = LewisburgChronicle + VermontPhoenix) %>%
  arrange(desc(sharedSum))

sharedFiveGrams %>%
  filter(sharedSum > 2) %>%
  ggplot() +
  geom_bar(stat="identity") +
  aes(x=fivegram,y=sharedSum) +
  labs(title = "Shared Five Grams Between Newspaper Issues", y = "Total Number Shared", x = "Five Grams Shared")

```

[Passim is the sequence alignment algorithm](https://github.com/dasmiq/passim) that underlies the Viral Texts project. What it does is much more complex than what I've done above, and we can discuss those complexities, but at base Passim uses Ngram matching to find overlapping passages in a large scale archive.

### Questions and Answers (6:10-6:30)
