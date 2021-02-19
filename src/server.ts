const listener = Deno.listen({ port: 9000 });
console.log("listening on 0.0.0.0:9000");
for await (const conn of listener) {
  Deno.copy(conn, conn);
}