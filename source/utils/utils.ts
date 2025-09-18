// Path helper functions when deploying to sub-paths
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
