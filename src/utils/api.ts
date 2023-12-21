import { createTRPCReact } from "@trpc/react-query"
import type { RootRouter } from "@/server/trpc/routers/_root"

export const api = createTRPCReact<RootRouter>()
