export function ExperienceCount(startDate) {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // hitung jumlah hari di bulan lalu
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}
