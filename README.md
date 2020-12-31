# Eco
A simple [Next.js](https://nextjs.org/) app that helps you test REST request.

## Getting Started

Make a curl and get and echo response

```bash
curl https://eco.vercel.app/api
```

You'll get a response similar to:
```json
{
  "cookies": {},
  "method": "GET",
  "query": {},
  "body": "",
  "headers": {
    "host": "eco.vercel.app",
    "user-agent": "curl/7.64.1",
    "accept": "*/*"
  },
  "httpVersion": "1.1",
  "url": "/api"
}
```

You can also make POST requests
```bash
curl --location --request POST 'https://eco.vercel.app/api' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user": {
        "firstName": "Eco",
        "lastName": "Test"
    }
}'
```

You'll get a response similar to:
```json
{
    "cookies": {},
    "method": "POST",
    "query": {
        "test": "1234"
    },
    "body": {
        "user": {
            "firstName": "Franco",
            "lastName": "Fantini"
        },
        "orderId": "1234",
        "items": [
            {}
        ]
    },
    "headers": {
        "host": "eco.vercel.app",
        "user-agent": "curl/7.64.1",
        "accept": "*/*",
        "content-type": "application/json",
        "content-length": "140"
    },
    "httpVersion": "1.1",
    "url": "/api?test=1234"
}
```
