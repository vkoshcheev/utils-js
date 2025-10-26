import { nbsp } from "./nbsp";

export function replaceSpacesWithNbsp(str: string) {
  return str.replaceAll(' ', nbsp);
}