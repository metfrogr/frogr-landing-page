export function validateIndianMobile(phone: string): { valid: boolean; message: string } {
  if (!phone || phone.length === 0) return { valid: false, message: "Please enter your mobile number" };
  if (phone.length !== 10) return { valid: false, message: "Please enter a valid 10-digit mobile number" };
  if (!/^[6-9]/.test(phone)) return { valid: false, message: "Mobile number must start with 6, 7, 8, or 9" };

  const invalidSeqs = ["0123456789", "1234567890", "9876543210", "0987654321"];
  if (invalidSeqs.includes(phone)) return { valid: false, message: "Please enter a valid mobile number" };

  if (/^(\d)\1{9}$/.test(phone)) return { valid: false, message: "Please enter a valid mobile number" };
  if (/^(\d{2})\1{4}$/.test(phone)) return { valid: false, message: "Please enter a valid mobile number" };
  if (phone.startsWith("140") || phone.startsWith("160")) return { valid: false, message: "Please enter a valid mobile number" };

  return { valid: true, message: "" };
}
