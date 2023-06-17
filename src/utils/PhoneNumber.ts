export const getCountryCode = (phoneNumber: string): string => {
  const countryCodeIndex = phoneNumber.indexOf('-');
  if (countryCodeIndex !== -1) {
    return phoneNumber.slice(1, countryCodeIndex);
  }
  return '';
};

export const getRawPhoneNumber = (phoneNumber: string): string => {
  const countryCodeIndex = phoneNumber.indexOf('-');
  if (countryCodeIndex !== -1) {
    return phoneNumber.slice(countryCodeIndex + 1);
  }
  return '';
};

export const sanitizePhoneNumber = (rawPhoneNumber?: string): string => {
  if (!rawPhoneNumber) {
    return '';
  }
  const phoneNumberWithoutCode = rawPhoneNumber.slice(-10);
  let code = rawPhoneNumber.slice(0, rawPhoneNumber.length - 10);
  if (code.startsWith('+')) {
    code = code.slice(1);
  }

  return `+${code}-${phoneNumberWithoutCode}`;
}
