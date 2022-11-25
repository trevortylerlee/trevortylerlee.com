---
layout: '../../layouts/MarkdownPostLayout.astro'
title: 'HTML Color Name Game'
pubDate: 'Published on November 21, 2022'
image:
    url: '/noisy-gradient.webp'
    alt: 'A grainy gradient made of purple, pink, orange, and red.'
---

In this game users are prompted to guess the color when given an HTML color name. The most challenging part of this project was developing the scoring system – I chose to base it around the difference between the user's color and the actual value of the HTML color name using their RGB values.

There are 16 valid color names according to the W3C. These include simple names like blue, lightgray, and maroon. In modern browsers there are 140 HTML color names supported – some of the trickier ones to guess are gainsboro, rebeccapurple, and the infamous goldenrod.

Calculating the color difference to create a reliable scoring system was much harder than I anticipated. Due to the way the human eyeball works, RGB values don't always correlate to how we perceive color.

*Mathematically* the scoring system works, but to the human eye it's *perceptually* wrong. Obviously, this has led to many complaints.

Anyways, check it out on [codesandbox](https://codesandbox.io/s/colormatch-bi3jrb).

Recently I discovered [Color.js](https://colorjs.io/), a color space agnostic color conversion and manipulation library created by Lea Verou and Chris Lilley. It allows you to calculate the difference between colors in a perceptually uniform color space, like JzCzhz or ICtCp (not typos).

In the future I'll redo this project to see if I can get a better result.