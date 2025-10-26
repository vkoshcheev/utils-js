/**
 * Shortens filename by replacing a section in the middle based on parameters
 * @example
 * With default parameters:
 * Input: "123456789012345678901234567890.png"
 * Output: "1234567890[...]1234567890.png"
 */
export declare function shortenFileName({ filename, maxLength, keepStartLength, keepEndLength, replaceExcessiveTextWith, }: {
    filename: string;
    maxLength?: number;
    keepStartLength?: number;
    keepEndLength?: number;
    replaceExcessiveTextWith?: string;
}): string;
