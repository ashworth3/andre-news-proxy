# andre-news-proxy

A simple Node.js + Express proxy that securely fetches cryptocurrency news articles from CoinDesk API.

---

## Note

This proxy is built for **personal use and integration with other projects**, such as dashboards, web apps, or tools that require backend-secured API calls.

---

## Features

- Proxies the `/news/v1/article/list` endpoint using CoinDesk
- Keeps API key hidden from frontend exposure
- Designed to be embedded or connected to frontend projects
- Returns clean JSON data to frontend app for ease-of-use
