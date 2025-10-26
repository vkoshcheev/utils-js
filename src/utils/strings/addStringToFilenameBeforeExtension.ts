export function addStringToFilenameBeforeExtension(filename: string, stringToAdd: string) {
  const dot = filename.lastIndexOf('.');
  return dot === -1
    ? filename + stringToAdd
    : filename.slice(0, dot) + stringToAdd + filename.slice(dot);
}