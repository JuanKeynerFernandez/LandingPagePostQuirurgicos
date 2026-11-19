const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
const STORAGE_KEY = 'utm';

type Utm = Partial<Record<(typeof UTM_KEYS)[number], string>>;

function readUtm(): Utm {
  const params = new URLSearchParams(window.location.search);
  const fromUrl: Utm = {};

  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) fromUrl[key] = value;
  }

  try {
    if (Object.keys(fromUrl).length > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
      return fromUrl;
    }
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? '{}') as Utm;
  } catch {
    return fromUrl;
  }
}

function addReference(links: NodeListOf<HTMLAnchorElement>, utm: Utm) {
  const reference = [utm.utm_campaign, utm.utm_content].filter(Boolean).join(' / ');
  if (!reference) return;

  links.forEach((link) => {
    const url = new URL(link.href);
    const text = url.searchParams.get('text') ?? '';
    link.href = `${url.origin}${url.pathname}?text=${encodeURIComponent(`${text}\n\nRef: ${reference}`)}`;
  });
}

function trackClicks(links: NodeListOf<HTMLAnchorElement>, utm: Utm) {
  links.forEach((link) => {
    link.addEventListener('click', () => {
      const placement = link.dataset.whatsapp ?? 'desconocido';
      window.fbq?.('track', 'Contact', { content_name: placement });
      window.dataLayer?.push({ event: 'whatsapp_click', placement, ...utm });
    });
  });
}

export function initTracking() {
  const links = document.querySelectorAll<HTMLAnchorElement>('a[data-whatsapp]');
  const utm = readUtm();

  addReference(links, utm);
  trackClicks(links, utm);
}
