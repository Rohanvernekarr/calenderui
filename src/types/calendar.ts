export type DateRange = {
  startDate: Date | null;
  endDate: Date | null;
};

export type DayCellProps = {
  date: Date;
  isSelected: boolean;
  isInRange: boolean;
  isStart: boolean;
  isEnd: boolean;
  onSelect: (date: Date) => void;
};