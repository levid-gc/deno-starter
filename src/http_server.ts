import { serve } from "https://deno.land/std/http/server.ts";

const PORT = 9000;
const s = serve({ port: PORT });
console.log(`Listening on <http://localhost>:${PORT}/`);

for await (const req of s) {
  req.respond({
    body: "Hello Deno"
  });
}