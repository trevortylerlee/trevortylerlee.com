---
title: "Search Google Web by default in Chromium"
date: 2024-07-01
description: "Search Google and only receive web results."
draft: false
---

[Original article](https://tedium.co/2024/05/17/google-web-search-make-default/)

Here's how to make Google Web search the default search engine in Chromium browsers. I'm using Arc.

## 1. Open Chromium's search settings

In Arc, navigate to `arc://settings/search`. In Chrome, it's `chrome://settings/search`. Click on "Manage search engines and site search" to expand the search settings.

## 2. Change the default shortcut for Google (Default)

Under "Search engines", edit Google (Default) and change the shortcut to `@g`.

## 3. Add a new site search

Under "Site search", click the "Add" button. Enter the following in the dialog that pops up:

- Name: Google (Web)
- Shortcut: google.com
- URL: {google:baseURL}search?q=%s&udm=14

Click "OK" to save the new site search.

## 4. Set Google (Web) as the default

Under "Site search", find Google (Web) and click the three dots to the right of the edit button. Select "Make default". It should now appear under the "Search engines" section as "Google (Web) (Default)".

You may have to click on "Additional sites" under "Site search" to find the Google (Web) site search created in step 3.

Your searches should now default to showing web results only. You can still search "regular" Google by using the shortcut `@g` setup in step 2.

---

I don't use DuckDuckGo for two reasons:

1. There's no "Skip to main content" button on the search results page.
2. Pressing <kbd>/</kbd> highlights the entire search query instead of just placing my cursor at the end of the query.
