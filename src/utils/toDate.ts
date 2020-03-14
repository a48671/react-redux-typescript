export const toDate: Function = (date: Date): string => {
    return new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }).format(date);
};