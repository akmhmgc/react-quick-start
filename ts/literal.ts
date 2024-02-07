declare function handleRequest(url: string, method: "GET" | "POST"): void;

interface Req {
  url: string,
  method: "GET" | "POST"
}

const req: Req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);

function toS(num: number) {
  return String(num);
}
