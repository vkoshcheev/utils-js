/**
 * @example
 * Input: File: some-file.png
 * Output: "png"
 */
export function getFileExtension (file: File) {
  if (!file) return '';
  const split = file.name.split('.');
  const extension = split.pop();
  return extension;
};
