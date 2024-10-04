import { format } from "date-fns";
import { ru } from 'date-fns/locale';

const dateFormat = (
  date: Date | string,
  pattern: string = "dd MMMM, yyyy",
): string => {
  const dateObj = new Date(date);
  const output = format(dateObj, pattern, { locale: ru });
  return output;
};

export default dateFormat;
