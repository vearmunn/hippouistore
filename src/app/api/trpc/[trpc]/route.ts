import { appRouter } from "@/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) => {
  fetchRequestHandler({
    endpoint: "/api/trc",
    req,
    router: appRouter,

    // @ts-expect-error context already passed from express middleware. watch the video at 5:00:00 for more info
    createContext: () => ({}),
  });
};

export { handler as GET, handler as POST };
