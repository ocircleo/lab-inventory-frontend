export async function GET(req, { params }) {
  return handleProxy(req, params);
}

export async function POST(req, { params }) {
  return handleProxy(req, params);
}

export async function PUT(req, { params }) {
  return handleProxy(req, params);
}

export async function DELETE(req, { params }) {
  return handleProxy(req, params);
}

async function handleProxy(req, params) {
  const backendBase = "http://192.168.0.100:5000"; // your Node.js server

  // extract requested path
  let reqParams = await params;
  const pathname  = await reqParams.path.join("/");

  // Extract query params from original URL
  const reqUrl = new URL(req.url);
  const queryString = reqUrl.search; // includes "?a=1&b=2"

  // Build final forwarded URL
  const finalUrl = `${backendBase}/${pathname}${queryString}`;

  // Handle body
  const body = req.method === "GET" ? undefined : await req.text();

  const backendRes = await fetch(finalUrl, {
    method: req.method,
    headers: req.headers,
    body,
    credentials: "include",
  });

  // Clone headers including Set-Cookie
  const headers = new Headers();
  backendRes.headers.forEach((value, key) => headers.append(key, value));

  const data = await backendRes.arrayBuffer();
  let res = new Response(data, {
    status: backendRes.status,
    headers,
  });
  return res;
}
