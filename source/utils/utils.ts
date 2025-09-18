import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Merge tailwindcss classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Path helper functions when deploying to subpaths
export function adaptPath(...paths: string[]): string {
  // Parse request subpath prefix
  const domainPrefix = import.meta.env?.VITE_SUBPATH_PREFIX || '/';

  const arr = (paths ?? []).filter(p => p != null).map(String);
  if (arr.length === 0) return domainPrefix.replace(/\/+$/, '');

  return arr.reduce((prev, next) => {
    const prevPath = prev.replace(/\/+$/, '');
    const nextPath = next.replace(/^\/+/, '');

    return `${prevPath}/${nextPath}`;
  }, domainPrefix).replace(/\/+$/, '');
}
