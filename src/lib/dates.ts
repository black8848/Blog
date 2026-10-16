import { SITE_TIME_ZONE } from './site';

const dateFormat = new Intl.DateTimeFormat('en-CA', {
  timeZone: SITE_TIME_ZONE,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const yearFormat = new Intl.DateTimeFormat('en-CA', {
  timeZone: SITE_TIME_ZONE,
  year: 'numeric',
});

export function formatPostDate(date: Date): string {
  return dateFormat.format(date);
}

export function formatPostYear(date: Date): string {
  return yearFormat.format(date);
}
