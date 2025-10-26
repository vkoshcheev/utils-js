/**
 * Validates email for (in order):
 * 
 * - One or more repetitions of alphanumerics with dots inbetween (john, john.doe, john.doe.business)
 * 
 * - "@"
 * 
 * - One or more repetitions of alphanumerics with dots inbetween (example.com)
 */
export function isEmailValid (input: string) {
  const emailValidationRegExp = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(?:[a-zA-Z0-9]+\.)+[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
  const isValid = emailValidationRegExp.test(input);
  return isValid;
};