export const toDate: Function = (date: Date | string): string => {
    return new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }).format(typeof date === "string" ? new Date(date) : date);
};