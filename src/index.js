var express = require("express");
const { postgraphile } = require("postgraphile");
const PgSimplifyInflectorPlugin = require("@graphile-contrib/pg-simplify-inflector");
const PgManyToManyPlugin = require("@graphile-contrib/pg-many-to-many");
const app = express();
var cors = require("cors");

app.use(cors());
app.use(
  postgraphile(
    "postgres://postgres:Servidor.@svdev/agenda",
    ["public", `configuracoes`],
    {
      graphiql: true,
      enhanceGraphiql: true,
      dynamicJson: true,
      enableCors: true,
      // graphiqlRoute:,
      graphqlRoute: "/graphql",
      // externalUrlBase:'graphiql',
      subscriptions: true,
      watchPg: true,
      appendPlugins: [PgSimplifyInflectorPlugin, PgManyToManyPlugin],
      bodySizeLimit: "5MB"
    }
  )
);

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port 3000");
});
