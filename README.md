# RedBobble Review/s
## Related Projects

  - [Product](https://github.com/SDC-macaroon/product)
  - [Carousel](https://github.com/SDC-macaroon/carousel)

## Table of Contents

1. [CRUD API](##API)
    - [Reviews](#Reviews)
    - [Review](#Review)
    - [Product](#Product)

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
---
##API:
 ***NOTE:***
`review` and `reviews` both support a POST method
>`Create/POST http://localhost:3002/review/:ProductID`
>`Create/POST http://localhost:3002/reviews/:ProductID`
##### Reviews
- Create/**POST** http://localhost:3002/reviews/:ProductID
- Read/ **GET** http://localhost:3002/reviews/:ProductID

##### Review

- Create/**POST** http://localhost:3002/review/:ProductID
- Read/**GET** http://localhost:3002/review/:ProductID/:reviewID
- Update/**PUT** http://localhost:3002/review/:ProductID/:reviewID
- Delete/**DELETE** http://localhost:3002/review/:ProductID/:reviewID
##### Product

- Create/**POST** http://localhost:3002/product/
- Read/**GET** http://localhost:3002/product/:ProductID/
- Update/**PUT** http://localhost:3002/product/:ProductID/
- Delete/**DELETE** http://localhost:3002/product/:ProductID/
---
## Usage
- none

## Requirements
- Node 6.13.0
- etc...
## Development
- yes

### Installing Dependencies

From within the root directory:

```sh
  npm install
```
