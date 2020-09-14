const Redis 	  		= require("ioredis");
const session 			= require("express-session");
const RedisStore 		= require("connect-redis")(session);
const redis 			= new Redis("redis://redis:6379", {
        showFriendlyErrorStack: (process.env.NODE_ENV !== "production"),
        lazyConnect: true,
        maxRetriesPerRequest: 20
});

const SessionHelper = {
	helper : function(){
		redis.on("error", err => {
			console.error("REDIS clientRedisSession", err);
		});
		session({
			resave: true,
			rolling: true,
			saveUninitialized: false,
			name: "redisconnect",
			secret: "2c6fd8cbc20d0e288667f469d951568d", // process.env.SESSION_SECRET,
			store: new RedisStore({client: redis}),
			cookie: {
				maxAge: 1000 * 60 * 60,
				secure: true,
				httpOnly: false
			}
		});
		return session;
	}
};

export default SessionHelper;
