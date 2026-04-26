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
  const end = new Date(endDate ?? new Date());
  end.setMonth(end.getMonth() + 1);

  let years = end.getFullYear() - startDate.getFullYear();
  let months = end.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const parts = [];
  if (years > 0) parts.push(`${years}y`);
  if (months > 0) parts.push(`${months}mo`);

  return parts.length > 0 ? parts.join(' ') : '1mo';
};

