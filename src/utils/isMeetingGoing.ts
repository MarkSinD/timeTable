export const isMeetingGoing = (date1: Date, date2: Date): boolean => {
  const now = new Date();

  // Check if the current time is after date1 and before date2
  return now >= date1 && now <= date2;
};