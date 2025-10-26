/**
 * Removes everything except digits from string and if there's **exactly** 11 digits, returns true.
 */
export function isPhoneNumberValid (input: string) {
  const onlyNumbers = input.replaceAll(/\D/g, '');
  const isValid = onlyNumbers.length === 11;
  return isValid;
};