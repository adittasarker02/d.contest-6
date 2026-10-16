function daysBetweenDates(date1, date2) {
  const toDays = (s) => {
    const [y, m, d] = s.split("-").map(Number);
    return Date.UTC(y, m - 1, d) / 86400000;
  };

  return Math.abs(toDays(date1) - toDays(date2));
}