export const validateNumber = (number: string): boolean => {
  const fourDigitRegex = /^[1-9]{4}$/;
  if (!fourDigitRegex.test(number)) {
    return false;
  }
  return true;
};
