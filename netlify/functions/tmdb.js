// Proxy seguro: o navegador chama esta função; só ela conhece a chave do TMDB.
const ALLOWED = [
  /^\/search\/movie$/,
  /^\/movie\/\d+$/,
  /^\/movie\/\d+\/(recommendations|similar|watch\/providers)$/,
  /^\/discover\/movie$/,
  /^\/genre\/movie\/list$/
];
const json = (statusCode, obj) => ({ statusCode, headers: { "Content-Type": "application/json" }, body: JSON.stringify(obj) });

exports.handler = async (event) => {
  const key = process.env.TMDB_KEY;
  if (!key) return json(500, { status_message: "TMDB_KEY nao configurada" });
  const p = event.queryStringParameters || {};
  const path = p.path || "";
  if (!ALLOWED.some(r => r.test(path))) return json(400, { status_message: "Rota nao permitida" });

  const u = new URL("https://api.themoviedb.org/3" + path);
  for (const [k, v] of Object.entries(p)) if (k !== "path" && k !== "api_key") u.searchParams.set(k, v);
  const headers = {};
  if (key.startsWith("eyJ")) headers.Authorization = "Bearer " + key;
  else u.searchParams.set("api_key", key);

  const r = await fetch(u, { headers });
  return {
    statusCode: r.status,
    headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=3600" },
    body: await r.text()
  };
};
