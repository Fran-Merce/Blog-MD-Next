import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};
const options: Intl.DateTimeFormatOptions = {
  localeMatcher: "best fit",
  year: "numeric",
  month: "short",
  day: "numeric",
};
const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time className="text-slate-400 capitalize" dateTime={dateString}>
      {date.toLocaleDateString("ES-es", options)}
    </time>
  );
};

export default DateFormatter;
