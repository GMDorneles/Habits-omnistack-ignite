import dayjs from "dayjs";

export function generateDatesFromYearBeginning() {
    const firstDayOfTheYear = dayjs().startOf('year')
    const today = new Date()
    const dates = []
    let compareDate = firstDayOfTheYear
    // isBefore verifica se é menor q a data
    while (compareDate.isBefore(today)) {
        dates.push(compareDate.toDate())
        compareDate = compareDate.add(1, 'day')
    }
    return dates
}