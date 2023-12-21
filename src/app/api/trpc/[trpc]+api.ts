import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { createContext } from "@/server/trpc/trpc"
import { rootRouter } from "@/server/trpc/routers/_root"

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: rootRouter,
    createContext,
  })

export { handler as GET, handler as POST }
