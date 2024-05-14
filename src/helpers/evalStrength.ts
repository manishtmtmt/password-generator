export const evalStrength = (password: string) => {
  if (!password) return 0;
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password) || /[a-z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(password)) strength++;
  return strength;
};
