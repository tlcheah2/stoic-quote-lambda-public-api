# Stoicism Quote API Documentation

## Introduction
This API generates stoicism quotes to help you live a better life using Stoicism wisdom.

## Overview
At this moment, this GET API returns data in the body as a JSON with the `author` and `quote`.

## Usage
GET https://api.themotivate365.com/stoic-quote

The request takes no parameters, headers or query strings.

## Example
`curl -X GET https://api.themotivate365.com/stoic-quote`

Generates:
```
{
  "data": {
    "author":"Ryan Holiday",
    "quote":"True will is quiet humility, resilience, and flexibility; the other kind of will is weakness disguised by bluster and ambition."
  }
}
```

## Tech Stack used for this project
- AWS API Gateway
- AWS Lambda
- ExpressJS
- MongoDB Atlas
- Serverless Framework