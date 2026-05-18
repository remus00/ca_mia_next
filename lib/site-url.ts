/** Canonical site origin for metadata, OG URLs, sitemap and robots. */

function stripTrailingSlash(url: string): string {
  return url.replace(/\/$/, '');
}

function ensureHttpsOrigin(raw: string): string {
  const trimmed = raw.trim();
  if (/^https?:\/\//i.test(trimmed)) return stripTrailingSlash(trimmed);
  return `https://${stripTrailingSlash(trimmed)}`;
}

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return stripTrailingSlash(explicit);

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//i, '');
    return `https://${host}`;
  }

  const netlifyUrl = process.env.URL?.trim() ?? process.env.DEPLOY_PRIME_URL?.trim();
  if (netlifyUrl) return ensureHttpsOrigin(netlifyUrl);

  return 'http://localhost:3000';
}
