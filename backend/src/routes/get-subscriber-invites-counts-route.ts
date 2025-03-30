import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { GetSubscriberInvitesCounts } from "../functions/get-subscriber-invite-counts";

export const getSubscriberInvitesCountsRoute: FastifyPluginAsyncZod = async (
  app
) => {
  app.get(
    "/subscribers/:subscriberId/ranking/count",
    {
      schema: {
        summary: "Get subscriber invites count",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          200: z.object({
            count: z.number(),
          }),
        },
      },
    },
    async (request) => {
      const { subscriberId } = request.params;

      const { count } = await GetSubscriberInvitesCounts({ subscriberId });

      return { count };
    }
  );
};
