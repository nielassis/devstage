import { redis } from "../redis/client";

interface GetSubscriberRankingPositionParams {
  subscriberId: string;
}

export async function getSubscriberRankingPosition({
  subscriberId,
}: GetSubscriberRankingPositionParams) {
  const ranking = await redis.zrevrank("referral:ranking", subscriberId);

  if (ranking === null) {
    return { position: null };
  }

  return { position: ranking + 1 };
}
