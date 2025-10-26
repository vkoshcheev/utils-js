/**
 * @example
 * Input: 1230124123
 * Output: "1173.14 MB"
 */
export function formatFileSizeText (bytes: number, withSpace = true) {
  const spacing = withSpace ? ' ' : '';

  if (bytes > 1024 * 1024 * 1024) {
    const sizeInGigabytes = parseFloat((bytes / (1024 * 1024 * 1024)).toFixed(2));
    return `${sizeInGigabytes}${spacing}GB`;
  }

  if (bytes > 1024 * 1024) {
    const sizeInMegabytes = parseFloat((bytes / (1024 * 1024)).toFixed(2));
    return `${sizeInMegabytes}${spacing}MB`;
  }

  if (bytes > 1024) {
    const sizeInKilobytes = parseFloat((bytes / 1024).toFixed(1));
    return `${sizeInKilobytes}${spacing}KB`;
  }

  return `${bytes}${spacing}B`;
}