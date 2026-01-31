---
title: "Twitterbot Workshop"
date: 2020-06-05
author: Ryan Cordell
permalink: /teaching/Twitterbot-Workshop/
layout: post
---

> What, in this landscape, is the 21st century equivalent of a protest song? What is the modern version of a song so specific in its details, its condemnation, its anger, that it could not possibly be mistaken for bullshit?
> 
> One answer is the protest bot. A computer program that reveals the injustice and inequality of the world and imagines alternatives. A computer program that says who’s to praise and who’s to blame. A computer program that questions how, when, who and why. A computer program whose indictments are so specific you can’t mistake them for bullshit. A computer program that does all this automatically.
> 
> Mark Sample, ["A protest bot is a bot so specific you can’t mistake it for bullshit"](https://medium.com/@samplereality/a-protest-bot-is-a-bot-so-specific-you-cant-mistake-it-for-bullshit-90fe10b7fbaa)

## Acknowledgment

This workshop was adapted from the sterling model created by [Élika Ortega](https://elikaortega.net/), with whom I was privileged to teach a summer course in 2019. The [slides from her bots workshop](https://dsg.neu.edu/wp-content/uploads/2017/04/BotsWorkshop.pdf) are useful if you need additional help while working through this lab.

## Required Software

+ A [Twitter](https://twitter.com) account for your bot
+ [Tracery](http://tracery.io/) 
+ A plain-text editor for drafting, revising, and—essentially—saving a copy of your bot code
+ [Cheap Bots, Done Quick](https://cheapbotsdonequick.com/)
+ You may also choose use and adapt these [corpora from Darius Kazemi](https://github.com/dariusk/corpora/tree/master/data)

## Why Write Twitter Bots?

We all know about bots on Twitter. In fact, Twitter [stopped tallying the number of bots in its service a few years ago](https://www.buzzfeed.com/williamalden/twitter-has-stopped-updating-its-public-tally-of-bots), but estimates suggest a large proportion of twitter accounts are automated. Many of these are designed to push particular viewpoints or harass particular users (or particular kinds of users), though recently folks have started building bots [to push back against online abuse](https://www.washingtonpost.com/news/monkey-cage/wp/2016/11/17/this-researcher-programmed-bots-to-fight-racism-on-twitter-it-worked/). Samuel Woolley, danah boyd, and Meredity Broussard's ["How to Think About Bots"](https://motherboard.vice.com/en_us/article/qkzpdm/how-to-think-about-bots) provides a nice overview of the potential and pitfalls of online bot culture.

In the current moment, building bots can offer a way to engage creatively, [provocatively, or even combatively](https://medium.com/@samplereality/a-protest-bot-is-a-bot-so-specific-you-cant-mistake-it-for-bullshit-90fe10b7fbaa) with digital objects and online culture. Activist or [protest bots](https://twitter.com/i/lists/127952328/members) are designed to sunlight oppressive practices or actively counter harmful discourses, and can align with other forms of [#HashtagActivism](https://mitpress.mit.edu/books/hashtagactivism).  
 
### Protest Bot Examples

+ [@Every3Minutes](https://twitter.com/Every3Minutes) by W. Caleb McDaniel
+ [@TinyProtests](https://twitter.com/TinyProtests) by Leonardo Flores
+ [@ClearCongress](https://twitter.com/ClearCongress) by Zach Whalen
+ [@oiledits](https://twitter.com/oiledits) by Ed Summers
+ [@everyquiltblock](https://twitter.com/everyquiltblock)
+ [@Abolish_ICE_Now](https://twitter.com/Abolish_ICE_Now)
+ [@NeonaziWallets](https://twitter.com/NeonaziWallets) by John Bambenek
+ [@FBIBot](https://twitter.com/FBIbot) by Darius Kazemi

## Working with Tracery

### Tracery Resources

+ Shawn Graham's ["An Introduction to Twitterbots with Tracery"](https://programminghistorian.org/en/lessons/intro-to-twitterbots) at the Programming Historian
+ [The tutorial at Crystal Code Palace](http://www.crystalcodepalace.com/traceryTut.html)
+ [Brightspiral Tracery editor](https://www.brightspiral.com/tracery/) (this includes a nice visual editor if you don't want to mess with JSON)
+ [Derek Ahmedzai's tutorial](https://github.com/derekahmedzai/cheapbotsdonequick) includes details on [creating images using SVG](https://github.com/derekahmedzai/cheapbotsdonequick/blob/master/svg-tracery-image-bots.md) in Tracery
+ For those with some programming experience, Tracery has also been implemented in a number of common languages: check out the bottom of [its homepage](http://tracery.io/) to see if your favorite is there.

### Brief Tracery Introduction

We will be writing our Twitterbots using [Tracery](http://tracery.io/), a tool created by [Kate Compton](http://www.galaxykate.com/) that uses JSON data to generate text. In brief, to create a bot using Tracery we create a JSON file, which consists of a series of attribute-value pairs, such as this:

```
"name":["Ryan", "Evelyn", "Cadence", "Emerson", "Rorik", "Jonas", "Jude"]

```

In tracery, the example `name` is a `symbol`, and the list of names that follow it are values attached to that `symbol`. We will create symbols for each element of our tweets that we wish to substitute. We will then use the reserved symbol `origin` to combine random values with existing text. 

I will illustrate a short Tracery "mad-libs" style substitution below, using the most famous line from Edgar Allan Poe's "The Raven." Here's the original line:
 
> Quoth the Raven “Nevermore.”

And here's how we might do a simple substitution in Tracery. Try copying the text below (from the first `{` to the closing `}` into the [Tracery editor](http://tracery.io/editor/) and see what happens. *Note: you should copy text from this tutorial and then paste **without formatting** (typically `CTRL + SHIFT + V`) into the Tracery editor. If you paste with formatting things may get strange.*

```
{
"noun":["cow","anvil","flower","tuba","parsley"],
"past-verb":["extrapolated","devoured","hypothesized","exploded","cha-cha slid"],
"interjection":["gadzooks!","zounds!","hogwash!","aaarrrggghhh!","achoo"],
"origin":["#past-verb# the #noun#, #interjection#"]
}

``` 

When you wish to call randomized content from a symbol, you simply type the name of the symbol within hashtags, as in `#noun#`. There are some basic modifiers that can be useful for building up more complex texts, as well. These are added to the end of a given symbol (within the hashtags):

+ `.s` for plural
+ `.ed` to make verbs past tense
+ `.capitalize` and `.capitalizeAll` to capitalize one or more words, respectively
+ `.a` to add a/an before a word

How is the code below different from what we used before? Copy and paste it into Tracery to see:

```
{
"noun":["cow","anvil","flower","tuba","parsley"],
"verb":["extrapolate","devour","hypothesize","explode","cha-cha slide"],
"interjection":["gadzooks!","zounds!","hogwash!","aaarrrggghhh!","achoo"],
"origin":["#verb.ed.capitalize# the #noun.s#, #interjection#"]
}

``` 

For our purposes today, I've written a very basic k-pop protest bot in the style [activists have been using online](https://www.theverge.com/2020/6/3/21278950/k-pop-stans-social-media-flooding-hashtags-bluelivesmatter-maga). We can use this as a base point for learning Tracery, and folks can edit from here. As you write your bot, consider both the conversations in which you wish to intervene (e.g. hashtags, etc. which your both should invoke) as well as [messages you might want your bot to promote](https://twitter.com/BerniceKing/status/1268900750354198534). 

```
{
"hashtag": [ "\\#bluelivesmatter","\\#alllivesmatter","\\#whitelivesmatter","\\#sendinthetroops"],
"kpop": ["{svg <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"1237\" height=\"619\"><image width=\"1237\" height=\"619\" xlink:href=\"#kpopURL#\" />#meme#</svg>}"],
"kpopURL": [
"https://tinyurl.com/y8q8jy7r",
"https://tinyurl.com/yavj9bxg",
"https://tinyurl.com/yan56qbf",
"https://tinyurl.com/y78pape7",
"https://tinyurl.com/ydb7qscv",
"https://tinyurl.com/yb98krj2"
],
"actURL": [
"https://tinyurl.com/y8zv22ce",
"https://tinyurl.com/y9s586dr",
"https://tinyurl.com/yd8kp2fd",
"https://tinyurl.com/y7ou7rkd",
"https://tinyurl.com/y9dx55lb",
"https://tinyurl.com/ybost7vu",
"https://tinyurl.com/yd6nekkx"
],
"text": [ "Stop trying to distract people with #hashtag#!","Do you really believe #hashtag#?", "So you're tweeting about #hashtag#." ],
"memetext": [ "Blue lives do not exist","Justice for George Floyd", "Black Lives Matter","Breonna Taylor: Say her name" ],
"turntext": [ "Have you considered", "But what about", "Maybe instead"],
"origin": ["#text# #turntext# #memetext# #kpop# #actURL#"]
}

```

### A Few Notes

The bot above is very simple, and one problem you may run into pulling images from the web is that they may be sized in ways that don't easily align with the SVG code (I'll explain this in more detail during the workshop). You may end up with strange artifacts and glitches that you don't want. One way to control for this is to only use images with consistent sizes, and then set your SVG settings in the code to match those sizes. You could also create a folder in a service like Dropbox for your images, and then resize them to be consistent there. 

If you want to do a bit more with images, [this tutorial is helpful](https://github.com/derekahmedzai/cheapbotsdonequick/blob/master/svg-tracery-image-bots.md). For instance, here's the same bot as above, but overlaying text, old-school meme style, on the images:

```
{
"hashtag": [ "\\#bluelivesmatter","\\#alllivesmatter","\\#whitelivesmatter","\\#sendinthetroops"],
"kpop": ["{svg <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"1237\" height=\"619\"><image width=\"1237\" height=\"619\" xlink:href=\"#kpopURL#\" />#meme#</svg>}"],
"meme": ["<text x=\"600\" y=\"500\" font-size=\"60\" stroke=\"black\" stroke-width=\"1\" fill=\"white\" text-anchor=\"middle\" style=\"font-family: Impact\">#memetext#</text>"],
"kpopURL": [
"https://tinyurl.com/y8q8jy7r",
"https://tinyurl.com/yavj9bxg",
"https://tinyurl.com/yan56qbf",
"https://tinyurl.com/y78pape7",
"https://tinyurl.com/ydb7qscv",
"https://tinyurl.com/yb98krj2"
],
"actURL": [
"https://tinyurl.com/y8zv22ce",
"https://tinyurl.com/y9s586dr",
"https://tinyurl.com/yd8kp2fd",
"https://tinyurl.com/y7ou7rkd",
"https://tinyurl.com/y9dx55lb",
"https://tinyurl.com/ybost7vu",
"https://tinyurl.com/yd6nekkx"
],
"text": [ "Stop trying to distract us with #hashtag#","Do you really believe #hashtag#?", "So you're tweeting about #hashtag#" ],
"memetext": [ "Blue lives do not exist","Justice for George Floyd", "Black Lives Matter","Breonna Taylor: Say her name" ],
"turntext": [ "Have you considered", "But what about", "Maybe instead"],
"origin": ["#text# #turntext# #kpop# #actURL#"]
}

```

Image sizing can be tricky here, too, as the text placement is measured using x,y coordinates. Again, we can discuss this together during the workshop.

### Extending Tracery

Those are the basics, though Tracery can get much more complicated from these building blocks alone. Tracery's symbols can be nested (lists within lists!) and combined with non-textual elements. In addition, Tracery can [interact with HTML, SVG graphics, and Javascript](http://www.galaxykate.com/pdfs/galaxykate-zine-tracery.pdf) to extend its capabilities. Check out the different example code available in the pull-down menu of the Tracery editor to explore some of these possibilities. 

As you get started, you might think "wow, there's a lot of typing involved here!" and that might be true. To help out, however, you may also choose use and adapt these [corpora created by Darius Kazemi](https://github.com/dariusk/corpora/tree/master/data) for bot making.

## Posting with Cheap Bots, Done Quick

We will walk through this together, but once you have your Tracery code working as you wish, we will need to get it running and posting to Twitter. You need to sign up for a [Twitter account](https://twitter.com) for your bot and make sure you're signed into that account, rather than any personal accounts you might use. We will then use [Cheap Bots, Done Quick](https://cheapbotsdonequick.com/) to get our bots posting regularly to their accounts. 

*Note: Frequent bot maker and digital archeologist, Shawn Graham, recommends folks check out [Glitch](https://glitch.com/) for hosting Tracery bots. He wrote me, "It [Glitch] has some tracery templates for bots. Then you can set up a cron service to ping the glitch endpoint to run the bot and tweet." For those with some experience, Glitch looks to be able to sync directly with a bot's Github repo. I've not used Glitch myself, however, and so can't speak to it personally. See [this Glitch repo](https://glitch.com/~tracery-twitter-bot) for some idea what this would look like.*

### Gmail Hacks

Twitter will not allow a user to create a new account using an email address tied to an existing account, so you cannot reuse the same email you use for a primary Twitter for a bot. You can of course create an email address for your bot—and might want to, if privacy is a primary concern—but you can also use a small gmail hack. If you add periods into your gmail account name, gmail will ignore those periods when sorting emails, so it would see `fakebotaccount@gmail.com`, the same as `fakebot.account@gmail.com` or `fake.bot.account@gmail.com`. Twitter, however, would perceive these as three distinct email addresses and allow me to create separate accounts under each. Similarly, you can append a plus sign and trailing characters to your gmail and still receive the emails, so that `fakebotaccount@gmail.com` and `fakebotaccount+bot1@gmail.com` would both deliver to same inbox. Again, Twitter would allow me to create multiple accounts using these variations. I tend to use the plus sign trick when creating bots, appending a word following the plus sign that's related to the bot content. *Side note: the plus sign trick is also a useful way to sign up for listservs &c. and set up useful filters in gmail, so that emails coming to an account using a particular word after the plus sign are automatically redirected to a particular folder.*