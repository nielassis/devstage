import Redis from "ioredis";
import { env } from "../env";

export const redis = new Redis(env.REDIS_URL, {
  retryStrategy: (times) => {
    if (times >= 20) {
      return null;
    }
    return Math.min(times * 50, 2000);
  },
  maxRetriesPerRequest: 30,
});
