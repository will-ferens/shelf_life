export const emailValid = (email) => {
  return /\S+@\S+\.\S+/.test(email) ? undefined : "Invalid Email";
};
