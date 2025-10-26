/**
 * Shortens filename by replacing a section in the middle based on parameters
 * @example
 * With default parameters:
 * Input: "123456789012345678901234567890.png"
 * Output: "1234567890[...]1234567890.png"
 */
export function shortenFileName ({
  filename,
  maxLength = 30,
  keepStartLength = 10,
  keepEndLength = 10,
  replaceExcessiveTextWith = '[...]',
}: {
  filename: string;
  maxLength?: number;
  keepStartLength?: number;
  keepEndLength?: number;
  replaceExcessiveTextWith?: string;
}) {
  if (!filename) return '';

  // remove and remember extension
  const split = filename.split('.');
  const extension = split.pop();
  const filenameWithoutExtension = split.join('.');

  const length = filenameWithoutExtension.length;
  if (length <= maxLength) return filename;

  const startPartToKeep = filenameWithoutExtension.slice(0, keepStartLength);
  const endPartToKeep   = filenameWithoutExtension.slice(length - keepEndLength);
  
  const shortenedFilename = startPartToKeep + replaceExcessiveTextWith + endPartToKeep + '.' + extension;

  return shortenedFilename;
};
