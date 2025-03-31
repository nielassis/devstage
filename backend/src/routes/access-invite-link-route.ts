import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { env } from "../env";
import { accessInviteLink } from "../functions/access-invite-link";

export const accessInviteLinkRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/invites/:subscriberId",
    {
      schema: {
        summary: "Access Invite Link and redirect user",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          302: z.null(),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params;

      await accessInviteLink({ subscriberId });

      //   console.log(await redis.hgetall("referral:access-count"));

      // console.log(subscriberId);

      const redirectURL = new URL(env.WEB_URL);

      redirectURL.searchParams.set("referrer", subscriberId);

      return reply.redirect(redirectURL.toString(), 302);
    }
  );
};
