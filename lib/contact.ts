export const CONTACT_REASONS = [
  { id: "general", label: "General enquiry" },
  { id: "product", label: "Product feedback" },
  { id: "partnership", label: "Partnerships" },
  { id: "media", label: "Media" },
  { id: "investor", label: "Investors" },
  { id: "careers", label: "Careers" },
] as const;

export type ContactReason = (typeof CONTACT_REASONS)[number]["id"];

export function isContactReason(value: unknown): value is ContactReason {
  return (
    typeof value === "string" &&
    CONTACT_REASONS.some((reason) => reason.id === value)
  );
}
