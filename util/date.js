export const formatDate = (dateString, locale = "en-US") => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(locale, options);
};
