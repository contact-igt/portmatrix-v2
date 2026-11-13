// ISO dates may contain only a year or month. Unknown dates sort last.
export function newestFirst(a, b) {
  const key = (item) => {
    const [year = "0000", month = "00", day = "00"] = (item.datetime || item.date || "").split("-");
    return `${year}-${month}-${day}`;
  };
  return key(b).localeCompare(key(a));
}
