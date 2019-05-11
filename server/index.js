const App = require("@emitterware/app").default;
const HTTP = require("@emitterware/http").default;
const Bundler = require("@emitterware/bundler").default;

const app = new App();
const http = new HTTP({
	host: process.env.HOST || "127.0.0.1",
	port: process.env.PORT || 3000
});

app.subscribe(http);
app.on("http", new Bundler("client/index.html"));