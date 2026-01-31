---
title: "Workshop: Building a Website with Jekyll and GitHub Pages"
date: 2018-11-08
author: Ryan Cordell
permalink: /teaching/jekyll-workshop/
layout: post
---

# Workshop Description

Recently “flat HTML” website platforms have been getting lots of buzz: they load quickly, don’t have the overhead of database-driven platforms like WordPress, and are more aligned with the ideals of “minimal computing.” Once a flat HTML system is set up it’s remarkably easy to use, but that initial setup can be more complicated than an out-of-the-box solution like WordPress. This two- hour workshop will help you get started building a free, fast-loading professional website using a combination of [GitHub Pages](https://pages.github.com/) and [Jekyll](https://jekyllrb.com/), one of the most popular flat HTML platforms. 

# Workshop Overview

I'm hoping to keep things flexible today in response to audience questions, needs, or requests, but in general I expect us to:

1. Discuss the basic structure of a Jekyll website.
2. Each find [a Jekyll GitHub repository](https://github.com/topics/jekyll-theme?o=desc&s=stars) to use for today's workshop. My undergraduates have gravitated toward the [Moon theme](https://github.com/TaylanTatli/Moon) this semester, and I'll use this one for my demos today.
3. Clone your chosen repository into your GitHub account and if at all possible to your desktop.
4. Learn how to edit the `_config.yml` file to begin customizing a Jekyll site.
5. Overview the structure of a Jekyll site.  
6. Edit at least one page and learn about the Jekyll header.
7. Learn how to create a new blog post and edit at least one sample post.
8. Discuss possibilities for customizing a Jekyll site.


# Jekyll/GitHub Pages Resources

## Why Build a Jekyll website?

Ran out of time; we can discuss this in the workshop.


## Helpful Jekyll/GitHub Pages Links and Tutorials

1. We will largely follow Barry Clark's tutorial, [Build A Blog With Jekyll And GitHub Pages](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/), though some details have changed since 2014. 
2. You can peruse the list of [supported Jekyll themes for GitHub Pages](https://pages.github.com/themes/), though most of these do not include the framework for blogging. A theme that supports blogging should include a folder titled `_posts`. 
3. Fortunately, as of last year GitHub Pages supports most Jekyll themes out of the box (with a few exceptions we'll discuss in the workshop). You can [browse a list of Jekyll GitHub repositories](https://github.com/topics/jekyll-theme?o=desc&s=stars), sorted by stars awarded by other GitHub users. 
4. There are other sites for [browsing Jekyll themes](http://jekyllthemes.org/) that will work with Github Pages.
5. For additional help, see [Amanda Visconti's Jekyll/Github Pages tutorial at the Programming Historian](https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages)
6. Once your Jekyll site is set up, you can edit your pages and posts on your computer and sync with Github (this is the model we will overview in the workshop), or you might consider [Prose.io](http://prose.io/) to create and edit blog posts directly online. 
7. Jekyll's own [GitHub repository readme](https://github.com/jekyll/jekyll) links to lots of useful resources for learning and customizing Jekyll websites.

# Markdown Resources

This workshop is not explicitly billed as a workshop on [writing in Markdown](https://daringfireball.net/projects/markdown/syntax), but pages and posts in Jekyll are all composed in Markdown, so you will need some familiarity with it in order to create a Jekyll website. Fortunately, Markdown is simple to learn, and may well prove useful beyond website building (I use it for all of my writing these days, for reasons I explain below). 

## What is Markdown?

Markdown is a lightweight standard for writing in plain text while encoding the **structure of your document** for later representation in a format like Word, PDF, or HTML. If you have ever marked up a text using HTML or XML tags, Markdown works quite similarly, but uses simple typographical symbols to encode text rather than longer HTML  or XML tags. There are a number of affordances to working in Markdown, including:

1. Simplicity. Because Markdown is a plain-text system of encoding structural elements typographically—rather than, as in proprietary formats like `docx`, though hidden, underlying code—Markdown files are small in size and simple to compose. You do not need to interrupt your writing to format your document while writing in Markdown.
2. Flexibility. When writing in Markdown you encode directions for styling your text, but you do not style it directly. Because of this, an `md` file can be easily converted to many other standard file types, including `html` or `pdf`. You can easily convert a single `.md` file into a range of other formats, giving you flexibility when you want to publish your writing. 
3. Durability. Unlike files composed in specific version of proprietary software, Markdown files are, essentially, plain text files. This means they can be opened by a wide range of applications and they will look essentially the same, and that they are not subject to the vicissitudes of software updates or platform dependencies. You can open and edit a Markdown file on virtually any computer, and you will likely be able to do well into the future. Even if the conventions of Markdown are no longer understood, the central text you write in it should remain widely compatible and portable. 

As with any medium, of course, there are also *limitations* to writing in Markdown, such as:

1. You have less granular control over the appearance of your text than you would in a full featured word processor. In order to ensure the flexibility and durability of Markdown, its grammar is relatively constrained. While you can indicate text should be `bold` or formatted in a `numbered list` using Markdown, for instance, you could indicate that one paragraph's font should be 2 points larger than another. 
2. You typically have to convert Markdown files into another format before publication. This is not *quite* true on the web, where some frameworks like GitHub Pages can understand Markdown (as expresses in a Jekyll website) directly, but usually the production stage for a Markdown document involves converting you `md` file into another format and converting its structural encoding into actual stylistic representation.

## Markdown References

Below I will describe the most common Markdown syntax, but for additional reference you can consult:

+ The [Markdown Wikipedia page](https://en.wikipedia.org/wiki/Markdown), which includes a very handy chart of the syntax.
+ John Gruber's [introduction to Markdown](https://daringfireball.net/projects/markdown/syntax). Gruber developed the standard and knows what he's talking about!
+ This [interactive Markdown tutorial](http://www.markdowntutorial.com/), which will teach you the syntax in a few minutes.
+ You can also download [the Markdown version of this page](https://github.com/rccordell/rccordell.github.io/blob/master/_posts/2018-11-08-Jekyll-GitHubPages-workshop.md) if you'd like to compare what you see in your browser with the marked-up text that created it (click the `Raw` button to see the Markdown without GitHub's styling).

In short, in Markdown your text will not include any visible stylistic variations such as italics or bold text; Markdown is a *plain text* format. However, many Markdown Editors will be able to preview the way your documents will look like when they're styled.

## Applications for Writing in Markdown

One advantage to this flat-text format is that you can write valid Markdown in many, many editors, including the free text editors (such as TextEdit on the Mac or Wordpad on the PC) that come with most computers. You can also write in Markdown in some rich text editors such as [Scrivener](https://www.literatureandlatte.com/scrivener.php), though their support for the standard can be uneven. 

There are many dedicated Markdown composition applications with additional features, such as syntax highlighting or the ability to preview what your documents. 

### Free Markdown Applications:

+ [Macdown](http://macdown.uranusjr.com/) (Mac)
+ [Mou](http://25.io/mou/) (Mac)
+ [Markdownpad](http://markdownpad.com/) (Windows XP-8)
+ [Markdown Edit](http://markdownedit.com/) (Windows)
+ [Ghostwriter](http://wereturtle.github.io/ghostwriter/) (Windows & Linux)
+ [Remarkable](https://remarkableapp.github.io/) (Linux)
+ [Hashify](http://hashify.me/IyBUaXRsZQ==) (online) 
+ a bit more complicated to get started with, but [Atom](https://atom.io/) is more full-featured than some of those above (Mac, Windows, Linux)

### Paid Markdown Applications

They can be pricey, but there are some beautifully-designed, paid Markdown-writing applications out there. I can't list them all, but here are two popular ones:   
  
+ [Ulysses](https://ulysses.app/) (Mac only) is beautifully designed and a joy to use. It was my go-to application for awhile but I moved away from it because of its non-standard implementation of a few Markdown elements, such as links and images. Others don't like their subscription payment model.
+ My current, (cross platform_ favorite is [iA Writer](https://ia.net/writer). It is also well designed, though not quite as elegant as Ulysses. But it requires only one payment to use and implements Markdown in a standard way, so that my writing is more broadly compatible with other systems. 

To compose pages and blog posts for Jekyll using these desktop applications, you will need to sync a local folder on your computer to your Github repository.

## Markdown Syntax

So, a few basics:

1. If you want your text to be italicized, then *enclose it in single asterisks*. (i.e. \*enclose it in single asterisks\*).
2. If you want your text to be bold, then **enclose it in double asterisks**. (i.e. \*\*enclose it in double asterisks\*\*).
3. To start a new paragraph, simply hit return twice, so that you see a single line space in between paragraphs.
4. To start a new line without a paragraph break, add two spaces to the end of the first line and then hit return once.
5. To create a hyperlink, enclose the [words you want linked in brackets and the link in parentheses following](http://ryancordell.org/). 
	i.e. [words you want linked in brackets and the link in parentheses following]\(http://ryancordell.org/\)    

You can also create headlines of descending sizes, lists (numbered or bulleted), footnotes, block quotations, embedded images, and more. See the reference materials above for details on these other elements.