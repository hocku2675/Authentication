export const handleDate = (Dates) => {
  const FullDate = Dates.replace("Z", "").split("T");
  const Date = FullDate[0].split("-").reverse().join(".");
  const Time = FullDate[1].split(".")[0];
  return [Date, Time];
};
