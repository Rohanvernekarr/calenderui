import { startOfMonth,endOfMonth,eachDayOfInterval } from "date-fns";

export function getMonthDays(date: Date){
    return eachDayOfInterval({
        start:startOfMonth(date),
        end:endOfMonth(date)
    })
}