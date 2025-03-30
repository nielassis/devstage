import { redis } from "../redis/client";

interface GetSubscriberInvitesCountsParams {
  subscriberId: string;
}

export async function GetSubscriberInvitesCounts({
  subscriberId,
}: GetSubscriberInvitesCountsParams) {
  const count = await redis.zscore("referral:ranking", subscriberId);

  return { count: count ? Number.parseInt(count) : 0 };
}
