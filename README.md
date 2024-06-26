# 📰 news-scrapper

A lightweight Node.js package that scrapes article data from various news channels in India and the US. Simply call the desired function for the specific news channel, and the results are returned as an array of JSON objects.

![Ayush News Scrapper](https://github.com/AyushDhamankar/news-scrapper/assets/98787245/72d2539c-6899-4b4c-9a55-9615f4603165)

## Installation 🔌

Install via npm:

```bash
npm install news-scrapper
```

Or via yarn:

```bash
yarn add news-scrapper
```

## Usage 🕹️

Simply import the package and call the desired function for the news channel you're interested in. Here are the available functions:

### getTheHinduLatestNews

```javascript
const { getTheHinduLatestNews } = require('news-scrapper');

const articles = await getTheHinduLatestNews();
```
Scrapes the latest news articles from The Hindu.

### getHindustanTimesLatestNews

```javascript
const { getHindustanTimesLatestNews } = require('news-scrapper');

const articles = await getHindustanTimesLatestNews();
```
Scrapes the latest news articles from Hindustan Times.

### getTheIndianExpressLatestNews

```javascript
const { getTheIndianExpressLatestNews } = require('news-scrapper');

const articles = await getTheIndianExpressLatestNews();
```
Scrapes the latest news articles from The Indian Express.

### getTimesOfIndiaLatestNews

```javascript
const { getTimesOfIndiaLatestNews } = require('news-scrapper');

const articles = await getTimesOfIndiaLatestNews();
```
Scrapes the latest news articles from Times of India.

### getNewYorkTimesLatestNews

```javascript
const { getNewYorkTimesLatestNews } = require('news-scrapper');

const articles = await getNewYorkTimesLatestNews();
```
Scrapes the latest news articles from New York Times.

### getNBCLatestNews

```javascript
const { getNBCLatestNews } = require('news-scrapper');

const articles = await getNBCLatestNews();
```
Scrapes the latest news articles from NBC.

## Output 📲

The output is an array of JSON objects, with each article following the structure below:

```json
[
    {
        "url":  "http://url-to-website.com/path/to/article",
        "img":"http://url-to-website.com/path/to/image.jpg",
        "title":  "Article title",
        "type":  "Name of publication",
        "time":  "Time/date published (human-readable)"
    }
]
```

For more details on each function's usage, refer to the code documentation.

---

Feel free to customize and expand upon this README to provide more information or specific usage examples!