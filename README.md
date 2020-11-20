# Node Express Real Time API Bolerplate

> '@argha0277/express-rest-api' is a boilerplate for Node Express Real Time API using socket.io to send and receive notifications and chat messages.



## Index
* [Clone](#clone)
* [Dependencies](#dependencies)
* [Run](#run)
* [URL](#URL)

## Clone

```bash
git clone git@github.com:argha0977/node-express-realtime-api.git
```

## Dependencies

```js
npm install cors winston socket.io@2.2.0 --save
npm install

```
* The latest version of socket.io(3.0.3) has some cors related issues.

## Client App Dependencies
* The client angular or Ionic app should use socket.io-client@2.2.0. So use the following command to install,
```js
npm install socket.io-client@2.2.0
```

## Run

### Development 

```js
pm2 start --watch --env development
pm2 logs
pm2 stop NODE_EXPRES_REALTIME_API_DEV
```
### Production 

```js
pm2 start --watch --env production
pm2 logs
pm2 stop NODE_EXPRES_REALTIME_API
```

## URL

```js
http://localhost:4013/api/
```