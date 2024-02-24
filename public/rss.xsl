<?xml version="1.0" encoding="utf-8"?>
<!--
pretty-feed is based on work by lepture.com:

   https://lepture.com/en/2019/rss-style-with-xsl

This modified stylesheet is based on pretty-feed-v3 by aboutfeeds.com:

   https://github.com/genmon/aboutfeeds
-->

<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/>: RSS Feed</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
      </head>
      <style type="text/css">
        <!-- Reset -->
        *,
        ::before,
        ::after {
          box-sizing: border-box;
        }

        html,
        :host {
          line-height: 1.5;
          -webkit-tap-highlight-color: transparent;
        }

        blockquote,
        dl,
        dd,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        hr,
        figure,
        p,
        pre {
            margin: 0;
        }

        body {
          margin: 0 auto;
          max-width: 640px;
          background: black;
          color: rgb(242 242 247);
          font-family: sans-serif;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          padding-top: 2rem;
        }

        .disclaimer {
          background: #fcd34d;
          color: black;
          padding: 1rem;
        }

        .name-container {
          padding-top: 4rem;
          padding-bottom: 4rem;
        }

        .name {
          text-transform: uppercase;
          margin-bottom: -0.5rem;
        }

        a {
          color: rgb(188 145 62);
          text-decoration: none;
        }

        .post-container {
          display: flex;
          flex-direction: column;
        }

        .post {
            padding: 1rem;
            border-radius: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1.5rem;
            margin-left: -1rem;
        }

        .post:hover,
        .post:focus {
          	box-shadow: inset 0 0 0 2px rgb(255 255 255 / 0.1);
            background: rgb(44 44 46);
        }

        .date {
          text-decoration-line: none;
          color: rgb(242 242 247);
          font-family: monospace;
          font-size: 0.75rem;
          flex-shrink: 0;
          word-wrap: nowrap;
        }

        .username {
          font-family: monospace;
          margin-bottom: 1rem;
        }

        .latest-posts {
          font-family: monospace;
        }
      </style>
      <body class="">
        <div class="">
          <header class="">
            <p class="disclaimer"><strong>This is a web feed</strong>, also known as an <strong>RSS feed</strong>. Subscribe by copying the URL from the address bar into your newsreader. </p>
            <div class="name-container">
            <h1 class="name"><xsl:value-of select="/rss/channel/title"/></h1>
            <p class="username">@boogerbuttcheeks</p>
            <a class="head_link" target="_blank">
              <xsl:attribute name="href">
                <xsl:value-of select="/rss/channel/link"/>
              </xsl:attribute>
              Visit Website &#x2192;
            </a>
            </div>
            <!-- <p><xsl:value-of select="/rss/channel/description"/></p> -->
          </header>
          <span class="latest-posts">latest posts</span>
          <div class="post-container">
            <xsl:for-each select="/rss/channel/item">
                  <a target="_blank" class="post">
                    <xsl:attribute name="href">
                      <xsl:value-of select="link"/>
                    </xsl:attribute>
                    <xsl:value-of select="title"/>
                    <small class="date">
                      <xsl:value-of select="substring-before(substring-after(pubDate, ', '), ' 00:00:00 GMT')"/>
                    </small>
                  </a>
            </xsl:for-each>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>