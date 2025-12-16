/**
 * Converts a string to a URL-friendly slug
 */
export default function slugify(val: string, separator = "-"): string {
  return (
    val
      .toLowerCase()
      .trim()
      // Replace German umlauts and ß with ASCII equivalents
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/ß/g, "ss")
      // Replace whitespace with separator
      .replace(/\s+/g, separator)
      // Remove all URI-unfriendly characters (reserved, unsafe, and special chars)
      .replace(/[:/?#[\]@!$&'()*+,.;=<>"{}|\\^~`]/g, "")
      // Remove multiple consecutive separators
      .replace(new RegExp(`\\${separator}+`, "g"), separator)
      // Trim separators from start and end
      .replace(new RegExp(`^\\${separator}+|\\${separator}+$`, "g"), "")
  );
}
