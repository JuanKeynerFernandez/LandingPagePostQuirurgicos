import { site } from '../data/site';
import type { WhatsAppIntent } from '../data/types';

export function whatsappUrl(intent: WhatsAppIntent): string {
  const phone = site.whatsapp.phone?.replace(/\D/g, '') ?? '';
  const text = encodeURIComponent(site.whatsapp.messages[intent]);
  return `https://wa.me/${phone}?text=${text}`;
}
