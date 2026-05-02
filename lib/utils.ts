import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getDateRangeString = (startDate: Date, endDate?: Date) => {
  const formatter = new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'short',
    timeZone: 'UTC'
  });

  if (!endDate) {
    return `${formatter.format(startDate)} – Present`;
  }

  return formatter.formatRange(startDate, endDate);
};

export const getTotalDuration = (startDate: Date, endDate?: Date) => {
  const now = new Date();
  const end = endDate ?? new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth()));

  const yearDiff = end.getUTCFullYear() - startDate.getUTCFullYear();
  const monthDiff = end.getUTCMonth() - startDate.getUTCMonth();

  const totalMonths = (yearDiff * 12) + monthDiff + 1;

  if (totalMonths <= 0) return '1mo';

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts = [];
  if (years > 0) parts.push(`${years}y`);
  if (months > 0) parts.push(`${months}mo`);

  return parts.join(' ');
};
