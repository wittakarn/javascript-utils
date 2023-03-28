export const getDateOfLastYear = (date: Date) => {
    date.setFullYear(date.getFullYear() - 1);
    return date;
}

export const getFirstDateOfMonth = (date: Date) => {
    date.setDate(1);
    return date;
}