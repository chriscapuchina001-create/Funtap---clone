export const formatText = (username: string, maxLength: number = 6): string => {
  if (username.length <= maxLength) {
    return username;
  }
  return username.substring(0, maxLength) + "...";
};
