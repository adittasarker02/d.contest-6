function isValidBdMobileNumber(phoneNumber) {
  return /^(?:\+?880|0)1[3-9]\d{8}$/.test(phoneNumber);
}