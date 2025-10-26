/**
 * Validates email for (in order):
 *
 * - One or more repetitions of alphanumerics with dots inbetween (john, john.doe, john.doe.business)
 *
 * - "@"
 *
 * - One or more repetitions of alphanumerics with dots inbetween (example.com)
 */
export declare function isEmailValid(input: string): boolean;
