const escapeHtml = (text: string) =>
  text.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);

export const emphasize = (text: string) =>
  escapeHtml(text).replace(/\*(.+?)\*/g, '<em>$1</em>');
