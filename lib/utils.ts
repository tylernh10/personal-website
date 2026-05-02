import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getDateRangeString = (startDate: Date, endDate?: Date) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short'
  });

  if (!endDate) {
    return `${formatter.format(startDate)} – Present`;
  }

  return formatter.formatRange(startDate, endDate);
};

export const getTotalDuration = (startDate: Date, endDate?: Date) => {
  const end = endDate ?? new Date();

  const yearDiff = end.getFullYear() - startDate.getFullYear();
  const monthDiff = end.getMonth() - startDate.getMonth();

  const totalMonths = (yearDiff * 12) + monthDiff + 1;

  if (totalMonths <= 0) return '1mo';

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts = [];
  if (years > 0) parts.push(`${years}y`);
  if (months > 0) parts.push(`${months}mo`);

  return parts.join(' ');
};
