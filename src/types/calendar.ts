export type DateRange = {
  startDate: Date | null;
  endDate: Date | null;
};

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
}

export type DayCellProps = {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isInRange: boolean;
  isStart: boolean;
  isEnd: boolean;
  onSelect: (date: Date) => void;
};