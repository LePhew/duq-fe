export function addDays(date: any, days: any) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export function addHours(hours: number) {
    let date = new Date();
    date.setTime(date.getTime() + (hours*60*60*1000));
    return date;
}