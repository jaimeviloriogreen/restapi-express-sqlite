# Resta API with Express & SQLite

### Installation
First, you should have installed Node (obviously), the latest version, and pnpm, then run this command:
+ `pnpm install`

And later:
+ `pnpm run server`

### Endpoints
|Method|Endpoint|Description|Expected values|
|--|--|--|--|
|GET|`/api/products`|Get all products|`None`|
|POST|`/api/products`|Insert a product|`{name, price, qty}`|
|DELETE|`/api/products`|Delete a product|`{uuid}`|
|PUT|`/api/products`|Update a product|`{name, price, qty, uuid}`|
