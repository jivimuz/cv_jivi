export function ExperienceCount(startDate: string) {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  if (days < 0) {
    months--;
  }
  if (months < 0) {
    years--;
  }

  return { years, months, days };
}
