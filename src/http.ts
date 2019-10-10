import fetch, { RequestInit } from 'node-fetch';

export async function resolveHttp(ref: uri.URI, opts: RequestInit = {}) {
  const response = await fetch(String(ref), opts);
  return response.text();
}

export function createResolveHttp(defaultRequestOptions: RequestInit = {}) {
  return (ref: uri.URI) => resolveHttp(ref, defaultRequestOptions);
}
