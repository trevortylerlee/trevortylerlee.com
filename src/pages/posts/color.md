---
layout: '../../layouts/MarkdownPostLayout.astro'
title: 'HTML Color Name Game'
pubDate: 'Published on November 21, 2022'
image:
    url: '/noisy-gradient.webp'
    alt: 'A grainy gradient made of purple, pink, orange, and red.'
---

In this game users are prompted to guess the color when given an HTML color name. The most challenging part of this project was developing the scoring system – I decided to base it around the difference between the user's color and the actual value of the HTML color name using their RGB values.

In modern browsers there are 140 HTML color names supported – some of the trickier ones to guess are gainsboro, rebeccapurple, and the infamous goldenrod.

Calculating the color difference to create a reliable scoring system was much harder than I anticipated. Due to the way the human eyeball works, RGB values don't always correlate to how we perceive color.

*Mathematically* the scoring system works, but to the human eye it's *perceptually* wrong. Obviously, this has led to many complaints.

Anyways, check it out on [codesandbox](https://codesandbox.io/s/colormatch-bi3jrb).

The LCH color space is a perceptually-uniform color space that browsers are thinking about supporting. When and if that happens, I'll revisit this idea and make a V2. 